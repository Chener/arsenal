# 军火库 Arsenal

muse bot 统一调度的可视化军火库：订阅、Harness、运行时、项目驱动方式与调度历史。

🌐 在线页面：https://chener.github.io/arsenal/

## 数据文件

- `data/subscriptions.json` —— 订阅与权益（未核验的一律标注"待核验"）
- `data/harness.json` —— 调度组件（入口、驱动器、能力插件）
- `data/runtimes.json` —— 执行器：厂商云 vs Tailnet 内
- `data/projects.json` —— 各项目的固定驱动方式
- `data/dispatch-log.json` —— 调度历史（由 muse bot 周期性同步）

页面为单文件 `index.html`（内联 CSS/JS，无构建步骤），数据变更后直接渲染。

公开页面，不含任何密钥、IP 地址、token。
