/* ====== ISI BAGIAN INI ====== */
const NAMA = "Nama";
const TAHUN = 2026,
  BULAN = 10,
  HARI = 28; // BULAN: 1-12
const LAGU = "lagu/lagu.mp3";
const JUDUL_LAGU = "Judul lagu",
  PENYANYI = "Penyanyi";
const FOTO = [
  "foto/1.jpg",
  "foto/2.jpg",
  "foto/3.jpg",
  "foto/4.jpg",
  "foto/5.jpg",
  "foto/6.jpg",
  "foto/7.jpg",
  "foto/8.jpg",
  "foto/9.jpg",
  "foto/10.jpg",
]; // maks 10
const VIDEO = ""; // contoh: "video/kenangan.mp4"

const TEKS = {
  slide1: [
    "Hari ini adalah tentang kamu. Tentang satu tahun lagi yang berhasil kamu lewati, tentang semua hal yang sudah kamu lalui, dan tentang semua hal baik yang masih menunggu di depan.",
    "Semoga di umur yang baru ini, kamu selalu punya alasan untuk tersenyum dan selalu dikelilingi hal-hal yang membuat kamu bahagia.",
  ],
  slide2:
    "Mungkin aku ga selalu bisa nunjukinnya lewat kata-kata, tapi aku selalu menghargai keberadaan kamu, perhatian kamu dan setiap hal kecil yang kamu lakukan. You mean more to me than you know.",
  pesan: [
    "Selamat ulang tahun, sayang. Aku mungkin nggak selalu pandai mengungkapkan apa yang aku rasakan, tapi hari ini aku ingin bilang kalau aku bersyukur bisa mengenal kamu dan menjadi bagian dari hidup kamu.",
    "Terima kasih untuk setiap waktu, cerita, perhatian, dan hal-hal kecil yang selama ini kamu kasih. Mungkin beberapa di antaranya terlihat sederhana, tapi buat aku semuanya punya arti.",
    "Di umur kamu yang baru ini, aku berharap semua yang sedang kamu perjuangkan bisa perlahan menemukan jalannya. Semoga kamu selalu diberi kesehatan, dimudahkan dalam setiap langkah, dan dikelilingi orang-orang yang benar-benar menyayangi kamu.",
    "Kalau nanti ada hari yang terasa berat, jangan lupa kalau kamu nggak harus menghadapi semuanya sendirian. Aku akan selalu berusaha ada untuk kamu, mendengarkan cerita kamu, menemani kamu, dan mendukung kamu sebisa yang aku bisa.",
    "Semoga kita masih punya banyak waktu untuk membuat cerita baru, pergi ke tempat-tempat baru, tertawa karena hal-hal kecil, dan mengumpulkan lebih banyak kenangan bersama.",
    "I'm really happy to have you in my life.",
  ],
  akhir: [
    "Terima kasih sudah hadir di hidup aku dan menjadi seseorang yang begitu berarti buat aku.",
    "Semoga kamu selalu bahagia, selalu sehat, dan apa pun yang kamu inginkan bisa perlahan menjadi nyata.",
    "Selamat bertambah usia, sayang. Semoga tahun ini menjadi tahun yang baik untuk kamu, dan semoga aku masih bisa ada di banyak cerita kamu.",
  ],
};

const TEKS_JP = {
  slide1: [
    "今日はあなたのための日。また一年を乗り越えたこと、これまで経験してきたすべてのこと、そしてこれから待っているたくさんの素敵なことのための日だよ。",
    "新しい年齢のあなたに、笑顔になれる理由がいつもありますように。そして、あなたを幸せにしてくれるものにいつも囲まれていますように。",
  ],
  slide2:
    "言葉ではうまく伝えられないこともあるかもしれないけれど、あなたがそばにいてくれること、あなたの気遣い、そしてあなたがしてくれる小さなことのすべてを、私はいつも大切に思っています。あなたが思っている以上に、私にとってあなたは大切な存在です。",
  pesan: [
    "お誕生日おめでとう、大好きな人。私は自分の気持ちを上手に言葉にするのが得意ではないかもしれないけれど、今日は伝えたいの。あなたと出会えて、あなたの人生の一部になれて、本当に感謝しています。",
    "これまでくれた時間も、お話も、気遣いも、小さな優しさも、ありがとう。中にはささいなことに見えるものもあるかもしれないけれど、私にとってはどれも意味のあるものです。",
    "新しい一年、あなたが頑張っていることが、少しずつ道を見つけていきますように。いつも健康でいられますように。一歩一歩が順調に進みますように。そして、あなたを心から大切に思う人たちに囲まれていますように。",
    "もし、つらいと感じる日があっても、すべてを一人で抱え込まなくていいことを忘れないで。私はいつもあなたのそばにいて、話を聞いて、寄り添って、できる限り支えられるように努力するよ。",
    "これからも、新しい思い出を作ったり、新しい場所へ出かけたり、ささいなことで笑い合ったり、二人の思い出をもっとたくさん集めていける時間がありますように。",
    "あなたが私の人生にいてくれて、本当に幸せです。",
  ],
  akhir: [
    "私の人生に現れて、私にとってこんなにも大切な人になってくれて、ありがとう。",
    "いつも幸せで、いつも元気で、あなたが願うことがひとつずつ叶っていきますように。",
    "お誕生日おめでとう、大好きな人。今年があなたにとって良い一年になりますように。そして、これからもあなたの物語の中に、私がいられますように。",
  ],
};
/* ====== SELESAI ====== */

