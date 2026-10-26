/* ====== ISI BAGIAN INI ====== */
const NAMA = "sayang";
const TAHUN   = 2026, BULAN = 10, HARI = 28;      // BULAN: 1-12
const LAGU    = "lagu/lagu.mp3";
const JUDUL_LAGU = "Judul lagu", PENYANYI = "Penyanyi";
const FOTO = ["foto/1.jpg","foto/2.jpg","foto/3.jpg","foto/4.jpg","foto/5.jpg","foto/6.jpg"]; // maks 6
const UMUR = 20;
const FOTO_PIN_A = "foto/pin-a.jpg", FOTO_PIN_B = "foto/pin-b.jpg"; // foto di peta (sisi Indonesia, sisi Jepang)
const VIDEO = "video/kenangan.mp4";

const ASAL = "Indonesia", TUJUAN = "Jepang";
const ASAL_JP = "インドネシア", TUJUAN_JP = "日本";
const JUDUL_RUTE = "Kejutan kecil buat kamu";
const JUDUL_RUTE_JP = "あなたへの小さなサプライズ";
const TEKS = {
  rute: ["Meskipun jarak dan perbedaan zona waktu sering kali membatasi kita untuk merayakan hari spesial ini secara langsung, rasa sayang dan doaku selalu sampai untukmu tanpa berkurang sedikit pun. Selamat ulang tahun; terima kasih sudah terus bertahan, saling percaya, dan membuktikan bahwa ruang yang membentang di antara kita tidak pernah cukup jauh untuk menandingi eratnya hubungan kita."],
  slide1: [
    "Hari ini adalah tentang kamu. Tentang satu tahun lagi yang berhasil kamu lewati, tentang semua hal yang sudah kamu lalui, dan tentang semua hal baik yang masih menunggu di depan.",
    "Semoga di umur yang baru ini, kamu selalu punya alasan untuk tersenyum dan selalu dikelilingi hal-hal yang membuat kamu bahagia."
  ],
  slide2: "Mungkin aku ga selalu bisa nunjukinnya lewat kata-kata, tapi aku selalu menghargai keberadaan kamu, perhatian kamu dan setiap hal kecil yang kamu lakukan. You mean more to me than you know.",
  pesan: [
    "Selamat ulang tahun, sayang. Aku mungkin nggak selalu pandai mengungkapkan apa yang aku rasakan, tapi hari ini aku ingin bilang kalau aku bersyukur bisa mengenal kamu dan menjadi bagian dari hidup kamu.",
    "Terima kasih untuk setiap waktu, cerita, perhatian, dan hal-hal kecil yang selama ini kamu kasih. Mungkin beberapa di antaranya terlihat sederhana, tapi buat aku semuanya punya arti.",
    "Di umur kamu yang baru ini, aku berharap semua yang sedang kamu perjuangkan bisa perlahan menemukan jalannya. Semoga kamu selalu diberi kesehatan, dimudahkan dalam setiap langkah, dan dikelilingi orang-orang yang benar-benar menyayangi kamu.",
    "Kalau nanti ada hari yang terasa berat, jangan lupa kalau kamu nggak harus menghadapi semuanya sendirian. Aku akan selalu berusaha ada untuk kamu, mendengarkan cerita kamu, menemani kamu, dan mendukung kamu sebisa yang aku bisa.",
    "Semoga kita masih punya banyak waktu untuk membuat cerita baru, pergi ke tempat-tempat baru, tertawa karena hal-hal kecil, dan mengumpulkan lebih banyak kenangan bersama.",
    "I'm really happy to have you in my life."
  ],
  akhir: [
    "Terima kasih sudah hadir di hidup aku dan menjadi seseorang yang begitu berarti buat aku.",
    "Semoga kamu selalu bahagia, selalu sehat, dan apa pun yang kamu inginkan bisa perlahan menjadi nyata.",
    "Selamat bertambah usia, sayang. Semoga tahun ini menjadi tahun yang baik untuk kamu, dan semoga aku masih bisa ada di banyak cerita kamu."
  ]
};

