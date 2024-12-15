//言語別に手動で切り替える
function changeLanguage(lang) {
  const ele = lang_w[lang];
  document.documentElement.lang = lang;
  const menu = document.getElementById('menu');
  menu.innerHTML = `
    <div class="top_bar">
      <div class="bar_l"><img src = "p_logo.png"></img></div>
      <div class="bar_r">
        <a href = "index.html">${ele.home}</a>
        <a href = "news.html">${ele.news}</a>
        <a href = "profile.html">${ele.profile}</a>
        <a href = "music_v.html">${ele.music_v}</a>
        <a href = "index/learning.html">${ele.learning}</a>
        <a href = "index/contact.html">${ele.contact}</a>
        <a href = "index/shop.html">${ele.shop}</a>
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
  setUpLinkEventListeners();

  const currentPath = window.location.pathname; // 現在のURLパスを取得
  let ot_s; //一時データ保管用
  // ページごとの処理を分岐
  switch (true) {
    case currentPath.endsWith('index.html'):
      const i1 = document.getElementById('i1');
      if(i1){
        i1.innerHTML = `
          <h1>${ele.title}</h1>
          <h4>${ele.subtitle}</h4>
        `;
      }

      const i2 = document.getElementById('i2');
      if(i2){
        i2.innerHTML = `
          <div class="ch1">${ele.mes01}</div>
          <div class="ch2">${ele.mes02}</div>
        `;
      }

      const i3 = document.getElementById('i3');
      if(i3){
        i3.innerHTML = `<p>${ele.news}</p>`; // 見出しを追加
        for (let i = n_id; i > n_id - 5; i--) {
        let data = n_data.find(item => item.id === i);
          if (data) {
            ot_s = ` <div class="day">${data.day}</div><div><a href="news/${i}.html">${data.titl[lang]}</a></div>
            `;
            i3.innerHTML += ot_s;
          }
        } 
      }
      break;

    case currentPath.endsWith('news.html'):
      const n = document.getElementById('n');
      if(n){
        n.innerHTML = `<p>${ele.news}</p>`; // 見出しを追加
        for (let i = n_id; i > 0; i--) {
          let data = n_data.find(item => item.id === i);
          ot_s = ` <div class="day">${data.day}</div><div><a href="news/${i}.html">${data.titl[lang]}</a></div>
          `;
          n.innerHTML += ot_s;
        }
      }
      break;

    case currentPath.endsWith('profile.html'):
      const p1 = document.getElementById('tab');
      if (p1) {
        ot_s = '<tr>';
        for (let i = 1; i <= 5; i++) {
          const ele = p_data.find(item => item.id === i);
          if (ele) {
            ot_s += `<td data-c="${i}">${ele[lang]}</td>`;
          }
        }
        ot_s += '</tr><tr>';
        for (let i = 6; i <= 10; i++) {
          const ele = p_data.find(item => item.id === i);
          if (ele) {
            ot_s += `<td data-c="${i}">${ele[lang]}</td>`;
          }
        }
        ot_s += '<td data-c="10"></td></tr>';
        p1.innerHTML = ot_s;    
      }
    
      // 各セルのクリックイベントリスナーを設定
      document.querySelectorAll('#tab td').forEach(cell => {
        cell.addEventListener('click', function() {
          const c_id = this.getAttribute('data-c');
          localStorage.setItem('c_id', c_id);
          changeContent(c_id, lang);
          adjustBackgroundHeight();
        });
      });
      break;

    case currentPath.endsWith('music_v.html'):
      const m1 = document.getElementById('m1');
      if(m1){
        m1.innerHTML = `<p>${ele.music_v}</p>`;
        let c_m1 = m_data.find(item => item.id === 1);
        m1.innerHTML += `${c_m1[lang]}`;
      }
      break;

  }

  //セレクトボックスでlanguage を選択させられたら実行に移す 
  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    languageSelect.value = lang;
    const currentPath = window.location.pathname;
    if (currentPath.endsWith('profile.html')) {
      const c_id = localStorage.getItem('c_id');
      changeContent(c_id, lang);
      adjustBackgroundHeight();
    }
  }
  localStorage.setItem('preferredLanguage', lang);
}

function changeContent(c_id, lang) {
  const p2 = document.getElementById('area');
  let ot_s; //一時データ保管用
  if(p2){
    switch (c_id) {
      case '1':
        let ele1 = p_data.find(item => item.id === 1);
        ot_s = `<h2>${ele1[lang]}</h2>
        <div id="tex" class="te" >
        <table id ="tab2">
        `;
          for (let i = 11; i <= 23; i++) {
            const eleA = p_data.find(item => item.id === i);
            const eleB = p_data.find(item => item.id === i + 15); // 26 以降の項目に対応
            ot_s += ` <tr><td class="a">${eleA[lang]}</td><td class="b">${eleB[lang]}</td></tr>`;
          }
          let ele1_2 = p_data.find(item => item.id === 39);
          ot_s += ` <tr><td colspan="2">${ele1_2[lang]}</td></tr>
          </table>
        </div>
        `;
        p2.innerHTML = ot_s;
        break;

      case '2':
        let ele2 = p_data.find(item => item.id === 2);
        ot_s = `
        <h2>${ele2[lang]}</h2>
        <table class="p2">`;
        ele2 = p_data.find(item => item.id === 41);
        ot_s += `<tr><td class="a">💖${ele2[lang]}</td><td class="b">#フィア　#フィア・ラブ</td></tr>`;
        ele2 = p_data.find(item => item.id === 42);
        ot_s += `<tr><td class="a">🎤${ele2[lang]}</td><td class="b">#フィアライブ</td></tr>`;
        ele2 = p_data.find(item => item.id === 43);
        ot_s += `<tr><td class="a">🎨${ele2[lang]}</td><td class="b">#みてみてフィアちゃん</td></tr>`;
        ele2 = p_data.find(item => item.id === 44);
        ot_s += `<tr><td class="a">❓${ele2[lang]}</td><td class="b">#フィアちゃん教えて</td></tr>`;
        ele2 = p_data.find(item => item.id === 45);
        ot_s += `<tr><td class="a">🍽️${ele2[lang]}</td><td class="b">#フィアちゃんこれ食べて</td></tr>`;
        ot_s += `</table>`;
        p2.innerHTML = ot_s;
        break;
      
      case '3':
        let ele3 = p_data.find(item => item.id === 3);
        ot_s = `
        <h2>${ele3[lang]}</h2>`
        ele3 = p_data.find(item => item.id === 46);
        ot_s +=`${ele3[lang]}`;
        p2.innerHTML = ot_s;
        break;

      case '4':
        let ele4 = p_data.find(item => item.id === 4);
        ot_s = `
        <h2>${ele4[lang]}</h2>`
        ele4 = p_data.find(item => item.id === 47);
        ot_s +=`${ele4[lang]}`;
        p2.innerHTML = ot_s;
        break;

      case '5':
        let ele5 = p_data.find(item => item.id === 5);
        ot_s = `
        <h2>`
        ot_s += cleanedContent = ele5[lang].replace(/<br>/gi, '　');
        ot_s +=`</h2>`
        ele5 = p_data.find(item => item.id === 48);
        ot_s +=`${ele5[lang]}`;
        p2.innerHTML = ot_s;
        break;

      case '6':
        let ele6 = p_data.find(item => item.id === 6);
        ot_s = `
        <h2>`
        ot_s += cleanedContent = ele6[lang].replace(/<br>/gi, '');
        ot_s +=`</h2>`
        ele6 = p_data.find(item => item.id === 49);
        ot_s +=`${ele6[lang]}`;
        p2.innerHTML = ot_s;
        break;

      case '7':
        let ele7 = p_data.find(item => item.id === 7);
        ot_s = `
        <h2>${ele7[lang]}</h2>`
        ele7 = p_data.find(item => item.id === 50);
        ot_s +=`${ele7[lang]}`;
        p2.innerHTML = ot_s;
        break;

      case '8':
        let ele8 = p_data.find(item => item.id === 8);
        ot_s = `
        <h2>`
        ot_s += cleanedContent = ele8[lang].replace(/<br>/gi, '');
        ot_s +=`</h2>`
        ele8 = p_data.find(item => item.id === 51);
        ot_s +=`${ele8[lang]}`;
        p2.innerHTML = ot_s;
        break;

    }
  }
}

