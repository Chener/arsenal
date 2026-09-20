# scripts

## sync-match-runs.py
构建时把 `Chener/arsenal-match`（私有）的 runs 同步进本仓库 `data/match-runs/`，
让 GitHub Pages 站点自包含、无运行时密钥。

```bash
python3 scripts/sync-match-runs.py [--repo-root PATH]
```

- 经 `~/workspace/skills/github/bin/gh-api` 读私有仓库；token 由 gh-api 经 Secure Vault
  在内存处理，本脚本不接触、不打印、不落盘任何凭证。
- 拷贝 `runs/index.json` 与 `runs/*.json`，原样保留业务字段，只加顶层 `_sync`
 （`synced_at` / `mesh_version` 快照 / 来源仓库）。
- 跑完后把 `data/match-runs/` 的变更正常 commit 进本仓库即可。