const TEKS_JP = {
  rute: ["距離や時差のせいで、この特別な日を直接一緒にお祝いできないことが多いけれど、私の愛と祈りはいつも少しも減ることなくあなたに届いています。お誕生日おめでとう。ずっと耐えて、信じ合って、私たちの間に広がる距離が、私たちの絆の強さにはとても及ばないことを証明してくれて、ありがとう。"],
  slide1: [
    "今日はあなたのための日。また一年を乗り越えたこと、これまで経験してきたすべてのこと、そしてこれから待っているたくさんの素敵なことのための日だよ。",
    "新しい年齢のあなたに、笑顔になれる理由がいつもありますように。そして、あなたを幸せにしてくれるものにいつも囲まれていますように。"
  ],
  slide2: "言葉ではうまく伝えられないこともあるかもしれないけれど、あなたがそばにいてくれること、あなたの気遣い、そしてあなたがしてくれる小さなことのすべてを、私はいつも大切に思っています。あなたが思っている以上に、私にとってあなたは大切な存在です。",
  pesan: [
    "お誕生日おめでとう、大好きな人。私は自分の気持ちを上手に言葉にするのが得意ではないかもしれないけれど、今日は伝えたいの。あなたと出会えて、あなたの人生の一部になれて、本当に感謝しています。",
    "これまでくれた時間も、お話も、気遣いも、小さな優しさも、ありがとう。中にはささいなことに見えるものもあるかもしれないけれど、私にとってはどれも意味のあるものです。",
    "新しい一年、あなたが頑張っていることが、少しずつ道を見つけていきますように。いつも健康でいられますように。一歩一歩が順調に進みますように。そして、あなたを心から大切に思う人たちに囲まれていますように。",
    "もし、つらいと感じる日があっても、すべてを一人で抱え込まなくていいことを忘れないで。私はいつもあなたのそばにいて、話を聞いて、寄り添って、できる限り支えられるように努力するよ。",
    "これからも、新しい思い出を作ったり、新しい場所へ出かけたり、ささいなことで笑い合ったり、二人の思い出をもっとたくさん集めていける時間がありますように。",
    "あなたが私の人生にいてくれて、本当に幸せです。"
  ],
  akhir: [
    "私の人生に現れて、私にとってこんなにも大切な人になってくれて、ありがとう。",
    "いつも幸せで、いつも元気で、あなたが願うことがひとつずつ叶っていきますように。",
    "お誕生日おめでとう、大好きな人。今年があなたにとって良い一年になりますように。そして、これからもあなたの物語の中に、私がいられますように。"
  ]
};
/* ====== SELESAI ====== */

const BLN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const HRI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const hari = HRI[new Date(TAHUN, BULAN-1, HARI).getDay()];
let wi = 0;
const words = t => t.split(" ").map(w => `<span class="w" style="--i:${wi++}">${w} </span>`).join("");
const ps = a => { wi = 0; return a.map(t => `<p>${words(t)}</p>`).join(""); };
const sec = (id, h) => `<section id="${id}">${h}</section>`;

function kalender(){
  const first = new Date(TAHUN, BULAN-1, 1).getDay(), days = new Date(TAHUN, BULAN, 0).getDate();
  let h = ["S","M","T","W","T","F","S"].map(d => `<b>${d}</b>`).join("");
  h += "<span></span>".repeat(first);
  for(let d=1; d<=days; d++) h += `<span class="${d===HARI?'hit':''}">${d}</span>`;
  return `<div class="cal rise d1"><h3>${BLN[BULAN-1]}</h3><div class="grid">${h}</div></div>`;
}

function peta(){
  const path = "M70 215 C115 105 175 245 250 125";
  const pin = (x, y, id, src) => `<g transform="translate(${x} ${y})"><path d="M0 0L-13 -22A28 28 0 1 1 13 -22Z" fill="#cfe1ff"/><clipPath id="cp${id}"><circle cx="0" cy="-47" r="22"/></clipPath><circle cx="0" cy="-47" r="22" fill="#2a5fa8"/><image href="${src}" x="-22" y="-69" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#cp${id})"/></g>`;
  let roads = "";
  for(let i=1;i<7;i++) roads += `<path d="M0 ${i*43}H320"/><path d="M${i*46} 0V300"/>`;
  return `<svg class="peta" viewBox="0 0 320 300" role="img" aria-label="Peta ${ASAL} ke ${TUJUAN}">
    <defs><mask id="mr"><path class="mp" d="${path}" pathLength="1" fill="none" stroke="#fff" stroke-width="10"/></mask></defs>
    <rect width="320" height="300" rx="22" fill="#ffffff14"/>
    <g stroke="#ffffff1f" stroke-width="2" fill="none">${roads}</g>
    <path d="${path}" fill="none" stroke="#ffd27a" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" mask="url(#mr)"/>
    <text class="plane" x="149" y="174" font-size="26" text-anchor="middle" transform="rotate(-10 149 174)">✈</text>
    ${pin(70, 215, "a", FOTO_PIN_A)}${pin(250, 125, "b", FOTO_PIN_B)}
    <text class="lbA" x="70" y="238" text-anchor="middle" fill="#fff" font-size="15">${ASAL}</text>
    <text class="lbB" x="250" y="148" text-anchor="middle" fill="#fff" font-size="15">${TUJUAN}</text>
  </svg>`;
}

