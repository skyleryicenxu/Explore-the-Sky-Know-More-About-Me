/* =====================================================================
   网站文字内容 · SITE CONTENT
   ---------------------------------------------------------------------
   这个文件里只有文字，不用碰任何代码。
   规则只有三条：
   1. 只改英文双引号 "..." 里面的内容。
   2. 如果文字里要用双引号，写成 \"  ；或者直接用 “ ” 。
   3. 每一项后面的逗号 , 不要删。
   ===================================================================== */

window.SITE_CONTENT = {

  /* ---------- 开场（页面一打开看到的） ---------- */
  kicker: "Explore the Sky",                 // 名字上方的小字（网页上自动显示为大写）
  name: "Skyler Xu",                         // 大标题：你的名字
  tagline: "Fasten your seatbelt, and get to know a little more about me.",  // 名字下方的一句话
  scrollHint: "Scroll to take off",          // 电脑端滚动提示
  scrollHintMobile: "Swipe up to take off",  // 手机端滚动提示
  boardButton: "Board the flight",           // 开场按钮上的字：点了才开始旅程和音乐

  /* ---------- 背景音乐 ---------- */
  music: "music.mp3",                        // 音乐文件名：换歌就把新文件放进文件夹，改这里的名字
  musicVolume: 0.6,                          // 音量：0 到 1 之间

  /* ---------- 四朵云（每个 { } 是一朵云，按顺序飞过） ----------
     title = 卡片里的大字    text = 下面的小字
     label = 云上方和右侧进度条显示的标签
     想加一朵云：复制一整段 { ... }, 粘贴到后面；想删就整段删掉。 */
  label: "Fun fact",
  chapters: [
    {
      title: "When inspiration hits, sleep becomes optional?",
      text: "If I get a good idea in my head, I’ll keep working on it until it feels right — whether that takes an hour or the entire night."
    },
    {
      title: "A night owl who appreciates 8 a.m. classes",
      text: "Getting up early makes the day feel longer. I want to be awake for every bit of sunshine, especially during winter in Vancouver!"
    },
    {
      title: "Still stubbornly loyal to pen and paper",
      text: "I love the feel of writing on paper. I also love seeing my KOKUYO notebooks get thicker and more worn out over time."
    },
    {
      title: "I save my “overthinking” for the things that deserve it",
      text: "Same seat in class, same meal for months. I like keeping the little decisions simple, so I can save my brainpower for what matters most."
    }
  ],

  /* ---------- 降落（最后一朵云：联系方式） ---------- */
  landing: {
    label: "Landing",                        // 云上方和进度条的标签
    heading: "Thanks for flying with me.",   // 卡片大标题
    message: "",                             // 标题下的一句话（留空 "" 就不显示）
    email: "xuskyler2@gmail.com"             // 邮箱
  }
};
