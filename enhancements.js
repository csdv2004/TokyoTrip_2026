// Visual / itinerary enhancements kept separate from the core itinerary data.
// This file adds flexible candidate stops and automatically decorates itinerary cards with purpose icons.

function addIkuraShibuyaCandidate() {
  if (typeof tripDays === 'undefined') return false;
  const shibuyaDay = tripDays.find(day => day.id === '0821');
  if (!shibuyaDay) return false;

  const alreadyExists = shibuyaDay.sections.some(section =>
    section.items.some(item => item.name.includes('Ikura Shibuya') || item.name.includes('いくら渋谷店'))
  );
  if (alreadyExists) return false;

  const eveningIndex = shibuyaDay.sections.findIndex(section => section.title.includes('晚上'));
  const candidateSection = {
    title: '🍳 澀谷用餐備選',
    items: [
      {
        time: '',
        name: 'Ikura Shibuya いくら渋谷店',
        note: '漢堡排＆蛋包飯｜澀谷用餐候選',
        map: 'Ikura Shibuya いくら渋谷店 東京都渋谷区円山町5-3 MIEUXビル1F',
        priority: 'flex'
      }
    ]
  };

  if (eveningIndex >= 0) shibuyaDay.sections.splice(eveningIndex, 0, candidateSection);
  else shibuyaDay.sections.push(candidateSection);
  return true;
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
    {re:/matcha|中村藤吉|抹茶/, icon:'🍵', label:'抹茶／甜點'},
    {re:/boul'ange|bricolage|麵包|bakery/, icon:'🥐', label:'麵包／早餐'},
    {re:/ikura|いくら渋谷|蛋包|おむらいす|漢堡排|はんばーぐ/, icon:'🍳', label:'漢堡排／蛋包飯'},
    {re:/鰻|うな富士/, icon:'🐟', label:'鰻魚料理'},
    {re:/焼肉|燒肉|肉縁|和牛|ushikawa|牛川/, icon:'🥩', label:'燒肉／和牛'},
    {re:/afuri|篝|つけ麺|拉麵|ramen/, icon:'🍜', label:'拉麵／沾麵'},
    {re:/gonpachi nori|nori-temaki|壽司|寿司|生魚片/, icon:'🍣', label:'壽司／手卷'},
    {re:/sg low|æ - ash|cocktail|調酒/, icon:'🍸', label:'酒吧／晚間餐飲'},
    {re:/dolce tacubo|治一郎|harada|布丁|pudding|甜點|蛋糕|菓匠|龜屋|ribisco/, icon:'🍰', label:'甜點／伴手禮'},
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

const addedIkura = addIkuraShibuyaCandidate();
if (addedIkura && typeof renderDay === 'function') {
  const currentDayId = location.hash.replace('#', '') || '0821';
  renderDay(currentDayId, {scroll:false});
}

applyPurposeIcons();

const dayContentForEnhancements = document.querySelector('#dayContent');
if (dayContentForEnhancements) {
  const enhancementObserver = new MutationObserver(() => applyPurposeIcons());
  enhancementObserver.observe(dayContentForEnhancements, {childList:true, subtree:true});
}