const pages = [];
pages.push(sec("cover", `
  <div class="cover-t"><p class="sub">untuk kamu yang hari ini genap ${UMUR} tahun</p><h2>Selamat ulang tahun,<br>${NAMA}</h2></div>
  <button class="sun" id="go">Sentuh aku</button>`));
pages.push(sec("tgl", `
  <p class="sub rise">hari lahir orang favoritku</p>
  <div class="ring rise"><svg viewBox="0 0 200 200"><circle class="bg" cx="100" cy="100" r="90"/><circle class="fg" cx="100" cy="100" r="90"/></svg>
    <b><span id="num">0</span><small>${hari}, ${BLN[BULAN-1]} ${TAHUN}</small></b></div>
  <h2 class="rise d2" id="umurTxt">Genap ${UMUR} tahun</h2>`));
pages.push(sec("kalender", `
  <h2 class="rise">Tanggal spesial kamu</h2>${kalender()}
  <p class="sub rise d2">Nyalakan musiknya dulu ya!</p>
  <div class="player rise d3"><button class="pbtn" id="pp2" aria-label="Putar atau jeda">▶</button><div class="vinyl"></div>
    <div class="tt">${JUDUL_LAGU}<small>${PENYANYI}</small></div></div>`));
pages.push(sec("kamu", `<h2 class="rise">Hari ini tentang kamu</h2><div class="glass">${ps(TEKS.slide1)}</div>`));
pages.push(sec("surat", `
  <h2 class="rise">Ada surat kecil</h2>
  <div class="env rise"><div class="back"></div><div class="let">${TEKS.slide2}</div><div class="front"></div><div class="flap"></div></div>`));
for(let i=0; i<FOTO.length; i+=6){
  pages.push(sec("foto"+i, `
    <h2 class="rise">${i===0 ? "Kamu bulan di malam-malamku" : "Aku nggak pernah bosan lihat kamu"}</h2>
    <div class="deck rise" data-src='${JSON.stringify(FOTO.slice(i,i+6))}' data-n="${i}"></div>
    <p class="hint">ketuk fotonya</p>`));
}
if(VIDEO) pages.push(sec("video", `<h2 class="rise">Satu momen buat kamu</h2><video class="rise" src="${VIDEO}" controls playsinline preload="metadata"></video>`));
pages.push(sec("rute", `<h2 class="rise">${JUDUL_RUTE}</h2><div class="rise d1">${peta()}</div><div class="glass rise d2">${ps(TEKS.rute)}</div>`));
pages.push(sec("pesan", `<h2 class="rise">Pesan buat kamu</h2><div class="glass">${ps(TEKS.pesan)}</div>`));
pages.push(sec("akhir", `
  <div class="heart rise">♥</div>
  <div class="glass">${ps(TEKS.akhir)}</div>
  <button class="btn rise" id="rew">Mulai dari awal</button>`));
const main = document.getElementById("main");
main.innerHTML = pages.join("");

