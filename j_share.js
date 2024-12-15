//言語別に手動で切り替える
function changeLanguage(lang) {
  const ele = lang_w[lang];
  document.documentElement.lang = lang;
  const menu = document.getElementById('lang_trans1');
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

  // ページごとの処理を分岐
  switch (true) {
    case currentPath.endsWith('index.html'):
      const newsc = document.getElementById('lang_trans2');
      if(newsc){
        newsc.innerHTML = `<p>${ele.news}</p>`; // 見出しを追加
        for (let i = n_id; i > n_id - 5; i--) {
        let data = n_data.find(item => item.id === i);
          if (data) {
            let newsItem = ` <div class="day">${data.day}</div><div><a href="news/${i}.html">${data.titl[lang]}</a></div>
            `;
            newsc.innerHTML += newsItem;
          }
        } 
      }

      const titl = document.getElementById('lang_trans3');
      if(titl){
        titl.innerHTML = `
          <h1>${ele.title}</h1>
          <h4>${ele.subtitle}</h4>
        `;
      }

      const warp = document.getElementById('lang_trans4');
      if(warp){
        warp.innerHTML = `
          <div class="ch1">${ele.mes01}</div>
          <div class="ch2">${ele.mes02}</div>
        `;
      }
      break;

    case currentPath.endsWith('news.html'):
      const news2 = document.getElementById('lang_trans5');
      if(news2){
        news2.innerHTML = `<p>${ele.news}</p>`; // 見出しを追加
        for (let i = n_id; i > 0; i--) {
          let data = n_data.find(item => item.id === i);
          if (data) {
            let newsItem = ` <div class="day">${data.day}</div><div><a href="news/${i}.html">${data.titl[lang]}</a></div>
            `;
            news2.innerHTML += newsItem;
          }
        }
      }
      break;

    case currentPath.endsWith('profile.html'):
      const p1 = document.getElementById('tab');
      if (p1) {
        let tableContent = '<tr>';
        for (let i = 1; i <= 5; i++) {
          const ele = p_data.find(item => item.id === i);
          if (ele) {
            tableContent += `<td data-c="${i}">${ele[lang]}</td>`;
          }
        }
        tableContent += '</tr><tr>';
        for (let i = 6; i <= 10; i++) {
          const ele = p_data.find(item => item.id === i);
          if (ele) {
            tableContent += `<td data-c="${i}">${ele[lang]}</td>`;
          }
        }
        tableContent += '<td data-c="10"></td></tr>';
        p1.innerHTML = tableContent;
        
      }
    
      function changeContent(c_id) {
        const p2 = document.getElementById('area');
        if(p2){
          switch (c_id) {
            case '1':
              let ele1 = p_data.find(item => item.id === 1);
              let t_c1 = `<h2>${ele1[lang]}</h2>
              <div id="tex" class="te" >
              <table id ="tab2">
              `;
                for (let i = 11; i <= 23; i++) {
                  const eleA = p_data.find(item => item.id === i);
                  const eleB = p_data.find(item => item.id === i + 15); // 26 以降の項目に対応
                  t_c1 += ` <tr><td class="a">${eleA[lang]}</td><td class="b">${eleB[lang]}</td></tr>`;
                }
                let ele1_2 = p_data.find(item => item.id === 39);
                t_c1 += ` <tr><td colspan="2">${ele1_2[lang]}</td></tr>
                </table>
              </div>
              `;
              p2.innerHTML = t_c1;
              break;
    
            case '2':
              let ele2 = p_data.find(item => item.id === 2);
              let t_c2 = `
              <h2>${ele2[lang]}</h2>
              <table class="p2">`;
              ele2 = p_data.find(item => item.id === 41);
              t_c2 += `<tr><td class="a">💖${ele2[lang]}</td><td class="b">#フィア　#フィア・ラブ</td></tr>`;
              ele2 = p_data.find(item => item.id === 42);
              t_c2 += `<tr><td class="a">🎤${ele2[lang]}</td><td class="b">#フィアライブ</td></tr>`;
              ele2 = p_data.find(item => item.id === 43);
              t_c2 += `<tr><td class="a">🎨${ele2[lang]}</td><td class="b">#みてみてフィアちゃん</td></tr>`;
              ele2 = p_data.find(item => item.id === 44);
              t_c2 += `<tr><td class="a">❓${ele2[lang]}</td><td class="b">#フィアちゃん教えて</td></tr>`;
              ele2 = p_data.find(item => item.id === 45);
              t_c2 += `<tr><td class="a">🍽️${ele2[lang]}</td><td class="b">#フィアちゃんこれ食べて</td></tr>`;
              t_c2 += `</table>`;
              p2.innerHTML = t_c2;
              break;
            
            case '3':
              let ele3 = p_data.find(item => item.id === 3);
              let t_c3 = `
              <h2>${ele3[lang]}</h2>`
              ele3 = p_data.find(item => item.id === 46);
              t_c3 +=`${ele3[lang]}`;
              p2.innerHTML = t_c3;
              break;
    
            case '4':
              let ele4 = p_data.find(item => item.id === 4);
              let t_c4 = `
              <h2>${ele4[lang]}</h2>`
              ele4 = p_data.find(item => item.id === 47);
              t_c4 +=`${ele4[lang]}`;
              p2.innerHTML = t_c4;
              break;
    
            case '5':
              let ele5 = p_data.find(item => item.id === 5);
              let t_c5 = `
              <h2>`
              t_c5 += cleanedContent = ele5[lang].replace(/<br>/gi, '　');
              t_c5 +=`</h2>`
              ele5 = p_data.find(item => item.id === 48);
              t_c5 +=`${ele5[lang]}`;
              p2.innerHTML = t_c5;
              break;
    
            case '6':
              let ele6 = p_data.find(item => item.id === 6);
              let t_c6 = `
              <h2>`
              t_c6 += cleanedContent = ele6[lang].replace(/<br>/gi, '');
              t_c6 +=`</h2>`
              ele6 = p_data.find(item => item.id === 49);
              t_c6 +=`${ele6[lang]}`;
              p2.innerHTML = t_c6;
              break;
    
            case '7':
              let ele7 = p_data.find(item => item.id === 7);
              let t_c7 = `
              <h2>${ele7[lang]}</h2>`
              ele7 = p_data.find(item => item.id === 50);
              t_c7 +=`${ele7[lang]}`;
              p2.innerHTML = t_c7;
              break;
    
            case '8':
              let ele8 = p_data.find(item => item.id === 8);
              let t_c8 = `
              <h2>`
              t_c8 += cleanedContent = ele8[lang].replace(/<br>/gi, '');
              t_c8 +=`</h2>`
              ele8 = p_data.find(item => item.id === 51);
              t_c8 +=`${ele8[lang]}`;
              p2.innerHTML = t_c8;
              break;

          }
        }
      }

      // 各セルのクリックイベントリスナーを設定
      document.querySelectorAll('#tab td').forEach(cell => {
        cell.addEventListener('click', function() {
          const c_id = this.getAttribute('data-c');
          changeContent(c_id);
        });
      });
      break;

    case currentPath.endsWith('music_v.html'):
      const m6 = document.getElementById('lang_trans7');
      if(m6){
        m6.innerHTML = `
          ${ele.music_v}
        `;
      }
      break;

  }

  //セレクトボックスでlanguage を選択させられたら実行に移す 
  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    languageSelect.value = lang;
  }
  localStorage.setItem('preferredLanguage', lang);
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