const BLN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const HRI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const hari = HRI[new Date(TAHUN, BULAN - 1, HARI).getDay()];
let wi = 0;
const words = (t) =>
  t
    .split(" ")
    .map((w) => `<span class="w" style="--i:${wi++}">${w} </span>`)
    .join("");
const ps = (a) => {
  wi = 0;
  return a.map((t) => `<p>${words(t)}</p>`).join("");
};
const sec = (id, h) => `<section id="${id}">${h}</section>`;

function kalender() {
  const first = new Date(TAHUN, BULAN - 1, 1).getDay(),
    days = new Date(TAHUN, BULAN, 0).getDate();
  let h = ["S", "M", "T", "W", "T", "F", "S"]
    .map((d) => `<b>${d}</b>`)
    .join("");
  h += "<span></span>".repeat(first);
  for (let d = 1; d <= days; d++)
    h += `<span class="${d === HARI ? "hit" : ""}">${d}</span>`;
  return `<div class="cal rise d1"><h3>${BLN[BULAN - 1]}</h3><div class="grid">${h}</div></div>`;
}

const pages = [];
pages.push(
  sec(
    "cover",
    `
  <div class="cover-t"><p class="sub">untuk kamu yang hari ini bertambah usia</p><h2>Selamat ulang tahun,<br>${NAMA}</h2></div>
  <button class="sun" id="go">Sentuh aku</button>`,
  ),
);
pages.push(
  sec(
    "tgl",
    `
  <p class="sub rise">hari lahir orang favoritku</p>
  <div class="ring rise"><svg viewBox="0 0 200 200"><circle class="bg" cx="100" cy="100" r="90"/><circle class="fg" cx="100" cy="100" r="90"/></svg>
    <b><span id="num">0</span><small>${hari}, ${BLN[BULAN - 1]} ${TAHUN}</small></b></div>`,
  ),
);
pages.push(
  sec(
    "kalender",
    `
  <h2 class="rise">Tanggal spesial kamu</h2>${kalender()}
  <p class="sub rise d2">Nyalakan musiknya dulu ya!</p>
  <div class="player rise d3"><button class="pbtn" id="pp2" aria-label="Putar atau jeda">▶</button><div class="vinyl"></div>
    <div class="tt">${JUDUL_LAGU}<small>${PENYANYI}</small></div></div>`,
  ),
);
pages.push(
  sec(
    "kamu",
    `<h2 class="rise">Hari ini tentang kamu</h2><div class="glass">${ps(TEKS.slide1)}</div>`,
  ),
);
pages.push(
  sec(
    "surat",
    `
  <h2 class="rise">Ada surat kecil</h2>
  <div class="env rise"><div class="back"></div><div class="let">${TEKS.slide2}</div><div class="front"></div><div class="flap"></div></div>`,
  ),
);
for (let i = 0; i < FOTO.length; i += 5) {
  pages.push(
    sec(
      "foto" + i,
      `
    <h2 class="rise">${i === 0 ? "Kamu bulan di malam-malamku" : "Aku nggak pernah bosan lihat kamu"}</h2>
    <div class="deck rise" data-src='${JSON.stringify(FOTO.slice(i, i + 5))}' data-n="${i}"></div>
    <p class="hint">ketuk fotonya</p>`,
    ),
  );
}
if (VIDEO)
  pages.push(
    sec(
      "video",
      `<h2 class="rise">Satu momen buat kamu</h2><video class="rise" src="${VIDEO}" controls playsinline></video>`,
    ),
  );
