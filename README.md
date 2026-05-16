
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@300;400;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* ==========================================================================
   GOD TIER ELEGANCE (OBSIDIAN) + EXACT MOBILE SIZING
   ========================================================================== */

* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

:root {
  /* DARK MODE: OBSIDIAN & MUTED GOLD (Gelap & Elegan) */
  --bg: #070709; 
  --bg2: #0B0B0E; 
  --bg3: #111115;
  --card: linear-gradient(145deg, #111115 0%, #0D0D10 100%);
  --card-solid: #111115;
  --border: rgba(255, 255, 255, 0.04); 
  --border2: rgba(255, 255, 255, 0.08);
  --text: rgba(255, 255, 255, 0.95); 
  --text2: rgba(255, 255, 255, 0.7); 
  --text3: rgba(255, 255, 255, 0.45);
  --navy: #070709; 
  
  --gold: #C9A84C; 
  --gold2: #B89C49; 
  --green2: #5CA885; 
  --red2: #C96C6C;   
  --blue: #5C8AA8;
  
  --shadow-float: 0 20px 40px rgba(0,0,0,0.6);
  --radius: 16px; 
  --radius-sm: 12px;
}

body.light-mode {
  --bg: #F7F7F9; --bg2: #FCFCFD; --bg3: #FFFFFF;
  --card: linear-gradient(145deg, #FFFFFF 0%, #F9F9FB 100%);
  --card-solid: #FFFFFF;
  --border: rgba(0, 0, 0, 0.05); --border2: rgba(0, 0, 0, 0.1);
  --text: #1A1A1E; --text2: #4A4A52; --text3: #8C8C96;
  --navy: #FFFFFF; 
  --gold: #A68A3C; --gold2: #9E7D33; --green2: #468E6B; --red2: #B55858; --blue: #4A7694;
  --shadow-float: 0 16px 32px rgba(0,0,0,0.04);
}

body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.6s ease, color 0.6s ease;
}

/* TOP EXTERNAL LINKS */
.top-ext-links {
  display: flex; justify-content: flex-end; gap: 32px; padding: 12px 40px;
  background: var(--navy); border-bottom: 1px solid var(--border);
}
.nav-ext-btn {
  background: transparent; border: none; color: var(--gold2);
  font-weight: 500; font-size: 11px; font-family: 'Outfit', sans-serif;
  cursor: pointer; transition: 0.4s ease; text-transform: uppercase; letter-spacing: 1px;
}
.nav-ext-btn:hover { color: var(--gold); }

/* USD MINI WIDGET */
.usd-inline {
  font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text3);
  display: inline-block; font-weight: 400; padding: 2px 6px; background: var(--bg2); border-radius: 4px; margin-top: 4px;
}

/* ===== LOGO GAMBAR RHN ===== */
.auth-emblem {
  width: 60px; height: 60px; border-radius: 16px; object-fit: cover;
  margin-bottom: 24px; border: 1px solid var(--border2);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2); filter: grayscale(20%) contrast(110%);
}
.logo-emblem {
  width: 44px; height: 44px; border-radius: 12px; object-fit: cover;
  border: 1px solid var(--border2); filter: grayscale(20%);
}

/* ===== AUTH SCREEN ===== */
#auth-screen {
  position: fixed; inset: 0; background: var(--bg);
  display: flex; align-items: center; justify-content: center; z-index: 9999;
}
.auth-box {
  background: var(--card); border-radius: 24px; padding: 48px 40px;
  width: 100%; max-width: 380px; border: 1px solid var(--border);
  text-align: center; margin: 20px; box-shadow: var(--shadow-float);
}
.auth-logo { margin-bottom: 32px; }
.auth-title { font-size: 22px; font-weight: 400; color: var(--text); letter-spacing: 2px; margin-bottom: 8px; text-transform: uppercase; }
.auth-sub { font-size: 13px; color: var(--text3); font-weight: 300; letter-spacing: 0.5px; }
.auth-tabs { display: flex; border-bottom: 1px solid var(--border); margin-bottom: 32px; }
.auth-tab {
  flex: 1; padding: 16px 0; font-size: 12px; font-weight: 400; cursor: pointer; text-transform: uppercase; letter-spacing: 1.5px;
  background: transparent; border: none; color: var(--text3); transition: 0.4s ease; border-bottom: 1px solid transparent; margin-bottom: -1px;
}
.auth-tab.active { color: var(--text); border-bottom: 1px solid var(--gold2); }
.auth-field { margin-bottom: 20px; text-align: left; }
.auth-field label { display: none; }
.auth-field input {
  width: 100%; padding: 16px 0; font-size: 14px; font-weight: 300; font-family: 'Outfit', sans-serif;
  border: none; border-bottom: 1px solid var(--border2); background: transparent; color: var(--text);
  transition: all 0.4s ease; border-radius: 0;
}
.auth-field input:focus { border-color: var(--gold2); outline: none; padding-left: 8px; }
.auth-field input::placeholder { color: var(--text3); font-weight: 200; }
.auth-btn {
  width: 100%; padding: 16px; background: transparent; color: var(--text);
  border: 1px solid var(--border2); border-radius: var(--radius-sm); font-size: 12px; font-weight: 400;
  cursor: pointer; transition: 0.4s ease; margin-top: 24px; text-transform: uppercase; letter-spacing: 2px;
}
.auth-btn:hover { background: var(--text); color: var(--bg); border-color: var(--text); }
.auth-err { color: var(--red2); font-size: 12px; font-weight: 300; margin-bottom: 20px; display: none; letter-spacing: 0.5px; }
.auth-footer { margin-top: 32px; font-size: 11px; color: var(--text3); font-weight: 300; letter-spacing: 0.5px; }

