<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: 'Outfit', sans-serif;
  color: #e2ddd6;
  overflow-x: hidden;
  background: #0a0c0f;
  cursor: none;
}

/* CURSOR */
#cur {
  position:fixed; width:10px; height:10px;
  background:#b8933f; border-radius:50%;
  pointer-events:none; z-index:9999;
  transform:translate(-50%,-50%);
  transition:width .2s,height .2s;
}
#cur-ring {
  position:fixed; width:32px; height:32px;
  border:1px solid rgba(184,147,63,0.5); border-radius:50%;
  pointer-events:none; z-index:9998;
  transform:translate(-50%,-50%);
  transition:width .25s,height .25s,border-color .25s;
}
body:has(a:hover,button:hover,.card:hover) #cur { width:18px; height:18px; }
body:has(a:hover,button:hover,.card:hover) #cur-ring { border-color:#b8933f; width:48px; height:48px; }

/* BACKGROUND */
.bg-wrap { position:fixed; inset:0; z-index:0; overflow:hidden; pointer-events:none; }
.bg-base {
  position:absolute; inset:0;
  background: linear-gradient(135deg, #080a0d 0%, #0c0e08 30%, #0a0c0f 60%, #080b10 100%);
}
.bg-grid {
  position:absolute; inset:0;
  background-image:
    linear-gradient(rgba(184,147,63,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(184,147,63,0.04) 1px, transparent 1px);
  background-size: 72px 72px;
}
.bg-orb {
  position:absolute; border-radius:50%;
  animation:orb 18s ease-in-out infinite alternate;
}
.bg-orb.a { width:700px; height:700px; top:-250px; left:-200px; background:radial-gradient(circle, rgba(184,147,63,0.08) 0%, transparent 70%); }
.bg-orb.b { width:500px; height:500px; bottom:-150px; right:-150px; background:radial-gradient(circle, rgba(120,95,40,0.07) 0%, transparent 70%); animation-delay:-9s; }
.bg-orb.c { width:350px; height:350px; top:45%; left:55%; background:radial-gradient(circle, rgba(184,147,63,0.05) 0%, transparent 70%); animation-delay:-4s; }
@keyframes orb { from{transform:translate(0,0);} to{transform:translate(30px,40px);} }
.bg-noise {
  position:absolute; inset:0; opacity:0.35;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
}

/* NAVBAR */
header {
  position:fixed; width:100%; top:0; z-index:200;
  background:rgba(10,12,15,0.6);
  backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(184,147,63,0.1);
  transition:background .4s;
}
header.solid { background:rgba(10,12,15,0.95); }
.nav {
  display:flex; justify-content:space-between; align-items:center;
  padding:15px 36px;
}
.logo {
  display:flex; align-items:center; gap:12px; text-decoration:none;
}
.logo img {
  width:40px; height:40px; object-fit:contain;
  filter:drop-shadow(0 0 10px rgba(184,147,63,0.4));
}
.logo-name {
  font-family:'Playfair Display',serif;
  font-size:17px; font-weight:700; letter-spacing:0.1em;
  color:#e2ddd6;
}
.logo-name em { font-style:normal; color:#b8933f; }
.menu { display:flex; align-items:center; gap:4px; }
.menu button {
  background:none; border:none;
  font-family:'Outfit',sans-serif; font-size:13px;
  color:#6b6357; padding:8px 14px; cursor:none;
  transition:color .3s; position:relative;
}
.menu button::after {
  content:''; position:absolute; bottom:4px; left:14px;
  width:0; height:1px; background:#b8933f; transition:width .3s;
}
.menu button:hover { color:#b8933f; }
.menu button:hover::after { width:calc(100% - 28px); }
.menu .cta {
  background:rgba(184,147,63,0.1);
  border:1px solid rgba(184,147,63,0.3) !important;
  color:#b8933f !important; margin-left:10px;
  transition:background .3s, color .3s !important;
}
.menu .cta:hover { background:#b8933f !important; color:#0a0c0f !important; }
.menu .cta::after { display:none; }

/* HERO */
.hero {
  position:relative; z-index:1;
  min-height:100vh;
  display:flex; flex-direction:column;
  justify-content:center; align-items:center; text-align:center;
  padding:110px 24px 80px;
}
.hero-badge {
  display:inline-flex; align-items:center; gap:10px;
  border:1px solid rgba(184,147,63,0.22); padding:7px 18px;
  font-size:10px; letter-spacing:0.25em; text-transform:uppercase;
  color:#b8933f; margin-bottom:36px;
  animation:fadeup .8s ease both;
}
.hero-badge::before {
  content:''; width:6px; height:6px; border-radius:50%;
  background:#b8933f; animation:pulse 2s infinite;
}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
.hero img {
  width:min(220px,45vw); margin-bottom:28px;
  filter:drop-shadow(0 0 36px rgba(184,147,63,0.35));
  animation:float 5s ease-in-out infinite, fadeup 1s ease 0.2s both;
}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
.hero h1 {
  font-family:'Playfair Display',serif;
  font-size:clamp(44px,8vw,90px); font-weight:700;
  line-height:1; letter-spacing:0.06em; color:#e2ddd6;
  margin-bottom:10px;
  animation:fadeup 1s ease 0.35s both;
}
.hero h1 em { font-style:italic; color:#b8933f; }
.hero-tagline {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:clamp(13px,2vw,17px); color:#4a4640;
  letter-spacing:0.2em; margin-bottom:28px;
  animation:fadeup 1s ease 0.5s both;
}
.hero p {
  max-width:600px; font-size:15px; line-height:1.9;
  color:#6b6357; margin-bottom:44px;
  animation:fadeup 1s ease 0.65s both;
}
.hero-btns {
  display:flex; gap:14px; flex-wrap:wrap; justify-content:center;
  animation:fadeup 1s ease 0.8s both;
}
@keyframes fadeup{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
.hero-line {
  position:absolute; bottom:0; left:0; width:100%; height:1px;
  background:linear-gradient(90deg,transparent,rgba(184,147,63,0.18),transparent);
}

/* BUTTONS */
.btn {
  display:inline-flex; align-items:center; gap:8px;
  font-family:'Outfit',sans-serif; font-size:12px; font-weight:500;
  letter-spacing:0.12em; text-transform:uppercase;
  padding:14px 30px; border:none; cursor:none;
  text-decoration:none; transition:all .3s;
}
.btn-gold { background:#b8933f; color:#0a0c0f; }
.btn-gold:hover { background:#cfa84d; transform:translateY(-2px); }
.btn-outline { background:transparent; color:#b8933f; border:1px solid rgba(184,147,63,0.35) !important; }
.btn-outline:hover { background:rgba(184,147,63,0.07); border-color:rgba(184,147,63,0.6) !important; }

/* SECTION */
section { position:relative; z-index:1; }
.section { padding:90px 40px; max-width:1100px; margin:auto; }
.sec-label {
  display:flex; align-items:center; gap:14px; margin-bottom:14px;
}
.sec-line { width:32px; height:1px; background:#b8933f; }
.sec-tag {
  font-size:10px; letter-spacing:0.3em; text-transform:uppercase;
  color:#b8933f; font-weight:500;
}
.section h2 {
  font-family:'Playfair Display',serif;
  font-size:clamp(30px,4.5vw,50px); font-weight:700; line-height:1.1;
  color:#e2ddd6; margin-bottom:18px;
}
.section h2 em { font-style:italic; color:#b8933f; }
.section > p, .sec-body {
  font-size:15px; line-height:1.88; color:#6b6357; margin-bottom:14px; max-width:680px;
}

/* REVEAL */
.rev { opacity:0; transform:translateY(24px); transition:opacity .7s ease,transform .7s ease; }
.rev.on { opacity:1; transform:none; }

/* ABOUT */
#about { border-top:1px solid rgba(184,147,63,0.08); }
.about-cells {
  display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:1px; background:rgba(184,147,63,0.09); margin-top:52px;
}
.a-cell {
  background:#0a0c0f; padding:34px 26px; transition:background .3s;
}
.a-cell:hover { background:#0e1014; }
.a-cell-ico { font-size:26px; margin-bottom:14px; }
.a-cell h3 {
  font-family:'Playfair Display',serif; font-size:17px; font-weight:700;
  color:#e2ddd6; margin-bottom:9px;
}
.a-cell p { font-size:13px; line-height:1.7; color:#5a5650; }
.tags { display:flex; flex-wrap:wrap; gap:9px; margin-top:32px; }
.tag {
  font-size:10px; letter-spacing:0.15em; text-transform:uppercase;
  color:#5a5650; border:1px solid rgba(184,147,63,0.15);
  padding:7px 16px; transition:all .3s;
}
.tag:hover { color:#b8933f; border-color:rgba(184,147,63,0.45); }

/* SERVICES */
#services { border-top:1px solid rgba(184,147,63,0.08); }
.svc-grid {
  display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:1px; background:rgba(184,147,63,0.09); margin-top:52px;
}
.card {
  background:#0a0c0f; padding:42px 34px;
  cursor:none; transition:background .4s; position:relative; overflow:hidden;
}
.card::before {
  content:''; position:absolute; top:0; left:0; right:0; height:0;
  background:linear-gradient(180deg,rgba(184,147,63,0.05),transparent);
  transition:height .4s;
}
.card:hover { background:#0d0f12; }
.card:hover::before { height:100%; }
.card-no { font-size:10px; letter-spacing:0.2em; color:#2a2820; margin-bottom:22px; }
.card-ico { font-size:30px; margin-bottom:18px; }
.card h3 {
  font-family:'Playfair Display',serif; font-size:22px; font-weight:700;
  color:#e2ddd6; margin-bottom:10px;
}
.card p { font-size:13px; line-height:1.7; color:#5a5650; margin-bottom:26px; }
.card-link {
  display:inline-flex; align-items:center; gap:8px;
  font-size:10px; letter-spacing:0.15em; text-transform:uppercase;
  color:#b8933f; font-weight:500; transition:gap .3s;
}
.card:hover .card-link { gap:14px; }

/* INFO SECTIONS */
.info-sec { border-top:1px solid rgba(184,147,63,0.08); }
.info-wrap {
  display:grid; grid-template-columns:1fr 1fr;
  gap:68px; align-items:start;
  padding:90px 40px; max-width:1100px; margin:auto;
}
.info-wrap.rev-dir { direction:rtl; }
.info-wrap.rev-dir > * { direction:ltr; }
.info-h2 {
  font-family:'Playfair Display',serif;
  font-size:clamp(26px,3.5vw,42px); font-weight:700; line-height:1.1;
  color:#e2ddd6; margin-bottom:16px;
}
.info-h2 em { font-style:italic; color:#b8933f; }
.info-p { font-size:15px; line-height:1.88; color:#6b6357; margin-bottom:10px; }
.facts {
  display:flex; flex-direction:column; gap:1px;
  background:rgba(184,147,63,0.09); margin-top:32px;
}
.fact {
  background:#0a0c0f; padding:18px 22px;
  display:flex; align-items:flex-start; gap:14px;
  transition:background .3s;
}
.fact:hover { background:#0e1014; }
.fact-dot { width:7px; height:7px; border-radius:50%; background:#b8933f; flex-shrink:0; margin-top:5px; }
.fact-title { font-size:13px; font-weight:600; color:#c0b8a8; margin-bottom:3px; }
.fact-desc { font-size:12px; line-height:1.65; color:#5a5650; }
.stats-grid {
  display:grid; grid-template-columns:1fr 1fr;
  gap:1px; background:rgba(184,147,63,0.09);
  border:1px solid rgba(184,147,63,0.09);
}
.stat-box { background:#0a0c0f; padding:26px 22px; }
.stat-val {
  font-family:'Playfair Display',serif;
  font-size:30px; font-weight:700; color:#b8933f; line-height:1; margin-bottom:5px;
}
.stat-lbl { font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:#3a3830; }
.quote-box {
  padding:26px; border:1px solid rgba(184,147,63,0.09);
  border-top:none; margin-bottom:1px;
}
.quote-box blockquote {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:17px; color:#5a5650; line-height:1.65; text-align:center;
}
.quote-box cite {
  display:block; text-align:center; margin-top:12px;
  font-size:10px; letter-spacing:0.2em; text-transform:uppercase;
  color:#302e28; font-style:normal;
}
.cta-box { padding:0 0 1px; }
.cta-box .btn { width:100%; justify-content:center; }

/* CONTACT */
#contact { border-top:1px solid rgba(184,147,63,0.08); }
.contact-list {
  display:flex; flex-direction:column; gap:1px;
  background:rgba(184,147,63,0.09);
  max-width:520px; margin:44px auto 0;
}
.c-link {
  display:flex; align-items:center; justify-content:space-between;
  background:#0a0c0f; padding:20px 26px;
  text-decoration:none; cursor:none; transition:background .3s;
}
.c-link:hover { background:#0d0f12; }
.c-lft { display:flex; align-items:center; gap:14px; }
.c-ico {
  width:36px; height:36px; border:1px solid rgba(184,147,63,0.18);
  display:grid; place-items:center; font-size:15px; transition:border-color .3s;
}
.c-link:hover .c-ico { border-color:rgba(184,147,63,0.55); }
.c-plat { font-size:9px; letter-spacing:0.15em; text-transform:uppercase; color:#3a3830; margin-bottom:2px; }
.c-handle { font-size:14px; font-weight:500; color:#b8b0a0; }
.c-arr { color:#3a3830; transition:color .3s,transform .3s; }
.c-link:hover .c-arr { color:#b8933f; transform:translate(4px,-4px); }

/* POPUP */
.popup {
  position:fixed; inset:0; z-index:1000;
  background:rgba(5,6,8,0.93); backdrop-filter:blur(12px);
  display:none; justify-content:center; align-items:center;
}
.popup.open { display:flex; }
.popup-box {
  background:#0d0f12; border:1px solid rgba(184,147,63,0.2);
  padding:44px; text-align:center; position:relative; max-width:360px; width:90%;
}
.popup-box::before {
  content:''; position:absolute; top:-1px; left:20%; right:20%; height:1px;
  background:linear-gradient(90deg,transparent,#b8933f,transparent);
}
.popup-box h3 {
  font-family:'Playfair Display',serif; font-size:22px; font-weight:700;
  color:#e2ddd6; margin-bottom:6px;
}
.popup-sub { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:#3a3830; margin-bottom:26px; }
.popup-box img { width:210px; height:210px; object-fit:contain; margin-bottom:18px; }
.popup-note { font-size:11px; line-height:1.7; color:#3a3830; margin-bottom:20px; }
.close-btn {
  position:absolute; top:14px; right:16px;
  font-size:10px; letter-spacing:0.2em; text-transform:uppercase;
  color:#3a3830; background:none; border:none; cursor:none; transition:color .3s;
}
.close-btn:hover { color:#b8933f; }

/* FOOTER */
footer {
  position:relative; z-index:1;
  border-top:1px solid rgba(184,147,63,0.08);
  padding:26px 40px;
  display:flex; justify-content:space-between; align-items:center;
}
.ft-l { font-size:12px; letter-spacing:0.08em; color:#2e2c26; }
.ft-r { font-size:11px; color:#222018; }

@media(max-width:820px){
  .nav{padding:14px 18px;}
  .menu button:not(.cta){display:none;}
  .hero{padding:90px 18px 60px;}
  .section{padding:64px 18px;}
  .info-wrap{grid-template-columns:1fr;gap:44px;padding:64px 18px;}
  .info-wrap.rev-dir{direction:ltr;}
  footer{flex-direction:column;gap:8px;text-align:center;padding:18px;}
}
</style>
</head>
<body>

<div id="cur"></div>
<div id="cur-ring"></div>

<div class="bg-wrap">
  <div class="bg-base"></div>
  <div class="bg-grid"></div>
  <div class="bg-orb a"></div>
  <div class="bg-orb b"></div>
  <div class="bg-orb c"></div>
  <div class="bg-noise"></div>
</div>

<!-- NAVBAR -->
<header id="hdr">
  <div class="nav">
    <a href="#" class="logo">
      <img src="RHN LOGO.jpg" alt="RHN">
      <span class="logo-name">RHN <em>CAPITAL</em></span>
    </a>
    <div class="menu">
      <button onclick="go('about')">About</button>
      <button onclick="go('services')">Services</button>
      <button onclick="go('crypto')">Crypto</button>
      <button onclick="go('saham')">Saham</button>
      <button onclick="go('forex')">Forex</button>
      <button onclick="go('contact')">Contact</button>
      <button class="cta" onclick="window.open('https://wa.me/6285717426626','_blank')">Konsultasi</button>
    </div>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-badge">Jakarta, Indonesia — Est. 2024</div>
  <img src="RHN LOGO.jpg" alt="RHN Capital">
  <h1>RHN <em>CAPITAL</em></h1>
  <p class="hero-tagline">Investment Intelligence Platform</p>
  <p>
    Platform investasi modern berbasis analisa teknikal, fundamental, dan makro ekonomi global.
    Kami membantu investor memahami market cycle, mengembangkan capital growth,
    dan membangun sistem trading yang disiplin dan terukur.
  </p>
  <div class="hero-btns">
    <button class="btn btn-gold" onclick="window.open('https://wa.me/6285717426626','_blank')">
      Konsultasi Sekarang
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>
    <button class="btn btn-outline" onclick="go('services')">Lihat Layanan</button>
  </div>
  <div class="hero-line"></div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="section rev">
    <div class="sec-label">
      <div class="sec-line"></div>
      <span class="sec-tag">Tentang Kami</span>
    </div>
    <h2>Investasi Bukan Spekulasi,<br><em>Tapi Strategi</em></h2>
    <p class="sec-body">
      RHN Capital menggabungkan pendekatan investasi modern dengan analisa teknikal, fundamental,
      dan makro ekonomi global. Fokus utama kami adalah pertumbuhan aset jangka panjang melalui
      strategi probabilitas tinggi, risk management ketat, dan pemahaman mendalam tentang siklus finansial dunia.
    </p>
    <p class="sec-body">
      Setiap keputusan investasi didasarkan pada data, bukan emosi — inilah yang membedakan trader
      profesional dari pelaku pasar retail yang reaktif.
    </p>
    <div class="tags">
      <span class="tag">Crypto Assets</span>
      <span class="tag">Saham Global</span>
      <span class="tag">Saham Indonesia</span>
      <span class="tag">Trading Forex</span>
      <span class="tag">Market Psychology</span>
      <span class="tag">Portfolio Strategy</span>
      <span class="tag">Risk Management</span>
      <span class="tag">Makro Ekonomi</span>
    </div>
    <div class="about-cells">
      <div class="a-cell rev">
        <div class="a-cell-ico">📊</div>
        <h3>Analisa Teknikal</h3>
        <p>Price action, pattern recognition, dan indikator momentum untuk entry/exit presisi di berbagai timeframe.</p>
      </div>
      <div class="a-cell rev">
        <div class="a-cell-ico">🌐</div>
        <h3>Makro Ekonomi</h3>
        <p>Fed rate, DXY, yield curve, inflasi, dan sentimen global sebagai landasan keputusan investasi jangka panjang.</p>
      </div>
      <div class="a-cell rev">
        <div class="a-cell-ico">🛡️</div>
        <h3>Risk Management</h3>
        <p>Position sizing, stop loss, dan portfolio hedging untuk menjaga kapital dan meminimalkan drawdown.</p>
      </div>
      <div class="a-cell rev">
        <div class="a-cell-ico">🧠</div>
        <h3>Market Psychology</h3>
        <p>Fear & greed cycle, behavioral finance, dan crowd psychology — memahami pasar berarti memahami manusia.</p>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section id="services">
  <div class="section rev" style="text-align:center;">
    <div class="sec-label" style="justify-content:center;">
      <div class="sec-line"></div>
      <span class="sec-tag">Layanan Platform</span>
      <div class="sec-line"></div>
    </div>
    <h2>Pilih <em>Layanan</em> Anda</h2>
    <p style="margin:0 auto;">Tiga layanan utama untuk semua profil investor — dari pemula hingga trader berpengalaman.</p>
    <div class="svc-grid" style="margin-top:52px;">
      <div class="card rev" onclick="window.location.href='ANALISACRYPTO.html'">
        <div class="card-no">01</div>
        <div class="card-ico">₿</div>
        <h3>Analisa Crypto</h3>
        <p>Market cycle, on-chain metrics, Bitcoin halving strategy, altcoin rotation & DeFi opportunities.</p>
        <div class="card-link">
          Buka Analisa
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
      <div class="card rev" onclick="window.location.href='ANALISASAHAM.html'">
        <div class="card-no">02</div>
        <div class="card-ico">📈</div>
        <h3>Analisa Saham</h3>
        <p>Valuasi fundamental, earnings momentum, IDX sectoral rotation & global equity exposure.</p>
        <div class="card-link">
          Buka Analisa
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
      <div class="card rev" onclick="window.location.href='ANALISAFOREX.html'">
        <div class="card-no">03</div>
        <div class="card-ico">💱</div>
        <h3>Trading Forex</h3>
        <p>Macro-driven FX strategy, COT report, risk-reward optimization & institutional order flow.</p>
        <div class="card-link">
          Buka Analisa
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CRYPTO INFO -->
<section id="crypto" class="info-sec">
  <div class="info-wrap">
    <div class="rev">
      <div class="sec-label"><div class="sec-line"></div><span class="sec-tag">Crypto Assets</span></div>
      <h2 class="info-h2">Bitcoin &amp; <em>Digital Assets</em></h2>
      <p class="info-p">Crypto bukan sekadar aset spekulatif — ini adalah revolusi sistem keuangan global. Dengan memahami siklus halving Bitcoin, dominance chart, dan on-chain data, kita bisa mengantisipasi pergerakan pasar jauh sebelum terjadi.</p>
      <p class="info-p">RHN Capital menganalisa pasar crypto secara holistik: dari makro likuiditas global hingga sentimen retail, memberi Anda keunggulan informasi yang nyata.</p>
      <div class="facts">
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Bitcoin Halving Cycle</div><div class="fact-desc">Setiap ~4 tahun reward mining BTC dipotong 50%. Historis memicu bull market 12–18 bulan setelah halving terjadi.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">On-Chain Metrics</div><div class="fact-desc">MVRV ratio, exchange flow, whale accumulation — data blockchain transparan yang tidak bisa dimanipulasi institusi besar.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Altcoin Rotation</div><div class="fact-desc">Setelah BTC dominance puncak, likuiditas berpindah ke altcoin. Timing rotasi ini adalah kunci profit maksimal di bull market.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">DeFi & Layer 2</div><div class="fact-desc">Ekosistem terdesentralisasi membuka peluang yield farming, staking, dan eksposur early-stage ke protokol inovatif.</div></div></div>
      </div>
    </div>
    <div class="rev">
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-val">4×</div><div class="stat-lbl">Halving Terjadi</div></div>
        <div class="stat-box"><div class="stat-val">21M</div><div class="stat-lbl">Max BTC Supply</div></div>
        <div class="stat-box"><div class="stat-val">$2T+</div><div class="stat-lbl">Market Cap Total</div></div>
        <div class="stat-box"><div class="stat-val">24/7</div><div class="stat-lbl">Pasar Aktif</div></div>
      </div>
      <div class="quote-box">
        <blockquote>"Crypto adalah uang internet. Jangan takut pada volatilitasnya — pahami siklus, kelola risiko, manfaatkan opportunity."</blockquote>
        <cite>— RHN Capital</cite>
      </div>
      <div class="cta-box">
        <button class="btn btn-gold" onclick="window.location.href='ANALISACRYPTO.html'">
          Lihat Analisa Crypto
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- SAHAM INFO -->
<section id="saham" class="info-sec">
  <div class="info-wrap rev-dir">
    <div class="rev">
      <div class="sec-label"><div class="sec-line"></div><span class="sec-tag">Pasar Saham</span></div>
      <h2 class="info-h2">Saham Global <em>&amp; IDX</em></h2>
      <p class="info-p">Pasar saham adalah barometer ekonomi dunia. Membaca earnings season, memahami sektoral rotation, dan mengidentifikasi saham undervalued sebelum institusi masuk — itulah alpha sesungguhnya.</p>
      <p class="info-p">Dari blue chip IDX hingga saham teknologi global di NASDAQ, RHN Capital membantu Anda menavigasi pasar ekuitas dengan pendekatan sistematis dan berbasis data.</p>
      <div class="facts">
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Valuasi Fundamental</div><div class="fact-desc">P/E, PBV, ROE, debt-to-equity — filter saham berkualitas dari ribuan emiten yang listing di bursa global dan IDX.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Sectoral Rotation</div><div class="fact-desc">Setiap fase siklus ekonomi menguntungkan sektor berbeda. Rotasi tepat waktu antara cyclical dan defensive adalah edge utama.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Earnings Momentum</div><div class="fact-desc">Revisi earnings ke atas adalah katalis terkuat harga saham. Pantau consensus EPS dan surprise faktor setiap kuartal.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Saham IDX Unggulan</div><div class="fact-desc">BBCA, BBRI, TLKM, ASII hingga small-cap dengan potensi multibagger — analisa lengkap untuk investor domestik.</div></div></div>
      </div>
    </div>
    <div class="rev">
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-val">800+</div><div class="stat-lbl">Emiten IDX</div></div>
        <div class="stat-box"><div class="stat-val">$50T</div><div class="stat-lbl">NYSE Market Cap</div></div>
        <div class="stat-box"><div class="stat-val">LQ45</div><div class="stat-lbl">Index Terpantau</div></div>
        <div class="stat-box"><div class="stat-val">4×</div><div class="stat-lbl">Earning Season/Yr</div></div>
      </div>
      <div class="quote-box">
        <blockquote>"Beli saat orang takut, jual saat orang serakah — tapi selalu berdasarkan data, bukan perasaan semata."</blockquote>
        <cite>— RHN Capital</cite>
      </div>
      <div class="cta-box">
        <button class="btn btn-gold" onclick="window.location.href='ANALISASAHAM.html'">
          Lihat Analisa Saham
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- FOREX INFO -->
<section id="forex" class="info-sec">
  <div class="info-wrap">
    <div class="rev">
      <div class="sec-label"><div class="sec-line"></div><span class="sec-tag">Trading Forex</span></div>
      <h2 class="info-h2">Foreign Exchange <em>Market</em></h2>
      <p class="info-p">Forex adalah pasar terbesar di dunia dengan volume harian $7 triliun. Keunggulan trader profesional bukan pada prediksi arah — melainkan pada manajemen probabilitas dan eksekusi disiplin yang konsisten.</p>
      <p class="info-p">RHN Capital mengajarkan pendekatan macro-driven: memahami kebijakan bank sentral, data ekonomi, dan arus modal global sebagai kompas trading harian.</p>
      <div class="facts">
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Central Bank Policy</div><div class="fact-desc">Kebijakan Fed, ECB, BoJ menentukan arah major pairs. Memahami siklus suku bunga adalah edge terbesar trader forex.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">COT Report Analysis</div><div class="fact-desc">Commitment of Traders mengungkap posisi net spekulan besar — sinyal kontrarian sangat akurat di titik pembalikan pasar.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Risk-Reward Optimization</div><div class="fact-desc">Win rate 40% tetap bisa profit dengan R:R konsisten 1:2.5+. Matematika risk management tidak pernah berbohong.</div></div></div>
        <div class="fact"><div class="fact-dot"></div><div><div class="fact-title">Major & Minor Pairs</div><div class="fact-desc">EUR/USD, GBP/USD, USD/JPY, XAU/USD — analisa mendalam pasangan utama dengan likuiditas tertinggi di dunia.</div></div></div>
      </div>
    </div>
    <div class="rev">
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-val">$7T</div><div class="stat-lbl">Volume Harian</div></div>
        <div class="stat-box"><div class="stat-val">5×</div><div class="stat-lbl">Hari Aktif/Minggu</div></div>
        <div class="stat-box"><div class="stat-val">28+</div><div class="stat-lbl">Pairs Dipantau</div></div>
        <div class="stat-box"><div class="stat-val">1:2+</div><div class="stat-lbl">Target Risk-Reward</div></div>
      </div>
      <div class="quote-box">
        <blockquote>"Forex tidak butuh prediksi sempurna. Cukup sistem yang konsisten dan disiplin yang tidak pernah goyah."</blockquote>
        <cite>— RHN Capital</cite>
      </div>
      <div class="cta-box">
        <button class="btn btn-gold" onclick="window.location.href='ANALISAFOREX.html'">
          Lihat Analisa Forex
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="section rev" style="text-align:center;">
    <div class="sec-label" style="justify-content:center;">
      <div class="sec-line"></div>
      <span class="sec-tag">Hubungi Kami</span>
      <div class="sec-line"></div>
    </div>
    <h2>Mari <em>Terhubung</em></h2>
    <p style="margin:0 auto;">Pertanyaan soal investasi? Ingin konsultasi strategi? Kami siap membantu melalui platform pilihan Anda.</p>
    <div class="contact-list">
      <a href="https://wa.me/6285717426626" target="_blank" class="c-link">
        <div class="c-lft">
          <div class="c-ico">💬</div>
          <div><div class="c-plat">WhatsApp</div><div class="c-handle">+62 857-1742-6626</div></div>
        </div>
        <svg class="c-arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
      <a href="https://instagram.com/huyrehan" target="_blank" class="c-link">
        <div class="c-lft">
          <div class="c-ico">📷</div>
          <div><div class="c-plat">Instagram</div><div class="c-handle">@huyrehan</div></div>
        </div>
        <svg class="c-arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
      <a href="https://tiktok.com/@rehanhuy" target="_blank" class="c-link">
        <div class="c-lft">
          <div class="c-ico">🎵</div>
          <div><div class="c-plat">TikTok</div><div class="c-handle">@rehanhuy</div></div>
        </div>
        <svg class="c-arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- QRIS POPUP -->
<div class="popup" id="qrisPopup" onclick="if(event.target===this)closeQRIS()">
  <div class="popup-box">
    <button class="close-btn" onclick="closeQRIS()">✕ Tutup</button>
    <h3>Scan to Pay</h3>
    <p class="popup-sub">QRIS — semua app pembayaran diterima</p>
    <img src="QRIS.jpg.jpeg" alt="QRIS">
    <p class="popup-note">Setelah bayar, screenshot bukti transfer dan kirim ke WhatsApp untuk konfirmasi akses.</p>
    <a href="https://wa.me/6285717426626" target="_blank" class="btn btn-gold" style="width:100%;justify-content:center;text-decoration:none;">
      Konfirmasi via WhatsApp →
    </a>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="ft-l">© 2026 RHN CAPITAL — All rights reserved</div>
  <div class="ft-r">Investment Platform · Jakarta, Indonesia</div>
</footer>

<script>
/* CURSOR */
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function loop(){
  cur.style.left=mx+'px';cur.style.top=my+'px';
  rx+=(mx-rx)*.14;ry+=(my-ry)*.14;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(loop);
})();

/* NAV */
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>hdr.classList.toggle('solid',scrollY>50));

/* SCROLL */
function go(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}

/* QRIS */
function openQRIS(){document.getElementById('qrisPopup').classList.add('open');}
function closeQRIS(){document.getElementById('qrisPopup').classList.remove('open');}

/* REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('on'),i*70);});
},{threshold:0.08});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));
</script>
</body>
</html>