pages.push(
  sec(
    "pesan",
    `<h2 class="rise">Pesan buat kamu</h2><div class="glass">${ps(TEKS.pesan)}</div>`,
  ),
);
pages.push(
  sec(
    "akhir",
    `
  <div class="heart rise">♥</div>
  <div class="glass">${ps(TEKS.akhir)}</div>
  <button class="btn rise" id="rew">Mulai dari awal</button>`,
  ),
);
const main = document.getElementById("main");
main.innerHTML = pages.join("");

/* langit: warna berubah mengikuti scroll */
const STOPS = [
  ["#4a3490", "#ff9a5c"],
  ["#3a2478", "#e8588a"],
  ["#241864", "#8a4fc0"],
  ["#150f45", "#3a2a8a"],
  ["#0c0a2a", "#241a62"],
];
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.substr(i, 2), 16));
const mix = (a, b, t) => {
  const x = hex(a),
    y = hex(b);
  return (
    "rgb(" + x.map((v, i) => Math.round(v + (y[i] - v) * t)).join(",") + ")"
  );
};
const sky = document.getElementById("sky"),
  sc = sky.getContext("2d"),
  stars = document.getElementById("stars");
let lastW = 0;
function setVh() {
  if (innerWidth !== lastW) {
    lastW = innerWidth;
    document.documentElement.style.setProperty("--vh", innerHeight + "px");
  }
}
function paintSky() {
  setVh();
  if (sky.width !== innerWidth || sky.height !== innerHeight) {
    sky.width = innerWidth;
    sky.height = innerHeight;
  }
  const max = main.scrollHeight - main.clientHeight || 1,
    p = Math.min(1, main.scrollTop / max) * (STOPS.length - 1);
  const k = Math.min(STOPS.length - 2, Math.floor(p)),
    t = p - k;
  const g = sc.createLinearGradient(0, 0, 0, sky.height);
  g.addColorStop(0, mix(STOPS[k][0], STOPS[k + 1][0], t));
  g.addColorStop(1, mix(STOPS[k][1], STOPS[k + 1][1], t));
  sc.fillStyle = g;
  sc.fillRect(0, 0, sky.width, sky.height);
  stars.style.opacity = Math.min(1, p / 2.2);
}
main.addEventListener("scroll", paintSky, { passive: true });
addEventListener("resize", paintSky);
paintSky();

/* balon */
const bw = document.getElementById("balloons"),
  BC = ["#ff7aa2", "#ffd27a", "#b69cff", "#6fe3d0", "#ff9d5c"];
for (let i = 0; i < 9; i++) {
  const b = document.createElement("div");
  b.className = "bl";
  b.style.cssText = `left:${5 + i * 11}%;background:${BC[i % 5]};animation-duration:${14 + ((i * 7) % 9)}s;animation-delay:${-i * 2.3}s`;
  bw.appendChild(b);
}

/* confetti */
const fx = document.getElementById("fx"),
  fc = fx.getContext("2d");
let parts = [],
  raf = 0;
function sizeFx() {
  fx.width = innerWidth;
  fx.height = innerHeight;
}
sizeFx();
addEventListener("resize", sizeFx);
function burst(x, y, n = 120) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2,
      s = 4 + Math.random() * 9;
    parts.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - 6,
      r: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.4,
      w: 5 + Math.random() * 6,
      h: 3 + Math.random() * 4,
      c: BC[i % 5],
      l: 1,
    });
  }
  if (!raf) raf = requestAnimationFrame(tick);
}
function tick() {
  fc.clearRect(0, 0, fx.width, fx.height);
  parts = parts.filter((p) => p.l > 0);
  parts.forEach((p) => {
    p.vy += 0.28;
    p.vx *= 0.985;
    p.x += p.vx;
    p.y += p.vy;
    p.r += p.vr;
    p.l -= 0.008;
    fc.save();
    fc.globalAlpha = Math.max(0, p.l);
    fc.translate(p.x, p.y);
    fc.rotate(p.r);
    fc.fillStyle = p.c;
    fc.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    fc.restore();
  });
  raf = parts.length ? requestAnimationFrame(tick) : 0;
}