/* ===== APP SCREEN ===== */
#app-screen { display: none; }

/* TOP HEADER */
.topbar {
  background: rgba(7, 7, 9, 0.85); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
  padding: 24px 40px; display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--border);
}
body.light-mode .topbar { background: rgba(247, 247, 249, 0.85); }
.logo { display: flex; align-items: center; gap: 16px; }
.logo-name { font-size: 16px; font-weight: 400; color: var(--text); letter-spacing: 3px; line-height: 1.2; }
.logo-tagline { font-size: 9px; font-weight: 300; color: var(--gold2); text-transform: uppercase; letter-spacing: 2px; margin-top: 2px; }

.topbar-right { display: flex; align-items: center; gap: 32px; }

/* STATS BAR */
.top-stats-row { display: flex; align-items: center; gap: 24px; }
.usd-rate-box, .sync-wrapper { display: flex; align-items: center; gap: 8px; }
.usd-rate-box .lbl { font-size: 10px; color: var(--text3); font-weight: 400; letter-spacing: 1px; text-transform: uppercase; display: none; }
.usd-rate-box .val { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 400; color: var(--text); padding: 6px 16px; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; }
.sync-wrapper { padding: 6px 16px; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; }
.sync-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; opacity: 0.8; }
.sync-label { font-size: 10px; font-weight: 400; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }

.live-clock { display: none; }

/* PROFILE BAR */
.user-info { display: flex; align-items: center; gap: 12px; padding: 6px 12px; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; }
.user-avatar { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--gold2); font-weight: 400; font-size: 11px; color: var(--gold2); display: flex; justify-content: center; align-items: center; }
.user-name { font-size: 12px; font-weight: 300; letter-spacing: 1px; color: var(--text); }
.logout-btn { background: transparent; border: 1px solid var(--border2); padding: 4px 12px; border-radius: 8px; font-size: 10px; font-weight: 400; cursor: pointer; transition: 0.4s ease; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; margin-left: 8px; }
@media (hover: hover) { .logout-btn:hover { color: var(--red2); border-color: var(--red2); } }
#theme-toggle { cursor: pointer; opacity: 0.8; transition: 0.4s; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--gold2); }

/* NAVIGATION (BENTUK KAPSUL SESUAI SCREENSHOT) */
.nav {
  padding: 32px 40px 24px; display: flex; gap: 12px; max-width: 1200px; margin: 0 auto;
  overflow-x: auto; scrollbar-width: none; white-space: nowrap; border-bottom: none;
}
.nav::-webkit-scrollbar { display: none; }
.nav-btn {
  padding: 10px 24px; font-size: 11px; font-weight: 400; color: var(--text3);
  border: 1px solid var(--border); border-radius: 100px; background: var(--bg2); cursor: pointer;
  transition: all 0.4s ease; text-transform: uppercase; letter-spacing: 1px;
}
.nav-btn.active { color: var(--bg); background: var(--text); border-color: var(--text); font-weight: 500; }

