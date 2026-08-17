const maps = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const tripDays = [
  {
    id:'0821', tab:'8/21 五', title:'8/21（五）原宿・澀谷', subtitle:'抵達東京後的原宿／表參道／澀谷散策日', badge:'DAY 1',
    sections:[
      {title:'✈️ 抵達東京', items:[
        {time:'07:55–12:25', name:'EVA Air 航班', note:'抵達東京'},
        {time:'13:00', name:'搭利木津巴士 or NEX 前往飯店', note:'先寄放行李'}
      ]},
      {title:'🍣 午餐', items:[
        {time:'15:00', name:'Gonpachi Nori-temaki Harajuku 権八 NORI-TEMAKI 原宿', note:'平日 15:00 前有商業午餐', map:'Gonpachi Nori-temaki Harajuku Tokyo'}
      ]},
      {title:'🛍️ 原宿・表參道・澀谷順路可逛', items:[
        {time:'11:00–20:00', name:'HOKA Harajuku', note:'建議試 Clifton／Bondi／Mafate；日本有些限定配色', map:'HOKA Harajuku Tokyo'},
        {time:'', name:'Google Store', map:'Google Store Shibuya Tokyo'},
        {time:'11:00–20:00', name:'blue elephant', map:'BLUE ELEPHANT Tokyo Harajuku'},
        {time:'11:00–20:00', name:'On Store Tokyo Cat Street', map:'On Store Tokyo Cat Street'},
        {time:'', name:'The Matcha Tokyo Omotesandō', note:'喝抹茶', map:'THE MATCHA TOKYO Omotesando'},
        {time:'11:00–20:00', name:'CHUMS 表參道店', map:'CHUMS Omotesando Tokyo'},
        {time:'11:00–20:00', name:'Kiddy Land 原宿店', map:'Kiddy Land Harajuku'},
        {time:'11:00–20:00', name:'3COINS 原宿旗艦店', map:'3COINS Harajuku Flagship Store'},
        {time:'11:00–20:00', name:'Salomon Store 東京澀谷店', map:'Salomon Store Tokyo Shibuya'},
        {time:'11:00–21:00', name:'THE NORTH FACE Mountain Shibuya', map:'THE NORTH FACE Mountain Shibuya'},
        {time:'11:00–20:00', name:'DULTON Jinnan Shop', map:'DULTON Jinnan Shop Tokyo'},
        {time:'', name:'Shibuya Kitaya Park', map:'Shibuya Kitaya Park Tokyo'}
      ]},
      {title:'🌙 晚上', items:[
        {time:'21:15', name:'SG LOW', note:'已訂位', map:'SG LOW Shibuya Tokyo'},
        {time:'11:30–22:00', name:'Kenyan Shibuya ケニヤン 渋谷店', map:'Kenyan Shibuya Tokyo'},
        {time:'11:00–23:00', name:'æ - ash', note:'咖啡調酒、可麗露', map:'ae ash Shibuya Tokyo'}
      ]}
    ]
  },
  {
    id:'0822', tab:'8/22 六', title:'8/22（六）新宿', subtitle:'新宿逛街／百貨／夜景日', badge:'DAY 2',
    sections:[
      {title:'☀️ 早餐／上午', items:[
        {time:'08:30', name:"BOUL'ANGE Shinjuku Southern Terrace", map:"BOUL'ANGE Shinjuku Southern Terrace"},
        {time:'07:00–22:00', name:'Verve Coffee Roasters NEWoMan Shinjuku Store', note:'咖啡', map:'Verve Coffee Roasters NEWoMan Shinjuku'},
        {time:'10:00', name:'HANDS 新宿店', note:'防災用品：防災バッグ／非常用持出袋／防災士監修', map:'Hands Shinjuku'},
        {time:'10:30', name:'新宿高島屋 On', map:'On Shinjuku Takashimaya'},
        {time:'11:00–21:00', name:'Jouete ルミネ新宿店', note:'買尾戒', map:'Jouete Lumine Shinjuku'}
      ]},
      {title:'🍱 午餐／百貨主軸', items:[
        {time:'10:00–20:00', name:'伊勢丹新宿', note:'日本設計師品牌／飾品／美妝／地下食品街 Depachika', map:'Isetan Shinjuku'}
      ]},
      {title:'🛍️ 順路可逛', items:[
        {time:'10:00–21:00', name:'北村相機店', map:'Kitamura Camera Shinjuku'},
        {time:'10:00–22:00', name:'BicCamera 新宿東口店', note:'買可以裝熱水的水壺', map:'BicCamera Shinjuku East Exit'},
        {time:'10:30–20:00', name:'Seria', map:'Seria Shinjuku Tokyo'},
        {time:'10:30–21:00', name:'LUMINE EST', note:'3COINS／SNIDEL／FRAY I.D.／Mila Owen／LILY BROWN／ete／Jouete', map:'Lumine EST Shinjuku'},
        {time:'10:00–21:00', name:'mont-bell 新宿南口店', map:'mont-bell Shinjuku South Exit'},
        {time:'', name:'Jiichiro 治一郎 ルミネ新宿店', map:'Jiichiro Lumine Shinjuku'}
      ]},
      {title:'🌙 晚餐／夜景', items:[
        {time:'', name:'Shinjuku no kemuri yakitori izakaya 新宿のけむり', note:'提燈／燈籠', map:'新宿のけむり'},
        {time:'11:00–21:00', name:'つけ麺 五ノ神製作所', note:'沾麵備選', map:'Tsukemen Gonokamiseisakusho Shinjuku'},
        {time:'09:30–17:00', name:'東京都廳 北展望室', map:'Tokyo Metropolitan Government Building North Observatory'},
        {time:'09:30–22:00', name:'東京都廳 南展望室', note:'免費', map:'Tokyo Metropolitan Government Building South Observatory'},
        {time:'19:00–21:45', name:'Tokyo Night & Light', map:'Tokyo Night & Light Tokyo Metropolitan Government Building'}
      ]}
    ]
  },
  {
    id:'0823', tab:'8/23 日', title:'8/23（日）銀座', subtitle:'銀座購物＋有樂町午餐日', badge:'DAY 3',
    sections:[
      {title:'☕ 上午／午餐', items:[
        {time:'09:20', name:'前往銀座'},
        {time:'10:00–17:00', name:'BONGENCOFFEE Ginza', map:'BONGEN COFFEE Ginza Tokyo'},
        {time:'11:30', name:'炭燒富士鰻魚 有樂町店', note:'已訂位', map:'炭焼 うな富士 有楽町店'}
      ]},
      {title:'🛍️ 銀座順路可逛', items:[
        {time:'11:00–20:00', name:'On Flagship Store Tokyo Ginza', map:'On Flagship Store Tokyo Ginza'},
        {time:'11:00–21:00', name:'UNIQLO Ginza Flagship Store', map:'UNIQLO Ginza'},
        {time:'11:00–19:00', name:'MIKIMOTO 御木本 銀座4丁目', map:'MIKIMOTO Ginza 4-chome'},
        {time:'10:30–19:30', name:'中村藤吉本店 銀座店', map:'Nakamura Tokichi Ginza'},
        {time:'11:00–20:00', name:'GENTLE MONSTER', map:'Gentle Monster Ginza Tokyo'},
        {time:'11:00–21:00', name:'無印良品 銀座旗艦店', map:'MUJI Ginza'},
        {time:'11:00–20:00', name:'Ginza Loft', map:'Ginza Loft'},
        {time:'11:00–20:00', name:'Sanrio NISHI GINZA店', map:'Sanrio Nishi Ginza'}
      ]},
      {title:'🥩 晚餐', items:[
        {time:'17:00–04:00', name:'Yakiniku Nikuen Shinjuku 肉縁 新宿歌舞伎町店', map:'焼肉 肉縁 新宿歌舞伎町店'}
      ]}
    ]
  },
  {
    id:'0824', tab:'8/24 一', title:'8/24（一）六本木', subtitle:'藝術展覽＋六本木周邊散策日', badge:'DAY 4',
    sections:[
      {title:'🥐 早餐／早上', items:[
        {time:'08:30', name:'bricolage bread & co.', map:'bricolage bread & co Roppongi'},
        {time:'08:00–20:00', name:'Blue Bottle Coffee 六本木店', note:'早餐備選', map:'Blue Bottle Coffee Roppongi'},
        {time:'11:00–22:00', name:'銀座 篝 六本木新城店', map:'Ginza Kagari Roppongi Hills'}
      ]},
      {title:'🎨 重點行程', items:[
        {time:'12:30–14:30', name:'森美術館', note:'Ron Mueck 個展｜六本木之丘森大廈 53 樓', map:'Mori Art Museum'},
        {time:'15:00–15:30', name:'東京城市觀景台', note:'《藥屋少女的呢喃》× 東京城市觀景台｜52 樓', map:'Tokyo City View Roppongi'}
      ]},
      {title:'🌿 六本木周邊', items:[
        {time:'11:00–20:00', name:'HOKA 六本木店', map:'HOKA Roppongi Tokyo'},
        {time:'', name:'毛利庭園', map:'Mori Garden Roppongi'},
        {time:'09:00–17:00', name:'出雲大社 東京分祠', map:'Izumo Taisha Tokyo Bunshi'},
        {time:'10:00–20:00', name:'國立新美術館', note:'大廳 free', map:'The National Art Center Tokyo'},
        {time:'10:00–19:00', name:'FUJIFILM SQUARE', note:'free', map:'FUJIFILM SQUARE Tokyo'},
        {time:'11:00–23:00', name:'東京中城 Tokyo Midtown', note:'Galleria／212 KITCHEN／中川政七商店／Bshop／THE COVER NIPPON', map:'Tokyo Midtown'},
        {time:'10:00–22:00', name:'六本木 Hills', note:'LEGO／書店／Beams／United Arrows', map:'Roppongi Hills'},
        {time:'', name:'ete Aoyama Main Store', map:'ete Aoyama Main Store'},
        {time:'', name:'Flying Tiger Copenhagen', note:'若太早結束', map:'Flying Tiger Copenhagen Omotesando Tokyo'}
      ]},
      {title:'🌙 晚餐', items:[
        {time:'20:30–22:30', name:'権八 西麻布', note:'已訂位｜#529891', map:'Gonpachi Nishi-Azabu'}
      ]}
    ]
  },
  {
    id:'0825', tab:'8/25 二', title:'8/25（二）川越・澀谷・代官山', subtitle:'川越半日＋下午澀谷／代官山散策', badge:'DAY 5',
    sections:[
      {title:'⛩️ 上午｜川越', items:[
        {time:'07:20', name:'川越冰川神社', note:'拿御守', map:'Kawagoe Hikawa Shrine'},
        {time:'09:00–18:00', name:'龜屋 川越本店', note:'最中／地瓜饅頭／季節羊羹／銅鑼燒', map:'Kameya Kawagoe Main Store'},
        {time:'10:00–17:30', name:'川越布丁', map:'Kawagoe Pudding'},
        {time:'10:00', name:'菓匠右門', note:'芋戀（いも恋）', map:'Kasho Umon Kawagoe'},
        {time:'', name:'Komeda’s Coffee 客美多', note:'休息', map:'Komeda Coffee Kawagoe'},
        {time:'11:20', name:'和牛ひつまぶし 川越うし川', note:'和牛三吃', map:'Kawagoe Ushikawa Wagyu Hitsumabushi'},
        {time:'11:00–17:00', name:'リビスコ 川越店', note:'冰淇淋', map:'Ribisco Kawagoe'},
        {time:'12:30–13:00', name:'預計離開川越', note:'車程約 1hr40min'}
      ]},
      {title:'🏙️ 下午｜澀谷', items:[
        {time:'', name:'MIYASHITA PARK 宮下公園', note:'約 1 小時｜Snow Peak／THE NORTH FACE／DESCENTE／KITH／Patagonia／CHUMS／THE MATCHA TOKYO', map:'MIYASHITA PARK Tokyo'},
        {time:'', name:'ABOUT LIFE COFFEE BREWERS 渋谷一丁目店', map:'ABOUT LIFE COFFEE BREWERS Shibuya 1-chome'},
        {time:'', name:'SHIBUYA SCRAMBLE SQUARE', note:'地下美食買甜點、伴手禮', map:'Shibuya Scramble Square'},
        {time:'', name:'MEGA 唐吉訶德 澀谷本店', note:'限定零食、伴手禮較齊', map:'MEGA Don Quijote Shibuya'},
        {time:'', name:"FREAK'S STORE", map:"FREAK'S STORE Shibuya"},
        {time:'', name:'SHIPS', map:'SHIPS Shibuya Tokyo'}
      ]},
      {title:'🌿 代官山／中目黑（可彈性）', items:[
        {time:'11:00–19:00', name:'DOLCE TACUBO', note:'可以先預訂', map:'DOLCE TACUBO Daikanyama'},
        {time:'', name:'周杰倫坐過的欄杆', note:"35°38'56.2\"N 139°42'04.2\"E", map:'35.6489444,139.7011667'},
        {time:'11:00–20:00', name:'Okura', map:'Okura Daikanyama Tokyo'},
        {time:'11:00–20:00', name:'Hollywood Ranch Market', map:'Hollywood Ranch Market Tokyo'},
        {time:'07:00–22:00', name:'STARBUCKS RESERVE® ROASTERY TOKYO', note:'4–5 點光線不錯', map:'Starbucks Reserve Roastery Tokyo'}
      ]},
      {title:'🌙 若還有時間／晚上', items:[
        {time:'', name:'東京都廳展望室', note:'北 09:30–17:00／南 09:30–22:00，免費', map:'Tokyo Metropolitan Government Building Observation Deck'},
        {time:'11:00–20:00', name:'AFURI 新宿住友大廈', map:'AFURI Shinjuku Sumitomo Building'}
      ]}
    ]
  },
  {
    id:'0826', tab:'8/26 三', title:'8/26（三）返程日', subtitle:'東京最後半日＋回程', badge:'DAY 6',
    sections:[
      {title:'⛩️ 上午', items:[
        {time:'', name:'明治神宮', map:'Meiji Jingu Tokyo'},
        {time:'', name:'六歌仙 西口本店', note:'商業午餐', map:'Rokkasen Shinjuku West Exit'},
        {time:'', name:'GATEAU FESTA HARADA 京王百貨新宿店', note:'老虎紅絲絨蛋糕【東京限定】', map:'GATEAU FESTA HARADA Keio Shinjuku'}
      ]},
      {title:'✈️ 回程', items:[
        {time:'14:25–17:05', name:'搭機返台'}
      ]},
      {title:'🍽️ 本趟想吃清單', items:[
        {time:'', name:'燒肉・鰻魚・壽喜燒・拉麵・生魚片壽司・吉野家'}
      ]}
    ]
  }
];

