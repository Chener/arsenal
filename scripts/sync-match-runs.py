#!/usr/bin/env python3
"""把 Chener/arsenal-match 的 runs 同步进本仓库 data/match-runs/（构建时跑）。

用法: python3 scripts/sync-match-runs.py [--repo-root PATH]

- 经 ~/workspace/skills/github/bin/gh-api 读私有仓库（token 由 gh-api 经
  Secure Vault 在内存里处理，本脚本不接触、不打印、不落盘任何凭证）。
- 拷贝 runs/index.json 与 runs/*.json，原样保留内容，只加顶层 `_sync`
  元信息（synced_at / mesh_version 快照），不改业务字段。
- 站点是纯静态的：同步后 GitHub Pages 不需要任何运行时密钥。
"""
import argparse
import base64
import datetime
import json
import os
import subprocess
import sys

GH_API = os.path.expanduser("~/workspace/skills/github/bin/gh-api")
SRC_REPO = "Chener/arsenal-match"


def gh(path):
    p = subprocess.run([GH_API, "GET", f"/repos/{SRC_REPO}/contents/{path}"],
                       capture_output=True, text=True, timeout=60)
    if p.returncode != 0:
        raise SystemExit(f"gh-api 读取失败: {path}\n{p.stderr[:500]}")
    d = json.loads(p.stdout)
    if isinstance(d, dict) and d.get("type") == "file":
        return base64.b64decode(d["content"]).decode("utf-8")
    return d  # 目录 listing


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo-root", default=os.path.join(
        os.path.dirname(os.path.abspath(__file__)), ".."))
    args = ap.parse_args()
    root = os.path.abspath(args.repo_root)
    out = os.path.join(root, "data", "match-runs")
    runs_out = os.path.join(out, "runs")
    os.makedirs(runs_out, exist_ok=True)

    mv = json.load(open(os.path.join(root, "data", "mesh-version.json"), encoding="utf-8"))
    mesh_version = mv.get("version", "unknown")
    synced_at = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat()

    def stamp(text):
        obj = json.loads(text)
        obj["_sync"] = {"synced_at": synced_at, "mesh_version": mesh_version,
                        "source": f"{SRC_REPO}"}
        return json.dumps(obj, ensure_ascii=False, indent=1) + "\n"

    listing = gh("runs")
    files = [x["name"] for x in listing
             if x["type"] == "file" and x["name"].endswith(".json") and x["name"] != "index.json"]
    for name in sorted(files):
        body = gh(f"runs/{name}")
        with open(os.path.join(runs_out, name), "w", encoding="utf-8") as f:
            f.write(stamp(body))
        print(f"synced runs/{name}")

    idx = gh("runs/index.json")
    with open(os.path.join(out, "index.json"), "w", encoding="utf-8") as f:
        f.write(stamp(idx))
    print(f"synced index.json ({len(files)} run files, mesh {mesh_version})")


if __name__ == "__main__":
    main()