/* MAIN CONTAINER */
.main { padding: 16px 40px 80px; max-width: 1200px; margin: 0 auto; animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.page { display: none; } .page.active { display: block; animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* METRICS CARDS (DESAIN 2x2 UNTUK MOBILE NANTI) */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 40px; }
.m-card {
  background: var(--card); border-radius: var(--radius); padding: 24px;
  border: 1px solid var(--border); transition: all 0.5s ease; position: relative;
}
.m-label { font-size: 10px; font-weight: 400; text-transform: uppercase; color: var(--text3); margin-bottom: 12px; letter-spacing: 1px; }
.m-bar { height: 2px; background: var(--border2); margin-top: 16px; overflow: hidden; width: 100%; border-radius: 2px; }
.m-bar-fill { height: 100%; transition: width 1s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 2px; }
.inc .m-bar-fill { background: var(--green2); }
.exp .m-bar-fill { background: var(--red2); }
.bal .m-bar-fill { background: var(--border2); }
.cnt .m-bar-fill { background: var(--blue); }
.m-val { font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 400; color: var(--text); white-space: nowrap; margin-bottom: 4px; }
.m-val.pos { color: var(--green2); } .m-val.neg { color: var(--red2); } .m-val.gold { color: var(--gold2); } .m-val.blue { color: var(--blue); }
.m-sub { font-size: 10px; font-weight: 300; color: var(--text3); margin-top: 12px; }

/* PANELS & CARDS */
.panel { display: grid; grid-template-columns: 400px 1fr; gap: 32px; margin-bottom: 32px; }
.panel.wide { grid-template-columns: 1fr; }
.card { background: var(--card); border-radius: var(--radius); border: 1px solid var(--border); overflow: hidden; box-shadow: var(--shadow-float); }
.card-head { padding: 24px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
.card-title { font-size: 14px; font-weight: 400; color: var(--text); letter-spacing: 1px; text-transform: uppercase; }

/* FORMS */
.form-body { padding: 24px; }
.type-toggle { display: flex; gap: 8px; margin-bottom: 24px; background: var(--bg); padding: 4px; border-radius: 12px; border: 1px solid var(--border); }
.t-btn { flex: 1; padding: 12px 0; border: none; border-radius: 8px; font-size: 11px; font-weight: 400; cursor: pointer; background: transparent; color: var(--text3); transition: 0.4s; text-align: center; text-transform: uppercase; letter-spacing: 1px; }
.t-btn.income.active { color: var(--green2); background: var(--bg2); }
.t-btn.expense.active { color: var(--text); background: var(--bg2); }
.form-row { margin-bottom: 20px; }
.form-label { font-size: 10px; font-weight: 400; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 1px; }
.form-row input, .form-row select, .form-row textarea { width: 100%; padding: 14px 16px; font-size: 14px; font-weight: 300; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); background: var(--bg2); color: var(--text); outline: none; transition: 0.4s; border-radius: 12px; }
.form-row input:focus, .form-row select:focus, .form-row textarea:focus { border-color: var(--gold2); }
.form-row select option { background: var(--card-solid); color: var(--text); }
.form-row textarea { height: 80px; resize: none; }
.submit-btn { width: 100%; padding: 16px; background: transparent; color: var(--text); border: 1px solid var(--border2); border-radius: 12px; font-size: 11px; font-weight: 400; cursor: pointer; transition: 0.4s; margin-top: 8px; text-transform: uppercase; letter-spacing: 2px; }
.submit-btn:hover { background: var(--text); color: var(--bg); border-color: var(--text); }

/* HISTORY CARDS KEMBALI 100% ORIGINAL (SESUAI REQUEST) */
.list-wrap { padding: 16px 0 24px; }
.recent-item {
  padding: 16px 24px; margin: 0 24px 12px 24px; 
  border-radius: 16px; background: var(--bg2); border: 1px solid var(--border); 
  display: flex; align-items: center; justify-content: space-between;
}
.ri-icon {
  width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 18px; font-weight: 500; margin-right: 16px; flex-shrink: 0;
}
.ri-icon.inc { color: var(--green2); background: rgba(92, 168, 133, 0.1); border: 1px solid rgba(92, 168, 133, 0.2); }
.ri-icon.exp { color: var(--red2); background: rgba(201, 108, 108, 0.1); border: 1px solid rgba(201, 108, 108, 0.2); } 

.ri-left { display: flex; align-items: center; }
.ri-note { font-size: 14px; font-weight: 400; color: var(--text); text-transform: uppercase; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ri-meta { font-size: 11px; font-weight: 300; color: var(--text3); }
.cat-badge { font-size: 9px; font-weight: 300; padding: 2px 6px; border-radius: 6px; background: var(--bg); border: 1px solid var(--border); color: var(--text3); letter-spacing: 0.5px; text-transform: uppercase; }

.ri-right-wrap { display: flex; align-items: center; gap: 16px; }
.ri-right { text-align: right; }
.ri-amount { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 400; white-space: nowrap; }
.ri-amount.pos { color: var(--green2); } .ri-amount.neg { color: var(--text); } /* Sesuai screenshot HP, pengeluaran warnanya putih */

.del-btn-recent {
  background: transparent; border: none; color: var(--red2);
  width: 32px; height: 32px; display: flex; justify-content: center; align-items: center;
  cursor: pointer; font-size: 14px; font-weight: 500;
}

/* SUMMARY GRID */
.sum-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border); }
.sum-item { padding: 24px; border-right: 1px solid var(--border); }
.sum-item:last-child { border-right: none; }
.sum-label { font-size: 10px; font-weight: 400; color: var(--text3); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px; }
.sum-val { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 400; white-space: nowrap; }
.a-pos { color: var(--text); } .a-neg { color: var(--red2); }

