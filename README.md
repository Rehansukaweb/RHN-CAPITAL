<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* ==========================================================================
   PEAK NATIVE-APP UI: OLED FINTECH EDITION + ORIGINAL RHN CONTENT 100%
   ========================================================================== */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

:root {
  /* DEFAULT: OLED ABSOLUTE BLACK DARK MODE */
  --bg: #050507; --bg2: #0A0A0E; --bg3: #12121A;
  --card: #12121A;
  --border: rgba(255, 255, 255, 0.08); --border2: rgba(255, 255, 255, 0.15);
  --text: #F8FAFC; --text2: #EBEBF5; --text3: #94A3B8;
  --navy: #000000; --navy2: #1C1C1E; --navy3: #2C2C2E;
  --gold: #D4AF37; --gold2: #FFD60A; --gold3: #FFE066;
  --green: #30D158; --green2: #32D74B;
  --red: #FF453A; --red2: #FF6961;
  --shadow-float: 0 12px 40px rgba(0,0,0,0.8);
  --radius: 24px; --radius-sm: 16px;
}

body.light-mode {
  /* LIGHT MODE ALTERNATIVE */
  --bg: #F2F2F7; --bg2: #FFFFFF; --bg3: #E5E5EA;
  --card: #FFFFFF;
  --border: rgba(0, 0, 0, 0.08); --border2: #D1D1D6;
  --text: #000000; --text2: #3A3A3C; --text3: #8E8E93;
  --navy: #1C1C1E; --navy2: #2C2C2E; --navy3: #3A3A3C;
  --gold: #D4AF37; --gold2: #FF9F0A; --gold3: #FFD60A;
  --green: #34C759; --green2: #30D158;
  --red: #FF3B30; --red2: #FF453A;
  --shadow-float: 0 12px 32px rgba(0,0,0,0.06);
}

body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* TOP EXTERNAL LINKS */
.top-ext-links {
  display: flex; justify-content: flex-end; gap: 24px; padding: 12px 32px;
  background: var(--navy); border-bottom: 1px solid var(--border);
}
.nav-ext-btn {
  background: transparent; border: none; color: var(--gold2);
  font-weight: 800; font-size: 13px; font-family: 'Outfit', sans-serif;
  cursor: pointer; transition: 0.2s; text-transform: uppercase; letter-spacing: 0.5px;
}
.nav-ext-btn:hover { text-shadow: 0 0 10px rgba(255, 214, 10, 0.5); transform: translateY(-1px); }

/* USD MINI WIDGET */
.usd-inline {
  font-family: 'DM Mono', monospace; font-size: 11px; color: var(--text3);
  display: inline-block; font-weight: 700; padding: 2px 6px;
  background: var(--border); border-radius: 4px; letter-spacing: -0.3px; margin-top: 4px;
}

/* ===== LOGO GAMBAR RHN ===== */
.auth-emblem {
  width: 64px; height: 64px; border-radius: 16px; object-fit: cover;
  margin-bottom: 16px; border: 1px solid var(--border);
  box-shadow: 0 16px 32px rgba(255, 214, 10, 0.1); background-color: var(--card);
}
.logo-emblem {
  width: 44px; height: 44px; border-radius: 12px; object-fit: cover;
  border: 1.5px solid rgba(201,168,76,0.5); background-color: var(--card);
}

/* ===== AUTH SCREEN ===== */
#auth-screen {
  position: fixed; inset: 0; background: var(--bg);
  display: flex; align-items: center; justify-content: center; z-index: 9999;
  background-image: radial-gradient(circle at top right, rgba(255, 214, 10, 0.05), transparent 40%);
}
.auth-box {
  background: var(--card); border-radius: 36px; padding: 48px 32px;
  width: 100%; max-width: 400px; box-shadow: var(--shadow-float); border: 1px solid var(--border);
  text-align: center; margin: 20px;
}
.auth-logo { margin-bottom: 32px; }
.auth-title { font-size: 28px; font-weight: 800; color: var(--text); letter-spacing: -1px; margin-bottom: 4px; }
.auth-sub { font-size: 14px; color: var(--text3); font-weight: 500; }
.auth-tabs { display: flex; background: var(--bg); border-radius: 14px; padding: 4px; margin-bottom: 32px; }
.auth-tab {
  flex: 1; padding: 12px; font-size: 14px; font-weight: 700; cursor: pointer;
  background: transparent; border: none; border-radius: 10px; color: var(--text3); transition: 0.3s;
}
.auth-tab.active { background: var(--card); color: var(--text); box-shadow: 0 4px 12px rgba(0,0,0,0.5); }
body.light-mode .auth-tab.active { box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.auth-field { margin-bottom: 16px; text-align: left; }
.auth-field label { display: none; }
.auth-field input {
  width: 100%; padding: 18px 20px; font-size: 16px; font-weight: 600; font-family: 'Outfit', sans-serif;
  border: 1px solid transparent; border-radius: 16px; background: rgba(255,255,255,0.03); color: var(--text);
  transition: 0.3s;
}
body.light-mode .auth-field input { background: rgba(0,0,0,0.03); }
.auth-field input:focus { background: var(--card); border-color: var(--gold2); outline: none; }
.auth-btn {
  width: 100%; padding: 18px; background: var(--gold2); color: #000;
  border: none; border-radius: 16px; font-size: 16px; font-weight: 800;
  cursor: pointer; transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1); margin-top: 16px; text-transform: uppercase;
}
.auth-btn:active { transform: scale(0.96); }
.auth-err { background: rgba(255, 69, 58, 0.1); color: var(--red2); border-radius: 12px; padding: 14px; font-size: 14px; font-weight: 600; margin-bottom: 20px; display: none; }
.auth-footer { margin-top: 24px; font-size: 12px; color: var(--text3); font-weight: 600; }