const tabsEl = document.querySelector('#dayTabs');
const contentEl = document.querySelector('#dayContent');

function renderTabs(activeId){
  tabsEl.innerHTML = tripDays.map(d => `<button class="day-tab ${d.id===activeId?'active':''}" data-day="${d.id}">${d.tab}</button>`).join('');
}
function renderDay(id){
  const d = tripDays.find(x=>x.id===id) || tripDays[0];
  renderTabs(d.id);
  contentEl.innerHTML = `
    <header class="day-header">
      <div><h2>${d.title}</h2><p>${d.subtitle}</p></div>
      <span class="day-badge">${d.badge}</span>
    </header>
    <div class="sections">
      ${d.sections.map(section => `
        <article class="itinerary-section">
          <h3 class="section-title">${section.title}</h3>
          <div class="place-list">
            ${section.items.map(item => `
              <div class="place-card">
                <div class="place-time">${item.time || '—'}</div>
                <div class="place-main">
                  <h4>${item.name}</h4>
                  ${item.note ? `<p>${item.note}</p>` : ''}
                </div>
                ${item.map ? `<a class="map-link" target="_blank" rel="noopener noreferrer" href="${maps(item.map)}" aria-label="在 Google Maps 開啟 ${item.name}">📍 Google Maps</a>` : `<span class="no-map">行程資訊</span>`}
              </div>`).join('')}
          </div>
        </article>`).join('')}
    </div>`;
  history.replaceState(null,'',`#${d.id}`);
  window.scrollTo({top:Math.max(0,tabsEl.offsetTop-8),behavior:'smooth'});
}

tabsEl.addEventListener('click',e=>{
  const btn=e.target.closest('[data-day]');
  if(btn) renderDay(btn.dataset.day);
});

const initial = location.hash.replace('#','');
renderDay(tripDays.some(d=>d.id===initial) ? initial : '0821');
