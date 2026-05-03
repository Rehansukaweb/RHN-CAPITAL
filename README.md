
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>

:root {
  --bg-deep: #020617;
  --bg-card: #060f1e;
  --accent: #22c55e;
  --accent-dim: #16a34a;
  --accent-glow: rgba(34,197,94,0.18);
  --accent-glow-strong: rgba(34,197,94,0.35);
  --text-primary: #f0f6ff;
  --text-secondary: #94a3b8;
  --text-muted: #4b5563;
  --border: rgba(255,255,255,0.07);
  --border-accent: rgba(34,197,94,0.25);
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg-deep);
  color: var(--text-primary);
  font-family: var(--font-body);
  overflow-x: hidden;
  cursor: none;
}

.cursor { width:10px;height:10px;background:var(--accent);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;mix-blend-mode:screen; }
.cursor-ring { width:36px;height:36px;border:1.5px solid var(--accent);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9998;transition:width 0.2s,height 0.2s,opacity 0.2s;opacity:0.5; }

body::before { content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");opacity:0.025;pointer-events:none;z-index:9990; }

.mesh { position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden; }
.mesh-orb { position:absolute;border-radius:50%;filter:blur(100px);opacity:0.12;animation:drift 18s ease-in-out infinite alternate; }
.mesh-orb:nth-child(1) { width:600px;height:600px;background:radial-gradient(circle,#22c55e,transparent);top:-150px;left:-100px; }
.mesh-orb:nth-child(2) { width:400px;height:400px;background:radial-gradient(circle,#0ea5e9,transparent);bottom:-100px;right:-50px;animation-delay:-6s; }
.mesh-orb:nth-child(3) { width:300px;height:300px;background:radial-gradient(circle,#22c55e,transparent);top:50%;left:50%;animation-delay:-12s;opacity:0.06; }
@keyframes drift { 0%{transform:translate(0,0) scale(1);} 100%{transform:translate(40px,30px) scale(1.1);} }

.grid-lines { position:fixed;inset:0;background-image:linear-gradient(rgba(34,197,94,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;z-index:0; }

header { position:fixed;width:100%;top:0;z-index:100;padding:0 40px; }
.nav { display:flex;justify-content:space-between;align-items:center;padding:18px 40px;border-bottom:1px solid var(--border);background:rgba(2,6,23,0.6);backdrop-filter:blur(20px);margin:0 -40px; }
.logo { display:flex;align-items:center;gap:12px;font-family:var(--font-display);font-weight:800;font-size:18px;letter-spacing:0.08em;text-transform:uppercase; }
.logo img { width:40px;border-radius:10px;box-shadow:0 0 20px var(--accent-glow); }
.logo-icon { width:40px;height:40px;background:linear-gradient(135deg,var(--accent),var(--accent-dim));border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 0 20px var(--accent-glow); }
.menu { display:flex;align-items:center;gap:6px; }
.menu a { color:var(--text-secondary);text-decoration:none;font-size:13px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;padding:8px 16px;border-radius:8px;transition:color 0.2s,background 0.2s; }
.menu a:hover { color:var(--accent);background:var(--accent-glow); }

.hero { position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:120px 24px 60px;z-index:1; }
.hero-tag { display:inline-flex;align-items:center;gap:8px;background:var(--accent-glow);border:1px solid var(--border-accent);border-radius:100px;padding:6px 18px;font-size:12px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-bottom:32px;animation:fadeUp 0.8s ease both; }
.hero-tag-dot { width:6px;height:6px;background:var(--accent);border-radius:50%;box-shadow:0 0 8px var(--accent);animation:pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

.hero-logo { width:120px;margin-bottom:32px;animation:float 5s ease-in-out infinite,fadeUp 0.8s 0.1s ease both;border-radius:24px;box-shadow:0 0 60px var(--accent-glow); }
.hero h1 { font-family:var(--font-display);font-size:clamp(52px,8vw,96px);font-weight:800;letter-spacing:-0.02em;line-height:1;margin-bottom:24px;animation:fadeUp 0.8s 0.2s ease both; }
.hero h1 span { background:linear-gradient(135deg,#fff 30%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.hero p { max-width:600px;color:var(--text-secondary);font-size:16px;line-height:1.75;margin-bottom:40px;animation:fadeUp 0.8s 0.35s ease both; }
.hero-cta { display:flex;gap:14px;flex-wrap:wrap;justify-content:center;animation:fadeUp 0.8s 0.5s ease both; }

.btn-primary { display:inline-flex;align-items:center;gap:10px;padding:15px 32px;background:linear-gradient(135deg,var(--accent),var(--accent-dim));border:none;border-radius:12px;color:#020617;font-family:var(--font-body);font-size:15px;font-weight:600;cursor:none;transition:transform 0.25s,box-shadow 0.25s;text-decoration:none; }
.btn-primary:hover { transform:translateY(-3px) scale(1.03);box-shadow:0 12px 40px var(--accent-glow-strong); }
.btn-secondary { display:inline-flex;align-items:center;gap:10px;padding:15px 32px;background:transparent;border:1px solid var(--border-accent);border-radius:12px;color:var(--text-primary);font-family:var(--font-body);font-size:15px;font-weight:500;cursor:none;transition:background 0.25s,border-color 0.25s;text-decoration:none; }
.btn-secondary:hover { background:var(--accent-glow);border-color:var(--accent);color:var(--accent); }

.hero-stats { display:flex;gap:50px;margin-top:70px;animation:fadeUp 0.8s 0.65s ease both;flex-wrap:wrap;justify-content:center; }
.stat { text-align:center; }
.stat-num { font-family:var(--font-display);font-size:28px;font-weight:800;color:var(--accent); }
.stat-label { font-size:11px;color:var(--text-muted);letter-spacing:0.08em;text-transform:uppercase;margin-top:4px; }
.hero-divider { width:1px;height:40px;background:var(--border);align-self:center; }

@keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }
@keyframes fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }

.ticker-wrap { position:relative;z-index:1;background:rgba(34,197,94,0.06);border-top:1px solid var(--border-accent);border-bottom:1px solid var(--border-accent);overflow:hidden;padding:12px 0; }
.ticker-inner { display:flex;white-space:nowrap;animation:ticker 28s linear infinite; }
.ticker-item { display:inline-flex;align-items:center;gap:8px;padding:0 40px;font-size:13px;font-weight:500;color:var(--text-secondary); }
.ticker-item .up { color:var(--accent); }
.ticker-item .down { color:#ef4444; }
@keyframes ticker { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }

.section { position:relative;z-index:1;padding:110px 24px;max-width:1100px;margin:0 auto; }
.section-label { display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--accent);margin-bottom:20px; }
.section-label::before { content:'';width:20px;height:1px;background:var(--accent); }
.section-title { font-family:var(--font-display);font-size:clamp(32px,5vw,52px);font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:20px; }
.section-sub { color:var(--text-secondary);font-size:16px;line-height:1.7;max-width:600px; }
.section-center { text-align:center; }
.section-center .section-label { justify-content:center; }
.section-center .section-sub { margin:0 auto; }
.section-divider { width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent);margin:0 auto;max-width:1100px; }

.about-layout { display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;margin-top:60px; }
.about-box { background:var(--bg-card);border:1px solid var(--border);border-radius:24px;padding:40px;position:relative;overflow:hidden; }
.about-box::before { content:'';position:absolute;top:-60px;right:-60px;width:200px;height:200px;background:radial-gradient(circle,var(--accent-glow),transparent);border-radius:50%; }
.focus-chips { display:flex;flex-wrap:wrap;gap:10px;margin-top:30px; }
.chip { padding:7px 16px;background:var(--accent-glow);border:1px solid var(--border-accent);border-radius:100px;font-size:13px;font-weight:500;color:var(--accent); }

.services-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px; }
.service-card { background:var(--bg-card);border:1px solid var(--border);border-radius:20px;padding:36px 30px;cursor:none;transition:transform 0.35s cubic-bezier(.25,.46,.45,.94),box-shadow 0.35s,border-color 0.35s;text-decoration:none;color:inherit;display:block;position:relative;overflow:hidden; }
.service-card::before { content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--accent-glow),transparent);opacity:0;transition:opacity 0.35s; }
.service-card:hover { transform:translateY(-10px);box-shadow:0 20px 60px var(--accent-glow-strong);border-color:var(--border-accent); }
.service-card:hover::before { opacity:1; }
.service-icon { font-size:36px;margin-bottom:20px;display:block; }
.service-card h3 { font-family:var(--font-display);font-size:20px;font-weight:700;margin-bottom:10px; }
.service-card p { color:var(--text-secondary);font-size:14px;line-height:1.65; }
.service-action { display:inline-flex;align-items:center;gap:8px;margin-top:24px;padding:10px 20px;background:linear-gradient(135deg,var(--accent),var(--accent-dim));border-radius:10px;color:#020617;font-size:13px;font-weight:700;position:relative;z-index:1; }

.contact-grid { display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:40px; }
.contact-btn { display:inline-flex;align-items:center;gap:10px;padding:14px 28px;border-radius:12px;font-size:14px;font-weight:600;cursor:none;transition:transform 0.25s,box-shadow 0.25s;text-decoration:none;border:none;font-family:var(--font-body); }
.contact-btn-wa { background:linear-gradient(135deg,#25d366,#128c7e);color:white; }
.contact-btn-ig { background:linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);color:white; }
.contact-btn-tt { background:linear-gradient(135deg,#010101,#69c9d0);color:white;border:1px solid rgba(105,201,208,0.3); }
.contact-btn:hover { transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,0.3); }

footer { position:relative;z-index:1;text-align:center;padding:40px 24px;border-top:1px solid var(--border);color:var(--text-muted);font-size:13px;letter-spacing:0.05em; }
footer span { color:var(--accent); }

@media (max-width:900px) {
  header { padding:0 20px; }
  .nav { margin:0 -20px;padding-left:20px;padding-right:20px; }
  .menu { display:none; }
  .about-layout { grid-template-columns:1fr;gap:40px; }
  .services-grid { grid-template-columns:1fr; }
}

</style>
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<div class="mesh">
  <div class="mesh-orb"></div>
  <div class="mesh-orb"></div>
  <div class="mesh-orb"></div>
</div>
<div class="grid-lines"></div>

<!-- NAVBAR -->
<header>
  <div class="nav">
    <div class="logo">
      <img src="RHN LOGO.jpg" alt="RHN Capital" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="logo-icon" style="display:none">₿</div>
      <span>RHN CAPITAL</span>
    </div>
    <nav class="menu">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-tag">
    <span class="hero-tag-dot"></span>
    Platform Investasi Modern
  </div>

  <img class="hero-logo" src="RHN LOGO.jpg" alt="RHN Capital" onerror="this.style.display='none'">

  <h1><span>RHN CAPITAL</span></h1>

  <p>
    Platform investasi modern yang berfokus pada analisa pasar saham, cryptocurrency,
    dan trading forex berbasis strategi makro ekonomi global serta manajemen risiko profesional.
  </p>

  <div class="hero-cta">
    <a href="https://wa.me/6285717426626" target="_blank" class="btn-primary">
      Konsultasi Sekarang →
    </a>
    <a href="#services" class="btn-secondary">
      Lihat Layanan
    </a>
  </div>

  <div class="hero-stats">
    <div class="stat">
      <div class="stat-num">3+</div>
      <div class="stat-label">Asset Classes</div>
    </div>
    <div class="hero-divider"></div>
    <div class="stat">
      <div class="stat-num">Pro</div>
      <div class="stat-label">Risk Management</div>
    </div>
    <div class="hero-divider"></div>
    <div class="stat">
      <div class="stat-num">24/7</div>
      <div class="stat-label">Market Analysis</div>
    </div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker-wrap">
  <div class="ticker-inner">
    <span class="ticker-item">BTC/USDT <span class="up">▲ 2.4%</span></span>
    <span class="ticker-item">ETH/USDT <span class="up">▲ 1.8%</span></span>
    <span class="ticker-item">GOLD <span class="down">▼ 0.3%</span></span>
    <span class="ticker-item">USD/IDR <span class="up">▲ 0.7%</span></span>
    <span class="ticker-item">BBCA.JK <span class="up">▲ 1.2%</span></span>
    <span class="ticker-item">IHSG <span class="up">▲ 0.5%</span></span>
    <span class="ticker-item">EUR/USD <span class="down">▼ 0.2%</span></span>
    <span class="ticker-item">SOL/USDT <span class="up">▲ 3.6%</span></span>
    <span class="ticker-item">BTC/USDT <span class="up">▲ 2.4%</span></span>
    <span class="ticker-item">ETH/USDT <span class="up">▲ 1.8%</span></span>
    <span class="ticker-item">GOLD <span class="down">▼ 0.3%</span></span>
    <span class="ticker-item">USD/IDR <span class="up">▲ 0.7%</span></span>
    <span class="ticker-item">BBCA.JK <span class="up">▲ 1.2%</span></span>
    <span class="ticker-item">IHSG <span class="up">▲ 0.5%</span></span>
    <span class="ticker-item">EUR/USD <span class="down">▼ 0.2%</span></span>
    <span class="ticker-item">SOL/USDT <span class="up">▲ 3.6%</span></span>
  </div>
</div>

<!-- ABOUT -->
<section id="about" class="section">
  <div class="section-label">Tentang Kami</div>
  <div class="about-layout">
    <div>
      <h2 class="section-title">Investasi Cerdas,<br>Strategi Terukur</h2>
      <p class="section-sub">
        RHN Capital menggabungkan pendekatan investasi modern dengan analisa teknikal,
        fundamental, dan makro ekonomi global. Fokus utama kami adalah pertumbuhan aset
        jangka panjang melalui strategi probabilitas, risk management ketat, dan
        pemahaman siklus finansial dunia.
      </p>
    </div>
    <div>
      <div class="about-box">
        <div class="section-label">Fokus Investasi</div>
        <h3 style="font-family:var(--font-display);font-size:22px;font-weight:700;margin-bottom:10px;">Multi-Asset Coverage</h3>
        <p style="color:var(--text-secondary);font-size:14px;line-height:1.7;">
          Kami menganalisa berbagai kelas aset untuk membantu Anda membangun portofolio
          yang terdiversifikasi dan tahan terhadap volatilitas pasar.
        </p>
        <div class="focus-chips">
          <span class="chip">₿ Crypto Asset</span>
          <span class="chip">📈 Saham Global</span>
          <span class="chip">🇮🇩 Saham Indonesia</span>
          <span class="chip">💱 Forex</span>
          <span class="chip">🧠 Market Psychology</span>
          <span class="chip">📊 Portfolio Strategy</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- SERVICES -->
<section id="services" class="section">
  <div class="section-center">
    <div class="section-label" style="justify-content:center">Layanan</div>
    <h2 class="section-title">Layanan Platform</h2>
    <p class="section-sub">Tiga pilar analisa utama untuk mendukung keputusan investasi Anda.</p>
  </div>

  <div class="services-grid">
    <a href="ANALISACRYPTO.html" class="service-card">
      <span class="service-icon">₿</span>
      <h3>Analisa Crypto</h3>
      <p>Market cycle & Bitcoin strategy. Pahami siklus pasar kripto dan manfaatkan momentum optimal.</p>
      <div class="service-action">Buka →</div>
    </a>

    <a href="ANALISASAHAM.html" class="service-card">
      <span class="service-icon">📈</span>
      <h3>Analisa Saham</h3>
      <p>Valuasi & momentum market. Analisa fundamental dan teknikal saham global maupun Indonesia.</p>
      <div class="service-action">Buka →</div>
    </a>

    <a href="ANALISAFOREX.html" class="service-card">
      <span class="service-icon">💱</span>
      <h3>Trading Forex</h3>
      <p>Risk reward & macro analysis. Strategi trading forex berbasis data makro ekonomi global.</p>
      <div class="service-action">Buka →</div>
    </a>
  </div>
</section>

<div class="section-divider"></div>

<!-- CONTACT -->
<section id="contact" class="section section-center">
  <div class="section-label" style="justify-content:center">Hubungi Kami</div>
  <h2 class="section-title">Kontak</h2>
  <p class="section-sub">Pertanyaan atau konsultasi? Kami siap membantu Anda.</p>

  <div class="contact-grid">
    <a href="https://wa.me/6285717426626" target="_blank" class="contact-btn contact-btn-wa">
      📱 WhatsApp
    </a>
    <a href="https://instagram.com/huyrehan" target="_blank" class="contact-btn contact-btn-ig">
      📷 Instagram
    </a>
    <a href="https://tiktok.com/@rehanhuy" target="_blank" class="contact-btn contact-btn-tt">
      🎵 TikTok
    </a>
  </div>
</section>

<footer>
  © 2026 <span>RHN CAPITAL</span> — Investment Platform
</footer>

<script>
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width='56px';ring.style.height='56px';ring.style.opacity='0.8'; });
  el.addEventListener('mouseleave', () => { ring.style.width='36px';ring.style.height='36px';ring.style.opacity='0.5'; });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .about-box, .chip').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
</script>
</body>
</html>