//ページの初回ロード時に設定をする、言語別に自動で切り替えている
document.addEventListener('DOMContentLoaded', (event) => {
  //ローカルステージに設定した言語がないなら自動的に言語が置き換わる１２言語以外なら日本語ページになる
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

  localStorage.setItem('preferredLanguage', preferredLanguage);

  changeLanguage(preferredLanguage);
  const currentPath = window.location.pathname;
  if (currentPath.endsWith('profile.html')) {
    changeContent('1',preferredLanguage);
  }

  changeBackground();
  adjustBackgroundHeight();
});

// 現在のページとリンク先のページが同じならキャンセル
function setUpLinkEventListeners() {
  const links = document.querySelectorAll('.bar_r a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(link.href, window.location.origin);

      if (currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search) {
        e.preventDefault(); // 移動をキャンセル
      }
    });
  });
}

//背景変更
function changeBackground() {
  var date = new Date();
  var month = date.getMonth();
  var backgroundArea = document.getElementById('back_g');

  if (month === 11 || month === 0 || month === 1) {
    backgroundArea.className = 'back_a winter'; // 冬
  } else if (month >= 2 && month <= 4) {
    backgroundArea.className = 'back_a spring'; // 春
  } else if (month >= 5 && month <= 7) {
    backgroundArea.className = 'back_a summer'; // 夏
  } else if (month >= 8 && month <= 10) {
    backgroundArea.className = 'back_a autumn'; // 秋
  }
}

// 背景画像の高さを調整する関数
function adjustBackgroundHeight() {
  let backgroundDiv = document.getElementById('back_g');
  if (backgroundDiv) {
    backgroundDiv.style.height = '0px';

    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;
    
    let adjustedHeight = (documentHeight > windowHeight) ? documentHeight + 16 : windowHeight;

    // 現在のURLを取得
    let currentURL = window.location.pathname;
    
    backgroundDiv.style.height = adjustedHeight + 'px'
  }
}

//初回ロードが終わったら作動させる
window.addEventListener('load', function() {

});

//ウィンドウサイズ変更時に、背景画像の高さを再調整する
window.addEventListener('resize', function() {
  adjustBackgroundHeight();
});

