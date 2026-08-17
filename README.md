# TokyoTrip_2026

2026/08/21–08/26 東京旅行互動行程網站。

## 功能

- 每日行程分頁：8/21–8/26
- 手機／桌機 RWD
- 景點、餐廳、商店可直接開啟 Google Maps
- 不使用 Google Maps API，不需要 API Key
- 純 HTML / CSS / JavaScript，可直接用 GitHub Pages 免費發布

## GitHub Pages 發布

1. 進入此 repository 的 **Settings**。
2. 左側選單選 **Pages**。
3. `Build and deployment` → `Source` 選 **Deploy from a branch**。
4. Branch 選 **main**，資料夾選 **/(root)**。
5. 按 **Save**。
6. 等待約 1–3 分鐘，GitHub Pages 會顯示網站網址。

預期網址：

`https://csdv2004.github.io/TokyoTrip_2026/`

## 檔案

- `index.html`：網站框架
- `styles.css`：版面與 RWD 樣式
- `app.js`：每日行程資料、分頁功能及 Google Maps 連結

後續若要修改行程，主要編輯 `app.js` 即可。
