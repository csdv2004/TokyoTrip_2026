// Visual / itinerary enhancements kept separate from the core itinerary data.
// Synced with the Google Doc draft on 2026-08-21 while preserving later manual overrides.

function findDay(dayId) {
  return typeof tripDays === 'undefined' ? null : tripDays.find(day => day.id === dayId);
}

function findItem(day, matcher) {
  if (!day) return null;
  for (const section of day.sections) {
    const item = section.items.find(matcher);
    if (item) return item;
  }
  return null;
}

function addItemToSection(day, sectionMatcher, item, fallbackTitle) {
  if (!day) return false;
  const exists = day.sections.some(section =>
    section.items.some(existing => existing.name === item.name || existing.name.includes(item.name))
  );
  if (exists) return false;

  let section = day.sections.find(sectionMatcher);
  if (!section) {
    section = { title: fallbackTitle, items: [] };
    day.sections.push(section);
  }
  section.items.push(item);
  return true;
}

function insertSectionBefore(day, beforeMatcher, newSection) {
  if (!day) return false;
  const exists = day.sections.some(section =>
    section.items.some(item => newSection.items.some(newItem => item.name === newItem.name))
  );
  if (exists) return false;

  const index = day.sections.findIndex(beforeMatcher);
  if (index >= 0) day.sections.splice(index, 0, newSection);
  else day.sections.push(newSection);
  return true;
}

