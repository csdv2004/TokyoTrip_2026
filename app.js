const maps = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const directions = q => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

const HOTEL = {
  name: '新宿燦路都廣場大飯店',
  en: 'Hotel Sunroute Plaza Shinjuku',
  map: 'Hotel Sunroute Plaza Shinjuku'
};

const tripDays = [
  {
    id:'0821', tab:'8/21 五', title:'8/21（五）原宿・澀谷', subtitle:'抵達東京後的原宿／表參道／澀谷散策日', badge:'DAY 1',
    route:['機場','新宿飯店','原宿','Cat Street','表參道','神南','澀谷','飯店'],
    sections:[
      {title:'✈️ 抵達東京', items:[
        {time:'07:55–12:25', name:'EVA Air 航班', note:'抵達東京', priority:'must'},
        {time:'13:00', name:'搭利木津巴士 or NEX 前往飯店', note:`先到 ${HOTEL.name} 寄放行李`, priority:'must', map:HOTEL.map}
      ]},
      {title:'🍣 午餐', items:[
        {time:'15:00', name:'Gonpachi Nori-temaki Harajuku 権八 NORI-TEMAKI 原宿', note:'平日 15:00 前有商業午餐', map:'Gonpachi Nori-temaki Harajuku Tokyo', priority:'must'}
      ]},
      {title:'🛍️ 原宿・表參道・澀谷順路可逛', items:[
        {time:'11:00–20:00', name:'HOKA Harajuku', note:'建議試 Clifton／Bondi／Mafate；日本有些限定配色', map:'HOKA Harajuku Tokyo', priority:'flex'},
        {time:'', name:'Google Store', map:'Google Store Shibuya Tokyo', priority:'flex'},
        {time:'11:00–20:00', name:'blue elephant', map:'BLUE ELEPHANT Tokyo Harajuku', priority:'flex'},
        {time:'11:00–20:00', name:'On Store Tokyo Cat Street', map:'On Store Tokyo Cat Street', priority:'flex'},
        {time:'', name:'The Matcha Tokyo Omotesandō', note:'喝抹茶', map:'THE MATCHA TOKYO Omotesando', priority:'flex'},
        {time:'11:00–20:00', name:'CHUMS 表參道店', map:'CHUMS Omotesando Tokyo', priority:'flex'},
        {time:'11:00–20:00', name:'Kiddy Land 原宿店', map:'Kiddy Land Harajuku', priority:'flex'},
        {time:'11:00–20:00', name:'3COINS 原宿旗艦店', map:'3COINS Harajuku Flagship Store', priority:'flex'},
        {time:'11:00–20:00', name:'Salomon Store 東京澀谷店', map:'Salomon Store Tokyo Shibuya', priority:'flex'},
        {time:'11:00–21:00', name:'THE NORTH FACE Mountain Shibuya', map:'THE NORTH FACE Mountain Shibuya', priority:'flex'},
        {time:'11:00–20:00', name:'DULTON Jinnan Shop', map:'DULTON Jinnan Shop Tokyo', priority:'flex'},
        {time:'', name:'Shibuya Kitaya Park', map:'Shibuya Kitaya Park Tokyo', priority:'flex'}
      ]},
      {title:'🌙 晚上', items:[
        {time:'21:15', name:'SG LOW', note:'已訂位', map:'SG LOW Shibuya Tokyo', priority:'must'},
        {time:'11:30–22:00', name:'Kenyan Shibuya ケニヤン 渋谷店', map:'Kenyan Shibuya Tokyo', priority:'flex'},
        {time:'11:00–23:00', name:'æ - ash', note:'咖啡調酒、可麗露', map:'ae ash Shibuya Tokyo', priority:'flex'}
      ]}
    ]
  },
  {
    id:'0822', tab:'8/22 六', title:'8/22（六）新宿', subtitle:'新宿逛街／百貨／夜景日', badge:'DAY 2',
    route:['飯店','新宿南口','高島屋／NEWoMan','伊勢丹／東口','東京都廳','飯店'],
    sections:[
      {title:'☀️ 早餐／上午', items:[
        {time:'08:30', name:"BOUL'ANGE Shinjuku Southern Terrace", map:"BOUL'ANGE Shinjuku Southern Terrace", priority:'must'},
        {time:'07:00–22:00', name:'Verve Coffee Roasters NEWoMan Shinjuku Store', note:'咖啡', map:'Verve Coffee Roasters NEWoMan Shinjuku', priority:'flex'},
        {time:'10:00', name:'HANDS 新宿店', note:'防災用品：防災バッグ／非常用持出袋／防災士監修', map:'Hands Shinjuku', priority:'must'},
        {time:'10:30', name:'新宿高島屋 On', map:'On Shinjuku Takashimaya', priority:'flex'},
        {time:'11:00–21:00', name:'Jouete ルミネ新宿店', note:'買尾戒', map:'Jouete Lumine Shinjuku', priority:'must'}
      ]},
      {title:'🍱 午餐／百貨主軸', items:[
        {time:'10:00–20:00', name:'伊勢丹新宿', note:'日本設計師品牌／飾品／美妝／地下食品街 Depachika', map:'Isetan Shinjuku', priority:'must'}
      ]},
      {title:'🛍️ 順路可逛', items:[
        {time:'10:00–21:00', name:'北村相機店', map:'Kitamura Camera Shinjuku', priority:'flex'},
        {time:'10:00–22:00', name:'BicCamera 新宿東口店', note:'買可以裝熱水的水壺', map:'BicCamera Shinjuku East Exit', priority:'flex'},
        {time:'10:30–20:00', name:'Seria', map:'Seria Shinjuku Tokyo', priority:'flex'},
        {time:'10:30–21:00', name:'LUMINE EST', note:'3COINS／SNIDEL／FRAY I.D.／Mila Owen／LILY BROWN／ete／Jouete', map:'Lumine EST Shinjuku', priority:'flex'},
        {time:'10:00–21:00', name:'mont-bell 新宿南口店', map:'mont-bell Shinjuku South Exit', priority:'flex'},
        {time:'', name:'Jiichiro 治一郎 ルミネ新宿店', map:'Jiichiro Lumine Shinjuku', priority:'flex'}
      ]},
      {title:'🌙 晚餐／夜景', items:[
        {time:'', name:'Shinjuku no kemuri yakitori izakaya 新宿のけむり', note:'提燈／燈籠', map:'新宿のけむり', priority:'must'},
        {time:'11:00–21:00', name:'つけ麺 五ノ神製作所', note:'沾麵備選', map:'Tsukemen Gonokamiseisakusho Shinjuku', priority:'flex'},
        {time:'09:30–17:00', name:'東京都廳 北展望室', map:'Tokyo Metropolitan Government Building North Observatory', priority:'flex'},
        {time:'09:30–22:00', name:'東京都廳 南展望室', note:'免費', map:'Tokyo Metropolitan Government Building South Observatory', priority:'must'},
        {time:'19:00–21:45', name:'Tokyo Night & Light', map:'Tokyo Night & Light Tokyo Metropolitan Government Building', priority:'must'}
      ]}
    ]
  },
  {
    id:'0823', tab:'8/23 日', title:'8/23（日）銀座', subtitle:'銀座購物＋有樂町午餐日', badge:'DAY 3',
    route:['飯店','銀座','有樂町','銀座四丁目','西銀座','新宿晚餐','飯店'],
    sections:[
      {title:'☕ 上午／午餐', items:[
        {time:'09:20', name:'前往銀座', priority:'must'},
        {time:'10:00–17:00', name:'BONGENCOFFEE Ginza', map:'BONGEN COFFEE Ginza Tokyo', priority:'flex'},
        {time:'11:30', name:'炭燒富士鰻魚 有樂町店', note:'已訂位', map:'炭焼 うな富士 有楽町店', priority:'must'}
      ]},
      {title:'🛍️ 銀座順路可逛', items:[
        {time:'11:00–20:00', name:'On Flagship Store Tokyo Ginza', map:'On Flagship Store Tokyo Ginza', priority:'flex'},
        {time:'11:00–21:00', name:'UNIQLO Ginza Flagship Store', map:'UNIQLO Ginza', priority:'flex'},
        {time:'11:00–19:00', name:'MIKIMOTO 御木本 銀座4丁目', map:'MIKIMOTO Ginza 4-chome', priority:'flex'},
        {time:'10:30–19:30', name:'中村藤吉本店 銀座店', map:'Nakamura Tokichi Ginza', priority:'flex'},
        {time:'11:00–20:00', name:'GENTLE MONSTER', map:'Gentle Monster Ginza Tokyo', priority:'flex'},
        {time:'11:00–21:00', name:'無印良品 銀座旗艦店', map:'MUJI Ginza', priority:'must'},
        {time:'11:00–20:00', name:'Ginza Loft', map:'Ginza Loft', priority:'flex'},
        {time:'11:00–20:00', name:'Sanrio NISHI GINZA店', map:'Sanrio Nishi Ginza', priority:'flex'}
      ]},
      {title:'🥩 晚餐', items:[
        {time:'17:00–04:00', name:'Yakiniku Nikuen Shinjuku 肉縁 新宿歌舞伎町店', map:'焼肉 肉縁 新宿歌舞伎町店', priority:'must'}
      ]}
    ]
  },
  {
    id:'0824', tab:'8/24 一', title:'8/24（一）六本木', subtitle:'藝術展覽＋六本木周邊散策日', badge:'DAY 4',
    route:['飯店','六本木 Hills','森美術館','東京中城','西麻布','飯店'],
    sections:[
      {title:'🥐 早餐／早上', items:[
        {time:'08:30', name:'bricolage bread & co.', map:'bricolage bread & co Roppongi', priority:'must'},
        {time:'08:00–20:00', name:'Blue Bottle Coffee 六本木店', note:'早餐備選', map:'Blue Bottle Coffee Roppongi', priority:'flex'},
        {time:'11:00–22:00', name:'銀座 篝 六本木新城店', map:'Ginza Kagari Roppongi Hills', priority:'must'}
      ]},
      {title:'🎨 重點行程', items:[
        {time:'12:30–14:30', name:'森美術館', note:'Ron Mueck 個展｜六本木之丘森大廈 53 樓', map:'Mori Art Museum', priority:'must'},
        {time:'15:00–15:30', name:'東京城市觀景台', note:'《藥屋少女的呢喃》× 東京城市觀景台｜52 樓', map:'Tokyo City View Roppongi', priority:'must'}
      ]},
      {title:'🌿 六本木周邊', items:[
        {time:'11:00–20:00', name:'HOKA 六本木店', map:'HOKA Roppongi Tokyo', priority:'flex'},
        {time:'', name:'毛利庭園', map:'Mori Garden Roppongi', priority:'flex'},
        {time:'09:00–17:00', name:'出雲大社 東京分祠', map:'Izumo Taisha Tokyo Bunshi', priority:'flex'},
        {time:'10:00–20:00', name:'國立新美術館', note:'大廳 free', map:'The National Art Center Tokyo', priority:'flex'},
        {time:'10:00–19:00', name:'FUJIFILM SQUARE', note:'free', map:'FUJIFILM SQUARE Tokyo', priority:'flex'},
        {time:'11:00–23:00', name:'東京中城 Tokyo Midtown', note:'Galleria／212 KITCHEN／中川政七商店／Bshop／THE COVER NIPPON', map:'Tokyo Midtown', priority:'flex'},
        {time:'10:00–22:00', name:'六本木 Hills', note:'LEGO／書店／Beams／United Arrows', map:'Roppongi Hills', priority:'flex'},
        {time:'', name:'ete Aoyama Main Store', map:'ete Aoyama Main Store', priority:'flex'},
        {time:'', name:'Flying Tiger Copenhagen', note:'若太早結束', map:'Flying Tiger Copenhagen Omotesando Tokyo', priority:'flex'}
      ]},
      {title:'🌙 晚餐', items:[
        {time:'20:30–22:30', name:'権八 西麻布', note:'已訂位｜#529891', map:'Gonpachi Nishi-Azabu', priority:'must'}
      ]}
    ]
  },
  {
    id:'0825', tab:'8/25 二', title:'8/25（二）川越・澀谷・代官山', subtitle:'川越半日＋下午澀谷／代官山散策', badge:'DAY 5',
    route:['飯店','川越','澀谷','代官山／中目黑','新宿','飯店'],
    sections:[
      {title:'⛩️ 上午｜川越', items:[
        {time:'07:20', name:'川越冰川神社', note:'拿御守', map:'Kawagoe Hikawa Shrine', priority:'must'},
        {time:'09:00–18:00', name:'龜屋 川越本店', note:'最中／地瓜饅頭／季節羊羹／銅鑼燒', map:'Kameya Kawagoe Main Store', priority:'flex'},
        {time:'10:00–17:30', name:'川越布丁', map:'Kawagoe Pudding', priority:'flex'},
        {time:'10:00', name:'菓匠右門', note:'芋戀（いも恋）', map:'Kasho Umon Kawagoe', priority:'must'},
        {time:'', name:'Komeda’s Coffee 客美多', note:'休息', map:'Komeda Coffee Kawagoe', priority:'flex'},
        {time:'11:20', name:'和牛ひつまぶし 川越うし川', note:'和牛三吃', map:'Kawagoe Ushikawa Wagyu Hitsumabushi', priority:'must'},
        {time:'11:00–17:00', name:'リビスコ 川越店', note:'冰淇淋', map:'Ribisco Kawagoe', priority:'flex'},
        {time:'12:30–13:00', name:'預計離開川越', note:'車程約 1hr40min', priority:'must'}
      ]},
      {title:'🏙️ 下午｜澀谷', items:[
        {time:'', name:'MIYASHITA PARK 宮下公園', note:'約 1 小時｜Snow Peak／THE NORTH FACE／DESCENTE／KITH／Patagonia／CHUMS／THE MATCHA TOKYO', map:'MIYASHITA PARK Tokyo', priority:'must'},
        {time:'', name:'ABOUT LIFE COFFEE BREWERS 渋谷一丁目店', map:'ABOUT LIFE COFFEE BREWERS Shibuya 1-chome', priority:'flex'},
        {time:'', name:'SHIBUYA SCRAMBLE SQUARE', note:'地下美食買甜點、伴手禮', map:'Shibuya Scramble Square', priority:'flex'},
        {time:'', name:'MEGA 唐吉訶德 澀谷本店', note:'限定零食、伴手禮較齊', map:'MEGA Don Quijote Shibuya', priority:'flex'},
        {time:'', name:"FREAK'S STORE", map:"FREAK'S STORE Shibuya", priority:'flex'},
        {time:'', name:'SHIPS', map:'SHIPS Shibuya Tokyo', priority:'flex'}
      ]},
      {title:'🌿 代官山／中目黑（可彈性）', items:[
        {time:'11:00–19:00', name:'DOLCE TACUBO', note:'可以先預訂', map:'DOLCE TACUBO Daikanyama', priority:'flex'},
        {time:'', name:'周杰倫坐過的欄杆', note:"35°38'56.2\"N 139°42'04.2\"E", map:'35.6489444,139.7011667', priority:'flex'},
        {time:'11:00–20:00', name:'Okura', map:'Okura Daikanyama Tokyo', priority:'flex'},
        {time:'11:00–20:00', name:'Hollywood Ranch Market', map:'Hollywood Ranch Market Tokyo', priority:'flex'},
        {time:'07:00–22:00', name:'STARBUCKS RESERVE® ROASTERY TOKYO', note:'4–5 點光線不錯', map:'Starbucks Reserve Roastery Tokyo', priority:'must'}
      ]},
      {title:'🌙 若還有時間／晚上', items:[
        {time:'', name:'東京都廳展望室', note:'北 09:30–17:00／南 09:30–22:00，免費', map:'Tokyo Metropolitan Government Building Observation Deck', priority:'flex'},
        {time:'11:00–20:00', name:'AFURI 新宿住友大廈', map:'AFURI Shinjuku Sumitomo Building', priority:'must'}
      ]}
    ]
  },
  {
    id:'0826', tab:'8/26 三', title:'8/26（三）返程日', subtitle:'東京最後半日＋回程', badge:'DAY 6',
    route:['飯店','明治神宮','新宿午餐','京王百貨','機場'],
    sections:[
      {title:'⛩️ 上午', items:[
        {time:'', name:'明治神宮', map:'Meiji Jingu Tokyo', priority:'must'},
        {time:'', name:'六歌仙 西口本店', note:'商業午餐', map:'Rokkasen Shinjuku West Exit', priority:'must'},
        {time:'', name:'GATEAU FESTA HARADA 京王百貨新宿店', note:'老虎紅絲絨蛋糕【東京限定】', map:'GATEAU FESTA HARADA Keio Shinjuku', priority:'must'}
      ]},
      {title:'✈️ 回程', items:[
        {time:'14:25–17:05', name:'搭機返台', priority:'must'}
      ]},
      {title:'🍽️ 本趟想吃清單', items:[
        {time:'', name:'燒肉・鰻魚・壽喜燒・拉麵・生魚片壽司・吉野家', priority:'flex'}
      ]}
    ]
  }
];

