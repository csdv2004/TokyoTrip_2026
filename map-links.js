// 精確 Google Maps 連結覆寫表。
// 後續若取得店家分享連結，只要新增一筆即可，不需要改動主要行程資料。
const EXACT_MAP_LINKS = {
  'Google Store': 'https://maps.app.goo.gl/iVJYUib2Jd5hRAoTA'
};

function applyExactMapLinks() {
  document.querySelectorAll('.place-card').forEach(card => {
    const name = card.querySelector('.place-main h4')?.textContent.trim();
    const exactUrl = EXACT_MAP_LINKS[name];
    if (!exactUrl) return;

    const viewLink = card.querySelector('.card-actions .action-btn.secondary');
    if (viewLink) {
      viewLink.href = exactUrl;
      viewLink.title = '精確 Google Maps 店家連結';
    }
  });
}

applyExactMapLinks();

const dayContentForMapLinks = document.querySelector('#dayContent');
if (dayContentForMapLinks) {
  const observer = new MutationObserver(applyExactMapLinks);
  observer.observe(dayContentForMapLinks, { childList: true, subtree: true });
}
