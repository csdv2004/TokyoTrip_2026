# TokyoTrip_2026

2026/08/21–08/26 東京旅行互動行程網站。

## 全程住宿

- **新宿燦路都廣場大飯店**（Hotel Sunroute Plaza Shinjuku）
- 網站首頁與每日總覽都有「查看飯店」及「導航回飯店」快捷按鈕。

## Phase 2 功能

- 每日行程分頁：8/21–8/26
- 手機／桌機 RWD
- 每日 **4:3 行程總覽卡**：顯示建議移動順序、固定／優先行程、完成度
- 行程分類：**★ 必去／固定**、**◇ 有時間再去**
- 快速篩選：全部／必去／有時間再去／未完成
- 每個行程可勾選完成，使用 `localStorage` 保存在目前裝置
- 景點、餐廳、商店分成：
  - `📍 查看`：開啟 Google Maps 地點搜尋
  - `🧭 導航`：直接開啟 Google Maps 路線規劃
- 每日都有「導航回飯店」
- 不使用 Google Maps API，不需要 API Key
- 純 HTML / CSS / JavaScript，可直接用 GitHub Pages 免費發布

## GitHub Pages 發布

1. 進入此 repository 的 **Settings**。
2. 左側選單選 **Pages**。
3. `Build and deployment` → `Source` 選 **Deploy from a branch**。
4. Branch 選 **main**，資料夾選 **/(root)**。
5. 按 **Save**。

預期網址：

`https://csdv2004.github.io/TokyoTrip_2026/`

## 檔案

- `index.html`：網站框架、飯店資訊、行前提醒
- `styles.css`：4:3 總覽、行程卡片、按鈕與 RWD
- `app.js`：每日行程資料、優先級、路線、Google Maps、完成勾選

## 修改行程

主要編輯 `app.js` 的 `tripDays`。

每個地點基本格式：

```js
{
  time: '11:00–20:00',
  name: '店家名稱',
  note: '備註',
  map: 'Google Maps 搜尋關鍵字',
  priority: 'must' // must = 必去／固定；flex = 有時間再去
}
```

每天的建議區域順序可修改 `route`：

```js
route: ['飯店', '原宿', '表參道', '澀谷', '飯店']
```

行程完成狀態只存在使用者自己的瀏覽器 `localStorage`，不會寫回 GitHub，也不會同步到其他裝置。