/* langit: warna berubah mengikuti scroll */
const STOPS = [["#4a3490","#ff9a5c"],["#3a2478","#e8588a"],["#241864","#8a4fc0"],["#150f45","#3a2a8a"],["#0c0a2a","#241a62"]];
const hex = h => [1,3,5].map(i => parseInt(h.substr(i,2),16));
const mix = (a,b,t) => { const x=hex(a),y=hex(b); return "rgb("+x.map((v,i)=>Math.round(v+(y[i]-v)*t)).join(",")+")"; };
const sky = document.getElementById("sky"), sc = sky.getContext("2d"), stars = document.getElementById("stars");
let lastW = 0;
function setVh(){ if(innerWidth !== lastW){ lastW = innerWidth; document.documentElement.style.setProperty("--vh", innerHeight + "px"); } }
function paintSky(){
  setVh();
  if(sky.width !== innerWidth || sky.height !== innerHeight){ sky.width = innerWidth; sky.height = innerHeight; }
  const max = main.scrollHeight - main.clientHeight || 1, p = Math.min(1, main.scrollTop / max) * (STOPS.length-1);
  const k = Math.min(STOPS.length-2, Math.floor(p)), t = p - k;
  const g = sc.createLinearGradient(0,0,0,sky.height);
  g.addColorStop(0, mix(STOPS[k][0], STOPS[k+1][0], t)); g.addColorStop(1, mix(STOPS[k][1], STOPS[k+1][1], t));
  sc.fillStyle = g; sc.fillRect(0,0,sky.width,sky.height);
  stars.style.opacity = Math.min(1, p / 2.2);
}
addEventListener("resize", paintSky); paintSky();

/* balon */
const bw = document.getElementById("balloons"), BC = ["#8fb4e6","#cfe1ff","#6fa6e8","#ffffff","#b9d4ff"];
for(let i=0;i<9;i++){ const b=document.createElement("div"); b.className="bl";
  b.style.cssText=`left:${5+i*11}%;background:${BC[i%5]};animation-duration:${14+(i*7)%9}s;animation-delay:${-i*2.3}s`; bw.appendChild(b); }

/* confetti */
const fx = document.getElementById("fx"), fc = fx.getContext("2d"); let parts = [], raf = 0;
function sizeFx(){ fx.width = innerWidth; fx.height = innerHeight; } sizeFx(); addEventListener("resize", sizeFx);
function burst(x, y, n=120){
  for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, s=4+Math.random()*9;
    parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-6,r:Math.random()*6.28,vr:(Math.random()-.5)*.4,w:5+Math.random()*6,h:3+Math.random()*4,c:BC[i%5],l:1}); }
  if(!raf) raf = requestAnimationFrame(tick);
}
function tick(){
  fc.clearRect(0,0,fx.width,fx.height);
  parts = parts.filter(p => p.l > 0);
  parts.forEach(p => { p.vy += .28; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.l -= .008;
    fc.save(); fc.globalAlpha = Math.max(0,p.l); fc.translate(p.x,p.y); fc.rotate(p.r); fc.fillStyle = p.c; fc.fillRect(-p.w/2,-p.h/2,p.w,p.h); fc.restore(); });
  raf = parts.length ? requestAnimationFrame(tick) : 0;
}

/* tumpukan foto */
document.querySelectorAll(".deck").forEach(d => {
  const src = JSON.parse(d.dataset.src), n0 = +d.dataset.n; let order = src.map((_,i)=>i), busy = false;
  d.innerHTML = src.map((s,i) => `<div class="pc"><img src="${s}" alt="" onerror="this.style.opacity=.4"><i>${n0+i+1}</i></div>`).join("");
  const cards = [...d.children];
  const place = () => order.forEach((ci,pos) => { const c = cards[ci], r = ((ci*37)%11-5)*1.2;
    c.style.zIndex = 10-pos; c.style.opacity = pos>3 ? 0 : 1;
    c.style.transform = `translateY(${pos*10}px) scale(${1-pos*.04}) rotate(${pos?r:0}deg)`; });
  place();
  d.onclick = () => { if(busy) return; busy = true; const top = cards[order[0]];
    top.style.transform = "translate(130%,-20px) rotate(24deg)"; top.style.opacity = 0;
    setTimeout(() => { order.push(order.shift()); top.style.transition = "none"; place(); void top.offsetWidth; top.style.transition = ""; busy = false; }, 520); };
});