/* CHARTS & FILTERS */
.chart-wrap { padding: 24px; }
.chart-legend { display: flex; justify-content: flex-end; gap: 24px; margin-bottom: 24px; }
.leg-item { display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 300; color: var(--text3); text-transform: uppercase; }
.leg-dot { width: 8px; height: 8px; border-radius: 2px; }
.period-bar, .filter-bar { display: flex; gap: 12px; padding: 20px 24px; border-bottom: 1px solid var(--border); overflow-x: auto; scrollbar-width: none; }
.p-btn { padding: 10px 20px; border: 1px solid var(--border); border-radius: 100px; font-size: 11px; font-weight: 300; cursor: pointer; background: var(--bg2); color: var(--text3); white-space: nowrap; transition: 0.4s; }
.p-btn.active { border-color: var(--text); color: var(--text); background: var(--card); }

/* ==========================================================================
   MOBILE RESPONSIVE - UKURAN PRESISI SESUAI SCREENSHOT HP USER
   ========================================================================== */
@media (max-width: 768px) {
  body { padding: 0; margin: 0; }
  
  .top-ext-links { justify-content: center; flex-wrap: wrap; padding: 12px 16px; gap: 8px; }
  .nav-ext-btn { font-size: 9px; padding: 4px 8px; }

  /* Header jadi numpuk rapi seperti screenshot */
  .topbar { padding: 16px; flex-direction: column; align-items: flex-start; gap: 16px; border-bottom: none; }
  .logo { margin-bottom: 4px; }
  
  .topbar-right { width: 100%; flex-direction: column; align-items: flex-start; gap: 16px; }
  .top-stats-row { width: 100%; display: flex; gap: 12px; }
  .usd-rate-box, .sync-wrapper { flex: 1; justify-content: center; padding: 10px; }
  
  .user-info { width: 100%; justify-content: flex-start; border: 1px solid var(--border); border-radius: 12px; padding: 8px 12px; gap: 12px; }
  .logout-btn { margin-left: auto; border: none; background: var(--bg); padding: 8px 16px; }
  #theme-toggle { position: absolute; right: 16px; top: 120px; } /* Atur posisi bulan */

  /* Navigasi Kapsul bisa di scroll */
  .nav { padding: 0 16px 16px; margin: 0; gap: 8px; justify-content: flex-start; }
  .nav-btn { padding: 10px 20px; font-size: 10px; flex-shrink: 0; }

  .main { padding: 0 16px 80px; }
  
  /* GRID 2x2 SEPERTI DI SCREENSHOT HP */
  .metrics { grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px; }
  .m-card { padding: 16px; border-radius: 16px; }
  .m-label { font-size: 9px; margin-bottom: 8px; }
  .m-val { font-size: 16px; }
  .m-sub { font-size: 9px; margin-top: 8px; }
  .m-bar { margin-top: 12px; }
  .usd-inline { font-size: 9px; padding: 2px 4px; }
  
  .panel { grid-template-columns: 1fr; gap: 16px; }
  .card { border-radius: 16px; }
  .card-head { padding: 16px; }
  .form-body { padding: 16px; }
  
  /* HISTORY MOBILE - KOTAK TERPISAH, ICON KIRI, NOMINAL KANAN */
  .list-wrap { padding: 8px 0 16px; }
  .recent-item { margin: 0 16px 12px; padding: 12px 16px; align-items: center; }
  .ri-icon { width: 36px; height: 36px; font-size: 16px; margin-right: 12px; }
  .ri-note { font-size: 13px; margin-bottom: 2px; }
  .ri-meta { font-size: 10px; }
  .cat-badge { display: none; } /* Sembunyikan badge di mobile biar gak sempit */
  .ri-right-wrap { gap: 8px; }
  .ri-amount { font-size: 14px; }
  .del-btn-recent { font-size: 12px; width: auto; height: auto; padding: 4px; }
  
  /* Tampilan Ringkasan Harian/Mingguan/dll */
  .sum-grid { grid-template-columns: 1fr; }
  .sum-item { border-right: none; border-bottom: 1px solid var(--border); padding: 16px; }
  .sum-item:last-child { border-bottom: none; }
  .chart-wrap { padding: 16px; }
  .period-bar, .filter-bar { padding: 16px; }
}
</style>
</head>
<body>

<div class="top-ext-links">
  <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 HALAMAN RHN CAPITAL ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='jurnal.html'">📈 JURNAL FOREX ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='aset.html'">📈 JURNAL ASET ↗</button>
</div>

<div id="auth-screen">
  <div class="auth-box">
    <div class="auth-logo">
      <img src="RHN LOGO.jpg" class="auth-emblem" alt="RHN Capital Logo">
      <div class="auth-title">RHN CAPITAL</div>
      <div class="auth-sub">Masuk untuk mengakses arus keuangan</div>
    </div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    <div id="auth-err" class="auth-err"></div>
    <div class="auth-field">
      <input type="email" id="auth-email" placeholder="Email" autocomplete="email">
    </div>
    <div class="auth-field">
      <input type="password" id="auth-pass" placeholder="Sandi" autocomplete="current-password" onkeydown="if(event.key==='Enter')doAuth()">
    </div>
    <div class="auth-field" id="field-confirm" style="display:none">
      <input type="password" id="auth-pass2" placeholder="Ulangi Sandi" autocomplete="new-password">
    </div>
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
  </div>