function syncDraftUpdates() {
  if (typeof tripDays === 'undefined') return false;
  let changed = false;

  // 8/21 原宿・澀谷：保留使用者後來另外加入的 Ikura，再同步草稿中的 BASO。
  const day0821 = findDay('0821');
  changed = addItemToSection(
    day0821,
    section => section.title.includes('原宿') || section.title.includes('順路可逛'),
    {
      time: '',
      name: 'BASO OMOTESANDO BASO 表参道',
      note: '表參道用餐／蕎麥麵候選',
      map: 'BASO OMOTESANDO BASO 表参道 Tokyo',
      priority: 'flex'
    },
    '🛍️ 原宿・表參道順路可逛'
  ) || changed;

  const ikuraExists = day0821?.sections.some(section =>
    section.items.some(item => item.name.includes('Ikura Shibuya') || item.name.includes('いくら渋谷店'))
  );
  if (day0821 && !ikuraExists) {
    const eveningIndex = day0821.sections.findIndex(section => section.title.includes('晚上'));
    const ikuraSection = {
      title: '🍳 澀谷用餐備選',
      items: [{
        time: '',
        name: 'Ikura Shibuya いくら渋谷店',
        note: '漢堡排＆蛋包飯｜澀谷用餐候選',
        map: 'Ikura Shibuya いくら渋谷店 東京都渋谷区円山町5-3 MIEUXビル1F',
        priority: 'flex'
      }]
    };
    if (eveningIndex >= 0) day0821.sections.splice(eveningIndex, 0, ikuraSection);
    else day0821.sections.push(ikuraSection);
    changed = true;
  }

  // 8/22 新宿：同步草稿新增的下午茶、伴手禮與拉麵候選，並補強 HANDS 備註。
  const day0822 = findDay('0822');
  const hands = findItem(day0822, item => item.name.includes('HANDS 新宿'));
  if (hands) {
    const newNote = '防災用品：完整防災包／收納袋／頭盔／保存食品／簡易廁所；推薦搜尋 防災バッグ／非常用持出袋／防災士監修';
    if (hands.note !== newNote) {
      hands.note = newNote;
      changed = true;
    }
  }
  changed = addItemToSection(
    day0822,
    section => section.title.includes('順路可逛'),
    {
      time: '',
      name: 'Afternoon Tea TEA ROOM 京王新宿店',
      note: '京王百貨店新宿店｜下午茶候選',
      map: 'Afternoon Tea TEA ROOM Keio Shinjuku',
      priority: 'flex'
    },
    '🛍️ 新宿順路可逛'
  ) || changed;
  changed = addItemToSection(
    day0822,
    section => section.title.includes('順路可逛'),
    {
      time: '',
      name: 'GATEAU FESTA HARADA 京王百貨新宿店',
      note: '伴手禮候選',
      map: 'GATEAU FESTA HARADA Keio Shinjuku',
      priority: 'flex'
    },
    '🛍️ 新宿順路可逛'
  ) || changed;
  changed = addItemToSection(
    day0822,
    section => section.title.includes('晚餐') || section.title.includes('夜景'),
    {
      time: '11:00–23:00',
      name: '駄目な隣人 新宿店',
      note: '拉麵用餐備選',
      map: '駄目な隣人 新宿店',
      priority: 'flex'
    },
    '🌙 晚餐／夜景'
  ) || changed;

  // 8/23 銀座：草稿改成 09:20 前往 BONGEN，並新增 Quil Fait Bon。
  const day0823 = findDay('0823');
  const bongen = findItem(day0823, item => item.name === 'BONGENCOFFEE Ginza');
  if (bongen) {
    if (bongen.time !== '09:20') {
      bongen.time = '09:20';
      changed = true;
    }
    const newNote = '10:00–17:00｜必去';
    if (bongen.note !== newNote) {
      bongen.note = newNote;
      changed = true;
    }
  }
  changed = addItemToSection(
    day0823,
    section => section.title.includes('銀座順路可逛'),
    {
      time: '',
      name: 'Quil Fait Bon 銀座',
      note: '水果塔／甜點候選',
      map: 'Quil Fait Bon Ginza Tokyo',
      priority: 'flex'
    },
    '🛍️ 銀座順路可逛'
  ) || changed;

  // 8/24 六本木：補 CHAVATY，並同步「城市觀景台可不看展、看周邊」備註。
  const day0824 = findDay('0824');
  const cityView = findItem(day0824, item => item.name.includes('東京城市觀景台'));
  if (cityView) {
    const newNote = '《藥屋少女的呢喃》× 東京城市觀景台｜52 樓｜可以不用看展，以觀景／周邊為主';
    if (cityView.note !== newNote) {
      cityView.note = newNote;
      changed = true;
    }
  }
  changed = addItemToSection(
    day0824,
    section => section.title.includes('六本木周邊'),
    {
      time: '',
      name: 'CHAVATY Omotesando CHAVATY 表参道',
      note: '茶飲／下午茶候選',
      map: 'CHAVATY Omotesando Tokyo',
      priority: 'flex'
    },
    '🌿 六本木周邊'
  ) || changed;

  // 8/25：草稿同時列兩個晚餐；以先出現的美登利作主要晚餐，AFURI 留作備選。
  const day0825 = findDay('0825');
  if (day0825) {
    const newRoute = ['飯店','川越','澀谷','代官山／中目黑','澀谷晚餐','新宿／飯店'];
    if (JSON.stringify(day0825.route) !== JSON.stringify(newRoute)) {
      day0825.route = newRoute;
      changed = true;
    }
  }
  changed = insertSectionBefore(
    day0825,
    section => section.title.includes('若還有時間') || section.title.includes('晚上'),
    {
      title: '🍣 晚餐｜澀谷',
      items: [{
        time: '',
        name: '梅丘壽司美登利 澀谷店 梅丘 寿司の美登利 渋谷店',
        note: '草稿主要晚餐安排',
        map: '梅丘 寿司の美登利 渋谷店',
        priority: 'must'
      }]
    }
  ) || changed;
  const afuri = findItem(day0825, item => item.name.includes('AFURI 新宿住友'));
  if (afuri) {
    if (afuri.priority !== 'flex') {
      afuri.priority = 'flex';
      changed = true;
    }
    if (afuri.note !== '晚餐備選') {
      afuri.note = '晚餐備選';
      changed = true;
    }
  }

  // 8/26：新增 eggslut 早餐。
  const day0826 = findDay('0826');
  if (day0826) {
    const newRoute = ['飯店','eggslut','明治神宮','新宿午餐','京王百貨','NRT 成田機場','TPE 桃園'];
    if (JSON.stringify(day0826.route) !== JSON.stringify(newRoute)) {
      day0826.route = newRoute;
      changed = true;
    }
  }
  const morning0826 = day0826?.sections.find(section => section.title.includes('上午'));
  const eggslutExists = day0826?.sections.some(section => section.items.some(item => item.name === 'eggslut'));
  if (morning0826 && !eggslutExists) {
    morning0826.items.unshift({
      time: '',
      name: 'eggslut',
      note: '早餐',
      map: 'eggslut Shinjuku Southern Terrace Tokyo',
      priority: 'must'
    });
    changed = true;
  }

  return changed;
}