/* ===== APP SCREEN ===== */
#app-screen { display: none; }

/* TOP HEADER */
.topbar {
  background: rgba(5, 5, 7, 0.8); backdrop-filter: blur(20px) saturate(150%); -webkit-backdrop-filter: blur(20px) saturate(150%);
  padding: 16px 32px; display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--border);
}
body.light-mode .topbar { background: rgba(255, 255, 255, 0.8); }
.logo { display: flex; align-items: center; gap: 16px; }
.logo-name { font-size: 20px; font-weight: 900; color: var(--text); letter-spacing: -0.5px; line-height: 1.2; }
.logo-tagline { font-size: 11px; font-weight: 800; color: var(--gold2); text-transform: uppercase; letter-spacing: 1px; }

.topbar-right { display: flex; align-items: center; gap: 24px; }

/* NEW TOP STATS FLEX ROW */
.top-stats-row { display: flex; align-items: center; gap: 24px; }
.usd-rate-box { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(201,168,76,0.2); height: 32px; }
body.light-mode .usd-rate-box { background: rgba(0,0,0,0.05); }
.usd-rate-box .lbl { font-size: 11px; color: var(--gold2); font-weight: 800; }
.usd-rate-box .val { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 800; color: var(--text); transition: color 0.2s ease; }

.sync-wrapper { display: flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); height: 32px; }
body.light-mode .sync-wrapper { border-color: rgba(0,0,0,0.05); background: rgba(0,0,0,0.02); }
.sync-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; box-shadow: 0 0 10px currentColor; }
.sync-label { font-size: 11px; font-weight: 800; color: var(--text3); text-transform: uppercase; }

.live-clock { text-align: right; }
.live-clock .time { font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 800; color: var(--text); }
.live-clock .date { font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; }
.user-info { display: flex; align-items: center; gap: 10px; border-left: 1px solid var(--border); padding-left: 24px; }
.user-avatar { width: 34px; height: 34px; border-radius: 50%; background: rgba(201,168,76,0.2); border: 1.5px solid rgba(201,168,76,0.4); font-weight: 800; color: var(--gold2); display: flex; justify-content: center; align-items: center; }
.logout-btn { background: var(--card); padding: 8px 16px; border-radius: 100px; border: 1px solid var(--border); font-size: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; color: var(--text); text-transform: uppercase; }
@media (hover: hover) {
  .logout-btn:hover { border-color: var(--red2); color: var(--red2); }
}

/* NAVIGATION */
.nav {
  padding: 16px 32px; display: flex; gap: 8px; max-width: 1400px; margin: 0 auto 16px;
  overflow-x: auto; scrollbar-width: none; white-space: nowrap;
}
.nav::-webkit-scrollbar { display: none; }
.nav-btn {
  padding: 12px 24px; font-size: 13px; font-weight: 800; color: var(--text3);
  border: 1px solid transparent; background: transparent; cursor: pointer; border-radius: 100px;
  transition: 0.3s; text-transform: uppercase; letter-spacing: 0.5px;
}
@media (hover: hover) {
  .nav-btn:hover { color: var(--text); }
}
.nav-btn.active { background: var(--text); color: var(--bg); box-shadow: 0 4px 15px rgba(255,255,255,0.1); }
body.light-mode .nav-btn.active { box-shadow: 0 4px 15px rgba(0,0,0,0.1); }