/* animasi masuk per slide */
let counted = false;
const io = new IntersectionObserver(es => es.forEach(e => {
  e.target.classList.toggle("in", e.isIntersecting);
  if(e.isIntersecting && e.target.id === "tgl" && !counted){ counted = true; const el = document.getElementById("num"), t0 = performance.now();
    (function f(t){ const k = Math.min(1,(t-t0)/1800); el.textContent = Math.round(HARI*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(f); })(t0); }
  if(e.isIntersecting && e.target.id === "akhir") burst(innerWidth/2, innerHeight*.35, 140);
}), {root:main, threshold:.55});
document.querySelectorAll("section").forEach(s => io.observe(s));

/* musik + tombol */
const song = document.getElementById("song"), pp2 = document.getElementById("pp2");
song.src = LAGU;
const sync = () => { pp2.textContent = song.paused ? "▶" : "❚❚"; document.body.classList.toggle("playing", !song.paused); };
song.onplay = song.onpause = sync;
pp2.onclick = () => song.paused ? song.play() : song.pause();
document.getElementById("go").onclick = e => {
  const r = e.target.getBoundingClientRect(); burst(r.left+r.width/2, r.top+r.height/2, 160);
  document.body.classList.add("started"); song.play().catch(()=>{});
  setTimeout(() => { document.body.classList.remove("locked"); document.getElementById("tgl").scrollIntoView({behavior:"smooth"}); }, 1100);
};
document.getElementById("rew").onclick = () => { main.scrollTo({top:0}); song.currentTime = 0; song.play().catch(()=>{}); };

/* ganti bahasa Indonesia <-> Jepang */
const UI_JP = {
  coverSub: UMUR + "歳の誕生日を迎えるあなたへ",
  umurTxt: UMUR + "歳になったね",
  asal: ASAL_JP,
  tujuan: TUJUAN_JP,
  coverTitle: "お誕生日おめでとう、<br>大好きな人",
  go: "触れてみて",
  tglSub: "大好きな人が生まれた日",
  kalH2: "特別な日",
  kalSub: "まずは音楽をつけてね！",
  kamuH2: "今日はあなたの日",
  suratH2: "小さな手紙",
  foto0: "あなたは私の夜の月",
  foto5: "あなたを見ていて飽きることはないよ",
  pesanH2: "あなたへの<br>メッセージ",
  rew: "最初から",
  videoH2: "あなたのための一瞬",
  ruteH2: JUDUL_RUTE_JP,
  bulan: BULAN + "月"
};
const UI_ID = {};
const UI_MAP = [
  ["coverSub", "#cover .sub"], ["umurTxt", "#umurTxt"], ["asal", ".lbA"], ["tujuan", ".lbB"], ["coverTitle", "#cover h2"], ["go", "#go"], ["tglSub", "#tgl .sub"],
  ["kalH2", "#kalender h2"], ["kalSub", "#kalender .sub"], ["kamuH2", "#kamu h2"], ["suratH2", "#surat h2"],
  ["foto0", "#foto0 h2"], ["foto5", "#foto5 h2"], ["pesanH2", "#pesan h2"], ["ruteH2", "#rute h2"], ["rew", "#rew"], ["videoH2", "#video h2"], ["bulan", "#kalender .cal h3"]
];
UI_MAP.forEach(([k, sel]) => { const el = document.querySelector(sel); if (el) UI_ID[k] = el.innerHTML; });
let jpMode = false;
const psx = a => jpMode ? (Array.isArray(a) ? a : [a]).map(t => `<p>${t}</p>`).join("") : ps(a);
function setBahasa() {
  const T = jpMode ? TEKS_JP : TEKS, U = jpMode ? UI_JP : UI_ID;
  UI_MAP.forEach(([k, sel]) => { const el = document.querySelector(sel); if (el && U[k] !== undefined) el.innerHTML = U[k]; });
  document.querySelector("#kamu .glass").innerHTML = psx(T.slide1);
  document.querySelector("#surat .let").innerHTML = T.slide2;
  document.querySelector("#rute .glass").innerHTML = psx(T.rute);
  document.querySelector("#pesan .glass").innerHTML = psx(T.pesan);
  document.querySelector("#akhir .glass").innerHTML = psx(T.akhir);
  document.body.classList.toggle("jp", jpMode);
  document.getElementById("lang").textContent = jpMode ? "🌐 Kembali ke Indonesia" : "🌐 Translate 日本語";
}
document.getElementById("lang").onclick = () => { jpMode = !jpMode; setBahasa(); };

/* kalau file lagu tidak ditemukan, beri tahu di kartu lagu */
song.addEventListener("error", () => {
  const s = document.querySelector("#kalender .tt small");
  if (s) s.textContent = "File lagu belum ditemukan";
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) song.pause();
});
window.addEventListener("pagehide", () => song.pause());