</div>

<div id="app-screen">
<div class="topbar">
  <div class="logo">
    <img src="RHN LOGO.jpg" class="logo-emblem" alt="RHN Capital Logo">
    <div>
      <div class="logo-name">RHN CAPITAL</div>
      <div class="logo-tagline">ARUS KEUANGAN</div>
    </div>
  </div>
  <div class="topbar-right">
    
    <div class="top-stats-row">
      <div class="usd-rate-box">
        <span class="val" id="usd-rate-val">...</span>
      </div>
      <div class="sync-wrapper">
        <span class="sync-dot" id="sync-dot" style="background: var(--text3);"></span>
        <span class="sync-label" id="sync-label">MENGHUBUNGKAN...</span>
      </div>
    </div>

    <div style="display:flex; width:100%; align-items:center; gap:12px; position:relative;">
        <button id="theme-toggle" onclick="toggleTheme()" title="Ganti Tema">🌙</button>
        <div class="user-info">
          <div class="user-avatar" id="user-avatar">?</div>
          <div class="user-name" id="user-name">-</div>
          <button class="logout-btn" onclick="doLogout()">KELUAR</button>
        </div>
    </div>
  </div>
</div>

<div class="nav">
  <button class="nav-btn active" onclick="switchPage('dashboard')">DASHBOARD</button>
  <button class="nav-btn" onclick="switchPage('harian')">HARIAN</button>
  <button class="nav-btn" onclick="switchPage('mingguan')">MINGGUAN</button>
  <button class="nav-btn" onclick="switchPage('bulanan')">BULANAN</button>
  <button class="nav-btn" onclick="switchPage('tahunan')">TAHUNAN</button>
  <button class="nav-btn" onclick="switchPage('riwayat')">RIWAYAT</button>
</div>

<div class="main">

<div id="page-dashboard" class="page active">
  <div class="metrics" id="metric-cards"></div>
  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div><div class="card-title">Tambah Transaksi</div></div>
      </div>
      <div class="form-body">
        <div class="type-toggle">
          <div class="t-btn income active" id="btn-inc" onclick="selType('income')">+ Pemasukan</div>
          <div class="t-btn expense" id="btn-exp" onclick="selType('expense')">- Pengeluaran</div>
        </div>
        <div class="form-row"><label class="form-label">JUMLAH (RP)</label><input type="number" id="f-amount" placeholder="0" min="0"></div>
        <div class="form-row"><label class="form-label">KATEGORI</label><select id="f-cat"><option value="">Pilih kategori...</option></select></div>
        <div class="form-row"><label class="form-label">KETERANGAN</label><textarea id="f-note" placeholder="Catatan transaksi..."></textarea></div>
        <div class="form-row"><label class="form-label">TANGGAL</label><input type="datetime-local" id="f-date"></div>
        <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title">Aktivitas Terakhir</div></div>
      <div id="recent-list" class="list-wrap" style="max-height:550px;overflow-y:auto"></div>
    </div>
  </div>
</div>

<div id="page-harian" class="page">
  <div class="card">
    <div class="card-head">
      <div class="card-title">Laporan Harian</div>
      <input type="date" id="pick-daily" onchange="renderDaily()" style="padding:8px 12px;font-size:12px;border:1px solid var(--border); border-radius:8px; background:var(--bg2);color:var(--text);font-family:'Outfit',sans-serif;outline:none;font-weight:300;">
    </div>
    <div class="sum-grid" id="daily-sum"></div>
    <div class="list-wrap" id="daily-body"></div>
  </div>
</div>

<div id="page-mingguan" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Mingguan</div></div>
    <div class="period-bar" id="week-sel"></div>
    <div class="sum-grid" id="week-sum"></div>
    <div class="chart-wrap">
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div></div>
      <div style="position:relative;height:240px"><canvas id="chartWeek"></canvas></div>
    </div>
    <div class="list-wrap" id="week-body"></div>
  </div>
</div>

<div id="page-bulanan" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Bulanan</div></div>
    <div class="period-bar" id="month-sel"></div>
    <div class="sum-grid" id="month-sum"></div>
    <div class="chart-wrap">
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div></div>
      <div style="position:relative;height:240px"><canvas id="chartMonth"></canvas></div>
    </div>
    <div class="list-wrap" id="month-body"></div>
  </div>
</div>

<div id="page-tahunan" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Tahunan</div></div>
    <div class="period-bar" id="year-sel"></div>
    <div class="sum-grid" id="year-sum"></div>
    <div class="chart-wrap">
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div></div>
      <div style="position:relative;height:240px"><canvas id="chartYear"></canvas></div>
    </div>
    <div class="list-wrap" id="year-body"></div>
  </div>
</div>