/* MAIN CONTAINER */
.main { padding: 0 32px 64px; max-width: 1400px; margin: 0 auto; animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.page { display: none; } .page.active { display: block; animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* METRICS CARDS */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
.m-card {
  background: var(--card); border-radius: var(--radius); padding: 24px;
  border: 1px solid var(--border); transition: 0.3s; position: relative; overflow: hidden;
}
@media (hover: hover) {
  .m-card:hover { border-color: var(--border2); transform: translateY(-2px); }
}
.m-label { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--text3); margin-bottom: 10px; letter-spacing: 1px; }

/* PROGRESS BAR */
.m-bar { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; margin-top: 12px; overflow: hidden; }
body.light-mode .m-bar { background: rgba(0,0,0,0.05); }
.m-bar-fill { height: 100%; border-radius: 2px; transition: width 0.6s ease; }
.inc .m-bar-fill { background: var(--green2); }
.exp .m-bar-fill { background: var(--red2); }
.bal .m-bar-fill { background: var(--gold2); }
.cnt .m-bar-fill { background: #0A84FF; }

/* UKURAN AMAN DI DESKTOP */
.m-val { 
  font-family: 'JetBrains Mono', monospace; 
  font-size: 22px; 
  font-weight: 800; color: var(--text); 
  letter-spacing: -0.5px; 
  white-space: nowrap; 
}
.m-val.pos { color: var(--green2); } .m-val.neg { color: var(--red2); } .m-val.gold { color: var(--gold2); } .m-val.blue { color: #0A84FF; }
.m-sub { font-size: 13px; font-weight: 600; color: var(--text3); margin-top: 6px; }

/* PANELS */
.panel { display: grid; grid-template-columns: 420px 1fr; gap: 24px; margin-bottom: 24px; }
.panel.wide { grid-template-columns: 1fr; }
.card { background: var(--card); border-radius: var(--radius); border: 1px solid var(--border); overflow: hidden; }
.card-head { padding: 24px 32px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
.card-title { font-size: 18px; font-weight: 800; color: var(--text); letter-spacing: 0px; }
.card-sub { font-size: 13px; font-weight: 600; color: var(--text3); margin-top: 4px; }

/* FORMS */
.form-body { padding: 32px; }
.type-toggle { display: flex; gap: 8px; margin-bottom: 24px; background: rgba(255,255,255,0.03); padding: 6px; border-radius: 20px; }
body.light-mode .type-toggle { background: rgba(0,0,0,0.03); }
.t-btn { flex: 1; padding: 14px; border: none; border-radius: 14px; font-size: 14px; font-weight: 800; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; }
.t-btn.income.active { background: var(--card); color: var(--green2); box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--border); }
.t-btn.expense.active { background: var(--card); color: var(--red2); box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--border); }
.form-row { margin-bottom: 20px; }
.form-label { font-size: 12px; font-weight: 800; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
.form-row input, .form-row select, .form-row textarea { width: 100%; padding: 16px 20px; font-size: 16px; font-weight: 600; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); border-radius: 16px; background: rgba(255,255,255,0.02); color: var(--text); outline: none; transition: 0.3s; }
body.light-mode .form-row input, body.light-mode .form-row select, body.light-mode .form-row textarea { background: rgba(0,0,0,0.02); }
.form-row input:focus, .form-row select:focus, .form-row textarea:focus { border-color: var(--gold2); background: var(--card); }
.form-row textarea { height: 100px; resize: none; }
.submit-btn { width: 100%; padding: 20px; background: var(--text); color: var(--bg); border: none; border-radius: 16px; font-size: 16px; font-weight: 800; cursor: pointer; transition: 0.2s; margin-top: 8px; text-transform: uppercase; }
.submit-btn:active { transform: scale(0.96); }

/* ==========================================================================
   ULTIMATE FINTECH CARDS (MENGGANTIKAN TABEL KAKU)
   ========================================================================== */
.list-wrap { padding: 12px 0 24px; }
.recent-item {
  padding: 16px 24px;
  margin: 0 24px 12px 24px; /* Memberi ruang antar kartu */
  border-radius: 20px; /* Lengkungan modern ala Fintech */
  background: rgba(255,255,255,0.02); /* Warna kartu super elegan */
  border: 1px solid rgba(255,255,255,0.06); /* Border kaca keliling, BUKAN cuma garis bawah */
  display: flex; align-items: center; justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
body.light-mode .recent-item {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}
@media (hover: hover) {
  .recent-item:hover {
    transform: translateY(-3px) scale(1.01);
    border-color: rgba(201,168,76,0.4);
    background: rgba(255,255,255,0.04);
  }
  body.light-mode .recent-item:hover {
    background: #fafafa;
    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
  }
}

.ri-icon {
  width: 46px; height: 46px;
  border-radius: 50%; /* Ikon Bulat Premium! */
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; font-weight: 900;
  margin-right: 16px; flex-shrink: 0;
  box-shadow: inset 0 0 10px rgba(255,255,255,0.1);
}
.ri-icon.inc { color: var(--green2); background: rgba(48, 209, 88, 0.15); border: 1px solid rgba(48, 209, 88, 0.3); }
.ri-icon.exp { color: var(--red2); background: rgba(255, 69, 58, 0.15); border: 1px solid rgba(255, 69, 58, 0.3); } 

.ri-left { display: flex; align-items: center; }
.ri-note { font-size: 15px; font-weight: 800; color: var(--text); text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ri-meta { font-size: 12px; font-weight: 600; color: var(--text3); }

/* Badge Kategori Keren */
.cat-badge {
  font-size: 9px; font-weight: 800; padding: 4px 8px; border-radius: 8px;
  background: var(--bg); border: 1px solid var(--border);
  color: var(--text3); letter-spacing: 0.5px; text-transform: uppercase;
}
body.light-mode .cat-badge { background: #F2F2F7; border-color: rgba(0,0,0,0.08); }

.ri-right-wrap { display: flex; align-items: center; gap: 20px; }
.ri-right { text-align: right; }
.ri-amount { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 800; white-space: nowrap; }
.ri-amount.pos { color: var(--green2); } .ri-amount.neg { color: var(--red2); }

/* Tombol Hapus */
.del-btn-recent {
  background: rgba(255, 69, 58, 0.1); border: 1px solid rgba(255, 69, 58, 0.2);
  color: var(--red2); border-radius: 12px; width: 42px; height: 42px;
  display: flex; justify-content: center; align-items: center;
  cursor: pointer; font-size: 16px; font-weight: 800; transition: 0.2s; flex-shrink: 0;
}
@media (hover: hover) { .del-btn-recent:hover { background: var(--red2); color: #fff; transform: rotate(90deg); } }

/* EMPTY ICON ASLI */
.empty-icon { font-size: 32px; margin-bottom: 12px; opacity: 0.4; font-family: sans-serif; }

/* SUMMARY GRID */
.sum-grid { display: grid; grid-template-columns: repeat(3, 1fr); background: var(--bg); border-bottom: 1px solid var(--border); gap: 1px; }
.sum-item { padding: 24px; background: var(--card); text-align: left; }
.sum-label { font-size: 12px; font-weight: 800; color: var(--text3); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px; }
.sum-val { font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 800; white-space: nowrap; }

/* CHARTS & FILTERS */
.chart-wrap { padding: 32px; }
.chart-legend { display: flex; justify-content: flex-end; gap: 24px; margin-bottom: 24px; }
.leg-item { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800; color: var(--text3); text-transform: uppercase; }
.leg-dot { width: 12px; height: 12px; border-radius: 4px; }
.period-bar, .filter-bar { display: flex; gap: 12px; padding: 24px 32px; border-bottom: 1px solid var(--border); overflow-x: auto; scrollbar-width: none; }
.p-btn { padding: 10px 20px; border: 1px solid var(--border); border-radius: 100px; font-size: 13px; font-weight: 700; cursor: pointer; background: transparent; color: var(--text); white-space: nowrap; transition: 0.2s; }
.p-btn.active { background: var(--text); color: var(--bg); border-color: var(--text); }
.filter-bar select, .filter-bar input { padding: 14px 20px; font-size: 15px; font-weight: 600; border: 1px solid var(--border); border-radius: 14px; background: var(--card); color: var(--text); outline: none; font-family: 'Outfit', sans-serif; }
.filter-bar input { width: 280px; }
.filter-bar select:focus, .filter-bar input:focus { border-color: var(--gold2); }
.empty { padding: 80px; text-align: center; color: var(--text3); font-size: 15px; font-weight: 600; background: var(--card); }

/* SCROLLBAR */
::-webkit-scrollbar { width: 6px; height: 6px; } 
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 10px; }

/* ==========================================================================
   MOBILE RESPONSIVE
   ========================================================================== */
@media (max-width: 768px) {
  body { padding: 0; margin: 0; }
  
  .top-ext-links { justify-content: center; flex-wrap: wrap; padding: 12px 16px; gap: 8px; }
  .nav-ext-btn { font-size: 11px; }

  /* FIX HEADER LAYOUT */
  .topbar { padding: 16px; flex-direction: column; align-items: flex-start; gap: 12px; border-bottom: none; }
  .topbar-right { width: 100%; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .live-clock { display: none; }
  .usd-rate-box .lbl { display: none; }
  
  /* BALANCE MENGHILANGKAN KOSONG DI SEBELAH TERSINKRON */
  .top-stats-row { width: 100%; justify-content: space-between; gap: 12px; }
  .usd-rate-box, .sync-wrapper { flex: 1; justify-content: center; height: 38px; border-radius: 12px; }
  
  /* BIKIN BAR PROFIL 100% WIDTH DENGAN BACKGROUND (ANTI KOPONG) */
  .user-info { 
    width: 100%; 
    border-left: none; 
    padding: 12px 16px; 
    gap: 10px;
    background: rgba(255,255,255,0.02); 
    border-radius: 16px; 
    border: 1px solid var(--border);
    margin-top: 4px;
    justify-content: flex-start;
  }
  body.light-mode .user-info { background: rgba(0,0,0,0.02); }
  .user-info button:last-child { margin-left: auto !important; }
  .logout-btn { padding: 6px 14px; font-size: 11px; }
  .user-name { max-width: 100px !important; }
  
  .nav { padding: 0 16px 16px 16px; margin: 0; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 8px; justify-content: flex-start; }
  .nav-btn { flex: 0 0 auto; scroll-snap-align: start; padding: 10px 16px; font-size: 11px; border: 1px solid var(--border); }

  .main { padding: 0; padding-bottom: 90px; }
  
  .metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 0 16px 24px 16px; margin: 0; }
  .m-card { padding: 16px 12px; border-radius: 16px; flex: none; }
  .m-val { font-size: 15px; } 
  .m-label { font-size: 9px; letter-spacing: 0.5px; margin-bottom: 6px; }
  .m-sub { font-size: 10px; margin-top: 4px; }
  .m-bar { margin-top: 8px; }
  
  .panel { grid-template-columns: 1fr; gap: 0; }
  .card { border-radius: 0; border-left: none; border-right: none; margin-bottom: 16px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .card-head { padding: 16px; }
  .form-body { padding: 0 16px 20px; }
  
  /* PENGATURAN KARTU RIWAYAT DI HP */
  .list-wrap { padding: 8px 0 16px 0; }
  .recent-item { margin: 0 16px 12px 16px; padding: 16px; border-radius: 16px; }
  .ri-icon { width: 40px; height: 40px; font-size: 16px; margin-right: 12px; }
  .ri-note { font-size: 13px; gap: 6px; margin-bottom: 4px; }
  .cat-badge { font-size: 8px; padding: 3px 6px; }
  .ri-meta { font-size: 11px; }
  .ri-amount { font-size: 15px; }
  .ri-right-wrap { gap: 12px; }
  .del-btn-recent { width: 36px; height: 36px; font-size: 14px; border-radius: 10px; }
  
  .period-bar, .filter-bar { padding: 16px; flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory; }
  .filter-bar input, .filter-bar select { width: 100%; flex: 0 0 80%; scroll-snap-align: start; }
  .sum-grid { grid-template-columns: 1fr; gap: 0; padding: 0 16px 20px; background: var(--card); }
  .sum-item { padding: 16px 0; border-bottom: 1px solid var(--border); background: var(--card); }
  .sum-item:last-child { border-bottom: none; }
}
</style>
</head>
<body>

<div class="top-ext-links">
  <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 Halaman Rhn Capital ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='jurnal.html'">📈 JURNAL FOREX ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='aset.html'">📈 Jurnal Aset ↗</button>
</div>

<div id="auth-screen">
  <div class="auth-box">
    <div class="auth-logo">
      <img src="RHN LOGO.jpg" class="auth-emblem" alt="RHN Capital Logo">
      <div class="auth-title">RHN CAPITAL</div>
      <div class="auth-sub">Masuk untuk mengakses arus keuangan Anda</div>
    </div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    <div id="auth-err" class="auth-err"></div>
    <div class="auth-field">
      <label>Email</label>
      <input type="email" id="auth-email" placeholder="email@contoh.com" autocomplete="email">
    </div>
    <div class="auth-field">
      <label>Sandi</label>
      <input type="password" id="auth-pass" placeholder="••••••••" autocomplete="current-password" onkeydown="if(event.key==='Enter')doAuth()">
    </div>
    <div class="auth-field" id="field-confirm" style="display:none">
      <label>Konfirmasi Sandi</label>
      <input type="password" id="auth-pass2" placeholder="••••••••" autocomplete="new-password">
    </div>
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">Masuk</button>
    <div class="auth-footer">
      Data tersimpan aman di Firebase.
    </div>
  </div>
</div>

<div id="app-screen">
<div class="topbar">
  <div class="logo">
    <img src="RHN LOGO.jpg" class="logo-emblem" alt="RHN Capital Logo">
    <div>
      <div class="logo-name">RHN CAPITAL</div>
      <div class="logo-tagline">Arus Keuangan</div>
    </div>
  </div>
  <div class="topbar-right">
    
    <div class="top-stats-row">
      <div class="usd-rate-box">
        <span class="lbl">USD</span>
        <span id="usd-rate-val" class="val">...</span>
      </div>
      <div class="sync-wrapper">
        <span class="sync-dot" id="sync-dot"></span>
        <span class="sync-label" id="sync-label">Menghubungkan...</span>
      </div>
    </div>

    <div class="live-clock">
      <div class="time" id="live-time">--:--:--</div>
      <div class="date" id="live-date">-</div>
    </div>
    <div class="user-info">
      <button id="theme-toggle" class="logout-btn" onclick="toggleTheme()" title="Ganti Tema" style="padding:4px 8px; font-size:14px; border-radius:6px; color:var(--gold2);">🌙</button>
      <div class="user-avatar" id="user-avatar">?</div>
      <div class="user-name" id="user-name" style="font-size:13px; font-weight:700; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">-</div>
      <button class="logout-btn" onclick="doLogout()">Keluar</button>
    </div>
  </div>
</div>

<div class="nav">
  <button class="nav-btn active" onclick="switchPage('dashboard')">Dashboard</button>
  <button class="nav-btn" onclick="switchPage('harian')">Harian</button>
  <button class="nav-btn" onclick="switchPage('mingguan')">Mingguan</button>
  <button class="nav-btn" onclick="switchPage('bulanan')">Bulanan</button>
  <button class="nav-btn" onclick="switchPage('tahunan')">Tahunan</button>
  <button class="nav-btn" onclick="switchPage('riwayat')">Semua Riwayat</button>
</div>

<div class="main">

<div id="page-dashboard" class="page active">
  <div class="metrics" id="metric-cards"></div>
  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div><div class="card-title">Tambah Transaksi</div><div class="card-sub">Catat pemasukan atau pengeluaran baru</div></div>
      </div>
      <div class="form-body">
        <div class="type-toggle">
          <div class="t-btn income active" id="btn-inc" onclick="selType('income')">+ Pemasukan</div>
          <div class="t-btn expense" id="btn-exp" onclick="selType('expense')">− Pengeluaran</div>
        </div>
        <div class="form-row"><label class="form-label">Jumlah (Rp)</label><input type="number" id="f-amount" placeholder="0" min="0"></div>
        <div class="form-row"><label class="form-label">Kategori</label><select id="f-cat"><option value="">Pilih kategori...</option></select></div>
        <div class="form-row"><label class="form-label">Keterangan</label><textarea id="f-note" placeholder="Catatan transaksi..."></textarea></div>
        <div class="form-row"><label class="form-label">Tanggal &amp; Jam</label><input type="datetime-local" id="f-date"></div>
        <button class="submit-btn" id="save-btn" onclick="addTx()">Simpan Transaksi</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title">Transaksi Terbaru</div></div>
      <div id="recent-list" class="list-wrap" style="max-height:450px;overflow-y:auto"></div>
    </div>
  </div>
  <div class="card panel wide" style="margin-bottom:0">
    <div class="card-head">
      <div class="card-title">Grafik Arus Keuangan — 30 Hari Terakhir</div>
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div>
      </div>
    </div>
    <div class="chart-wrap"><div style="position:relative;height:240px"><canvas id="chartMain"></canvas></div></div>
  </div>
</div>

<div id="page-harian" class="page">
  <div class="card">
    <div class="card-head">
      <div class="card-title">Laporan Harian</div>
      <input type="date" id="pick-daily" onchange="renderDaily()" style="padding:10px 16px;font-size:14px;border:1px solid var(--border);border-radius:10px;background:var(--card);color:var(--text);font-family:'Outfit',sans-serif;outline:none;">
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
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div></div>
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
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div></div>
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
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div></div>
      <div style="position:relative;height:240px"><canvas id="chartYear"></canvas></div>
    </div>
    <div class="list-wrap" id="year-body"></div>
  </div>
</div>

<div id="page-riwayat" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Semua Riwayat Transaksi</div></div>
    <div class="filter-bar">
      <select id="flt-type" onchange="renderAll()"><option value="">Semua Tipe</option><option value="income">Pemasukan</option><option value="expense">Pengeluaran</option></select>
      <input type="text" id="flt-search" placeholder="Cari keterangan / kategori..." oninput="renderAll()">
    </div>
    <div class="sum-grid" id="all-sum"></div>
    <div class="list-wrap" id="all-body"></div>
  </div>
</div>

</div></div><script type="module">
// TEMA - Default Dark Mode (FIX SINKRONISASI GRAFIK DAN TEKS)
window.toggleTheme = function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  refreshAll(); 
};
if(localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  document.getElementById('theme-toggle').textContent = '🌙';
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, deleteDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg",
  authDomain: "rhn-capital.firebaseapp.com",
  projectId: "rhn-capital",
  storageBucket: "rhn-capital.firebasestorage.app",
  messagingSenderId: "74905216682",
  appId: "1:74905216682:web:4687a5b0bd7bcac09292d3",
  measurementId: "G-R40Q1TCLYH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const CATS = {
  income:  ['Pemberian','Investasi','Ongkos Harian','Bonus','Dividen','Profit','Transfer Masuk','Lainnya'],
  expense: ['Jajan','Pembelian Aset(Investasi)','Infak','Kas','Utilitas','Transportasi','Makan','Minum','Loss','Lainnya']
};

let txs=[], curType='income', activePage='dashboard', charts={}, currentUSDRate = 16000;
let currentUser=null, unsubListener=null, authMode='login';

const fmt     = n  => 'Rp '+Math.round(n).toLocaleString('id-ID');
const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'});
const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const fmtFull = dt => fmtDate(dt)+' · '+fmtTime(dt);
const nowISO  = () => new Date().toISOString().slice(0,16);

const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtUSD = n => {
  const usdVal = (n / currentUSDRate).toFixed(2);
  return `<span class="usd-inline">$${usdVal}</span>`;
};

/* AMBIL KURS REAL-TIME DENGAN WEBSOCKET */
function initLiveUSD() {
  const socket = new WebSocket('wss://stream.binance.com:9443/ws/usdtidr@ticker');
  socket.addEventListener('message', function (event) {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.c); 
      if (newPrice && newPrice !== currentUSDRate) {
          currentUSDRate = newPrice;
          const rateEl = document.getElementById('usd-rate-val');
          rateEl.textContent = kursIndo.format(currentUSDRate);
          rateEl.style.color = '#25c584';
          rateEl.style.fontWeight = '700';
          setTimeout(() => { rateEl.style.color = 'var(--text)'; rateEl.style.fontWeight = '800'; }, 150);
          refreshAll();
      }
  });
  socket.addEventListener('close', () => setTimeout(initLiveUSD, 3000));
}

async function fetchUSDRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    currentUSDRate = data.rates.IDR;
    document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate);
    refreshAll();
  } catch (e) {
    document.getElementById('usd-rate-val').textContent = "Offline";
  }
}

fetchUSDRate().then(initLiveUSD); 
setInterval(fetchUSDRate, 300000); 

function showErr(msg){ const el=document.getElementById('auth-err'); el.textContent=msg; el.style.display='block' }
function hideErr(){ document.getElementById('auth-err').style.display='none' }
function setLoading(on){
  const btn=document.getElementById('auth-submit-btn');
  btn.disabled=on;
  btn.textContent=on?'Memuat...':(authMode==='login'?'Masuk':'Daftar');
}
function setSyncStatus(ok){
  document.getElementById('sync-dot').style.background=ok?'#25c584':'#d94f4f';
  document.getElementById('sync-label').textContent=ok?'Tersinkron':'Offline';
}

window.switchTab=function(mode){
  authMode=mode;
  document.getElementById('tab-login').classList.toggle('active',mode==='login');
  document.getElementById('tab-register').classList.toggle('active',mode==='register');
  document.getElementById('field-confirm').style.display=mode==='register'?'block':'none';
  document.getElementById('auth-submit-btn').textContent=mode==='login'?'Masuk':'Daftar';
  hideErr();
};

window.doAuth=async function(){
  const email=document.getElementById('auth-email').value.trim();
  const pass=document.getElementById('auth-pass').value;
  hideErr();
  if(!email||!pass){showErr('Email dan sandi tidak boleh kosong.');return}
  setLoading(true);
  try{
    if(authMode==='login'){
      await signInWithEmailAndPassword(auth,email,pass);
    } else {
      const pass2=document.getElementById('auth-pass2').value;
      if(pass!==pass2){showErr('Sandi tidak cocok.');setLoading(false);return}
      if(pass.length<6){showErr('Sandi minimal 6 karakter.');setLoading(false);return}
      await createUserWithEmailAndPassword(auth,email,pass);
    }
  } catch(e){
    const msgs={'auth/user-not-found':'Email tidak terdaftar.','auth/wrong-password':'Sandi salah.','auth/invalid-email':'Format email tidak valid.','auth/email-already-in-use':'Email sudah terdaftar.','auth/invalid-credential':'Email atau sandi salah.','auth/too-many-requests':'Terlalu banyak percobaan.'};
    showErr(msgs[e.code]||'Error: '+e.message);
    setLoading(false);
  }
};

window.doLogout=async function(){
  if(unsubListener){unsubListener();unsubListener=null;}
  txs=[];
  await signOut(auth);
};

onAuthStateChanged(auth,user=>{
  if(user){
    currentUser=user;
    document.getElementById('auth-screen').style.display='none';
    document.getElementById('app-screen').style.display='block';
    setLoading(false);
    const name=user.displayName||user.email.split('@')[0];
    document.getElementById('user-name').textContent=name;
    document.getElementById('user-avatar').textContent=name.charAt(0).toUpperCase();
    listenTransactions(user.uid);
  } else {
    currentUser=null;
    document.getElementById('auth-screen').style.display='flex';
    document.getElementById('app-screen').style.display='none';
    if(unsubListener){unsubListener();unsubListener=null;}
    txs=[];
  }
});

function listenTransactions(uid){
  if(unsubListener)unsubListener();
  const q=query(collection(db,'users',uid,'transactions'),orderBy('createdAt','desc'));
  unsubListener=onSnapshot(q,
    snap=>{txs=snap.docs.map(d=>({id:d.id,...d.data()}));setSyncStatus(true);refreshAll();},
    err=>{console.error(err);setSyncStatus(false);}
  );
}

window.addTx=async function(){
  if(!currentUser)return;
  const amt=parseFloat(document.getElementById('f-amount').value);
  const cat=document.getElementById('f-cat').value;
  const note=document.getElementById('f-note').value.trim();
  const dt=document.getElementById('f-date').value;
  if(!amt||amt<=0){alert('Masukkan jumlah yang valid.');return}
  if(!cat){alert('Pilih kategori terlebih dahulu.');return}
  const btn=document.getElementById('save-btn');
  btn.disabled=true;btn.textContent='Menyimpan...';
  try{
    await addDoc(collection(db,'users',currentUser.uid,'transactions'),{
      type:curType,amount:amt,category:cat,
      note:note||'-',date:dt||nowISO(),createdAt:serverTimestamp()
    });
    document.getElementById('f-amount').value='';
    document.getElementById('f-note').value='';
    document.getElementById('f-date').value=nowISO();
  } catch(e){alert('Gagal menyimpan: '+e.message);}
  btn.disabled=false;btn.textContent='Simpan Transaksi';
};

window.delTx=async function(id){
  if(!currentUser||!confirm('Hapus transaksi ini?'))return;
  try{await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id));}
  catch(e){alert('Gagal menghapus: '+e.message);}
};