const tabsEl = document.querySelector('#dayTabs');
const contentEl = document.querySelector('#dayContent');
const STORAGE_KEY = 'tokyoTrip2026.completed.v1';
let currentFilter = 'all';

function getCompleted(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}
function setCompleted(data){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function itemKey(dayId, sectionIndex, itemIndex){
  return `${dayId}-${sectionIndex}-${itemIndex}`;
}
function priorityLabel(priority){
  if(priority === 'must') return '<span class="priority-tag must">★ 必去／固定</span>';
  return '<span class="priority-tag flex">◇ 有時間再去</span>';
}
function filterMatches(item, key, completed){
  if(currentFilter === 'must') return item.priority === 'must';
  if(currentFilter === 'flex') return item.priority !== 'must';
  if(currentFilter === 'todo') return !completed[key];
  return true;
}
function dayStats(day){
  const completed = getCompleted();
  let total = 0;
  let done = 0;
  day.sections.forEach((section, si) => section.items.forEach((item, ii) => {
    total += 1;
    if(completed[itemKey(day.id, si, ii)]) done += 1;
  }));
  return {total, done, percent: total ? Math.round(done / total * 100) : 0};
}
function mustItems(day){
  return day.sections.flatMap(s => s.items).filter(i => i.priority === 'must').slice(0, 5);
}
function renderTabs(activeId){
  tabsEl.innerHTML = tripDays.map(d => `<button class="day-tab ${d.id===activeId?'active':''}" data-day="${d.id}">${d.tab}</button>`).join('');
}
function renderOverview(day){
  const stats = dayStats(day);
  const must = mustItems(day);
  return `
    <section class="overview-card" aria-label="${day.title} 4比3行程總覽">
      <div class="overview-top">
        <div>
          <div class="overview-label">4:3 DAILY OVERVIEW</div>
          <h3>${day.title.replace(/^8\/\d+（.）/, '')}</h3>
        </div>
        <div class="progress-wrap">
          <span class="progress-label">今日完成度</span>
          <strong class="progress-value">${stats.done}/${stats.total}</strong>
          <div class="progress-bar" aria-label="完成 ${stats.percent}%"><span style="width:${stats.percent}%"></span></div>
        </div>
      </div>
      <div class="overview-body">
        <div class="route-block">
          <h4>建議移動順序</h4>
          <div class="route-line">${day.route.map((r,i)=>`${i ? '<span>→</span>' : ''}${r}`).join(' ')}</div>
        </div>
        <div class="must-block">
          <h4>今日固定／優先</h4>
          <ul class="must-list">${must.map(i=>`<li>${i.time ? `${i.time}｜` : ''}${i.name}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="overview-actions">
        <a class="action-btn secondary" target="_blank" rel="noopener noreferrer" href="${maps(HOTEL.map)}">📍 飯店</a>
        <a class="action-btn primary" target="_blank" rel="noopener noreferrer" href="${directions(HOTEL.map)}">🏨 導航回飯店</a>
        <span class="overview-hotel">住宿：${HOTEL.name}</span>
      </div>
    </section>`;
}
function renderDay(id, options={scroll:true}){
  const d = tripDays.find(x=>x.id===id) || tripDays[0];
  const completed = getCompleted();
  renderTabs(d.id);
  contentEl.innerHTML = `
    <header class="day-header">
      <div><h2>${d.title}</h2><p>${d.subtitle}</p></div>
      <span class="day-badge">${d.badge}</span>
    </header>
    ${renderOverview(d)}
    <div class="day-toolbar">
      <div class="filter-group" aria-label="行程篩選">
        <button class="filter-btn ${currentFilter==='all'?'active':''}" data-filter="all">全部</button>
        <button class="filter-btn ${currentFilter==='must'?'active':''}" data-filter="must">★ 必去／固定</button>
        <button class="filter-btn ${currentFilter==='flex'?'active':''}" data-filter="flex">◇ 有時間再去</button>
        <button class="filter-btn ${currentFilter==='todo'?'active':''}" data-filter="todo">未完成</button>
      </div>
      <span class="toolbar-note">✓ 勾選會自動儲存在目前裝置</span>
    </div>
    <div class="sections">
      ${d.sections.map((section, si) => `
        <article class="itinerary-section">
          <h3 class="section-title">${section.title}</h3>
          <div class="place-list">
            ${section.items.map((item, ii) => {
              const key = itemKey(d.id, si, ii);
              const isDone = !!completed[key];
              const hidden = !filterMatches(item, key, completed);
              return `
                <div class="place-card ${isDone?'is-complete':''} ${hidden?'is-hidden':''}" data-key="${key}">
                  <button class="complete-check ${isDone?'checked':''}" data-complete="${key}" aria-label="${isDone?'取消完成':'標記完成'} ${item.name}" aria-pressed="${isDone}">${isDone?'✓':''}</button>
                  <div class="place-time">${item.time || '—'}</div>
                  <div class="place-main">
                    <h4>${item.name}</h4>
                    ${item.note ? `<p>${item.note}</p>` : ''}
                    <div class="meta-row">${priorityLabel(item.priority)}${item.note && /已訂位|#529891/.test(item.note) ? '<span class="note-tag">已確認</span>' : ''}</div>
                  </div>
                  ${item.map ? `
                    <div class="card-actions">
                      <a class="action-btn secondary" target="_blank" rel="noopener noreferrer" href="${maps(item.map)}" aria-label="查看 ${item.name}">📍 查看</a>
                      <a class="action-btn primary" target="_blank" rel="noopener noreferrer" href="${directions(item.map)}" aria-label="導航前往 ${item.name}">🧭 導航</a>
                    </div>` : `<span class="no-map">行程資訊</span>`}
                </div>`;
            }).join('')}
          </div>
        </article>`).join('')}
    </div>`;
  history.replaceState(null,'',`#${d.id}`);
  if(options.scroll) window.scrollTo({top:Math.max(0,tabsEl.offsetTop-8),behavior:'smooth'});
}

tabsEl.addEventListener('click',e=>{
  const btn=e.target.closest('[data-day]');
  if(btn){
    currentFilter = 'all';
    renderDay(btn.dataset.day);
  }
});

contentEl.addEventListener('click', e => {
  const filterBtn = e.target.closest('[data-filter]');
  if(filterBtn){
    currentFilter = filterBtn.dataset.filter;
    renderDay(location.hash.replace('#','') || '0821', {scroll:false});
    return;
  }
  const check = e.target.closest('[data-complete]');
  if(check){
    const completed = getCompleted();
    const key = check.dataset.complete;
    completed[key] = !completed[key];
    if(!completed[key]) delete completed[key];
    setCompleted(completed);
    renderDay(location.hash.replace('#','') || '0821', {scroll:false});
  }
});

window.addEventListener('hashchange', () => {
  const id = location.hash.replace('#','');
  if(tripDays.some(d=>d.id===id)){
    currentFilter = 'all';
    renderDay(id, {scroll:false});
  }
});

const initial = location.hash.replace('#','');
renderDay(tripDays.some(d=>d.id===initial) ? initial : '0821', {scroll:false});
