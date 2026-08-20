<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<title>Arus Keuangan | RHN CAPITAL</title>

<meta name="theme-color" content="#050505">
<link rel="apple-touch-icon" href="RHN LOGO.jpg">

<style>
/* ==========================================================================
   TEMA ORIGINAL (GELAP PEKAT)
   ========================================================================== */
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; -webkit-text-size-adjust: none; text-size-adjust: none; }

h1, hr, .page-header, .site-header, .project-name { display: none !important; }

:root {
  --bg: #050505; 
  --bg2: #121215; 
  --bg3: #1A1A1F;
  --card: #121215;
  --border: #222228; 
  --border2: #33333E;
  --text: #FFFFFF; 
  --text2: #CCCCCC; 
  --text3: #888899;
  
  --gold: #FBBF24; 
  --gold2: #F59E0B; 
  --green2: #10B981; 
  --red2: #F87171;
  --blue: #3B82F6;
  --blue-title: #007BFF;
  
  --shadow-float: 0 12px 32px rgba(0,0,0,0.5);
  --radius: 16px; 
}

body.light-mode {
  --bg: #DFE2E6; 
  --bg2: #E9EDF1; 
  --bg3: #D0D5DB;
  --card: #E9EDF1; 
  --border: #C2C8D0; 
  --border2: #9CA3AF;
  --text: #111827; 
  --text2: #374151; 
  --text3: #4B5563;
  --blue-title: #0056b3;
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.18s ease, color 0.18s ease;
}

/* Kunci lay out saat popup muncul agar tidak lompat */
body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
  overflow: hidden !important;
}

.swal2-container { z-index: 100000 !important; }
.centered-modal { border-radius: 24px !important; overflow: hidden; box-shadow: var(--shadow-float) !important; }

/* Animasi lebih smooth di seluruh aplikasi (popup, transisi halaman, dll) */
*, *::before, *::after { transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) !important; }

/* ==========================================================================
   POLISH INTERAKSI: semua tombol/aksi terasa smooth & responsif seperti app
   ========================================================================== */
button, .nav-btn, .t-btn, .p-btn, .theme-btn, .setting-btn, .logout-btn,
.submit-btn, .export-btn, .edit-btn-recent, .del-btn-recent, .w-card,
.recent-item, .m-card, .nav-ext-btn, .status-pill, .calc-curr-item,
.cat-chip, .calc-btn, .swap-btn, .set-action, .admin-user-card, .auth-tab,
.admin-detail-btn {
  transition: transform 0.06s cubic-bezier(0.22, 1, 0.36, 1),
              background-color 0.08s ease, border-color 0.08s ease,
              box-shadow 0.08s ease, opacity 0.08s ease, color 0.06s ease !important;
  will-change: transform;
}
button:active, .nav-btn:active, .t-btn:active, .p-btn:active, .theme-btn:active,
.setting-btn:active, .logout-btn:active, .submit-btn:active, .export-btn:active,
.edit-btn-recent:active, .del-btn-recent:active, .nav-ext-btn:active,
.cat-chip:active, .calc-btn:active, .swap-btn:active, .set-action:active, .admin-user-card:active, .auth-tab:active,
.admin-detail-btn:active {
  transform: scale(0.94);
  transition-duration: 0.03s !important;
}
.w-card:active, .recent-item:active, .m-card:active, .calc-curr-item:active {
  transform: scale(0.97);
  transition-duration: 0.03s !important;
}
/* Feedback hover halus untuk perangkat dengan mouse (tidak mengganggu di HP/tablet) */
@media (hover: hover) and (pointer: fine) {
  button:hover, .nav-btn:hover, .t-btn:hover, .p-btn:hover, .theme-btn:hover,
  .setting-btn:hover, .logout-btn:hover, .submit-btn:hover, .export-btn:hover,
  .edit-btn-recent:hover, .del-btn-recent:hover, .nav-ext-btn:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }
  .w-card:hover, .recent-item:hover, .m-card:hover { transform: translateY(-1px); }
}

.nav-btn, .t-btn, .p-btn { position: relative; }
.nav-btn.active, .t-btn.active, .p-btn.active { animation: activePulse 0.09s cubic-bezier(0.22, 1, 0.36, 1); }
@keyframes activePulse { 0% { transform: scale(0.96); } 100% { transform: scale(1); } }

.m-card, .w-card { animation: cardIn 0.09s cubic-bezier(0.22, 1, 0.36, 1); }
@keyframes cardIn { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: translateY(0); } }

/* Transisi antar halaman langsung terasa seperti sekali pencet, tanpa jeda */
.page.active { animation: pageIn 0.07s cubic-bezier(0.22, 1, 0.36, 1); will-change: opacity; }
@keyframes pageIn { from { opacity: 0.7; } to { opacity: 1; } }

/* Sorotan singkat saat form "Tambah Transaksi" dibuka via tombol EDIT */
.flash-highlight { animation: flashHighlight 1.1s cubic-bezier(0.22, 1, 0.36, 1); }
@keyframes flashHighlight {
  0% { box-shadow: 0 0 0 0 rgba(251,191,36,0.55); border-color: var(--gold); }
  60% { box-shadow: 0 0 0 10px rgba(251,191,36,0); border-color: var(--gold); }
  100% { box-shadow: none; }
}

html { scroll-behavior: smooth; }

/* ==========================================================================
   POLISH TAMBAHAN: hilangkan lag tap 300ms & bikin scroll bermomentum
   seperti aplikasi native (iOS/Android) agar terasa sekelas app besar.
   ========================================================================== */
html, body { -webkit-text-size-adjust: 100%; }
/* FIX: sebelumnya diterapkan ke SEMUA elemen (*), ini bikin browser membuat layer GPU
   terpisah untuk tiap elemen (tombol, kartu, item riwayat, dst) sekaligus — inilah
   penyebab perpindahan dashboard->riwayat "ngedet" dan scroll riwayat kadang macet/patah.
   Dibatasi hanya ke container yang benar-benar discroll. */
html, body { -webkit-overflow-scrolling: touch; }
.list-wrap, #recent-list { -webkit-overflow-scrolling: touch; overscroll-behavior: contain; }
body, button, a, .nav-btn, .t-btn, .p-btn, .theme-btn, .setting-btn, .logout-btn,
.submit-btn, .export-btn, .edit-btn-recent, .del-btn-recent, .w-card,
.recent-item, .m-card, .nav-ext-btn, .status-pill, .calc-curr-item,
.nav-bottom, .nav-bottom * {
  touch-action: manipulation;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button, .nav-btn, .t-btn, .p-btn, .theme-btn, .setting-btn, .logout-btn,
.submit-btn, .export-btn, .w-card, .recent-item, .m-card, .nav-ext-btn,
.status-pill, .calc-curr-item {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@keyframes swal2-show {
  0% { transform: scale(0.92); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes swal2-hide {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.96); opacity: 0; }
}
.swal2-popup.swal2-show { animation: swal2-show 0.18s cubic-bezier(0.22, 1, 0.36, 1) !important; }
.swal2-popup.swal2-hide { animation: swal2-hide 0.14s cubic-bezier(0.4, 0, 1, 1) !important; }
@keyframes swal2-backdrop-show { from { background: rgba(0,0,0,0); } to { background: var(--swal2-backdrop, rgba(0,0,0,.4)); } }
@keyframes swal2-backdrop-hide { from { background: var(--swal2-backdrop, rgba(0,0,0,.4)); } to { background: rgba(0,0,0,0); } }
.swal2-backdrop-show { animation: swal2-backdrop-show 0.18s cubic-bezier(0.22, 1, 0.36, 1) !important; }
.swal2-backdrop-hide { animation: swal2-backdrop-hide 0.14s cubic-bezier(0.4, 0, 1, 1) !important; }

/* HEADER */
.header-area { padding: 20px 24px; }
.logo-row { display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; margin-bottom: 20px; padding-top: 10px; }
.logo-img { width: 60px; height: 60px; border-radius: 14px; border: 1px solid var(--gold2); padding: 2px; }
.logo-img img { width: 100%; height: 100%; border-radius: 10px; object-fit: cover; }
.logo-text { text-align: center; }
.logo-text .main-text { font-size: 20px; font-weight: 800; color: var(--text); letter-spacing: 0.5px; }
.logo-text .sub-text { font-size: 10px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 1.5px; }

/* EXTERNAL LINKS */
.top-ext-links {
  display: flex; gap: 16px; padding: 0 0 24px 0;
  flex-wrap: wrap; align-items: center; justify-content: center;
}
.nav-ext-btn {
  background: transparent; border: none; color: var(--gold);
  font-weight: 700; font-size: 11px; font-family: 'Outfit', sans-serif;
  cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;
}
.nav-ext-btn:hover { color: var(--text); }

.status-row { display: flex; gap: 12px; margin-bottom: 20px; }
.status-pill {
  background: var(--bg2); border: 1px solid var(--border); border-radius: 12px;
  padding: 8px 16px; display: flex; align-items: center; justify-content: center; gap: 8px;
}
.usd-val { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: var(--text); }
.sync-dot { width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 8px currentColor; }
.sync-text { font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }

/* USER ROW */
.user-row { display: flex; align-items: center; gap: 12px; position: relative; width: 100%; }
.theme-btn {
  background: var(--bg2); border: 1px solid var(--border); color: var(--gold);
  width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  font-size: 16px; cursor: pointer; flex-shrink: 0; transition: 0.3s;
}
.theme-btn:hover { background: var(--bg3); }
.user-pill {
  flex: 1; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px;
  padding: 4px 12px 4px 4px; display: flex; align-items: center; justify-content: space-between;
}
.user-pill-left { display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; overflow: hidden; }
.u-avatar {
  width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--gold);
  display: flex; align-items: center; justify-content: center; color: var(--gold); font-weight: 700; font-size: 14px; flex-shrink: 0;
  background: var(--bg3);
}
.u-name { font-size: 12px; font-weight: 600; color: var(--text); display: flex; align-items: center; gap: 4px; flex-wrap: nowrap; overflow: hidden; white-space: nowrap; max-width: 140px;}

.user-action-wrap { display: flex; gap: 6px; padding-right: 4px; align-items: center; }
.setting-btn { background: transparent; border: 1px solid var(--border2); color: var(--text3); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; padding: 0; }
.logout-btn { background: transparent; border: 1px solid var(--border2); color: var(--text3); height: 32px; padding: 0 12px; border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer; text-transform: uppercase; transition: 0.3s; display: flex; align-items: center; justify-content: center; }
.setting-btn:hover { background: rgba(255,255,255,0.05); border-color: var(--text); color: var(--text); }
.logout-btn:hover { background: rgba(248,113,113,0.1); border-color: var(--red2); color: var(--red2); }

/* NAVIGATION */
.nav {
  padding: 0 24px 24px; display: flex; gap: 12px;
  overflow-x: auto; scrollbar-width: none; white-space: nowrap;
}
.nav::-webkit-scrollbar { display: none; }
.nav-btn {
  padding: 10px 20px; font-size: 11px; font-weight: 700; color: var(--text3);
  border: 1px solid var(--border); border-radius: 100px; background: transparent;
  cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 0.5px;
}
.nav-btn.active { background: var(--text); color: var(--bg); border-color: var(--text); }

/* MAIN CONTENT */
.main { padding: 0 24px 80px; max-width: 1400px; margin: 0 auto; }
.page { display: none; } .page.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

/* METRICS */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.m-card { background: var(--card); border-radius: var(--radius); padding: 16px; border: 1px solid var(--border); display: flex; flex-direction: column; }
.m-label { font-size: 9px; font-weight: 800; text-transform: uppercase; color: var(--text3); margin-bottom: 8px; letter-spacing: 0.5px; }
.m-val { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; margin-bottom: 4px; color: var(--text); white-space: nowrap; overflow-x: auto; scrollbar-width: none; width: 100%; display: block; letter-spacing: -0.5px; }
.m-val::-webkit-scrollbar { display: none; }
.usd-pill {
  display: inline-block; background: var(--bg3); color: var(--text3);
  font-size: 10px; font-family: 'JetBrains Mono', monospace; font-weight: 600;
  padding: 2px 8px; border-radius: 6px; align-self: flex-start; margin-bottom: 8px;
}
.m-sub { font-size: 10px; font-weight: 500; color: var(--text3); margin-bottom: 12px; flex-grow: 1; }
.m-bar { height: 4px; background: var(--bg3); border-radius: 2px; width: 100%; overflow: hidden; }
.m-bar-fill { height: 100%; border-radius: 2px; transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.inc .m-bar-fill { background: var(--green2); } .exp .m-bar-fill { background: var(--red2); }
.bal .m-bar-fill { background: var(--border2); } .cnt .m-bar-fill { background: var(--blue); }

/* WALLETS */
.wallet-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 24px; }
.w-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; justify-content: center; overflow: hidden; position: relative; transition: 0.2s; }
.w-card:hover { border-color: var(--gold); background: var(--bg2); }
.w-label { font-size: 8px; font-weight: 800; color: var(--text3); text-transform: uppercase; margin-bottom: 2px; letter-spacing: 0.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.w-val { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: var(--text); white-space: nowrap; overflow-x: auto; scrollbar-width: none; width: 100%; display: block; letter-spacing: -0.5px; }
.w-val::-webkit-scrollbar { display: none; }
.w-val.min { color: var(--red2); }

/* ==========================================================================
   DOMPET SALDO — Kartu transfer saldo antar user (gaya dompet digital / Bitget)
   ========================================================================== */
.saldo-wallet-card { position:relative; border-radius:20px; padding:22px 20px; overflow:hidden; background:linear-gradient(135deg, #1a1a2e 0%, #16161d 55%, #0d0d12 100%); border:1px solid var(--border2); box-shadow:0 12px 28px rgba(0,0,0,0.45); }
.saldo-wallet-card::before { content:''; position:absolute; top:-40%; right:-20%; width:220px; height:220px; background:radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(251,191,36,0) 70%); pointer-events:none; }
.saldo-wallet-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; position:relative; z-index:1; }
.saldo-wallet-tag { font-size:9px; font-weight:800; letter-spacing:1px; color:var(--gold); text-transform:uppercase; background:rgba(251,191,36,0.12); border:1px solid rgba(251,191,36,0.35); padding:4px 10px; border-radius:20px; }
.saldo-wallet-eye { background:rgba(255,255,255,0.06); border:1px solid var(--border2); color:var(--text2); width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:12px; }
.saldo-wallet-label { font-size:10px; color:var(--text3); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px; position:relative; z-index:1; }
.saldo-wallet-amt { font-family:'JetBrains Mono', monospace; font-size:26px; font-weight:800; color:#fff; letter-spacing:-0.5px; word-break:break-all; position:relative; z-index:1; }
.saldo-wallet-code { margin-top:14px; display:flex; align-items:center; justify-content:space-between; gap:10px; background:rgba(255,255,255,0.05); border:1px dashed var(--border2); border-radius:12px; padding:10px 14px; position:relative; z-index:1; }
.saldo-wallet-actions { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:16px; position:relative; z-index:1; }
.saldo-wallet-actions .saldo-wallet-btn { font-size:9.5px; }
.saldo-wallet-btn { border:none; border-radius:14px; padding:12px 8px; font-size:11px; font-weight:800; letter-spacing:0.3px; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; }
.saldo-wallet-btn.send { background:var(--gold); color:#000; }
.saldo-wallet-btn.receive { background:rgba(255,255,255,0.08); color:var(--text); border:1px solid var(--border2); }
.saldo-wallet-btn.request { background:rgba(59,130,246,0.15); color:var(--blue); border:1px solid var(--blue); }
.saldo-wallet-btn.topup { background:rgba(16,185,129,0.15); color:var(--green2); border:1px solid var(--green2); }

/* ===== REQUEST SALDO (Minta Saldo) & CS CHAT ===== */
.req-item { background:var(--bg3); border:1px solid var(--border); border-radius:14px; padding:14px; margin-bottom:10px; }
.req-item .req-top { display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px; }
.req-item .req-name { font-size:12px; font-weight:800; color:var(--text); }
.req-item .req-amt { font-family:'JetBrains Mono', monospace; font-size:14px; font-weight:800; color:var(--gold); }
.req-item .req-note { font-size:10px; color:var(--text3); margin-bottom:10px; }
.req-badge { font-size:8px; font-weight:800; text-transform:uppercase; padding:3px 8px; border-radius:20px; letter-spacing:0.5px; }
.req-badge.pending { background:rgba(251,191,36,0.15); color:var(--gold); }
.req-badge.approved { background:rgba(16,185,129,0.15); color:var(--green2); }
.req-badge.rejected { background:rgba(248,113,113,0.15); color:var(--red2); }
.req-actions { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.req-btn { border:none; border-radius:10px; padding:10px; font-size:10px; font-weight:800; cursor:pointer; text-transform:uppercase; }
.req-btn.ok { background:var(--green2); color:#000; }
.req-btn.no { background:rgba(248,113,113,0.15); color:var(--red2); border:1px solid var(--red2); }

#cs-chat-screen { display:none; position:fixed; inset:0; background:var(--bg); z-index:99999; flex-direction:column; }
.cs-chat-head { display:flex; align-items:center; gap:12px; padding:16px; border-bottom:1px solid var(--border); background:var(--card); }
.cs-chat-head .cs-back { background:var(--bg3); border:1px solid var(--border2); color:var(--text); width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; flex-shrink:0; }
.cs-chat-head .cs-title { font-size:13px; font-weight:800; color:var(--text); }
.cs-chat-head .cs-sub { font-size:10px; color:var(--text3); }
.cs-chat-body { flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:8px; }
.cs-bubble { max-width:78%; padding:10px 14px; border-radius:16px; font-size:12px; line-height:1.4; word-break:break-word; }
.cs-bubble.me { align-self:flex-end; background:var(--gold); color:#000; border-bottom-right-radius:4px; }
.cs-bubble.them { align-self:flex-start; background:var(--bg3); color:var(--text); border:1px solid var(--border); border-bottom-left-radius:4px; }
.cs-bubble .cs-time { display:block; font-size:8px; opacity:0.6; margin-top:4px; text-align:right; }
.cs-bubble { position:relative; }
.cs-msg-del { position:absolute; top:-8px; right:-8px; width:18px; height:18px; border-radius:50%; background:var(--red2); color:#fff; font-size:9px; display:flex; align-items:center; justify-content:center; cursor:pointer; opacity:0; transition:opacity .15s ease, transform .15s ease; box-shadow:0 2px 6px rgba(0,0,0,0.3); }
.cs-bubble:hover .cs-msg-del, .cs-bubble:active .cs-msg-del { opacity:1; }
@media (hover:none) { .cs-msg-del { opacity:0.85; } }
.cs-chat-input-wrap { display:flex; gap:8px; padding:12px 16px; border-top:1px solid var(--border); background:var(--card); }
.cs-chat-input-wrap input { flex:1; background:var(--bg3); border:1px solid var(--border2); color:var(--text); border-radius:20px; padding:12px 16px; font-size:13px; font-family:'Outfit', sans-serif; outline:none; }
.cs-chat-input-wrap button { background:var(--gold); color:#000; border:none; width:42px; height:42px; border-radius:50%; font-size:16px; cursor:pointer; flex-shrink:0; }
.cs-list-item { display:flex; align-items:center; gap:12px; padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg3); cursor:pointer; transition:0.2s; }
.cs-list-item:hover { border-color:var(--gold); }
.cs-list-avatar { width:38px; height:38px; border-radius:50%; background:var(--gold); color:#000; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:15px; flex-shrink:0; }
.cs-list-info { flex:1; min-width:0; }
.cs-list-info .cs-list-name { font-size:12px; font-weight:800; color:var(--text); }
.cs-list-info .cs-list-last { font-size:10px; color:var(--text3); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.cs-unread-dot { width:9px; height:9px; border-radius:50%; background:var(--red2); flex-shrink:0; }
.w-pct-badge { position: absolute; top: 8px; right: 8px; font-size: 8px; font-weight: 800; background: var(--border); padding: 2px 4px; border-radius: 4px; color: var(--text2); display: none; }

#wallet-hist-screen { display:none; position:fixed; inset:0; background:var(--bg); z-index:99999; flex-direction:column; }
#barcode-req-screen, #scan-send-screen { display:none; position:fixed; inset:0; background:var(--bg); z-index:99999; flex-direction:column; }
.wallet-hist-head { display:flex; align-items:center; gap:12px; padding:16px; border-bottom:1px solid var(--border); background:var(--card); }
.wallet-hist-head .cs-back { background:var(--bg3); border:1px solid var(--border2); color:var(--text); width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; flex-shrink:0; }
.wallet-hist-head .cs-title { font-size:13px; font-weight:800; color:var(--text); }
.wallet-hist-head .cs-sub { font-size:10px; color:var(--text3); }
.wallet-hist-filter { padding:12px 16px; border-bottom:1px solid var(--border); background:var(--card); }
.wallet-hist-body { flex:1; overflow-y:auto; padding:16px; -webkit-overflow-scrolling:touch; overscroll-behavior:contain; }

.sum-grid { display: grid; gap: 16px; margin-bottom: 24px; }
.sum-grid .m-card { padding: 16px; }
.sum-grid .m-label { font-size: 9px; margin-bottom: 8px; }
.sum-grid .m-val { font-size: 15px; margin-bottom: 4px; }
.sum-grid .usd-pill { font-size: 9px; padding: 1px 6px; margin-bottom: 5px; }

/* FORMS */
.card { background: var(--card); border-radius: var(--radius); padding: 32px; border: 1px solid var(--border); margin-bottom: 24px; }
.card-head { margin-bottom: 16px; }
.card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.card-sub { font-size: 12px; color: var(--text3); }

.type-toggle { display: flex; background: var(--bg3); border-radius: 16px; padding: 4px; margin-bottom: 20px; }
.t-btn { flex: 1; padding: 12px; border: none; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; }
.t-btn.income.active { background: var(--bg2); color: var(--green2); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.t-btn.expense.active { background: var(--bg2); color: var(--text); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

.f-input-dark {
  width: 100%; padding: 16px; border-radius: 16px; border: 1px solid var(--border);
  background-color: var(--bg2) !important; color: var(--text) !important;
  outline: none; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 500;
  appearance: none; -webkit-appearance: none; transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03); 
}
#f-amount { overflow-x: auto; white-space: nowrap; scrollbar-width: none; font-size: 20px; font-weight: 800; }
.f-input-dark:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15); }
.f-input-dark::placeholder { color: var(--text3); }

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
input[type="number"] { -moz-appearance: textfield; }

/* INPUT TEXT/NUMBER DI DALAM POPUP (SweetAlert) — radius diperbesar biar nggak kotak banget, senada sama f-input-dark */
input.swal2-input, textarea.swal2-textarea {
  border-radius: 16px !important;
  background-color: var(--bg2) !important; color: var(--text) !important;
  border: 1px solid var(--border) !important;
  box-shadow: none !important;
}
input.swal2-input:focus, textarea.swal2-textarea:focus {
  border-color: var(--gold) !important; box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15) !important;
}

/* SELECT DI DALAM POPUP (SweetAlert) — biar seragam gelap, bukan kotak putih default browser */
select.swal2-input {
  -webkit-appearance: none; appearance: none;
  background-color: var(--bg2) !important; color: var(--text) !important;
  border: 1px solid var(--border) !important; border-radius: 16px;
  padding: 16px 40px 16px 16px !important; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FBBF24' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center; background-size: 14px;
  cursor: pointer;
}
select.swal2-input:focus { border-color: var(--gold) !important; box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15); outline: none; }
select.swal2-input option { background-color: var(--bg2); color: var(--text); }

select.f-input-dark {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer;
}
select.f-input-dark option { background: var(--bg2); color: var(--text); font-weight: 500; padding: 12px; }

.form-row { margin-bottom: 16px; }
.form-label { font-size: 10px; font-weight: 800; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
.form-row textarea { height: 100px; resize: none; border-radius: 16px; }
.submit-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 16px; font-size: 13px; font-weight: 800; cursor: pointer; transition: 0.2s; text-transform: uppercase; margin-top: 8px; }

/* HISTORY CARDS */
#recent-list { overflow-y: auto; scrollbar-width: none; }
#recent-list::-webkit-scrollbar { display: none; }

.list-wrap { padding: 8px 0; }
.list-wrap::-webkit-scrollbar { width: 6px; }
.list-wrap::-webkit-scrollbar-track { background: var(--bg); border-radius: 4px; }
.list-wrap::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 4px; }

.recent-item {
  padding: 16px; margin-bottom: 12px; border-radius: 16px; 
  background: var(--bg2); border: 1px solid var(--border); 
  display: flex; align-items: center; justify-content: space-between;
  min-height: 96px;
  content-visibility: auto; contain-intrinsic-size: 0 108px; contain: layout style paint;
}
.ri-icon {
  width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  font-size: 18px; font-weight: 800; background: var(--bg3); margin-right: 12px; flex-shrink: 0;
}
.ri-icon.inc { color: var(--green2); } .ri-icon.exp { color: var(--red2); }
.ri-left { display: flex; align-items: center; flex: 1; min-width: 0; }

.ri-note { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 2px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; line-height: 1.4; }
.ri-meta { font-size: 11px; font-weight: 500; color: var(--text3); }
.cat-badge { font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 6px; background: var(--bg); border: 1px solid var(--border); color: var(--text3); text-transform: uppercase; display: inline-block; white-space: nowrap; }

.ri-right-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; margin-left: 12px; }
.ri-amounts-col { display: flex; flex-direction: column; align-items: flex-end; }
.ri-amount { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; white-space: nowrap; color: var(--text); }
.ri-usd { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: var(--text3); margin-top: 2px; }

.edit-btn-recent { background: rgba(59, 130, 246, 0.15); border: 1px solid var(--blue); color: var(--blue); padding: 6px 12px; font-size: 10px; font-weight: 800; border-radius: 8px; cursor: pointer; text-transform: uppercase; margin-top: 4px; transition: 0.3s; text-decoration: none; }
.del-btn-recent { background: rgba(248, 113, 113, 0.15); border: 1px solid var(--red2); color: var(--red2); padding: 6px 12px; font-size: 10px; font-weight: 800; border-radius: 8px; cursor: pointer; text-transform: uppercase; margin-top: 4px; transition: 0.3s; text-decoration: none; }
.edit-btn-recent:hover { background: var(--blue); color: #fff; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4); }
.del-btn-recent:hover { background: var(--red2); color: #fff; box-shadow: 0 4px 12px rgba(248, 113, 113, 0.4); }

.export-btn { background: var(--text); color: var(--bg); padding: 16px 24px; border: none; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; flex-shrink: 0; white-space: nowrap; }
.export-row { display: flex; gap: 8px; align-items: center; }
.action-btns { display: flex; gap: 8px; margin-top: 4px; align-items: center; justify-content: flex-end; flex-wrap: wrap;}

/* KALKULATOR MATA UANG */
.calc-curr-item { display: flex; justify-content: space-between; align-items: center; padding: 16px; cursor: pointer; border-radius: 12px; transition: 0.2s; margin-bottom: 4px; border: 1px solid transparent; }
.calc-curr-item:hover { background: rgba(128,128,128,0.1); border-color: var(--border); }
.calc-curr-item.active { background: rgba(16, 185, 129, 0.05); border-color: var(--green2); }
.calc-curr-item.active .calc-amount { color: var(--green2); border-right: 2px solid var(--green2); padding-right: 6px; animation: blinkCursor 1s step-end infinite; }
@keyframes blinkCursor { 50% { border-color: transparent; } }

.calc-left { display: flex; align-items: center; gap: 12px; }
.calc-flag { display: flex; align-items: center; justify-content: center; }
.calc-code-wrap { display: flex; flex-direction: column; align-items: flex-start; }

.calc-select {
    background: transparent; color: var(--text); border: none; font-size: 16px; font-weight: 800;
    outline: none; cursor: pointer; font-family: 'Outfit', sans-serif; appearance: none; -webkit-appearance: none; padding-right: 18px;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat; background-position: right center;
}
.calc-name { font-size: 10px; color: var(--text3); margin-top: 2px; padding-left: 2px; }
.calc-right { text-align: right; overflow: hidden; }
.calc-amount { font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 600; color: var(--text); margin-bottom: 2px; transition: color 0.2s; max-width: 55vw; overflow-x: auto; white-space: nowrap; scrollbar-width: none; }

.swap-btn { background: var(--bg2); border: 1px solid var(--border); color: var(--text3); width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px; transition: 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.swap-btn:hover { background: var(--bg3); color: var(--text); border-color: var(--text3); }
/* Diubah warna bg nya pake variable tema biar nyesuaiin dengan light/dark mode */
.calc-keypad-wrap { background: var(--bg3); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; padding: 24px 16px; margin-top: 8px; }
.calc-keypad { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 55px); gap: 12px; }
.calc-btn { background: transparent; border: none; color: var(--text); font-size: 22px; font-family: 'Outfit', sans-serif; cursor: pointer; border-radius: 12px; transition: 0.1s; display: flex; align-items: center; justify-content: center; }
.calc-btn:active { background: rgba(128,128,128,0.2); }
.calc-btn-ac { background: #23342B; color: #4ADE80; grid-column: 4; grid-row: 1 / 3; font-size: 20px; font-weight: 700; border-radius: 16px; }
.calc-btn-del { background: #23342B; color: #4ADE80; grid-column: 4; grid-row: 3 / 5; border-radius: 16px; }

/* SETTINGS MODULE */
.set-group { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 20px; margin-bottom: 24px; }
.set-title { font-size: 11px; font-weight: 800; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; letter-spacing: 1px; border-bottom: 1px solid var(--border2); padding-bottom: 12px; display: flex; align-items: center; gap: 8px; }
.set-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px dashed var(--border2); }
.set-item:last-child { border-bottom: none; padding-bottom: 0; }
.set-label { font-size: 13px; font-weight: 700; color: var(--text); }
.set-sub { font-size: 10px; color: var(--text3); margin-top: 4px; font-weight: 500; }
.set-action { padding: 8px 16px; background: var(--bg3); border: 1px solid var(--border); color: var(--text); border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer; transition: 0.2s; text-transform: uppercase; white-space: nowrap; }
.set-action:hover { background: var(--bg2); border-color: var(--gold); color: var(--gold); }
.set-action.danger { color: var(--red2); border-color: rgba(248,113,113,0.3); }
.set-action.danger:hover { background: rgba(248,113,113,0.1); border-color: var(--red2); }
.set-select { background: var(--bg2); border: 1px solid var(--border); color: var(--text); padding: 8px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; outline: none; font-family: 'Outfit', sans-serif; cursor: pointer; }

/* CHART & FILTERS BAR */
.chart-wrap { margin-bottom: 24px; }
.chart-legend { display: flex; gap: 16px; margin-bottom: 16px; justify-content: center; }
.leg-item { display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; }
.leg-dot { width: 10px; height: 10px; border-radius: 2px; }
.period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; padding-bottom: 8px; }
.p-btn { padding: 10px 20px; border: 1px solid var(--border); border-radius: 100px; font-size: 11px; font-weight: 700; cursor: pointer; background: var(--bg2); color: var(--text3); white-space: nowrap; }
.chart-filter-badge { display: flex; align-items: center; justify-content: space-between; gap: 8px; background: var(--bg3); border: 1px solid var(--border2); border-radius: 12px; padding: 10px 14px; margin-bottom: 10px; font-size: 11px; font-weight: 700; color: var(--gold); }
.chart-filter-badge span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.chart-filter-badge .chart-filter-clear { background: var(--bg2); border: 1px solid var(--border2); color: var(--text2); border-radius: 100px; padding: 6px 12px; font-size: 10px; font-weight: 700; cursor: pointer; white-space: nowrap; }
.chart-filter-badge .chart-filter-clear:active { opacity: 0.7; }
.cat-chip-wrap { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border); }
.cat-chip { display: flex; flex-direction: column; align-items: flex-start; gap: 5px; padding: 10px 12px; border: 1px solid var(--border2); border-radius: 14px; font-size: 10px; font-weight: 700; cursor: pointer; background: var(--bg2); color: var(--text2); transition: 0.2s; overflow: hidden; min-width: 0; }
.cat-chip:hover { border-color: var(--gold); }
.cat-chip.active { border-color: var(--gold); background: rgba(251, 191, 36, 0.12); color: var(--gold); }
.cat-chip > span:first-child { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--text); }
.cat-chip.active > span:first-child { color: var(--gold); }
.cat-chip .cat-chip-amt { font-family: 'JetBrains Mono', monospace; font-size: 10px; opacity: 0.9; white-space: nowrap; }
.p-btn.active { border-color: var(--text); color: var(--text); background: var(--bg); }

/* ==========================================================================
   ADMIN: DETAIL TRANSAKSI PER AKUN & GRAFIK BULANAN (Tambahan Baru)
   ========================================================================== */
.admin-user-card { transition: 0.3s; }
.admin-user-actions { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
.admin-detail-btn {
  flex: 1 1 calc(50% - 8px); min-width: 100px; padding: 9px 6px; font-size: 9px; font-weight: 800; border-radius: 8px;
  cursor: pointer; text-transform: uppercase; letter-spacing: 0.3px; text-align: center;
  transition: 0.3s; font-family: 'Outfit', sans-serif;
  background: rgba(251,191,36,0.1); border: 1px solid var(--gold); color: var(--gold);
}
.admin-detail-btn:hover { background: var(--gold); color: #000; }
.admin-detail-btn.chart { background: rgba(59,130,246,0.1); border: 1px solid var(--blue); color: var(--blue); }
.admin-detail-btn.chart:hover { background: var(--blue); color: #fff; }
.admin-detail-btn.weekly { background: rgba(16,185,129,0.1); border: 1px solid var(--green2); color: var(--green2); }
.admin-detail-btn.weekly:hover { background: var(--green2); color: #000; }
.admin-detail-btn.yearly { background: rgba(245,158,11,0.1); border: 1px solid var(--gold2); color: var(--gold2); }
.admin-detail-btn.yearly:hover { background: var(--gold2); color: #000; }
.admin-detail-btn.riwayat { background: rgba(255,255,255,0.06); border: 1px solid var(--text3); color: var(--text2); }
.admin-detail-btn.riwayat:hover { background: var(--text3); color: #000; }
.admin-detail-btn.fix { background: rgba(16,185,129,0.1); border: 1px solid var(--green2); color: var(--green2); }
.admin-detail-btn.fix:hover { background: var(--green2); color: #000; }
.admin-detail-btn.danger { background: rgba(248,113,113,0.12); border: 1px solid var(--red2); color: var(--red2); }
.admin-detail-btn.danger:hover { background: var(--red2); color: #fff; }
#admin-detail-section { padding: 20px; }
.filter-bar { display: flex; gap: 16px; width: 100%; margin-bottom: 24px; align-items: center; flex-wrap: wrap; }
.filter-bar select.f-input-dark { width: 250px; flex-shrink: 0; }
.filter-bar input.f-input-dark { flex: 1; }

/* AUTH SCREEN */
#auth-screen { position: fixed; inset: 0; background: var(--bg); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.auth-box { background: var(--card); border-radius: 24px; padding: 40px 24px; width: 90%; max-width: 400px; border: 1px solid var(--border); text-align: center; }
.auth-box img { width: 64px; border-radius: 16px; margin-bottom: 16px; border: 1px solid var(--border2); }
.auth-title { font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
.auth-sub { font-size: 12px; color: var(--text3); font-weight: 500; margin-bottom: 24px; }
.auth-tabs { display: flex; background: var(--bg3); border-radius: 12px; padding: 4px; margin-bottom: 24px; }
.auth-tab { flex: 1; padding: 12px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; border: none; color: var(--text3); border-radius: 8px; }
.auth-tab.active { background: var(--bg2); color: var(--text); }
.auth-field input { width: 100%; padding: 16px; font-size: 14px; font-weight: 500; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); border-radius: 12px; background: var(--bg2); color: var(--text); margin-bottom: 12px; outline: none; }
.auth-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 12px; font-size: 13px; font-weight: 800; cursor: pointer; text-transform: uppercase; margin-top: 8px; }
.btn-google { background: #fff !important; color: #000 !important; border: 1px solid #ddd !important; display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 12px; }

/* ==========================================================================
   MOBILE RESPONSIVE
   ========================================================================== */
@media (max-width: 768px) {
  .top-ext-links { justify-content: center; padding: 0 0 16px 0; }
  .header-area { padding: 16px; }
  .status-row { flex-direction: row; }
  .status-pill { flex: 1; }
  .user-row { flex-direction: row; justify-content: flex-start; }
  .nav { padding: 0 16px 20px; }
  
  .main { padding: 0 0 80px 0 !important; width: 100%; overflow-x: hidden; }
  
  #recent-list { overflow: visible !important; max-height: none !important; overscroll-behavior: auto !important; -webkit-overflow-scrolling: auto !important; touch-action: pan-y !important; }
  
  .metrics { grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 0 !important; margin: 0 !important; background: transparent; border: none; }
  .metrics .m-card { border-radius: 24px !important; border-left: none; border-right: none; }
  
  .wallet-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding-left: 16px; padding-right: 16px; margin: 8px 0 16px 0 !important; width: 100%; }
  .w-card { border-radius: 12px !important; padding: 6px !important; }

  .sum-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 0 !important; margin: 0 0 24px 0 !important; background: transparent; border: none; }
  .sum-grid .m-card { border-radius: 24px !important; border-left: none; border-right: none; }

  .panel { display: flex; flex-direction: column; gap: 16px; background: transparent; }
  .card { padding: 16px 0 !important; border-radius: 0 !important; border: none !important; background: transparent !important; margin-bottom: 0; }
  
  .card-head, .form-row, .filter-bar, .chart-wrap, .period-bar { padding-left: 16px !important; padding-right: 16px !important; }
  
  .filter-bar { flex-direction: column; } 
  .export-btn { width: 100%; text-align: center; border-radius: 16px; padding: 18px 16px; margin-left: 0 !important; margin-top: 8px;}
  .export-row { width: 100%; margin-top: 8px; gap: 8px; }
  .export-row .export-btn { width: 50%; flex: 1 1 0; margin-top: 0 !important; padding-left: 4px !important; padding-right: 4px !important; font-size: 10.5px !important; }
  
  .type-toggle, .submit-btn { width: calc(100% - 32px) !important; margin-left: 16px !important; margin-right: 16px !important; }
  .filter-bar select.f-input-dark, .filter-bar input.f-input-dark { width: 100%; border-radius: 16px; }
  .f-input-dark { padding: 18px 16px; font-size: 16px; border-radius: 16px; } /* Updated to 16px */
  
  .list-wrap { padding: 0 !important; margin: 0 !important; width: 100%; }
  .recent-item { width: 100% !important; margin: 0 0 12px 0 !important; padding: 12px 16px !important; border-radius: 24px !important; border-left: none !important; border-right: none !important; background: var(--card); flex-direction: row; justify-content: space-between; align-items: center; min-height: 92px; }
  .ri-right-wrap { margin-left: 8px !important; align-items: flex-end; flex-shrink: 0; max-width: 62%; }
  .action-btns { flex-wrap: nowrap !important; overflow-x: auto; scrollbar-width: none; padding-bottom: 2px; justify-content: flex-end; width: 100%; gap: 4px !important; }
  .action-btns::-webkit-scrollbar { display: none; }
  .del-btn-recent, .edit-btn-recent { margin-top: 0px !important; padding: 4px 7px !important; font-size: 8px !important; flex-shrink: 0; }
  .cat-badge, .wallet-badge { font-size: 7px; padding: 2px 4px; display: inline-block !important; }
  .u-name { max-width: 90px; }
  .user-pill { padding: 4px; }

  .set-group { border-radius: 0; border-left: none; border-right: none; padding: 20px 16px; }
  .logout-btn { padding: 0 8px; font-size: 9px; height: 28px; }
  .setting-btn { width: 28px; height: 28px; padding: 4px; }
}

/* ==========================================================================
   DESKTOP RESPONSIVE (LAPTOP/PC)
   ========================================================================== */
@media (min-width: 769px) {
  .metrics { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .sum-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .wallet-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding-bottom: 0; }
  .w-card { min-width: 0; }
  
  .panel { display: flex; align-items: stretch; gap: 24px; }
  .panel > .card:nth-child(1) { width: 380px; flex-shrink: 0; margin-bottom: 0; }
  .panel > .card:nth-child(2) { flex-grow: 1; display: flex; flex-direction: column; margin-bottom: 0; }
  .panel > .card:nth-child(2) .list-wrap { flex-grow: 1; overflow-y: auto; height: 0; padding-right: 8px; }
  
  #recent-list { max-height: none !important; }
  
  .main, .header-area, .nav { max-width: 1200px; margin: 0 auto; }
  
  .status-row { justify-content: center; align-items: center; }
  .status-row .status-pill { flex: 0 1 auto !important; min-width: 180px; }
}

/* STYLING HUTANG PIUTANG & DOMPET */
.t-btn.debt.active { background: var(--bg2); color: var(--gold); border: 1px solid var(--gold); }
.t-btn.recv.active { background: var(--bg2); color: var(--blue); border: 1px solid var(--blue); }
.t-btn.transfer.active { background: var(--bg2); color: var(--text); border: 1px solid var(--text); }
.ri-icon.debt { color: var(--gold); background: rgba(251, 191, 36, 0.15); }
.ri-icon.recv { color: var(--blue); background: rgba(59, 130, 246, 0.15); }
.ri-icon.transfer { color: var(--text); background: var(--bg3); }
.ri-amount.debt { color: var(--gold); }
.ri-amount.recv { color: var(--blue); }
.ri-amount.transfer { color: var(--text); }
.wallet-badge { background: var(--bg3); color: var(--text2); font-size: 7px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 800; border: 1px solid var(--border2); text-transform: uppercase; display: inline-block; white-space: normal; word-break: break-word; line-height: 1.2; }

body.hide-usd .usd-pill, body.hide-usd .ri-usd, body.hide-usd .usd-wallet-val, body.hide-usd .usd-status-pill { display: none !important; }

/* ANTI INTIP SALDO (FITUR 7) */
body.global-privacy .m-val,
body.global-privacy .w-val,
body.global-privacy .ri-amount,
body.global-privacy .usd-pill,
body.global-privacy .usd-wallet-val,
body.global-privacy .ri-usd,
body.global-privacy .usd-val,
body.global-privacy #xau-idr-oz,
body.global-privacy #xau-idr-gr {
  filter: blur(6px);
  user-select: none;
  transition: filter 0.3s ease;
}

/* ==========================================================================
   🌟 SPLASH SCREEN V8
   ========================================================================== */
#splash-screen {
  position: fixed; inset: 0; background: #050505; z-index: 999999;
  display: flex; align-items: center; justify-content: center;
}

#splash-screen.splash-exit {
  animation: splashSlideUpOut 0.8s cubic-bezier(0.8, 0, 0.2, 1) forwards;
}

@keyframes splashSlideUpOut {
  to { transform: translateY(-100%); opacity: 0; visibility: hidden; }
}

.splash-content {
  display: flex; flex-direction: column; align-items: center;
}

.splash-logo-minimal {
  width: 90px; height: 90px; border-radius: 24px;
  border: 2px solid var(--gold); padding: 4px;
  opacity: 0; transform: translateY(20px);
  animation: fadeUpItem 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.1s;
}

.splash-text-group {
  margin-top: 24px; text-align: center;
  opacity: 0; transform: translateY(20px);
  animation: fadeUpItem 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
}

.splash-title-minimal {
  font-size: 36px; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif;
  letter-spacing: 6px; margin-bottom: 8px;
}

.splash-subtitle-minimal {
  font-size: 14px; font-weight: 700; color: var(--gold); letter-spacing: 8px;
  text-transform: uppercase;
}

.splash-line-loader {
  width: 0%; height: 2px; background: var(--gold);
  margin-top: 32px; border-radius: 2px;
  animation: expandLine 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards 0.3s;
}

@keyframes fadeUpItem {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes expandLine {
  0% { width: 0%; opacity: 0; }
  10% { opacity: 1; }
  100% { width: 150px; opacity: 0; }
}
</style>

<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<!-- Library QRIS & SweetAlert2 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js"></script>

<script>
  // FIX GLOBAL: Mencegah semua pop-up merusak scale/ngedet
  const OriginalSwal = window.Swal;
  window.Swal = OriginalSwal.mixin({
    heightAuto: false
  });

  window.addEventListener('DOMContentLoaded', function() {
    // --- FIX SPLASH SCREEN (DIBUAT AGAK LAMA DAN SMOOTH) ---
    setTimeout(function() {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.classList.add('splash-exit');
        setTimeout(() => { splash.style.display = 'none'; }, 800); // 800ms tunggu animasi kelar
      }
    }, 2500); // Waktu tampil 2.5 detik
    // Skrip Zoom checker yang menyebabkan auto-scale/menciut telah dihapus.
  });
</script>
</head>
<body>

<div id="splash-screen">
  <div class="splash-content">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo" class="splash-logo-minimal">
    <div class="splash-text-group">
      <div class="splash-title-minimal">RHN CAPITAL</div>
      <div class="splash-subtitle-minimal">ARUS KEUANGAN</div>
    </div>
    <div class="splash-line-loader"></div>
  </div>
</div>

<div id="offline-banner" style="display:none; background:#F87171; color:#000; text-align:center; padding:10px; font-size:12px; font-weight:800; position:fixed; top:0; left:0; width:100%; z-index:100000; text-transform:uppercase; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
  ⚠️ Koneksi Terputus - Mode Offline Aktif
</div>

<div id="auth-screen">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title">RHN CAPITAL</div>
    <div class="auth-sub">Arus Keuangan Akses Masuk</div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    <div id="auth-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    
    <div class="form-row" id="field-nama" style="display:none"><input type="text" id="auth-nama" class="f-input-dark" placeholder="Nama Lengkap" onkeydown="if(event.key==='Enter')doAuth()"></div>
    <div class="form-row"><input type="email" id="auth-email" class="f-input-dark" placeholder="Email"></div>
    <div class="form-row"><input type="password" id="auth-pass" class="f-input-dark" placeholder="Sandi" onkeydown="if(event.key==='Enter')doAuth()"></div>
    <div class="form-row" id="field-confirm" style="display:none"><input type="password" id="auth-pass2" class="f-input-dark" placeholder="Ulangi Sandi"></div>
    
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
    
    <button class="auth-btn btn-google" id="btn-google" onclick="doGoogleAuth()">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
      MASUK DENGAN GOOGLE
    </button>

    <button style="background:transparent; border:none; color:var(--text3); font-size:10px; margin-top:16px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline; width:100%;" onclick="doResetPassword()" id="btn-forgot">Lupa Sandi?</button>
    <div style="font-size: 10px; color: var(--gold); margin-top: 6px; text-align: center;">Cek folder SPAM jika email reset tidak masuk</div>
  </div>
</div>

<div id="pin-screen" onclick="document.getElementById('app-pin').focus()" ontouchstart="document.getElementById('app-pin').focus()" style="display:none; position: fixed; inset: 0; background: var(--bg); align-items: center; justify-content: center; z-index: 9999;">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title" id="pin-title">Masukkan PIN</div>
    <div class="auth-sub" id="pin-sub">Masukkan 6 digit PIN keamanan</div>
    <div id="pin-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    <div class="form-row">
       <input type="password" id="app-pin" class="f-input-dark" style="text-align:center; letter-spacing: 12px; font-size: 24px; padding: 12px;" inputmode="numeric" maxlength="6" placeholder="••••••" autofocus>
    </div>
    <button class="auth-btn" id="pin-submit-btn" onclick="verifyPin()" style="display:none;">BUKA APLIKASI</button>
    
    <div style="display: flex; justify-content: space-between; gap: 16px; margin-top: 24px;">
      <button style="background:transparent; border:none; color:var(--text3); font-size:10px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline;" onclick="event.stopPropagation(); resetAccount()">Ganti Akun</button>
      <button style="background:transparent; border:none; color:var(--text3); font-size:10px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline;" onclick="event.stopPropagation(); resetPinFromLogin()">Reset PIN</button>
    </div>
  </div>
</div>

<div id="app-screen" style="display:none;">
<div class="header-area">
  
  <div class="logo-row">
    <div class="logo-img"><img src="RHN LOGO.jpg" alt="Logo"></div>
    <div class="logo-text">
      <div class="main-text">RHN CAPITAL</div>
      <div class="sub-text">ARUS KEUANGAN</div>
    </div>
  </div>

  <div class="top-ext-links">
    <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 HALAMAN RHN CAPITAL ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='galeri.html'">📈 GALERI ONLINE ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='jurnal.html'">📈 JURNAL FOREX ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='aset.html'">📈 JURNAL ASET ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='data.html'">📈 DATA PRIBADI ↗</button>
  </div>
  
  <div class="status-row">
    <div class="status-pill usd-status-pill" style="padding: 6px 4px;">
      <span class="usd-val" id="usd-rate-val" style="font-size: 9px;">...</span>
    </div>
    
    <div class="status-pill" style="padding: 6px 4px; flex-direction: column; justify-content: center; gap: 2px; font-size: 8px; font-weight: 800; color: var(--gold);">
      <span style="line-height: 1; white-space: nowrap;">XAU <span id="xau-rate-val" style="color: var(--text); font-family: 'JetBrains Mono', monospace; margin-left: 2px;">...</span></span>
      <span id="xau-idr-oz" style="display: none;"></span>
      <span style="line-height: 1; white-space: nowrap;">GRAM <span id="xau-idr-gr" style="color: var(--text); font-family: 'JetBrains Mono', monospace; margin-left: 2px;">...</span></span>
    </div>

    <div class="status-pill" style="padding: 6px 4px; gap: 4px;">
      <span class="sync-dot" id="sync-dot" style="background:var(--text3); width: 6px; height: 6px;"></span>
      <span class="sync-text" id="sync-label" style="font-size: 8px; letter-spacing: 0.5px;">MENGHUBUNGKAN...</span>
    </div>
  </div>

  <div class="user-row">
    <button class="theme-btn" onclick="toggleTheme()" id="theme-toggle">🌙</button>
    <div class="user-pill">
      <div class="user-pill-left">
        <div class="u-avatar" id="user-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div class="u-name">
          <span id="user-name">Memuat...</span>
          <span id="user-transfer-info" style="font-size: 8px; font-weight: 800; color: var(--bg); background: var(--gold); padding: 2px 4px; border-radius: 4px; margin-left: 4px; flex-shrink: 0; display: none; letter-spacing: 0.5px;">Memuat...</span>
        </div>
      </div>
      <div class="user-action-wrap">
        <button class="setting-btn" onclick="switchPage('pengaturan')" title="Pengaturan">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
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
  <button class="nav-btn" id="nav-admin" onclick="switchPage('admin')" style="display:none; color: var(--gold);">👑 ADMIN</button>
</div>

<div class="main">

<div id="page-dashboard" class="page active">
  <div class="metrics" id="metric-cards"></div>
  <div id="wallet-balances" class="wallet-scroll"></div>
  
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div class="card-title" style="margin:0; font-size:14px;">🎯 Target Tabungan</div>
      <button onclick="addSavingsGoal()" style="background:transparent; border:1px solid var(--gold); color:var(--gold); border-radius:8px; padding:4px 12px; font-size:10px; font-weight:800; cursor:pointer;">+ BUAT TARGET</button>
  </div>
  <div id="savings-goals-container" style="display:flex; flex-wrap:wrap; gap:12px; margin-bottom:24px;"></div>

  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div class="card-title">Tambah Transaksi</div>
        <div class="card-sub">Catat pemasukan atau pengeluaran baru</div>
      </div>
      <div class="type-toggle" style="flex-wrap: wrap; gap: 8px;">
        <button class="t-btn income active" id="btn-inc" onclick="selType('income')" style="flex-basis: 31%;">+ Pemasukan</button>
        <button class="t-btn expense" id="btn-exp" onclick="selType('expense')" style="flex-basis: 31%;"> - Pengeluaran</button>
        <button class="t-btn transfer" id="btn-transfer" onclick="selType('transfer')" style="flex-basis: 31%;">🔄 Transfer</button>
        <button class="t-btn debt" id="btn-debt" onclick="selType('debt')" style="flex-basis: 48%;">💳 Hutang</button>
        <button class="t-btn recv" id="btn-recv" onclick="selType('recv')" style="flex-basis: 48%;">💸 Piutang</button>
      </div>
      
      <div class="form-row">
        <label class="form-label">JUMLAH (RP)</label>
        <input type="text" inputmode="numeric" id="f-amount" class="f-input-dark" placeholder="0" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');">
      </div>
      
      <div class="form-row" id="row-cat">
        <label class="form-label">KATEGORI</label>
        <select id="f-cat" class="f-input-dark"></select>
      </div>
      
      <div class="form-row">
        <label class="form-label" id="label-wallet">SUMBER DANA / DOMPET</label>
        <select id="f-wallet" class="f-input-dark">
          <option value="Kas Tunai">Kas Tunai</option>
          <option value="DANA">DANA</option>
          <option value="GoPay">GoPay</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="MT5 Trading">Saldo MT5 Trading</option>
          <option value="Bank">Bank</option>
          <option value="Hutang">Hutang (Tarik/Bayar)</option>
          <option value="Piutang">Piutang (Beri/Tarik)</option>
        </select>
      </div>
      
      <div class="form-row" id="row-wallet-to" style="display:none;">
        <label class="form-label">TUJUAN DANA / DOMPET</label>
        <select id="f-wallet-to" class="f-input-dark">
          <option value="Kas Tunai">Kas Tunai</option>
          <option value="DANA">DANA</option>
          <option value="GoPay">GoPay</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="MT5 Trading">Saldo MT5 Trading</option>
          <option value="Bank">Bank</option>
          <option value="Hutang">Hutang (Tarik/Bayar)</option>
          <option value="Piutang">Piutang (Beri/Tarik)</option>
        </select>
      </div>
      
      <div class="form-row">
        <label class="form-label">KETERANGAN</label>
        <textarea id="f-note" class="f-input-dark" placeholder="Catatan transaksi..."></textarea>
      </div>

      <div class="form-row" id="row-recurring">
        <label class="form-label">JADIKAN TRANSAKSI RUTIN?</label>
        <select id="f-recurring" class="f-input-dark" onchange="window.toggleRecTime()">
            <option value="">Tidak / Sekali Saja</option>
            <option value="daily">Rutin Tiap Hari</option>
            <option value="weekly">Rutin Tiap Minggu</option>
            <option value="monthly">Rutin Tiap Bulan</option>
        </select>
      </div>
      
      <div class="form-row" id="row-recurring-time" style="display:none;">
        <label class="form-label">JAM EKSEKUSI RUTIN</label>
        <input type="time" id="f-recurring-time" class="f-input-dark" value="09:00">
      </div>
      
      <div class="form-row">
        <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>WAKTU</span>
          <button type="button" onclick="setRealLocalTime()" style="background:transparent; border:none; color:var(--gold); font-size:10px; font-weight:800; font-family:'Outfit', sans-serif; cursor:pointer;">SEKARANG ⏱</button>
        </label>
        <input type="datetime-local" id="f-date" class="f-input-dark">
      </div>
      
      <button class="submit-btn" id="cancel-edit-btn" onclick="cancelEdit()" style="display:none; background:var(--bg3); color:var(--text); margin-bottom:8px;">BATAL EDIT</button>
      <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
    </div>
    
    <div class="card">
      <div class="card-head"><div class="card-title">Aktivitas Terakhir</div></div>
      <div id="recent-list" class="list-wrap"></div>
    </div>
  </div>
</div>

<div id="page-harian" class="page">
  <div class="sum-grid" id="daily-sum"></div>
  <div class="card">
    <div class="card-head">
      <div class="card-title">Laporan Harian</div>
      <div style="margin-top:12px;">
         <input type="date" id="pick-daily" onchange="renderDaily()" class="f-input-dark">
      </div>
    </div>
    <div class="list-wrap" id="daily-body"></div>
  </div>
</div>

<div id="page-mingguan" class="page">
  <div class="period-bar" id="week-sel"></div>
  <div class="sum-grid" id="week-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Mingguan</div></div>
    <div class="filter-bar">
      <div class="export-row">
        <button class="export-btn" onclick="exportPDF()">UNDUH PDF MINGGUAN 📄</button>
        <button class="export-btn" onclick="exportExcel()" style="background:var(--green2); color:#fff;">UNDUH EXCEL MINGGUAN 📊</button>
      </div>
    </div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartWeek"></canvas></div>
    </div>
    <div class="list-wrap" id="week-body"></div>
  </div>
</div>

<div id="page-bulanan" class="page">
  <div class="period-bar" id="month-sel"></div>
  <div class="sum-grid" id="month-sum"></div>
  <div class="card" style="padding-bottom:16px;">
    <div class="card-head"><div class="card-title">Laporan Bulanan</div></div>
    <div class="filter-bar">
      <div class="export-row">
        <button class="export-btn" onclick="exportPDF()">UNDUH PDF BULANAN 📄</button>
        <button class="export-btn" onclick="exportExcel()" style="background:var(--green2); color:#fff;">UNDUH EXCEL BULANAN 📊</button>
      </div>
    </div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartMonth"></canvas></div>
    </div>
    
    <div id="budget-progress-container"></div>

    <div class="list-wrap" id="month-body" style="margin-top:24px;"></div>
  </div>
</div>

<div id="page-tahunan" class="page">
  <div class="period-bar" id="year-sel"></div>
  <div class="sum-grid" id="year-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Tahunan</div></div>
    <div class="filter-bar">
      <div class="export-row">
        <button class="export-btn" onclick="exportPDF()">UNDUH PDF MINGGUAN 📄</button>
        <button class="export-btn" onclick="exportExcel()" style="background:var(--green2); color:#fff;">UNDUH EXCEL MINGGUAN 📊</button>
      </div>
    </div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartYear"></canvas></div>
    </div>
    <div class="list-wrap" id="year-body"></div>
  </div>
</div>

<div id="page-riwayat" class="page">
  <div class="sum-grid" id="all-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Semua Riwayat</div></div>
    <div class="filter-bar">
      <select id="flt-type" class="f-input-dark" onchange="renderAll()">
        <option value="">Semua Filter</option>
        <option value="income">Pemasukan Saja</option>
        <option value="expense">Pengeluaran Saja</option>
      </select>
      <input type="text" id="flt-search" class="f-input-dark" placeholder="Cari berdasarkan keterangan atau kategori..." oninput="debouncedRenderAll()">
      <div class="export-row">
        <button class="export-btn" onclick="exportPDF()">UNDUH PDF MINGGUAN 📄</button>
        <button class="export-btn" onclick="exportExcel()" style="background:var(--green2); color:#fff;">UNDUH EXCEL MINGGUAN 📊</button>
      </div>
      <button class="export-btn" onclick="window.promptTransferAll()" style="background:var(--blue); color:#fff; margin-left:8px;">TRANSFER SEMUA 🚀</button>
      
      <button class="export-btn" id="btn-batch-del" onclick="execBatchDelete()" style="display:none; background:var(--red2); color:#fff; margin-left:8px;">🗑️ HAPUS TERPILIH</button>
      <button class="export-btn" onclick="toggleBatchMode()" style="background:var(--bg3); color:var(--text); margin-left:8px;">PILIH BANYAK ☑</button>
    </div>
    <div class="period-bar" id="riwayat-year-sel"></div>
    <div class="chart-wrap" style="margin-top: 16px;">
      <div class="chart-legend" id="riwayat-legend" style="flex-wrap: wrap;"></div>
      <div style="height:250px"><canvas id="chartRiwayat"></canvas></div>
      <div class="cat-chip-wrap" id="riwayat-cat-chips"></div>
    </div>
    <div class="list-wrap" id="all-body"></div>
  </div>
</div>

<div id="page-admin" class="page">
  <div class="card">
    <div class="card-head">
      <div class="card-title" style="color: var(--gold);">👑 Informasi Seluruh User (Admin Only)</div>
      <div class="card-sub">Memantau data setiap pengguna di database secara terpisah per akun.</div>
    </div>
    <div class="filter-bar">
      <button class="export-btn" onclick="loadAllUsersData()" style="background:var(--gold); color:#000;">🔄 MUAT DATA SEMUA USER</button>
      <button class="export-btn" onclick="showGlobalTrash()" style="background:var(--red2); color:#fff; margin-left:8px;">🗑️ SAMPAH SEMUA USER</button>
      <button class="export-btn" onclick="showAdminArchive()" style="background:var(--blue); color:#fff; margin-left:8px;">🗄️ ARSIP TERHAPUS</button>
    </div>
    <div id="admin-summary" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px; margin-bottom:24px;"></div>

    <div id="admin-detail-section" class="card" style="display:none; margin-bottom:24px; border-color: var(--gold); background: var(--bg2);">
      <div class="card-head" style="position:relative; display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:10px; text-align:center; padding-right:90px;">
        <div style="width:100%;">
          <div class="card-title" id="admin-detail-title" style="color: var(--gold); text-align:center;">Detail Transaksi</div>
          <div class="card-sub" id="admin-detail-sub" style="text-align:center;">-</div>
        </div>
        <button class="edit-btn-recent" onclick="closeAdminDetail()" style="position:absolute; top:0; right:0; border-color:var(--red2); color:var(--red2); background:rgba(248,113,113,0.1);">✕ TUTUP</button>
      </div>
      <div id="admin-detail-chart-wrap" style="display:none;">
        <div class="period-bar" id="admin-year-sel" style="display:none;"></div>
        <div class="period-bar" id="admin-month-sel" style="display:none;"></div>
        <div class="period-bar" id="admin-week-sel" style="display:none;"></div>
        <div class="period-bar" id="admin-riwayat-year-sel" style="display:none;"></div>
        <div class="sum-grid" id="admin-detail-sum" style="display:none; grid-template-columns:repeat(3,1fr); margin-bottom:16px;"></div>
        <div class="chart-legend" id="admin-detail-chart-legend"></div>
        <div style="height:250px; margin-bottom:8px;"><canvas id="admin-user-chart"></canvas></div>
      </div>
      <div class="card-title" style="font-size:12px; margin:16px 0 4px; color:var(--text3);">🧾 Riwayat Transaksi Periode Ini</div>
      <div class="list-wrap" id="admin-detail-list"></div>
    </div>
  </div>

  <div class="card">
    <div class="card-head">
      <div class="card-title" style="color: var(--gold);">💬 Customer Service — Chat Masuk</div>
      <div class="card-sub">Percakapan bantuan dari seluruh user terdaftar.</div>
    </div>
    <div id="admin-cs-list"><div style="padding:24px; text-align:center; color:var(--text3); font-size:11px;">Memuat daftar chat...</div></div>
  </div>
</div>

<div id="page-wallet" class="page">
  <div id="saldo-wallet-card-wrap"></div>
  <div style="font-size: 11px; color: var(--text3); margin: -8px 0 20px;">Kirim saldo langsung dari salah satu dompetmu ke dompet user lain memakai Kode Transfer 3 Angka. Saldo otomatis berkurang di akunmu dan langsung bertambah di akun tujuan, seperti dompet digital pada umumnya.</div>

  <button class="export-btn" onclick="window.openWalletHistoryScreen()" style="width:100%; background:var(--blue); color:#fff; margin-bottom:20px; padding:14px; font-size:12px;">📜 RIWAYAT TRANSAKSI WALLET</button>

  <div class="set-group">
    <div class="set-title">↓ PERMINTAAN SALDO MASUK (UNTUK DISETUJUI)</div>
    <div id="wallet-pending-requests"><div style="padding:16px; text-align:center; color:var(--text3); font-size:11px;">Tidak ada permintaan saldo masuk.</div></div>
  </div>

  <div class="set-group">
    <div class="set-title">↑ PERMINTAAN SALDO YANG KAMU KIRIM</div>
    <div id="wallet-sent-requests"><div style="padding:16px; text-align:center; color:var(--text3); font-size:11px;">Belum ada permintaan saldo yang kamu buat.</div></div>
  </div>

  <div class="set-group" style="padding: 0; overflow: hidden; border-color: var(--border2);">
    <div class="set-title" style="padding: 16px 16px 8px 16px; margin: 0; border-bottom: none; font-size: 13px;">
      ⬅️ Kalkulator Mata Uang Online (Konversi Dolar) <span style="margin-left: 6px; font-size: 9px; background: var(--green2); color: #000; padding: 2px 6px; border-radius: 4px; font-weight: 800;">LIVE REALTIME Ticker</span>
    </div>
    <div id="calc-display" style="display: flex; flex-direction: column; padding: 0 8px;"></div>
    <div style="font-size: 9px; color: var(--text3); text-align: center; padding: 4px 0 8px 0;">
      Diperbarui pada <span id="calc-last-update">...</span>
    </div>

    <div class="calc-keypad-wrap">
      <div class="calc-keypad">
        <button class="calc-btn" onclick="calcPress('7')">7</button>
        <button class="calc-btn" onclick="calcPress('8')">8</button>
        <button class="calc-btn" onclick="calcPress('9')">9</button>
        <button class="calc-btn calc-btn-ac" onclick="calcPress('AC')">AC</button>
        
        <button class="calc-btn" onclick="calcPress('4')">4</button>
        <button class="calc-btn" onclick="calcPress('5')">5</button>
        <button class="calc-btn" onclick="calcPress('6')">6</button>
        
        <button class="calc-btn" onclick="calcPress('1')">1</button>
        <button class="calc-btn" onclick="calcPress('2')">2</button>
        <button class="calc-btn" onclick="calcPress('3')">3</button>
        <button class="calc-btn calc-btn-del" onclick="calcPress('DEL')">⌫</button>
        
        <button class="calc-btn" onclick="calcPress('00')">00</button>
        <button class="calc-btn" onclick="calcPress('0')">0</button>
        <button class="calc-btn" onclick="calcPress('.')">,</button>
      </div>
    </div>
  </div>

  <div class="set-group" id="qris-generator-group">
    <div class="set-title" onclick="window.promptInputQris()" style="cursor: default;" title="Ketuk untuk mengatur Data QRIS (Rahasia)">💳 GENERATOR QRIS — ISI SALDO DOMPET</div>

    <div style="font-size: 11px; color: var(--text3); margin-bottom: 16px;">Masukkan nominal untuk membuat QR Code pembayaran / isi saldo dompet.</div>
    
    <div class="form-row">
      <label class="form-label">Nominal Tagihan (Rp)</label>
      <input type="text" inputmode="numeric" id="qris-nominal" class="f-input-dark" placeholder="Contoh: 150.000" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');">
    </div>
    
    <div class="form-row">
      <label class="form-label">Tipe Pencatatan</label>
      <select id="qris-tipe" class="f-input-dark">
        <option value="income">Pemasukan (Penjualan / Gaji dll)</option>
        <option value="transfer">Transfer (Titip Saldo via QRIS)</option>
      </select>
    </div>
    
    <div class="form-row">
      <label class="form-label">Dompet Tujuan (QRIS Cair Ke Mana?)</label>
      <select id="qris-wallet" class="f-input-dark">
        <option value="GoPay">GoPay</option>
        <option value="DANA">DANA</option>
        <option value="ShopeePay">ShopeePay</option>
        <option value="Bank">Bank</option>
      </select>
    </div>
    
    <div class="form-row">
      <label class="form-label">Keterangan</label>
      <input type="text" id="qris-note" class="f-input-dark" placeholder="Contoh: Bayar jajan / TF dari Budi">
    </div>
    
    <div class="form-row">
      <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
        <span>WAKTU TRANSAKSI</span>
        <button type="button" onclick="document.getElementById('qris-date').value = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)" style="background:transparent; border:none; color:var(--gold); font-size:10px; font-weight:800; font-family:'Outfit', sans-serif; cursor:pointer;">SEKARANG ⏱</button>
      </label>
      <input type="datetime-local" id="qris-date" class="f-input-dark">
    </div>
    
    <button class="set-action" style="width: 100%; margin-bottom: 16px; background: var(--blue); color: #fff; border: none; padding: 12px; border-radius: 12px;" onclick="window.generateQris()">BUAT QRIS DINAMIS</button>
    
    <!-- FIX: BINTIK-BINTIK PUTIH DIHAPUS, DIGANTI BACKGROUND PUTIH POLOS -->
    <div id="qris-qrcode-container" style="display: none; flex-direction: column; align-items: center; background: #ffffff; color: #000000; border-radius: 24px; padding: 24px 20px 0px 20px; margin-bottom: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); position: relative; overflow: hidden; width: 100%; max-width: 380px; margin-left: auto; margin-right: auto; box-sizing: border-box; border: 1px solid #e2e8f0;">
      
      <div style="position: absolute; left: 0; top: 22%; width: 0; height: 0; border-top: 45px transparent solid; border-bottom: 45px transparent solid; border-left: 24px solid #d91b29; z-index: 2;"></div>
      
      <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; margin-bottom: 20px; padding: 0 4px; z-index: 3;">
        <div style="display: flex; align-items: flex-start; gap: 4px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" alt="QRIS" style="height: 24px;">
          <svg width="52" height="24" viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="16" r="14" fill="#f9a51a"/>
            <circle cx="26" cy="16" r="14" fill="#e6222a" opacity="0.85"/>
            <path d="M28 11 L48 12 L40 21 Z" fill="#d91b29"/>
            <text x="2" y="30" font-family="'Outfit', sans-serif" font-size="12" font-weight="900" fill="#0c2340" letter-spacing="0.5">GPN</text>
          </svg>
        </div>
      </div>

      <div style="text-align: center; margin-bottom: 14px; width: 100%; z-index: 3; color: #000000;">
        <div style="font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.3px; margin-bottom: 2px; color: #000000;">RHN CAPITAL FINANCE</div>
        <div style="font-size: 11px; font-weight: 600; color: #334155; margin-bottom: 2px; letter-spacing: 0.2px;">NMID: ID1026489225353</div>
        <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">A01</div>
      </div>

      <div style="background: #ffffff; padding: 12px; border-radius: 16px; border: 1px solid #e2e8f0; display: inline-flex; justify-content: center; align-items: center; margin-bottom: 16px; z-index: 3; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <div id="qris-qrcode" style="padding: 2px; background: #ffffff;"></div>
      </div>

      <div style="text-align: center; margin-bottom: 20px; width: 100%; z-index: 3;">
        <div style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.4px; margin-bottom: 1px;">SATU QRIS untuk semua</div>
        <div style="font-size: 8.5px; font-weight: 600; color: #64748B;">Cek aplikasi penyelenggara di: <span style="color: #0f172a; font-weight: 700;">www.aspi-qris.id</span></div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; width: 120%; margin-left: -10%; margin-right: -10%; background: transparent; position: relative; z-index: 3; padding-left: 10%; box-sizing: border-box;">
        
        <div style="text-align: left; padding-bottom: 10px; color: #475569; font-size: 9px; font-weight: 700; line-height: 1.4; font-family: 'Outfit', sans-serif;">
          <div>Dicetak oleh: 93600914</div>
          <div id="qris-print-version" style="color: #000; font-weight: 800; font-size: 10px; margin-top: 2px;">Waktu Cetak: -</div>
        </div>

        <div style="background: #d91b29; color: #ffffff; padding: 5px 20px 8px 30px; width: 60%; clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%); display: flex; flex-direction: column; align-items: flex-end; box-sizing: border-box;">
          <div style="font-size: 7.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 0.2px; width: 100%; text-align: right; padding-right: 4px;">Cara pembayaran QRIS</div>
          <div style="display: flex; justify-content: flex-end; gap: 8px; align-items: center; width: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#d91b29" stroke-width="3"><rect x="5" y="2" width="14" height="20" rx="2"></rect><circle cx="12" cy="18" r="1"></circle></svg>
              </div>
              <span style="font-size: 5px; font-weight: 800; white-space: nowrap;">Buka Aplikasi</span>
              <span style="font-size: 4.5px; font-weight: 500; white-space: nowrap; margin-top: -2px; opacity: 0.85;">Berlogo QRIS</span>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#d91b29" stroke-width="3"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
              <span style="font-size: 5px; font-weight: 800; white-space: nowrap;">Scan dan cek</span>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#d91b29" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style="font-size: 5px; font-weight: 800; white-space: nowrap;">Bayar</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    <button id="btn-qris-konfirmasi" class="set-action" style="width: 100%; display: none; background: var(--green2); color: #000; border: none; padding: 12px; border-radius: 12px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);" onclick="window.konfirmasiPembayaranQris()">✅ KONFIRMASI SUDAH BAYAR</button>
  </div>

  <div class="set-group">
    <div class="set-title">💬 BANTUAN & CUSTOMER SERVICE</div>
    <div class="set-item">
      <div>
        <div class="set-label">Chat Langsung ke Admin</div>
        <div class="set-sub">Ada masalah saldo/transfer/QRIS? Chat langsung ke admin di sini</div>
      </div>
      <button class="set-action" style="background:var(--gold); color:#000; border:none;" onclick="window.openCSChat()">💬 CHAT ADMIN</button>
    </div>
  </div>
</div>

<div id="page-pengaturan" class="page">
  <div class="set-group">
    <div class="set-title">💳 DOMPET SAYA</div>
    <div class="set-item">
      <div>
        <div class="set-label">Buka Dompet Digital</div>
        <div class="set-sub">Kirim/minta saldo, isi saldo via QRIS, konversi dolar, dan chat customer service</div>
      </div>
      <button class="set-action" style="background:var(--gold); color:#000; border:none;" onclick="switchPage('wallet')">💳 BUKA DOMPET</button>
    </div>
  </div>
  <div class="set-group">
    <div class="set-title">🗂️ KUSTOMISASI KATEGORI</div>
    <div class="set-item">
      <div>
        <div class="set-label">Atur Kategori Transaksi</div>
        <div class="set-sub">Tambah atau hapus kategori bawaan sesuai kebutuhan</div>
      </div>
      <button class="set-action" onclick="manageCategories()">ATUR KATEGORI</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">📊 ANGGARAN BULANAN (BUDGETING)</div>
    <div class="set-item">
        <div>
            <div class="set-label">Target Pengeluaran</div>
            <div class="set-sub">Atur batas maksimal pengeluaran per kategori</div>
        </div>
        <button class="set-action" onclick="showBudgetSetup()">ATUR BUDGET</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">⏱️ MANAJEMEN TRANSAKSI RUTIN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Atur Jadwal Otomatis</div>
        <div class="set-sub">Lihat dan matikan transaksi yang berulang otomatis</div>
      </div>
      <button class="set-action" style="background:var(--blue); color:#fff; border:none;" onclick="manageRecurring()">LIHAT JADWAL</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">🗑️ TEMPAT SAMPAH & RECOVERY</div>
    <div class="set-item">
        <div>
            <div class="set-label">Folder Sampah (Recycle Bin)</div>
            <div class="set-sub">Pulihkan atau hapus permanen data yang terhapus</div>
        </div>
        <button class="set-action" onclick="showRecycleBin()">BUKA SAMPAH</button>
    </div>
  </div>
  
  <div class="set-group" id="admin-settings-group" style="display:none; border-color: var(--gold);">
    <div class="set-title" style="color: var(--gold);">👑 KONTROL ADMIN — SEMUA AKUN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Lihat Semua Akun &amp; Isi Dompet</div>
        <div class="set-sub">Pantau akun, transaksi, dan saldo dompet setiap user terdaftar</div>
      </div>
      <button class="set-action" style="background:var(--gold); color:#000; border:none;" onclick="switchPage('admin')">BUKA PANEL</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Sampah Semua User</div>
        <div class="set-sub">Lihat, pulihkan, atau hapus permanen sampah milik seluruh user</div>
      </div>
      <button class="set-action" style="background:var(--red2); color:#fff; border:none;" onclick="showGlobalTrash()">BUKA SAMPAH</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Arsip Terhapus Permanen</div>
        <div class="set-sub">Data yang sudah dimusnahkan dari sampah tetap tersimpan di sini &amp; masih bisa dipulihkan ke user</div>
      </div>
      <button class="set-action" style="background:var(--blue); color:#fff; border:none;" onclick="showAdminArchive()">BUKA ARSIP</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">🔒 KEAMANAN AKUN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Reset Kata Sandi</div>
        <div class="set-sub">Kirim link reset ke email kamu</div>
      </div>
      <button class="set-action" onclick="reqResetPasswordViaSettings()">KIRIM LINK</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Ubah PIN Keamanan</div>
        <div class="set-sub">Ganti 6 digit PIN tanpa perlu keluar (logout)</div>
      </div>
      <button class="set-action" onclick="changePinInApp()">GANTI PIN</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">⚡ PREFERENSI BAWAAN FORM</div>
    <div style="font-size: 11px; color: var(--text3); margin-bottom: 16px;">Pengaturan ini otomatis terpilih di formulir tambah transaksi setiap aplikasi dibuka.</div>
    <div class="set-item">
      <div><div class="set-label">Tipe Transaksi</div></div>
      <select id="pref-type" class="set-select" onchange="updatePrefCategories()">
        <option value="expense">Pengeluaran</option>
        <option value="income">Pemasukan</option>
      </select>
    </div>
    <div class="set-item">
      <div><div class="set-label">Kategori Rutin</div></div>
      <select id="pref-cat" class="set-select"></select>
    </div>
    <div class="set-item">
      <div><div class="set-label">Dompet Utama</div></div>
      <select id="pref-wallet" class="set-select">
        <option value="Kas Tunai">Kas Tunai</option>
        <option value="DANA">DANA</option>
        <option value="GoPay">GoPay</option>
        <option value="ShopeePay">ShopeePay</option>
        <option value="MT5 Trading">Saldo MT5 Trading</option>
        <option value="Bank">Bank</option>
      </select>
    </div>
    <div class="set-item" style="justify-content: flex-end; padding-top: 16px;">
      <button class="set-action" style="background:var(--gold); color:#000; border:none;" onclick="savePreferences()">SIMPAN PREFERENSI</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">⚙️ 7 FITUR FINANSIAL & SISTEM TAMBAHAN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Kunci Otomatis (Auto-Lock)</div>
        <div class="set-sub">Kunci otomatis jika didiamkan 30 detik</div>
      </div>
      <select id="ext_autolock" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Tidak Aktif</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">1. Sembunyikan Dompet Bersaldo Nol</div>
        <div class="set-sub">Hilangkan dompet dari layar jika uangnya kosong</div>
      </div>
      <select id="ext_hidezero" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">2. Tampilkan Persentase Aset (%)</div>
        <div class="set-sub">Tampilkan porsi persentase saldo di tiap dompet</div>
      </div>
      <select id="ext_walletpct" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">3. Format Angka Ringkas (Dashboard)</div>
        <div class="set-sub">Ubah format panjang Rp 1.500.000 menjadi 1,5 Jt</div>
      </div>
      <select id="ext_shortnum" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">4. Peringatan Saldo Kritis</div>
        <div class="set-sub">Efek merah menyala bila saldo keseluruhan turun di bawah 50rb</div>
      </div>
      <select id="ext_warnbalance" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">5. Mode Hemat Harian (Budget Alert)</div>
        <div class="set-sub">Indikator merah jika pengeluaran harian melebihi Rp 100.000</div>
      </div>
      <select id="ext_budget" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">6. Sorotan Label Hutang & Piutang</div>
        <div class="set-sub">Tampilkan label "Belum Lunas" secara tegas di riwayat</div>
      </div>
      <select id="ext_debtbadge" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">7. Anti Intip Saldo</div>
        <div class="set-sub">Sembunyikan/blur nominal saldo di seluruh aplikasi</div>
      </div>
      <select id="ext_antiintip" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
  </div>
  
  <div class="set-group">
    <div class="set-title">🛡️ BACKUP & PEMULIHAN DATA</div>
    <div class="set-item">
      <div>
        <div class="set-label">Backup Otomatis Harian</div>
        <div class="set-sub">Data disimpan otomatis ke cloud setiap hari sekali</div>
      </div>
      <select id="ext_autobackup" class="set-select" onchange="saveExtraPrefs()">
        <option value="on">Aktif</option>
        <option value="off">Tidak Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Status Backup</div>
        <div class="set-sub" id="last-backup-info">Belum Ada Backup</div>
      </div>
      <button class="set-action" style="background:var(--green2); color:#000; border:none;" onclick="performCloudBackup(false)">BACKUP SEKARANG</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Unduh File Backup (.json)</div>
        <div class="set-sub">Simpan salinan seluruh data ke perangkat, instan</div>
      </div>
      <button class="set-action" onclick="downloadBackupFile()">UNDUH FILE</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Pulihkan dari File Backup</div>
        <div class="set-sub">Impor kembali data dari file .json backup</div>
      </div>
      <input type="file" id="restore-file-input" accept="application/json,.json" style="display:none;" onchange="restoreBackupFile(event)">
      <button class="set-action" style="background:var(--blue); color:#fff; border:none;" onclick="triggerRestoreFile()">PULIHKAN</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">💾 MANAJEMEN DATA</div>
    <div class="set-item">
      <div>
        <div class="set-label">Unduh Laporan CSV</div>
        <div class="set-sub">Ekspor semua riwayat transaksi untuk di Excel</div>
      </div>
      <button class="set-action" onclick="exportCSV()">UNDUH DATA</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Hapus Semua Riwayat</div>
        <div class="set-sub">Peringatan: Format ulang seluruh database akun ini</div>
      </div>
      <button class="set-action danger" onclick="deleteAllData()">FORMAT DATA</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">ℹ️ DETAIL APLIKASI</div>
    <div class="set-item">
      <div>
        <div class="set-label">Versi Sistem</div>
        <div class="set-sub">RHN Capital OS v4.7 (Transfer Perantara)</div>
      </div>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Hapus Cache Lokal</div>
        <div class="set-sub">Perbaiki jika aplikasi terasa berat</div>
      </div>
      <button class="set-action danger" onclick="clearLocalCache()">BERSIHKAN</button>
    </div>
  </div>

</div>

<div style="text-align: center; padding: 24px; font-size: 10px; color: var(--text3); margin-top: 32px; border-top: 1px dashed var(--border2); line-height: 1.6;">
    &copy; 2026 RHN CAPITAL. Hak Cipta Dilindungi.<br>
    Platform Arus Keuangan yang aman, cepat, dan terenkripsi.<br>
    Didesain khusus untuk memudahkan pengelolaan aset dan transaksi Anda secara presisi.
</div>

</div></div>

<script>
  const lastUid = localStorage.getItem('last_uid_rhn');
  const localPin = localStorage.getItem('local_pin_rhn');
  window.appUnlocked = false; 

  window.forceFocusPin = () => {
      // FIX: Tahan keyboard kalau animasi splash screen masih jalan
      const splash = document.getElementById('splash-screen');
      if (splash && splash.style.display !== 'none' && !splash.classList.contains('splash-exit')) return;

      // FIX BARU: Jangan curi fokus kalau ada popup SweetAlert2 yang sedang terbuka
      // (misalnya saat lagi ngetik PIN baru di form "Reset PIN" / "Ganti PIN").
      // Tanpa pengecekan ini, interval di bawah akan maksa fokus balik ke
      // input PIN lama tiap 200ms sehingga ketikan di popup jadi berantakan/error.
      if (document.body.classList.contains('swal2-shown') || document.querySelector('.swal2-container')) return;

      const pinEl = document.getElementById('app-pin');
      if (pinEl && document.getElementById('pin-screen').style.display !== 'none') {
          pinEl.focus();
          try { pinEl.click(); } catch(e){}
      }
  };

  if (lastUid) {
     document.addEventListener("DOMContentLoaded", () => {
         document.getElementById('auth-screen').style.display = 'none';
         document.getElementById('pin-screen').style.display = 'flex';
         document.getElementById('app-pin').style.display = 'block';
         
         if (localPin) {
             document.getElementById('pin-title').textContent = 'Masukkan PIN';
             document.getElementById('pin-sub').textContent = 'Keamanan Aktif';
             window.pinMode = 'verify_local';
             
             window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
         } else {
             document.getElementById('pin-title').textContent = 'Memuat Keamanan...';
             document.getElementById('pin-sub').textContent = 'Sinkronisasi dengan server';
             window.pinMode = 'verify';
         }
     });
  }
</script>

<script type="module">
window.idleTimer = null;
window.resetIdle = function() {
    if (window.idleTimer) clearTimeout(window.idleTimer);
    if (typeof extraPrefs !== 'undefined' && extraPrefs.ext_autolock === 'on' && window.appUnlocked) {
        window.idleTimer = setTimeout(() => {
            window.appUnlocked = false;
            document.getElementById('app-screen').style.display = 'none';
            document.getElementById('pin-screen').style.display = 'flex';
            document.getElementById('pin-title').textContent = 'Masukkan PIN';
            document.getElementById('pin-sub').textContent = 'Terkunci Otomatis (30 Detik)';
            document.getElementById('app-pin').value = '';
            window.pinMode = 'verify';
            if (!window.pinFocusInterval) window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
        }, 30000);
    }
};
['touchstart', 'mousemove', 'keydown', 'scroll', 'click'].forEach(evt => {
    document.addEventListener(evt, window.resetIdle, { passive: true });
});

window.toggleTheme = function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  refreshAll(); 
};

if (localStorage.getItem('theme') === 'light') { 
  document.body.classList.add('light-mode'); 
  document.getElementById('theme-toggle').textContent = '☀️'; 
}

window.toggleRecTime = function() {
    const val = document.getElementById('f-recurring').value;
    const rt = document.getElementById('row-recurring-time');
    if(rt) rt.style.display = val ? 'block' : 'none';
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, onAuthStateChanged, sendPasswordResetEmail, 
  GoogleAuthProvider, signInWithPopup, updateProfile 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
  initializeFirestore, persistentLocalCache, collection, doc, 
  addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy, where, limit,
  serverTimestamp, getDoc, setDoc, collectionGroup, getDocs, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = { 
  apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg", 
  authDomain: "rhn-capital.firebaseapp.com", 
  projectId: "rhn-capital", 
  storageBucket: "rhn-capital.firebasestorage.app", 
  messagingSenderId: "74905216682", 
  appId: "1:74905216682:web:4687a5b0bd7bcac09292d3" 
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const db = initializeFirestore(app, { localCache: persistentLocalCache() });

const QRIS_STATIS_ASLI = "00020101021126610014COM.GO-JEK.WWW01189360091430598840940210G0598840940303UMI51440014ID.CO.QRIS.WWW0215ID10264892253530303UMI5204899953033605802ID5919RHN CAPITAL FINANCE6005DEPOK61051645162070703A016304A525";
window.userQrisBase = "";

function crc16(str) {
    let crc = 0xFFFF;
    for (let c = 0; c < str.length; c++) {
        crc ^= str.charCodeAt(c) << 8;
        for (let i = 0; i < 8; i++) {
            if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
            else crc = crc << 1;
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

window.promptInputQris = async function() {
    const { value: qrisString } = await Swal.fire({
        title: 'Input Data QRIS Statis',
        input: 'textarea',
        inputPlaceholder: 'Tempel teks payload kode QRIS lu di sini...',
        inputValue: window.userQrisBase || "",
        background: 'var(--card)', color: 'var(--text)',
        showCancelButton: true,
        confirmButtonColor: 'var(--gold)',
        confirmButtonText: 'SIMPAN',
    });

    if (qrisString) {
        window.userQrisBase = qrisString.trim();
        if(currentUser) {
            try {
                await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), {
                    userQrisBase: window.userQrisBase
                }, { merge: true });
                Swal.fire({icon: 'success', title: 'Data QRIS Tersimpan!', background: 'var(--card)', color: 'var(--text)', timer: 800, showConfirmButton: false});
            } catch(e) {
                Swal.fire({icon: 'error', title: 'Gagal Menyimpan', text: e.message, background: 'var(--card)', color: 'var(--text)'});
            }
        }
    }
};

window.generateQris = function() {
    const nominalRaw = document.getElementById("qris-nominal").value;
    const nominalInput = nominalRaw.replace(/\./g, '');
    if (!nominalInput || parseInt(nominalInput) <= 0) {
        Swal.fire({ icon: 'warning', title: 'Nominal Kosong', text: 'Masukkan nominal tagihan!', background: 'var(--card)', color: 'var(--text)' });
        return;
    }

    const currentBase = window.userQrisBase || QRIS_STATIS_ASLI;
    if(currentBase.length < 20 || !currentBase.startsWith("00")) {
        Swal.fire({ icon: 'error', title: 'Format QRIS Invalid', text: 'String QRIS terdeteksi rusak atau bukan standar merchant resmi.', background: 'var(--card)', color: 'var(--text)' });
        return;
    }

    let qrisTanpaCrc = currentBase.slice(0, -4);
    let qrisBase = qrisTanpaCrc.slice(0, -4);

    let nomStr = parseInt(nominalInput).toString();
    let nomLen = nomStr.length.toString().padStart(2, '0');
    let tagNominal = "54" + nomLen + nomStr;

    let qrisBaruTanpaCrc = qrisBase + tagNominal + "6304";
    let crcBaru = crc16(qrisBaruTanpaCrc);
    let qrisDinamis = qrisBaruTanpaCrc + crcBaru;

    const qrContainer = document.getElementById("qris-qrcode-container");
    const qrElement = document.getElementById("qris-qrcode");
    
    const now = new Date();
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][now.getDay()];
    const tanggal = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    const waktu = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second:'2-digit' });
    document.getElementById("qris-print-version").innerText = `Waktu Cetak: ${namaHari}, ${tanggal} | ${waktu} WIB`;

    qrElement.innerHTML = ""; 
    qrContainer.style.display = "flex"; 

    new QRCode(qrElement, {
        text: qrisDinamis, width: 200, height: 200,
        colorDark : "#000000", colorLight : "#ffffff", correctLevel : QRCode.CorrectLevel.M
    });

    document.getElementById("btn-qris-konfirmasi").style.display = "block";
};

window.konfirmasiPembayaranQris = async function() {
    const nominalRaw = document.getElementById("qris-nominal").value;
    const nominalInput = nominalRaw.replace(/\./g, '');
    if (!nominalInput) return Swal.fire({ icon: 'warning', title: 'Nominal Kosong', text: 'Tolong isi nominalnya bro.', background: 'var(--card)', color: 'var(--text)' });
    if (!currentUser) return;

    const qrisTipe = document.getElementById("qris-tipe").value;
    const qrisWallet = document.getElementById("qris-wallet").value;
    const qrisNote = document.getElementById("qris-note").value.trim() || 'Pembayaran QRIS';
    const qrisDate = document.getElementById("qris-date").value || nowISO(); 

    const btn = document.getElementById("btn-qris-konfirmasi");
    btn.innerText = "MENYIMPAN..."; btn.disabled = true;

    try {
        let payload = {
            type: qrisTipe,
            amount: parseFloat(nominalInput),
            note: qrisNote,
            date: qrisDate, 
            ownerEmail: currentUser.email,
            createdAt: serverTimestamp(),
            isDeleted: false
        };

        if (qrisTipe === 'transfer') {
            payload.category = 'Transfer Antar Dompet';
            payload.wallet = 'Kas Tunai';
            payload.walletTo = qrisWallet;
        } else {
            payload.category = 'Pemasukan QRIS';
            payload.wallet = qrisWallet;
        }

        await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), payload);

        Swal.fire({
            icon: 'success',
            title: 'Terkonfirmasi!',
            text: 'Data Rp ' + parseInt(nominalInput).toLocaleString('id-ID') + ' telah dicatat masuk ke ' + qrisWallet,
            background: 'var(--card)', color: 'var(--text)',
            confirmButtonColor: 'var(--green2)',
            timer: 1500
        }).then(() => {
            document.getElementById("qris-nominal").value = "";
            document.getElementById("qris-note").value = "";
            window.setRealLocalTime();
            document.getElementById("qris-qrcode-container").style.display = "none";
            btn.style.display = "none";
            btn.innerText = "✅ KONFIRMASI SUDAH BAYAR";
            btn.disabled = false;
        });
    } catch(e) {
        Swal.fire({ icon: 'error', title: 'Gagal Menyimpan', text: e.message, background: 'var(--card)', color: 'var(--text)' });
        btn.innerText = "✅ KONFIRMASI SUDAH BAYAR";
        btn.disabled = false;
    }
};

window.defaultCATS = { 
  income: ['Gaji', 'Hasil Trading', 'Bonus / THR', 'Penjualan', 'Pendapatan Lainnya', 'Pemberian', 'Investasi', 'Ongkos Harian', 'Dividen', 'Profit', 'Transfer Masuk', 'Lainnya'], 
  expense: ['Makan & Minum', 'Transportasi', 'Tagihan', 'Belanja Bulanan', 'Cicilan', 'Hiburan / Nongkrong', 'Sedekah / Donasi', 'Jajan', 'Pembelian Aset(Investasi)', 'Infak', 'Kas', 'Utilitas', 'Loss', 'Pengeluaran Lainnya', 'Lainnya'],
  debt: ['Pinjaman Bank', 'Pinjaman Pribadi', 'Titipan Dana', 'Lainnya'],
  recv: ['Dipinjam Teman', 'Kasbon Karyawan', 'Lainnya'] 
};
window.userCats = JSON.parse(JSON.stringify(window.defaultCATS));
window.savingsGoals = [];

let txs = [], deletedTxs = [], curType = 'income', activePage = 'dashboard', charts = {};
let adminGrouped = {}, adminUserLabels = {}, adminGroupedTrash = {};
let currentUSDRate = 16000, currentUser = null, unsubListener = null, authMode = 'login';
let editId = null;

// Debounce untuk input pencarian Riwayat: renderAll() cukup berat (rebuild chart + list),
// kalau dipanggil di SETIAP ketikan bisa bikin terasa "berat" saat mengetik cepat.
// Dengan debounce, render baru jalan sesaat setelah user berhenti mengetik → ketikan terasa instan/mulus.
let __searchDebounceTimer = null;
window.debouncedRenderAll = function() {
    if (__searchDebounceTimer) clearTimeout(__searchDebounceTimer);
    __searchDebounceTimer = setTimeout(() => { window.renderAll(); }, 120);
};
let batchMode = false;
window.userBudgets = {};

let appPrefs = { type: 'income', category: '', wallet: 'Kas Tunai' };
let extraPrefs = { 
    ext_autolock: 'off', ext_warnbalance: 'off', ext_shortnum: 'off', ext_budget: 'off', 
    ext_hidezero: 'off', ext_walletpct: 'off', ext_debtbadge: 'off', ext_antiintip: 'off',
    ext_autobackup: 'on'
};

window.initTransferAccount = async function() {
    if (!currentUser) return;
    const infoEl = document.getElementById('user-transfer-info');
    
    try {
        const trRef = doc(db, 'users', currentUser.uid, 'settings', 'transfer');
        const trSnap = await getDoc(trRef);
        let tCode;

        if (!trSnap.exists() || !trSnap.data().transferCode || trSnap.data().transferCode.length !== 3) {
            tCode = Math.floor(100 + Math.random() * 900).toString();
            if (infoEl) {
                infoEl.textContent = tCode;
                infoEl.style.display = 'inline-block';
            }
            await setDoc(trRef, { transferCode: tCode }, { merge: true });
            await setDoc(doc(db, 'transfer_registry', tCode), { uid: currentUser.uid }); 
        } else {
            tCode = trSnap.data().transferCode;
            if (infoEl) {
                infoEl.textContent = tCode;
                infoEl.style.display = 'inline-block';
            }
        }
        window.__myTransferCode = tCode;
        if (typeof renderWalletTransferCard === 'function' && activePage === 'wallet') renderWalletTransferCard();
    } catch (err) {
        if (infoEl) {
            infoEl.textContent = `⚠️ GAGAL MEMUAT KODE`;
            infoEl.style.background = 'var(--red2)';
            infoEl.style.color = '#fff';
            infoEl.style.display = 'inline-block';
        }
    }
};

// ======================================================================
// LOOKUP PENERIMA TRANSFER (nama + email) berdasarkan kode 3 digit
// ======================================================================
window.lookupTransferTarget = async function(code) {
    const registryRef = doc(db, 'transfer_registry', code);
    const registrySnap = await getDoc(registryRef);
    if (!registrySnap.exists()) return null;

    const targetUid = registrySnap.data().uid;
    let nama = 'Pengguna RHN Capital';
    let email = '(email tidak ditemukan)';
    try {
        const uSnap = await getDoc(doc(db, 'users', targetUid));
        if (uSnap.exists()) {
            const d = uSnap.data();
            if (d.email) email = d.email;
            if (d.nama) nama = d.nama; else if (d.email) nama = d.email.split('@')[0];
        }
    } catch(e) { /* biarin default kalau gagal ambil profil */ }

    return { uid: targetUid, nama, email };
};

window.promptTransfer = async function(txId) {
    if (!currentUser) return;
    const t = txs.find(x => x.id === txId);
    if (!t) return;

    const { value: targetCode } = await Swal.fire({
        title: 'Transfer 1 Transaksi',
        html: '<input id="swal-tcode" class="swal2-input" placeholder="Masukkan 3 Angka" maxlength="3" type="number" style="text-align:center; font-family:Outfit; font-weight:800; font-size:18px; letter-spacing:2px; max-width:100%; width:80%; margin:0 auto; display:block; box-sizing:border-box;">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'LANJUT ➔',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => { return document.getElementById('swal-tcode').value }
    });

    if (targetCode) {
        if (targetCode.length !== 3) return Swal.fire({icon:'error', title:'Harus 3 Angka!', background:'var(--card)', color:'var(--text)'});
        await window.confirmAndTransfer([t], targetCode, true);
    }
};

// ======================================================================
// Pisah 1 transaksi jadi 2 transaksi terpisah (misal 1 nota gabungan
// "Cukur rambut dan parkir" dipecah jadi 2 catatan sendiri-sendiri)
// ======================================================================
window.splitTx = async function(txId) {
    if (!currentUser) return;
    const t = txs.find(x => x.id === txId);
    if (!t) return;

    const catList = (window.userCats && window.userCats[t.type] && window.userCats[t.type].length) ? window.userCats[t.type] : (window.defaultCATS[t.type] || []);
    const catOptions = catList.map(c => `<option value="${c}" ${c === t.category ? 'selected' : ''}>${c}</option>`).join('');

    const { value: formVals } = await Swal.fire({
        title: '✂️ Pisah Jadi 2 Transaksi',
        html: `
          <style>
            .sp-wrap{ text-align:left; }
            .sp-info{ display:flex; align-items:center; justify-content:space-between; gap:10px; background:var(--bg2); border:1px solid var(--border); border-radius:14px; padding:12px 16px; margin-bottom:16px; }
            .sp-info-label{ font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase; letter-spacing:.5px; }
            .sp-info-sub{ font-size:11px; color:var(--text3); margin-top:2px; }
            .sp-info-amt{ font-size:17px; font-weight:800; color:var(--gold); font-family:'JetBrains Mono', monospace; white-space:nowrap; }
            .sp-section{ background:var(--bg2); border:1px solid var(--border); border-radius:16px; padding:14px 16px 16px; margin-bottom:12px; position:relative; }
            .sp-badge{ display:inline-flex; align-items:center; gap:6px; font-size:10px; font-weight:800; color:#000; text-transform:uppercase; letter-spacing:.5px; background:var(--gold); border-radius:20px; padding:3px 10px; margin-bottom:10px; }
            .sp-section.p2 .sp-badge{ background:var(--blue); color:#fff; }
            .sp-field{ margin-bottom:8px; }
            .sp-field:last-child{ margin-bottom:0; }
            .sp-field label{ display:block; font-size:9.5px; font-weight:700; color:var(--text3); text-transform:uppercase; letter-spacing:.4px; margin-bottom:4px; }
            .sp-wrap .swal2-input, .sp-wrap select.swal2-input{ margin:0 !important; width:100% !important; background:var(--card) !important; border:1px solid var(--border) !important; color:var(--text) !important; border-radius:10px !important; font-size:13.5px !important; height:42px !important; box-shadow:none !important; transition:border-color .15s, box-shadow .15s; }
            .sp-wrap .swal2-input:focus, .sp-wrap select.swal2-input:focus{ border-color:var(--gold) !important; box-shadow:0 0 0 3px rgba(251,191,36,0.15) !important; }
            .sp-amt-row{ position:relative; }
            .sp-amt-row .sp-prefix{ position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:12px; font-weight:800; color:var(--text3); pointer-events:none; z-index:2; }
            .sp-amt-row input{ padding-left:34px !important; font-weight:700 !important; }
            .sp-sum-bar{ display:flex; align-items:center; justify-content:space-between; gap:10px; background:var(--bg3); border:1px dashed var(--border); border-radius:12px; padding:10px 14px; font-size:11px; font-weight:700; color:var(--text3); }
            #sp-sum-val{ font-family:'JetBrains Mono', monospace; font-weight:800; font-size:13px; }
          </style>
          <div class="sp-wrap">
            <div class="sp-info">
              <div>
                <div class="sp-info-label">Total Transaksi</div>
                <div class="sp-info-sub">Jumlah bagian 1 + bagian 2 harus pas sama</div>
              </div>
              <div class="sp-info-amt">${fmtFull(t.amount)}</div>
            </div>

            <div class="sp-section p1">
              <div class="sp-badge">① Bagian 1</div>
              <div class="sp-field">
                <label>Keterangan</label>
                <input id="sp-note1" class="swal2-input" placeholder="Keterangan 1" value="${escapeHTML(t.note)}">
              </div>
              <div class="sp-field">
                <label>Kategori</label>
                <select id="sp-cat1" class="swal2-input">${catOptions}</select>
              </div>
              <div class="sp-field">
                <label>Jumlah</label>
                <div class="sp-amt-row"><span class="sp-prefix">Rp</span><input id="sp-amt1" class="swal2-input" type="number" placeholder="Jumlah 1" value="${t.amount}"></div>
              </div>
            </div>

            <div class="sp-section p2">
              <div class="sp-badge">② Bagian 2</div>
              <div class="sp-field">
                <label>Keterangan</label>
                <input id="sp-note2" class="swal2-input" placeholder="Keterangan 2" value="${escapeHTML(t.note)}">
              </div>
              <div class="sp-field">
                <label>Kategori</label>
                <select id="sp-cat2" class="swal2-input">${catOptions}</select>
              </div>
              <div class="sp-field">
                <label>Jumlah</label>
                <div class="sp-amt-row"><span class="sp-prefix">Rp</span><input id="sp-amt2" class="swal2-input" type="number" placeholder="Jumlah 2" value="0"></div>
              </div>
            </div>

            <div class="sp-sum-bar">
              <span>Total Bagian 1 + 2</span>
              <span id="sp-sum-val">Rp 0</span>
            </div>
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'PISAHKAN ✂️',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)',
        didOpen: () => {
            const a1 = document.getElementById('sp-amt1');
            const a2 = document.getElementById('sp-amt2');
            const sumEl = document.getElementById('sp-sum-val');
            const updateSum = () => {
                const v1 = parseFloat(a1.value) || 0;
                const v2 = parseFloat(a2.value) || 0;
                const total = v1 + v2;
                sumEl.textContent = fmtFull(total);
                sumEl.style.color = Math.round(total) === Math.round(t.amount) ? 'var(--green2)' : 'var(--red2)';
            };
            a1.addEventListener('input', updateSum);
            a2.addEventListener('input', updateSum);
            updateSum();
        },
        preConfirm: () => {
            const note1 = document.getElementById('sp-note1').value.trim();
            const cat1 = document.getElementById('sp-cat1').value;
            const amt1 = parseFloat(document.getElementById('sp-amt1').value) || 0;
            const note2 = document.getElementById('sp-note2').value.trim();
            const cat2 = document.getElementById('sp-cat2').value;
            const amt2 = parseFloat(document.getElementById('sp-amt2').value) || 0;
            if (!note1 || !note2) { Swal.showValidationMessage('Keterangan bagian 1 & 2 wajib diisi!'); return false; }
            if (!cat1 || !cat2) { Swal.showValidationMessage('Kategori bagian 1 & 2 wajib dipilih!'); return false; }
            if (amt1 <= 0 || amt2 <= 0) { Swal.showValidationMessage('Jumlah bagian 1 & 2 harus lebih dari 0!'); return false; }
            if (Math.round(amt1 + amt2) !== Math.round(t.amount)) { Swal.showValidationMessage('Jumlah bagian 1 + bagian 2 harus pas = ' + fmtFull(t.amount) + '!'); return false; }
            return { note1, cat1, amt1, note2, cat2, amt2 };
        }
    });

    if (!formVals) return;

    Swal.fire({title: 'Memisahkan Transaksi...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const base = { ...t };
        delete base.id;
        // createdAt TIDAK dihapus & TIDAK diganti serverTimestamp() baru,
        // supaya hasil pisahan tetap di tanggal & jam yang sama persis
        // dengan transaksi asli (t.date juga sudah ikut ke-copy via base).

        const batch = writeBatch(db);
        const ref1 = doc(collection(db, 'users', currentUser.uid, 'transactions'));
        batch.set(ref1, { ...base, note: formVals.note1, category: formVals.cat1, amount: formVals.amt1 });
        const ref2 = doc(collection(db, 'users', currentUser.uid, 'transactions'));
        batch.set(ref2, { ...base, note: formVals.note2, category: formVals.cat2, amount: formVals.amt2 });
        batch.delete(doc(db, 'users', currentUser.uid, 'transactions', txId));
        await batch.commit();

        Swal.fire({icon:'success', title:'Berhasil Dipisah! ✂️', text:'1 transaksi sekarang jadi 2 catatan terpisah.', background:'var(--card)', color:'var(--text)', timer:1400, showConfirmButton:false});
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Memisah', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.promptTransferAll = async function() {
    if (!currentUser) return;
    if (txs.length === 0) return Swal.fire({icon:'info', title:'Data Kosong!', background:'var(--card)', color:'var(--text)'});

    const { value: targetCode } = await Swal.fire({
        title: 'Transfer Semua Riwayat',
        html: '<p style="font-size:12px; color:var(--text3); margin-bottom:16px;">Semua data akan dipindah ke akun tujuan dan dihapus dari akun ini.</p>' +
              '<input id="swal-tcode-all" class="swal2-input" placeholder="Masukkan 3 Angka" maxlength="3" type="number" style="text-align:center; font-family:Outfit; font-weight:800; font-size:18px; letter-spacing:2px; max-width:100%; width:80%; margin:0 auto; display:block; box-sizing:border-box;">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'LANJUT ➔',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => { return document.getElementById('swal-tcode-all').value }
    });

    if (targetCode) {
        if (targetCode.length !== 3) return Swal.fire({icon:'error', title:'Harus 3 Angka!', background:'var(--card)', color:'var(--text)'});
        await window.confirmAndTransfer(txs, targetCode, false);
    }
};

// ======================================================================
// Tahap konfirmasi: cari nama+email penerima dulu, baru user acc, baru eksekusi
// ======================================================================
window.confirmAndTransfer = async function(txList, targetCode, isSingle) {
    Swal.fire({title: 'Mencari Akun Tujuan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});

    let target;
    try {
        target = await window.lookupTransferTarget(targetCode);
    } catch(e) {
        return Swal.fire({icon:'error', title:'Gagal Mencari Akun', text: e.message, background:'var(--card)', color:'var(--text)'});
    }

    if (!target) {
        return Swal.fire({icon:'error', title:'Transfer Gagal', text:'Kode 3 Angka tidak ditemukan! Pastikan akun tujuan buka aplikasinya.', background:'var(--card)', color:'var(--text)'});
    }
    if (target.uid === currentUser.uid) {
        return Swal.fire({icon:'warning', title:'Gagal', text:'Nggak bisa transfer ke akun lu sendiri bro!', background:'var(--card)', color:'var(--text)'});
    }

    const res = await Swal.fire({
        title: 'Konfirmasi Penerima',
        html: `
          <div style="text-align:left; background:var(--bg2); border:1px solid var(--border); border-radius:12px; padding:16px; margin-top:8px;">
            <div style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase; margin-bottom:8px;">Transfer akan dikirim ke:</div>
            <div style="font-size:16px; font-weight:800; color:var(--gold); margin-bottom:4px;">${window.escapeHTML ? window.escapeHTML(target.nama) : target.nama}</div>
            <div style="font-size:12px; color:var(--text2); font-family:'JetBrains Mono', monospace;">${window.escapeHTML ? window.escapeHTML(target.email) : target.email}</div>
            <div style="font-size:10px; color:var(--text3); margin-top:12px;">Kode: <b style="color:var(--text);">${targetCode}</b> · Jumlah data: <b style="color:var(--text);">${txList.length} transaksi</b></div>
          </div>
          <div style="font-size:11px; color:var(--red2); margin-top:12px;">Pastikan nama & email di atas benar sebelum lanjut. Transaksi akan dipindahkan dan dihapus dari akun ini.</div>
        `,
        showCancelButton: true,
        confirmButtonText: isSingle ? 'YA, KIRIM SEKARANG' : `YA, KIRIM ${txList.length} DATA`,
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--green2)', cancelButtonColor: 'var(--bg3)'
    });

    if (res.isConfirmed) {
        await window.executeTransfer(txList, target.uid, isSingle);
    }
};

// ======================================================================
// Eksekusi transfer pakai writeBatch -> jauh lebih cepat dari loop satu-satu
// ======================================================================
window.executeTransfer = async function(txList, targetUid, isSingle) {
    Swal.fire({title: 'Memproses Transfer...', html: `Memindahkan ${txList.length} transaksi, mohon tunggu...`, background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});

    try {
        const CHUNK_SIZE = 200; // aman di bawah limit 500 operasi per batch (2 operasi per transaksi)
        for (let i = 0; i < txList.length; i += CHUNK_SIZE) {
            const chunk = txList.slice(i, i + CHUNK_SIZE);
            const batch = writeBatch(db);
            chunk.forEach(t => {
                let payload = { ...t };
                delete payload.id;
                payload.createdAt = serverTimestamp();
                const newRef = doc(collection(db, 'users', targetUid, 'transactions'));
                batch.set(newRef, payload);
                const oldRef = doc(db, 'users', currentUser.uid, 'transactions', t.id);
                batch.delete(oldRef);
            });
            await batch.commit();
        }
        Swal.fire({icon:'success', title:'Transfer Berhasil!', text: isSingle ? '1 transaksi dipindahkan.' : `${txList.length} transaksi dipindahkan.`, background:'var(--card)', color:'var(--text)'});
    } catch(e) {
        Swal.fire({icon:'error', title:'Error Sistem', text: "Gagal: " + e.message, background:'var(--card)', color:'var(--text)'});
    }
};

const fmtFull = n => {
    if (Math.abs(n) >= 1000000000) return 'Rp ' + (n / 1000000000).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 3 }) + ' M';
    return 'Rp ' + Math.round(n).toLocaleString('id-ID');
};

const fmt = (n, isDash = false) => {
    if (isDash && typeof extraPrefs !== 'undefined' && extraPrefs.ext_shortnum === 'on') {
        if (Math.abs(n) >= 1000000000) return 'Rp ' + (n/1000000000).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 3 }) + ' M';
        if (Math.abs(n) >= 1000000) return 'Rp ' + (n/1000000).toFixed(2).replace('.',',') + ' Jt';
        if (Math.abs(n) >= 10000) return 'Rp ' + (n/1000).toFixed(1).replace('.',',') + ' Rb';
    }
    return fmtFull(n);
};

const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const nowISO = () => new Date().toISOString().slice(0,16);
const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const getUSD = n => '$' + (n / currentUSDRate).toFixed(2);

function initLiveCurrencies() {
  const socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=usdtidr@ticker/eurusdt@ticker/gbpusdt@ticker/audusdt@ticker/brlusdt@ticker/tryusdt@ticker');
  socket.addEventListener('message', e => { 
      const msg = JSON.parse(e.data); 
      const stream = msg.stream; 
      const price = parseFloat(msg.data.c); 
      if (!price) return;
      if (stream === 'usdtidr@ticker') { 
          if (price !== currentUSDRate) { 
              currentUSDRate = price; 
              const usdEl = document.getElementById('usd-rate-val'); 
              if (usdEl) usdEl.textContent = kursIndo.format(currentUSDRate); 
              if (calcRates) { 
                  calcRates['IDR'] = currentUSDRate; 
                  Object.keys(calcRates).forEach(code => { 
                      if (code !== 'USD' && code !== 'IDR' && code !== 'EUR' && code !== 'GBP' && code !== 'AUD' && code !== 'TRY' && code !== 'BRL') { 
                          const noise = 1 + (Math.random() - 0.5) * 0.00004; 
                          calcRates[code] *= noise; 
                      } 
                  }); 
              } 
              refreshAll(); 
          }
      } else if (stream === 'eurusdt@ticker') { if (calcRates) calcRates['EUR'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'gbpusdt@ticker') { if (calcRates) calcRates['GBP'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'audusdt@ticker') { if (calcRates) calcRates['AUD'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'brlusdt@ticker') { if (calcRates) calcRates['BRL'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'tryusdt@ticker') { if (calcRates) calcRates['TRY'] = 1 / price; window.renderCalcDisplay(); }
  });
  socket.addEventListener('close', () => setTimeout(initLiveCurrencies, 3000));
}

async function fetchUSDRate() { 
  try { 
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
      currentUSDRate = (await res.json()).rates.IDR; 
      document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); 
      refreshAll(); 
  } catch (e) { document.getElementById('usd-rate-val').textContent = "Offline"; } 
}
fetchUSDRate().then(initLiveCurrencies); 
setInterval(fetchUSDRate, 300000); 

function initLiveXAU() {
  const socketXAU = new WebSocket('wss://stream.binance.com:9443/ws/paxgusdt@ticker');
  socketXAU.addEventListener('message', e => { 
      const newPrice = parseFloat(JSON.parse(e.data).c); 
      if (newPrice) { 
          const xauRate = document.getElementById('xau-rate-val'); 
          if (xauRate) xauRate.textContent = '$' + newPrice.toFixed(2); 
          if (currentUSDRate > 0) { 
              const idrPriceOz = newPrice * currentUSDRate; 
              const idrPriceGram = idrPriceOz / 31.1034768; 
              const ozEl = document.getElementById('xau-idr-oz'); 
              if (ozEl) ozEl.textContent = `Rp ` + kursIndo.format(idrPriceOz); 
              const grEl = document.getElementById('xau-idr-gr'); 
              if (grEl) grEl.textContent = `Rp ` + kursIndo.format(idrPriceGram); 
          } 
      } 
  });
  socketXAU.addEventListener('close', () => setTimeout(initLiveXAU, 3000));
}
initLiveXAU();

let calcRates = null, calcFromCode = 'USD', calcToCode = 'IDR', calcActiveRow = 'from', calcInputVal = '100';

const calcCurrencies = [ 
  { code: 'IDR', name: 'Rupiah Indonesia', flag: '🇮🇩' }, { code: 'USD', name: 'Dolar Amerika', flag: '🇺🇸' }, 
  { code: 'AED', name: 'Dirham Uni Emirat Arab', flag: '🇦🇪' }, { code: 'AUD', name: 'Dolar Australia', flag: '🇦🇺' }, 
  { code: 'BRL', name: 'Real Brasil', flag: '🇧🇷' }, { code: 'CAD', name: 'Dolar Kanada', flag: '🇨🇦' }, 
  { code: 'CHF', name: 'Franc Swiss', flag: '🇨🇭' }, { code: 'CNY', name: 'Yuan Tiongkok', flag: '🇨🇳' }, 
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' }, { code: 'GBP', name: 'Poundsterling Inggris', flag: '🇬🇧' }, 
  { code: 'HKD', name: 'Dolar Hong Kong', flag: '🇭🇰' }, { code: 'INR', name: 'Rupee India', flag: '🇮🇳' }, 
  { code: 'JPY', name: 'Yen Jepang', flag: '🇯🇵' }, { code: 'KRW', name: 'Won Korea Selatan', flag: '🇰🇷' }, 
  { code: 'MYR', name: 'Ringgit Malaysia', flag: '🇲🇾' }, { code: 'NZD', name: 'Dolar Selandia Baru', flag: '🇳🇿' }, 
  { code: 'PHP', name: 'Peso Filipina', flag: '🇵🇭' }, { code: 'RUB', name: 'Rubel Rusia', flag: '🇷🇺' }, 
  { code: 'SAR', name: 'Riyal Arab Saudi', flag: '🇸🇦' }, { code: 'SEK', name: 'Krona Swedia', flag: '🇸🇪' }, 
  { code: 'SGD', name: 'Dolar Singapura', flag: '🇸🇬' }, { code: 'THB', name: 'Baht Thailand', flag: '🇹🇭' }, 
  { code: 'TRY', name: 'Lira Turki', flag: '🇹🇷' }, { code: 'ZAR', name: 'Rand Afrika Selatan', flag: '🇿🇦' } 
];

async function initCalc() { 
  try { 
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
      calcRates = (await response.json()).rates; 
      const now = new Date(); 
      document.getElementById('calc-last-update').textContent = `${now.toLocaleDateString('id-ID', { year:'numeric', month:'2-digit', day:'2-digit' }).replace(/\//g, '-')} ${now.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' })}`; 
      window.renderCalcDisplay(); 
  } catch (e) { document.getElementById('calc-last-update').textContent = "Offline / Gagal Memuat"; } 
}

window.setCalcActiveRow = function(row) { 
  if (calcActiveRow === row) return; 
  if (navigator.vibrate) navigator.vibrate(15); 
  let currentNum = parseFloat(calcInputVal || '0'); 
  let baseInUSD = currentNum / (calcActiveRow === 'from' ? calcRates[calcFromCode] : calcRates[calcToCode]); 
  let targetVal = baseInUSD * (row === 'from' ? calcRates[calcFromCode] : calcRates[calcToCode]); 
  let newValStr = targetVal.toString(); 
  if(newValStr.includes('.')) newValStr = targetVal.toFixed(2).replace(/\.?0+$/, ''); 
  calcInputVal = newValStr; 
  calcActiveRow = row; 
  window.renderCalcDisplay(); 
}

window.changeCalcCurr = function(row, newCode) { 
  if (row === 'from') calcFromCode = newCode; 
  if (row === 'to') calcToCode = newCode; 
  window.renderCalcDisplay(); 
}

window.swapCalcCurr = function() { 
  if (navigator.vibrate) navigator.vibrate(15); 
  let tempCode = calcFromCode; calcFromCode = calcToCode; calcToCode = tempCode; 
  calcActiveRow = calcActiveRow === 'from' ? 'to' : 'from'; 
  window.renderCalcDisplay(); 
}

window.openCurrencySelector = function(rId) { 
  let html = '<div style="display:flex; flex-direction:column; gap:8px; max-height:60vh; overflow-y:auto; padding-bottom:12px; scrollbar-width:none;">'; 
  calcCurrencies.forEach(c => { 
      let isActive = (rId === 'from' && calcFromCode === c.code) || (rId === 'to' && calcToCode === c.code); 
      html += `<button onclick="changeCalcCurr('${rId}', '${c.code}'); Swal.close();" style="background:${isActive?'var(--bg3)':'var(--bg2)'}; color:var(--text); border:1px solid ${isActive?'var(--gold)':'var(--border)'}; padding:14px; border-radius:12px; font-family:'Outfit'; text-align:left; font-size:14px; font-weight:600; display:flex; align-items:center; gap:12px;"><span style="font-size:20px;">${c.flag}</span> ${c.code} - ${c.name}</button>`; 
  }); 
  html += '</div>'; 
  Swal.fire({ title: '<div style="font-size:18px; text-align:left; font-weight:800; border-bottom:1px dashed var(--border); padding-bottom:12px; margin-bottom:8px;">Pilih Mata Uang</div>', html: html, showConfirmButton: false, background: 'var(--card)', color: 'var(--text)', position: 'center', padding: '24px 16px', margin:0, width: window.innerWidth <= 768 ? '90%' : '400px', customClass: { popup: 'centered-modal' } }); 
}

window.calcPress = function(key) { 
  if (navigator.vibrate) navigator.vibrate(20); 
  if (key === 'AC') { calcInputVal = '0'; } else if (key === 'DEL') { calcInputVal = calcInputVal.slice(0, -1); if (calcInputVal === '') calcInputVal = '0'; } else if (key === '.') { if (!calcInputVal.includes('.')) calcInputVal += '.'; } else { if (calcInputVal === '0' && key !== '00') { calcInputVal = key; } else if (calcInputVal === '0' && key === '00') { /* do nothing */ } else { if(calcInputVal.replace('.', '').length < 15) { calcInputVal += key; } } } 
  window.renderCalcDisplay(); 
}

function renderRow(rId, code, isAct, displayVal) { 
  let currObj = calcCurrencies.find(c => c.code === code) || {name:'', flag:''}; 
  let countryCode = code.slice(0, 2).toLowerCase(); 
  if (code === 'EUR') countryCode = 'eu'; if (code === 'GBP') countryCode = 'gb'; 
  let flagImgHtml = `<img src="https://flagcdn.com/w40/${countryCode}.png" style="width:32px; height:22px; object-fit:cover; border-radius:4px; display:block; border:1px solid rgba(255,255,255,0.15);" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23888899\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9\'></path></svg>';">`; 
  return `
  <div class="calc-curr-item ${isAct ? 'active' : ''}" onclick="setCalcActiveRow('${rId}')">
    <div class="calc-left">
      <div class="calc-flag" style="width:40px; justify-content:center;">${flagImgHtml}</div>
      <div class="calc-code-wrap">
        <div class="calc-select" onclick="event.stopPropagation(); openCurrencySelector('${rId}')" style="display:flex; align-items:center; gap:8px;">${currObj.code} <span style="font-size:10px; color:var(--text3);">▼</span></div>
        <div class="calc-name">${currObj.name}</div>
      </div>
    </div>
    <div class="calc-right"><div class="calc-amount">${displayVal}</div></div>
  </div>`; 
}

window.renderCalcDisplay = function() { 
  const container = document.getElementById('calc-display'); 
  if (!container) return; 
  let currentNum = parseFloat(calcInputVal || '0'); 
  let baseInUSD = 0; 
  if (calcRates) { calcRates['IDR'] = currentUSDRate; let activeCode = calcActiveRow === 'from' ? calcFromCode : calcToCode; if (calcRates[activeCode]) { baseInUSD = currentNum / calcRates[activeCode]; } } 
  let fromValStr = '0'; 
  if (calcActiveRow === 'from') { let parts = calcInputVal.split('.'); let intPart = parts[0] ? parseInt(parts[0], 10).toLocaleString('id-ID') : '0'; fromValStr = parts.length > 1 ? `${intPart},${parts[1]}` : intPart; } else { if (calcRates && calcRates[calcFromCode]) { let val = baseInUSD * calcRates[calcFromCode]; fromValStr = val === 0 ? '0' : val.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 4}); } else { fromValStr = '...'; } } 
  let toValStr = '0'; 
  if (calcActiveRow === 'to') { let parts = calcInputVal.split('.'); let intPart = parts[0] ? parseInt(parts[0], 10).toLocaleString('id-ID') : '0'; toValStr = parts.length > 1 ? `${intPart},${parts[1]}` : intPart; } else { if (calcRates && calcRates[calcToCode]) { let val = baseInUSD * calcRates[calcToCode]; toValStr = val === 0 ? '0' : val.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 4}); } else { toValStr = '...'; } } 
  const cacheKey = `${calcFromCode}_${calcToCode}_${calcActiveRow}`; 
  if (container.dataset.cacheKey !== cacheKey || !container.innerHTML.trim()) { 
      container.innerHTML = renderRow('from', calcFromCode, calcActiveRow === 'from', fromValStr) + `<div style="display:flex; justify-content:center; margin: -16px 0; position: relative; z-index: 10;"><button class="swap-btn" onclick="event.stopPropagation(); swapCalcCurr()" title="Tukar Mata Uang">⇅</button></div>` + renderRow('to', calcToCode, calcActiveRow === 'to', toValStr); 
      container.dataset.cacheKey = cacheKey; 
  } else { 
      const fromAmtEl = container.querySelector('.calc-curr-item:first-child .calc-amount'); const toAmtEl = container.querySelector('.calc-curr-item:last-child .calc-amount'); 
      if (fromAmtEl) fromAmtEl.textContent = fromValStr; if (toAmtEl) toAmtEl.textContent = toValStr; 
  } 
}

document.addEventListener('DOMContentLoaded', () => {
    initCalc();
    const syncSelectUI = (sel, ui) => { let text = sel.options[sel.selectedIndex]?.text; if(!text && sel.options.length > 0) text = sel.options[0].text; ui.querySelector('.sel-text').innerHTML = text || 'Pilih...'; };
    document.querySelectorAll('select.f-input-dark, select.set-select').forEach(sel => { 
        sel.style.display = 'none'; let ui = document.createElement('div'); ui.className = sel.className; ui.style.display = 'flex'; ui.style.justifyContent = 'space-between'; ui.style.alignItems = 'center'; ui.style.cursor = 'pointer'; ui.innerHTML = `<span class="sel-text" style="pointer-events:none; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:90%;"></span><span style="font-size:10px; color:var(--text3); pointer-events:none;">▼</span>`; sel.parentNode.insertBefore(ui, sel); syncSelectUI(sel, ui); sel.addEventListener('change', () => syncSelectUI(sel, ui)); const observer = new MutationObserver(() => syncSelectUI(sel, ui)); observer.observe(sel, { childList: true, subtree: true }); ui.addEventListener('click', (e) => { e.stopPropagation(); if (navigator.vibrate) navigator.vibrate(10); let html = '<div style="display:flex; flex-direction:column; gap:8px; max-height:60vh; overflow-y:auto; padding-bottom:12px; scrollbar-width:none;">'; Array.from(sel.options).forEach((opt, idx) => { if(!opt.value && opt.text.toLowerCase().includes('pilih')) return; let isSel = sel.value === opt.value; html += `<button onclick="window.selectCustomOpt('${sel.id}', ${idx})" style="background:${isSel?'var(--bg3)':'var(--bg2)'}; color:var(--text); border:1px solid ${isSel?'var(--gold)':'var(--border)'}; padding:16px; border-radius:12px; font-family:'Outfit'; text-align:left; font-size:14px; font-weight:600; cursor:pointer; transition:0.2s;">${opt.innerHTML || opt.text}</button>`; }); html += '</div>'; Swal.fire({ title: '<div style="font-size:16px; text-align:left; font-weight:800; color:var(--text); border-bottom: 1px dashed var(--border); padding-bottom: 12px; margin-bottom: 8px;">Pilih Opsi</div>', html: html, showConfirmButton: false, background: 'var(--card)', color: 'var(--text)', position: 'center', padding: '24px 16px 16px 16px', margin:0, width: window.innerWidth <= 768 ? '90%' : '400px', customClass: { popup: 'centered-modal' } }); }); 
    });
    window.selectCustomOpt = function(selId, optIdx) { let sel = document.getElementById(selId); if (sel) { sel.selectedIndex = optIdx; sel.dispatchEvent(new Event('change')); if(sel.onchange) sel.onchange(); } Swal.close(); };
    
    const recSelect = document.getElementById('f-recurring');
    if (recSelect) {
        recSelect.addEventListener('change', window.toggleRecTime);
    }
});

function showErr(msg) { const el = document.getElementById('auth-err'); el.textContent = msg; el.style.display = 'block'; }
function hideErr() { document.getElementById('auth-err').style.display = 'none'; }
function setLoading(on) { document.getElementById('auth-submit-btn').disabled = on; document.getElementById('auth-submit-btn').textContent = on ? 'Memproses...' : (authMode === 'login' ? 'MASUK' : 'DAFTAR'); }
function setSyncStatus(ok) { document.getElementById('sync-dot').style.background = ok ? 'var(--green2)' : 'var(--red2)'; document.getElementById('sync-label').textContent = ok ? 'TERSINKRON' : 'OFFLINE'; document.getElementById('sync-dot').style.boxShadow = ok ? '0 0 8px var(--green2)' : 'none'; }

// Helper: kasih timeout ke promise biar tombol gak nyangkut selamanya kalau koneksi lelet/hang
function withTimeout(promise, ms, timeoutMsg) {
    let timer;
    const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(timeoutMsg || 'Waktu tunggu habis. Cek koneksi internet kamu.')), ms);
    });
    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
}

window.switchTab = function(mode) { authMode = mode; document.getElementById('tab-login').classList.toggle('active', mode === 'login'); document.getElementById('tab-register').classList.toggle('active', mode === 'register'); document.getElementById('field-confirm').style.display = mode === 'register' ? 'block' : 'none'; document.getElementById('field-nama').style.display = mode === 'register' ? 'block' : 'none'; document.getElementById('auth-submit-btn').textContent = mode === 'login' ? 'MASUK' : 'DAFTAR'; hideErr(); };

window.doGoogleAuth = async function() {
    const provider = new GoogleAuthProvider();
    hideErr();
    const btn = document.getElementById('btn-google');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Memproses...';
    try {
        await withTimeout(signInWithPopup(auth, provider), 3000, 'Login Google terlalu lama / macet. Coba lagi ya.');
        // onAuthStateChanged akan lanjut ambil alih & sembunyikan layar auth.
    } catch(e) {
        let msg = e.message || 'Gagal login dengan Google.';
        if (e.code === 'auth/popup-closed-by-user') msg = 'Jendela login ditutup sebelum selesai. Coba lagi.';
        if (e.code === 'auth/cancelled-popup-request') msg = 'Ada proses login lain yang masih berjalan. Coba lagi.';
        if (e.code === 'auth/popup-blocked') msg = 'Popup login diblokir browser. Izinkan pop-up untuk situs ini lalu coba lagi.';
        showErr(msg);
    } finally {
        // Selalu balikin tombol ke normal, apapun hasilnya, biar gak nyangkut di "Memproses..."
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
};

window.doAuth = async function() { 
    const email = document.getElementById('auth-email').value.trim(); 
    const pass = document.getElementById('auth-pass').value; 
    const nama = document.getElementById('auth-nama').value.trim(); 
    hideErr(); 
    if (!email || !pass) return showErr('Email dan Sandi tidak boleh kosong.'); 
    if (authMode === 'register' && !nama) return showErr('Nama tidak boleh kosong.'); 
    setLoading(true); 
    try { 
        if (authMode === 'login') {
            await withTimeout(signInWithEmailAndPassword(auth, email, pass), 3000, 'Proses login terlalu lama. Cek koneksi lalu coba lagi.');
        } else { 
            if (pass !== document.getElementById('auth-pass2').value) {
                setLoading(false);
                return showErr('Konfirmasi Sandi tidak sama.');
            }
            const cred = await withTimeout(createUserWithEmailAndPassword(auth, email, pass), 3000, 'Proses daftar terlalu lama. Cek koneksi lalu coba lagi.');
            try {
                await updateProfile(cred.user, { displayName: nama });
                await setDoc(doc(db, 'users', cred.user.uid), { email: cred.user.email, nama: nama }, { merge: true });
            } catch(eProfil) { console.error('Gagal menyimpan nama akun', eProfil); }
        }
        setLoading(false);
    } catch(e) {
        let errorMsg = "Terjadi kesalahan. Silakan coba lagi.";
        let isTooManyRequests = false; // Penanda khusus untuk error berkali-kali
        
        switch (e.code) {
            case 'auth/invalid-credential':
                errorMsg = "Email atau Kata Sandi salah."; 
                break;
            case 'auth/wrong-password':
                errorMsg = "Kata sandi Anda salah."; 
                break;
            case 'auth/user-not-found':
                errorMsg = "Email belum terdaftar."; 
                break;
            case 'auth/invalid-email':
                errorMsg = "Format penulisan email tidak valid.";
                break;
            case 'auth/email-already-in-use':
                errorMsg = "Email ini sudah terdaftar. Silakan langsung masuk.";
                break;
            case 'auth/weak-password':
                errorMsg = "Kata sandi terlalu lemah (minimal 6 karakter).";
                break;
            case 'auth/too-many-requests':
                errorMsg = "Terlalu banyak percobaan gagal. Coba lagi dalam 30 detik.";
                isTooManyRequests = true; // Aktifkan penanda hitung mundur
                break;
            case 'auth/network-request-failed':
                errorMsg = "Gagal menyambung ke server. Periksa koneksi internet kamu.";
                break;
            default:
                if(e.message && !e.code) {
                    errorMsg = e.message;
                } else {
                    errorMsg = "Error sistem: " + (e.code || e.message);
                }
        }
        
        showErr(errorMsg);

        // Logika Hitung Mundur Khusus
        if (isTooManyRequests) {
            const btn = document.getElementById('auth-submit-btn');
            btn.disabled = true; // Matikan tombol agar tidak bisa diklik
            let timeLeft = 30; // Mulai dari 30 detik
            
            const timerId = setInterval(() => {
                timeLeft--;
                btn.textContent = `TUNGGU ${timeLeft} DETIK`;
                
                if (timeLeft <= 0) {
                    clearInterval(timerId); // Hentikan timer
                    btn.disabled = false; // Nyalakan lagi tombolnya
                    btn.textContent = authMode === 'login' ? 'MASUK' : 'DAFTAR';
                    hideErr(); // Hapus pesan error merah setelah waktunya habis
                }
            }, 1000); // 1000 ms = 1 detik
        } else {
            // Jika error biasa (bukan too many requests), kembalikan tombol seperti semula
            setLoading(false); 
        }
    }
};
window.doResetPassword = async function() { const email = document.getElementById('auth-email').value.trim(); hideErr(); if (!email) { return showErr('Masukkan email kamu dulu di kolom atas untuk reset sandi.'); } setLoading(true); document.getElementById('auth-submit-btn').textContent = 'MENGIRIM...'; try { await withTimeout(sendPasswordResetEmail(auth, email), 3000, 'Pengiriman email terlalu lama / macet. Coba lagi.'); Swal.fire({ position: 'center', icon: 'success', title: 'Email Terkirim!', html: 'Cek <b>Inbox</b> atau folder <b>SPAM</b> email kamu.', showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } catch(e) { showErr(e.message); } setLoading(false); document.getElementById('auth-submit-btn').textContent = authMode === 'login' ? 'MASUK' : 'DAFTAR'; };
window.reqResetPasswordViaSettings = async function() { if (!currentUser) return; try { await sendPasswordResetEmail(auth, currentUser.email); Swal.fire({ position: 'center', icon: 'success', title: 'Terkirim!', html: `Link reset sandi telah dikirim ke <b>${currentUser.email}</b>`, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)' }); } catch(e) { Swal.fire('Gagal', e.message, 'error'); } };
window.clearLocalCache = function() { Swal.fire({ title: 'Bersihkan Cache?', text: "Data inti di cloud aman, hanya mereset preferensi hp ini.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' }).then((res) => { if (res.isConfirmed) { let tempLastUid = localStorage.getItem('last_uid_rhn'); localStorage.clear(); if (tempLastUid) localStorage.setItem('last_uid_rhn', tempLastUid); Swal.fire({ position: 'center', icon: 'success', title: 'Bersih!', showConfirmButton: false, timer: 800, background: 'var(--card)', color: 'var(--text)' }); setTimeout(() => location.reload(), 800); } }); };
window.deleteAllData = async function() { if (!currentUser) return; Swal.fire({ title: 'Verifikasi PIN Keamanan', text: 'Masukkan 6 digit PIN untuk format total akun:', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, autofocus: true, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;' }, icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'HAPUS SEMUA', background: 'var(--card)', color: 'var(--text)' }).then(async (res) => { if (res.isConfirmed) { if (res.value !== window.userCloudPin && res.value !== localStorage.getItem('local_pin_rhn')) return Swal.fire({icon: 'error', title: 'PIN Salah!', background:'var(--card)', color:'var(--text)'}); Swal.fire({title: 'Menghapus...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}}); try { await deleteCollectionInChunks(collection(db, 'users', currentUser.uid, 'transactions')); Swal.fire({icon: 'success', title: 'Data Diformat!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false}); } catch(e) { Swal.fire('Error', e.message, 'error'); } } }); };

window.manageCategories = async function() {
    const { value: type } = await Swal.fire({
        title: 'Pilih Tipe Kategori',
        input: 'select',
        inputOptions: { 'income': 'Pemasukan', 'expense': 'Pengeluaran', 'debt': 'Hutang', 'recv': 'Piutang' },
        background: 'var(--card)', color: 'var(--text)'
    });
    if (!type) return;

    let html = '<div style="text-align:left; max-height:50vh; overflow-y:auto; margin-bottom:12px;">';
    if(window.userCats[type]) {
        window.userCats[type].forEach((cat, idx) => {
            html += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:8px 12px; background:var(--bg2); border-radius:8px; border:1px solid var(--border);">
                        <span style="font-size:12px; font-weight:600;">${cat}</span>
                        <button onclick="delCategory('${type}', ${idx})" style="color:var(--red2); background:rgba(248,113,113,0.1); border:none; padding:4px 8px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:10px;">HAPUS</button>
                     </div>`;
        });
    }
    html += `</div>`;
    
    Swal.fire({
        title: `Kategori ${type.toUpperCase()}`,
        html: html,
        showDenyButton: true,
        confirmButtonText: 'Selesai / Tutup',
        denyButtonText: '+ Tambah Baru',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--bg3)', denyButtonColor: 'var(--gold)'
    }).then((res) => {
        if (res.isDenied) { promptAddCategory(type); }
    });
};

window.delCategory = async function(type, idx) {
    Swal.fire({ title: 'Hapus Kategori?', icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Hapus' }).then(async (res) => {
        if(res.isConfirmed) {
            window.userCats[type].splice(idx, 1);
            await savePreferencesData();
            manageCategories(); 
        }
    });
};

window.promptAddCategory = async function(type) {
    const { value: newCat } = await Swal.fire({
        title: 'Nama Kategori Baru', input: 'text',
        background: 'var(--card)', color: 'var(--text)'
    });
    if (newCat && newCat.trim() !== '') {
        if(!window.userCats[type]) window.userCats[type] = [];
        window.userCats[type].push(newCat.trim());
        await savePreferencesData();
        Swal.fire({icon:'success', title:'Ditambahkan', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
    }
    manageCategories();
};

window.manageRecurring = async function() {
    if(!currentUser) return;
    Swal.fire({title: 'Memuat Jadwal...', background:'var(--card)', color:'var(--text)', didOpen: () => Swal.showLoading()});
    try {
        const snap = await getDocs(collection(db, 'users', currentUser.uid, 'recurring_txs'));
        if(snap.empty) {
            return Swal.fire({icon:'info', title:'Kosong', text:'Belum ada jadwal transaksi rutin yang aktif.', background:'var(--card)', color:'var(--text)'});
        }
        let html = '<div style="max-height:60vh; overflow-y:auto; text-align:left;">';
        snap.forEach(d => {
            let r = d.data();
            let intv = r.interval === 'daily' ? 'Harian' : (r.interval === 'weekly' ? 'Mingguan' : 'Bulanan');
            html += `<div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg2);">
                <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(r.note)} (${r.category})</div>
                <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(r.amount)} | ${intv} | Jam: ${r.runTime || '09:00'}</div>
                <button onclick="stopRecurring('${d.id}')" style="width:100%; background:rgba(248, 113, 113, 0.1); color:var(--red2); border:1px solid var(--red2); padding:6px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer;">HENTIKAN JADWAL</button>
            </div>`;
        });
        html += '</div>';
        Swal.fire({title: 'Jadwal Rutin Aktif', html: html, showConfirmButton: false, background:'var(--card)', color:'var(--text)'});
    } catch(e) { Swal.fire('Error', e.message, 'error'); }
};

window.stopRecurring = function(id) {
    Swal.fire({ title: 'Hentikan Jadwal?', icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hentikan', background: 'var(--card)', color: 'var(--text)'}).then(async (res) => {
        if(res.isConfirmed) {
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => Swal.showLoading()});
            await deleteDoc(doc(db, 'users', currentUser.uid, 'recurring_txs', id));
            Swal.fire({icon:'success', title:'Dihentikan', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
            manageRecurring();
        }
    });
};

window.updatePrefCategories = function(resetCat = true) { 
    const selType = document.getElementById('pref-type').value; 
    const catDrop = document.getElementById('pref-cat'); 
    if (!catDrop) return; 
    catDrop.innerHTML = ''; 
    if (window.userCats[selType]) { 
        window.userCats[selType].forEach(c => { let opt = document.createElement('option'); opt.value = c; opt.textContent = c; catDrop.appendChild(opt); }); 
    } 
    if (!resetCat && appPrefs.category) { setTimeout(() => { catDrop.value = appPrefs.category; catDrop.dispatchEvent(new Event('change')); }, 10); } 
    if (!resetCat) { document.getElementById('pref-type').value = appPrefs.type || 'income'; document.getElementById('pref-type').dispatchEvent(new Event('change')); document.getElementById('pref-wallet').value = appPrefs.wallet || 'Kas Tunai'; document.getElementById('pref-wallet').dispatchEvent(new Event('change')); } 
};

window.savePreferencesData = async function() {
    if(!currentUser) return;
    try {
        await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { 
            categories: window.userCats,
            savingsGoals: window.savingsGoals
        }, { merge: true });
        selType(curType); 
    } catch(e) { console.error("Gagal simpan data custom", e); }
};

window.savePreferences = async function() { 
    if (!currentUser) return; 
    appPrefs = { type: document.getElementById('pref-type').value, category: document.getElementById('pref-cat').value, wallet: document.getElementById('pref-wallet').value }; 
    localStorage.setItem('rhn_prefs_' + currentUser.uid, JSON.stringify(appPrefs)); 
    try { await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { appPrefs: appPrefs }, { merge: true }); Swal.fire({position: 'center', icon: 'success', title: 'Tersimpan ke Cloud!', showConfirmButton: false, timer: 1000, background: 'var(--card)', color: 'var(--text)'}); } catch(e) { console.error("Gagal nyimpan preferensi ke cloud", e); } 
    selType(appPrefs.type); setTimeout(() => { if(document.getElementById('f-cat') && appPrefs.category) { document.getElementById('f-cat').value = appPrefs.category; document.getElementById('f-cat').dispatchEvent(new Event('change')); } if(document.getElementById('f-wallet') && appPrefs.wallet) { document.getElementById('f-wallet').value = appPrefs.wallet; document.getElementById('f-wallet').dispatchEvent(new Event('change')); } }, 10); 
};

window.saveExtraPrefs = async function() { 
    if (!currentUser || window.isAppLoading) return; 
    extraPrefs = { ext_autolock: document.getElementById('ext_autolock').value, ext_warnbalance: document.getElementById('ext_warnbalance').value, ext_shortnum: document.getElementById('ext_shortnum').value, ext_budget: document.getElementById('ext_budget').value, ext_hidezero: document.getElementById('ext_hidezero').value, ext_walletpct: document.getElementById('ext_walletpct').value, ext_debtbadge: document.getElementById('ext_debtbadge').value, ext_antiintip: document.getElementById('ext_antiintip').value, ext_autobackup: document.getElementById('ext_autobackup') ? document.getElementById('ext_autobackup').value : 'on' }; 
    localStorage.setItem('rhn_extra_prefs_v2_' + currentUser.uid, JSON.stringify(extraPrefs)); 
    try { await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { extraPrefs: extraPrefs }, { merge: true }); } catch(e) { console.error("Gagal nyimpan 7 fitur pengaturan ke cloud", e); } 
    if (extraPrefs.ext_antiintip === 'on') { document.body.classList.add('global-privacy'); } else { document.body.classList.remove('global-privacy'); } 
    if (window.resetIdle) window.resetIdle(); refreshAll(); 
};

window.changePinInApp = async function() { 
    if (!currentUser) return; 
    const { value: newPin } = await Swal.fire({ title: 'Ganti PIN Keamanan', text: 'Masukkan 6 angka PIN baru kamu', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN PIN BARU', showCancelButton: true, cancelButtonText: 'Batal', cancelButtonColor: 'var(--bg3)' }); 
    if (newPin && newPin.length === 6) { 
        try { 
            await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'security'), { pin: newPin }, { merge: true }); 
            window.userCloudPin = newPin; 
            localStorage.setItem('local_pin_rhn', newPin);
            Swal.fire({icon:'success', title:'PIN Berhasil Disimpan!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false}); 
        } catch(e) { Swal.fire({icon:'error', title:'Gagal mengubah PIN', text: e.message, background:'var(--card)', color:'var(--text)'}); } 
    } else if (newPin) { Swal.fire({icon:'warning', title:'Gagal, harus 6 digit!', background:'var(--card)', color:'var(--text)'}); } 
};

window.doLogout = function() { 
    Swal.fire({
        title: 'Keluar Akun?',
        text: "Apakah kamu yakin ingin keluar dari akun ini?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--red2)',
        cancelButtonColor: 'var(--bg3)',
        confirmButtonText: 'Ya, Keluar',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)'
    }).then(async (result) => {
        if (result.isConfirmed) {
            Swal.fire({title: 'Keluar...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            if (unsubListener) { unsubListener(); unsubListener = null; } 
            txs = []; deletedTxs = []; 
            
            localStorage.removeItem('last_uid_rhn'); 
            localStorage.removeItem('local_pin_rhn');
            window.appUnlocked = false; 
            window.userCloudPin = null; 
            
            await signOut(auth); 
            Swal.close();
        }
    });
};

onAuthStateChanged(auth, async user => {
  if (user) {
    currentUser = user; localStorage.setItem('last_uid_rhn', user.uid); 
    window.__isAdmin = (user.email === "rehantop245@gmail.com");
    document.getElementById('auth-screen').style.display = 'none'; // FIX: Pastikan halaman login tertutup sempurna
    document.getElementById('app-screen').style.display = 'none';
    document.getElementById('pin-screen').style.display = 'flex';
    document.getElementById('app-pin').style.display = 'block';
    if (!window.pinFocusInterval) window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
    const secRef = doc(db, 'users', user.uid, 'settings', 'security');
    try {
        const secSnap = await getDoc(secRef); 
        document.getElementById('app-pin').style.display = 'block';
        if (!secSnap.exists() || !secSnap.data().pin) { 
            if (!window.appUnlocked) {
                document.getElementById('app-screen').style.display = 'none'; 
                document.getElementById('pin-screen').style.display = 'flex'; 
                document.getElementById('pin-title').textContent = 'Buat PIN Baru'; 
                document.getElementById('pin-sub').textContent = 'Buat 6 digit PIN untuk akses cepat'; 
                document.getElementById('pin-submit-btn').textContent = 'SIMPAN PIN'; 
                window.pinMode = 'setup'; 
                window.userCloudPin = null; 
                setLoading(false); 
                if (!window.pinFocusInterval) window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
            }
        } else { 
            window.userCloudPin = secSnap.data().pin; 
            localStorage.setItem('local_pin_rhn', window.userCloudPin);
            if (!window.appUnlocked) {
                document.getElementById('app-screen').style.display = 'none'; 
                document.getElementById('pin-screen').style.display = 'flex'; 
                document.getElementById('pin-title').textContent = 'Masukkan PIN'; 
                document.getElementById('pin-sub').textContent = 'Keamanan aktif'; 
                document.getElementById('pin-submit-btn').textContent = 'BUKA APLIKASI'; 
                window.pinMode = 'verify'; 
                setLoading(false); 
                if (!window.pinFocusInterval) window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
            } else {
                unlockApp();
            }
        }
    } catch(err) { console.error(err); setLoading(false); }
    if(window.resetIdle) window.resetIdle();
    
    try {
        await setDoc(doc(db, 'users', user.uid), { email: user.email, nama: user.displayName || user.email.split('@')[0] }, { merge: true });
        const txRef = collection(db, 'users', user.uid, 'transactions');
        const txSnap = await getDocs(txRef);
        const promises = [];
        txSnap.forEach(d => { if (!d.data().ownerEmail) { promises.push(updateDoc(d.ref, { ownerEmail: user.email })); } });
        if (promises.length > 0) { await Promise.all(promises); }
    } catch(e) { console.error("Gagal sinkron email lama", e); }
    
    const adminEmail = "rehantop245@gmail.com"; 
    const isAdminUser = (user.email === adminEmail);
    window.__isAdmin = isAdminUser;
    if (isAdminUser) { document.getElementById('nav-admin').style.display = 'inline-block'; } else { document.getElementById('nav-admin').style.display = 'none'; }
    const adminSettingsGroupEl = document.getElementById('admin-settings-group');
    if (adminSettingsGroupEl) adminSettingsGroupEl.style.display = isAdminUser ? 'block' : 'none';

    try {
        const prefRef = doc(db, 'users', user.uid, 'settings', 'preferences'); const prefSnap = await getDoc(prefRef);
        if (prefSnap.exists()) { 
            const data = prefSnap.data(); 
            if (data.appPrefs) { appPrefs = data.appPrefs; localStorage.setItem('rhn_prefs_' + user.uid, JSON.stringify(appPrefs)); } 
            if (data.extraPrefs) { extraPrefs = data.extraPrefs; localStorage.setItem('rhn_extra_prefs_v2_' + user.uid, JSON.stringify(extraPrefs)); } 
            if (data.budgets) { window.userBudgets = data.budgets; } else { window.userBudgets = {}; }
            if (data.categories) { window.userCats = data.categories; } else { window.userCats = JSON.parse(JSON.stringify(window.defaultCATS)); }
            if (data.savingsGoals) { window.savingsGoals = data.savingsGoals; } else { window.savingsGoals = []; }
            if (data.userQrisBase) { window.userQrisBase = data.userQrisBase; } else { window.userQrisBase = ""; }
        } else { 
            const savedPrefs = localStorage.getItem('rhn_prefs_' + user.uid); if(savedPrefs) appPrefs = JSON.parse(savedPrefs); 
            const savedExtraPrefs = localStorage.getItem('rhn_extra_prefs_v2_' + user.uid); if(savedExtraPrefs) extraPrefs = JSON.parse(savedExtraPrefs); 
            window.userBudgets = {};
            window.userCats = JSON.parse(JSON.stringify(window.defaultCATS));
            window.savingsGoals = [];
            window.userQrisBase = "";
        }
    } catch(err) { console.error("Gagal sinkron data pengaturan", err); }

    try {
        const recSnap = await getDocs(collection(db, 'users', user.uid, 'recurring_txs'));
        const todayStr = nowISO().slice(0,10);
        const nowTimeStr = new Date().toTimeString().slice(0,5);
        
        recSnap.forEach(async (d) => {
            let rData = d.data();
            let shouldRun = false;
            
            if (rData.nextRun < todayStr) { shouldRun = true; } 
            else if (rData.nextRun === todayStr) { if (!rData.runTime || nowTimeStr >= rData.runTime) { shouldRun = true; } }

            if (shouldRun) {
                await addDoc(collection(db, 'users', user.uid, 'transactions'), {
                   type: rData.type, amount: rData.amount, category: rData.category, wallet: rData.wallet, walletTo: rData.walletTo || null, note: rData.note + ' (Auto-Rutin)', date: new Date().toISOString(), ownerEmail: user.email, createdAt: serverTimestamp(), isDeleted: false
                });
                
                let nextD = new Date();
                if(rData.interval === 'daily') nextD.setDate(nextD.getDate()+1);
                else if(rData.interval === 'weekly') nextD.setDate(nextD.getDate()+7);
                else if(rData.interval === 'monthly') nextD.setMonth(nextD.getMonth()+1);
                
                await updateDoc(d.ref, { nextRun: nextD.toISOString().slice(0,10) });
            }
        });
    } catch(err) { console.error("Gagal memproses transaksi rutin", err); }

    window.isAppLoading = true;
    ['ext_autolock', 'ext_warnbalance', 'ext_shortnum', 'ext_budget', 'ext_hidezero', 'ext_walletpct', 'ext_debtbadge', 'ext_antiintip', 'ext_autobackup'].forEach(id => { if (document.getElementById(id) && extraPrefs[id]) { document.getElementById(id).value = extraPrefs[id]; document.getElementById(id).dispatchEvent(new Event('change')); } });
    window.updateBackupInfoLabel();
    setTimeout(() => { window.checkAutoBackup(); }, 1500);
    if (extraPrefs.ext_antiintip === 'on') { document.body.classList.add('global-privacy'); } else { document.body.classList.remove('global-privacy'); }
    setTimeout(() => { window.updatePrefCategories(false); if (window.selType && appPrefs && appPrefs.type) { selType(appPrefs.type); } else { selType('income'); } }, 10);
    setTimeout(() => { window.isAppLoading = false; }, 300); 
    
    
  } else {
    currentUser = null; 
    localStorage.removeItem('last_uid_rhn'); 
    localStorage.removeItem('local_pin_rhn');
    window.appUnlocked = false;
    window.userCloudPin = null;

    document.getElementById('auth-screen').style.display = 'flex'; 
    document.getElementById('app-screen').style.display = 'none'; 
    document.getElementById('pin-screen').style.display = 'none';
    
    setLoading(false); 
    document.getElementById('auth-submit-btn').textContent = 'MASUK'; 

    if (unsubListener) { unsubListener(); unsubListener = null; } 
    txs = []; deletedTxs = [];
  }
});

window.verifyPin = async function() { 
    const pinInput = document.getElementById('app-pin').value; 
    const errEl = document.getElementById('pin-err'); 
    if (pinInput.length < 6) { errEl.textContent = 'PIN harus 6 digit.'; errEl.style.display = 'block'; return; } 
    errEl.style.display = 'none'; 

    if (window.pinMode === 'setup') { 
        document.getElementById('pin-submit-btn').textContent = 'MENYIMPAN...'; 
        try { 
            await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'security'), { pin: pinInput }, { merge: true }); 
            window.userCloudPin = pinInput; 
            localStorage.setItem('local_pin_rhn', pinInput);
            Swal.fire({position: 'center', icon: 'success', title: 'PIN Berhasil Dibuat!', showConfirmButton: false, timer: 1000, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'}); 
            window.appUnlocked = true;
            unlockApp(); 
        } catch(e) { 
            errEl.textContent = 'Gagal menyimpan PIN ke server.'; errEl.style.display = 'block'; 
            document.getElementById('pin-submit-btn').textContent = 'SIMPAN PIN'; 
        } 
    } else { 
        const uid = currentUser ? currentUser.uid : localStorage.getItem('last_uid_rhn'); 
        if (!uid) return; 
        
        const localPin = localStorage.getItem('local_pin_rhn');

        if (pinInput === localPin || pinInput === window.userCloudPin) { 
            window.appUnlocked = true;
            unlockApp(); 
        } else { 
            errEl.textContent = 'PIN Salah!'; errEl.style.display = 'block'; 
            document.getElementById('app-pin').value = ''; 
            document.getElementById('app-pin').classList.add('shake-error'); 
            setTimeout(() => document.getElementById('app-pin').classList.remove('shake-error'), 400); 
            if (navigator.vibrate) navigator.vibrate([30, 50, 30]); 
        } 
    } 
};

function unlockApp() { 
    if (window.pinFocusInterval) {
        clearInterval(window.pinFocusInterval);
        window.pinFocusInterval = null;
    }
    
    // FIX: Memastikan Auth Screen ikut dihide saat berhasil unlock PIN.
    document.getElementById('auth-screen').style.display = 'none'; 
    document.getElementById('pin-screen').style.display = 'none'; 
    document.getElementById('app-screen').style.display = 'block'; 
    setLoading(false); 
    
    if (currentUser) {
        const name = currentUser.displayName || currentUser.email.split('@')[0]; 
        document.getElementById('user-name').textContent = name; 
        
        const avatarEl = document.getElementById('user-avatar');
        if (avatarEl) {
            avatarEl.style.fontWeight = '800';
            avatarEl.style.fontSize = '16px';
            avatarEl.textContent = name.charAt(0).toUpperCase();
        }

        if (typeof window.initTransferAccount === 'function') { window.initTransferAccount(); } 
        if (typeof window.initBalanceRequests === 'function') { window.initBalanceRequests(); }
        if (window.__isAdmin && typeof window.loadAdminCSList === 'function') { window.loadAdminCSList(); }
        listenTransactions(currentUser.uid); 
        setTimeout(() => { window.checkAutoBackup(); window.updateBackupInfoLabel(); }, 1500);
    } else {
        document.getElementById('user-name').textContent = 'Memuat...';
    }

    document.getElementById('app-pin').value = ''; 
    if (window.resetIdle) window.resetIdle(); 
}

window.resetAccount = function() { Swal.fire({ title: 'Ganti Akun?', text: "Lu harus login Email lagi.", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Ganti' }).then((result) => { if (result.isConfirmed) { localStorage.removeItem('last_uid_rhn'); localStorage.removeItem('local_pin_rhn'); document.getElementById('app-pin').value = ''; window.appUnlocked = false; window.userCloudPin = null; doLogout(); } }); };
window.resetPinFromLogin = async function() { 
    const uid = currentUser ? currentUser.uid : localStorage.getItem('last_uid_rhn'); 
    if (!uid) { return Swal.fire({icon: 'error', title: 'Belum Login', text: 'Tunggu proses ke server sebentar', background: 'var(--card)', color: 'var(--text)'}); } 
    const { value: newPin } = await Swal.fire({ title: 'Reset PIN', text: 'Masukkan 6 angka PIN baru kamu', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN PIN BARU', showCancelButton: true, cancelButtonText: 'Batal', cancelButtonColor: 'var(--bg3)' }); 
    if (newPin && newPin.length === 6) { 
        try { 
            await setDoc(doc(db, 'users', uid, 'settings', 'security'), { pin: newPin }, { merge: true }); 
            window.userCloudPin = newPin; 
            localStorage.setItem('local_pin_rhn', newPin);
            Swal.fire({icon:'success', title:'PIN Berhasil Disimpan!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false}); 
            document.getElementById('app-pin').value = ''; 
        } catch(e) { Swal.fire({icon:'error', title:'Gagal mengubah PIN', text: e.message, background:'var(--card)', color:'var(--text)'}); } 
    } else if (newPin) { Swal.fire({icon:'warning', title:'Gagal, harus 6 digit!', background:'var(--card)', color:'var(--text)'}); } 
};

document.getElementById('app-pin').addEventListener('input', function(e) { this.value = this.value.replace(/[^0-9]/g, ''); if (this.value.length === 6) { window.verifyPin(); } });

window.loadAllUsersData = async function() {
  if (!currentUser) return;
  const adminSummaryContainer = document.getElementById('admin-summary');
  
  Swal.fire({
      title: 'Memuat Database...',
      html: 'Sedang menarik data seluruh pengguna.<br>Harap tunggu sebentar...',
      background: 'var(--card)', 
      color: 'var(--text)',
      heightAuto: false, 
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading() }
  });

  try {
    const txQuery = query(collectionGroup(db, 'transactions'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(txQuery);
    
    if (snap.empty) {
      if (adminSummaryContainer) adminSummaryContainer.innerHTML = '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Tidak ada data atau akses ditolak.</div>';
      Swal.fire({icon: 'info', title: 'Data Kosong', text: 'Tidak ada data ditemukan.', background: 'var(--card)', color: 'var(--text)'});
      return;
    }

    let allUsersTxs = snap.docs.map(d => {
      let data = d.data();
      let pathSegments = d.ref.path.split('/');
      let ownerUid = pathSegments.length > 2 ? pathSegments[1] : 'Unknown';
      return { id: d.id, ownerUid: ownerUid, ...data };
    });

    // ======================================================================
    // Paksa deteksi nama & email pemilik akun dari data transaksi itu sendiri
    // (fallback wajib jika dokumen profil users/{uid} tidak terbaca/tidak ada)
    // ======================================================================
    let emailByUid = {};
    allUsersTxs.forEach(t => {
        if (t.ownerEmail && !emailByUid[t.ownerUid]) emailByUid[t.ownerUid] = t.ownerEmail;
    });

    let uniqueUids = [...new Set(allUsersTxs.map(t => t.ownerUid))];
    let userInfos = {};
    
    for (let uid of uniqueUids) {
        if (uid === currentUser.uid) {
            userInfos[uid] = {
                email: currentUser.email,
                nama: currentUser.displayName || currentUser.email.split('@')[0]
            };
        } else {
            try {
                let uSnap = await getDoc(doc(db, 'users', uid));
                if (uSnap.exists()) {
                    let dUser = uSnap.data();
                    if (dUser.email) {
                        userInfos[uid] = {
                            email: dUser.email,
                            nama: dUser.nama || dUser.email.split('@')[0]
                        };
                    }
                }
            } catch(err) {}

            // Paksa fallback: jika profil users/{uid} tidak terbaca (mis. tertahan rules),
            // tetap paksa ambil email dari salah satu transaksi milik uid tersebut.
            if (!userInfos[uid] && emailByUid[uid]) {
                userInfos[uid] = {
                    email: emailByUid[uid],
                    nama: emailByUid[uid].split('@')[0]
                };
            }
        }
    }

    // ======================================================================
    // Ambil SEMUA profil user terdaftar di koleksi 'users' (termasuk yang
    // belum pernah membuat transaksi sama sekali), agar semua akun kelihatan
    // ======================================================================
    let allUserDocs = {};
    try {
        const usersSnap = await getDocs(collection(db, 'users'));
        usersSnap.forEach(d => { allUserDocs[d.id] = d.data(); });
    } catch (err) {}

    Object.keys(allUserDocs).forEach(uid => {
        if (!userInfos[uid] && allUserDocs[uid].email) {
            userInfos[uid] = { email: allUserDocs[uid].email, nama: allUserDocs[uid].nama || allUserDocs[uid].email.split('@')[0] };
        }
    });

    let allKnownUids = [...new Set([...uniqueUids, ...Object.keys(allUserDocs)])];

    // ======================================================================
    // Hitung Total Pemasukan, Pengeluaran & Saldo Bersih per User (Admin)
    // ======================================================================
    let userStats = {};
    allUsersTxs.forEach(t => {
        if (t.isDeleted) return;
        if (!userStats[t.ownerUid]) userStats[t.ownerUid] = { inc: 0, exp: 0, count: 0 };
        const s = userStats[t.ownerUid];
        s.count++;
        if (t.type === 'income') { s.inc += t.amount; }
        else if (t.type === 'expense') { s.exp += t.amount; }
        else if (t.type === 'debt') { if (!t.isPaid) { s.inc += t.amount; } else { s.inc += t.amount; s.exp += t.amount; } }
        else if (t.type === 'recv') { if (!t.isPaid) { s.exp += t.amount; } else { s.exp += t.amount; s.inc += t.amount; } }
    });

    // ======================================================================
    // Kelompokkan transaksi per akun (untuk fitur Detail Transaksi & Grafik Bulanan)
    // ======================================================================
    adminGrouped = {};
    adminUserLabels = {};
    allUsersTxs.forEach(t => {
        if (t.isDeleted) return;
        if (!adminGrouped[t.ownerUid]) adminGrouped[t.ownerUid] = [];
        adminGrouped[t.ownerUid].push(t);
    });

    // ======================================================================
    // Kelompokkan transaksi yang ADA DI SAMPAH (isDeleted:true) per akun,
    // supaya admin bisa memantau & mengendalikan sampah milik semua user
    // ======================================================================
    adminGroupedTrash = {};
    allUsersTxs.forEach(t => {
        if (!t.isDeleted) return;
        if (!adminGroupedTrash[t.ownerUid]) adminGroupedTrash[t.ownerUid] = [];
        adminGroupedTrash[t.ownerUid].push(t);
    });

    if (adminSummaryContainer) {
        let summaryHtml = allKnownUids.map(uid => {
            const s = userStats[uid] || { inc: 0, exp: 0, count: 0 };
            const bal = s.inc - s.exp;
            const fallbackInfo = userInfos[uid] || {};
            const finalEmail = fallbackInfo.email || emailByUid[uid];
            const finalNama = fallbackInfo.nama || (finalEmail ? finalEmail.split('@')[0] : null);
            let ownerLabel = finalEmail ? `${finalNama} (${finalEmail})` : `User-${uid.substring(0,6)} (Perlu Login Ulang)`;
            adminUserLabels[uid] = ownerLabel;
            if (!window.adminUserEmails) window.adminUserEmails = {};
            window.adminUserEmails[uid] = finalEmail || '';
            const isSelf = uid === currentUser.uid;
            return `
            <div class="m-card admin-user-card" style="border-color: var(--gold);">
                <div class="m-label" style="color:var(--gold);">👤 ${escapeHTML(ownerLabel)}</div>
                <div class="m-sub" style="margin-bottom:8px;">${s.count} transaksi</div>
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <div style="display:flex; justify-content:space-between; font-size:11px;">
                        <span style="color:var(--text3);">Pemasukan</span>
                        <span style="font-family:'JetBrains Mono', monospace; font-weight:700; color:var(--green2);">${fmtFull(s.inc)}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:11px;">
                        <span style="color:var(--text3);">Pengeluaran</span>
                        <span style="font-family:'JetBrains Mono', monospace; font-weight:700; color:var(--red2);">${fmtFull(s.exp)}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-top:4px; padding-top:4px; border-top:1px dashed var(--border2);">
                        <span style="color:var(--text2); font-weight:700;">Saldo Bersih</span>
                        <span style="font-family:'JetBrains Mono', monospace; font-weight:800; color:${bal >= 0 ? 'var(--text)' : 'var(--red2)'};">${fmtFull(bal)}</span>
                    </div>
                </div>
                <div class="admin-user-actions">
                    <button class="admin-detail-btn" onclick="showAdminDetail('${uid}','list')">📋 Detail Transaksi</button>
                    <button class="admin-detail-btn weekly" onclick="showAdminDetail('${uid}','weekly')">📅 Mingguan</button>
                    <button class="admin-detail-btn chart" onclick="showAdminDetail('${uid}','chart')">📊 Bulanan</button>
                    <button class="admin-detail-btn yearly" onclick="showAdminDetail('${uid}','yearly')">📈 Tahunan</button>
                    <button class="admin-detail-btn riwayat" onclick="showAdminDetail('${uid}','riwayat')">🕒 Riwayat</button>
                    <button class="admin-detail-btn" style="background:rgba(16,185,129,0.08); border:1px solid var(--green2); color:var(--green2);" onclick="showAdminWallet('${uid}')">💰 Isi Dompet</button>
                    <button class="admin-detail-btn danger" onclick="showAdminTrash('${uid}')">🗑️ Sampah (${(adminGroupedTrash[uid]||[]).length})</button>
                </div>
                ${!finalEmail ? `<div class="admin-user-actions" style="margin-top:8px;"><button class="admin-detail-btn fix" onclick="promptFixUserInfo('${uid}')" style="flex:1;">✏️ Lengkapi Nama &amp; Email User Ini</button></div>` : ''}
                ${isSelf
                    ? `<div style="margin-top:8px; font-size:9px; color:var(--text3); text-align:center; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">🔒 Akun Admin (Anda)</div>`
                    : `<div class="admin-user-actions" style="margin-top:8px;"><button class="admin-detail-btn danger" onclick="confirmDeleteUser('${uid}')" style="flex:1;">🗑️ Hapus Akun Ini</button></div>`
                }
            </div>`;
        }).join('');
        adminSummaryContainer.innerHTML = summaryHtml;
    }
    // ======================================================================
    // Akhir Perhitungan Total Pemasukan, Pengeluaran & Saldo Bersih per User
    // ======================================================================

    // Tutup panel detail jika sedang terbuka saat data dimuat ulang
    closeAdminDetail();

    Swal.fire({
        icon: 'success', 
        title: 'Data Ditemukan', 
        text: `Berhasil memuat ${allUsersTxs.length} transaksi.`, 
        background: 'var(--card)', color: 'var(--text)', 
        timer: 1500,
        showConfirmButton: false
    });

  } catch (error) {
    if (adminSummaryContainer) adminSummaryContainer.innerHTML = `<div style="padding:40px;text-align:center;color:var(--red2);font-size:12px;">Gagal memuat. Periksa status admin. Error: ${error.message}</div>`;
    Swal.fire({icon: 'error', title: 'Gagal', text: error.message, background: 'var(--card)', color: 'var(--text)'});
  }
};

// ==========================================================================
// ADMIN: Detail Transaksi per Akun & Grafik Bulanan per Akun (Tambahan Baru)
// ==========================================================================
function adminTxCard(t) {
    let icon = t.type === 'income' ? '↑' : t.type === 'expense' ? '↓' : t.type === 'debt' ? '💳' : t.type === 'transfer' ? '🔄' : '💸';
    let sign = (t.type === 'income' || t.type === 'recv') ? '+' : (t.type === 'transfer' ? '' : '-');
    if (t.type === 'debt') sign = '-'; if (t.type === 'recv') sign = '-';
    let walletBadge = t.wallet ? `<span class="wallet-badge">${escapeHTML(t.wallet)}</span>` : '';
    if (t.type === 'transfer') walletBadge = `<span class="wallet-badge">${escapeHTML(t.wallet || '-')} ➔ ${escapeHTML(t.walletTo || '-')}</span>`;
    let debtWarn = (t.type === 'debt' || t.type === 'recv') && !t.isPaid ? ` <span style="font-size:8px; font-weight:800; color:var(--red2);">· BELUM LUNAS</span>` : '';

    return `
    <div class="recent-item">
        <div class="ri-left">
            <div class="ri-icon ${t.type}">${icon}</div>
            <div>
                <div class="ri-note">${escapeHTML(t.note || '-')} <span class="cat-badge">${escapeHTML(t.category || '-')}</span>${walletBadge}</div>
                <div class="ri-meta">📅 ${fmtDate(t.date)} · ⏱️ ${fmtTime(t.date)}${debtWarn}</div>
            </div>
        </div>
        <div class="ri-right-wrap">
            <div class="ri-amounts-col">
                <div class="ri-amount ${t.type}">${sign}${fmtFull(t.amount)}</div>
                <div class="ri-usd">${getUSD(t.amount)}</div>
            </div>
        </div>
    </div>`;
}

function renderAdminPeriodList(filtered) {
    const listWrap = document.getElementById('admin-detail-list');
    if (!listWrap) return;
    const sorted = filtered.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    listWrap.innerHTML = sorted.length
        ? sorted.map(t => adminTxCard(t)).join('')
        : '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Tidak ada transaksi pada periode ini</div>';
}

function renderAdminSumGrid(arr) {
    const wrap = document.getElementById('admin-detail-sum');
    if (!wrap) return;
    const s = calcSum(arr || []);
    wrap.style.display = 'grid';
    wrap.innerHTML = `
    <div class="m-card inc"> <div class="m-label">PEMASUKAN</div> <div class="m-val">${fmt(s.inc)}</div> <div class="usd-pill">${getUSD(s.inc)}</div> </div>
    <div class="m-card exp"> <div class="m-label">PENGELUARAN</div> <div class="m-val">${fmt(s.exp)}</div> <div class="usd-pill">${getUSD(s.exp)}</div> </div>
    <div class="m-card bal"> <div class="m-label">SALDO BERSIH</div> <div class="m-val">${fmt(s.bal)}</div> <div class="usd-pill">${getUSD(s.bal)}</div> </div>`;
}
window.renderAdminSumGrid = renderAdminSumGrid;

function renderAdminPeriodChart(arr, granularity) {
    const map = {};
    arr.forEach(t => {
        if (!t.date) return;
        const d = new Date(t.date);
        if (isNaN(d.getTime())) return;
        let key, label;
        if (granularity === 'week') {
            const day = d.getDay();
            const diffToMonday = (day === 0 ? -6 : 1) - day;
            const monday = new Date(d);
            monday.setHours(0,0,0,0);
            monday.setDate(monday.getDate() + diffToMonday);
            const sunday = new Date(monday);
            sunday.setDate(monday.getDate() + 6);
            key = monday.getFullYear() + '-' + String(monday.getMonth()+1).padStart(2,'0') + '-' + String(monday.getDate()).padStart(2,'0');
            label = monday.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }) + ' - ' + sunday.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
        } else if (granularity === 'year') {
            key = String(d.getFullYear());
            label = key;
        } else {
            key = (t.date || '').slice(0, 7);
            label = new Date(key + '-01').toLocaleDateString('id-ID', { month: 'short', year: 'numeric' });
        }
        if (!key) return;
        if (!map[key]) map[key] = { inc: 0, exp: 0, label: label };
        if (t.type === 'income') { map[key].inc += t.amount; }
        else if (t.type === 'expense') { map[key].exp += t.amount; }
        else if (t.type === 'debt') { if (!t.isPaid) { map[key].inc += t.amount; } else { map[key].inc += t.amount; map[key].exp += t.amount; } }
        else if (t.type === 'recv') { if (!t.isPaid) { map[key].exp += t.amount; } else { map[key].exp += t.amount; map[key].inc += t.amount; } }
    });

    const keys = Object.keys(map).sort();
    const labels = keys.map(k => map[k].label);
    const incData = keys.map(k => map[k].inc);
    const expData = keys.map(k => map[k].exp);
    const periodText = granularity === 'week' ? 'per Minggu' : granularity === 'year' ? 'per Tahun' : 'per Bulan';

    const legendEl = document.getElementById('admin-detail-chart-legend');
    if (legendEl) {
        legendEl.innerHTML = keys.length
            ? `<div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan ${periodText}</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran ${periodText}</div>`
            : '';
    }

    mkChart('admin-user-chart', labels, incData, expData);
    renderAdminSumGrid(arr);
}

window.renderAdminYearlyChart = function(arr) {
    const sel = document.getElementById('admin-year-sel');
    const legendEl = document.getElementById('admin-detail-chart-legend');
    if (!sel) return;

    const yrs = [...new Set(arr.map(t => (t.date || '').slice(0,4)))].filter(Boolean).sort().reverse();

    if (!yrs.length) {
        sel.innerHTML = '';
        sel.style.display = 'none';
        if (legendEl) legendEl.innerHTML = '';
        if (charts['admin-user-chart']) { charts['admin-user-chart'].destroy(); delete charts['admin-user-chart']; }
        return;
    }

    sel.style.display = 'flex';
    if (!sel.dataset.active || !yrs.includes(sel.dataset.active)) sel.dataset.active = yrs[0];

    sel.innerHTML = yrs.map(y => `<button class="p-btn ${y === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('admin-year-sel').dataset.active='${y}'; window.__rafRun('admYear', () => renderAdminYearlyChart(window.__adminYearlyArr || []));">Tahun ${y}</button>`).join('');

    const activeY = sel.dataset.active;
    const filtered = arr.filter(t => (t.date || '').slice(0,4) === activeY);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
    let incD = Array(12).fill(0), expD = Array(12).fill(0);
    filtered.forEach(t => {
        let m = parseInt(t.date.slice(5,7)) - 1;
        if (m < 0 || m > 11) return;
        if (t.type === 'income') incD[m] += t.amount;
        if (t.type === 'expense') expD[m] += t.amount;
    });

    if (legendEl) {
        legendEl.innerHTML = `<div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan per Tahun</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran per Tahun</div>`;
    }

    mkChart('admin-user-chart', months, incD, expD, function(idx) {
        const key = 'month-' + idx;
        const cur = window.__chartFilters['adminYearly'];
        if (cur && cur.key === key) {
            window.__chartFilters['adminYearly'] = null;
        } else {
            window.__chartFilters['adminYearly'] = {
                key: key,
                label: months[idx] + ' ' + activeY,
                predicate: function(t) { return t.date && (parseInt(t.date.slice(5,7)) - 1) === idx; }
            };
        }
        window.renderAdminYearlyChart(window.__adminYearlyArr || []);
    });
    applyAdminChartFilterList('adminYearly', filtered, function() { renderAdminYearlyChart(window.__adminYearlyArr || []); });
    applyAdminChartFilterSum('adminYearly', filtered);
};

window.renderAdminMonthlyChart = function(arr) {
    const sel = document.getElementById('admin-month-sel');
    const legendEl = document.getElementById('admin-detail-chart-legend');
    if (!sel) return;

    const mths = [...new Set(arr.map(t => (t.date || '').slice(0,7)))].filter(Boolean).sort().reverse();

    if (!mths.length) {
        sel.innerHTML = '';
        sel.style.display = 'none';
        if (legendEl) legendEl.innerHTML = '';
        if (charts['admin-user-chart']) { charts['admin-user-chart'].destroy(); delete charts['admin-user-chart']; }
        return;
    }

    sel.style.display = 'flex';
    if (!sel.dataset.active || !mths.includes(sel.dataset.active)) sel.dataset.active = mths[0];

    sel.innerHTML = mths.map(m => `<button class="p-btn ${m === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('admin-month-sel').dataset.active='${m}'; window.__rafRun('admMonth', () => renderAdminMonthlyChart(window.__adminMonthlyArr || []));">${new Date(m+'-01').toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`).join('');

    const activeM = sel.dataset.active;
    const filtered = arr.filter(t => (t.date || '').slice(0,7) === activeM);

    let daysInM = new Date(activeM.slice(0,4), activeM.slice(5,7), 0).getDate();
    let labels = Array.from({length: daysInM}, (_, i) => i + 1);
    let incD = Array(daysInM).fill(0), expD = Array(daysInM).fill(0);
    filtered.forEach(t => {
        if (!t.date) return;
        let d = parseInt(t.date.slice(8,10)) - 1;
        if (d < 0 || d >= daysInM) return;
        if (t.type === 'income') { incD[d] += t.amount; }
        else if (t.type === 'expense') { expD[d] += t.amount; }
        else if (t.type === 'debt') { if (!t.isPaid) { incD[d] += t.amount; } else { incD[d] += t.amount; expD[d] += t.amount; } }
        else if (t.type === 'recv') { if (!t.isPaid) { expD[d] += t.amount; } else { expD[d] += t.amount; incD[d] += t.amount; } }
    });

    if (legendEl) {
        legendEl.innerHTML = `<div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan per Bulan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran per Bulan</div>`;
    }

    mkChart('admin-user-chart', labels, incD, expD, function(idx) {
        const dayNum = idx + 1;
        const key = 'day-' + dayNum;
        const cur = window.__chartFilters['adminMonthly'];
        if (cur && cur.key === key) {
            window.__chartFilters['adminMonthly'] = null;
        } else {
            window.__chartFilters['adminMonthly'] = {
                key: key,
                label: 'Tanggal ' + dayNum + ' ' + new Date(activeM + '-01').toLocaleDateString('id-ID', {month: 'long', year: 'numeric'}),
                predicate: function(t) { return t.date && parseInt(t.date.slice(8,10)) === dayNum; }
            };
        }
        window.renderAdminMonthlyChart(window.__adminMonthlyArr || []);
    });
    applyAdminChartFilterList('adminMonthly', filtered, function() { renderAdminMonthlyChart(window.__adminMonthlyArr || []); });
    applyAdminChartFilterSum('adminMonthly', filtered);
};

window.renderAdminWeeklyChart = function(arr) {
    const sel = document.getElementById('admin-week-sel');
    const legendEl = document.getElementById('admin-detail-chart-legend');
    if (!sel) return;

    const weeks = [...new Set(arr.map(t => wkKey(t.date)))].sort().reverse();

    if (!weeks.length) {
        sel.innerHTML = '';
        sel.style.display = 'none';
        if (legendEl) legendEl.innerHTML = '';
        if (charts['admin-user-chart']) { charts['admin-user-chart'].destroy(); delete charts['admin-user-chart']; }
        return;
    }

    sel.style.display = 'flex';
    if (!sel.dataset.active || !weeks.includes(sel.dataset.active)) sel.dataset.active = weeks[0];

    sel.innerHTML = weeks.map(w => `<button class="p-btn ${w === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('admin-week-sel').dataset.active='${w}'; window.__rafRun('admWeek', () => renderAdminWeeklyChart(window.__adminWeeklyArr || []));">Minggu ${fmtDate(w)}</button>`).join('');

    const targetWk = sel.dataset.active;
    const filtered = arr.filter(t => wkKey(t.date) === targetWk);

    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    let incD = [0,0,0,0,0,0,0], expD = [0,0,0,0,0,0,0];
    filtered.forEach(t => {
        if (!t.date) return;
        let d = new Date(t.date).getDay() - 1;
        if (d < 0) d = 6;
        if (t.type === 'income') { incD[d] += t.amount; }
        else if (t.type === 'expense') { expD[d] += t.amount; }
        else if (t.type === 'debt') { if (!t.isPaid) { incD[d] += t.amount; } else { incD[d] += t.amount; expD[d] += t.amount; } }
        else if (t.type === 'recv') { if (!t.isPaid) { expD[d] += t.amount; } else { expD[d] += t.amount; incD[d] += t.amount; } }
    });

    if (legendEl) {
        legendEl.innerHTML = `<div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan per Minggu</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran per Minggu</div>`;
    }

    mkChart('admin-user-chart', days, incD, expD, function(idx) {
        const key = 'day-' + idx;
        const cur = window.__chartFilters['adminWeekly'];
        if (cur && cur.key === key) {
            window.__chartFilters['adminWeekly'] = null;
        } else {
            window.__chartFilters['adminWeekly'] = {
                key: key,
                label: days[idx] + ', Minggu ' + fmtDate(targetWk),
                predicate: function(t) { let d = new Date(t.date).getDay() - 1; if (d < 0) d = 6; return d === idx; }
            };
        }
        window.renderAdminWeeklyChart(window.__adminWeeklyArr || []);
    });
    applyAdminChartFilterList('adminWeekly', filtered, function() { renderAdminWeeklyChart(window.__adminWeeklyArr || []); });
    applyAdminChartFilterSum('adminWeekly', filtered);
};

window.renderAdminRiwayatChart = function(arr) {
    const ysel = document.getElementById('admin-riwayat-year-sel');
    const legendEl = document.getElementById('admin-detail-chart-legend');
    if (!ysel) return;

    const yrs = [...new Set(arr.map(t => (t.date || '').slice(0,4)))].filter(Boolean).sort().reverse();

    if (!yrs.length) {
        ysel.innerHTML = '';
        ysel.style.display = 'none';
        if (legendEl) legendEl.innerHTML = '';
        if (charts['admin-user-chart']) { charts['admin-user-chart'].destroy(); delete charts['admin-user-chart']; }
        return;
    }

    ysel.style.display = 'flex';
    if (!ysel.dataset.active || !yrs.includes(ysel.dataset.active)) ysel.dataset.active = yrs[0];
    ysel.innerHTML = yrs.map(y => `<button class="p-btn ${y === ysel.dataset.active ? 'active' : ''}" onclick="document.getElementById('admin-riwayat-year-sel').dataset.active='${y}'; window.__rafRun('admRiwayat', () => renderAdminRiwayatChart(window.__adminRiwayatArr || []));">Tahun ${y}</button>`).join('');

    const activeYr = ysel.dataset.active;
    const yearData = arr.filter(t => (t.date || '').slice(0,4) === activeYr);

    const walletList = ['Kas Tunai', 'DANA', 'GoPay', 'ShopeePay', 'MT5 Trading', 'Bank'];
    const incWallet = {}; const expWallet = {};
    walletList.forEach(w => { incWallet[w] = 0; expWallet[w] = 0; });

    yearData.forEach(t => {
        const w = t.wallet; const wTo = t.walletTo;
        if (t.type === 'income') {
            if (incWallet.hasOwnProperty(w)) incWallet[w] += t.amount;
        } else if (t.type === 'expense') {
            if (expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
        } else if (t.type === 'transfer') {
            if (expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
            if (incWallet.hasOwnProperty(wTo)) incWallet[wTo] += t.amount;
        } else if (t.type === 'debt') {
            if (incWallet.hasOwnProperty(w)) incWallet[w] += t.amount;
            if (t.isPaid && expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
        } else if (t.type === 'recv') {
            if (expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
            if (t.isPaid && incWallet.hasOwnProperty(w)) incWallet[w] += t.amount;
        }
    });

    const labels = walletList;
    const incData = walletList.map(w => incWallet[w]);
    const expData = walletList.map(w => expWallet[w]);

    if (legendEl) {
        legendEl.innerHTML = '<div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan per Dompet ('+activeYr+')</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran per Dompet</div>';
    }

    mkChart('admin-user-chart', labels, incData, expData, function(idx, label, dsIdx) {
        const wallet = walletList[idx];
        const key = 'wallet-' + dsIdx + '-' + wallet;
        const cur = window.__chartFilters['adminRiwayat'];
        if (cur && cur.key === key) {
            window.__chartFilters['adminRiwayat'] = null;
        } else {
            window.__chartFilters['adminRiwayat'] = {
                key: key,
                label: (dsIdx === 0 ? 'Pemasukan' : 'Pengeluaran') + ' — ' + wallet + ' (' + activeYr + ')',
                predicate: function(t) {
                    if (dsIdx === 0) {
                        if (t.type === 'income' && t.wallet === wallet) return true;
                        if (t.type === 'transfer' && t.walletTo === wallet) return true;
                        if (t.type === 'debt' && t.wallet === wallet) return true;
                        return false;
                    } else {
                        if (t.type === 'expense' && t.wallet === wallet) return true;
                        if (t.type === 'transfer' && t.wallet === wallet) return true;
                        if (t.type === 'recv' && t.wallet === wallet) return true;
                        if (t.type === 'debt' && t.isPaid && t.wallet === wallet) return true;
                        return false;
                    }
                }
            };
        }
        window.renderAdminRiwayatChart(window.__adminRiwayatArr || []);
    });
    applyAdminChartFilterList('adminRiwayat', yearData, function() { renderAdminRiwayatChart(window.__adminRiwayatArr || []); });
    applyAdminChartFilterSum('adminRiwayat', yearData);
};

window.showAdminDetail = function(uid, mode) {
    window.__chartFilters['adminWeekly'] = null;
    window.__chartFilters['adminMonthly'] = null;
    window.__chartFilters['adminYearly'] = null;
    window.__chartFilters['adminRiwayat'] = null;
    const arr = (adminGrouped[uid] || []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    const label = adminUserLabels[uid] || `User-${uid.substring(0,6)}`;

    const section = document.getElementById('admin-detail-section');
    const title = document.getElementById('admin-detail-title');
    const sub = document.getElementById('admin-detail-sub');
    const chartWrap = document.getElementById('admin-detail-chart-wrap');
    const listWrap = document.getElementById('admin-detail-list');
    if (!section || !title || !sub || !chartWrap || !listWrap) return;

    section.style.display = 'block';

    if (mode === 'chart' || mode === 'weekly' || mode === 'yearly') {
        const titleMap = { chart: '📊 Grafik Bulanan — ', weekly: '📅 Grafik Mingguan — ', yearly: '📈 Grafik Tahunan — ' };
        const granMap = { chart: 'month', weekly: 'week', yearly: 'year' };
        title.innerHTML = titleMap[mode] + escapeHTML(label);
        sub.textContent = arr.length + ' transaksi tercatat pada akun ini.';
        chartWrap.style.display = 'block';
        listWrap.style.display = 'block';
        const ysel = document.getElementById('admin-riwayat-year-sel');
        if (ysel) { ysel.style.display = 'none'; ysel.innerHTML = ''; }
        if (mode === 'weekly') {
            const msel = document.getElementById('admin-month-sel');
            if (msel) { msel.style.display = 'none'; msel.innerHTML = ''; }
            const ysel2 = document.getElementById('admin-year-sel');
            if (ysel2) { ysel2.style.display = 'none'; ysel2.innerHTML = ''; }
            window.__adminWeeklyArr = arr;
            const wsel = document.getElementById('admin-week-sel');
            if (wsel) wsel.dataset.active = '';
            renderAdminWeeklyChart(arr);
        } else if (mode === 'chart') {
            const wsel = document.getElementById('admin-week-sel');
            if (wsel) { wsel.style.display = 'none'; wsel.innerHTML = ''; }
            const ysel2 = document.getElementById('admin-year-sel');
            if (ysel2) { ysel2.style.display = 'none'; ysel2.innerHTML = ''; }
            window.__adminMonthlyArr = arr;
            const msel = document.getElementById('admin-month-sel');
            if (msel) msel.dataset.active = '';
            renderAdminMonthlyChart(arr);
        } else if (mode === 'yearly') {
            const wsel = document.getElementById('admin-week-sel');
            if (wsel) { wsel.style.display = 'none'; wsel.innerHTML = ''; }
            const msel = document.getElementById('admin-month-sel');
            if (msel) { msel.style.display = 'none'; msel.innerHTML = ''; }
            window.__adminYearlyArr = arr;
            const ysel2 = document.getElementById('admin-year-sel');
            if (ysel2) ysel2.dataset.active = '';
            renderAdminYearlyChart(arr);
        } else {
            const wsel = document.getElementById('admin-week-sel');
            if (wsel) { wsel.style.display = 'none'; wsel.innerHTML = ''; }
            const msel = document.getElementById('admin-month-sel');
            if (msel) { msel.style.display = 'none'; msel.innerHTML = ''; }
            renderAdminPeriodChart(arr, granMap[mode]);
        }
    } else if (mode === 'riwayat') {
        title.innerHTML = '🕒 Riwayat — ' + escapeHTML(label);
        sub.textContent = arr.length + ' transaksi ditemukan, riwayat lengkap dari yang terbaru.';
        chartWrap.style.display = 'block';
        listWrap.style.display = 'block';
        const msel = document.getElementById('admin-month-sel');
        if (msel) { msel.style.display = 'none'; msel.innerHTML = ''; }
        const wsel = document.getElementById('admin-week-sel');
        if (wsel) { wsel.style.display = 'none'; wsel.innerHTML = ''; }
        const ysel2 = document.getElementById('admin-year-sel');
        if (ysel2) { ysel2.style.display = 'none'; ysel2.innerHTML = ''; }
        const ysel = document.getElementById('admin-riwayat-year-sel');
        if (ysel) ysel.dataset.active = '';
        window.__adminRiwayatArr = arr;
        renderAdminRiwayatChart(arr);
    } else {
        title.innerHTML = '📋 Detail Transaksi — ' + escapeHTML(label);
        sub.textContent = arr.length + ' transaksi ditemukan, diurutkan dari yang terbaru.';
        chartWrap.style.display = 'none';
        listWrap.style.display = 'block';
        listWrap.innerHTML = arr.length
            ? arr.map(t => adminTxCard(t)).join('')
            : '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Kosong</div>';
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.closeAdminDetail = function() {
    const section = document.getElementById('admin-detail-section');
    if (section) section.style.display = 'none';
    if (charts['admin-user-chart']) { charts['admin-user-chart'].destroy(); delete charts['admin-user-chart']; }
};

// ==========================================================================
// Hitung saldo per dompet dari sekumpulan transaksi (dipakai dashboard user
// sendiri maupun panel Admin untuk melihat "isi dompet" milik user lain)
// ==========================================================================
function computeWalletsFromArr(arr) {
    const wallets = { 'Kas Tunai': 0, 'DANA': 0, 'GoPay': 0, 'ShopeePay': 0, 'MT5 Trading': 0, 'Bank': 0 };
    let hutangBal = 0, piutangBal = 0, totalAset = 0;
    (arr || []).forEach(t => {
        if (t.isDeleted) return;
        let w = t.wallet || 'Kas Tunai'; let wTo = t.walletTo;
        if (w !== 'Hutang' && w !== 'Piutang' && !wallets.hasOwnProperty(w)) wallets[w] = 0;
        if (wTo && wTo !== 'Hutang' && wTo !== 'Piutang' && !wallets.hasOwnProperty(wTo)) wallets[wTo] = 0;
        if (t.type === 'income') { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; }
        else if (t.type === 'expense') { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; }
        else if (t.type === 'transfer') { if (w === 'Hutang') hutangBal -= t.amount; else if (w === 'Piutang') piutangBal += t.amount; else if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; if (wTo === 'Hutang') hutangBal += t.amount; else if (wTo === 'Piutang') piutangBal -= t.amount; else if (wTo && wallets.hasOwnProperty(wTo)) wallets[wTo] += t.amount; }
        else if (t.type === 'debt') { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; if (!t.isPaid) { hutangBal -= t.amount; } else { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; } }
        else if (t.type === 'recv') { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; if (!t.isPaid) { piutangBal -= t.amount; } else { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; } }
    });
    for (let key in wallets) { if (wallets[key] > 0) totalAset += wallets[key]; }
    return { wallets, hutangBal, piutangBal, totalAset };
}
window.computeWalletsFromArr = computeWalletsFromArr;

// ==========================================================================
// ADMIN: Lihat rincian isi dompet milik user lain
// ==========================================================================
window.showAdminWallet = function(uid) {
    const arr = adminGrouped[uid] || [];
    const label = adminUserLabels[uid] || `User-${uid.substring(0,6)}`;
    const { wallets, hutangBal, piutangBal, totalAset } = computeWalletsFromArr(arr);

    const section = document.getElementById('admin-detail-section');
    const title = document.getElementById('admin-detail-title');
    const sub = document.getElementById('admin-detail-sub');
    const chartWrap = document.getElementById('admin-detail-chart-wrap');
    const listWrap = document.getElementById('admin-detail-list');
    if (!section || !title || !sub || !chartWrap || !listWrap) return;

    section.style.display = 'block';
    title.innerHTML = '💰 Isi Dompet — ' + escapeHTML(label);
    sub.textContent = 'Rincian saldo tiap dompet milik akun ini.';
    chartWrap.style.display = 'none';

    let html = '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px,1fr)); gap:10px;">';
    Object.entries(wallets).forEach(([name, bal]) => {
        html += `<div class="w-card"><div class="w-label">${escapeHTML(name)}</div><div class="w-val ${bal < 0 ? 'min' : ''}">${fmtFull(bal)}</div></div>`;
    });
    html += `<div class="w-card" style="border-color:rgba(251,191,36,0.5); background:rgba(251,191,36,0.05);"><div class="w-label" style="color:var(--gold);">TOTAL HUTANG</div><div class="w-val min">${fmtFull(hutangBal)}</div></div>`;
    html += `<div class="w-card" style="border-color:rgba(59,130,246,0.5); background:rgba(59,130,246,0.05);"><div class="w-label" style="color:var(--blue);">TOTAL PIUTANG</div><div class="w-val min">${fmtFull(piutangBal)}</div></div>`;
    html += `<div class="w-card" style="border-color:rgba(16,185,129,0.5); background:rgba(16,185,129,0.05); grid-column:1 / -1;"><div class="w-label" style="color:var(--green2);">TOTAL ASET (SALDO POSITIF)</div><div class="w-val">${fmtFull(totalAset)}</div></div>`;
    html += '</div>';
    html += `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:16px;">
        <button onclick="window.adminAdjustBalance('${uid}','add')" style="background:rgba(16,185,129,0.15); color:var(--green2); border:1px solid var(--green2); padding:12px; border-radius:10px; font-size:11px; font-weight:800; cursor:pointer;">➕ TAMBAH SALDO USER</button>
        <button onclick="window.adminAdjustBalance('${uid}','subtract')" style="background:rgba(248,113,113,0.15); color:var(--red2); border:1px solid var(--red2); padding:12px; border-radius:10px; font-size:11px; font-weight:800; cursor:pointer;">➖ KURANGI SALDO USER</button>
    </div>`;
    listWrap.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ==========================================================================
// ADMIN: Tambah / kurangi saldo dompet milik user lain secara langsung
// (dicatat sebagai transaksi Penyesuaian Admin di akun user tersebut)
// ==========================================================================
window.adminAdjustBalance = async function(uid, mode) {
    const arr = adminGrouped[uid] || [];
    const label = adminUserLabels[uid] || `User-${uid.substring(0,6)}`;
    const { wallets } = computeWalletsFromArr(arr);
    let walletNames = Object.keys(wallets);
    if (!walletNames.length) walletNames = ['Kas Tunai', 'DANA', 'GoPay', 'ShopeePay', 'MT5 Trading', 'Bank'];
    const walletOpts = walletNames.map(w => `<option value="${w}">${w} (${fmtFull(wallets[w] || 0)})</option>`).join('');
    const isAdd = mode === 'add';

    const { value: formVals } = await Swal.fire({
        title: (isAdd ? '➕ Tambah Saldo — ' : '➖ Kurangi Saldo — ') + label,
        html: `
          <div style="text-align:left;">
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Dompet Tujuan</label>
            <select id="admin-adj-wallet" class="swal2-input" style="margin:4px 0 12px; width:100%;">${walletOpts}</select>
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Nominal</label>
            <input id="admin-adj-nominal" class="swal2-input" placeholder="Contoh: 100000" type="text" inputmode="numeric" style="margin:4px 0 12px; width:100%;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Catatan</label>
            <input id="admin-adj-note" class="swal2-input" placeholder="Contoh: Kompensasi / Koreksi Admin" style="margin:4px 0; width:100%;">
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: isAdd ? 'TAMBAH SEKARANG' : 'KURANGI SEKARANG',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: isAdd ? 'var(--green2)' : 'var(--red2)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            const wallet = document.getElementById('admin-adj-wallet').value;
            const nominal = parseFloat(document.getElementById('admin-adj-nominal').value) || 0;
            const note = document.getElementById('admin-adj-note').value.trim();
            if (nominal <= 0) { Swal.showValidationMessage('Nominal harus lebih dari 0!'); return false; }
            return { wallet, nominal, note };
        }
    });

    if (!formVals) return;

    Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const ownerEmail = (window.adminUserEmails && window.adminUserEmails[uid]) || '';
        await addDoc(collection(db, 'users', uid, 'transactions'), {
            type: isAdd ? 'income' : 'expense',
            amount: formVals.nominal,
            category: isAdd ? 'Penyesuaian Admin (Tambah)' : 'Penyesuaian Admin (Kurang)',
            wallet: formVals.wallet,
            note: formVals.note || (isAdd ? 'Tambah saldo oleh admin' : 'Kurangi saldo oleh admin'),
            date: new Date().toISOString(),
            ownerEmail: ownerEmail,
            createdAt: serverTimestamp(),
            isDeleted: false,
            adminAdjust: true,
            adjustedBy: currentUser.email
        });
        await window.loadAllUsersData();
        Swal.fire({icon:'success', title: isAdd ? 'Saldo Ditambahkan! ✅' : 'Saldo Dikurangi! ✅', text: fmtFull(formVals.nominal) + ' pada dompet ' + formVals.wallet + ' milik ' + label, background:'var(--card)', color:'var(--text)'});
        window.showAdminWallet(uid);
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Memproses', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

// ==========================================================================
// ADMIN: Lihat & kendalikan sampah (Recycle Bin) milik satu user tertentu.
// Admin bisa memulihkan langsung ke akun user yang tidak sengaja menghapus,
// atau menghapus permanen (dipindah dulu ke Arsip Admin agar tetap aman).
// ==========================================================================
window.showAdminTrash = function(uid) {
    const arr = (adminGroupedTrash[uid] || []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    const label = adminUserLabels[uid] || `User-${uid.substring(0,6)}`;

    const section = document.getElementById('admin-detail-section');
    const title = document.getElementById('admin-detail-title');
    const sub = document.getElementById('admin-detail-sub');
    const chartWrap = document.getElementById('admin-detail-chart-wrap');
    const listWrap = document.getElementById('admin-detail-list');
    if (!section || !title || !sub || !chartWrap || !listWrap) return;

    section.style.display = 'block';
    title.innerHTML = '🗑️ Sampah — ' + escapeHTML(label);
    sub.textContent = arr.length + ' transaksi ada di tempat sampah user ini.';
    chartWrap.style.display = 'none';

    if (!arr.length) {
        listWrap.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Sampah user ini kosong.</div>';
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    let html = `<div style="margin-bottom:12px;"><button onclick="adminEmptyTrash('${uid}')" style="width:100%; background:rgba(248,113,113,0.1); color:var(--red2); border:1px solid var(--red2); padding:10px; border-radius:8px; font-size:11px; font-weight:800; cursor:pointer;">🗑️ KOSONGKAN SEMUA SAMPAH USER INI</button></div>`;
    arr.forEach(t => {
        html += `
        <div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg);">
            <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(t.note || '-')} (${escapeHTML(t.category || '-')})</div>
            <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(t.amount)} | ${fmtDate(t.date)}</div>
            <div style="display:flex; gap:8px;">
                <button onclick="adminRestoreTx('${uid}','${t.id}')" style="background:rgba(16,185,129,0.2); color:var(--green2); border:1px solid var(--green2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">PULIHKAN KE USER</button>
                <button onclick="adminHardDeleteTx('${uid}','${t.id}')" style="background:rgba(248,113,113,0.2); color:var(--red2); border:1px solid var(--red2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">HAPUS PERMANEN</button>
            </div>
        </div>`;
    });
    listWrap.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.adminRestoreTx = async function(uid, id, reopenMode) {
    Swal.fire({title: 'Memulihkan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        await updateDoc(doc(db, 'users', uid, 'transactions', id), { isDeleted: false });
        await window.loadAllUsersData();
        Swal.fire({icon:'success', title:'Dipulihkan ke User', background:'var(--card)', color:'var(--text)', timer:1000, showConfirmButton:false});
        if (reopenMode === 'global') { setTimeout(() => window.showGlobalTrash(), 1100); } else { window.showAdminTrash(uid); }
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.adminHardDeleteTx = async function(uid, id, reopenMode) {
    const res = await Swal.fire({ title: 'Hapus Permanen?', text: "Data akan dipindah ke Arsip Admin (masih bisa dipulihkan lewat menu Arsip Terhapus Permanen).", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Hapus', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    Swal.fire({title: 'Menghapus...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const arr = adminGroupedTrash[uid] || [];
        const t = arr.find(x => x.id === id);
        const payload = t ? { ...t } : {};
        delete payload.id;
        payload.__ownerUid = uid;
        payload.__originalId = id;
        payload.__archivedAt = serverTimestamp();
        payload.__archivedBy = currentUser.email;
        await setDoc(doc(db, 'archived_deleted', uid + '_' + id), payload);
        await deleteDoc(doc(db, 'users', uid, 'transactions', id));
        await window.loadAllUsersData();
        Swal.fire({icon:'success', title:'Dipindah ke Arsip', background:'var(--card)', color:'var(--text)', timer:1000, showConfirmButton:false});
        if (reopenMode === 'global') { setTimeout(() => window.showGlobalTrash(), 1100); } else { window.showAdminTrash(uid); }
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.adminEmptyTrash = async function(uid) {
    const arr = adminGroupedTrash[uid] || [];
    if (!arr.length) return;
    const res = await Swal.fire({ title: 'Kosongkan Semua?', text: "Semua data sampah user ini akan dipindah ke Arsip Admin.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Kosongkan', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const CHUNK_SIZE = 150;
        for (let i = 0; i < arr.length; i += CHUNK_SIZE) {
            const chunk = arr.slice(i, i + CHUNK_SIZE);
            const batch = writeBatch(db);
            chunk.forEach(t => {
                const payload = { ...t };
                delete payload.id;
                payload.__ownerUid = uid;
                payload.__originalId = t.id;
                payload.__archivedAt = serverTimestamp();
                payload.__archivedBy = currentUser.email;
                batch.set(doc(db, 'archived_deleted', uid + '_' + t.id), payload);
                batch.delete(doc(db, 'users', uid, 'transactions', t.id));
            });
            await batch.commit();
        }
        await window.loadAllUsersData();
        Swal.fire({icon:'success', title:'Sampah Dikosongkan', background:'var(--card)', color:'var(--text)', timer:1000, showConfirmButton:false});
        window.closeAdminDetail();
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

// ==========================================================================
// ADMIN: Lihat & kendalikan sampah SEMUA USER sekaligus dalam satu daftar
// (bisa dibuka dari halaman Admin ataupun langsung dari menu Pengaturan)
// ==========================================================================
window.showGlobalTrash = async function() {
    if (Object.keys(adminGrouped).length === 0 && Object.keys(adminGroupedTrash).length === 0) {
        await window.loadAllUsersData();
    }
    const uids = Object.keys(adminGroupedTrash);
    let allTrash = [];
    uids.forEach(uid => { (adminGroupedTrash[uid] || []).forEach(t => allTrash.push({ ...t, __ownerUid: uid })); });
    allTrash.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!allTrash.length) return Swal.fire({icon:'info', title:'Sampah Kosong', text:'Tidak ada data terhapus dari user manapun.', background:'var(--card)', color:'var(--text)'});

    let html = `<div style="margin-bottom:12px;"><button onclick="adminEmptyAllTrash()" style="width:100%; background:rgba(248,113,113,0.1); color:var(--red2); border:1px solid var(--red2); padding:10px; border-radius:8px; font-size:11px; font-weight:800; cursor:pointer;">🗑️ KOSONGKAN SAMPAH SEMUA USER</button></div>`;
    html += '<div style="max-height:55vh; overflow-y:auto; text-align:left;">';
    allTrash.forEach(t => {
        const label = adminUserLabels[t.__ownerUid] || `User-${t.__ownerUid.substring(0,6)}`;
        html += `
        <div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg2);">
            <div style="font-size:9px; font-weight:800; color:var(--gold); text-transform:uppercase; margin-bottom:4px;">👤 ${escapeHTML(label)}</div>
            <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(t.note || '-')} (${escapeHTML(t.category || '-')})</div>
            <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(t.amount)} | ${fmtDate(t.date)}</div>
            <div style="display:flex; gap:8px;">
                <button onclick="adminRestoreTx('${t.__ownerUid}','${t.id}','global')" style="background:rgba(16,185,129,0.2); color:var(--green2); border:1px solid var(--green2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">PULIHKAN</button>
                <button onclick="adminHardDeleteTx('${t.__ownerUid}','${t.id}','global')" style="background:rgba(248,113,113,0.2); color:var(--red2); border:1px solid var(--red2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">HAPUS PERMANEN</button>
            </div>
        </div>`;
    });
    html += '</div>';
    Swal.fire({title: `🗑️ Sampah Semua User (${allTrash.length})`, html: html, showConfirmButton: false, background:'var(--card)', color:'var(--text)', width: 480});
};

window.adminEmptyAllTrash = async function() {
    const uids = Object.keys(adminGroupedTrash);
    let allTrash = [];
    uids.forEach(uid => { (adminGroupedTrash[uid] || []).forEach(t => allTrash.push({ ...t, __ownerUid: uid })); });
    if (!allTrash.length) return Swal.fire({icon:'info', title:'Sampah Kosong', background:'var(--card)', color:'var(--text)'});
    const res = await Swal.fire({ title: 'Kosongkan Sampah Semua User?', text: `${allTrash.length} data akan dipindah ke Arsip Admin.`, icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Kosongkan Semua', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const CHUNK_SIZE = 150;
        for (let i = 0; i < allTrash.length; i += CHUNK_SIZE) {
            const chunk = allTrash.slice(i, i + CHUNK_SIZE);
            const batch = writeBatch(db);
            chunk.forEach(t => {
                const payload = { ...t };
                delete payload.id;
                const ownerUid = payload.__ownerUid;
                delete payload.__ownerUid;
                payload.__ownerUid = ownerUid;
                payload.__originalId = t.id;
                payload.__archivedAt = serverTimestamp();
                payload.__archivedBy = currentUser.email;
                batch.set(doc(db, 'archived_deleted', ownerUid + '_' + t.id), payload);
                batch.delete(doc(db, 'users', ownerUid, 'transactions', t.id));
            });
            await batch.commit();
        }
        await window.loadAllUsersData();
        Swal.fire({icon:'success', title:'Semua Sampah Dikosongkan', background:'var(--card)', color:'var(--text)', timer:1200, showConfirmButton:false});
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

// ==========================================================================
// ADMIN: Arsip data yang sudah dihapus permanen dari sampah. Data DI SINI
// masih tersimpan aman & bisa dipulihkan kembali ke akun pemiliknya, atau
// dimusnahkan selamanya (baru benar-benar hilang setelah langkah ini).
// ==========================================================================
window.showAdminArchive = async function() {
    Swal.fire({title: 'Memuat Arsip...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const snap = await getDocs(collection(db, 'archived_deleted'));
        if (snap.empty) {
            return Swal.fire({icon:'info', title:'Arsip Kosong', text:'Belum ada data yang dimusnahkan permanen.', background:'var(--card)', color:'var(--text)'});
        }
        let items = snap.docs.map(d => ({ ...d.data(), __archiveId: d.id }));
        items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

        let html = `<div style="margin-bottom:12px;"><button onclick="adminEraseAllArchive()" style="width:100%; background:rgba(248,113,113,0.1); color:var(--red2); border:1px solid var(--red2); padding:10px; border-radius:8px; font-size:11px; font-weight:800; cursor:pointer;">🔥 MUSNAHKAN SELURUH ARSIP (TIDAK BISA DIBATALKAN)</button></div>`;
        html += '<div style="max-height:55vh; overflow-y:auto; text-align:left;">';
        items.forEach(t => {
            const ownerLabel = (adminUserLabels && adminUserLabels[t.__ownerUid]) || t.ownerEmail || `User-${(t.__ownerUid || '').substring(0,6)}`;
            html += `
            <div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg2);">
                <div style="font-size:9px; font-weight:800; color:var(--blue); text-transform:uppercase; margin-bottom:4px;">👤 ${escapeHTML(ownerLabel)}</div>
                <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(t.note || '-')} (${escapeHTML(t.category || '-')})</div>
                <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(t.amount || 0)} | ${t.date ? fmtDate(t.date) : '-'}</div>
                <div style="display:flex; gap:8px;">
                    <button onclick="adminRestoreFromArchive('${t.__archiveId}')" style="background:rgba(16,185,129,0.2); color:var(--green2); border:1px solid var(--green2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">PULIHKAN KE USER</button>
                    <button onclick="adminEraseArchive('${t.__archiveId}')" style="background:rgba(248,113,113,0.2); color:var(--red2); border:1px solid var(--red2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">MUSNAHKAN</button>
                </div>
            </div>`;
        });
        html += '</div>';
        Swal.fire({title: `🗄️ Arsip Terhapus Permanen (${items.length})`, html: html, showConfirmButton: false, background:'var(--card)', color:'var(--text)', width: 480});
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Memuat Arsip', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.adminRestoreFromArchive = async function(archiveId) {
    Swal.fire({title: 'Memulihkan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const ref = doc(db, 'archived_deleted', archiveId);
        const snap = await getDoc(ref);
        if (!snap.exists()) return Swal.fire({icon:'error', title:'Data Tidak Ditemukan', background:'var(--card)', color:'var(--text)'});
        const data = snap.data();
        const ownerUid = data.__ownerUid;
        const originalId = data.__originalId;
        const payload = { ...data };
        delete payload.__ownerUid; delete payload.__originalId; delete payload.__archivedAt; delete payload.__archivedBy;
        payload.isDeleted = false;
        await setDoc(doc(db, 'users', ownerUid, 'transactions', originalId), payload);
        await deleteDoc(ref);
        Swal.fire({icon:'success', title:'Dipulihkan ke User', background:'var(--card)', color:'var(--text)', timer:1200, showConfirmButton:false});
        setTimeout(() => window.showAdminArchive(), 1300);
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.adminEraseArchive = async function(archiveId) {
    const res = await Swal.fire({ title: 'Musnahkan Selamanya?', text: "Data ini akan hilang total dan tidak bisa dipulihkan lagi.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Musnahkan', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    Swal.fire({title: 'Memusnahkan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        await deleteDoc(doc(db, 'archived_deleted', archiveId));
        Swal.fire({icon:'success', title:'Dimusnahkan', background:'var(--card)', color:'var(--text)', timer:1000, showConfirmButton:false});
        setTimeout(() => window.showAdminArchive(), 1100);
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.adminEraseAllArchive = async function() {
    const res = await Swal.fire({ title: 'Musnahkan SELURUH Arsip?', text: "Semua data arsip akan hilang total selamanya.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Musnahkan Semua', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    Swal.fire({title: 'Memusnahkan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const snap = await getDocs(collection(db, 'archived_deleted'));
        const docs = snap.docs;
        const CHUNK_SIZE = 400;
        for (let i = 0; i < docs.length; i += CHUNK_SIZE) {
            const chunk = docs.slice(i, i + CHUNK_SIZE);
            const batch = writeBatch(db);
            chunk.forEach(d => batch.delete(d.ref));
            await batch.commit();
        }
        Swal.fire({icon:'success', title:'Arsip Bersih Total', background:'var(--card)', color:'var(--text)', timer:1000, showConfirmButton:false});
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

// ==========================================================================
// DOMPET SALDO — kartu gaya dompet digital di halaman Pengaturan, tiap user
// bisa mengirim saldo dompetnya ke user lain memakai Kode Transfer 3 Angka
// ==========================================================================
window.__saldoHidden = false;
function renderWalletTransferCard() {
    const wrap = document.getElementById('saldo-wallet-card-wrap');
    if (!wrap || !currentUser) return;
    const { totalAset } = computeWalletsFromArr(txs);
    const code = window.__myTransferCode || '···';
    const hidden = window.__saldoHidden;
    wrap.innerHTML = `
    <div class="saldo-wallet-card">
        <div class="saldo-wallet-top">
            <span class="saldo-wallet-tag">💳 RHN WALLET</span>
            <span class="saldo-wallet-eye" onclick="window.toggleSaldoVisibility()">${hidden ? '🙈' : '👁️'}</span>
        </div>
        <div class="saldo-wallet-label">Total Saldo Bisa Dikirim</div>
        <div class="saldo-wallet-amt">${hidden ? '••••••••' : fmtFull(totalAset)}</div>
        <div style="font-size:11px; font-weight:700; color:var(--text3); margin-top:2px; position:relative; z-index:1;">${hidden ? '••••' : (typeof getUSD === 'function' ? '≈ ' + getUSD(totalAset) : '')}</div>
        <div class="saldo-wallet-code">
            <div>
                <div style="font-size:9px; color:var(--text3); font-weight:700; text-transform:uppercase;">Kode Terima Kamu</div>
                <div style="font-size:16px; font-weight:800; color:var(--gold); letter-spacing:3px; font-family:'JetBrains Mono', monospace;">${escapeHTML(String(code))}</div>
            </div>
            <div style="font-size:9px; color:var(--text3); text-align:right; max-width:130px;">Bagikan kode ini agar user lain bisa kirim saldo ke kamu</div>
        </div>
        <div class="saldo-wallet-actions">
            <button class="saldo-wallet-btn send" onclick="window.promptSendSaldo()">🚀 <span>KIRIM</span></button>
            <button class="saldo-wallet-btn request" onclick="window.promptRequestSaldo()">📥 <span>MINTA SALDO</span></button>
            <button class="saldo-wallet-btn topup" onclick="document.getElementById('qris-generator-group').scrollIntoView({behavior:'smooth'})">➕ <span>ISI SALDO</span></button>
            <button class="saldo-wallet-btn receive" onclick="window.switchPage('riwayat')">🧾 <span>RIWAYAT</span></button>
        </div>
    </div>`;
}
window.renderWalletTransferCard = renderWalletTransferCard;

// ==========================================================================
// RIWAYAT TRANSAKSI WALLET — layar penuh (mirip halaman Riwayat, dipanggil
// dari tombol di halaman Wallet). Menampilkan semua transaksi, bisa difilter
// per dompet, memakai createTxCard/renderList yang sama dengan halaman Riwayat.
// ==========================================================================
window.openWalletHistoryScreen = function() {
    const screen = document.getElementById('wallet-hist-screen');
    if (!screen) return;
    screen.style.display = 'flex';

    // Isi dropdown filter dompet dari daftar dompet yang benar-benar ada di transaksi
    const sel = document.getElementById('wallet-hist-filter-select');
    if (sel) {
        const wallets = new Set();
        txs.forEach(t => { if (t.wallet) wallets.add(t.wallet); if (t.walletTo) wallets.add(t.walletTo); });
        const prevVal = sel.value;
        sel.innerHTML = '<option value="">Semua Dompet</option>' +
            [...wallets].sort().map(w => `<option value="${w}">${w}</option>`).join('');
        sel.value = [...wallets].includes(prevVal) ? prevVal : '';
    }

    window.renderWalletHistoryScreen(sel ? sel.value : '');
};

window.closeWalletHistoryScreen = function() {
    const screen = document.getElementById('wallet-hist-screen');
    if (screen) screen.style.display = 'none';
};

window.renderWalletHistoryScreen = function(walletFilter) {
    const body = document.getElementById('wallet-hist-body');
    if (!body) return;

    let filtered = txs.slice();
    if (walletFilter) {
        filtered = filtered.filter(t => t.wallet === walletFilter || t.walletTo === walletFilter);
    }
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    const sub = document.getElementById('wallet-hist-sub');
    if (sub) sub.textContent = walletFilter ? `Dompet: ${walletFilter} · ${filtered.length} transaksi` : `Semua dompet · ${filtered.length} transaksi`;

    renderList(body, filtered);
};

window.toggleSaldoVisibility = function() {
    window.__saldoHidden = !window.__saldoHidden;
    renderWalletTransferCard();
};

window.__closeSendModalAndScan = function() {
    Swal.close();
    setTimeout(() => window.openScanSend(), 250);
};

window.promptSendSaldo = async function() {
    if (!currentUser) return;
    const { wallets } = computeWalletsFromArr(txs);
    const walletOpts = Object.keys(wallets).map(w => `<option value="${w}">${w} (${fmtFull(wallets[w])})</option>`).join('');

    const { value: formVals } = await Swal.fire({
        title: '🚀 Kirim Saldo',
        html: `
          <div style="text-align:left;">
            <button type="button" onclick="window.__closeSendModalAndScan()" style="width:100%; background:var(--blue); color:#fff; border:none; padding:12px; border-radius:12px; font-weight:800; font-size:12px; font-family:'Outfit',sans-serif; cursor:pointer; margin-bottom:16px; display:flex; align-items:center; justify-content:center; gap:8px;">📷 SCAN BARCODE PERMINTAAN SALDO</button>
            <div style="text-align:center; font-size:9px; color:var(--text3); font-weight:800; text-transform:uppercase; margin:-8px 0 14px;">— atau isi manual —</div>
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Kirim Dari Dompet</label>
            <select id="saldo-src-wallet" class="swal2-input" style="margin:4px 0 12px; width:100%;">${walletOpts}</select>
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Kode Transfer Tujuan (3 Angka)</label>
            <input id="saldo-target-code" class="swal2-input" placeholder="Contoh: 482" maxlength="3" type="number" style="margin:4px 0 12px; text-align:center; letter-spacing:3px; font-weight:800; width:100%;">
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Nominal Saldo</label>
            <input id="saldo-nominal" class="swal2-input" placeholder="Contoh: 50000" type="text" inputmode="numeric" style="margin:4px 0; width:100%;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'LANJUT ➔',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            const src = document.getElementById('saldo-src-wallet').value;
            const code = document.getElementById('saldo-target-code').value;
            const nominal = parseFloat(document.getElementById('saldo-nominal').value) || 0;
            if (!code || code.length !== 3) { Swal.showValidationMessage('Kode transfer harus 3 angka!'); return false; }
            if (nominal <= 0) { Swal.showValidationMessage('Nominal harus lebih dari 0!'); return false; }
            return { src, code, nominal };
        }
    });

    if (!formVals) return;

    const { wallets: freshWallets } = computeWalletsFromArr(txs);
    if ((freshWallets[formVals.src] || 0) < formVals.nominal) {
        return Swal.fire({icon:'warning', title:'Saldo Tidak Cukup', text:`Saldo ${formVals.src} kamu cuma ${fmtFull(freshWallets[formVals.src] || 0)}.`, background:'var(--card)', color:'var(--text)'});
    }

    Swal.fire({title: 'Mencari Akun Tujuan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    let target;
    try {
        target = await window.lookupTransferTarget(formVals.code);
    } catch(e) {
        return Swal.fire({icon:'error', title:'Gagal Mencari Akun', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
    if (!target) {
        return Swal.fire({icon:'error', title:'Kode Tidak Ditemukan', text:'Pastikan akun tujuan sudah pernah membuka aplikasi ini.', background:'var(--card)', color:'var(--text)'});
    }
    if (target.uid === currentUser.uid) {
        return Swal.fire({icon:'warning', title:'Gagal', text:'Nggak bisa kirim saldo ke akun sendiri bro!', background:'var(--card)', color:'var(--text)'});
    }

    const res = await Swal.fire({
        title: 'Konfirmasi Kirim Saldo',
        html: `
          <div style="text-align:left; background:var(--bg2); border:1px solid var(--border); border-radius:12px; padding:16px;">
            <div style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase; margin-bottom:8px;">Saldo akan dikirim ke:</div>
            <div style="font-size:16px; font-weight:800; color:var(--gold); margin-bottom:4px;">${escapeHTML(target.nama)}</div>
            <div style="font-size:12px; color:var(--text2); font-family:'JetBrains Mono', monospace;">${escapeHTML(target.email)}</div>
            <div style="font-size:10px; color:var(--text3); margin-top:12px;">Dari: <b style="color:var(--text);">${escapeHTML(formVals.src)}</b> · Jumlah: <b style="color:var(--green2);">${fmtFull(formVals.nominal)}</b></div>
          </div>
          <div style="font-size:11px; color:var(--red2); margin-top:12px;">Pastikan nama & email di atas benar. Saldo akan langsung berkurang dari dompetmu.</div>
        `,
        showCancelButton: true,
        confirmButtonText: 'YA, KIRIM SEKARANG',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--green2)', cancelButtonColor: 'var(--bg3)'
    });

    if (res.isConfirmed) {
        await window.executeSaldoTransfer(formVals.src, formVals.nominal, target);
    }
};

window.executeSaldoTransfer = async function(srcWallet, nominal, target) {
    Swal.fire({title: 'Mengirim Saldo...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    try {
        const nowD = new Date().toISOString();
        const batch = writeBatch(db);
        const outRef = doc(collection(db, 'users', currentUser.uid, 'transactions'));
        batch.set(outRef, {
            type: 'expense', amount: nominal, category: 'Transfer Saldo Keluar', wallet: srcWallet,
            note: 'Kirim Saldo ke ' + target.nama, date: nowD, ownerEmail: currentUser.email,
            createdAt: serverTimestamp(), isDeleted: false
        });
        const inRef = doc(collection(db, 'users', target.uid, 'transactions'));
        batch.set(inRef, {
            type: 'income', amount: nominal, category: 'Transfer Saldo Masuk', wallet: 'Kas Tunai',
            note: 'Terima Saldo dari ' + (currentUser.displayName || currentUser.email.split('@')[0]), date: nowD,
            ownerEmail: target.email, createdAt: serverTimestamp(), isDeleted: false
        });
        await batch.commit();
        Swal.fire({icon:'success', title:'Saldo Terkirim! 🚀', text: fmtFull(nominal) + ' berhasil dikirim ke ' + target.nama, background:'var(--card)', color:'var(--text)'});
        renderWalletTransferCard();
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Kirim Saldo', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

// ==========================================================================
// MINTA SALDO — user bisa membuat permintaan saldo ke user lain memakai
// Kode Transfer 3 Angka. User tujuan akan melihatnya di halaman Dompet dan
// bisa menyetujui (saldo otomatis pindah) atau menolak permintaan tersebut.
// ==========================================================================
window.__unsubIncomingReq = null;
window.__unsubSentReq = null;

window.promptRequestSaldo = async function() {
    if (!currentUser) return;
    const { wallets } = computeWalletsFromArr(txs);
    const walletOpts = Object.keys(wallets).map(w => `<option value="${w}">${w}</option>`).join('');

    const { value: formVals } = await Swal.fire({
        title: '↓ Minta Saldo',
        html: `
          <div style="text-align:left;">
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Saldo Masuk Ke Dompet</label>
            <select id="req-my-wallet" class="swal2-input" style="margin:4px 0 12px; width:100%;">${walletOpts}</select>
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Catatan (Opsional)</label>
            <input id="req-note" class="swal2-input" placeholder="Contoh: Bayar utang kemarin" style="margin:4px 0; width:100%;">
            <div style="font-size:10px; color:var(--text3); margin-top:2px;">Tidak perlu kode transfer atau nominal — QR code langsung muncul, tinggal disodorkan/scan ke pengirim dan pengirim yang mengisi nominal saat kirim saldo.</div>
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'BUAT QR PERMINTAAN ➔',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            const myWallet = document.getElementById('req-my-wallet').value;
            const note = document.getElementById('req-note').value.trim();
            return { myWallet, note };
        }
    });

    if (!formVals) return;

    try {
        const reqRef = await addDoc(collection(db, 'balance_requests'), {
            fromUid: currentUser.uid,
            fromName: currentUser.displayName || currentUser.email.split('@')[0],
            fromEmail: currentUser.email,
            toUid: null,
            toName: null,
            toEmail: null,
            amount: null,
            myWallet: formVals.myWallet,
            note: formVals.note || '-',
            status: 'pending',
            createdAt: serverTimestamp(),
            createdAtLocal: new Date().toISOString()
        });
        window.showBarcodeRequest(reqRef.id, null, formVals.note);
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Mengirim Permintaan', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

// ==========================================================================
// BARCODE PERMINTAAN SALDO — tiap permintaan saldo punya QR unik (berisi ID
// permintaan) yang berubah setiap kali user membuat permintaan baru. Orang
// yang akan mengirim saldo cukup SCAN barcode ini lewat kamera, tanpa perlu
// mengetik kode transfer manual.
// ==========================================================================
window.__unsubBarcodeReq = null;
window.showBarcodeRequest = function(rid, amount, note) {
    const screen = document.getElementById('barcode-req-screen');
    if (!screen) return;
    const qrView = document.getElementById('barcode-req-qr-view');
    const successView = document.getElementById('barcode-req-success-view');
    if (qrView) qrView.style.display = 'flex';
    if (successView) successView.style.display = 'none';
    const headSub = document.getElementById('barcode-req-headsub');
    if (headSub) headSub.textContent = 'Minta orang lain scan barcode ini untuk mengirim saldo';
    const box = document.getElementById('barcode-req-qrcode');
    if (box) {
        box.innerHTML = '';
        try {
            new QRCode(box, {
                text: JSON.stringify({ t: 'saldo_req', rid: rid }),
                width: 220, height: 220,
                colorDark: '#000000', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M
            });
        } catch(e) {}
    }
    const amtLabelEl = document.getElementById('barcode-req-amt-label');
    const amtEl = document.getElementById('barcode-req-amt');
    if (amount) {
        if (amtLabelEl) amtLabelEl.textContent = 'Jumlah Diminta';
        if (amtEl) amtEl.textContent = fmtFull(amount);
    } else {
        if (amtLabelEl) amtLabelEl.textContent = 'Nominal';
        if (amtEl) amtEl.textContent = 'Diisi oleh pengirim';
    }
    const noteEl = document.getElementById('barcode-req-note');
    if (noteEl) noteEl.textContent = note ? ('📝 ' + note) : '';
    screen.style.display = 'flex';

    // Real-time: begitu pihak pengirim scan & permintaan disetujui, layar peminta
    // otomatis berubah jadi respon "Transaksi Berhasil" tanpa perlu refresh apa pun.
    if (window.__unsubBarcodeReq) { window.__unsubBarcodeReq(); window.__unsubBarcodeReq = null; }
    try {
        window.__unsubBarcodeReq = onSnapshot(doc(db, 'balance_requests', rid), snap => {
            if (!snap.exists()) return;
            const data = snap.data();
            if (data.status === 'approved') {
                if (qrView) qrView.style.display = 'none';
                if (successView) successView.style.display = 'flex';
                const successText = document.getElementById('barcode-req-success-text');
                if (successText) successText.textContent = `${fmtFull(amount || data.amount || 0)} berhasil diterima dari ${data.toName || 'pengirim'}.`;
                if (window.__unsubBarcodeReq) { window.__unsubBarcodeReq(); window.__unsubBarcodeReq = null; }
                if (typeof renderWalletTransferCard === 'function') renderWalletTransferCard();
            } else if (data.status === 'rejected') {
                if (qrView) qrView.style.display = 'none';
                if (successView) successView.style.display = 'flex';
                const successText = document.getElementById('barcode-req-success-text');
                const successBox = successView ? successView.querySelector('div') : null;
                if (successBox) { successBox.textContent = '❌'; successBox.style.background = 'rgba(248,113,113,0.15)'; }
                const titleEl = successView ? successView.children[1] : null;
                if (titleEl) { titleEl.textContent = 'Permintaan Ditolak'; titleEl.style.color = 'var(--red2)'; }
                if (successText) successText.textContent = `${data.toName || 'Pengirim'} menolak permintaan saldo ini.`;
                if (window.__unsubBarcodeReq) { window.__unsubBarcodeReq(); window.__unsubBarcodeReq = null; }
            }
        });
    } catch(e) {}
};

window.closeBarcodeRequest = function() {
    const screen = document.getElementById('barcode-req-screen');
    if (screen) screen.style.display = 'none';
    if (window.__unsubBarcodeReq) { window.__unsubBarcodeReq(); window.__unsubBarcodeReq = null; }
};

// ==========================================================================
// SCAN BARCODE UNTUK KIRIM SALDO — pihak yang membayar cukup scan barcode
// yang ditunjukkan peminta, sistem otomatis mencocokkan ke permintaan yang
// benar lalu melanjutkan ke alur persetujuan (approveBalanceRequest) yang
// sudah ada, jadi saldo langsung pindah seperti dompet digital biasa.
// ==========================================================================
window.__scanSendInstance = null;

window.openScanSend = function() {
    if (!currentUser) return;
    if (typeof Html5Qrcode === 'undefined') {
        return Swal.fire({icon:'error', title:'Kamera Tidak Tersedia', text:'Library scanner gagal dimuat, cek koneksi internet.', background:'var(--card)', color:'var(--text)'});
    }
    const screen = document.getElementById('scan-send-screen');
    const statusEl = document.getElementById('scan-send-status');
    if (screen) screen.style.display = 'flex';
    if (statusEl) statusEl.textContent = 'Menyiapkan kamera...';
    try {
        window.__scanSendInstance = new Html5Qrcode('scan-send-reader');
        window.__scanSendInstance.start(
            { facingMode: 'environment' },
            { fps: 10, qrbox: { width: 240, height: 240 } },
            async (decodedText) => {
                await window.__handleScanSendResult(decodedText);
            },
            () => {}
        ).then(() => { if (statusEl) statusEl.textContent = 'Arahkan kamera ke barcode permintaan saldo.'; })
         .catch(() => { if (statusEl) statusEl.textContent = 'Gagal mengakses kamera. Pastikan izin kamera diaktifkan.'; });
    } catch(e) {
        if (statusEl) statusEl.textContent = 'Gagal mengakses kamera.';
    }
};

window.__handleScanSendResult = async function(decodedText) {
    if (window.__scanSendBusy) return;
    window.__scanSendBusy = true;
    try {
        let payload;
        try { payload = JSON.parse(decodedText); } catch(e) { payload = null; }
        if (!payload || payload.t !== 'saldo_req' || !payload.rid) {
            const statusEl = document.getElementById('scan-send-status');
            if (statusEl) statusEl.textContent = 'Barcode tidak dikenali. Coba scan ulang.';
            window.__scanSendBusy = false;
            return;
        }
        window.closeScanSend();
        Swal.fire({title: 'Memeriksa Permintaan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
        const snap = await getDoc(doc(db, 'balance_requests', payload.rid));
        if (!snap.exists()) {
            window.__scanSendBusy = false;
            return Swal.fire({icon:'error', title:'Permintaan Tidak Ditemukan', text:'Barcode ini sudah tidak berlaku.', background:'var(--card)', color:'var(--text)'});
        }
        const r = { id: snap.id, ...snap.data() };
        if (r.fromUid === currentUser.uid) {
            window.__scanSendBusy = false;
            return Swal.fire({icon:'warning', title:'Tidak Bisa', text:'Nggak bisa menyetujui permintaan saldo buatan sendiri bro!', background:'var(--card)', color:'var(--text)'});
        }
        if (r.status !== 'pending') {
            window.__scanSendBusy = false;
            return Swal.fire({icon:'info', title:'Permintaan Sudah Diproses', text:'Status: ' + r.status, background:'var(--card)', color:'var(--text)'});
        }
        window.__incomingReqs = window.__incomingReqs || [];
        if (!window.__incomingReqs.find(x => x.id === r.id)) window.__incomingReqs.push(r);
        Swal.close();
        window.__scanSendBusy = false;
        await window.approveBalanceRequest(r.id);
    } catch(e) {
        window.__scanSendBusy = false;
        Swal.fire({icon:'error', title:'Gagal Memproses Barcode', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.closeScanSend = function() {
    const screen = document.getElementById('scan-send-screen');
    if (screen) screen.style.display = 'none';
    if (window.__scanSendInstance) {
        try {
            window.__scanSendInstance.stop().then(() => {
                try { window.__scanSendInstance.clear(); } catch(e) {}
                window.__scanSendInstance = null;
            }).catch(() => { window.__scanSendInstance = null; });
        } catch(e) { window.__scanSendInstance = null; }
    }
};

window.initBalanceRequests = function() {
    if (!currentUser) return;
    if (window.__unsubIncomingReq) { window.__unsubIncomingReq(); window.__unsubIncomingReq = null; }
    if (window.__unsubSentReq) { window.__unsubSentReq(); window.__unsubSentReq = null; }

    window.__incomingReqs = [];
    window.__sentReqs = [];

    try {
        window.__unsubIncomingReq = onSnapshot(
            query(collection(db, 'balance_requests'), where('toUid', '==', currentUser.uid), where('status', '==', 'pending')),
            snap => {
                window.__incomingReqs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                window.renderPendingRequests();
            }
        );
        window.__unsubSentReq = onSnapshot(
            query(collection(db, 'balance_requests'), where('fromUid', '==', currentUser.uid)),
            snap => {
                window.__sentReqs = snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.createdAtLocal || '').localeCompare(a.createdAtLocal || '')).slice(0, 20);
                window.renderSentRequests();
            }
        );
    } catch(e) { console.error('Gagal memuat permintaan saldo', e); }
};

window.renderPendingRequests = function() {
    const wrap = document.getElementById('wallet-pending-requests');
    if (!wrap) return;
    const arr = window.__incomingReqs || [];
    if (!arr.length) {
        wrap.innerHTML = '<div style="padding:16px; text-align:center; color:var(--text3); font-size:11px;">Tidak ada permintaan saldo masuk.</div>';
        return;
    }
    wrap.innerHTML = arr.map(r => `
        <div class="req-item">
            <div class="req-top">
                <div>
                    <div class="req-name">${escapeHTML(r.fromName || 'User')}</div>
                    <div style="font-size:9px; color:var(--text3);">${escapeHTML(r.fromEmail || '')}</div>
                </div>
                <div class="req-amt">${r.amount ? fmtFull(r.amount) : 'Nominal bebas'}</div>
            </div>
            <div class="req-note">📝 ${escapeHTML(r.note || '-')}</div>
            <div class="req-actions">
                <button class="req-btn ok" onclick="window.approveBalanceRequest('${r.id}')">✅ SETUJUI</button>
                <button class="req-btn no" onclick="window.rejectBalanceRequest('${r.id}')">✕ TOLAK</button>
            </div>
        </div>
    `).join('');
};

window.renderSentRequests = function() {
    const wrap = document.getElementById('wallet-sent-requests');
    if (!wrap) return;
    const arr = window.__sentReqs || [];
    if (!arr.length) {
        wrap.innerHTML = '<div style="padding:16px; text-align:center; color:var(--text3); font-size:11px;">Belum ada permintaan saldo yang kamu buat.</div>';
        return;
    }
    wrap.innerHTML = arr.map(r => `
        <div class="req-item">
            <div class="req-top">
                <div>
                    <div class="req-name">Ke: ${escapeHTML(r.toName || 'User')}</div>
                    <div style="font-size:9px; color:var(--text3);">${escapeHTML(r.toEmail || '')}</div>
                </div>
                <div class="req-amt">${r.amount ? fmtFull(r.amount) : 'Diisi pengirim'}</div>
            </div>
            <div class="req-note">📝 ${escapeHTML(r.note || '-')}</div>
            <span class="req-badge ${r.status}">${r.status === 'pending' ? 'MENUNGGU' : (r.status === 'approved' ? 'DISETUJUI' : 'DITOLAK')}</span>
            ${r.status === 'pending' ? `<button class="req-btn ok" style="margin-top:8px; width:100%;" onclick="window.showBarcodeRequest('${r.id}', ${r.amount ? Number(r.amount) : 'null'}, ${JSON.stringify(r.note||'').replace(/"/g,'&quot;')})">🎫 LIHAT BARCODE</button>` : ''}
        </div>
    `).join('');
};

window.approveBalanceRequest = async function(reqId) {
    const r = (window.__incomingReqs || []).find(x => x.id === reqId);
    if (!r) return;
    const { wallets } = computeWalletsFromArr(txs);
    const walletOpts = Object.keys(wallets).map(w => `<option value="${w}">${w} (${fmtFull(wallets[w])})</option>`).join('');
    const hasFixedAmount = !!r.amount;

    const { value: formVals } = await Swal.fire({
        title: 'Setujui Permintaan Saldo?',
        html: `
          <div style="text-align:left;">
            <div style="font-size:12px; color:var(--text2); margin-bottom:12px;">${hasFixedAmount ? `Kirim <b style="color:var(--gold);">${fmtFull(r.amount)}</b> ke <b>${escapeHTML(r.fromName)}</b>?` : `Kirim saldo ke <b>${escapeHTML(r.fromName)}</b>. Masukkan nominal yang mau kamu kirim.`}</div>
            ${hasFixedAmount ? '' : `
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Nominal Saldo</label>
            <input id="approve-nominal" class="swal2-input" placeholder="Contoh: 50000" type="text" inputmode="numeric" style="margin:4px 0 12px; width:100%;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
            `}
            <label style="font-size:10px; font-weight:800; color:var(--text3); text-transform:uppercase;">Bayar Dari Dompet</label>
            <select id="approve-src-wallet" class="swal2-input" style="margin:4px 0; width:100%;">${walletOpts}</select>
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'YA, SETUJUI & KIRIM',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--green2)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            const srcWallet = document.getElementById('approve-src-wallet').value;
            const nominal = hasFixedAmount ? r.amount : (parseFloat(document.getElementById('approve-nominal').value) || 0);
            if (!hasFixedAmount && nominal <= 0) { Swal.showValidationMessage('Nominal harus lebih dari 0!'); return false; }
            return { srcWallet, nominal };
        }
    });

    if (!formVals) return;
    const { srcWallet, nominal } = formVals;

    const { wallets: freshWallets } = computeWalletsFromArr(txs);
    if ((freshWallets[srcWallet] || 0) < nominal) {
        return Swal.fire({icon:'warning', title:'Saldo Tidak Cukup', text:`Saldo ${srcWallet} kamu cuma ${fmtFull(freshWallets[srcWallet] || 0)}.`, background:'var(--card)', color:'var(--text)'});
    }

    // Respon instan: langsung tampilkan hasil ke approver tanpa nunggu round-trip
    // server, lalu proses batch commit di background. Kalau ternyata gagal,
    // baru munculkan error menyusul.
    Swal.fire({icon:'success', title:'Permintaan Disetujui! ✅', text: fmtFull(nominal) + ' sedang dikirim ke ' + r.fromName, background:'var(--card)', color:'var(--text)', timer:1400, showConfirmButton:false});
    (async () => {
        try {
            const nowD = new Date().toISOString();
            const batch = writeBatch(db);
            const outRef = doc(collection(db, 'users', currentUser.uid, 'transactions'));
            batch.set(outRef, {
                type: 'expense', amount: nominal, category: 'Transfer Saldo Keluar', wallet: srcWallet,
                note: 'Setujui Permintaan Saldo dari ' + r.fromName, date: nowD, ownerEmail: currentUser.email,
                createdAt: serverTimestamp(), isDeleted: false
            });
            const inRef = doc(collection(db, 'users', r.fromUid, 'transactions'));
            batch.set(inRef, {
                type: 'income', amount: nominal, category: 'Transfer Saldo Masuk', wallet: r.myWallet || 'Kas Tunai',
                note: 'Permintaan Saldo Disetujui oleh ' + (currentUser.displayName || currentUser.email.split('@')[0]), date: nowD,
                ownerEmail: r.fromEmail, createdAt: serverTimestamp(), isDeleted: false
            });
            batch.update(doc(db, 'balance_requests', reqId), { status: 'approved', amount: nominal, toUid: currentUser.uid, toName: currentUser.displayName || currentUser.email.split('@')[0], toEmail: currentUser.email, approvedAt: serverTimestamp() });
            await batch.commit();
            renderWalletTransferCard();
        } catch(e) {
            Swal.fire({icon:'error', title:'Gagal Memproses', text: e.message, background:'var(--card)', color:'var(--text)'});
        }
    })();
};

window.rejectBalanceRequest = async function(reqId) {
    const res = await Swal.fire({ title: 'Tolak Permintaan Ini?', icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Tolak', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    // Respon instan: tampilkan konfirmasi ditolak langsung, proses update Firestore
    // di background supaya nggak kerasa lag di sisi yang menolak.
    Swal.fire({icon:'success', title:'Permintaan Ditolak', background:'var(--card)', color:'var(--text)', timer:1200, showConfirmButton:false});
    (async () => {
        try {
            await updateDoc(doc(db, 'balance_requests', reqId), { status: 'rejected', rejectedAt: serverTimestamp() });
        } catch(e) {
            Swal.fire({icon:'error', title:'Gagal', text: e.message, background:'var(--card)', color:'var(--text)'});
        }
    })();
};

// ==========================================================================
// CUSTOMER SERVICE CHAT — user bisa chat langsung ke admin dari halaman
// Dompet. Admin melihat semua percakapan masuk di halaman Admin dan bisa
// membalas real-time. Disimpan di collection 'support_chats/{uid}/messages'.
// ==========================================================================
window.__csActiveUid = null;
window.__csIsAdminView = false;
window.__unsubCSMessages = null;
window.__unsubCSList = null;

window.openCSChat = function() {
    if (!currentUser) return;
    window.__csActiveUid = currentUser.uid;
    window.__csIsAdminView = false;
    const titleEl = document.getElementById('cs-chat-title');
    const subEl = document.getElementById('cs-chat-sub');
    if (titleEl) titleEl.textContent = 'Customer Service';
    if (subEl) subEl.textContent = 'Admin biasanya balas cepat';
    document.getElementById('cs-chat-screen').style.display = 'flex';
    window.subscribeCSMessages(currentUser.uid);
    try {
        setDoc(doc(db, 'support_chats', currentUser.uid), {
            userUid: currentUser.uid,
            userName: currentUser.displayName || currentUser.email.split('@')[0],
            userEmail: currentUser.email,
            unreadForUser: false
        }, { merge: true });
    } catch(e) {}
};

window.openAdminCSChat = function(uid, name) {
    window.__csActiveUid = uid;
    window.__csIsAdminView = true;
    const titleEl = document.getElementById('cs-chat-title');
    const subEl = document.getElementById('cs-chat-sub');
    if (titleEl) titleEl.textContent = name || 'User';
    if (subEl) subEl.textContent = 'Chat sebagai Admin';
    document.getElementById('cs-chat-screen').style.display = 'flex';
    window.subscribeCSMessages(uid);
    try { setDoc(doc(db, 'support_chats', uid), { unreadForAdmin: false }, { merge: true }); } catch(e) {}
};

window.closeCSChat = function() {
    const screen = document.getElementById('cs-chat-screen');
    if (screen) screen.style.display = 'none';
    if (window.__unsubCSMessages) { window.__unsubCSMessages(); window.__unsubCSMessages = null; }
    const wasAdminView = window.__csIsAdminView;
    window.__csActiveUid = null;
    if (wasAdminView && typeof window.loadAdminCSList === 'function') window.loadAdminCSList();
};

window.subscribeCSMessages = function(uid) {
    if (window.__unsubCSMessages) { window.__unsubCSMessages(); window.__unsubCSMessages = null; }
    const body = document.getElementById('cs-chat-body');
    if (body) body.innerHTML = '<div style="text-align:center; color:var(--text3); font-size:11px; padding:20px;">Memuat pesan...</div>';
    try {
        window.__unsubCSMessages = onSnapshot(
            query(collection(db, 'support_chats', uid, 'messages'), orderBy('createdAtLocal', 'asc')),
            snap => { window.renderCSMessages(snap.docs.map(d => ({ id: d.id, ...d.data() }))); },
            () => { if (body) body.innerHTML = '<div style="text-align:center; color:var(--red2); font-size:11px; padding:20px;">Gagal memuat chat.</div>'; }
        );
    } catch(e) { if (body) body.innerHTML = '<div style="text-align:center; color:var(--red2); font-size:11px; padding:20px;">Gagal memuat chat.</div>'; }
};

window.renderCSMessages = function(msgs) {
    const body = document.getElementById('cs-chat-body');
    if (!body) return;
    if (!msgs.length) { body.innerHTML = '<div style="text-align:center; color:var(--text3); font-size:11px; padding:20px;">Belum ada pesan. Mulai chat sekarang!</div>'; return; }
    const isAdminView = window.__csIsAdminView;
    body.innerHTML = msgs.map(m => {
        const mine = isAdminView ? (m.sender === 'admin') : (m.sender === 'user');
        const timeStr = m.createdAtLocal ? fmtTime(m.createdAtLocal) : '';
        const canDelete = isAdminView || mine;
        const delBtn = canDelete && m.id ? `<span class="cs-msg-del" onclick="event.stopPropagation(); window.deleteCSMessage('${m.id}')" title="Hapus pesan">✕</span>` : '';
        return `<div class="cs-bubble ${mine ? 'me' : 'them'}">${delBtn}${escapeHTML(m.text || '')}<span class="cs-time">${timeStr}</span></div>`;
    }).join('');
    body.scrollTop = body.scrollHeight;
};

window.deleteCSMessage = async function(msgId) {
    if (!window.__csActiveUid || !msgId) return;
    const res = await Swal.fire({ title: 'Hapus Pesan Ini?', text: 'Pesan akan dihapus permanen.', icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hapus', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    try {
        await deleteDoc(doc(db, 'support_chats', window.__csActiveUid, 'messages', msgId));
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Menghapus Pesan', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.deleteCSConversation = async function() {
    if (!window.__csActiveUid) return;
    const res = await Swal.fire({ title: 'Hapus Seluruh Percakapan?', text: 'Semua pesan di chat ini akan dihapus permanen dan tidak bisa dikembalikan.', icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hapus Semua', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' });
    if (!res.isConfirmed) return;
    try {
        Swal.fire({ title: 'Menghapus...', allowOutsideClick: false, background:'var(--card)', color:'var(--text)', didOpen: () => Swal.showLoading() });
        const uid = window.__csActiveUid;
        const msgSnap = await getDocs(collection(db, 'support_chats', uid, 'messages'));
        const ids = msgSnap.docs.map(d => d.id);
        for (let i = 0; i < ids.length; i += 400) {
            const batch = writeBatch(db);
            ids.slice(i, i + 400).forEach(id => batch.delete(doc(db, 'support_chats', uid, 'messages', id)));
            await batch.commit();
        }
        await setDoc(doc(db, 'support_chats', uid), { lastMessage: '', unreadForAdmin: false, unreadForUser: false }, { merge: true });
        Swal.close();
        Swal.fire({icon:'success', title:'Percakapan Dihapus', background:'var(--card)', color:'var(--text)', timer:1200, showConfirmButton:false});
        if (window.__csIsAdminView && typeof window.loadAdminCSList === 'function') window.loadAdminCSList();
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Menghapus Percakapan', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.sendCSMessage = async function() {
    const input = document.getElementById('cs-chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text || !window.__csActiveUid || !currentUser) return;
    input.value = '';
    const sender = window.__csIsAdminView ? 'admin' : 'user';
    const nowIso = new Date().toISOString();
    try {
        await addDoc(collection(db, 'support_chats', window.__csActiveUid, 'messages'), {
            sender, text, createdAt: serverTimestamp(), createdAtLocal: nowIso,
            senderName: currentUser.displayName || currentUser.email.split('@')[0]
        });
        const metaPayload = { lastMessage: text, lastMessageAt: serverTimestamp(), lastMessageAtLocal: nowIso, lastSender: sender };
        if (sender === 'user') {
            metaPayload.userUid = currentUser.uid;
            metaPayload.userName = currentUser.displayName || currentUser.email.split('@')[0];
            metaPayload.userEmail = currentUser.email;
            metaPayload.unreadForAdmin = true;
        } else {
            metaPayload.unreadForUser = true;
        }
        await setDoc(doc(db, 'support_chats', window.__csActiveUid), metaPayload, { merge: true });
    } catch(e) {
        Swal.fire({icon:'error', title:'Gagal Mengirim Pesan', text: e.message, background:'var(--card)', color:'var(--text)'});
    }
};

window.loadAdminCSList = function() {
    if (window.__unsubCSList) { window.__unsubCSList(); window.__unsubCSList = null; }
    const wrap = document.getElementById('admin-cs-list');
    if (!wrap) return;
    try {
        window.__unsubCSList = onSnapshot(collection(db, 'support_chats'), snap => {
            let arr = snap.docs.map(d => ({ uid: d.id, ...d.data() })).filter(x => x.lastMessage);
            arr.sort((a, b) => (b.lastMessageAtLocal || '').localeCompare(a.lastMessageAtLocal || ''));
            if (!arr.length) { wrap.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text3); font-size:11px;">Belum ada chat dari user.</div>'; return; }
            wrap.innerHTML = arr.map(c => {
                const name = c.userName || 'User';
                const initial = name.charAt(0).toUpperCase();
                const unread = !!c.unreadForAdmin;
                const safeName = String(name).replace(/'/g, "\\'").replace(/"/g, '&quot;');
                return `<div class="cs-list-item" onclick="window.openAdminCSChat('${c.uid}', '${safeName}')">
                    <div class="cs-list-avatar">${escapeHTML(initial)}</div>
                    <div class="cs-list-info">
                        <div class="cs-list-name">${escapeHTML(name)}</div>
                        <div class="cs-list-last">${c.lastSender === 'admin' ? 'Anda: ' : ''}${escapeHTML(c.lastMessage || '')}</div>
                    </div>
                    ${unread ? '<div class="cs-unread-dot"></div>' : ''}
                </div>`;
            }).join('');
        }, () => { wrap.innerHTML = '<div style="padding:24px; text-align:center; color:var(--red2); font-size:11px;">Gagal memuat daftar chat.</div>'; });
    } catch(e) { wrap.innerHTML = '<div style="padding:24px; text-align:center; color:var(--red2); font-size:11px;">Gagal memuat daftar chat.</div>'; }
};

window.promptFixUserInfo = async function(uid) {
    const { value: formValues } = await Swal.fire({
        title: 'Lengkapi Info User',
        html: `
            <div style="text-align:left; font-size:11px; color:var(--text3); margin-bottom:12px;">
                Akun ini belum punya data email tersimpan di database (belum pernah login ulang sejak fitur sinkronisasi aktif).
                Isi manual nama &amp; email pemilik UID <b>${escapeHTML(uid)}</b> di bawah ini.
            </div>
            <input id="fix-nama" class="swal2-input" placeholder="Nama Pengguna" style="margin-bottom:8px;">
            <input id="fix-email" class="swal2-input" type="email" placeholder="Email Pengguna (gmail dsb)">
        `,
        background: 'var(--card)',
        color: 'var(--text)',
        showCancelButton: true,
        confirmButtonText: 'SIMPAN',
        confirmButtonColor: 'var(--green2)',
        cancelButtonText: 'BATAL',
        focusConfirm: false,
        preConfirm: () => {
            const nama = document.getElementById('fix-nama').value.trim();
            const email = document.getElementById('fix-email').value.trim();
            if (!email || !email.includes('@')) {
                Swal.showValidationMessage('Email tidak valid.');
                return false;
            }
            return { nama: nama || email.split('@')[0], email };
        }
    });

    if (!formValues) return;

    Swal.fire({
        title: 'Menyimpan...',
        background: 'var(--card)', color: 'var(--text)',
        heightAuto: false, allowOutsideClick: false,
        didOpen: () => { Swal.showLoading() }
    });

    try {
        // Simpan profil user secara permanen ke koleksi 'users'
        await setDoc(doc(db, 'users', uid), { email: formValues.email, nama: formValues.nama }, { merge: true });

        // Backfill juga ke seluruh transaksi milik uid ini supaya konsisten di daftar gabungan
        const txSnap = await getDocs(collection(db, 'users', uid, 'transactions'));
        const batch = writeBatch(db);
        let count = 0;
        txSnap.forEach(d => {
            if (d.data().ownerEmail !== formValues.email) {
                batch.update(d.ref, { ownerEmail: formValues.email });
                count++;
            }
        });
        if (count > 0) await batch.commit();

        Swal.fire({ icon: 'success', title: 'Berhasil Disimpan!', text: 'Data user telah diperbarui.', background: 'var(--card)', color: 'var(--text)', timer: 1500, showConfirmButton: false });

        await loadAllUsersData();
    } catch (e) {
        Swal.fire({ icon: 'error', title: 'Gagal Menyimpan', text: e.message, background: 'var(--card)', color: 'var(--text)' });
    }
};

// ==========================================================================
// ADMIN: Hapus Akun User Langsung dari Panel (Tanpa Buka Firebase Console)
// ==========================================================================
async function deleteCollectionInChunks(colRef) {
    const snap = await getDocs(colRef);
    const docs = snap.docs;
    const CHUNK_SIZE = 400;
    for (let i = 0; i < docs.length; i += CHUNK_SIZE) {
        const chunk = docs.slice(i, i + CHUNK_SIZE);
        const batch = writeBatch(db);
        chunk.forEach(d => batch.delete(d.ref));
        await batch.commit();
    }
    return docs.length;
}

window.confirmDeleteUser = async function(uid) {
    if (!currentUser) return;
    if (uid === currentUser.uid) {
        return Swal.fire({ icon: 'warning', title: 'Tidak Bisa', text: 'Akun admin (Anda) tidak bisa dihapus dari sini.', background: 'var(--card)', color: 'var(--text)' });
    }

    const label = adminUserLabels[uid] || `User-${uid.substring(0,6)}`;
    const s = (adminGrouped[uid] || []).length;

    const { value: typedConfirm } = await Swal.fire({
        title: '⚠️ Hapus Akun Ini?',
        html: `
            <div style="text-align:left; font-size:12px; color:var(--text2); line-height:1.6;">
                Akun: <b style="color:var(--gold);">${escapeHTML(label)}</b><br>
                Jumlah transaksi: <b>${s}</b><br><br>
                Tindakan ini akan <b style="color:var(--red2);">menghapus permanen</b>:
                <ul style="margin:8px 0 8px 18px; padding:0;">
                    <li>Seluruh transaksi akun ini</li>
                    <li>Seluruh transaksi rutin (recurring)</li>
                    <li>Pengaturan (preferensi, keamanan, transfer)</li>
                    <li>Profil akun (nama &amp; email tersimpan)</li>
                </ul>
                Data <b>tidak bisa dikembalikan</b>. Ketik <b>HAPUS</b> di bawah untuk konfirmasi.
            </div>
            <input id="del-confirm-input" class="swal2-input" placeholder="Ketik HAPUS" style="text-align:center; text-transform:uppercase; font-weight:800; letter-spacing:normal; max-width:100%; width:80%; margin:0 auto; display:block; box-sizing:border-box;">
        `,
        icon: 'warning',
        background: 'var(--card)',
        color: 'var(--text)',
        showCancelButton: true,
        confirmButtonText: 'HAPUS PERMANEN',
        confirmButtonColor: 'var(--red2)',
        cancelButtonText: 'BATAL',
        heightAuto: false,
        focusConfirm: false,
        preConfirm: () => {
            const val = document.getElementById('del-confirm-input').value.trim().toUpperCase();
            if (val !== 'HAPUS') {
                Swal.showValidationMessage('Ketik HAPUS (huruf besar) untuk konfirmasi.');
                return false;
            }
            return true;
        }
    });

    if (!typedConfirm) return;

    Swal.fire({
        title: 'Menghapus Akun...',
        html: 'Sedang menghapus seluruh data akun ini.<br>Jangan tutup halaman ini.',
        background: 'var(--card)', color: 'var(--text)',
        heightAuto: false, allowOutsideClick: false,
        didOpen: () => { Swal.showLoading() }
    });

    try {
        await deleteCollectionInChunks(collection(db, 'users', uid, 'transactions'));
        await deleteCollectionInChunks(collection(db, 'users', uid, 'recurring_txs'));

        try { await deleteDoc(doc(db, 'users', uid, 'settings', 'preferences')); } catch (e) {}
        try { await deleteDoc(doc(db, 'users', uid, 'settings', 'security')); } catch (e) {}
        try { await deleteDoc(doc(db, 'users', uid, 'settings', 'transfer')); } catch (e) {}

        await deleteDoc(doc(db, 'users', uid));

        delete adminGrouped[uid];
        delete adminUserLabels[uid];

        Swal.fire({ icon: 'success', title: 'Akun Terhapus!', text: 'Seluruh data akun berhasil dihapus permanen.', background: 'var(--card)', color: 'var(--text)', timer: 1800, showConfirmButton: false });

        closeAdminDetail();
        await loadAllUsersData();
    } catch (e) {
        Swal.fire({ icon: 'error', title: 'Gagal Menghapus', text: e.message, background: 'var(--card)', color: 'var(--text)' });
    }
};

function listenTransactions(uid) { 
    if (unsubListener) unsubListener(); 
    unsubListener = onSnapshot(query(collection(db, 'users', uid, 'transactions'), orderBy('createdAt', 'desc')), snap => { 
        let allDocs = snap.docs.map(d => { 
            let data = d.data(); 
            if (data.wallet && data.wallet.toUpperCase().includes('REKENING')) data.wallet = 'Bank'; 
            if (data.walletTo && data.walletTo.toUpperCase().includes('REKENING')) data.walletTo = 'Bank'; 
            return {id: d.id, ...data}; 
        }); 
        txs = allDocs.filter(t => !t.isDeleted);
        deletedTxs = allDocs.filter(t => t.isDeleted);
        setSyncStatus(true); 
        refreshAll(); 
    }, err => { 
        console.error(err); 
        setSyncStatus(false); 
    }); 
}

window.delTx = function(id) { 
    if (navigator.vibrate) navigator.vibrate(20); 
    Swal.fire({ 
        title: 'Pindah ke Sampah?', 
        text: "Data ini akan masuk ke Folder Sampah di Pengaturan.", 
        icon: 'warning', 
        showCancelButton: true, 
        background: 'var(--card)', color: 'var(--text)', 
        confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', 
        confirmButtonText: 'Ya, Pindahkan', cancelButtonText: 'Batal', position: 'center', backdrop: 'rgba(0,0,0,0.6)' 
    }).then(async (result) => { 
        if (result.isConfirmed) { 
            try {
                await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isDeleted: true });
                Swal.fire({ icon: 'success', title: 'Masuk Tempat Sampah!', background:'var(--card)', color:'var(--text)', showConfirmButton:false, timer:800}); 
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        } 
    }); 
};

window.payDebt = async function(id) {
    if (!currentUser) return;
    const t = txs.find(x => x.id === id);
    if (!t) return;
    Swal.fire({
        title: 'Tandai Lunas?',
        html: `Hutang <b>"${escapeHTML(t.note)}"</b> sebesar <b>${fmtFull(t.amount)}</b> akan ditandai LUNAS.<br><span style="font-size:11px; color:var(--text3);">Saldo dompet ${t.wallet} otomatis berkurang karena hutang dibayar.</span>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'YA, LUNAS',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)'
    }).then(async (res) => {
        if (res.isConfirmed) {
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            try {
                await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isPaid: true });
                Swal.fire({icon:'success', title:'Hutang Lunas! ✅', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        }
    });
};

window.payRecv = async function(id) {
    if (!currentUser) return;
    const t = txs.find(x => x.id === id);
    if (!t) return;
    Swal.fire({
        title: 'Tandai Sudah Dibayar?',
        html: `Piutang <b>"${escapeHTML(t.note)}"</b> sebesar <b>${fmtFull(t.amount)}</b> akan ditandai LUNAS.<br><span style="font-size:11px; color:var(--text3);">Saldo dompet ${t.wallet} otomatis bertambah karena piutang dibayar.</span>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'YA, SUDAH BAYAR',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)'
    }).then(async (res) => {
        if (res.isConfirmed) {
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            try {
                await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isPaid: true });
                Swal.fire({icon:'success', title:'Piutang Lunas! ✅', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        }
    });
};

window.addTx = async function() { 
  if(!currentUser) return; 
  const amountInput = document.getElementById('f-amount'); const catInput = document.getElementById('f-cat'); const noteInput = document.getElementById('f-note'); 
  const rawValue = amountInput.value.replace(/\./g, ''); const amt = parseFloat(rawValue); 
  let cat = catInput.value; if (curType === 'transfer') cat = 'Transfer Antar Dompet';
  const isAmtEmpty = !amt || isNaN(amt); const isCatEmpty = !cat; const note = noteInput.value.trim(); const isNoteEmpty = !note;

  if (isAmtEmpty && isCatEmpty && isNoteEmpty && curType !== 'transfer') { amountInput.classList.add('shake-error'); catInput.parentNode.previousSibling.classList.add('shake-error'); noteInput.classList.add('shake-error'); setTimeout(() => { amountInput.classList.remove('shake-error'); catInput.parentNode.previousSibling.classList.remove('shake-error'); noteInput.classList.remove('shake-error'); }, 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Data Masih Kosong!', text: 'Nominal, Kategori, dan Keterangan harus diisi!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isAmtEmpty) { amountInput.classList.add('shake-error'); setTimeout(() => amountInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Jumlah Belum Diisi!', text: 'Silakan isi nominal (Jumlah) transaksi terlebih dahulu.', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isCatEmpty && curType !== 'transfer') { catInput.parentNode.previousSibling.classList.add('shake-error'); setTimeout(() => catInput.parentNode.previousSibling.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Kategori Belum Diisi!', text: 'Pilih Kategori transaksi terlebih dahulu, bro!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isNoteEmpty) { noteInput.classList.add('shake-error'); setTimeout(() => noteInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Keterangan Kosong!', text: 'Jangan lupa isi keterangan transaksinya ya.', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); }

  const dt = document.getElementById('f-date').value; const wallet = document.getElementById('f-wallet') ? document.getElementById('f-wallet').value : 'Kas Tunai'; const walletTo = document.getElementById('f-wallet-to') ? document.getElementById('f-wallet-to').value : 'Kas Tunai'; 
  const recVal = document.getElementById('f-recurring') ? document.getElementById('f-recurring').value : '';
  const recTime = document.getElementById('f-recurring-time') ? document.getElementById('f-recurring-time').value : '09:00';

  if (curType === 'transfer' && wallet === walletTo) { return Swal.fire({position: 'center', icon: 'warning', title: 'Oops...', text: 'Dompet asal dan tujuan tidak boleh sama!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'}); }
  
  if (document.activeElement) document.activeElement.blur();
  const saveBtn = document.getElementById('save-btn'); saveBtn.textContent = 'MENYIMPAN...'; saveBtn.style.opacity = '0.7'; saveBtn.disabled = true;

  if (curType === 'expense' && window.userBudgets && window.userBudgets[cat]) {
      let currentMonth = (dt || nowISO()).slice(0,7);
      let spent = 0;
      txs.forEach(t => {
          if (t.type === 'expense' && t.category === cat && t.date.slice(0,7) === currentMonth && !t.isDeleted) { spent += t.amount; }
      });
      if (spent + amt > window.userBudgets[cat]) {
          let limitStr = fmtFull(window.userBudgets[cat]);
          let spentStr = fmtFull(spent + amt);
          let res = await Swal.fire({
              title: 'Batas Budget Terlewati!', html: `Pengeluaran <b>${cat}</b> bulan ini akan mencapai <b style="color:var(--red2)">${spentStr}</b>.<br>Batas budget kamu hanya <b>${limitStr}</b>.`,
              icon: 'warning', background: 'var(--card)', color: 'var(--text)', confirmButtonText: 'TETAP SIMPAN', showCancelButton: true, cancelButtonText: 'Batal', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)'
          });
          if (!res.isConfirmed) { saveBtn.textContent = 'SIMPAN TRANSAKSI'; saveBtn.style.opacity = '1'; saveBtn.disabled = false; return; }
      }
  }

  try { 
      let payload = { type: curType, amount: amt, category: cat, wallet: wallet, note: note, date: dt || nowISO(), ownerEmail: currentUser.email, isDeleted: false }; 
      if (curType === 'transfer') payload.walletTo = walletTo; if (curType === 'debt' || curType === 'recv') payload.isPaid = false;
      
      if (editId) { 
          await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', editId), payload); cancelEdit(); 
      } else { 
          payload.createdAt = serverTimestamp(); 
          await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), payload); 
          if (recVal) {
             let nextD = new Date();
             if(recVal==='daily') nextD.setDate(nextD.getDate()+1);
             if(recVal==='weekly') nextD.setDate(nextD.getDate()+7);
             if(recVal==='monthly') nextD.setMonth(nextD.getMonth()+1);
             await addDoc(collection(db, 'users', currentUser.uid, 'recurring_txs'), { type: payload.type, amount: payload.amount, category: payload.category, wallet: payload.wallet, walletTo: payload.walletTo || null, note: payload.note, interval: recVal, nextRun: nextD.toISOString().slice(0,10), runTime: recTime });
          }
      } 
      amountInput.value = ''; document.getElementById('f-note').value = ''; 
      saveBtn.style.opacity = '1';
      saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'TERSIMPAN ✅'; saveBtn.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)'; 
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]); 
      let titleMsg = 'Berhasil Disimpan!'; if (curType === 'debt') titleMsg = '💳 Hutang Tercatat!'; if (curType === 'recv') titleMsg = '💸 Piutang Tercatat!'; if (curType === 'transfer') titleMsg = '🔄 Transfer Berhasil!'; 
      if (recVal) titleMsg += ' & Rutin Aktif!';
      
      Swal.fire({ position: 'center', icon: 'success', title: titleMsg, showConfirmButton: false, timer: 800, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); 
      
      setTimeout(() => { saveBtn.style.boxShadow = 'none'; saveBtn.disabled = false; window.setRealLocalTime(); if (appPrefs && appPrefs.type) { selType(appPrefs.type); setTimeout(() => { if (document.getElementById('f-cat') && appPrefs.category) { document.getElementById('f-cat').value = appPrefs.category; document.getElementById('f-cat').dispatchEvent(new Event('change')); } if (document.getElementById('f-wallet') && appPrefs.wallet) { document.getElementById('f-wallet').value = appPrefs.wallet; document.getElementById('f-wallet').dispatchEvent(new Event('change')); } }, 10); } else { selType('income'); } }, 800);
      const recSelect = document.getElementById('f-recurring'); if(recSelect) { recSelect.value = ''; window.toggleRecTime(); }
  } catch(e) { Swal.fire({ position: 'center', icon: 'error', title: 'Koneksi Terputus / Error', text: e.message, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); saveBtn.textContent = 'COBA LAGI'; saveBtn.style.opacity = '1'; saveBtn.disabled = false; } 
};

window.toggleBatchMode = function() {
    batchMode = !batchMode;
    document.getElementById('btn-batch-del').style.display = batchMode ? 'inline-block' : 'none';
    renderAll();
};
window.execBatchDelete = async function() {
    const checkboxes = document.querySelectorAll('.batch-cb:checked');
    if(checkboxes.length === 0) return Swal.fire({icon:'info', title:'Kosong', text:'Pilih minimal 1 transaksi', background:'var(--card)', color:'var(--text)'});
    
    Swal.fire({ title: 'Hapus ' + checkboxes.length + ' Transaksi?', text: "Data akan dipindah ke Tempat Sampah.", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hapus', cancelButtonText: 'Batal' }).then(async (result) => { 
        if (result.isConfirmed) { 
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            try {
                const ids = Array.from(checkboxes).map(cb => cb.value);
                const CHUNK_SIZE = 400;
                for (let i = 0; i < ids.length; i += CHUNK_SIZE) {
                    const chunk = ids.slice(i, i + CHUNK_SIZE);
                    const batch = writeBatch(db);
                    chunk.forEach(id => batch.update(doc(db, 'users', currentUser.uid, 'transactions', id), { isDeleted: true }));
                    await batch.commit();
                }
                batchMode = false;
                document.getElementById('btn-batch-del').style.display = 'none';
                Swal.fire({icon: 'success', title: 'Masuk ke Tempat Sampah!', background:'var(--card)', color:'var(--text)', timer: 800, showConfirmButton: false});
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        } 
    });
};

window.showRecycleBin = function() {
    if(deletedTxs.length === 0) return Swal.fire({icon:'info', title:'Sampah Kosong', text:'Belum ada data yang terhapus.', background:'var(--card)', color:'var(--text)'});
    
    let html = '<div style="margin-bottom:12px;"><button onclick="emptyRecycleBin()" style="width:100%; background:rgba(248, 113, 113, 0.1); color:var(--red2); border:1px solid var(--red2); padding:10px; border-radius:8px; font-size:11px; font-weight:800; cursor:pointer; transition:0.2s;">🗑️ KOSONGKAN SEMUA SAMPAH</button></div>';
    html += '<div style="max-height:55vh; overflow-y:auto; text-align:left;">';
    
    deletedTxs.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(t => {
        html += `
        <div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg2);">
            <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(t.note)} (${t.category})</div>
            <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(t.amount)} | ${fmtDate(t.date)}</div>
            <div style="display:flex; gap:8px;">
                <button onclick="restoreTx('${t.id}')" style="background:rgba(16, 185, 129, 0.2); color:var(--green2); border:1px solid var(--green2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">PULIHKAN</button>
                <button onclick="hardDeleteTx('${t.id}')" style="background:rgba(248, 113, 113, 0.2); color:var(--red2); border:1px solid var(--red2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">HAPUS PERMANEN</button>
            </div>
        </div>`;
    });
    html += '</div>';
    Swal.fire({title: 'Tempat Sampah 🗑️', html: html, showConfirmButton: false, background:'var(--card)', color:'var(--text)'});
};

window.emptyRecycleBin = async function() {
    Swal.fire({ title: 'Kosongkan Semua?', text: "Seluruh data di tempat sampah ini akan musnah selamanya dan tidak bisa dikembalikan.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Musnahkan', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)'}).then(async (res) => {
        if(res.isConfirmed) {
            Swal.fire({title: 'Memusnahkan Data...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            try {
                const CHUNK_SIZE = 400;
                for (let i = 0; i < deletedTxs.length; i += CHUNK_SIZE) {
                    const chunk = deletedTxs.slice(i, i + CHUNK_SIZE);
                    const batch = writeBatch(db);
                    chunk.forEach(t => batch.delete(doc(db, 'users', currentUser.uid, 'transactions', t.id)));
                    await batch.commit();
                }
                Swal.fire({icon:'success', title:'Bersih Total!', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
            } catch(e) {
                Swal.fire('Error', e.message, 'error');
            }
        }
    });
};

window.restoreTx = async function(id) {
    Swal.fire({title: 'Memulihkan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isDeleted: false });
    Swal.fire({icon:'success', title:'Dipulihkan', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
};
window.hardDeleteTx = async function(id) {
    Swal.fire({ title: 'Hapus Permanen?', text: "Tindakan ini tidak bisa dibatalkan.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Hapus', background: 'var(--card)', color: 'var(--text)'}).then(async (res) => {
        if(res.isConfirmed) {
            Swal.fire({title: 'Menghapus...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            await deleteDoc(doc(db, 'users', currentUser.uid, 'transactions', id));
            Swal.fire({icon:'success', title:'Terhapus Permanen', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
        }
    });
};

window.showBudgetSetup = async function() {
    let catOpts = window.userCats['expense'].map(c => `<option value="${c}">${c}</option>`).join('');
    let existingHtml = '';
    
    if (window.userBudgets && Object.keys(window.userBudgets).length > 0) {
        existingHtml = '<div style="font-size:10px; color:var(--gold); margin-bottom:12px; text-align:left;">BUDGET YANG SEDANG AKTIF:</div>';
        for (let c in window.userBudgets) {
            existingHtml += `<div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px; padding-bottom:4px; border-bottom:1px dashed var(--border2); color:var(--text);"><span>${c}</span><span style="font-family:'JetBrains Mono', monospace;">${fmtFull(window.userBudgets[c])}</span></div>`;
        }
        existingHtml += '<div style="margin-bottom:16px;"></div>';
    }
    
    const { value: formValues } = await Swal.fire({
        title: 'Target Budget / Kategori',
        html: existingHtml + `
            <div style="font-size:11px; color:var(--text3); margin-bottom:12px; text-align:left;">Pilih kategori pengeluaran dan set batas maksimalnya.<br><span style="color:var(--red2)">Ketik angka 0 untuk menghapus budget.</span></div>
            <select id="swal-budget-cat" class="f-input-dark" style="width:100%; margin-bottom:12px;">${catOpts}</select>
            <input id="swal-budget-amt" type="number" class="f-input-dark" style="width:100%;" placeholder="Nominal Budget (Cth: 1000000)">
        `,
        background: 'var(--card)', color: 'var(--text)',
        showCancelButton: true, confirmButtonText: 'SIMPAN BUDGET', cancelButtonText: 'Batal',
        confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            let inputAmt = document.getElementById('swal-budget-amt').value;
            if (!inputAmt) return false;
            return { cat: document.getElementById('swal-budget-cat').value, amt: parseFloat(inputAmt) }
        }
    });
    
    if (formValues && formValues.amt !== undefined && !isNaN(formValues.amt)) {
        if (!window.userBudgets) window.userBudgets = {};
        if (formValues.amt === 0) { delete window.userBudgets[formValues.cat]; } else { window.userBudgets[formValues.cat] = formValues.amt; }
        await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { budgets: window.userBudgets }, { merge: true });
        Swal.fire({icon:'success', title:'Budget Diperbarui!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false});
        if(activePage === 'bulanan') renderMonthly();
    }
};

function renderBudgets(k) {
    const container = document.getElementById('budget-progress-container');
    if(!container) return;
    if(!window.userBudgets || Object.keys(window.userBudgets).length === 0) { container.innerHTML = ''; return; }
    const targetTxs = txs.filter(t => t.date.slice(0, 7) === k && t.type === 'expense');
    let expByCat = {};
    targetTxs.forEach(t => { expByCat[t.category] = (expByCat[t.category] || 0) + t.amount; });
    
    let html = '<div class="set-title" style="margin-top:24px;">📊 PROGRESS BUDGET BULAN INI</div><div style="padding:16px; background:var(--bg3); border-radius:16px; border:1px solid var(--border);">';
    for(let cat in window.userBudgets) {
        let limit = window.userBudgets[cat]; let spent = expByCat[cat] || 0;
        let pct = Math.min(100, Math.round((spent/limit)*100));
        let color = pct >= 100 ? 'var(--red2)' : (pct >= 80 ? 'var(--gold)' : 'var(--green2)');
        html += `
        <div style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:6px;">
                <span>${cat}</span><span style="color:${color}">${fmtFull(spent)} / ${fmtFull(limit)}</span>
            </div>
            <div class="m-bar" style="height:6px; background:var(--bg2);"><div class="m-bar-fill" style="width:${pct}%; background:${color};"></div></div>
        </div>`;
    }
    html += '</div>';
    container.innerHTML = html;
}

window.renderSavings = function() {
    const container = document.getElementById('savings-goals-container');
    if(!container) return;
    if(!window.savingsGoals || window.savingsGoals.length === 0) {
        container.innerHTML = '<div style="flex:1; text-align:center; padding:16px; color:var(--text3); font-size:12px; background:var(--bg3); border-radius:12px; border:1px dashed var(--border2);">Belum ada target tabungan yang dibuat.</div>';
        return;
    }
    let html = '';
    window.savingsGoals.forEach((g, idx) => {
        let pct = Math.min(100, Math.round((g.current / g.target) * 100));
        html += `
        <div class="w-card" style="flex: 1 1 300px; padding:16px; background:var(--bg2); border:1px solid var(--border); cursor:default;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-weight:800; font-size:12px; color:var(--gold); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${g.name}</div>
                <button onclick="editGoal(${idx})" style="background:none; border:none; color:var(--text3); cursor:pointer; font-size:12px;">⚙️</button>
            </div>
            <div style="font-size:16px; font-weight:800; font-family:'JetBrains Mono', monospace; margin-bottom:2px; color:var(--text);">${fmtFull(g.current)}</div>
            <div style="font-size:9px; color:var(--text3); margin-bottom:12px; font-weight:600;">DARI TARGET ${fmtFull(g.target)}</div>
            <div class="m-bar" style="height:6px; background:var(--bg3); margin-bottom:12px;"><div class="m-bar-fill" style="width:${pct}%; background:var(--gold);"></div></div>
            <button onclick="addGoalProgress(${idx})" style="width:100%; padding:8px; background:transparent; border:1px solid var(--gold); color:var(--gold); border-radius:8px; font-weight:800; font-size:10px; cursor:pointer;">+ ISI TABUNGAN</button>
        </div>`;
    });
    container.innerHTML = html;
};

window.addSavingsGoal = async function() {
    const { value: formValues } = await Swal.fire({
        title: 'Buat Target Tabungan',
        html: `<input id="swal-g-name" class="f-input-dark" placeholder="Nama Target (Misal: Beli PC)" style="margin-bottom:12px;">
               <input id="swal-g-target" type="number" class="f-input-dark" placeholder="Target Nominal (Misal: 10000000)">`,
        focusConfirm: false, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN', showCancelButton: true, cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal',
        preConfirm: () => { return { name: document.getElementById('swal-g-name').value, target: parseFloat(document.getElementById('swal-g-target').value) } }
    });
    if(formValues && formValues.name && formValues.target) {
        if(!window.savingsGoals) window.savingsGoals = [];
        window.savingsGoals.push({ name: formValues.name, target: formValues.target, current: 0 });
        await savePreferencesData();
        renderSavings();
        Swal.fire({icon:'success', title:'Target Dibuat!', background:'var(--card)', color: 'var(--text)', timer:1000, showConfirmButton:false});
    }
};

window.addGoalProgress = async function(idx) {
    const { value: amt } = await Swal.fire({
        title: 'Isi Tabungan', input: 'number', inputPlaceholder: 'Nominal yang ditabung...',
        background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'TAMBAH', showCancelButton: true, cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal'
    });
    if(amt && !isNaN(amt)) {
        window.savingsGoals[idx].current += parseFloat(amt);
        await savePreferencesData();
        renderSavings();
        if(window.savingsGoals[idx].current >= window.savingsGoals[idx].target) {
            Swal.fire({icon:'success', title:'TARGET TERCAPAI! 🎉', text:`Selamat! Tabungan ${window.savingsGoals[idx].name} sudah penuh!`, background:'var(--card)', color:'var(--text)'});
        }
    }
};

window.editGoal = async function(idx) {
    Swal.fire({
        title: 'Opsi Tabungan', showDenyButton: true, showCancelButton: true,
        confirmButtonText: 'Edit Target', denyButtonText: 'Hapus Target', cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--blue)', denyButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)'
    }).then(async (res) => {
        if (res.isConfirmed) {
            const { value: formValues } = await Swal.fire({
                title: 'Edit Target',
                html: `<input id="swal-g-name-edit" class="f-input-dark" value="${window.savingsGoals[idx].name}" style="margin-bottom:12px;">
                       <input id="swal-g-target-edit" type="number" class="f-input-dark" value="${window.savingsGoals[idx].target}">`,
                focusConfirm: false, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)',
                preConfirm: () => { return { name: document.getElementById('swal-g-name-edit').value, target: parseFloat(document.getElementById('swal-g-target-edit').value) } }
            });
            if(formValues && formValues.name && formValues.target) {
                window.savingsGoals[idx].name = formValues.name; window.savingsGoals[idx].target = formValues.target;
                await savePreferencesData(); renderSavings();
            }
        } else if (res.isDenied) {
            window.savingsGoals.splice(idx, 1);
            await savePreferencesData(); renderSavings();
        }
    });
};

// Normalisasi berbagai kemungkinan format tanggal (ISO dengan detik/Z, epoch, dll)
// jadi format "YYYY-MM-DDTHH:mm" (waktu lokal) yang dikenali input datetime-local,
// supaya tanggal & jam asli transaksi selalu berhasil tampil saat mode edit dibuka.
function toDatetimeLocalValue(raw) {
    if (!raw) return nowISO();
    // Kalau sudah persis format "YYYY-MM-DDTHH:mm", langsung pakai apa adanya.
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(raw)) return raw;
    const d = new Date(raw);
    if (isNaN(d.getTime())) return nowISO();
    const tzOffset = d.getTimezoneOffset() * 60000;
    return new Date(d - tzOffset).toISOString().slice(0, 16);
}

window.editTx = function(id) { 
    const t = txs.find(x => x.id === id); if (!t) return; 
    editId = id; selType(t.type); document.getElementById('f-amount').value = t.amount; 
    setTimeout(() => { if (document.getElementById('f-cat')) { document.getElementById('f-cat').value = t.category; document.getElementById('f-cat').dispatchEvent(new Event('change')); } }, 10); 
    if (document.getElementById('f-wallet') && t.wallet) { document.getElementById('f-wallet').value = t.wallet; document.getElementById('f-wallet').dispatchEvent(new Event('change')); } 
    if (document.getElementById('f-wallet-to') && t.walletTo) { document.getElementById('f-wallet-to').value = t.walletTo; document.getElementById('f-wallet-to').dispatchEvent(new Event('change')); } 
    // Tanggal & jam SELALU diisi persis sama seperti transaksi aslinya (t.date).
    // Kalau memang mau diubah, silakan diubah manual lewat field ini atau tombol "SEKARANG".
    document.getElementById('f-note').value = t.note === '-' ? '' : t.note; document.getElementById('f-date').value = toDatetimeLocalValue(t.date); document.getElementById('save-btn').textContent = 'UPDATE TRANSAKSI'; document.getElementById('cancel-edit-btn').style.display = 'block'; 
    switchPage('dashboard'); 
    setTimeout(() => { 
        const formCard = document.getElementById('f-amount') ? document.getElementById('f-amount').closest('.card') : null; 
        if (formCard) { 
            formCard.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
            formCard.classList.remove('flash-highlight'); void formCard.offsetWidth; formCard.classList.add('flash-highlight'); 
        } 
    }, 120); 
};

window.cancelEdit = function() { 
    editId = null; 
    document.getElementById('f-amount').value = ''; 
    document.getElementById('f-note').value = ''; 
    document.getElementById('f-date').value = nowISO(); 
    const recSelect = document.getElementById('f-recurring'); if(recSelect) { recSelect.value = ''; window.toggleRecTime(); }
    document.getElementById('save-btn').textContent = 'SIMPAN TRANSAKSI'; 
    document.getElementById('cancel-edit-btn').style.display = 'none'; 
};

window.selType = function(t) { 
    curType = t; document.getElementById('btn-inc').classList.toggle('active', t === 'income'); document.getElementById('btn-exp').classList.toggle('active', t === 'expense'); 
    const btnDebt = document.getElementById('btn-debt'); if (btnDebt) btnDebt.classList.toggle('active', t === 'debt'); 
    const btnRecv = document.getElementById('btn-recv'); if (btnRecv) btnRecv.classList.toggle('active', t === 'recv'); 
    const btnTransfer = document.getElementById('btn-transfer'); if (btnTransfer) btnTransfer.classList.toggle('active', t === 'transfer'); 
    const s = document.getElementById('f-cat'); if (s) { s.innerHTML = '<option value="">Pilih kategori...</option>'; if (window.userCats[t]) { window.userCats[t].forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; s.appendChild(o); }); } s.dispatchEvent(new Event('change')); } 
    const saveBtn = document.getElementById('save-btn'); if (saveBtn) { if (t === 'income') { saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'SIMPAN PEMASUKAN'; } else if (t === 'expense') { saveBtn.style.background = 'var(--red2)'; saveBtn.style.color = '#fff'; saveBtn.textContent = 'SIMPAN PENGELUARAN'; } else if (t === 'debt') { saveBtn.style.background = 'var(--gold)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'CATAT HUTANG'; } else if (t === 'recv') { saveBtn.style.background = 'var(--blue)'; saveBtn.style.color = '#fff'; saveBtn.textContent = 'CATAT PIUTANG'; } else if (t === 'transfer') { saveBtn.style.background = 'var(--text)'; saveBtn.style.color = 'var(--bg)'; saveBtn.textContent = 'LAKUKAN TRANSFER'; } } 
    const catRow = document.getElementById('row-cat'); const walletToRow = document.getElementById('row-wallet-to'); const walletLabel = document.getElementById('label-wallet'); 
    if (t === 'transfer') { if (catRow) catRow.style.display = 'none'; if (walletToRow) walletToRow.style.display = 'block'; if (walletLabel) walletLabel.textContent = 'SUMBER DANA (ASAL)'; } else { if (catRow) catRow.style.display = 'block'; if (walletToRow) walletToRow.style.display = 'none'; if (walletLabel) walletLabel.textContent = 'SUMBER DANA / DOMPET'; } 
};

// ==========================================================================
// PENCEGAH "NGEDET"/NYANGKUT SAAT KLIK CEPAT BOLAK-BALIK: kalau user pencet
// tombol (pindah halaman / ganti minggu-bulan-tahun) berkali-kali secara
// beruntun sebelum frame sebelumnya sempat selesai render, versi lama akan
// MENUMPUK banyak render berat (rebuild Chart.js dkk) di antrian rAF -> UI
// kelihatan macet/telat. Helper ini membatalkan render yang masih tertunda
// milik "key" yang sama sebelum menjadwalkan yang baru, jadi cuma render
// TERAKHIR yang benar-benar jalan, persis seperti debounce native browser.
// ==========================================================================
window.__rafTokens = {};
window.__rafRun = function(key, fn) {
    const t = window.__rafTokens[key] || {};
    if (t.r1) cancelAnimationFrame(t.r1);
    if (t.r2) cancelAnimationFrame(t.r2);
    t.r1 = requestAnimationFrame(() => { t.r2 = requestAnimationFrame(fn); });
    window.__rafTokens[key] = t;
};

window.__spRaf1 = null;
window.__spRaf2 = null;
window.switchPage = function(p) { 
  // Kalau tombol yang ditekan adalah halaman yang sedang aktif, tidak perlu render ulang
  // (render ulang yang tidak perlu inilah salah satu sumber "ngedet" saat tombol dipencet berkali-kali).
  if (p === activePage) return;
  const pages = ['dashboard', 'harian', 'mingguan', 'bulanan', 'tahunan', 'riwayat', 'admin']; 
  const navBtns = document.querySelectorAll('.nav-btn');
  // Hanya sentuh elemen yang benar-benar berubah (halaman lama & baru, tombol lama & baru)
  // alih-alih looping semua .page & semua .nav-btn tiap kali pindah, supaya browser tidak
  // perlu menghitung ulang style utk elemen yang sebenarnya tidak berubah sama sekali.
  const oldPageEl = document.getElementById('page-' + activePage);
  if (oldPageEl) oldPageEl.classList.remove('active');
  const oldIdx = pages.indexOf(activePage);
  if (oldIdx !== -1 && navBtns[oldIdx]) navBtns[oldIdx].classList.remove('active');
  document.getElementById('page-' + p).classList.add('active'); 
  const idx = pages.indexOf(p); 
  if (idx !== -1 && navBtns[idx]) { navBtns[idx].classList.add('active'); } 
  activePage = p; 
  // PENTING: pakai DOUBLE requestAnimationFrame, bukan 1x. Kenapa: 1x rAF TIDAK menjamin
  // browser sudah sempat menggambar (paint) perubahan class (tombol aktif, halaman baru
  // muncul) sebelum callback jalan — kalau refreshAll() berat (rebuild chart, dst), semuanya
  // masih numpuk di frame yang sama sehingga tap tombol terasa "telat respon". Dengan
  // rAF(rAF(...)), frame pertama dipakai browser untuk benar-benar paint dulu (tombol
  // langsung kelihatan aktif & halaman langsung kelihatan), baru di frame berikutnya
  // data/chart di-render. Hasilnya: sentuhan tombol terasa instan, isi datanya menyusul.
  if (window.__spRaf1) cancelAnimationFrame(window.__spRaf1);
  if (window.__spRaf2) cancelAnimationFrame(window.__spRaf2);
  window.__spRaf1 = requestAnimationFrame(() => { window.__spRaf2 = requestAnimationFrame(refreshAll); });
};

function calcSum(arr) { let inc = 0, exp = 0; arr.forEach(t => { if (t.type === 'income') { inc += t.amount; } else if (t.type === 'expense') { exp += t.amount; } else if (t.type === 'debt') { if (!t.isPaid) inc += t.amount; else { inc += t.amount; exp += t.amount; } } else if (t.type === 'recv') { if (!t.isPaid) exp += t.amount; else { exp += t.amount; inc += t.amount; } } }); return {inc, exp, bal: inc - exp, count: arr.length}; }

function renderSumGrid(el, arr, isDash = false) { 
    const s = calcSum(arr); const ts = calcSum(txs.filter(t => new Date(t.date).toDateString() === new Date().toDateString())); const pct = s.inc > 0 ? Math.min(100, Math.round((s.exp / s.inc) * 100)) : 0; 
    const warnStyle = (isDash && typeof extraPrefs !== 'undefined' && extraPrefs.ext_warnbalance === 'on' && s.bal < 50000) ? `style="border-color: var(--red2); box-shadow: 0 0 15px rgba(248,113,113,0.3);"` : ''; 
    const dailyColor = (typeof extraPrefs !== 'undefined' && extraPrefs.ext_budget === 'on' && ts.exp > 100000) ? 'color: var(--red2); text-shadow: 0 0 10px rgba(248,113,113,0.5);' : ''; 
    const dailyBorder = (typeof extraPrefs !== 'undefined' && extraPrefs.ext_budget === 'on' && ts.exp > 100000) ? 'border-color: rgba(248,113,113,0.5);' : ''; 
    el.innerHTML = ` 
    <div class="m-card inc"> <div class="m-label">TOTAL PEMASUKAN</div> <div class="m-val">${fmt(s.inc, isDash)}</div> <div class="usd-pill">${getUSD(s.inc)}</div> <div class="m-sub">${s.inc > 0 ? s.count + ' transaksi' : '-'}</div> <div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div> </div> 
    <div class="m-card exp"> <div class="m-label">TOTAL PENGELUARAN</div> <div class="m-val">${fmt(s.exp, isDash)}</div> <div class="usd-pill">${getUSD(s.exp)}</div> <div class="m-sub">${pct}% dari pemasukan</div> <div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div> </div> 
    <div class="m-card bal" ${warnStyle}> <div class="m-label">SALDO BERSIH ${warnStyle !== '' ? '⚠️ KRITIS' : ''}</div> <div class="m-val">${fmt(s.bal, isDash)}</div> <div class="usd-pill">${getUSD(s.bal)}</div> <div class="m-sub">${s.bal >= 0 ? 'Surplus' : 'Defisit'}</div> <div class="m-bar"><div class="m-bar-fill" style="width:${s.inc > 0 ? Math.max(0, Math.min(100, Math.round((s.bal / s.inc) * 100))) : 0}%"></div></div> </div> 
    <div class="m-card cnt" style="${dailyBorder}"> <div class="m-label">HARI INI ${dailyColor ? '⚠️ OVER LIMIT' : ''}</div> <div class="m-val" style="${dailyColor}">${ts.count} transaksi</div> <div class="m-sub" style="font-weight:700;">+ ${fmt(ts.inc, isDash)} | - <span style="${dailyColor}">${fmt(ts.exp, isDash)}</span></div> <div class="m-bar"><div class="m-bar-fill" style="width:${ts.count > 0 ? 100 : 0}%; background: ${dailyColor ? 'var(--red2)' : 'var(--blue)'};"></div></div> </div> `; 
}

const escapeHTML = (str) => str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag]));
window.escapeHTML = escapeHTML;

const createTxCard = (t) => { 
    let icon = t.type === 'income' ? '↑' : t.type === 'expense' ? '↓' : t.type === 'debt' ? '💳' : t.type === 'transfer' ? '🔄' : '💸'; 
    let sign = (t.type === 'income' || t.type === 'recv') ? '+' : (t.type === 'transfer' ? '' : '-'); 
    if (t.type === 'debt') sign = '-'; if (t.type === 'recv') sign = '-'; 
    let walletBadge = t.wallet ? `<span class="wallet-badge">${t.wallet}</span>` : ''; 
    if (t.type === 'transfer') walletBadge = `<span class="wallet-badge">${t.wallet} ➔ ${t.walletTo}</span>`; 
    
    let debtWarn = ''; 
    if (typeof extraPrefs !== 'undefined' && extraPrefs.ext_debtbadge === 'on') { if ((t.type === 'debt' || t.type === 'recv') && !t.isPaid) { debtWarn = ` <span style="font-size:8px; font-weight:800; color:var(--red2);">· BELUM LUNAS</span>`; } } 
    
    let actionBtn = ''; 
    if (t.type === 'debt' && !t.isPaid) { actionBtn = `<button class="edit-btn-recent" style="color:var(--gold); border: 1px solid var(--gold); background: rgba(251, 191, 36, 0.1);" onclick="payDebt('${t.id}')">LUNAS</button>`; } else if (t.type === 'debt' && t.isPaid) { actionBtn = `<span style="color:var(--green2); font-size:10px; font-weight:800; padding: 4px 0;">LUNAS ✅</span>`; } else if (t.type === 'recv' && !t.isPaid) { actionBtn = `<button class="edit-btn-recent" style="color:var(--blue); border: 1px solid var(--blue); background: rgba(59, 130, 246, 0.1);" onclick="payRecv('${t.id}')">SUDAH BAYAR</button>`; } else if (t.type === 'recv' && t.isPaid) { actionBtn = `<span style="color:var(--green2); font-size:10px; font-weight:800; padding: 4px 0;">LUNAS ✅</span>`; } 
    
    let cbHtml = batchMode ? `<input type="checkbox" class="batch-cb" value="${t.id}" style="margin-right:12px; width:20px; height:20px; flex-shrink:0;">` : '';
    let splitBtn = (t.type === 'income' || t.type === 'expense') ? `<button class="edit-btn-recent" onclick="splitTx('${t.id}')" style="color:var(--gold); border:1px solid var(--gold); background:rgba(251, 191, 36, 0.1);">PISAH</button>` : '';
    return `
    <div class="recent-item" data-id="${t.id}"> 
        <div class="ri-left"> 
            ${cbHtml}
            <div class="ri-icon ${t.type}">${icon}</div> 
            <div> 
                <div class="ri-note">${escapeHTML(t.note)} <span class="cat-badge">${t.category}</span>${walletBadge}</div> 
                <div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}${debtWarn}</div> 
            </div> 
        </div> 
        <div class="ri-right-wrap"> 
            <div class="ri-amounts-col"> 
                <div class="ri-amount ${t.type}">${sign}${fmtFull(t.amount)}</div> 
                <div class="ri-usd">${getUSD(t.amount)}</div> 
            </div> 
            <div class="action-btns"> 
                <button class="edit-btn-recent" onclick="editTx('${t.id}')">EDIT</button> 
                <button class="edit-btn-recent" onclick="promptTransfer('${t.id}')" style="color:var(--text); border:1px solid var(--border2); background:var(--bg3);">TF</button>
                ${splitBtn}
                <button class="del-btn-recent" onclick="delTx('${t.id}')">HAPUS</button> 
                ${actionBtn} 
            </div> 
        </div> 
    </div>`; 
};

function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Kosong</div>'; }
function renderMetrics() { renderSumGrid(document.getElementById('metric-cards'), txs, true); }

window.promptKoreksi = async function(walletName, recordedBal) {
    if(!currentUser) return;
    const { value: formValues } = await Swal.fire({
        title: `Koreksi Saldo ${walletName}`,
        html: `<div style="font-size:12px; color:var(--text3); margin-bottom:16px;">Saldo Tercatat: <b style="color:var(--text);">${fmtFull(recordedBal)}</b></div>
               <div style="font-size:10px; color:var(--text3); margin-bottom:8px; text-align:left;">Masukkan saldo nyata kamu saat ini:</div>
               <input id="swal-koreksi-amt" type="number" class="f-input-dark" style="width:100%; margin-bottom:16px;" placeholder="Cth: 150000">
               <div style="font-size:10px; color:var(--text3); margin-bottom:8px; text-align:left;">Tulis Keterangan / Alasan:</div>
               <input id="swal-koreksi-note" type="text" class="f-input-dark" style="width:100%;" placeholder="Contoh: Lupa catat jajan kemaren...">`,
        showCancelButton: true, confirmButtonText: 'KOREKSI SALDO', cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            const amt = document.getElementById('swal-koreksi-amt').value;
            const note = document.getElementById('swal-koreksi-note').value;
            if (!amt) { Swal.showValidationMessage('Saldo asli harus diisi!'); return false; }
            if (!note) { Swal.showValidationMessage('Keterangan harus diisi biar riwayatnya jelas!'); return false; }
            return { amt: parseFloat(amt), note: note };
        }
    });

    if(formValues) {
        const actual = formValues.amt;
        const userNote = formValues.note;
        const diff = actual - recordedBal;
        if(diff === 0) return Swal.fire({icon:'info', title:'Saldo Sudah Sesuai!', background:'var(--card)', color:'var(--text)'});
        
        const isSurplus = diff > 0;
        const typeStr = isSurplus ? 'income' : 'expense';
        const amt = Math.abs(diff);

        Swal.fire({
            title: 'Menyesuaikan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}
        });
        
        try {
            await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), {
               type: typeStr, amount: amt, category: 'Lainnya', wallet: walletName, note: userNote, date: new Date().toISOString(), ownerEmail: currentUser.email, createdAt: serverTimestamp(), isDeleted: false
            });
            Swal.fire({icon:'success', title:'Saldo Terkoreksi!', html:`Ditambahkan transaksi <b style="color:${isSurplus?'var(--green2)':'var(--red2)'}">${fmtFull(amt)}</b>`, background:'var(--card)', color:'var(--text)', timer: 1500, showConfirmButton: false});
        } catch(e) {
            Swal.fire('Error', e.message, 'error');
        }
    }
};

function renderWalletBalances() { 
    const wallets = { 'Kas Tunai': 0, 'DANA': 0, 'GoPay': 0, 'ShopeePay': 0, 'MT5 Trading': 0, 'Bank': 0 }; 
    let hutangBal = 0; let piutangBal = 0; let totalAset = 0; 
    txs.forEach(t => { 
        let w = t.wallet || 'Kas Tunai'; let wTo = t.walletTo; 
        if (w !== 'Hutang' && w !== 'Piutang' && !wallets.hasOwnProperty(w)) wallets[w] = 0; 
        if (wTo && wTo !== 'Hutang' && wTo !== 'Piutang' && !wallets.hasOwnProperty(wTo)) wallets[wTo] = 0; 
        if (t.type === 'income') { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; } else if (t.type === 'expense') { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; } else if (t.type === 'transfer') { if (w === 'Hutang') hutangBal -= t.amount; else if (w === 'Piutang') piutangBal += t.amount; else if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; if (wTo === 'Hutang') hutangBal += t.amount; else if (wTo === 'Piutang') piutangBal -= t.amount; else if (wTo && wallets.hasOwnProperty(wTo)) wallets[wTo] += t.amount; } else if (t.type === 'debt') { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; if (!t.isPaid) { hutangBal -= t.amount; } else { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; } } else if (t.type === 'recv') { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; if (!t.isPaid) { piutangBal -= t.amount; } else { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; } } 
    }); 
    for (let key in wallets) { if (wallets[key] > 0) totalAset += wallets[key]; } 
    const container = document.getElementById('wallet-balances'); if (!container) return; 
    let html = Object.entries(wallets).filter(([name, bal]) => { if (typeof extraPrefs !== 'undefined' && extraPrefs.ext_hidezero === 'on' && bal === 0) return false; return true; }).map(([name, bal]) => { 
        let pct = (typeof extraPrefs !== 'undefined' && extraPrefs.ext_walletpct === 'on' && totalAset > 0 && bal > 0) ? `<div class="w-pct-badge" style="display:block;">${((bal/totalAset)*100).toFixed(1)}%</div>` : ''; 
        return `<div class="w-card" style="position:relative; cursor:pointer;" onclick="promptKoreksi('${name}', ${bal})" title="Klik untuk Koreksi Saldo">
                    <span style="position:absolute; top:8px; right:${pct ? '42px' : '8px'}; font-size:12px; opacity:0.4;">✏️</span>
                    ${pct}
                    <div class="w-label">${name}</div><div class="w-val ${bal < 0 ? 'min' : ''}">${fmtFull(bal)}</div><div class="usd-wallet-val" style="font-size: 8px; color: var(--text3); font-family: 'JetBrains Mono', monospace; margin-top: 2px;">${getUSD(bal)}</div>
                </div>` 
    }).join(''); 
    html += `
    <div style="grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: inherit;"> 
        <div class="w-card" style="border-color:rgba(251, 191, 36, 0.5); background:rgba(251, 191, 36, 0.05);">
            <div class="w-label" style="color:var(--gold);">TOTAL HUTANG</div>
            <div class="w-val min">${fmtFull(hutangBal)}</div>
            <div class="usd-wallet-val" style="font-size: 8px; color: var(--text3); font-family: 'JetBrains Mono', monospace; margin-top: 2px;">${getUSD(hutangBal)}</div>
        </div> 
        <div class="w-card" style="border-color:rgba(59, 130, 246, 0.5); background:rgba(59, 130, 246, 0.05);">
            <div class="w-label" style="color:var(--blue);">TOTAL PIUTANG</div>
            <div class="w-val min">${fmtFull(piutangBal)}</div>
            <div class="usd-wallet-val" style="font-size: 8px; color: var(--text3); font-family: 'JetBrains Mono', monospace; margin-top: 2px;">${getUSD(piutangBal)}</div>
        </div> 
    </div>`; 
    container.innerHTML = html; 
}

window.__chartFilters = {};

window.clearChartFilter = function(scopeId, rerenderFn) {
    window.__chartFilters[scopeId] = null;
    if (typeof rerenderFn === 'function') rerenderFn();
};

function applyChartFilterSum(el, arr, scopeId, isDash) {
    if (!el) return;
    const f = window.__chartFilters[scopeId];
    renderSumGrid(el, f ? arr.filter(f.predicate) : arr, isDash);
}

// ==========================================================================
// RENDER BERTAHAP (virtual-scroll ringan) untuk daftar transaksi yang bisa
// berisi ratusan/ribuan item (Mingguan/Bulanan/Tahunan/Riwayat). Alih-alih
// bikin elemen DOM utk SEMUA transaksi sekaligus (bikin render awal terasa
// berat/nyendat kalau datanya banyak), di sini cuma batch pertama yang
// langsung dirender; batch berikutnya baru dirender otomatis saat user
// scroll mendekati akhir daftar (pakai IntersectionObserver, ringan &
// tidak butuh tahu elemen mana yang scroll — jalan baik di layout mobile
// (halaman yang scroll) maupun desktop (panel yang scroll).
const __VS_BATCH = 40;
function applyChartFilterList(container, arr, scopeId, rerenderFn) {
    if (!container) return;
    // Hentikan observer batch lama (kalau ada) supaya tidak numpuk/leak saat re-render
    if (container.__vsObserver) { container.__vsObserver.disconnect(); container.__vsObserver = null; }

    const f = window.__chartFilters[scopeId];
    const list = f ? arr.filter(f.predicate) : arr;
    const badge = f ? '<div class="chart-filter-badge"><span>🔎 ' + escapeHTML(f.label) + '</span><button type="button" class="chart-filter-clear">✕ Tampilkan Semua</button></div>' : '';

    if (!list.length) {
        container.innerHTML = badge + '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Tidak ada transaksi pada bagian ini.</div>';
        if (f) { const btn = container.querySelector('.chart-filter-clear'); if (btn) btn.onclick = function() { window.clearChartFilter(scopeId, rerenderFn); }; }
        return;
    }

    // Kalau jumlahnya sedikit, langsung render semua sekaligus (tidak perlu batching)
    if (list.length <= __VS_BATCH) {
        container.innerHTML = badge + list.map(t => createTxCard(t)).join('');
        if (f) { const btn = container.querySelector('.chart-filter-clear'); if (btn) btn.onclick = function() { window.clearChartFilter(scopeId, rerenderFn); }; }
        return;
    }

    let renderedCount = 0;
    const sentinel = document.createElement('div');
    sentinel.className = 'vs-sentinel';
    sentinel.style.cssText = 'height:1px;';

    function renderNextBatch() {
        const next = list.slice(renderedCount, renderedCount + __VS_BATCH);
        if (!next.length) return;
        const html = next.map(t => createTxCard(t)).join('');
        sentinel.insertAdjacentHTML('beforebegin', html);
        renderedCount += next.length;
        if (renderedCount >= list.length && container.__vsObserver) {
            container.__vsObserver.disconnect();
            container.__vsObserver = null;
            sentinel.remove();
        }
    }

    container.innerHTML = badge;
    if (f) { const btn = container.querySelector('.chart-filter-clear'); if (btn) btn.onclick = function() { window.clearChartFilter(scopeId, rerenderFn); }; }
    container.appendChild(sentinel);
    renderNextBatch();

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) renderNextBatch();
    }, { root: null, rootMargin: '600px' });
    observer.observe(sentinel);
    container.__vsObserver = observer;
}

function applyAdminChartFilterSum(scopeId, arr) {
    const f = window.__chartFilters[scopeId];
    renderAdminSumGrid(f ? arr.filter(f.predicate) : arr);
}

function applyAdminChartFilterList(scopeId, arr, rerenderFn) {
    const listWrap = document.getElementById('admin-detail-list');
    if (!listWrap) return;
    if (listWrap.__vsObserver) { listWrap.__vsObserver.disconnect(); listWrap.__vsObserver = null; }

    const f = window.__chartFilters[scopeId];
    const sorted = (f ? arr.filter(f.predicate) : arr).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    const badge = f ? '<div class="chart-filter-badge"><span>🔎 ' + escapeHTML(f.label) + '</span><button type="button" class="chart-filter-clear">✕ Tampilkan Semua</button></div>' : '';

    if (!sorted.length) {
        listWrap.innerHTML = badge + '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Tidak ada transaksi pada bagian ini.</div>';
        if (f) { const btn = listWrap.querySelector('.chart-filter-clear'); if (btn) btn.onclick = function() { window.clearChartFilter(scopeId, rerenderFn); }; }
        return;
    }

    if (sorted.length <= __VS_BATCH) {
        listWrap.innerHTML = badge + sorted.map(t => adminTxCard(t)).join('');
        if (f) { const btn = listWrap.querySelector('.chart-filter-clear'); if (btn) btn.onclick = function() { window.clearChartFilter(scopeId, rerenderFn); }; }
        return;
    }

    let renderedCount = 0;
    const sentinel = document.createElement('div');
    sentinel.className = 'vs-sentinel';
    sentinel.style.cssText = 'height:1px;';

    function renderNextBatch() {
        const next = sorted.slice(renderedCount, renderedCount + __VS_BATCH);
        if (!next.length) return;
        sentinel.insertAdjacentHTML('beforebegin', next.map(t => adminTxCard(t)).join(''));
        renderedCount += next.length;
        if (renderedCount >= sorted.length && listWrap.__vsObserver) {
            listWrap.__vsObserver.disconnect();
            listWrap.__vsObserver = null;
            sentinel.remove();
        }
    }

    listWrap.innerHTML = badge;
    if (f) { const btn = listWrap.querySelector('.chart-filter-clear'); if (btn) btn.onclick = function() { window.clearChartFilter(scopeId, rerenderFn); }; }
    listWrap.appendChild(sentinel);
    renderNextBatch();

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) renderNextBatch();
    }, { root: null, rootMargin: '600px' });
    observer.observe(sentinel);
    listWrap.__vsObserver = observer;
}

function mkChart(id, labels, incData, expData, onBarClick) { 
    const c = document.getElementById(id); if (!c) return; 
    const isLight = document.body.classList.contains('light-mode'); const isMobile = window.innerWidth <= 768; 
    const clickHandler = function(evt, elements) {
        if (!elements || !elements.length) return;
        const el = elements[0];
        if (typeof onBarClick === 'function') onBarClick(el.index, labels[el.index], el.datasetIndex);
    };
    const hoverHandler = function(evt, elements) {
        if (evt && evt.native && evt.native.target) evt.native.target.style.cursor = (elements && elements.length) ? 'pointer' : 'default';
    };
    if (charts[id] && charts[id]._isLightTheme === isLight) { 
        const ch = charts[id]; 
        ch.data.labels = labels; 
        ch.data.datasets[0].data = incData; 
        ch.data.datasets[1].data = expData; 
        ch.options.onClick = clickHandler;
        ch.options.onHover = hoverHandler;
        ch.update('none'); 
        return; 
    } 
    if (charts[id]) charts[id].destroy(); 
    charts[id] = new Chart(c, { 
        type: 'bar', 
        data: { 
            labels, 
            datasets: [ 
                {label: 'Pemasukan', data: incData, backgroundColor: isLight ? '#10B981' : '#10B981', borderRadius: 4, barPercentage: 0.6}, 
                {label: 'Pengeluaran', data: expData, backgroundColor: isLight ? '#F87171' : '#F87171', borderRadius: 4, barPercentage: 0.6} 
            ] 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            resizeDelay: 100,
            animation: { duration: 0 },
            animations: { colors: false, x: { duration: 0 } },
            onClick: clickHandler,
            onHover: hoverHandler,
            plugins: {
                legend: {display: false},
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': Rp ' + new Intl.NumberFormat('id-ID').format(context.parsed.y);
                        }
                    },
                    titleFont: { family: "'Outfit'", size: 10 },
                    bodyFont: { family: "'Outfit'", size: 10 }
                }
            }, 
            scales: { 
                x: { 
                    ticks: {color: isLight ? '#888' : '#888', font: {size: isMobile ? 5 : 8, family: "'Outfit'", style: 'normal'}, autoSkip: false, maxRotation: 0, minRotation: 0}, 
                    grid: {display: false}, border: {display: false} 
                }, 
                y: { 
                    ticks: {
                        color: isLight ? '#888' : '#888', 
                        font: {size: isMobile ? 6 : 10, family: "'Outfit'", style: 'normal'}, 
                        callback: v => new Intl.NumberFormat('id-ID').format(v) 
                    }, 
                    grid: {color: isLight ? '#DEE2E6' : '#222228', drawBorder: false}, border: {display: false} 
                } 
            } 
        } 
    }); 
    charts[id]._isLightTheme = isLight; 
}

window.renderDaily = function() { const pick = document.getElementById('pick-daily').value; const target = pick ? new Date(pick).toDateString() : new Date().toDateString(); const arr = txs.filter(t => new Date(t.date).toDateString() === target).sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('daily-sum'), arr); renderList(document.getElementById('daily-body'), arr); };

function wkKey(d) { const dt = new Date(d); const day = dt.getDay(); const diff = dt.getDate() - day + (day === 0 ? -6 : 1); const monday = new Date(new Date(d).setDate(diff)); monday.setMinutes(monday.getMinutes() - monday.getTimezoneOffset()); return monday.toISOString().slice(0,10); }

window.renderWeekly = function() {
  const weeks = [...new Set(txs.map(t => wkKey(t.date)))].sort().reverse();
  const sel = document.getElementById('week-sel');
  if (!sel) return;
  if (!weeks.length) { 
      sel.innerHTML = ''; 
      document.getElementById('week-body').innerHTML = '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Kosong</div>'; 
      document.getElementById('week-sum').innerHTML = ''; 
      if(charts['chartWeek']) charts['chartWeek'].destroy(); 
      return; 
  }
  if (!sel.dataset.active || !weeks.includes(sel.dataset.active)) sel.dataset.active = weeks[0];
  
  sel.innerHTML = weeks.map(w => `<button class="p-btn ${w === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('week-sel').dataset.active
='${w}'; window.__rafRun('weekly', renderWeekly);">Minggu ${fmtDate(w)}</button>`).join('');
  const targetWk = sel.dataset.active;
  const arr = txs.filter(t => wkKey(t.date) === targetWk).sort((a,b) => new Date(b.date) - new Date(a.date));
  applyChartFilterSum(document.getElementById('week-sum'), arr, 'week');
  applyChartFilterList(document.getElementById('week-body'), arr, 'week', window.renderWeekly);
  
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  let incD = [0,0,0,0,0,0,0], expD = [0,0,0,0,0,0,0];
  arr.forEach(t => { 
      let d = new Date(t.date).getDay() - 1; 
      if(d < 0) d = 6; 
      if(t.type === 'income') incD[d] += t.amount; 
      if(t.type === 'expense') expD[d] += t.amount; 
  });
  mkChart('chartWeek', days, incD, expD, function(idx) {
      const key = 'day-' + idx;
      const cur = window.__chartFilters['week'];
      if (cur && cur.key === key) {
          window.__chartFilters['week'] = null;
      } else {
          window.__chartFilters['week'] = {
              key: key,
              label: days[idx] + ', Minggu ' + fmtDate(targetWk),
              predicate: function(t) { let d = new Date(t.date).getDay() - 1; if (d < 0) d = 6; return d === idx; }
          };
      }
      window.renderWeekly();
  });
};

window.renderMonthly = function() {
    const mths = [...new Set(txs.map(t => t.date.slice(0,7)))].sort().reverse();
    const sel = document.getElementById('month-sel');
    if (!sel) return;
    if (!mths.length) { 
        sel.innerHTML = ''; 
        document.getElementById('month-body').innerHTML = '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Kosong</div>'; 
        document.getElementById('month-sum').innerHTML = ''; 
        if(charts['chartMonth']) charts['chartMonth'].destroy(); 
        return; 
    }
    if (!sel.dataset.active || !mths.includes(sel.dataset.active)) sel.dataset.active = mths[0];
    sel.innerHTML = mths.map(m => `<button class="p-btn ${m === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('month-sel').dataset.active='${m}'; window.__rafRun('monthly', renderMonthly);">${new Date(m+'-01').toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`).join('');
    
    const active = sel.dataset.active;
    const arr = txs.filter(t => t.date.slice(0,7) === active).sort((a,b) => new Date(b.date) - new Date(a.date));
    applyChartFilterSum(document.getElementById('month-sum'), arr, 'month');
    applyChartFilterList(document.getElementById('month-body'), arr, 'month', window.renderMonthly);
    
    let daysInM = new Date(active.slice(0,4), active.slice(5,7), 0).getDate();
    let labels = Array.from({length: daysInM}, (_, i) => i + 1);
    let incD = Array(daysInM).fill(0), expD = Array(daysInM).fill(0);
    arr.forEach(t => { 
        let d = parseInt(t.date.slice(8,10)) - 1; 
        if(t.type === 'income') incD[d] += t.amount; 
        if(t.type === 'expense') expD[d] += t.amount; 
    });
    mkChart('chartMonth', labels, incD, expD, function(idx) {
        const dayNum = idx + 1;
        const key = 'day-' + dayNum;
        const cur = window.__chartFilters['month'];
        if (cur && cur.key === key) {
            window.__chartFilters['month'] = null;
        } else {
            window.__chartFilters['month'] = {
                key: key,
                label: 'Tanggal ' + dayNum + ' ' + new Date(active + '-01').toLocaleDateString('id-ID', {month: 'long', year: 'numeric'}),
                predicate: function(t) { return t.date && parseInt(t.date.slice(8,10)) === dayNum; }
            };
        }
        window.renderMonthly();
    });
    renderBudgets(active);
};

window.renderYearly = function() {
    const yrs = [...new Set(txs.map(t => t.date.slice(0,4)))].sort().reverse();
    const sel = document.getElementById('year-sel');
    if (!sel) return;
    if (!yrs.length) { 
        sel.innerHTML = ''; 
        document.getElementById('year-body').innerHTML = '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Kosong</div>'; 
        document.getElementById('year-sum').innerHTML = ''; if(charts['chartYear']) charts['chartYear'].destroy(); 
        return; 
    }
    if (!sel.dataset.active || !yrs.includes(sel.dataset.active)) sel.dataset.active = yrs[0];
    
    sel.innerHTML = yrs.map(y => `<button class="p-btn ${y === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('year-sel').dataset.active='${y}'; window.__rafRun('yearly', renderYearly);">Tahun ${y}</button>`).join('');
    
    const active = sel.dataset.active;
    const arr = txs.filter(t => t.date.slice(0,4) === active).sort((a,b) => new Date(b.date) - new Date(a.date));
    applyChartFilterSum(document.getElementById('year-sum'), arr, 'year');
    applyChartFilterList(document.getElementById('year-body'), arr, 'year', window.renderYearly);
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
    let incD = Array(12).fill(0), expD = Array(12).fill(0);
    arr.forEach(t => { 
        let m = parseInt(t.date.slice(5,7)) - 1; 
        if(t.type === 'income') incD[m] += t.amount; 
        if(t.type === 'expense') expD[m] += t.amount; 
    });
    mkChart('chartYear', months, incD, expD, function(idx) {
        const key = 'month-' + idx;
        const cur = window.__chartFilters['year'];
        if (cur && cur.key === key) {
            window.__chartFilters['year'] = null;
        } else {
            window.__chartFilters['year'] = {
                key: key,
                label: months[idx] + ' ' + active,
                predicate: function(t) { return t.date && (parseInt(t.date.slice(5,7)) - 1) === idx; }
            };
        }
        window.renderYearly();
    });
};

window.renderAll = function() {
    const typeFilter = document.getElementById('flt-type') ? document.getElementById('flt-type').value : '';
    const searchFlt = document.getElementById('flt-search') ? document.getElementById('flt-search').value.toLowerCase() : '';
    
    let filtered = txs;
    if (typeFilter) filtered = filtered.filter(t => t.type === typeFilter);
    if (searchFlt) filtered = filtered.filter(t => (t.note && t.note.toLowerCase().includes(searchFlt)) || (t.category && t.category.toLowerCase().includes(searchFlt)));
    
    filtered.sort((a,b) => new Date(b.date) - new Date(a.date));
    
    const yrs = [...new Set(filtered.map(t => t.date.slice(0,4)))].sort().reverse();
    const sel = document.getElementById('riwayat-year-sel');
    
    if (!yrs.length) {
        if(sel) sel.innerHTML = '';
        document.getElementById('all-body').innerHTML = '<div style="padding:40px;text-align:center;color:var(--text3);font-size:12px;">Kosong</div>';
        document.getElementById('all-sum').innerHTML = '';
        if (charts['chartRiwayat']) charts['chartRiwayat'].destroy();
        document.getElementById('riwayat-legend').style.display = 'none';
        return;
    }

    if (sel) {
        if (!sel.dataset.active || !yrs.includes(sel.dataset.active)) sel.dataset.active = yrs[0];
        sel.innerHTML = yrs.map(y => `<button class="p-btn ${y === sel.dataset.active ? 'active' : ''}" onclick="document.getElementById('riwayat-year-sel').dataset.active='${y}'; window.__rafRun('riwayatAll', renderAll);">Tahun ${y}</button>`).join('');
        
        const activeYr = sel.dataset.active;
        const yearData = filtered.filter(t => t.date.slice(0,4) === activeYr);
        applyChartFilterSum(document.getElementById('all-sum'), yearData, 'riwayat');
        applyChartFilterList(document.getElementById('all-body'), yearData, 'riwayat', window.renderAll);

        // Chart Pemasukan & Pengeluaran per Dompet (Kas Tunai s/d Bank), termasuk transfer antar dompet
        const walletList = ['Kas Tunai', 'DANA', 'GoPay', 'ShopeePay', 'MT5 Trading', 'Bank'];
        const incWallet = {}; const expWallet = {};
        walletList.forEach(w => { incWallet[w] = 0; expWallet[w] = 0; });

        yearData.forEach(t => {
            const w = t.wallet; const wTo = t.walletTo;
            if (t.type === 'income') {
                if (incWallet.hasOwnProperty(w)) incWallet[w] += t.amount;
            } else if (t.type === 'expense') {
                if (expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
            } else if (t.type === 'transfer') {
                // Dompet asal kehilangan dana (pengeluaran), dompet tujuan menerima dana (pemasukan)
                if (expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
                if (incWallet.hasOwnProperty(wTo)) incWallet[wTo] += t.amount;
            } else if (t.type === 'debt') {
                // Uang hutang cair masuk ke dompet
                if (incWallet.hasOwnProperty(w)) incWallet[w] += t.amount;
                if (t.isPaid && expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
            } else if (t.type === 'recv') {
                // Uang dipinjamkan keluar dari dompet
                if (expWallet.hasOwnProperty(w)) expWallet[w] += t.amount;
                if (t.isPaid && incWallet.hasOwnProperty(w)) incWallet[w] += t.amount;
            }
        });

        const labels = walletList;
        const incData = walletList.map(w => incWallet[w]);
        const expData = walletList.map(w => expWallet[w]);
        const hasData = incData.some(v => v > 0) || expData.some(v => v > 0);
        
        if (charts['chartRiwayat']) charts['chartRiwayat'].destroy();
        
        const c = document.getElementById('chartRiwayat');
        const legendEl = document.getElementById('riwayat-legend');
        if (hasData) {
            legendEl.style.display = 'flex';
            legendEl.innerHTML = '<div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan per Dompet ('+activeYr+')</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran per Dompet</div>';
            
            const isLight = document.body.classList.contains('light-mode');
            const isMobile = window.innerWidth <= 768;
            charts['chartRiwayat'] = new Chart(c, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        { label: 'Pemasukan', data: incData, backgroundColor: '#10B981', borderRadius: 4, barPercentage: 0.7 },
                        { label: 'Pengeluaran', data: expData, backgroundColor: '#F87171', borderRadius: 4, barPercentage: 0.7 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    resizeDelay: 100,
                    animation: { duration: 0 },
                    animations: { colors: false, x: { duration: 0 } },
                    onClick: function(evt, elements) {
                        if (!elements || !elements.length) return;
                        const idx = elements[0].index;
                        const dsIdx = elements[0].datasetIndex;
                        const wallet = walletList[idx];
                        const key = 'wallet-' + dsIdx + '-' + wallet;
                        const cur = window.__chartFilters['riwayat'];
                        if (cur && cur.key === key) {
                            window.__chartFilters['riwayat'] = null;
                        } else {
                            window.__chartFilters['riwayat'] = {
                                key: key,
                                label: (dsIdx === 0 ? 'Pemasukan' : 'Pengeluaran') + ' — ' + wallet + ' (' + activeYr + ')',
                                predicate: function(t) {
                                    if (dsIdx === 0) {
                                        if (t.type === 'income' && t.wallet === wallet) return true;
                                        if (t.type === 'transfer' && t.walletTo === wallet) return true;
                                        if (t.type === 'debt' && t.wallet === wallet) return true;
                                        return false;
                                    } else {
                                        if (t.type === 'expense' && t.wallet === wallet) return true;
                                        if (t.type === 'transfer' && t.wallet === wallet) return true;
                                        if (t.type === 'recv' && t.wallet === wallet) return true;
                                        if (t.type === 'debt' && t.isPaid && t.wallet === wallet) return true;
                                        return false;
                                    }
                                }
                            };
                        }
                        window.renderAll();
                    },
                    onHover: function(evt, elements) {
                        if (evt && evt.native && evt.native.target) evt.native.target.style.cursor = (elements && elements.length) ? 'pointer' : 'default';
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': Rp ' + new Intl.NumberFormat('id-ID').format(context.parsed.y);
                                }
                            },
                            titleFont: { family: "'Outfit'", size: 10 },
                            bodyFont: { family: "'Outfit'", size: 10 }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: isLight ? '#888' : '#888', font: {size: isMobile ? 7 : 10, family: "'Outfit'"}, autoSkip: false, maxRotation: isMobile ? 30 : 0, minRotation: 0 },
                            grid: { display: false }, border: { display: false }
                        },
                        y: {
                            ticks: { callback: v => new Intl.NumberFormat('id-ID').format(v), color: isLight ? '#888' : '#888', font: {size: isMobile ? 7 : 10, family: "'Outfit'"} },
                            grid: { color: isLight ? '#DEE2E6' : '#222228', drawBorder: false }, border: { display: false }
                        }
                    }
                }
            });
        } else {
            legendEl.style.display = 'none';
        }

        renderRiwayatCategoryChips(yearData, activeYr);
    }
};

// ======================================================================
// Chip daftar SEMUA kategori di bawah grafik Riwayat. Klik salah satu
// kategori -> langsung tampil semua transaksi kategori itu + total dihitung
// di sum-grid atas (pakai mekanisme filter chart yang sama, scope 'riwayat').
// ======================================================================
function renderRiwayatCategoryChips(yearData, activeYr) {
    const wrap = document.getElementById('riwayat-cat-chips');
    if (!wrap) return;

    const catMap = {};
    yearData.forEach(t => {
        if (!t.category) return;
        if (t.type !== 'income' && t.type !== 'expense' && t.type !== 'debt' && t.type !== 'recv') return;
        const key = t.type + '|' + t.category;
        if (!catMap[key]) catMap[key] = { type: t.type, category: t.category, total: 0, count: 0 };
        catMap[key].total += t.amount;
        catMap[key].count += 1;
    });

    const cats = Object.values(catMap).sort((a, b) => b.total - a.total);

    if (!cats.length) { wrap.innerHTML = ''; return; }

    const cur = window.__chartFilters['riwayat'];
    wrap.innerHTML = cats.map((c, i) => {
        const key = 'cat-' + c.type + '-' + c.category;
        const isActive = cur && cur.key === key;
        const isIncome = c.type === 'income' || c.type === 'recv';
        return `<div class="cat-chip ${isActive ? 'active' : ''}" data-idx="${i}">
            <span title="${escapeHTML(c.category)}">${escapeHTML(c.category)}</span>
            <span class="cat-chip-amt" style="color:${isIncome ? 'var(--green2)' : 'var(--red2)'};">${isIncome ? '+' : '-'}${fmtFull(c.total)}</span>
        </div>`;
    }).join('');

    wrap.querySelectorAll('.cat-chip').forEach(el => {
        el.onclick = function() {
            const c = cats[parseInt(el.dataset.idx, 10)];
            if (!c) return;
            const key = 'cat-' + c.type + '-' + c.category;
            const curF = window.__chartFilters['riwayat'];
            if (curF && curF.key === key) {
                window.__chartFilters['riwayat'] = null;
            } else {
                const label = (c.type === 'income' ? 'Pemasukan' : c.type === 'expense' ? 'Pengeluaran' : c.type === 'debt' ? 'Hutang' : 'Piutang') + ' — ' + c.category + ' (' + activeYr + ')';
                window.__chartFilters['riwayat'] = {
                    key: key,
                    label: label,
                    predicate: function(t) { return t.type === c.type && t.category === c.category; }
                };
            }
            window.renderAll();
        };
    });
}

function drawCenteredSummaryRow(docPdf, parts, y, centerX) {
    const gap = 22;
    let totalWidth = 0;
    parts.forEach((p, i) => { totalWidth += docPdf.getTextWidth(p.text); if (i < parts.length - 1) totalWidth += gap; });
    let x = centerX - totalWidth / 2;
    parts.forEach(p => {
        docPdf.setTextColor(p.color[0], p.color[1], p.color[2]);
        docPdf.text(p.text, x, y);
        x += docPdf.getTextWidth(p.text) + gap;
    });
}

window.exportPDF = function() {
    if (txs.length === 0) return Swal.fire({ icon: 'info', title: 'Data Kosong', text: 'Tidak ada data untuk diunduh.', background: 'var(--card)', color: 'var(--text)' });
    if (!window.jspdf || !window.jspdf.jsPDF) return Swal.fire({ icon: 'error', title: 'Gagal Membuat PDF', text: 'Library PDF belum termuat, cek koneksi internet lalu coba lagi.', background: 'var(--card)', color: 'var(--text)' });

    const typeFlt = document.getElementById('flt-type') ? document.getElementById('flt-type').value : '';
    const searchFlt = document.getElementById('flt-search') ? document.getElementById('flt-search').value.trim().toLowerCase() : '';
    let filtered = txs.slice();
    if (typeFlt) filtered = filtered.filter(t => t.type === typeFlt);
    if (searchFlt) filtered = filtered.filter(t => (t.note && t.note.toLowerCase().includes(searchFlt)) || (t.category && t.category.toLowerCase().includes(searchFlt)));
    // Jika sedang di halaman Mingguan/Bulanan, PDF hanya berisi periode yang sedang dipilih (bukan semua riwayat)
    if (activePage === 'mingguan') {
        const wsel = document.getElementById('week-sel');
        const activeWeek = wsel && wsel.dataset.active;
        if (activeWeek) filtered = filtered.filter(t => wkKey(t.date) === activeWeek);
    } else if (activePage === 'bulanan') {
        const msel = document.getElementById('month-sel');
        const activeMonth = msel && msel.dataset.active;
        if (activeMonth) filtered = filtered.filter(t => t.date.slice(0, 7) === activeMonth);
    } else if (activePage === 'tahunan') {
        const ysel = document.getElementById('year-sel');
        const activeYear = ysel && ysel.dataset.active;
        if (activeYear) filtered = filtered.filter(t => t.date.slice(0, 4) === activeYear);
    } else if (activePage === 'riwayat') {
        const rysel = document.getElementById('riwayat-year-sel');
        const activeRYear = rysel && rysel.dataset.active;
        if (activeRYear) filtered = filtered.filter(t => t.date.slice(0, 4) === activeRYear);
    }
    // Urutkan kronologis (lama ke baru) supaya rapi per minggu
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

    const typeLabel = { income: 'Pemasukan', expense: 'Pengeluaran', transfer: 'Transfer', debt: 'Hutang', recv: 'Piutang' };
    const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const s = calcSum(filtered);

    const { jsPDF } = window.jspdf;
    const docPdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
    const pageWidth = docPdf.internal.pageSize.getWidth();
    const pageHeight = docPdf.internal.pageSize.getHeight();
    const marginL = 30, marginR = 30;

    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(10);
    docPdf.setTextColor(20, 20, 20);
    docPdf.text('RHN CAPITAL ARUS KEUANGAN', pageWidth / 2, 24, { align: 'center' });

    docPdf.setFont('helvetica', 'normal');
    docPdf.setFontSize(6.5);
    docPdf.setTextColor(100, 100, 100);
    const userLabel = (document.getElementById('user-name') && document.getElementById('user-name').textContent) ? document.getElementById('user-name').textContent.trim() : '';
    const genInfo = 'Akun: ' + (userLabel || '-') + '   |   Dicetak: ' + new Date().toLocaleString('id-ID') + '   |   Total Data: ' + filtered.length + ' transaksi';
    docPdf.text(genInfo, pageWidth / 2, 36, { align: 'center' });

    docPdf.setDrawColor(220, 220, 220);
    docPdf.line(marginL, 43, pageWidth - marginR, 43);

    // Kelompokkan per minggu (urut kronologis) — satu halaman = satu minggu (±52 halaman per tahun)
    const weekMap = {};
    const weekOrder = [];
    filtered.forEach(t => {
        const wKey = wkKey(t.date);
        if (!weekMap[wKey]) { weekMap[wKey] = []; weekOrder.push(wKey); }
        weekMap[wKey].push(t);
    });

    let currentY = 50;
    let rowCounter = 0;

    weekOrder.forEach((wKey, wIdx) => {
        // Satu halaman = satu minggu: setiap minggu baru selalu mulai di halaman baru
        if (wIdx > 0) {
            docPdf.addPage();
            currentY = 24;
        }

        const weekArr = weekMap[wKey];
        const wStart = new Date(wKey);
        const wEnd = new Date(wKey); wEnd.setDate(wEnd.getDate() + 6);
        const weekLabel = 'MINGGU ' + (wIdx + 1) + ' (' + fmtDate(wStart.toISOString()) + ' - ' + fmtDate(wEnd.toISOString()) + ')';

        docPdf.setFont('helvetica', 'bold');
        docPdf.setFontSize(8.5);
        docPdf.setTextColor(20, 20, 20);
        docPdf.text(weekLabel, marginL, currentY);
        docPdf.setDrawColor(230, 230, 230);
        docPdf.line(marginL, currentY + 4, pageWidth - marginR, currentY + 4);
        currentY += 10;

        // Susun baris per transaksi (Senin s/d Minggu) dalam minggu ini
        const bodyRows = [];
        let lastDateStr = null;
        weekArr.forEach(t => {
            rowCounter++;
            const curDateStr = new Date(t.date).toDateString();
            const isSameDay = curDateStr === lastDateStr;
            // Nama hari cukup ditulis sekali di baris pertama tiap hari, baris berikutnya dikosongkan (efek "cabang")
            const hariCell = isSameDay ? '' : dayNames[new Date(t.date).getDay()];
            lastDateStr = curDateStr;
            bodyRows.push([
                String(rowCounter),
                hariCell,
                fmtDate(t.date),
                fmtTime(t.date),
                typeLabel[t.type] || t.type,
                t.category || '-',
                t.wallet || '-',
                t.walletTo || '-',
                (t.note && t.note !== '-') ? t.note : '-',
                (t.type === 'income' || t.type === 'recv' ? '+ ' : t.type === 'transfer' ? '' : '- ') + 'Rp ' + new Intl.NumberFormat('id-ID').format(t.amount)
            ]);
        });

        // Ukuran font & tabel DIBESARKAN (disamakan dengan ukuran laporan Bulanan yang asli) supaya
        // tulisan tetap besar & jelas dibaca. TIDAK dipaksa muat 1 halaman lagi — kalau 1 minggu
        // datanya banyak, boleh sampai beberapa halaman (autoTable otomatis lanjut ke halaman berikutnya).
        let cellPad = 4;
        let bodyFontSize = 11;
        let headFontSize = 11.8;

        docPdf.autoTable({
            startY: currentY,
            head: [['No', 'Hari', 'Tanggal', 'Waktu', 'Tipe', 'Kategori', 'Dompet Asal', 'Dompet Tujuan', 'Keterangan', 'Nominal']],
            body: bodyRows,
            theme: 'grid',
            rowPageBreak: 'avoid',
            styles: { font: 'helvetica', fontStyle: 'bold', fontSize: bodyFontSize, cellPadding: cellPad, valign: 'middle', overflow: 'ellipsize', textColor: [15, 15, 15], lineColor: [210, 210, 210], lineWidth: 0.4 },
            headStyles: { fillColor: [17, 17, 20], textColor: [251, 191, 36], fontStyle: 'bold', halign: 'center', fontSize: headFontSize },
            alternateRowStyles: { fillColor: [246, 247, 249] },
            columnStyles: {
                0: { cellWidth: 40, halign: 'center' },
                1: { cellWidth: 56, halign: 'center' },
                2: { cellWidth: 64, halign: 'center' },
                3: { cellWidth: 50, halign: 'center' },
                4: { cellWidth: 86, halign: 'center', overflow: 'ellipsize' },
                5: { cellWidth: 100, overflow: 'ellipsize' },
                6: { cellWidth: 104, overflow: 'ellipsize' },
                7: { cellWidth: 104, overflow: 'ellipsize' },
                8: { cellWidth: 'auto', overflow: 'ellipsize' },
                9: { cellWidth: 100, halign: 'right', fontStyle: 'bold' }
            },
            margin: { left: marginL, right: marginR }
        });

        currentY = docPdf.lastAutoTable.finalY + 16;

        // Rekap pemasukan, pengeluaran, saldo bersih untuk minggu ini
        const ws = calcSum(weekArr);
        docPdf.setFont('helvetica', 'bold');
        docPdf.setFontSize(9);
        drawCenteredSummaryRow(docPdf, [
            { text: 'Pemasukan ' + weekLabel + ': Rp ' + new Intl.NumberFormat('id-ID').format(ws.inc), color: [16, 185, 129] },
            { text: 'Pengeluaran: Rp ' + new Intl.NumberFormat('id-ID').format(ws.exp), color: [248, 113, 113] },
            { text: 'Saldo Bersih: Rp ' + new Intl.NumberFormat('id-ID').format(ws.bal), color: [20, 20, 20] }
        ], currentY, pageWidth / 2);

        currentY += 26;
    });

    // Total keseluruhan semua riwayat, ditulis paling bawah setelah semua tabel minggu
    if (currentY > pageHeight - 100) {
        docPdf.addPage();
        currentY = 54;
    } else {
        currentY += 8;
    }
    docPdf.setDrawColor(20, 20, 20);
    docPdf.setLineWidth(1);
    docPdf.line(marginL, currentY, pageWidth - marginR, currentY);
    currentY += 24;

    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(11);
    docPdf.setTextColor(20, 20, 20);
    docPdf.text('TOTAL SELURUH RIWAYAT', marginL, currentY);
    currentY += 22;

    docPdf.setFontSize(9.5);
    drawCenteredSummaryRow(docPdf, [
        { text: 'Total Pemasukan: Rp ' + new Intl.NumberFormat('id-ID').format(s.inc), color: [16, 185, 129] },
        { text: 'Total Pengeluaran: Rp ' + new Intl.NumberFormat('id-ID').format(s.exp), color: [248, 113, 113] },
        { text: 'Saldo Bersih: Rp ' + new Intl.NumberFormat('id-ID').format(s.bal), color: [20, 20, 20] }
    ], currentY, pageWidth / 2);

    // Nomor halaman di seluruh halaman dokumen
    const totalPages = docPdf.internal.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
        docPdf.setPage(p);
        docPdf.setFont('helvetica', 'normal');
        docPdf.setFontSize(5.5);
        docPdf.setTextColor(150, 150, 150);
        docPdf.text('RHN CAPITAL · Halaman ' + p + ' / ' + totalPages, pageWidth / 2, pageHeight - 16, { align: 'center' });
    }

    docPdf.save('RHN_Capital_Laporan_Keuangan_' + new Date().toISOString().slice(0, 10) + '.pdf');
};


// Export Excel (.xlsx) — struktur & warna tulisan mengikuti PDF: dikelompokkan per minggu,
// tiap minggu ada tabel transaksi + rekap Pemasukan/Pengeluaran/Saldo Bersih, lalu total keseluruhan di baris paling akhir.
window.exportExcel = async function() {
    if (txs.length === 0) return Swal.fire({ icon: 'info', title: 'Data Kosong', text: 'Tidak ada data untuk diunduh.', background: 'var(--card)', color: 'var(--text)' });
    if (!window.ExcelJS) return Swal.fire({ icon: 'error', title: 'Gagal Membuat Excel', text: 'Library Excel belum termuat, cek koneksi internet lalu coba lagi.', background: 'var(--card)', color: 'var(--text)' });

    const typeFlt = document.getElementById('flt-type') ? document.getElementById('flt-type').value : '';
    const searchFlt = document.getElementById('flt-search') ? document.getElementById('flt-search').value.trim().toLowerCase() : '';
    let filtered = txs.slice();
    if (typeFlt) filtered = filtered.filter(t => t.type === typeFlt);
    if (searchFlt) filtered = filtered.filter(t => (t.note && t.note.toLowerCase().includes(searchFlt)) || (t.category && t.category.toLowerCase().includes(searchFlt)));
    // Jika sedang di halaman Mingguan/Bulanan, Excel hanya berisi periode yang sedang dipilih (sama seperti PDF)
    if (activePage === 'mingguan') {
        const wsel = document.getElementById('week-sel');
        const activeWeek = wsel && wsel.dataset.active;
        if (activeWeek) filtered = filtered.filter(t => wkKey(t.date) === activeWeek);
    } else if (activePage === 'bulanan') {
        const msel = document.getElementById('month-sel');
        const activeMonth = msel && msel.dataset.active;
        if (activeMonth) filtered = filtered.filter(t => t.date.slice(0, 7) === activeMonth);
    } else if (activePage === 'tahunan') {
        const ysel = document.getElementById('year-sel');
        const activeYear = ysel && ysel.dataset.active;
        if (activeYear) filtered = filtered.filter(t => t.date.slice(0, 4) === activeYear);
    } else if (activePage === 'riwayat') {
        const rysel = document.getElementById('riwayat-year-sel');
        const activeRYear = rysel && rysel.dataset.active;
        if (activeRYear) filtered = filtered.filter(t => t.date.slice(0, 4) === activeRYear);
    }
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

    const typeLabel = { income: 'Pemasukan', expense: 'Pengeluaran', transfer: 'Transfer', debt: 'Hutang', recv: 'Piutang' };
    const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const s = calcSum(filtered);
    const fmtRp = n => 'Rp ' + new Intl.NumberFormat('id-ID').format(n);

    // Palet warna disamakan persis dengan PDF (RHN CAPITAL ARUS KEUANGAN)
    const C_DARK = 'FF111114';    // header tabel (fill)
    const C_GOLD = 'FFFBBF24';    // header tabel (teks)
    const C_ALT = 'FFF6F7F9';     // baris selang-seling
    const C_GREEN = 'FF10B981';   // teks pemasukan
    const C_RED = 'FFF87171';     // teks pengeluaran
    const C_TEXT = 'FF141414';    // teks umum/saldo bersih
    const C_GREY = 'FF646464';    // teks info
    const C_BORDER = { style: 'thin', color: { argb: 'FFE1E1E1' } };

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'RHN CAPITAL';
    const sheet = workbook.addWorksheet('Laporan', { pageSetup: { orientation: 'landscape', fitToWidth: 1, fitToHeight: 0 } });
    sheet.columns = [
        { width: 6 }, { width: 10 }, { width: 12 }, { width: 9 }, { width: 14 },
        { width: 18 }, { width: 16 }, { width: 16 }, { width: 36 }, { width: 18 }
    ];

    sheet.mergeCells(1, 1, 1, 10);
    const titleCell = sheet.getCell(1, 1);
    titleCell.value = 'RHN CAPITAL ARUS KEUANGAN';
    titleCell.font = { name: 'Calibri', size: 18, bold: true, color: { argb: C_TEXT } };
    titleCell.alignment = { horizontal: 'center' };

    const userLabel = (document.getElementById('user-name') && document.getElementById('user-name').textContent) ? document.getElementById('user-name').textContent.trim() : '';
    sheet.mergeCells(2, 1, 2, 10);
    const infoCell = sheet.getCell(2, 1);
    infoCell.value = 'Akun: ' + (userLabel || '-') + '   |   Dicetak: ' + new Date().toLocaleString('id-ID') + '   |   Total Data: ' + filtered.length + ' transaksi';
    infoCell.font = { name: 'Calibri', size: 11, color: { argb: C_GREY } };
    infoCell.alignment = { horizontal: 'center' };

    // Kelompokkan per minggu (urut kronologis) — sama seperti PDF
    const weekMap = {};
    const weekOrder = [];
    filtered.forEach(t => {
        const wKey = wkKey(t.date);
        if (!weekMap[wKey]) { weekMap[wKey] = []; weekOrder.push(wKey); }
        weekMap[wKey].push(t);
    });

    const headerLabels = ['No', 'Hari', 'Tanggal', 'Waktu', 'Tipe', 'Kategori', 'Dompet Asal', 'Dompet Tujuan', 'Keterangan', 'Nominal'];
    let rowIdx = 4;
    let rowCounter = 0;

    weekOrder.forEach((wKey, wIdx) => {
        const weekArr = weekMap[wKey];
        const wStart = new Date(wKey);
        const wEnd = new Date(wKey); wEnd.setDate(wEnd.getDate() + 6);
        const weekLabel = 'MINGGU ' + (wIdx + 1) + ' (' + fmtDate(wStart.toISOString()) + ' - ' + fmtDate(wEnd.toISOString()) + ')';

        sheet.mergeCells(rowIdx, 1, rowIdx, 10);
        const wLabelCell = sheet.getCell(rowIdx, 1);
        wLabelCell.value = weekLabel;
        wLabelCell.font = { name: 'Calibri', size: 13, bold: true, color: { argb: C_TEXT } };
        rowIdx++;

        const headRow = sheet.getRow(rowIdx);
        headerLabels.forEach((h, i) => {
            const c = headRow.getCell(i + 1);
            c.value = h;
            c.font = { name: 'Calibri', size: 12, bold: true, color: { argb: C_GOLD } };
            c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C_DARK } };
            c.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
            c.border = { top: C_BORDER, left: C_BORDER, right: C_BORDER, bottom: C_BORDER };
        });
        rowIdx++;

        let lastDateStr = null;
        weekArr.forEach((t, tIdx) => {
            rowCounter++;
            const curDateStr = new Date(t.date).toDateString();
            const isSameDay = curDateStr === lastDateStr;
            const hariCell = isSameDay ? '' : dayNames[new Date(t.date).getDay()];
            lastDateStr = curDateStr;
            const nominalPrefix = (t.type === 'income' || t.type === 'recv') ? '+ ' : (t.type === 'transfer' ? '' : '- ');
            const rowVals = [
                rowCounter, hariCell, fmtDate(t.date), fmtTime(t.date), typeLabel[t.type] || t.type,
                t.category || '-', t.wallet || '-', t.walletTo || '-', (t.note && t.note !== '-') ? t.note : '-',
                nominalPrefix + fmtRp(t.amount)
            ];
            const row = sheet.getRow(rowIdx);
            rowVals.forEach((v, i) => {
                const c = row.getCell(i + 1);
                c.value = v;
                c.font = { name: 'Calibri', size: 11, bold: i === 9, color: { argb: i === 9 ? ((t.type === 'income' || t.type === 'recv') ? C_GREEN : (t.type === 'transfer' ? C_TEXT : C_RED)) : C_TEXT } };
                c.alignment = { horizontal: i === 8 ? 'left' : (i === 9 ? 'right' : 'center'), vertical: 'middle', wrapText: i === 8 };
                c.border = { top: C_BORDER, left: C_BORDER, right: C_BORDER, bottom: C_BORDER };
                if (tIdx % 2 === 1) c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C_ALT } };
            });
            rowIdx++;
        });

        rowIdx++;

        // Rekap pemasukan, pengeluaran, saldo bersih untuk minggu ini (warna sama seperti PDF)
        const ws = calcSum(weekArr);
        const sumRow = sheet.getRow(rowIdx);
        sheet.mergeCells(rowIdx, 1, rowIdx, 4);
        sumRow.getCell(1).value = 'Pemasukan ' + weekLabel + ': ' + fmtRp(ws.inc);
        sumRow.getCell(1).font = { name: 'Calibri', size: 11, bold: true, color: { argb: C_GREEN } };

        sheet.mergeCells(rowIdx, 5, rowIdx, 7);
        sumRow.getCell(5).value = 'Pengeluaran: ' + fmtRp(ws.exp);
        sumRow.getCell(5).font = { name: 'Calibri', size: 11, bold: true, color: { argb: C_RED } };

        sheet.mergeCells(rowIdx, 8, rowIdx, 10);
        sumRow.getCell(8).value = 'Saldo Bersih: ' + fmtRp(ws.bal);
        sumRow.getCell(8).font = { name: 'Calibri', size: 11, bold: true, color: { argb: C_TEXT } };
        sumRow.getCell(1).alignment = { horizontal: 'center' };
        sumRow.getCell(5).alignment = { horizontal: 'center' };
        sumRow.getCell(8).alignment = { horizontal: 'center' };

        rowIdx += 2;
    });

    // Total keseluruhan semua riwayat, ditulis di baris paling akhir (sama seperti PDF)
    rowIdx++;
    sheet.mergeCells(rowIdx, 1, rowIdx, 10);
    const totTitle = sheet.getCell(rowIdx, 1);
    totTitle.value = 'TOTAL SELURUH RIWAYAT';
    totTitle.font = { name: 'Calibri', size: 14, bold: true, color: { argb: C_TEXT } };
    totTitle.alignment = { horizontal: 'left' };
    rowIdx++;

    const totRow = sheet.getRow(rowIdx);
    sheet.mergeCells(rowIdx, 1, rowIdx, 4);
    totRow.getCell(1).value = 'Total Pemasukan: ' + fmtRp(s.inc);
    totRow.getCell(1).font = { name: 'Calibri', size: 12.5, bold: true, color: { argb: C_GREEN } };
    totRow.getCell(1).alignment = { horizontal: 'center' };

    sheet.mergeCells(rowIdx, 5, rowIdx, 7);
    totRow.getCell(5).value = 'Total Pengeluaran: ' + fmtRp(s.exp);
    totRow.getCell(5).font = { name: 'Calibri', size: 12.5, bold: true, color: { argb: C_RED } };
    totRow.getCell(5).alignment = { horizontal: 'center' };

    sheet.mergeCells(rowIdx, 8, rowIdx, 10);
    totRow.getCell(8).value = 'Saldo Bersih: ' + fmtRp(s.bal);
    totRow.getCell(8).font = { name: 'Calibri', size: 12.5, bold: true, color: { argb: C_TEXT } };
    totRow.getCell(8).alignment = { horizontal: 'center' };

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'RHN_Capital_Laporan_Keuangan_' + new Date().toISOString().slice(0, 10) + '.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};


// ==========================================================================
// BACKUP & PEMULIHAN DATA (Cloud otomatis harian + File .json instan)
// ==========================================================================
window.performCloudBackup = async function(silent) {
    if (!currentUser) return;
    try {
        if (!silent) Swal.fire({ title: 'Membuat Backup...', background: 'var(--card)', color: 'var(--text)', didOpen: () => { Swal.showLoading(); } });
        const payload = {
            transactions: txs.concat(deletedTxs),
            appPrefs: appPrefs, extraPrefs: extraPrefs,
            budgets: window.userBudgets || {}, categories: window.userCats || [],
            savingsGoals: window.savingsGoals || [], userQrisBase: window.userQrisBase || '',
            backupAt: serverTimestamp(), count: txs.length
        };
        const todayId = nowISO().slice(0, 10);
        await setDoc(doc(db, 'users', currentUser.uid, 'backups', todayId), payload);
        localStorage.setItem('rhn_last_backup_' + currentUser.uid, todayId);
        window.updateBackupInfoLabel();
        if (!silent) Swal.fire({ position: 'center', icon: 'success', title: 'Backup Tersimpan!', text: 'Data aman tersimpan di cloud (' + todayId + ').', showConfirmButton: false, timer: 1200, background: 'var(--card)', color: 'var(--text)' });
    } catch (e) {
        console.error('Backup gagal', e);
        if (!silent) Swal.fire({ icon: 'error', title: 'Backup Gagal', text: e.message, background: 'var(--card)', color: 'var(--text)' });
    }
};

window.checkAutoBackup = function() {
    if (!currentUser) return;
    if (extraPrefs.ext_autobackup === 'off') return;
    const lastB = localStorage.getItem('rhn_last_backup_' + currentUser.uid);
    const todayId = nowISO().slice(0, 10);
    if (lastB !== todayId) { window.performCloudBackup(true); }
};

window.updateBackupInfoLabel = function() {
    const el = document.getElementById('last-backup-info');
    if (!el || !currentUser) return;
    const lastB = localStorage.getItem('rhn_last_backup_' + currentUser.uid);
    el.textContent = lastB ? ('Backup Terakhir: ' + lastB + ' (Otomatis Tersimpan)') : 'Belum Ada Backup — akan dibuat otomatis hari ini';
};

window.downloadBackupFile = function() {
    if (!currentUser) return;
    const payload = {
        exportedAt: new Date().toISOString(), account: currentUser.email,
        transactions: txs.concat(deletedTxs), appPrefs: appPrefs, extraPrefs: extraPrefs,
        budgets: window.userBudgets || {}, categories: window.userCats || [],
        savingsGoals: window.savingsGoals || [], userQrisBase: window.userQrisBase || ''
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'rhn_capital_backup_' + nowISO().slice(0, 10) + '.json';
    document.body.appendChild(link); link.click(); document.body.removeChild(link);
    URL.revokeObjectURL(url);
    Swal.fire({ position: 'center', icon: 'success', title: 'File Backup Diunduh!', showConfirmButton: false, timer: 1000, background: 'var(--card)', color: 'var(--text)' });
};

window.triggerRestoreFile = function() {
    const inp = document.getElementById('restore-file-input');
    if (inp) inp.click();
};

window.restoreBackupFile = function(evt) {
    if (!currentUser) return;
    const file = evt.target.files && evt.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async function(e) {
        let data;
        try { data = JSON.parse(e.target.result); } catch (err) {
            evt.target.value = '';
            return Swal.fire({ icon: 'error', title: 'File Tidak Valid', text: 'Format file backup rusak atau bukan JSON.', background: 'var(--card)', color: 'var(--text)' });
        }
        const jumlah = Array.isArray(data.transactions) ? data.transactions.length : 0;
        const sigOfTx = t => [
            (t.date || ''), (t.type || ''), (t.amount || 0), (t.category || ''),
            (t.wallet || ''), (t.walletTo || ''), (t.note || '').trim().toLowerCase()
        ].join('|');
        const existingIds = new Set(txs.concat(deletedTxs).map(t => t.id));
        const existingSigs = new Set(txs.concat(deletedTxs).map(sigOfTx));
        const items = (data.transactions || []).filter(t => {
            if (t.id && existingIds.has(t.id)) return false;
            const sig = sigOfTx(t);
            if (existingSigs.has(sig)) return false;
            existingSigs.add(sig);
            return true;
        });
        const jumlahLewat = jumlah - items.length;
        const res = await Swal.fire({
            title: 'Pulihkan Backup?',
            html: `File berisi <b>${jumlah}</b> transaksi.<br><b>${items.length}</b> transaksi baru akan <b>ditambahkan</b> ke akun aktif.<br>${jumlahLewat > 0 ? `<b>${jumlahLewat}</b> transaksi dilewati karena datanya sudah ada.` : 'Tidak ada data yang sudah ada.'}`,
            icon: 'warning', showCancelButton: true, confirmButtonText: 'PULIHKAN', cancelButtonText: 'Batal',
            confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)', background: 'var(--card)', color: 'var(--text)'
        });
        evt.target.value = '';
        if (!res.isConfirmed) return;
        Swal.fire({ title: 'Memulihkan Data...', background: 'var(--card)', color: 'var(--text)', didOpen: () => { Swal.showLoading(); } });
        try {
            let batch = writeBatch(db); let opCount = 0; let total = 0;
            for (const t of items) {
                const cleanTx = Object.assign({}, t); delete cleanTx.id; delete cleanTx.createdAt;
                cleanTx.createdAt = serverTimestamp();
                const ref = doc(collection(db, 'users', currentUser.uid, 'transactions'));
                batch.set(ref, cleanTx);
                opCount++; total++;
                if (opCount >= 450) { await batch.commit(); batch = writeBatch(db); opCount = 0; }
            }
            if (opCount > 0) await batch.commit();
            if (data.budgets) { window.userBudgets = Object.assign({}, window.userBudgets, data.budgets); await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { budgets: window.userBudgets }, { merge: true }); }
            Swal.fire({ icon: 'success', title: 'Pemulihan Selesai!', text: total + ' transaksi berhasil dipulihkan.', background: 'var(--card)', color: 'var(--text)' });
        } catch (err) {
            Swal.fire({ icon: 'error', title: 'Pemulihan Gagal', text: err.message, background: 'var(--card)', color: 'var(--text)' });
        }
    };
    reader.readAsText(file);
};

window.exportCSV = function() {
    if(txs.length === 0) return Swal.fire({icon: 'info', title: 'Data Kosong', text: 'Tidak ada data untuk diunduh.', background: 'var(--card)', color: 'var(--text)'});
    let csvContent = "data:text/csv;charset=utf-8,Tanggal,Waktu,Tipe,Nominal,Kategori,Dompet Asal,Dompet Tujuan,Keterangan\n";
    txs.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(t => {
        const row = [
            fmtDate(t.date), fmtTime(t.date), t.type, t.amount, t.category, t.wallet || '', t.walletTo || '', (t.note || '').replace(/,/g, " ")
        ];
        csvContent += row.join(",") + "\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rhn_capital_laporan_keuangan.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

window.refreshAll = function() {
    if (activePage === 'dashboard') {
        renderMetrics();
        renderList(document.getElementById('recent-list'), txs.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 10));
        renderWalletBalances();
        renderSavings();
    } else if (activePage === 'harian') {
        renderDaily();
    } else if (activePage === 'mingguan') {
        renderWeekly();
    } else if (activePage === 'bulanan') {
        renderMonthly();
    } else if (activePage === 'tahunan') {
        renderYearly();
    } else if (activePage === 'riwayat') {
        renderAll();
    } else if (activePage === 'wallet') {
        if (typeof renderWalletTransferCard === 'function') renderWalletTransferCard();
        if (typeof window.renderPendingRequests === 'function') window.renderPendingRequests();
        if (typeof window.renderSentRequests === 'function') window.renderSentRequests();
    } else if (activePage === 'admin') {
        if (typeof window.loadAdminCSList === 'function') window.loadAdminCSList();
    }
};

window.setRealLocalTime = function() {
    const d = new Date();
    const tzOffset = d.getTimezoneOffset() * 60000;
    const localISO = new Date(d - tzOffset).toISOString().slice(0, 16);
    const fdate = document.getElementById('f-date');
    if (fdate) fdate.value = localISO;
};

// Mengatur waktu lokal secara otomatis saat aplikasi dibuka
window.setRealLocalTime();

// Mencegah auto-zoom menjengkelkan saat menekan input di iOS (iPhone/iPad)
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Perbaikan bug: grafik jadi rusak/berantakan setelah tab sempat disembunyikan
// (misalnya saat unduh/buka PDF atau Excel lalu kembali lagi ke halaman web).
// Saat tab hidden, ukuran canvas bisa berubah jadi 0 sehingga Chart.js kehilangan
// dimensi aslinya. Saat tab terlihat kembali, semua instance chart yang aktif
// dipaksa resize + redraw agar tampilannya normal lagi.
function resizeAllCharts() {
    Object.keys(charts).forEach(function (id) {
        const ch = charts[id];
        if (ch && typeof ch.resize === 'function') {
            try {
                ch.resize();
                ch.update('none');
            } catch (e) {}
        }
    });
}

document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        requestAnimationFrame(function () {
            requestAnimationFrame(resizeAllCharts);
        });
    }
});

window.addEventListener('pageshow', function () {
    requestAnimationFrame(function () {
        requestAnimationFrame(resizeAllCharts);
    });
});

window.addEventListener('focus', function () {
    requestAnimationFrame(resizeAllCharts);
});

</script>
<div id="cs-chat-screen">
  <div class="cs-chat-head">
    <div class="cs-back" onclick="window.closeCSChat()">←</div>
    <div style="flex:1;">
      <div class="cs-title" id="cs-chat-title">Customer Service</div>
      <div class="cs-sub" id="cs-chat-sub">Admin biasanya balas cepat</div>
    </div>
    <div class="cs-back" style="color:var(--red2);" onclick="window.deleteCSConversation()" title="Hapus Percakapan">🗑️</div>
  </div>
  <div class="cs-chat-body" id="cs-chat-body"></div>
  <div class="cs-chat-input-wrap">
    <input type="text" id="cs-chat-input" placeholder="Tulis pesan..." onkeydown="if(event.key==='Enter'){window.sendCSMessage();}">
    <button onclick="window.sendCSMessage()">➤</button>
  </div>
</div>

<div id="wallet-hist-screen">
  <div class="wallet-hist-head">
    <div class="cs-back" onclick="window.closeWalletHistoryScreen()">←</div>
    <div style="flex:1;">
      <div class="cs-title">Riwayat Transaksi Wallet</div>
      <div class="cs-sub" id="wallet-hist-sub">Semua transaksi di seluruh dompet</div>
    </div>
  </div>
  <div class="wallet-hist-filter">
    <select id="wallet-hist-filter-select" class="f-input-dark" onchange="window.renderWalletHistoryScreen(this.value)">
      <option value="">Semua Dompet</option>
    </select>
  </div>
  <div class="wallet-hist-body" id="wallet-hist-body"></div>
</div>

<div id="barcode-req-screen">
  <div class="wallet-hist-head">
    <div class="cs-back" onclick="window.closeBarcodeRequest()">←</div>
    <div style="flex:1;">
      <div class="cs-title">Barcode Permintaan Saldo</div>
      <div class="cs-sub" id="barcode-req-headsub">Minta orang lain scan barcode ini untuk mengirim saldo</div>
    </div>
  </div>
  <div id="barcode-req-qr-view" style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px; overflow-y:auto;">
    <div style="background:#fff; padding:20px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.25);">
      <div id="barcode-req-qrcode"></div>
    </div>
    <div style="margin-top:20px; text-align:center;">
      <div id="barcode-req-amt-label" style="font-size:11px; color:var(--text3); text-transform:uppercase; font-weight:800;">Jumlah Diminta</div>
      <div id="barcode-req-amt" style="font-size:22px; font-weight:800; color:var(--gold); margin-top:4px;">Rp 0</div>
      <div id="barcode-req-note" style="font-size:11px; color:var(--text3); margin-top:8px;">-</div>
    </div>
    <div style="font-size:10px; color:var(--text3); margin-top:20px; text-align:center; max-width:280px;">Barcode ini unik untuk permintaan ini saja dan otomatis berubah setiap kamu membuat permintaan baru.</div>
  </div>
  <div id="barcode-req-success-view" style="display:none; flex:1; flex-direction:column; align-items:center; justify-content:center; padding:24px; text-align:center;">
    <div style="width:88px; height:88px; border-radius:50%; background:rgba(16,185,129,0.15); display:flex; align-items:center; justify-content:center; font-size:44px; margin-bottom:20px; box-shadow:0 0 0 8px rgba(16,185,129,0.08);">✅</div>
    <div style="font-size:18px; font-weight:800; color:var(--green2); margin-bottom:8px;">Transaksi Berhasil!</div>
    <div id="barcode-req-success-text" style="font-size:12px; color:var(--text2); max-width:280px; line-height:1.5;">Saldo sudah diterima.</div>
    <button class="set-action" style="margin-top:24px; background:var(--green2); color:#000; border:none; padding:12px 28px; border-radius:12px;" onclick="window.closeBarcodeRequest()">SELESAI</button>
  </div>
</div>

<div id="scan-send-screen">
  <div class="wallet-hist-head">
    <div class="cs-back" onclick="window.closeScanSend()">←</div>
    <div style="flex:1;">
      <div class="cs-title">Scan Barcode Kirim Saldo</div>
      <div class="cs-sub">Arahkan kamera ke barcode permintaan saldo</div>
    </div>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px;">
    <div id="scan-send-reader" style="width:100%; max-width:340px; border-radius:20px; overflow:hidden; border:2px solid var(--border2);"></div>
    <div id="scan-send-status" style="font-size:11px; color:var(--text3); margin-top:16px; text-align:center;">Menyiapkan kamera...</div>
  </div>
</div>

</body>
</html>