function updateClock(){
  const n=new Date();
  document.getElementById('live-time').textContent=n.toLocaleTimeString('id-ID');
  document.getElementById('live-date').textContent=n.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
}
setInterval(updateClock,1000);updateClock();

window.selType=function(t){
  curType=t;
  document.getElementById('btn-inc').classList.toggle('active',t==='income');
  document.getElementById('btn-exp').classList.toggle('active',t==='expense');
  const s=document.getElementById('f-cat');
  s.innerHTML='<option value="">Pilih kategori...</option>';
  CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)});
};

window.switchPage=function(p){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav .nav-btn').forEach(el=>el.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat'];
  document.querySelectorAll('.nav .nav-btn')[pages.indexOf(p)].classList.add('active');
  activePage=p;refreshAll();
};

function calcSum(arr){
  const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  return{inc,exp,bal:inc-exp,count:arr.length};
}

function renderSumGrid(el,arr){
  const s=calcSum(arr);
  el.innerHTML=`
    <div class="sum-item"><div class="sum-label">Pemasukan</div><div class="sum-val a-pos">${fmt(s.inc)}</div><div style="margin-top:2px;">${fmtUSD(s.inc)}</div></div>
    <div class="sum-item"><div class="sum-label">Pengeluaran</div><div class="sum-val a-neg">${fmt(s.exp)}</div><div style="margin-top:2px;">${fmtUSD(s.exp)}</div></div>
    <div class="sum-item"><div class="sum-label">Saldo Bersih</div><div class="sum-val ${s.bal>=0?'a-pos':'a-neg'}">${fmt(s.bal)}</div><div style="margin-top:2px;">${fmtUSD(s.bal)}</div></div>`;
}