/* tumpukan foto */
document.querySelectorAll(".deck").forEach((d) => {
  const src = JSON.parse(d.dataset.src),
    n0 = +d.dataset.n;
  let order = src.map((_, i) => i),
    busy = false;
  d.innerHTML = src
    .map(
      (s, i) =>
        `<div class="pc"><img src="${s}" alt="" onerror="this.style.opacity=.4"><i>${n0 + i + 1}</i></div>`,
    )
    .join("");
  const cards = [...d.children];
  const place = () =>
    order.forEach((ci, pos) => {
      const c = cards[ci],
        r = (((ci * 37) % 11) - 5) * 1.2;
      c.style.zIndex = 10 - pos;
      c.style.opacity = pos > 3 ? 0 : 1;
      c.style.transform = `translateY(${pos * 10}px) scale(${1 - pos * 0.04}) rotate(${pos ? r : 0}deg)`;
    });
  place();
  d.onclick = () => {
    if (busy) return;
    busy = true;
    const top = cards[order[0]];
    top.style.transform = "translate(130%,-20px) rotate(24deg)";
    top.style.opacity = 0;
    setTimeout(() => {
      order.push(order.shift());
      top.style.transition = "none";
      place();
      void top.offsetWidth;
      top.style.transition = "";
      busy = false;
    }, 520);
  };
});

/* animasi masuk per slide */
let counted = false;
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      e.target.classList.toggle("in", e.isIntersecting);
      if (e.isIntersecting && e.target.id === "tgl" && !counted) {
        counted = true;
        const el = document.getElementById("num"),
          t0 = performance.now();
        (function f(t) {
          const k = Math.min(1, (t - t0) / 1800);
          el.textContent = Math.round(HARI * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        })(t0);
      }
      if (e.isIntersecting && e.target.id === "akhir")
        burst(innerWidth / 2, innerHeight * 0.35, 140);
    }),
  { root: main, threshold: 0.55 },
);
document.querySelectorAll("section").forEach((s) => io.observe(s));

/* musik + tombol */
const song = document.getElementById("song"),
  pp2 = document.getElementById("pp2");
song.src = LAGU;
const sync = () => {
  pp2.textContent = song.paused ? "▶" : "❚❚";
  document.body.classList.toggle("playing", !song.paused);
};
song.onplay = song.onpause = sync;
pp2.onclick = () => (song.paused ? song.play() : song.pause());
document.getElementById("go").onclick = (e) => {
  const r = e.target.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 160);
  document.body.classList.add("started");
  song.play().catch(() => {});
  setTimeout(() => {
    document.body.classList.remove("locked");
    document.getElementById("tgl").scrollIntoView({ behavior: "smooth" });
  }, 1100);
};
document.getElementById("rew").onclick = () => {
  main.scrollTo({ top: 0 });
  song.currentTime = 0;
  song.play().catch(() => {});
};

/* ganti bahasa Indonesia <-> Jepang */
const UI_JP = {
  coverSub: "今日、また一つ年を重ねるあなたへ",
  coverTitle: "お誕生日おめでとう、<br>" + NAMA,
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
  bulan: BULAN + "月",
};
const UI_ID = {};
const UI_MAP = [
  ["coverSub", "#cover .sub"],
  ["coverTitle", "#cover h2"],
  ["go", "#go"],
  ["tglSub", "#tgl .sub"],
  ["kalH2", "#kalender h2"],
  ["kalSub", "#kalender .sub"],
  ["kamuH2", "#kamu h2"],
  ["suratH2", "#surat h2"],
  ["foto0", "#foto0 h2"],
  ["foto5", "#foto5 h2"],
  ["pesanH2", "#pesan h2"],
  ["rew", "#rew"],
  ["bulan", "#kalender .cal h3"],
];
UI_MAP.forEach(([k, sel]) => {
  const el = document.querySelector(sel);
  if (el) UI_ID[k] = el.innerHTML;
});
let jpMode = false;
function setBahasa() {
  const T = jpMode ? TEKS_JP : TEKS,
    U = jpMode ? UI_JP : UI_ID;
  UI_MAP.forEach(([k, sel]) => {
    const el = document.querySelector(sel);
    if (el && U[k] !== undefined) el.innerHTML = U[k];
  });
  document.querySelector("#kamu .glass").innerHTML = ps(T.slide1);
  document.querySelector("#surat .let").innerHTML = T.slide2;
  document.querySelector("#pesan .glass").innerHTML = ps(T.pesan);
  document.querySelector("#akhir .glass").innerHTML = ps(T.akhir);
  document.body.classList.toggle("jp", jpMode);
  document.getElementById("lang").textContent = jpMode ? "Indonesia" : "日本語";
}
document.getElementById("lang").onclick = () => {
  jpMode = !jpMode;
  setBahasa();
};