function inferPurpose(name, note, sectionTitle) {
  const text = `${name} ${note} ${sectionTitle}`.toLowerCase();

  const rules = [
    {re:/eva air|br184|br197|成田|nrt|機場/, icon:'✈️', label:'航班／機場'},
    {re:/利木津|nex|前往|離開川越|移動|電車|車程/, icon:'🚆', label:'交通移動'},
    {re:/飯店|hotel sunroute/, icon:'🏨', label:'住宿'},
    {re:/冰川神社|明治神宮|出雲大社|神社|神宮/, icon:'⛩️', label:'神社參拜'},
    {re:/森美術館|國立新美術館|art museum|美術館/, icon:'🎨', label:'美術／展覽'},
    {re:/city view|展望|night & light|夜景/, icon:'🌃', label:'景觀／夜景'},
    {re:/毛利庭園|park|公園|garden|庭園/, icon:'🌿', label:'公園／散步'},
    {re:/bongen|verve|blue bottle|about life|starbucks|coffee|kenyan|咖啡/, icon:'☕', label:'咖啡休息'},
    {re:/chavaty|afternoon tea/, icon:'🫖', label:'茶飲／下午茶'},
    {re:/matcha|中村藤吉|抹茶/, icon:'🍵', label:'抹茶／甜點'},
    {re:/boul'ange|bricolage|麵包|bakery/, icon:'🥐', label:'麵包／早餐'},
    {re:/eggslut/, icon:'🍳', label:'早餐／蛋料理'},
    {re:/ikura|いくら渋谷|蛋包|おむらいす|漢堡排|はんばーぐ/, icon:'🍳', label:'漢堡排／蛋包飯'},
    {re:/鰻|うな富士/, icon:'🐟', label:'鰻魚料理'},
    {re:/焼肉|燒肉|肉縁|和牛|ushikawa|牛川/, icon:'🥩', label:'燒肉／和牛'},
    {re:/baso omotesando|baso 表参道/, icon:'🍜', label:'蕎麥麵／用餐'},
    {re:/afuri|篝|つけ麺|駄目な隣人|拉麵|ramen/, icon:'🍜', label:'拉麵／沾麵'},
    {re:/美登利|寿司の美登利|gonpachi nori|nori-temaki|壽司|寿司|生魚片/, icon:'🍣', label:'壽司／手卷'},
    {re:/sg low|æ - ash|cocktail|調酒/, icon:'🍸', label:'酒吧／晚間餐飲'},
    {re:/quil fait bon|dolce tacubo|治一郎|harada|布丁|pudding|甜點|蛋糕|菓匠|龜屋|ribisco/, icon:'🍰', label:'甜點／伴手禮'},
    {re:/hoka|\bon store\b|salomon|clifton|bondi|mafate/, icon:'👟', label:'鞋款／機能鞋'},
    {re:/jouete|ete |mikimoto|尾戒|飾品/, icon:'💍', label:'飾品／珠寶'},
    {re:/gentle monster|blue elephant/, icon:'🕶️', label:'眼鏡／配件'},
    {re:/北村相機|fujifilm|camera/, icon:'📷', label:'相機／攝影'},
    {re:/google store|biccamera/, icon:'📱', label:'3C／電子產品'},
    {re:/mont-bell|north face|chums|snow peak|patagonia|descente/, icon:'🎒', label:'戶外用品'},
    {re:/uniqlo|freak's|ships|hollywood ranch|okura|bshop|beams|united arrows|snidel|fray|mila owen|lily brown/, icon:'👕', label:'服飾／選物'},
    {re:/sanrio|kiddy land|lego/, icon:'🧸', label:'角色／玩具'},
    {re:/hands|loft|seria|3coins|dulton|212 kitchen|無印|muji/, icon:'🏠', label:'生活雜貨'},
    {re:/伊勢丹|高島屋|lumine|scramble square|miyashita|midtown|hills|百貨/, icon:'🏬', label:'商場／百貨'},
    {re:/唐吉訶德|don quijote/, icon:'🛒', label:'採買／伴手禮'},
    {re:/餐|午餐|晚餐|食|restaurant/, icon:'🍽️', label:'餐廳／用餐'}
  ];

  return rules.find(rule => rule.re.test(text)) || {icon:'📍', label:'景點／行程'};
}

function applyPurposeIcons() {
  document.querySelectorAll('.itinerary-section').forEach(section => {
    const sectionTitle = section.querySelector('.section-title')?.textContent || '';
    section.querySelectorAll('.place-card').forEach(card => {
      const heading = card.querySelector('.place-main h4');
      if (!heading || heading.querySelector('.item-purpose-icon')) return;
      const name = heading.textContent.trim();
      const note = card.querySelector('.place-main p')?.textContent || '';
      const purpose = inferPurpose(name, note, sectionTitle);

      heading.classList.add('place-heading');
      const icon = document.createElement('span');
      icon.className = 'item-purpose-icon';
      icon.textContent = purpose.icon;
      icon.title = purpose.label;
      icon.setAttribute('aria-label', purpose.label);
      heading.prepend(icon);
    });
  });
}

const draftWasUpdated = syncDraftUpdates();
if (draftWasUpdated && typeof renderDay === 'function') {
  const currentDayId = location.hash.replace('#', '') || '0821';
  renderDay(currentDayId, {scroll:false});
}

applyPurposeIcons();

const dayContentForEnhancements = document.querySelector('#dayContent');
if (dayContentForEnhancements) {
  const enhancementObserver = new MutationObserver(() => applyPurposeIcons());
  enhancementObserver.observe(dayContentForEnhancements, {childList:true, subtree:true});
}