/* ==========================================================================
   FUNGSI RENDER LIST MODERN (MENGGANTIKAN SEMUA FUNGSI TABEL)
   ========================================================================== */
const createTxCard = (t, full) => `
  <div class="recent-item">
    <div class="ri-left">
      <div class="ri-icon ${t.type}">${t.type==='income'?'↑':'↓'}</div>
      <div>
        <div class="ri-note">
          ${t.note} 
          <span class="cat-badge">${t.category}</span>
        </div>
        <div class="ri-meta">${full?fmtFull(t.date):fmtDate(t.date)} ${!full?' · '+fmtTime(t.date):''}</div>
      </div>
    </div>
    <div class="ri-right-wrap">
      <div class="ri-right">
        <div class="ri-amount ${t.type==='income'?'pos':'neg'}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
        <div>${fmtUSD(t.amount)}</div>
      </div>
      <button class="del-btn-recent" onclick="delTx('${t.id}')" title="Hapus Transaksi">✕</button>
    </div>
  </div>
`;

function renderList(container, arr, full) {
  if(!container) return;
  if(!arr.length) {
    container.innerHTML = `<div class="empty"><div class="empty-icon">○</div>Belum ada transaksi</div>`;
    return;
  }
  container.innerHTML = arr.map(t => createTxCard(t, full)).join('');
}