<div id="page-riwayat" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Semua Riwayat</div></div>
    <div class="filter-bar">
      <select id="flt-type" onchange="renderAll()"><option value="">Semua Filter</option><option value="income">Pemasukan Saja</option><option value="expense">Pengeluaran Saja</option></select>
      <input type="text" id="flt-search" placeholder="Cari..." oninput="renderAll()">
    </div>
    <div class="sum-grid" id="all-sum"></div>
    <div class="list-wrap" id="all-body"></div>
  </div>
</div>

</div></div><script type="module">
window.toggleTheme = function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  refreshAll(); 
};
if(localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); document.getElementById('theme-toggle').textContent = '☀️'; }

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, deleteDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = { apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg", authDomain: "rhn-capital.firebaseapp.com", projectId: "rhn-capital", storageBucket: "rhn-capital.firebasestorage.app", messagingSenderId: "74905216682", appId: "1:74905216682:web:4687a5b0bd7bcac09292d3" };
const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app);

const CATS = { income: ['Pemberian','Investasi','Ongkos Harian','Bonus','Dividen','Profit','Transfer Masuk','Lainnya'], expense: ['Jajan','Pembelian Aset(Investasi)','Infak','Kas','Utilitas','Transportasi','Makan','Minum','Loss','Lainnya'] };
let txs=[], curType='income', activePage='dashboard', charts={}, currentUSDRate = 16000, currentUser=null, unsubListener=null, authMode='login';

const fmt = n => 'Rp '+Math.round(n).toLocaleString('id-ID');
const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const nowISO = () => new Date().toISOString().slice(0,16);
const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtUSD = n => `<span class="usd-inline">$${(n / currentUSDRate).toFixed(2)}</span>`;

function initLiveUSD() {
  const socket = new WebSocket('wss://stream.binance.com:9443/ws/usdtidr@ticker');
  socket.addEventListener('message', e => {
      const newPrice = parseFloat(JSON.parse(e.data).c); 
      if (newPrice && newPrice !== currentUSDRate) { currentUSDRate = newPrice; document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); refreshAll(); }
  });
  socket.addEventListener('close', () => setTimeout(initLiveUSD, 3000));
}
async function fetchUSDRate() { try { const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); currentUSDRate = (await res.json()).rates.IDR; document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); refreshAll(); } catch (e) { document.getElementById('usd-rate-val').textContent = "Offline"; } }
fetchUSDRate().then(initLiveUSD); setInterval(fetchUSDRate, 300000); 

function showErr(msg){ const el=document.getElementById('auth-err'); el.textContent=msg; el.style.display='block'; }
function hideErr(){ document.getElementById('auth-err').style.display='none'; }
function setLoading(on){ document.getElementById('auth-submit-btn').disabled=on; document.getElementById('auth-submit-btn').textContent=on?'Memproses...':(authMode==='login'?'Masuk':'Daftar'); }
function setSyncStatus(ok){ document.getElementById('sync-dot').style.background=ok?'var(--green2)':'var(--red2)'; document.getElementById('sync-label').textContent=ok?'TERSINKRON':'OFFLINE'; }

window.switchTab=function(mode){ authMode=mode; document.getElementById('tab-login').classList.toggle('active',mode==='login'); document.getElementById('tab-register').classList.toggle('active',mode==='register'); document.getElementById('field-confirm').style.display=mode==='register'?'block':'none'; document.getElementById('auth-submit-btn').textContent=mode==='login'?'Masuk':'Daftar'; hideErr(); };
window.doAuth=async function(){ const email=document.getElementById('auth-email').value.trim(), pass=document.getElementById('auth-pass').value; hideErr(); if(!email||!pass)return showErr('Kosong.'); setLoading(true); try{ if(authMode==='login') await signInWithEmailAndPassword(auth,email,pass); else { if(pass!==document.getElementById('auth-pass2').value)return showErr('Sandi beda.'); await createUserWithEmailAndPassword(auth,email,pass); } } catch(e){ showErr(e.message); setLoading(false); } };
window.doLogout=async function(){ if(unsubListener){unsubListener();unsubListener=null;} txs=[]; await signOut(auth); };

onAuthStateChanged(auth,user=>{
  if(user){ currentUser=user; document.getElementById('auth-screen').style.display='none'; document.getElementById('app-screen').style.display='block'; setLoading(false); const name=user.displayName||user.email.split('@')[0]; document.getElementById('user-name').textContent=name; document.getElementById('user-avatar').textContent=name.charAt(0).toUpperCase(); listenTransactions(user.uid); }
  else { currentUser=null; document.getElementById('auth-screen').style.display='flex'; document.getElementById('app-screen').style.display='none'; if(unsubListener){unsubListener();unsubListener=null;} txs=[]; }
});

function listenTransactions(uid){ if(unsubListener)unsubListener(); unsubListener=onSnapshot(query(collection(db,'users',uid,'transactions'),orderBy('createdAt','desc')), snap=>{txs=snap.docs.map(d=>({id:d.id,...d.data()}));setSyncStatus(true);refreshAll();}, err=>{console.error(err);setSyncStatus(false);} ); }

