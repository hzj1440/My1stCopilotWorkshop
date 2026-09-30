# 待辦清單 Web App

![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

這是在 GitHub Copilot 實戰工作坊完成的待辦清單 Web App。它以原生網頁技術實作日常待辦管理，並透過深色模式、篩選與本機儲存，提供完整且可持續使用的操作體驗。

## 線上展示

https://<你的帳號>.github.io/<你的repo名稱>/

## 功能

- 新增待辦事項，空白內容不會送出。
- 勾選完成或取消完成；已完成項目會以刪除線和淡化樣式呈現。
- 刪除單筆待辦事項。
- 顯示整份清單的未完成項目數量，不受目前篩選條件影響。
- 依「全部」、「未完成」、「已完成」篩選待辦事項，並在篩選結果為空時顯示提示。
- 在淺色與深色模式間切換；手動選擇會保留，未手動選擇時則跟隨作業系統偏好。
- 使用瀏覽器 `localStorage` 保存待辦資料與手動選擇的主題。
- 採用響應式版面，支援手機螢幕。

## 技術

- 使用 HTML、CSS 與原生 JavaScript。
- 不使用前端框架或套件，不建立 `package.json`，也不引用外部 CDN。
- 使用 CSS 變數管理介面色彩，並以 `prefers-color-scheme` 偵測系統深淺色偏好。
- 使用瀏覽器 `localStorage` 保存資料與主題偏好。

## 開發方式

- 使用 GitHub Copilot Agent Mode 依照需求規劃並實作功能，再透過瀏覽器操作驗證行為。
- 在 `.vscode/mcp.json` 設定 Microsoft Learn MCP，並使用官方文件查詢工具查閱 `prefers-color-scheme` 與色彩對比建議；目前設定的 MCP Server 為 Microsoft Learn。
- 以 `.github/copilot-instructions.md` 記錄專案限制，並在 `.github/prompts/fix-issue.prompt.md` 定義可重複使用的 issue 工作流程，包含摘要、計畫確認、建立分支、修改、驗證、提交與 PR。
- Issue #3 的修正已提交並推送至 `fix/issue-3`；截至目前尚未建立 Pull Request。

## 我學到什麼

- 將使用者需求整理成明確範圍與可驗證的操作結果。
- 以 CSS 變數和系統偏好支援主題切換，並檢查不同色彩模式下的可讀性。
- 讓資料狀態、`localStorage` 與畫面呈現保持同步。
- 透過專案指引、可重複使用的 prompt 與人工確認點，讓 Agent Mode 的工作流程更清楚且可控。