function mkChart(id,labels,incData,expData){
  if(charts[id]){charts[id].destroy();delete charts[id]}
  const c=document.getElementById(id);if(!c)return;
  const isLight = document.body.classList.contains('light-mode');
  const textColor = isLight ? '#3A3A3C' : '#8E8E93';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
  
  charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[
    {label:'Pemasukan',data:incData,backgroundColor:'rgba(48,209,88,0.8)',borderRadius:4,borderSkipped:false},
    {label:'Pengeluaran',data:expData,backgroundColor:'rgba(255,69,58,0.75)',borderRadius:4,borderSkipped:false}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{
    x:{ticks:{color:textColor,font:{size:11,family:"'Outfit',sans-serif",weight:'600'}},grid:{display:false},border:{display:false}},
    y:{ticks:{color:textColor,font:{size:11,family:"'Outfit',sans-serif",weight:'600'},callback:v=>'Rp'+Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:gridColor,drawBorder:false},border:{display:false}}
  }}});
}

function renderMetrics(){
  const s=calcSum(txs);
  const ts=calcSum(txs.filter(t=>new Date(t.date).toDateString()===new Date().toDateString()));
  const pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0;
  document.getElementById('metric-cards').innerHTML=`
    <div class="m-card inc"><div class="m-label">Total Pemasukan</div><div class="m-val pos">${fmt(s.inc)}</div><div>${fmtUSD(s.inc)}</div><div class="m-sub">${s.count} transaksi</div><div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div></div>
    <div class="m-card exp"><div class="m-label">Total Pengeluaran</div><div class="m-val neg">${fmt(s.exp)}</div><div>${fmtUSD(s.exp)}</div><div class="m-sub">${pct}% dari pemasukan</div><div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div></div>
    <div class="m-card bal"><div class="m-label">Saldo Bersih</div><div class="m-val gold">${fmt(s.bal)}</div><div>${fmtUSD(s.bal)}</div><div class="m-sub">${s.bal>=0?'Surplus':'Defisit'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div></div>
    <div class="m-card cnt"><div class="m-label">Hari Ini</div><div class="m-val blue">${ts.count} transaksi</div><div style="height:19px;line-height:19px;" class="m-sub">${ts.inc>0?fmt(ts.inc):'Kosong'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${ts.count>0?100:0}%"></div></div></div>`;
}

