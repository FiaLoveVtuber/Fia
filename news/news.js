  // データを読み込んで表示する関数
  function loadData(language = 'ja') {
    const dataId = parseInt(document.getElementById('dataId').innerText)
    
    // データIDに一致するデータを検索
    let nowdata = n_data.find(item => item.id == dataId);
    let frontdata = n_data.find(item => item.id === dataId - 1);
    let nextdata = n_data.find(item => item.id === dataId + 1) 
    document.getElementById('n_day').innerText = nowdata.day;
    document.getElementById('n_titl').innerText = nowdata.titl[language];
    document.getElementById('m_text').innerText = nowdata.m_text[language];

    if ( dataId > 1 ) {
      document.getElementById('front').innerHTML =  `
      <div class= "link_l"><a href="${dataId - 1}.html" ><img src="前.png" alt="front"></a></div>
      <div class= "link_r"><div class="day">${frontdata.day}</div>
      <div><a href="${dataId - 1}.html" >${frontdata.titl[language]}</a></div>`
    }

    if ( dataId !== n_id ){
      document.getElementById('next').innerHTML =  `
      <div class= "link_l"><a href="${dataId + 1}.html" ><img src="次.png" alt="next"></a></div>
      <div class= "link_r"><div class="day">${nextdata.day}</div>
      <div><a href="${dataId + 1}.html" >${nextdata.titl[language]}</a></div>`
    }

    const ele = lang_w[language];
    const menu = document.getElementById('lang_trans1');

    menu.innerHTML = `
      <div class="top_bar">
        <div class="bar_l"><img src = "../p_logo.png"></img></div>
        <div class="bar_r">
          <a href = "../index.html">${ele.home}</a>
          <a href = "../news.html">${ele.news}</a>
          <a href = "../profile.html">${ele.profile}</a>
          <a href = "../music_v.html">${ele.music_v}</a>
          <a href = "../learning.html">${ele.learning}</a>
          <a href = "../contact.html">${ele.contact}</a>
          <a href = "../shop.html">${ele.shop}</a>
          <div class="lab">${ele.language_s}：</div>
          <div class="language_select">
            <select id="language" onchange="changeLanguage(this.value)">
              <option value="ja">日本語</option>
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="ko">한국어</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="es">Español</option>
              <option value="pt">Português</option>
              <option value="pl">Polski</option>
              <option value="tr">Türkçe</option>
              <option value="ru">Русский</option>
              <option value="uk">Українська</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }

  // 言語変更時にデータを再表示
  function changeLanguage(language) {
    loadData(language);
    const languageSelect = document.getElementById('language');
    languageSelect.value = language;
    document.documentElement.lang = language;
    localStorage.setItem('preferredLanguage', language); // 保存
  }

  // ページ初回ロード時にデータを表示
  document.addEventListener('DOMContentLoaded', (event) => {
    let preferredLanguage = localStorage.getItem('preferredLanguage');
    if (!preferredLanguage) {
      const userLang = navigator.language || navigator.userLanguage;
      switch (true) {
        case userLang.startsWith('en'): preferredLanguage = 'en'; break;
        case userLang.startsWith('zh'): preferredLanguage = 'zh'; break;
        case userLang.startsWith('ko'): preferredLanguage = 'ko'; break;
        case userLang.startsWith('fr'): preferredLanguage = 'fr'; break;
        case userLang.startsWith('de'): preferredLanguage = 'de'; break;
        case userLang.startsWith('it'): preferredLanguage = 'it'; break;
        case userLang.startsWith('es'): preferredLanguage = 'es'; break;
        case userLang.startsWith('pt'): preferredLanguage = 'pt'; break;
        case userLang.startsWith('pl'): preferredLanguage = 'pl'; break;
        case userLang.startsWith('tr'): preferredLanguage = 'tr'; break;
        case userLang.startsWith('ru'): preferredLanguage = 'ru'; break;
        case userLang.startsWith('uk'): preferredLanguage = 'uk'; break;
        default: preferredLanguage = 'ja';
      }
    }

    const languageSelect = document.getElementById('language');
    if (languageSelect) { languageSelect.value = preferredLanguage; }
    changeLanguage(preferredLanguage);
  });
  
  // 背景画像の高さを調整する関数
  function adjustBackgroundHeight() {
    document.getElementById('back_g').style.height = window.innerHeight + 'px';
  }

  //背景変更
  function changeBackground() {
    var date = new Date();
    var month = date.getMonth();
    var backgroundArea = document.getElementById('back_g');

    if (month === 11 || month === 0 || month === 1) {
      backgroundArea.className = 'back_a winter_n'; // 冬
    } else if (month >= 2 && month <= 4) {
      backgroundArea.className = 'back_a spring_n'; // 春
    } else if (month >= 5 && month <= 7) {
      backgroundArea.className = 'back_a summer_n'; // 夏
    } else if (month >= 8 && month <= 10) {
      backgroundArea.className = 'back_a autumn_n'; // 秋
    }
  }

  // 初回ロード時に背景画像を変更し、高さを調整する
  window.addEventListener('load', function() {
    changeBackground();
    adjustBackgroundHeight();
    loadData(lang || 'ja');
  });

  // ウィンドウサイズ変更時に背景画像の高さを再調整する
  window.addEventListener('resize', function() {
    adjustBackgroundHeight();
  });
