// 精確 Google Maps 連結覆寫表。
// 後續若取得店家分享連結，只要新增一筆即可，不需要改動主要行程資料。
const EXACT_MAP_LINKS = {
  'Google Store': 'https://maps.app.goo.gl/iVJYUib2Jd5hRAoTA'
};

// 小型行程覆寫：用於不必大改 app.js 的快速調整。
function applyTripOverrides() {
  if (typeof tripDays === 'undefined') return;

  tripDays.forEach(day => {
    day.sections.forEach(section => {
      section.items.forEach(item => {
        if (item.name === 'BONGENCOFFEE Ginza' || item.name === 'GENTLE MONSTER') {
          item.priority = 'must';
        }
      });
    });
  });
}

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

applyTripOverrides();

// app.js 已先完成初次 render；覆寫資料後重畫一次，讓必去標籤、篩選與總覽同步更新。
if (typeof renderDay === 'function') {
  const currentDayId = location.hash.replace('#', '') || '0821';
  renderDay(currentDayId, { scroll: false });
}

applyExactMapLinks();

const dayContentForMapLinks = document.querySelector('#dayContent');
if (dayContentForMapLinks) {
  const observer = new MutationObserver(applyExactMapLinks);
  observer.observe(dayContentForMapLinks, { childList: true, subtree: true });
}