/* RENDER RECENT MENGGUNAKAN FUNGSI LIST BARU */
function renderRecent(){
  renderList(document.getElementById('recent-list'), txs.slice(0,10), true);
}

function renderMainChart(){
  const days=[],inc=[],exp=[];
  for(let i=29;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const dt=txs.filter(t=>new Date(t.date).toDateString()===d.toDateString());
    days.push(d.toLocaleDateString('id-ID',{day:'2-digit',month:'short'}));
    inc.push(dt.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0));
    exp.push(dt.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0));
  }
  mkChart('chartMain',days,inc,exp);
}

window.renderDaily=function(){
  const pick=document.getElementById('pick-daily').value;
  const target=pick?new Date(pick).toDateString():new Date().toDateString();
  const arr=txs.filter(t=>new Date(t.date).toDateString()===target).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('daily-sum'),arr);
  renderList(document.getElementById('daily-body'), arr, false);
};

function wkKey(d){const dt=new Date(d);const day=dt.getDay();const diff=dt.getDate()-day+(day===0?-6:1);return new Date(new Date(d).setDate(diff)).toISOString().slice(0,10)}
function renderWeekly(){
  const weeks={};txs.forEach(t=>{const k=wkKey(t.date);(weeks[k]=weeks[k]||[]).push(t)});
  const keys=Object.keys(weeks).sort().reverse().slice(0,8);
  document.getElementById('week-sel').innerHTML=keys.map((k,i)=>{const m=new Date(k),s=new Date(k);s.setDate(s.getDate()+6);return`<button class="p-btn${i===0?' active':''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})} – ${s.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}</button>`}).join('');
  if(keys.length)showWeek(keys[0]);
}

