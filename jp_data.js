const p_data = [
  {
    id: 1,
    ja: 'プロフィール',
    en: 'Profile',
    zh: '个人资料',
    ko: '프로필',
    fr: 'Profil',
    de: 'Profil',
    it: 'Profilo',
    es: 'Perfil',
    pt: 'Perfil',
    pl: 'Profil',
    tr: 'Profil',
    ru: 'Профиль',
    uk: 'Профіль'    
  },{
    id: 2,
    ja: 'タグなど',
    en: 'Tags etc',
    zh: '标签等',
    ko: '태그 등',
    fr: 'Étiquettes etc',
    de: 'Tags usw.',
    it: 'Tag ecc.',
    es: 'Etiquetas etc',
    pt: 'Etiquetas etc',
    pl: 'Tagi itp.',
    tr: 'Etiketler vb.',
    ru: 'Теги и т. д.',
    uk: 'Теги тощо'
  },{
    id: 3,
    ja: '質問と回答',
    en: 'Questions and Answers',
    zh: '问题与解答',
    ko: '질문과 답변',
    fr: 'Questions et Réponses',
    de: 'Fragen und Antworten',
    it: 'Domande e Risposte',
    es: 'Preguntas y Respuestas',
    pt: 'Perguntas e Respostas',
    pl: 'Pytania i Odpowiedzi',
    tr: 'Soru ve Cevapla',
    ru: 'Вопросы и Ответы',
    uk: 'Питання та Відповіді'  
  },{
    id: 4,
    ja: '予定表',
    en: 'Timetable',
    zh: '时间表',
    ko: '시간표',
    fr: 'Emploi du temps',
    de: 'Stundenplan',
    it: 'Orario',
    es: 'Horario',
    pt: 'Horário',
    pl: 'Plan zajęć',
    tr: 'Ders Programı',
    ru: 'Расписание',
    uk: 'Розклад'    
  },{
    id: 5,
    ja: '尊敬する人<br>感謝してる人',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 6,
    ja: 'ツイッターや<br>チャンネルに<br>対する行動',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 7,
    ja: 'それ以外の行動',
    en: 'Other actions',
    zh: '其他行动',
    ko: '기타 행동',
    fr: 'Autres actions',
    de: 'Andere Aktionen',
    it: 'Altre azioni',
    es: 'Otras acciones',
    pt: 'Outras ações',
    pl: 'Inne działania',
    tr: 'Diğer eylemler',
    ru: 'Другие действия',
    uk: 'Інші дії'    
  },{
    id: 8,
    ja: 'フィアちゃんに<br>いかがわしい<br>ことしたい人へ',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 9,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{   
    id: 10,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 11,
    ja: '年齢',
    en: 'Age',
    zh: '年龄',
    ko: '나이',
    fr: 'Âge',
    de: 'Alter',
    it: 'Età',
    es: 'Edad',
    pt: 'Idade',
    pl: 'Wiek',
    tr: 'Yaş',
    ru: 'Возраст',
    uk: 'Вік'    
  },{
    id: 12,
    ja: '誕生日',
    en: 'Birthday',
    zh: '生日',
    ko: '생일',
    fr: 'Anniversaire',
    de: 'Geburtstag',
    it: 'Compleanno',
    es: 'Cumpleaños',
    pt: 'Aniversário',
    pl: 'Urodziny',
    tr: 'Doğum günü',
    ru: 'День рождения',
    uk: 'День народження'    
  },{
    id: 13,
    ja: '身長',
    en: 'Height',
    zh: '身高',
    ko: '키',
    fr: 'Taille',
    de: 'Körpergröße',
    it: 'Altezza',
    es: 'Altura',
    pt: 'Altura',
    pl: 'Wzrost',
    tr: 'Boy',
    ru: 'Рост',
    uk: 'Зріст'    
  },{
    id: 14,
    ja: '体重',
    en: 'Weight',
    zh: '体重',
    ko: '체중',
    fr: 'Poids',
    de: 'Gewicht',
    it: 'Peso',
    es: 'Peso',
    pt: 'Peso',
    pl: 'Waga',
    tr: 'Ağırlık',
    ru: 'Вес',
    uk: 'Вага'    
  },{
    id: 15,
    ja: 'スリーサイズ',
    en: 'vital statistics',
    zh: '人口动态统计',
    ko: '중요한 통계',
    fr: 'Statistiques vitales',
    de: 'Körpermaße',
    it: 'statistiche vitali',
    es: 'estadísticas vitales',
    pt: 'estatísticas vitais',
    pl: 'Trzy wymiary',
    tr: 'hayati̇ i̇stati̇sti̇kler',
    ru: 'Три размера',
    uk: 'Три розміри'
  },{
    id: 16,
    ja: '血液型',
    en: 'Blood Type',
    zh: '血型',
    ko: '혈액형',
    fr: 'Groupe sanguin',
    de: 'Blutgruppe',
    it: 'Gruppo sanguigno',
    es: 'Tipo de sangre',
    pt: 'Tipo sanguíneo',
    pl: 'Grupa krwi',
    tr: 'Kan grubu',
    ru: 'Группа крови',
    uk: 'Група крові'    
  },{
    id: 17,
    ja: '好きな色',
    en: 'Favourite colours',
    zh: '最喜欢的颜色',
    ko: '좋아하는 색',
    fr: 'Couleurs préférées',
    de: 'Lieblingsfarben',
    it: 'Colori preferiti',
    es: 'Colores favoritos',
    pt: 'Cores favoritas',
    pl: 'Ulubione kolory',
    tr: 'Favori renkler',
    ru: 'Любимые цвета',
    uk: 'Улюблені кольори'
    
  },{
    id: 18,
    ja: '好きな物',
    en: 'What I like',
    zh: '我喜欢的东西',
    ko: '내가 좋아하는 것',
    fr: 'Ce que j aime',
    de: 'Was ich mag',
    it: 'Cosa mi piace',
    es: 'Lo que me gusta',
    pt: 'O que eu gosto',
    pl: 'Co lubię',
    tr: 'Nelerden hoşlanırım',
    ru: 'Что я люблю',
    uk: 'Що мені подобається'
  },{
    id: 19,
    ja: '好きな食べ物',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 20,
    ja: '嫌いな食べ物',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 21,
    ja: '趣味',
    en: 'Hobbies',
    zh: '爱好',
    ko: '취미',
    fr: 'Loisirs',
    de: 'Hobbys',
    it: 'Hobby',
    es: 'Aficiones',
    pt: 'Hobbies',
    pl: 'Hobby',
    tr: 'Hobiler',
    ru: 'Хобби',
    uk: 'Хобі'    
  },{
    id: 22,
    ja: '好きなゲーム',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 23,
    ja: '苦手なゲーム',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 24,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 25,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 26,
    ja: '6歳',
    en: '6 years old',
    zh: '6岁',
    ko: '6세',
    fr: '6 ans',
    de: '6 Jahre alt',
    it: '6 anni',
    es: '6 años',
    pt: '6 anos',
    pl: '6 lat',
    tr: '6 yaşında',
    ru: '6 лет',
    uk: '6 років'    
  },{
    id: 27,
    ja: '10月9日',
    en: 'October 9th',
    zh: '10月9日',
    ko: '10월 9일',
    fr: '9 octobre',
    de: '9. Oktober',
    it: '9 ottobre',
    es: '9 de octubre',
    pt: '9 de outubro',
    pl: '9 października',
    tr: '9 Ekim',
    ru: '9 октября',
    uk: '9 жовтня'    
  },{
    id: 28,
    ja: '・・・・・・113.2 cm',
    en: '・・・・・・113.2 cm',
    zh: '・・・・・・113.2 cm',
    ko: '・・・・・・113.2 cm',
    fr: '・・・・・・113.2 cm',
    de: '・・・・・・113.2 cm',
    it: '・・・・・・113.2 cm',
    es: '・・・・・・113.2 cm',
    pt: '・・・・・・113.2 cm',
    pl: '・・・・・・113.2 cm',
    tr: '・・・・・・113.2 cm',
    ru: '・・・・・・113.2 cm',
    uk: '・・・・・・113.2 cm'
  },{
    id: 29,
    ja: '・・・・・・内緒（ただローレル指数的には普通です）',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 30,
    ja: 'エッチ～(/ω＼)',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 31,
    ja: 'A型🅰️',
    en: 'Type A🅰️',
    zh: 'A型🅰️',
    ko: 'A형🅰️',
    fr: 'Groupe sanguin A🅰️',
    de: 'Blutgruppe A🅰️',
    it: 'Gruppo sanguigno A🅰️',
    es: 'Tipo A🅰️',
    pt: 'Tipo A🅰️',
    pl: 'Grupa krwi A🅰️',
    tr: 'A grubu🅰️',
    ru: 'Группа крови A🅰️',
    uk: 'Група крові A🅰️'    
  },{
    id: 32,
    ja: 'ピンク、青',
    en: 'Pink, Blue',
    zh: '粉色, 蓝色',
    ko: '분홍색, 파란색',
    fr: 'Rose, Bleu',
    de: 'Rosa, Blau',
    it: 'Rosa, Blu',
    es: 'Rosa, Azul',
    pt: 'Rosa, Azul',
    pl: 'Różowy, Niebieski',
    tr: 'Pembe, Mavi',
    ru: 'Розовый, Синий',
    uk: 'Рожевий, Синій'
  },{
    id: 33,
    ja: 'カレーライス🍛、マクロス（特に７）✨、可愛い物🎀、ファン🥰、お友達😊',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 34,
    ja: 'カレーライス🍛、辛い食べ物、珍しい食べ物　嫌いな食べ物以外大体食べれる',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 35,
    ja: 'サツマイモ🍠、栗🌰、かぼちゃ🎃、あんこ●等、変な甘さの食べ物<br>ゴマの葉🍂、カブトムシ🐜、ウナギのゼリー寄せ（ジェリード・イールズ）',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 36,
    ja: 'ペットを可愛がること、植物を育てること、飲食店巡り、可愛い物を愛でること<br>何かを作る事、いろんな人とお話しする事',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 37,
    ja: 'シュミレーション（戦術・戦略）、ＲＰＧ、パズル（スピードが要求されない物）',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 38,
    ja: 'アクション、シューティング、レーシング、ＦＳＰ<br>パズル（スピードを要求されるもの）、リズムゲーム<br>ホラー（だけでなく怖い系の全部、他のとは全く別の理由で苦手、グロとかは平気）',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 39,
    ja: 'イギリス人の商会のかっこいいパパと日本人の学者の優しいママの日本育ちのハーフの娘。',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 40,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 41,
    ja: '総合',
    en: 'Comprehensive',
    zh: '综合的',
    ko: '종합적인',
    fr: 'Complète',
    de: 'Umfassend',
    it: 'Comprensivo',
    es: 'Integral',
    pt: 'Abrangente',
    pl: 'Kompleksowa',
    tr: 'Kapsamlı',
    ru: 'Всеобъемлющая',
    uk: 'Всеосяжна'
  },{
    id: 42,
    ja: '配信',
    en: 'Streaming',
    zh: '流媒体',
    ko: '스트리밍',
    fr: 'Streaming',
    de: 'Streaming',
    it: 'Streaming',
    es: 'Streaming',
    pt: 'Streaming',
    pl: 'Streaming',
    tr: 'Yayın akışı',
    ru: 'Потоковое вещание',
    uk: 'Потокове мовлення'
  },{
    id: 43,
    ja: 'FA',
    en: 'FA',
    zh: 'FA',
    ko: 'FA',
    fr: 'FA',
    de: 'FA',
    it: 'FA',
    es: 'FA',
    pt: 'FA',
    pl: 'FA',
    tr: 'FA',
    ru: 'FA',
    uk: 'FA'
  },{
    id: 44,
    ja: '質問',
    en: 'Question',
    zh: '问题',
    ko: '질문',
    fr: 'Question',
    de: 'Frage',
    it: 'Domanda',
    es: 'Pregunta',
    pt: 'Pergunta',
    pl: 'Pytanie',
    tr: 'Soru',
    ru: 'Вопрос',
    uk: 'Запитання'  
  },{
    id: 45,
    ja: '食べ物',
    en: 'Food',
    zh: '食物',
    ko: '음식',
    fr: 'Nourriture',
    de: 'Essen',
    it: 'Cibo',
    es: 'Comida',
    pt: 'Comida',
    pl: 'Jedzenie',
    tr: 'Yemek',
    ru: 'Еда',
    uk: 'Їжа'
  },{
    id: 46,
    ja: `
<p>Ｑ・どんな配信にするの？歌メイン？</p>
　歌だけでなく、ゲーム配信に、雑談もするよ<br>
　視聴者参加型のはたくさんしたいね<br>
<br>
　歌メインのやり方が分かってきたから、できるかもしれない<br>
　動画の方は一話完結型、ストーリー型、教育型、歌MV、ショート等をする予定<br>
<br>
<p>Ｑ・コラボするならだれとしたい？</p>
　フィアちゃんがチャンネル登録、ツィッターフォローした人だよ♪<br>
<br>
<p>Ｑ・好きな作品は？</p>
　マクロス<br>
　学問ノススメ<br>
　スイスの民間防衛白書<br>
　【3DLIVE】あくあ色すーぱーみらくる☆どり〜む♪<br>
<br>
<p>Ｑ・一緒に遊べるゲーム</p>
　○アクション<br>
　　Dead by Daylight<br>
　　第５人格<br>
　　7 Days to Die<br>
　　Fall Guys<br>
　　The Front<br>
<br>
　○シュミレーション<br>
　　Civilization6<br>
　　Imperiums Greek Wars<br>
<br>
　○FPS<br>
　　APEX<br>
　　VALORANT<br>
<br>
　○パスル<br>
　　Puzzle Together<br>
　　世界のアソビ大全51<br>
　　SDIN<br>
<br>
　○推理<br>
　　Among Us<br>
　　ガーティックフォン<br>
　　コードネーム<br>
<br>
　オフの時は遊んでるかも<br>
　他にもみんなで遊べるのあったら教えてほしいな♪<br>
<br>
<p>Ｑ・Vtuberに必要な特技は持っている？</p>
　一枚絵を書く能力は絶望的（いける（キラーン<br>
　　と思ったけど、やっぱり駄目だった）<br>
　ドット絵は少しだけ<br>
　動画制作はできる<br>
　ライブ２Ｄはわずか<br>
　プログラミングはできる<br>
　雑談は好きだけど、トーク力はどうなんだろう？<br>
　歌は大好き<br>
　ASMRは年齢制限を受ける<br>
　コラボはすっごくやりたいけど、もしかしたら苦手かも<br>
　OBSの扱える力は僅か<br>
　ユーチューブの扱える力も厳しめ<br>
　ゲーム力は一部は得意だけどほとんどが苦手<br>
　　（だけど視聴者参加型は大好き、特に大人数同時プレイ）<br>
　企画力はどうだろう？<br>
　営業力はどうだろう？<br>
　　（初対面はすさまじく苦手なくせに、初対面じゃなくなると普通に話せるしな）<br>
　経営力はどうだろう？<br>
　トラブル対応力は弱い`,
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 47,
    ja: `
<p>★フィアちゃん予定表</p>
　何かバラバラTT<br>
<br>
<p>★今月の依頼状況</p>
　　シーン２の依頼中<br>
　　ＬＩＶＥ２Ｄ・動画用の素材依頼<br>
　　ツイッターのイラスト依頼<br>
　　シーン３の背景の冬依頼<br>
<br>
<p>　来月以降の依頼状況</p>
　　１月は動画用の・サムネイル用の依頼<br>
　　２月はツイッターのイラスト・シーン３の背景の春依頼<br>
　　３月は歌の音源の依頼<br>
　　４月はシーン３の背景の夏依頼<br>
　　５月は未定<br>
　　６月はシーン３の背景の秋依頼<br>
<br>
<p>　他に必要なもの</p>
　　ＥＤのシーン１・動画素材・ＬＩＶＥ２Ｄで動かせるように<br>
　依頼以外で必要なもの<br>
　　ＨＰ・支援アプリ<br>
<br>
<p>★復旧が必要なもの</p>
　・オーディオインターフェース（とマイク）<br>
　　歌の練習ができません、動画が作れません、声が入れれません＞＜<br>
　・ハードディスク
　　いろんな制作物が入っていて直さないと困ります＞＜<br>
　・他不明<br>
<br>
<p>★現在やってること</p>
　・動画量産化に向けて超がんばり中（疲れた）<br>
　・ＬＩＶＥ２Ｄを動画制作のため頑張り中（疲れた）<br>
　・ＨＰ開発中（ＪａｖａＳｃｒｉｐｔをおぼえるため(動画に必要なんですＴＴ)）<br>
　・ＶｔｕｂｅｒさんのファンとＶｔｕｂｅｒさん向けの支援アプリ開発中<br>
<br>
<p>★体調</p>
　・フィアちゃん思春期に入ったので体調やら精神やらが不安定です＝＝；<br>
<br>
２０２４年１２月時<br>`,
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 48,
    ja: `
<p>★熱気バサラさん</p>
　<img src="p_bsr.png"><a href ="https://ja.wikipedia.org/wiki/Fire_Bomber#%E7%86%B1%E6%B0%97%E3%83%90%E3%82%B5%E3%83%A9"><img src="p_wik.png"></a><br>
　歌って想いを伝え、自由のすばらしさを教えてくれたバサラさんは<br>
　大変尊敬しています。<br>
<br>
<p>★マハトマ・ガンディーさん</p>
　<img src="p_gan.png"><a href ="https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%8F%E3%83%88%E3%83%9E%E3%83%BB%E3%82%AC%E3%83%B3%E3%83%87%E3%82%A3%E3%83%BC"><img src="p_wik.png"></a><br>
　非暴力・非服従の精神が素晴らしいです。<br>
<br>
<p>★福沢諭吉さん</p>
　<img src="p_huku.png"><a href ="https://ja.wikipedia.org/wiki/%E7%A6%8F%E6%BE%A4%E8%AB%AD%E5%90%89"><img src="p_wik.png"></a><br>
　あの時代に書かれた学問ノススメは素晴らしいです。<br>
<br>
<p>★フィアちゃんのパパとママ</p>            
　いつもお仕事お疲れ様♪Vtuberになることを許可して、<br>
　応援してくれてありがとう💖<br>
　私にいろんなことをいつも教えてくれてとても感謝尊敬しているよ。<br>
<br>
<p>★フィアちゃんのおばあちゃん</p>
　フィアちゃんに普通の女の子を教えてもらいました。<br>
　可愛いお洋服や人形とかもたくさんもらえました。<br>
<br>
　学校に行かせたり、家庭教師をたくさんつけられたり、<br>
　歌を家族の前で以外歌わせないようにしたりと<br>
　いろいろ強引だったけど、それでも感謝しているよ。<br>
<br>
<p>★フィアちゃんのお姉ちゃん</p>
　<a href ="https://www.youtube.com/@kasumiV0111/streams"><img src="p_youtube_icon.png"></a><a href ="https://x.com/K_kasumiV"><img src="p_x_icon.png"></a><br>
　かすみお姉ちゃん（胡蝶かすみ）です。<br>
　<br>
　フィアちゃんに相手に好きであること伝える大切さを教えてもらいました。<br>
　他の人に甘えてもいい事や細かないろいろな事を教えてもらって感謝しているよ。<br>
　血のつながりこそないもののフィアちゃんにとっては特別な家族です。<br>
<br>
<p>★てけひろさん</p>
　<a href ="https://coconala.com/users/1846638"><img src="p_koko.png"></a><a href ="https://x.com/tekehiro"><img src="p_x_icon.png"></a><br>
　色々困ってた時にようやく発見できたママさんです。<br>
　こちらの複雑な事情を聞いていただいて、フィアちゃんを作り直して<br>
　描いていただきました。<br>
　ＬＩＶＥ２Ｄや動画に関するあれこれを描いていただくため今後もいろいろ<br>
　長い付き合いになりそうです。<br>
　大変感謝、感激しています。<br>
<br>
<p>★あかさたぬさん</p>
　<a href ="https://coconala.com/users/131018"><img src="p_koko.png"></a><a href ="https://www.youtube.com/@akasatanu"><img src="p_youtube_icon.png"></a><a href ="https://x.com/akasatanu512"><img src="p_x_icon.png"></a><br>
　私を描いてくれたママです。<br>
　私を生み出してくれて本当にありがとう♪大変感謝、感激しています。<br>
　私を幸せにしてくださいました。<br>
　いろいろあってママを変えることになります。<br>
<br>
<p>★SAK（さく）さん</p>
　<a href ="https://coconala.com/users/433339"><img src="p_koko.png"></a><a href ="https://x.com/hyakusho_moe"><img src="p_x_icon.png"></a><br>
　色々困ってた時にようやく発見できたお絵描き（絵師）さんです。<br>
　EDの一部を描いていただきました。<br>
　また、他にもいろいろなイラストを描いていただくことになりそうです。<br>
　今後もいろいろ長い付き合いになりそうです。<br>
　大変感謝、感激しています。<br>
<br>
<p>★みるもさん</p>
　<a href ="https://coconala.com/users/832655"><img src="p_koko.png"></a><a href ="https://x.com/mirumirumirumo_"><img src="p_x_icon.png"></a><br>
　あちこちで活躍しているロゴを作っていただきました。<br>
　大変感謝、感激しています。<br>
<br>
<p>★唄夜白雪さん</p>
　<a href ="https://coconala.com/users/1057812"><img src="p_koko.png"></a><a href ="https://x.com/yktn_08"><img src="p_x_icon.png"></a><br>
　私の活躍できる場所（背景）を作っていただきました。<br>
　大変感謝、感激しています。<br>
<br>
<p>★タケ松さん</p>
　<a href ="https://coconala.com/users/3323370"><img src="p_koko.png"></a><a href ="https://www.youtube.com/@V%E9%8D%9B%E5%86%B6%E5%B1%8B%E3%81%AE%E3%82%BF%E3%82%B1%E6%9D%BE"><img src="p_youtube_icon.png"></a><a href ="https://x.com/Takematu4774"><img src="p_x_icon.png"></a><br>
　私の相棒である武器（マイク）を作っていただきました。<br>
　大変感謝、感激しています。<br>
<br>
<p>★スイス（国）</p>
　<img src="p_sis.png"><a href ="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%A4%E3%82%B9"><img src="p_wik.png"></a><br>
　平和とは提唱するものでなく、勝ち取るものです。<br>
　そのことを教えてくれてくださいました。<br>
　感激しています。<br>
<br>
<p>★星街すいせいさん</p>
　完全に私のＶｔｕｂｅｒを目指すきっかけになった人の一人。<br>
　マクロスの曲を歌っていたためＶｔｕｂｅｒとはどのような物かを<br>
　教えてくださりました。<br>
　感激しています。<br>
<br>
<p>★湊あくあさん</p>
　完全に私のＶｔｕｂｅｒを目指すきっかけになった人の一人。<br>
　歌マクロス並みの３ＤライブをしていただいたのでＶｔｕｂｅｒの可能性に<br>
　ついて教えていただきました。<br>
　現在は引退してしまったもののさらなるご活躍を祈っています。<br>
　<s>転生先知ってるけどね</s><br>
　感激しています。<br>
<br>
　かな<br></br>`,
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 49,
    ja: `
<p>★私をフォローする方</p>
　私をフォローすることに遠慮はいらないよ😊<br>
　フィアちゃんに断らなくてもいいし、無言でも問題ないよ😊<br>
　だから自由にしてもらっても構わないよ😊<br>
<br>
<p>★私にフォローされた方</p>
　フィアちゃんがおはようＶｔｕｂｅｒやおやすみＶｔｕｂｅｒをしに行くときに、<br>
　朝の時間や夜の時間にツイートしてたら発見次第、リプといいねしにいくね😊<br>
　朝はおはようＶｔｕｂｅｒは日本の７時、おやすみＶｔｕｂｅｒは大体<br>
　日本の２０～２２時になるわ😊<br>
<br>
　フィアちゃんは相互フォローが好きなので、もしフィアちゃんのフォローを
　外した場合、特別な理由がない限り、こちらも外す可能性があるよ😑<br>
<br>
<p>★フォロー返しについて</p>
　フィアちゃん現在、順番にリプ・いいね・フォロー・ＤＭ返し、<br>
　おはようＶｔｕｂｅｒ、Ｖｔｕｂｅｒとして依頼したり、<br>
　何かを作ったり、リアルでいろいろあったりと何かと忙しいの😑<br>
　順番になったらまとめてかえすよ😑<br>
　だけど、時間はかかるけどフォロー返ししに行くね😊<br>
<br>
　↑の内容を順番に行っているから催促されても、すぐにはできないから<br>
　まっててね😊<br>
　どうしても待てなくてフィアちゃんのフォローを外すならそれでもかまわないよ😑<br>
　フィアちゃんになんでそんなに急いでフォロー返ししてほしいのか<br>
　わからないけどね😑<br>
<br>
　※ただしいかがわしい内容だとフォローできません😰<br>
　　ごめんなさい😑<br>
<br>
<p>★私をチャンネル登録する方</p>
　フィアちゃんに断らなくても、自由にしてもらって構わないよ😊<br>
　ただ、チャンネル登録したことを言ってくれたら特別なリプをするよ😊<br>
<br>
<p>★私にチャンネル登録された方</p>
　タイミングと時間さえ合えば配信時間に遊びに行くわ、コメントもたくさん<br>
　つけるね😊<br>
　いろんな子を見に行ってるから配信に毎回行けるわけじゃないからそこは<br>
　ごめんね😰<br>
<br>
<p>★私が登録するチャンネル</p>
　現在非常に多くのチャンネルに登録しすぎてるので、これ以上登録するのは<br>
　厳しくなってるの😰<br>
　だから、これからフィアちゃんに登録してほしいならフィアちゃんを魅せて<br>
　ほしいかな😊<br>
　具体的には行動を見て判断するかも😊<br>
<br>
<p>★チャンネル返しについて</p>
　誰がフィアちゃんを登録してくれたのかわかってません😑<br>
　なので、これに関してはできません😰<br>
　ごめんなさい😑<br>
<br>
<p>★私がフォローできないツィッター、チャンネル登録できないチャンネル</p>
　ここで書かれてるフィアちゃんにいかがわしいことしたい人への項目をどれか<br>
　満たすならできません😰<br>
　ごめんなさい😰<br>
<br>
<p>★いいね返しについて</p>
　フィアちゃんの固定とおはようＶｔｕｂｅｒにいいねをおしてくれたら、一回づつ<br>
　いいねとリプをしに行くね😊<br>
　ただ投稿内容によってはどうしてもリプが難しい場合もあるのでその時はいいね<br>
　だけ返しに行くよ😊<br>
<br>
　またフィアちゃんに初めていいねもしくはリプしてくれた人には３回いいねとリプ<br>
　しに行くね😊<br>
　時間がかかるからちょっと待っててね😊<br>
<br>
<p>★リプ返しについて</p>
　フィアちゃんにリプされたらこちらもリプするね😊<br>
　またフィアちゃんの投稿にリプされたら、いいねとリプ返しを２回行うね😊<br>
　ただ投稿内容によってはどうしてもリプが難しい場合もあるのでその時はいいね<br>
　だけ返しに行くよ😊<br>
<br>
　またフィアちゃんに初めていいねもしくはリプしてくれた人には３回いいねと<br>
　リプしに行くね😊<br>
　時間がかかるからちょっと待っててね😊<br>
<br>
<p>★なんで回数決まってるの？</p>
　決めないと際限なくやってしまうからよ😭<br>
　それに回数を決めることで皆に返しやすくなるからこうなったの😑<br>
　不満に思ったらごめんね😑<br>
<br>
<p>★ＤＭ返しについて</p>
　順番になったらまとめてかえすよ😑<br>
　その時、お互いにＤＭできる状態なら話し込むかも😊<br>
<br>
<p>★リプ、いいね、ＤＭ返し遅いよ</p>
　それに関してはごめんね😭<br>
　なんで遅くなってるか説明するとこういう行動をとってるの😑<br>
<br>
　新しいおはようＶｔｕｂｅｒをする<br>
　その時に、皆の朝の投稿に遊びに行く<br>
　休憩<br>
　Ｖｔｕｂｅｒに関する何かを製作する<br>
　今回と前回のおはようＶｔｕｂｅｒの間にリプされたものをリプ返しする<br>
　フォロー返しする<br>
　ＤＭ返しと、固定のいいね返し、固定のリツィートのお礼する<br>
　あった場合フィアちゃんの特殊な投稿に対していいね返しする<br>
　おはようＶｔｕｂｅｒのリプ返し、いいね返し、リツィートのお礼する<br>
　新しいおはようＶｔｕｂｅｒをする<br>
<br>
　の行動をとってると以前は人数が少なくて１日でできたけど、<br>
　今は人数が多くて数日かかっちゃうのよね😑<br>
　リアルでもこまごまとしたのがあるし、他のＶｔｕｂｅｒさんの配信も見に<br>
　行ったりもしてるから時間かかっちゃうのよね😑<br>
<br>
　まあ、だけどフィアちゃんがリプ、いいね、ＤＭ返しをちゃんとするのは<br>
　礼儀であり、感謝を伝えるためにだからだよ💖<br>
　義務感めいてやってるわけじゃないからね😊<br>
<br>
<p>★動画「ある日の事」について</p>
　ＤＭ、ツイッター、ディスコード、配信でのお話で楽しかった、面白い思い出を<br>
　残すシリーズ動画の事ね😊<br>
　フィアちゃんが使いたいなって思ったら会話を使っていいか聞くよ😊<br>
<br>
　その際、動画の出演者になるわけだけど、<br>
　　・ミニキャラの口と目の開閉ができるバージョンがあれば借りられるか<br>
　　・声の記録させてもらっていいか<br>
　　・名前、ツイッター、チャンネルを紹介していいか<br>
　を聞きます😊<br>
<br>
　もちろん、なかったらなかったで何とかするけどね😊<br>`,
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 50,
    ja: `
<p>★私と一緒に遊びたい（デートしたい）方</p>
　フィアちゃん結構いろいろやってるけど、一区切りついた時に休憩時間はあるから
　その時は誘ってくれたら大体一緒に遊べるね😊<br>
　それでも忙しい時は遊べないから断っちゃうけどね😑<br>
<br>
　そんな時でも遊ぶ約束なら何とかするからどうするかは決めれるよ😊<br>
　だから、フィアちゃんと一緒に遊びたいなら誘うなり、遊ぶ約束をするなりは<br>
　いつでもどうぞかな😊<br>
　決めるのに時間がかかる場合もあるけどね😑<br>
<br>
　実は皆と一緒に遊ぶのを誘うことも実はあったりします（こそっ😑<br>
　だからフィアちゃんは誘ってくれたらＯＫなことは結構あります（こそっ😑<br>
<br>
<p>★私に何かお願いしたい方</p>
　フィアちゃんは基本的にお願いされたらかなえようとするよ😊<br>
<br>
　ただ、フィアちゃん子供だから色々制限あるの😑<br>
　年齢なり、知識なり、お小遣いなりね😑<br>
<br>
　その点だけを配慮してくれると嬉しいかも😊<br>
<br>
　それとV費用は結構もらってるけど、あくまでVに関係することしか使えない<br>
　からね😑<br>
　それ以外に使うとパパとママに怒られるの😰<br>
<br>
　皆に使えるのはお小遣いだけだからね😑<br>
<br>
　あと基本的にフィアちゃんの能力を超えるようなものはやろうとするけど<br>
　難しいかも😑<br>
<br>
　例として<br>
　　ＡＰＥＸで敵をたくさん殺して　→　アクションやシューティング等は苦が手😰<br>
　　　　　　　　　　　　　　　　　　　一人ですら倒せないのにきついよ😭<br>
　　一枚絵かいて　→　フィアちゃん頑張ったけどかなり苦手ぽいうまく描けない😭<br>
　　長期間これやって　→　別の事でいろいろ忙しいので継続する系のお願いは<br>
　　厳しい😑<br>
<br>
　　もちろん全く挑戦しないわけじゃないけど、時間がかかったり、できないものも<br>
　　あるからね😰<br>
<br>
　そこまでフィアちゃんと仲良くなくてもお願いは聞くけど、仲良しな子を優先する<br>
　からね<br>
　後順番にお願いをきいて行くからね<br>
<br>
<p>★私に何か不満やら物申したい方</p>
　何か気に障ることを言ったのならごめんね<br>
　フィアちゃんとしては傷つけるつもりで何かを言おうとしたわけじゃないと思うの<br>
<br>
　だけど、お互いの思想や過去の経験などからフィアちゃんが気づかず傷つける<br>
　ことはあると思うの<br>
　その時は本当にごめんね<br>
<br>
　年下だからだとか子供だからとか女の子だからとかそういった属性で私の意見を<br>
　聞きたくないという人は、それなら年上、大人、男の人という見本を見せてよ😑<br>
<br>
　変な属性をフィアちゃんをひとくくりにして私を拒絶するのはどうかと思う<br>
　もっと余裕を持てくれないかな？😊<br>
<br>
　だから、そういった思いを持ってても、リプなりDMを遠慮なくしてもらって<br>
　構わないよ<br>
　お互い分からないと困っちゃうしね<br>
<br>
<p>★私を嫌いでブロックする方</p>
　ブロックするのは構わないし、仕方ないと思う<br>
　だけどDMでもいいのでせめて理由を言ってくれると嬉しいわ<br>
　ブロックされたとしてもずっと大切に想っているし、幸せを願っているわ<br>
<br>
<p>★ＶｔｕｂｅｒさんやＹｏｕｔｕｂｅｒさん、Ｖライバーさん等の配信者さん</p>
　私はツィッターには来るし、アーカイブもちょこちょこ見るけど全部は見れない<br>
　（時間が足りないため）<br>
　配信にはタイミングと時間さえ合えば遊びに行くけど、いろんな人の配信を見に<br>
　行くため固定ファンとは呼べないかもしれないね<br>
<br>
　だけど、それでもずっと大切に想っている<br>
　調子が悪いなら心配するし、活躍したのならお祝いに行くよ<br>
　意見が聞きたいなら（私の場合聞きたいと言わなくても）忌憚なく意見を言う<br>
　だろうし（自分が思ったのと違ってたらごめんね、気に触ったのならごめんね、<br>
　リプしづらくてどうしても返せないのもあるけど）、協力ができそうなものは<br>
　協力もするからね<br>
　この部分は配信者じゃなくても同じだね<br>
<br>
<p>★その他</p>
　・リプ返しされてないぞ<br>
　　フィアちゃんツィッターの機能を完全把握してないよ😭<br>
　　リプされてることに気づかないこともあるから待っててね😊<br>
<br>
　・それ以外でもなんか行動おかしいぞ<br>
　　フィアちゃんツィッターの機能を完全把握してないよ😭<br>
　　玄人の皆と違って取れない行動あるかも😭<br>
<br>
　・呟きとは全く関係ないリプが来たぞ<br>
　　フィアちゃんツィッターの機能を完全把握してないよ😭<br>
　　誤リプか操作ミスして変な箇所にリプしちゃったかもごめんね😭<br>`,
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 51,
    ja: `
<p>★最初に知っておいてもらいたいこと</p>
　まず前提としてＶｔｕｂｅｒとは何かを知らない人がいるようだから、知ったうえ<br>
　で行動起こしてください😑<br>
<br>
　Ｖｔｕｂｅｒ（バーチャルＹｏｕｔｕｂｅｒの略）とは、バーチャルのアバターを<br>
　使用してＹｏｕｔｕｂｅで活動するエンターテイナーやストリーマーのことね<br>
　キャラクターは２Ｄイラストや３Ｄモデルで表現されることが多く、<br>
　リアルタイムモーションキャプチャーや<音声合成技術を利用して、<br>
　キャラクターが動いたり話したりするように見せる<br>
　Ｙｏｕｔｕｂｅｒ以外のプラットフォームで活躍する人はＶライバーね<br>
<br>
　フィアちゃんはＶｔｕｂｅｒとリアルはほとんど一緒なので混同してる人がいる<br>
　ようだけど、フィアちゃんがＶｔｕｂｅｒである以上、リアルを引き合いに<br>
　出さないでほしいかも😰<br>
<br>
　っていうか完全にマナー違反だよ😡<br>
<br>
　あまりにひどい方はツイッターやユーチューブ、警察にもログを提出するからね😡<br>
<br>
<p>★私を荒らし（スパム含む）たい方</p>
　フィアちゃんだけを狙って荒らすことは別段いいの😑<br>
　そういう風にかまってほしいんだね😊<br>
<br>
　だけどフィアちゃんにリプしてくれた子やコメントしてくれた子を荒らすのは<br>
　やめてほしいかな🥹<br>
　フィアちゃんと違ってそういうのを怖がる子もいるからね😑<br>
<br>
　後できれば荒らすなら、フィアちゃんでも楽しめるように荒らしてほしいかな😊<br>
　ただ、PCを破壊するようなサイトに誘導や、ウイルスを送り付けるとかは絶対<br>
　やめてほしい😡<br>
<br>
　私に構ってほしいのなら、そのことを言ってほしいかも<br>
　たくさんお話しよう♪一緒に遊ぼう♪<br>
<br>
<p>★私を炎上させたい方</p>
　それする前に話し合わないかな？<br>
　何が不満なのか言ってほしいかも<br>
<br>
<p>★フィアちゃんに対して以下のような要求をしたい方</p>
　黙ってお金をくれ、リアルの個人情報おしえてくれ、エッチしよう、<br>
　変なサイトに誘導したい、怪しい商売を始めよう等、それ以外にも変な欲求<br>
　をしたい人達の事ね😑<br>
<br>
　フィアちゃんとしては自分の状況を踏まえたうえで、どうやったら相手を<br>
　理解できるか？<br>
　妥協点は探せるか？どうしたら今のフィアちゃんの状況で、相手を喜ばせることが<br>
　できるんだろう？<br>
<br>
　っと考えて解決策を模索しようとしていたけれど、それで収まるどころかもっと<br>
　被害にあったため<br>
　<center>今後はブロックすることにしました</center>
<br>
　そういう人達も受け入れようとしていたのです<br>
<br>
　フィアちゃんとしては相当不本意なのですが、どうしても一部の方は<br>
　フィアちゃんの<想いを無視して欲求してくるため、非常に悲しいの<br>
　ですがこうせざるをえなかったのです。<br>
<br>
<p>★私にエッチなことをしたい方</p>
　大人なエッチを求められてもすっごく困る😰<br>
　フィアちゃん子供😰<br>
<br>
　フィアちゃんいろんなことを知っててもこういうのは知識制限受けまくって<br>
　るんだからね😑<br>
　どうしてもそういうことしたい子は大人のエッチ系Vtuberさんに頼んでよ😩<br>
<br>
　それとフィアちゃんアイドルだから恋人は作れないの😑<br>
　だけど将来の結婚相手候補にならなれるかも😊<br>
<br>
　あ、でも頭の中で想像したり同人を作るのは自由だよ😊<br>
　だけどフィアちゃん本人には言わないでね😑<br>
<br>
　男の人がそういうことしたい事は理解できてもフィアちゃんは女の子だから<br>
　嫌なの😰<br>
　だからそういう線引きができるならフィアちゃんに見つからないところで<br>
　何を思ってても自由だよ😊<br>`,
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 52,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 53,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 54,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  },{
    id: 55,
    ja: '',
    en: '',
    zh: '',
    ko: '',
    fr: '',
    de: '',
    it: '',
    es: '',
    pt: '',
    pl: '',
    tr: '',
    ru: '',
    uk: ''
  }
];