window.addTx=async function(){ if(!currentUser)return; const amt=parseFloat(document.getElementById('f-amount').value), cat=document.getElementById('f-cat').value, note=document.getElementById('f-note').value.trim(), dt=document.getElementById('f-date').value; if(!amt||!cat)return alert('Isi data.'); document.getElementById('save-btn').textContent='...'; try{ await addDoc(collection(db,'users',currentUser.uid,'transactions'),{type:curType,amount:amt,category:cat,note:note||'-',date:dt||nowISO(),createdAt:serverTimestamp()}); document.getElementById('f-amount').value=''; document.getElementById('f-note').value=''; } catch(e){alert(e.message);} document.getElementById('save-btn').textContent='SIMPAN'; };
window.delTx=async function(id){ if(!currentUser||!confirm('Hapus?'))return; await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id)); };

window.selType=function(t){ curType=t; document.getElementById('btn-inc').classList.toggle('active',t==='income'); document.getElementById('btn-exp').classList.toggle('active',t==='expense'); const s=document.getElementById('f-cat'); s.innerHTML='<option value="">Pilih kategori...</option>'; CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)}); };

window.switchPage=function(p){ document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); document.querySelectorAll('.nav .nav-btn').forEach(el=>el.classList.remove('active')); document.getElementById('page-'+p).classList.add('active'); const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat']; document.querySelectorAll('.nav .nav-btn')[pages.indexOf(p)].classList.add('active'); activePage=p;refreshAll(); };

function calcSum(arr){ const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0); return{inc,exp,bal:inc-exp,count:arr.length}; }

function renderSumGrid(el,arr){ const s=calcSum(arr); el.innerHTML=`<div class="sum-item"><div class="sum-label">Pemasukan</div><div class="sum-val a-pos">${fmt(s.inc)}</div><div>${fmtUSD(s.inc)}</div></div><div class="sum-item"><div class="sum-label">Pengeluaran</div><div class="sum-val a-neg">${fmt(s.exp)}</div><div>${fmtUSD(s.exp)}</div></div><div class="sum-item"><div class="sum-label">Saldo</div><div class="sum-val ${s.bal>=0?'a-pos':'a-neg'}">${fmt(s.bal)}</div><div>${fmtUSD(s.bal)}</div></div>`; }

const createTxCard = (t) => `<div class="recent-item"><div class="ri-left"><div class="ri-icon ${t.type}">${t.type==='income'?'↑':'↓'}</div><div><div class="ri-note">${t.note} <span class="cat-badge">${t.category}</span></div><div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}</div></div></div><div class="ri-right-wrap"><div class="ri-right"><div class="ri-amount ${t.type==='income'?'pos':'neg'}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div><div>${fmtUSD(t.amount)}</div></div><button class="del-btn-recent" onclick="delTx('${t.id}')">✕</button></div></div>`;
function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div class="empty">Kosong</div>'; }

function renderMetrics(){
  const s=calcSum(txs), ts=calcSum(txs.filter(t=>new Date(t.date).toDateString()===new Date().toDateString())), pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0;
  document.getElementById('metric-cards').innerHTML=`<div class="m-card inc"><div class="m-label">TOTAL PEMASUKAN</div><div class="m-val pos">${fmt(s.inc)}</div><div>${fmtUSD(s.inc)}</div><div class="m-sub">${s.count} transaksi</div><div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div></div><div class="m-card exp"><div class="m-label">TOTAL PENGELUARAN</div><div class="m-val neg">${fmt(s.exp)}</div><div>${fmtUSD(s.exp)}</div><div class="m-sub">${pct}% dari pemasukan</div><div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div></div><div class="m-card bal"><div class="m-label">SALDO BERSIH</div><div class="m-val gold">${fmt(s.bal)}</div><div>${fmtUSD(s.bal)}</div><div class="m-sub">${s.bal>=0?'Surplus':'Defisit'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div></div><div class="m-card cnt"><div class="m-label">HARI INI</div><div class="m-val blue">${ts.count} transaksi</div><div class="m-sub">${ts.inc>0?fmt(ts.inc):'Kosong'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${ts.count>0?100:0}%"></div></div></div>`;
}

function mkChart(id,labels,incData,expData){ if(charts[id]) charts[id].destroy(); const c=document.getElementById(id); if(!c)return; const isLight = document.body.classList.contains('light-mode'); charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[{label:'Pemasukan',data:incData,backgroundColor:isLight?'#468E6B':'#5CA885',borderRadius:4},{label:'Pengeluaran',data:expData,backgroundColor:isLight?'#B55858':'#C96C6C',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:isLight?'#8C8C96':'rgba(255,255,255,0.4)',font:{size:10}},grid:{display:false},border:{display:false}},y:{ticks:{color:isLight?'#8C8C96':'rgba(255,255,255,0.4)',font:{size:10},callback:v=>Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:isLight?'rgba(0,0,0,0.03)':'rgba(255,255,255,0.02)',drawBorder:false},border:{display:false}}}}}); }