window.selWeek=function(k,btn){document.querySelectorAll('#week-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showWeek(k)};
function showWeek(k){
  const arr=txs.filter(t=>wkKey(t.date)===k).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('week-sum'),arr);
  renderList(document.getElementById('week-body'), arr, false);
  const days=['Sen','Sel','Rab','Kam','Jum','Sab','Min'],inc=new Array(7).fill(0),exp=new Array(7).fill(0);
  arr.forEach(t=>{const idx=(new Date(t.date).getDay()+6)%7;if(t.type==='income')inc[idx]+=t.amount;else exp[idx]+=t.amount});
  mkChart('chartWeek',days,inc,exp);
}

function renderMonthly(){
  const months={};txs.forEach(t=>{const k=t.date.slice(0,7);(months[k]=months[k]||[]).push(t)});
  const keys=Object.keys(months).sort().reverse().slice(0,12);
  document.getElementById('month-sel').innerHTML=keys.map((k,i)=>{const[y,m]=k.split('-');const d=new Date(y,m-1);return`<button class="p-btn${i===0?' active':''}" onclick="selMonth('${k}',this)">${d.toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`}).join('');
  if(keys.length)showMonth(keys[0]);
}

window.selMonth=function(k,btn){document.querySelectorAll('#month-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showMonth(k)};
function showMonth(k){
  const arr=txs.filter(t=>t.date.slice(0,7)===k).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('month-sum'),arr);
  renderList(document.getElementById('month-body'), arr, false);
  const[y,m]=k.split('-');const dim=new Date(y,m,0).getDate();
  const labels=[],inc=new Array(dim).fill(0),exp=new Array(dim).fill(0);
  for(let i=1;i<=dim;i++)labels.push(i+'');
  arr.forEach(t=>{const d=new Date(t.date).getDate()-1;if(t.type==='income')inc[d]+=t.amount;else exp[d]+=t.amount});
  mkChart('chartMonth',labels,inc,exp);
}

function renderYearly(){
  const years={};txs.forEach(t=>{const k=t.date.slice(0,4);(years[k]=years[k]||[]).push(t)});
  const keys=Object.keys(years).sort().reverse();
  document.getElementById('year-sel').innerHTML=keys.map((k,i)=>`<button class="p-btn${i===0?' active':''}" onclick="selYear('${k}',this)">${k}</button>`).join('');
  if(keys.length)showYear(keys[0]);
}

window.selYear=function(k,btn){document.querySelectorAll('#year-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showYear(k)};
function showYear(k){
  const arr=txs.filter(t=>t.date.startsWith(k)).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('year-sum'),arr);
  renderList(document.getElementById('year-body'), arr, false);
  const MNTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const inc=new Array(12).fill(0),exp=new Array(12).fill(0);
  arr.forEach(t=>{const m=new Date(t.date).getMonth();if(t.type==='income')inc[m]+=t.amount;else exp[m]+=t.amount});
  mkChart('chartYear',MNTHS,inc,exp);
}

window.renderAll=function(){
  const tf=document.getElementById('flt-type').value;
  const s=(document.getElementById('flt-search').value||'').toLowerCase();
  let arr=[...txs];
  if(tf)arr=arr.filter(t=>t.type===tf);
  if(s)arr=arr.filter(t=>t.note.toLowerCase().includes(s)||t.category.toLowerCase().includes(s));
  arr.sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('all-sum'),arr);
  renderList(document.getElementById('all-body'), arr, true);
};

function refreshAll(){
  renderMetrics();renderRecent();
  if(activePage==='dashboard')renderMainChart();
  if(activePage==='harian')renderDaily();
  if(activePage==='mingguan')renderWeekly();
  if(activePage==='bulanan')renderMonthly();
  if(activePage==='tahunan')renderYearly();
  if(activePage==='riwayat')renderAll();
}

document.getElementById('pick-daily').value=new Date().toISOString().slice(0,10);
document.getElementById('f-date').value=nowISO();
selType('income');
</script>
</body>
</html>