window.renderDaily=function(){ const pick=document.getElementById('pick-daily').value, target=pick?new Date(pick).toDateString():new Date().toDateString(), arr=txs.filter(t=>new Date(t.date).toDateString()===target).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('daily-sum'),arr); renderList(document.getElementById('daily-body'), arr); };
function wkKey(d){const dt=new Date(d);const day=dt.getDay();const diff=dt.getDate()-day+(day===0?-6:1);return new Date(new Date(d).setDate(diff)).toISOString().slice(0,10)}
function renderWeekly(){ const weeks={};txs.forEach(t=>{const k=wkKey(t.date);(weeks[k]=weeks[k]||[]).push(t)}); const keys=Object.keys(weeks).sort().reverse().slice(0,8); document.getElementById('week-sel').innerHTML=keys.map((k,i)=>{const m=new Date(k),s=new Date(k);s.setDate(s.getDate()+6);return`<button class="p-btn${i===0?' active':''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})} – ${s.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}</button>`}).join(''); if(keys.length)showWeek(keys[0]); }
window.selWeek=function(k,btn){document.querySelectorAll('#week-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showWeek(k)};
function showWeek(k){ const arr=txs.filter(t=>wkKey(t.date)===k).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('week-sum'),arr); renderList(document.getElementById('week-body'),arr); const days=['Sen','Sel','Rab','Kam','Jum','Sab','Min'],inc=new Array(7).fill(0),exp=new Array(7).fill(0); arr.forEach(t=>{const idx=(new Date(t.date).getDay()+6)%7;if(t.type==='income')inc[idx]+=t.amount;else exp[idx]+=t.amount}); mkChart('chartWeek',days,inc,exp); }
function renderMonthly(){ const months={};txs.forEach(t=>{const k=t.date.slice(0,7);(months[k]=months[k]||[]).push(t)}); const keys=Object.keys(months).sort().reverse().slice(0,12); document.getElementById('month-sel').innerHTML=keys.map((k,i)=>{const[y,m]=k.split('-');const d=new Date(y,m-1);return`<button class="p-btn${i===0?' active':''}" onclick="selMonth('${k}',this)">${d.toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`}).join(''); if(keys.length)showMonth(keys[0]); }
window.selMonth=function(k,btn){document.querySelectorAll('#month-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showMonth(k)};
function showMonth(k){ const arr=txs.filter(t=>t.date.slice(0,7)===k).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('month-sum'),arr); renderList(document.getElementById('month-body'),arr); const[y,m]=k.split('-');const dim=new Date(y,m,0).getDate(), labels=[],inc=new Array(dim).fill(0),exp=new Array(dim).fill(0); for(let i=1;i<=dim;i++)labels.push(i+''); arr.forEach(t=>{const d=new Date(t.date).getDate()-1;if(t.type==='income')inc[d]+=t.amount;else exp[d]+=t.amount}); mkChart('chartMonth',labels,inc,exp); }
function renderYearly(){ const years={};txs.forEach(t=>{const k=t.date.slice(0,4);(years[k]=years[k]||[]).push(t)}); const keys=Object.keys(years).sort().reverse(); document.getElementById('year-sel').innerHTML=keys.map((k,i)=>`<button class="p-btn${i===0?' active':''}" onclick="selYear('${k}',this)">${k}</button>`).join(''); if(keys.length)showYear(keys[0]); }
window.selYear=function(k,btn){document.querySelectorAll('#year-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showYear(k)};
function showYear(k){ const arr=txs.filter(t=>t.date.startsWith(k)).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('year-sum'),arr); renderList(document.getElementById('year-body'),arr); const MNTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'], inc=new Array(12).fill(0),exp=new Array(12).fill(0); arr.forEach(t=>{const m=new Date(t.date).getMonth();if(t.type==='income')inc[m]+=t.amount;else exp[m]+=t.amount}); mkChart('chartYear',MNTHS,inc,exp); }
window.renderAll=function(){ const tf=document.getElementById('flt-type').value, s=(document.getElementById('flt-search').value||'').toLowerCase(); let arr=[...txs]; if(tf)arr=arr.filter(t=>t.type===tf); if(s)arr=arr.filter(t=>t.note.toLowerCase().includes(s)||t.category.toLowerCase().includes(s)); arr.sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('all-sum'),arr); renderList(document.getElementById('all-body'),arr); };
function refreshAll(){ renderMetrics(); renderList(document.getElementById('recent-list'), txs.slice(0,10)); if(activePage==='harian')renderDaily(); if(activePage==='mingguan')renderWeekly(); if(activePage==='bulanan')renderMonthly(); if(activePage==='tahunan')renderYearly(); if(activePage==='riwayat')renderAll(); }
document.getElementById('pick-daily').value=nowISO().slice(0,10); document.getElementById('f-date').value=nowISO(); selType('income');
</script>
</body>
</html>
