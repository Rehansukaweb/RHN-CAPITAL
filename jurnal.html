<html lang="id">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Jurnal Forex Pro · RHN</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet"/>

<!-- FIREBASE SDK (DITAMBAHKAN) -->
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js"></script>

<style>
:root {
  --teal-50:#E1F5EE; --teal-100:#9FE1CB; --teal-400:#1D9E75; --teal-600:#0F6E56; --teal-800:#085041;
  --red-50:#FCEBEB; --red-400:#E24B4A; --red-600:#A32D2D;
  --amber-50:#FAEEDA; --amber-400:#BA7517; --amber-600:#854F0B;
  --blue-50:#E6F1FB; --blue-400:#378ADD; --blue-600:#185FA5;
  --purple-50:#EEEDFE; --purple-400:#7F77DD; --purple-600:#534AB7;
  --gray-50:#F1EFE8; --gray-100:#D3D1C7; --gray-400:#888780; --gray-600:#5F5E5A;
  --bg:#F5F6FA; --surface:#fff; --border:#E2E4EA;
  --text:#1A1C23; --muted:#6B7280; --hint:#9CA3AF;
  --font:'Space Grotesk',sans-serif; --mono:'JetBrains Mono',monospace;
  --radius:12px; --radius-sm:8px; --shadow:0 2px 12px rgba(0,0,0,.08);
}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:var(--font);background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden;}
#splash{position:fixed;inset:0;background:linear-gradient(135deg,#0F6E56,#1D9E75 60%,#5dd9a8);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;}
#splash .logo{font-size:52px;animation:floatUp .6s ease both;}
#splash .title{font-size:28px;font-weight:700;color:#fff;letter-spacing:-.02em;opacity:0;animation:floatUp .6s .15s ease both;}
#splash .sub{font-size:14px;color:rgba(255,255,255,.7);opacity:0;animation:floatUp .6s .3s ease both;}
#splash .bar-wrap{width:220px;height:4px;background:rgba(255,255,255,.2);border-radius:99px;margin-top:12px;opacity:0;animation:floatUp .4s .45s ease both;}
#splash .bar-fill{height:100%;background:#fff;border-radius:99px;width:0;animation:loadBar 1.8s .5s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes floatUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes loadBar{to{width:100%}}
#splash.hide{animation:splashOut .5s .1s ease forwards;pointer-events:none;}
@keyframes splashOut{to{opacity:0;transform:scale(1.04);}}
.splash-kurs{font-size:13px;color:rgba(255,255,255,.85);background:rgba(255,255,255,.15);padding:8px 18px;border-radius:99px;opacity:0;animation:floatUp .5s .6s ease both;}
header{background:linear-gradient(135deg,#0F6E56,#1D9E75);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;position:sticky;top:0;z-index:100;box-shadow:0 2px 16px rgba(15,110,86,.25);}
.h-left{display:flex;align-items:center;gap:10px;}
.h-icon{font-size:22px;}
.h-title{font-size:18px;font-weight:700;color:#fff;letter-spacing:-.02em;}
.h-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
.h-date{font-size:12px;color:rgba(255,255,255,.7);}
.kurs-pill{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);border-radius:var(--radius-sm);padding:7px 13px;}
.kurs-dot{width:7px;height:7px;border-radius:50%;background:#5dd9a8;flex-shrink:0;animation:blink 2s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}
.kurs-dot.loading{background:#fcd34d;animation:blink 0.8s infinite;}
.kurs-dot.error{background:#f87171;animation:none;}
.kurs-info{display:flex;flex-direction:column;gap:1px;}
.kurs-val{font-size:13px;font-weight:700;color:#fff;font-family:var(--mono);transition:color 0.2s ease;}
.kurs-meta{font-size:10px;color:rgba(255,255,255,.65);}
.kurs-manual-wrap{display:flex;align-items:center;gap:6px;}
.kurs-lbl-h{font-size:11px;color:rgba(255,255,255,.8);white-space:nowrap;}
.kurs-input-h{width:80px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.35);border-radius:6px;padding:4px 7px;font-size:12px;font-family:var(--mono);color:#fff;outline:none;text-align:center;}
.kurs-input-h::placeholder{color:rgba(255,255,255,.45);}
.kurs-input-h:focus{background:rgba(255,255,255,.3);}
.btn-refresh{background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:11px;padding:5px 10px;border-radius:6px;cursor:pointer;font-family:var(--font);transition:all .15s;white-space:nowrap;}
.btn-refresh:hover{background:rgba(255,255,255,.3);}
.btn-refresh:disabled{opacity:.4;cursor:default;}
.btn-modal{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:12px;font-weight:600;padding:7px 14px;border-radius:var(--radius-sm);cursor:pointer;font-family:var(--font);transition:all .15s;display:flex;align-items:center;gap:6px;}
.btn-modal:hover{background:rgba(255,255,255,.28);}
#modalBadge{font-size:11px;background:rgba(255,255,255,.2);padding:2px 8px;border-radius:99px;}
.kurs-countdown{font-size:10px;color:rgba(255,255,255,.55);font-family:var(--mono);}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:500;align-items:center;justify-content:center;backdrop-filter:blur(3px);}
.overlay.show{display:flex;}
.modal{background:var(--surface);border-radius:18px;padding:28px;width:340px;max-width:92vw;box-shadow:0 20px 60px rgba(0,0,0,.2);animation:modalIn .22s ease;}
@keyframes modalIn{from{opacity:0;transform:scale(.93) translateY(12px)}to{opacity:1;transform:none}}
.modal h2{font-size:18px;font-weight:700;color:var(--teal-600);margin-bottom:4px;}
.modal p{font-size:13px;color:var(--muted);margin-bottom:20px;}
.modal label{font-size:13px;font-weight:600;color:var(--text);display:block;margin-bottom:7px;}
.modal input{width:100%;border:2px solid var(--border);border-radius:10px;padding:11px 14px;font-size:16px;font-family:var(--mono);outline:none;transition:border-color .15s;color:var(--text);}
.modal input:focus{border-color:var(--teal-400);}
.modal-actions{display:flex;gap:10px;margin-top:20px;}
.btn-save{flex:1;background:var(--teal-400);color:#fff;border:none;border-radius:10px;padding:12px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--font);transition:background .15s;}
.btn-save:hover{background:var(--teal-600);}
.btn-cancel{background:var(--gray-50);color:var(--muted);border:none;border-radius:10px;padding:12px 18px;font-size:14px;cursor:pointer;font-family:var(--font);}
.container{max-width:1300px;margin:0 auto;padding:22px 16px;}
.info-strip{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 20px;margin-bottom:18px;display:flex;flex-wrap:wrap;gap:10px 24px;align-items:center;}
.info-item{display:flex;flex-direction:column;gap:2px;}
.info-lbl{font-size:10px;font-weight:600;color:var(--hint);text-transform:uppercase;letter-spacing:.06em;}
.info-val{font-size:15px;font-weight:700;font-family:var(--mono);color:var(--text);transition:color 0.2s ease;}
.info-idr{font-size:11px;font-weight:600;font-family:var(--mono);color:var(--blue-400);margin-top:1px;}
.info-divider{width:1px;height:40px;background:var(--border);margin:0 4px;}
.tab-nav{display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap;}
.tab-btn{font-size:13px;font-weight:600;padding:9px 22px;border-radius:var(--radius-sm);border:1.5px solid var(--border);background:var(--surface);color:var(--muted);cursor:pointer;font-family:var(--font);transition:all .15s;}
.tab-btn.active{background:var(--teal-600);color:#fff;border-color:var(--teal-600);}
.tab-btn:hover:not(.active){background:var(--teal-50);border-color:var(--teal-100);color:var(--teal-600);}
.tab-content{display:none;animation:fadeIn .25s ease;}
.tab-content.show{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.month-bar{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;}
.month-btn{font-size:12px;padding:6px 14px;border-radius:var(--radius-sm);border:1.5px solid var(--border);background:var(--surface);color:var(--muted);cursor:pointer;font-family:var(--font);transition:all .15s;}
.month-btn.active{background:var(--teal-400);color:#fff;border-color:var(--teal-400);font-weight:600;}
.month-btn:hover:not(.active){background:var(--teal-50);border-color:var(--teal-100);color:var(--teal-600);}
.stats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:18px;}
@media(max-width:760px){.stats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:480px){.stats-grid{grid-template-columns:repeat(2,1fr);}}
.stat{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px;text-align:center;transition:box-shadow .15s;}
.stat:hover{box-shadow:var(--shadow);}
.stat-lbl{font-size:10px;color:var(--hint);text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px;}
.stat-val{font-size:22px;font-weight:700;font-family:var(--mono);}
.stat-idr{font-size:11px;font-weight:600;font-family:var(--mono);color:var(--blue-400);margin-top:4px;}
.c-green{color:var(--teal-400);}.c-red{color:var(--red-400);}.c-blue{color:var(--blue-400);}.c-purple{color:var(--purple-400);}.c-gray{color:var(--gray-400);}
.wr-bar{height:5px;background:var(--border);border-radius:99px;margin-top:8px;overflow:hidden;}
.wr-fill{background:var(--teal-400);height:100%;border-radius:99px;transition:width .5s cubic-bezier(.4,0,.2,1);}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:18px;box-shadow:var(--shadow);}
.card-hdr{background:var(--teal-50);border-bottom:1px solid var(--teal-100);padding:13px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;}
.card-title{font-size:15px;font-weight:700;color:var(--teal-600);}
.card-hint{font-size:11px;color:var(--muted);}
table{width:100%;border-collapse:collapse;font-size:13px;table-layout:fixed;}
thead th{background:#F7FDF9;color:var(--teal-600);font-weight:600;padding:10px 8px;text-align:center;font-size:11px;border-bottom:1.5px solid var(--teal-100);font-family:var(--font);}
thead th.th-idr{background:#EEF3FF;color:var(--blue-600);}
tbody tr:hover{background:#F0FDF8;}
tbody td{padding:6px 7px;text-align:center;border-bottom:1px solid #F5F5F5;vertical-align:middle;}
tbody tr:last-child td{border-bottom:none;}
td.day-lbl{color:var(--hint);font-size:11px;}
td input[type="text"],td input[type="number"]{width:100%;border:1px solid transparent;background:transparent;text-align:center;font-size:13px;color:var(--text);font-family:var(--font);padding:3px 4px;border-radius:6px;outline:none;transition:all .15s;}
td input:focus{background:var(--teal-50);border-color:var(--teal-100);}
td input::placeholder{color:var(--hint);}
td.pl-cell{font-family:var(--mono);font-weight:700;}
td.idr-cell{font-family:var(--mono);font-size:12px;font-weight:600;}
td.pct-cell{font-family:var(--mono);font-size:12px;}
.badge{display:inline-block;font-size:10px;font-weight:700;padding:3px 10px;border-radius:99px;cursor:pointer;user-select:none;letter-spacing:.04em;transition:transform .1s;}
.badge:active{transform:scale(.93);}
.b-win{background:var(--teal-50);color:var(--teal-600);}
.b-loss{background:var(--red-50);color:var(--red-600);}
.b-be{background:var(--amber-50);color:var(--amber-600);}
.b-none{background:#F3F4F6;color:var(--hint);border:1px dashed var(--border);}
textarea.note{font-size:12px;color:var(--muted);width:100%;border:1px solid transparent;background:transparent;font-family:var(--font);resize:none;outline:none;padding:2px 4px;border-radius:6px;transition:all .15s;}
textarea.note:focus{background:#F9F9F9;border-color:var(--border);}
textarea.note::placeholder{color:var(--hint);}
tr.weekend{background:#FAFAFA;}
tr.weekend td{color:#B0B4BC;}
.recap-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
@media(max-width:640px){.recap-grid{grid-template-columns:1fr;}}
.rc{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);}
.rc-hdr{padding:13px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--border);}
.rc-icon{font-size:16px;width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;}
.rc-title{font-size:14px;font-weight:700;}
.rc-sub{font-size:11px;margin-top:1px;}
.rc-daily .rc-hdr{background:var(--blue-50);}
.rc-daily .rc-icon{background:#BFDBFE;}
.rc-daily .rc-title{color:var(--blue-600);}
.rc-daily .rc-sub{color:#3B82F6;}
.rc-weekly .rc-hdr{background:var(--teal-50);}
.rc-weekly .rc-icon{background:var(--teal-100);}
.rc-weekly .rc-title{color:var(--teal-600);}
.rc-weekly .rc-sub{color:var(--teal-400);}
.rc-monthly .rc-hdr{background:var(--amber-50);}
.rc-monthly .rc-icon{background:#FCD34D;}
.rc-monthly .rc-title{color:var(--amber-600);}
.rc-monthly .rc-sub{color:var(--amber-400);}
.rc-yearly .rc-hdr{background:var(--purple-50);}
.rc-yearly .rc-icon{background:#DDD6FE;}
.rc-yearly .rc-title{color:var(--purple-600);}
.rc-yearly .rc-sub{color:var(--purple-400);}
.rtable{width:100%;border-collapse:collapse;font-size:12.5px;}
.rtable th{padding:8px 12px;text-align:left;font-size:10px;font-weight:600;color:var(--hint);text-transform:uppercase;letter-spacing:.06em;background:#FAFAFA;border-bottom:1px solid var(--border);}
.rtable th:not(:first-child){text-align:right;}
.rtable th.th-idr{color:var(--blue-600);background:#EEF3FF;}
.rtable td{padding:8px 12px;border-bottom:1px solid #F5F5F5;vertical-align:middle;font-family:var(--mono);}
.rtable td:first-child{font-family:var(--font);}
.rtable td:not(:first-child){text-align:right;}
.rtable td.td-idr{color:var(--blue-400);font-size:11px;}
.rtable tr:last-child td{border-bottom:none;}
.rtable tr:hover td{background:#FAFAFA;}
.rtable tfoot td{font-weight:700;background:#F7FDF9;border-top:1.5px solid var(--teal-100);}
.rtable tfoot td.td-idr{background:#EEF3FF;}
.pl-pos{color:var(--teal-400);font-weight:700;}
.pl-neg{color:var(--red-400);font-weight:700;}
.pl-zero{color:var(--hint);}
.mini-badge{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;}
.mb-win{background:var(--teal-50);color:var(--teal-600);}
.mb-loss{background:var(--red-50);color:var(--red-600);}
.mb-be{background:var(--amber-50);color:var(--amber-600);}
.mb-none{background:#F3F4F6;color:var(--hint);}
.empty{text-align:center;padding:32px;color:var(--hint);font-size:13px;}
.yr-wrap{padding:14px 16px;}
.yr-row{display:flex;align-items:center;gap:10px;margin-bottom:9px;}
.yr-lbl{width:42px;font-size:11px;font-weight:600;color:var(--muted);flex-shrink:0;}
.yr-bg{flex:1;background:var(--border);border-radius:99px;height:13px;overflow:hidden;}
.yr-fill{height:100%;border-radius:99px;transition:width .6s cubic-bezier(.4,0,.2,1);}
.yr-pos{background:linear-gradient(90deg,var(--teal-400),#5dd9a8);}
.yr-neg{background:linear-gradient(90deg,var(--red-400),#f87171);}
.yr-val{width:140px;text-align:right;font-size:11px;font-weight:700;flex-shrink:0;font-family:var(--mono);line-height:1.6;}
.yr-idr{font-size:10px;color:var(--blue-400);font-weight:600;}
.yr-total{border-top:1px solid var(--border);margin-top:10px;padding-top:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;}
.footer{text-align:center;margin-top:28px;font-size:11px;color:var(--hint);padding-bottom:24px;}
</style>
</head>
<body>

<div id="splash">
  <div class="logo">📈</div>
  <div class="title">Jurnal Forex Pro</div>
  <div class="sub">RHN · Trading Journal 2026</div>
  <div class="bar-wrap"><div class="bar-fill"></div></div>
  <div class="splash-kurs" id="splashKurs">🔄 Mengambil kurs USD/IDR dari Binance...</div>
</div>

<div class="overlay" id="overlay" onclick="closeOnBg(event)">
  <div class="modal">
    <h2>💰 Set Modal Awal</h2>
    <p>Modal awal digunakan sebagai acuan perhitungan % profit/loss dan saldo akhir.</p>
    <label for="modalInput">Jumlah Modal (USC)</label>
    <input type="number" id="modalInput" placeholder="Contoh: 1000" min="0" step="any"/>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">Batal</button>
      <button class="btn-save" onclick="saveModal()">✅ Simpan Modal</button>
    </div>
  </div>
</div>

<header>
  <div class="h-left">
    <span class="h-icon">📈</span>
    <span class="h-title">Jurnal Forex Pro · RHN</span>
  </div>
  <div class="h-right">
    <div class="kurs-pill">
      <div class="kurs-dot loading" id="kursDot"></div>
      <div class="kurs-info">
        <div class="kurs-val" id="kursValEl">USD/IDR —</div>
        <div class="kurs-meta" id="kursMetaEl">Memuat dari Binance...</div>
        <div class="kurs-countdown" id="kursCountdown"></div>
      </div>
    </div>
    <div class="kurs-manual-wrap">
      <span class="kurs-lbl-h">Override kurs:</span>
      <input class="kurs-input-h" type="number" id="kursOverride" placeholder="cth: 16200" min="1000" step="50" oninput="onManualKurs()"/>
    </div>
    <button class="btn-refresh" id="btnRefresh" onclick="fetchKursLive()">🔄 Refresh</button>
    <button class="btn-modal" onclick="openModal()">💰 Modal Awal <span id="modalBadge">Belum diset</span></button>
    <span class="h-date" id="hDate"></span>
  </div>
</header>

<div class="container">
  <div class="info-strip">
    <div class="info-item">
      <span class="info-lbl">🔴 Kurs Live USD/IDR</span>
      <span class="info-val" id="iKurs">—</span>
      <span class="info-idr" id="iKursSub">1 USC = —</span>
    </div>
    <div class="info-divider"></div>
    <div class="info-item"><span class="info-lbl">Modal Awal</span><span class="info-val" id="iModal">—</span><span class="info-idr" id="iModalIDR"></span></div>
    <div class="info-divider"></div>
    <div class="info-item"><span class="info-lbl">Saldo Sekarang</span><span class="info-val" id="iSaldo">—</span><span class="info-idr" id="iSaldoIDR"></span></div>
    <div class="info-divider"></div>
    <div class="info-item"><span class="info-lbl">P/L Bulan Ini</span><span class="info-val" id="iPL">0.00</span><span class="info-idr" id="iPLIDR"></span></div>
    <div class="info-divider"></div>
    <div class="info-item"><span class="info-lbl">P/L Tahun Ini</span><span class="info-val" id="iPLYear">0.00</span><span class="info-idr" id="iPLYearIDR"></span></div>
    <div class="info-divider"></div>
    <div class="info-item"><span class="info-lbl">Win Rate Bulan</span><span class="info-val" id="iWR">—</span></div>
    <div class="info-divider"></div>
    <div class="info-item"><span class="info-lbl">Total Trade Tahun</span><span class="info-val" id="iTotalYear">0</span></div>
  </div>

  <div class="tab-nav">
    <button class="tab-btn active" onclick="switchTab('jurnal',this)">📋 Jurnal</button>
    <button class="tab-btn" onclick="switchTab('recap',this)">📊 Rekap</button>
  </div>

  <div class="tab-content show" id="tab-jurnal">
    <div class="month-bar" id="monthBar1"></div>
    <div class="stats-grid">
      <div class="stat"><div class="stat-lbl">Modal Awal</div><div class="stat-val c-purple" id="sModal" style="font-size:17px">—</div><div class="stat-idr" id="sModalIDR"></div></div>
      <div class="stat"><div class="stat-lbl">Total Trade</div><div class="stat-val c-blue" id="sTotal">0</div></div>
      <div class="stat"><div class="stat-lbl">Win Rate</div><div class="stat-val c-green" id="sWR">0%</div><div class="wr-bar"><div class="wr-fill" id="wrBar" style="width:0%"></div></div></div>
      <div class="stat"><div class="stat-lbl">Win / Loss / BE</div><div class="stat-val c-gray" id="sWLB" style="font-size:17px">0/0/0</div></div>
      <div class="stat"><div class="stat-lbl">P/L Bulan</div><div class="stat-val" id="sPL">+0.00</div><div class="stat-idr" id="sPLIDR"></div></div>
    </div>
    <div class="card">
      <div class="card-hdr">
        <span class="card-title" id="tblTitle">— 2026</span>
        <span class="card-hint">Klik badge WIN/LOSS/BE · Kolom biru = Rupiah LIVE otomatis</span>
      </div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr>
            <th style="width:8%">Hari</th><th style="width:4%">Tgl</th>
            <th style="width:9%">Pair</th><th style="width:6%">Lot</th>
            <th style="width:9%">Keluar (USC)</th><th style="width:9%">Masuk (USC)</th>
            <th style="width:8%">P/L USC</th>
            <th style="width:11%" class="th-idr">🔴 P/L Rupiah LIVE</th>
            <th style="width:7%">% Modal</th><th style="width:7%">Hasil</th>
            <th style="width:14%">Catatan</th>
          </tr></thead>
          <tbody id="tBody"></tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="tab-content" id="tab-recap">
    <div class="month-bar" id="monthBar2"></div>
    <div class="recap-grid">
      <div class="rc rc-daily"><div class="rc-hdr"><div class="rc-icon">📅</div><div><div class="rc-title">Rekap Harian</div><div class="rc-sub" id="rcDailySub"></div></div></div><div id="rcDaily"></div></div>
      <div class="rc rc-weekly"><div class="rc-hdr"><div class="rc-icon">📆</div><div><div class="rc-title">Rekap Mingguan</div><div class="rc-sub" id="rcWeeklySub"></div></div></div><div id="rcWeekly"></div></div>
      <div class="rc rc-monthly"><div class="rc-hdr"><div class="rc-icon">🗓️</div><div><div class="rc-title">Rekap Bulanan</div><div class="rc-sub" id="rcMonthlySub"></div></div></div><div id="rcMonthly"></div></div>
      <div class="rc rc-yearly"><div class="rc-hdr"><div class="rc-icon">📈</div><div><div class="rc-title">Rekap Tahunan</div><div class="rc-sub" id="rcYearlySub"></div></div></div><div id="rcYearly"></div></div>
    </div>
  </div>

  <div class="footer">Data tersimpan otomatis di browser · Kurs via Binance Live (USDT/BIDR) · Real-time Update · Jurnal Forex Pro RHN © 2026</div>
</div>

<script>
const MONTHS=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const DAYS=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const YEAR=2026;
const MODAL_KEY='forex_rhn_v3_modal';
const KURS_KEY='forex_rhn_v3_kurs';
const KURS_TS_KEY='forex_rhn_v3_kurs_ts';
const REFRESH_INTERVAL=60*1000; // 1 menit
const SK=m=>`forex_rhn_v2_${YEAR}_${m}`;

let activeMonth=new Date().getMonth();
let modalAwal=0;
let kursUSDIDR=16200;
let monthData={};
let activeTab='jurnal';
let countdownInterval=null;

const daysIn=(m)=>new Date(YEAR,m+1,0).getDate();
const dayName=(m,d)=>DAYS[new Date(YEAR,m,d).getDay()];
const isWknd=(m,d)=>{const w=new Date(YEAR,m,d).getDay();return w===0||w===6;};
const weekNum=d=>Math.ceil(d/7);
function uscToIDR(usc){return usc*kursUSDIDR/100;}
function fmtIDR(val){const s=val<0?'-':'';const a=Math.abs(val);if(a>=1000000000)return s+'Rp '+(a/1000000000).toFixed(2)+' M';if(a>=1000000)return s+'Rp '+(a/1000000).toFixed(2)+' jt';return s+'Rp '+Math.round(a).toLocaleString('id-ID');}
function fmtIDRFull(val){const s=val<0?'-':'';const a=Math.abs(val);return s+'Rp '+Math.round(a).toLocaleString('id-ID');}
const fmt=v=>{const s=v<0?'-':'';const a=Math.abs(v);return s+'USC '+(a>=1000?a.toLocaleString('id-ID',{minimumFractionDigits:2,maximumFractionDigits:2}):a.toFixed(2));};
const plStr=v=>(v>0?'+':'')+v.toFixed(2);
const pctStr=v=>modalAwal?((v/modalAwal)*100).toFixed(2)+'%':'—';
const plCls=v=>v>0?'pl-pos':v<0?'pl-neg':'pl-zero';
const mbCls=r=>r==='WIN'?'mb-win':r==='LOSS'?'mb-loss':r==='BE'?'mb-be':'mb-none';
function loadMonth(m){try{return JSON.parse(localStorage.getItem(SK(m))||'{}');}catch{return{};}}
function saveMonth(m,d){try{localStorage.setItem(SK(m),JSON.stringify(d));}catch{}}

/* ══════════════════════════════════════════════════════════════
   KURS BINANCE LIVE (USDT/BIDR) - WEBSOCKET & API
══════════════════════════════════════════════════════════════ */
function setKursDot(state){
  const d=document.getElementById('kursDot');
  d.className='kurs-dot'+(state==='loading'?' loading':state==='error'?' error':'');
}

function applyKurs(rate,source,ts){
  kursUSDIDR=rate;
  const perUsc=Math.round(rate/100);
  const timeStr=new Date(ts).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const sourceLabel={
    'binance-ws':'🟢 Binance Live',
    'binance-api':'🟡 Binance API',
    'cache':'📦 Cache',
    'manual':'✏️ Override manual',
    'error':'⚠️ Fallback default'
  }[source]||'🔄';

  // Efek Kedip saat harga berubah
  const rateEl = document.getElementById('kursValEl');
  rateEl.textContent='Rp '+Math.round(rate).toLocaleString('id-ID')+' / USD';
  if (source === 'binance-ws') {
     rateEl.style.color = 'var(--teal-400)';
     setTimeout(() => { rateEl.style.color = '#fff'; }, 200);
  }

  const iKursEl = document.getElementById('iKurs');
  iKursEl.textContent='Rp '+Math.round(rate).toLocaleString('id-ID');
  if (source === 'binance-ws') {
     iKursEl.style.color = 'var(--teal-400)';
     setTimeout(() => { iKursEl.style.color = 'var(--text)'; }, 200);
  }

  const isLive=['binance-ws','binance-api'].includes(source);
  document.getElementById('kursMetaEl').textContent=
    source==='manual'?`✏️ Override manual · 1¢=Rp${perUsc.toLocaleString('id-ID')}`:
    `${sourceLabel} · ${timeStr} · 1¢=Rp${perUsc.toLocaleString('id-ID')}`;
  setKursDot(source==='error'?'error':'');

  document.getElementById('splashKurs').textContent=
    `${sourceLabel}: 1 USD = Rp ${Math.round(rate).toLocaleString('id-ID')}`;
  document.getElementById('iKursSub').textContent='1 USC = Rp '+perUsc.toLocaleString('id-ID');

  if(isLive){
    try{localStorage.setItem(KURS_KEY,rate.toString());localStorage.setItem(KURS_TS_KEY,ts.toString());}catch{}
    startCountdown(ts, source === 'binance-ws');
  }else if(source==='cache'){
    startCountdown(ts, false);
  }else if(source==='manual'){
    if(countdownInterval)clearInterval(countdownInterval);
    document.getElementById('kursCountdown').textContent='✏️ Mode override manual aktif';
  }
  
  // Hanya refresh IDR saja (supaya input form jurnal tidak lost focus waktu lagi ngetik)
  refreshIDR();
}

function refreshIDR() {
  renderStats(calcStats(activeMonth,monthData));
  for(let d=1; d<=daysIn(activeMonth); d++){
     const r = monthData[d] || {};
     const pl = (parseFloat(r.income)||0) - (parseFloat(r.outcome)||0);
     const idrCell = document.querySelector(`td[data-idr="${d}"]`);
     if(idrCell) {
         idrCell.textContent = pl !== 0 ? fmtIDR(uscToIDR(pl)) : '—';
     }
  }
  if(activeTab === 'recap') renderRecap();
}

function startCountdown(fetchedAt, isWs = false){
  if(countdownInterval)clearInterval(countdownInterval);
  const el=document.getElementById('kursCountdown');
  if(isWs) {
     el.textContent = '⚡ Real-time aktif';
     return;
  }
  function update(){
    const remaining=Math.max(0,REFRESH_INTERVAL-(Date.now()-fetchedAt));
    if(remaining<=0){el.textContent='⏰ Memperbarui...';clearInterval(countdownInterval);return;}
    const s=Math.ceil(remaining/1000);
    el.textContent=`⏱ Update dalam ${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
  }
  update();countdownInterval=setInterval(update,1000);
}

async function fetchKursLive(){
  const ov=parseFloat(document.getElementById('kursOverride').value);
  if(!isNaN(ov)&&ov>=1000){applyKurs(ov,'manual',Date.now());return;}

  setKursDot('loading');
  document.getElementById('kursMetaEl').textContent='🔄 Mengambil dari Binance API...';
  document.getElementById('kursCountdown').textContent='';
  document.getElementById('btnRefresh').disabled=true;

  try{
    const r=await fetch('https://api.binance.com/api/v3/ticker/price?symbol=USDTBIDR',{signal:AbortSignal.timeout(8000)});
    const j=await r.json();
    if(j&&j.price){
      applyKurs(parseFloat(j.price),'binance-api',Date.now());
      document.getElementById('btnRefresh').disabled=false;
      return;
    }
  }catch(e){console.error("Gagal Binance API:", e);}

  // Fallback
  const cached=localStorage.getItem(KURS_KEY);
  if(cached){
    applyKurs(parseFloat(cached),'cache',parseInt(localStorage.getItem(KURS_TS_KEY)||'0'));
    document.getElementById('kursMetaEl').textContent='⚠️ Binance gagal · pakai cache terakhir';
  }else{
    applyKurs(16200,'error',Date.now());
    setKursDot('error');
  }
  document.getElementById('btnRefresh').disabled=false;
}

async function fetchKurs(forceRefresh=false){
  const ov=parseFloat(document.getElementById('kursOverride').value);
  if(!forceRefresh&&!isNaN(ov)&&ov>=1000){applyKurs(ov,'manual',Date.now());return;}
  if(!forceRefresh){
    const cached=localStorage.getItem(KURS_KEY);
    const cachedTs=parseInt(localStorage.getItem(KURS_TS_KEY)||'0');
    if(cached&&(Date.now()-cachedTs)<REFRESH_INTERVAL){
      applyKurs(parseFloat(cached),'cache',cachedTs);
      document.getElementById('btnRefresh').disabled=false;
      return;
    }
  }
  await fetchKursLive();
}

function onManualKurs(){
  const val=parseFloat(document.getElementById('kursOverride').value);
  if(!isNaN(val)&&val>=1000)applyKurs(val,'manual',Date.now());
  else if(document.getElementById('kursOverride').value==='')fetchKursLive();
}

function initLiveUSD() {
  const socket = new WebSocket('wss://stream.binance.com:9443/ws/usdtidr@ticker');
  socket.addEventListener('message', function (event) {
      const ov=parseFloat(document.getElementById('kursOverride').value);
      if(!isNaN(ov)&&ov>=1000) return; // Jika override manual aktif, abaikan WS

      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.c); 
      if (newPrice && newPrice !== kursUSDIDR) {
          applyKurs(newPrice, 'binance-ws', Date.now());
      }
  });
  socket.addEventListener('close', () => setTimeout(initLiveUSD, 3000));
  socket.addEventListener('error', () => { /* let it close and retry */ });
}

/* ─── MODAL ─── */
function loadModal(){const s=localStorage.getItem(MODAL_KEY);modalAwal=s?parseFloat(s):0;}
function openModal(){document.getElementById('modalInput').value=modalAwal||'';document.getElementById('overlay').classList.add('show');setTimeout(()=>document.getElementById('modalInput').focus(),80);}
function closeModal(){document.getElementById('overlay').classList.remove('show');}
function closeOnBg(e){if(e.target===document.getElementById('overlay'))closeModal();}
function saveModal(){modalAwal=parseFloat(document.getElementById('modalInput').value)||0;localStorage.setItem(MODAL_KEY,modalAwal.toString());closeModal();render();if(activeTab==='recap')renderRecap();}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if(e.key==='Enter'&&document.getElementById('overlay').classList.contains('show'))saveModal();});

/* ─── CALC ─── */
function calcStats(m,d){let wins=0,losses=0,be=0,total=0,pl=0;for(let i=1;i<=daysIn(m);i++){const r=d[i]||{};pl+=(parseFloat(r.income)||0)-(parseFloat(r.outcome)||0);const res=r.result||'NONE';if(res==='WIN'){wins++;total++;}else if(res==='LOSS'){losses++;total++;}else if(res==='BE'){be++;total++;}}return{wins,losses,be,total,wr:total>0?Math.round((wins/total)*100):0,pl};}
function calcYearStats(){let totalTrade=0,totalPL=0;for(let m=0;m<12;m++){const d=m===activeMonth?monthData:loadMonth(m);const st=calcStats(m,d);totalTrade+=st.total;totalPL+=st.pl;}return{totalTrade,totalPL};}

/* ─── RENDER STATS ─── */
function renderStats(st){
  document.getElementById('sModal').textContent=modalAwal>0?fmt(modalAwal):'—';
  document.getElementById('sModalIDR').textContent=modalAwal>0?fmtIDR(uscToIDR(modalAwal)):'';
  document.getElementById('sTotal').textContent=st.total;
  const wrEl=document.getElementById('sWR');wrEl.textContent=st.wr+'%';wrEl.className='stat-val '+(st.wr>=50?'c-green':st.wr>0?'c-red':'c-gray');
  document.getElementById('wrBar').style.width=st.wr+'%';
  document.getElementById('sWLB').textContent=st.wins+'/'+st.losses+'/'+st.be;
  const plEl=document.getElementById('sPL');plEl.textContent=plStr(st.pl);plEl.className='stat-val '+(st.pl>0?'c-green':st.pl<0?'c-red':'c-gray');
  const sPLIDR=document.getElementById('sPLIDR');sPLIDR.textContent=fmtIDR(uscToIDR(st.pl));sPLIDR.style.color=st.pl>0?'var(--teal-400)':st.pl<0?'var(--red-400)':'var(--hint)';
  const saldo=modalAwal+st.pl;
  document.getElementById('iModal').textContent=modalAwal>0?fmt(modalAwal):'—';
  document.getElementById('iModalIDR').textContent=modalAwal>0?fmtIDRFull(uscToIDR(modalAwal)):'';
  document.getElementById('iSaldo').textContent=modalAwal>0?fmt(saldo):'—';
  document.getElementById('iSaldoIDR').textContent=modalAwal>0?fmtIDRFull(uscToIDR(saldo)):'';
  const piEl=document.getElementById('iPL');piEl.textContent=plStr(st.pl);piEl.style.color=st.pl>0?'var(--teal-400)':st.pl<0?'var(--red-400)':'var(--hint)';
  const piIDR=document.getElementById('iPLIDR');piIDR.textContent=fmtIDRFull(uscToIDR(st.pl));piIDR.style.color=st.pl>0?'var(--teal-400)':st.pl<0?'var(--red-400)':'var(--hint)';
  document.getElementById('iWR').textContent=st.total>0?st.wr+'%':'—';
  document.getElementById('modalBadge').textContent=modalAwal>0?fmt(modalAwal):'Belum diset';
  const yst=calcYearStats();
  const pyEl=document.getElementById('iPLYear');pyEl.textContent=plStr(yst.totalPL)+' USC';pyEl.style.color=yst.totalPL>0?'var(--teal-400)':yst.totalPL<0?'var(--red-400)':'var(--hint)';
  const pyIDR=document.getElementById('iPLYearIDR');pyIDR.textContent=fmtIDRFull(uscToIDR(yst.totalPL));pyIDR.style.color=yst.totalPL>0?'var(--teal-400)':yst.totalPL<0?'var(--red-400)':'var(--hint)';
  document.getElementById('iTotalYear').textContent=yst.totalTrade;
}

/* ─── TABLE ─── */
function cycleResult(r){if(!r||r==='NONE')return 'WIN';if(r==='WIN')return 'LOSS';if(r==='LOSS')return 'BE';return 'NONE';}
function badgeCls(r){return 'badge '+(r==='WIN'?'b-win':r==='LOSS'?'b-loss':r==='BE'?'b-be':'b-none');}
function renderTable(){
  const tbody=document.getElementById('tBody');
  document.getElementById('tblTitle').textContent=MONTHS[activeMonth]+' '+YEAR;
  tbody.innerHTML='';
  for(let d=1;d<=daysIn(activeMonth);d++){
    const row=monthData[d]||{};
    const inc=parseFloat(row.income)||0,out=parseFloat(row.outcome)||0,pl=inc-out;
    const result=row.result||'NONE';
    const plColor=pl>0?'var(--teal-400)':pl<0?'var(--red-400)':'var(--hint)';
    const idrDisp=pl!==0?fmtIDR(uscToIDR(pl)):'—';
    const idrColor=pl>0?'var(--teal-400)':pl<0?'var(--red-400)':'var(--hint)';
    const pct=modalAwal?((pl/modalAwal)*100).toFixed(2)+'%':'—';
    const tr=document.createElement('tr');
    if(isWknd(activeMonth,d))tr.className='weekend';
    tr.innerHTML=`<td class="day-lbl">${dayName(activeMonth,d)}</td><td><b>${d}</b></td>
      <td><input type="text" placeholder="XAUUSD" value="${row.pair||''}" data-day="${d}" data-field="pair"/></td>
      <td><input type="number" placeholder="0.01" value="${row.lot||''}" data-day="${d}" data-field="lot" step="0.01" min="0"/></td>
      <td><input type="number" placeholder="0" value="${row.outcome||''}" data-day="${d}" data-field="outcome" step="any" min="0"/></td>
      <td><input type="number" placeholder="0" value="${row.income||''}" data-day="${d}" data-field="income" step="any" min="0"/></td>
      <td class="pl-cell" style="color:${plColor}" data-pl="${d}">${pl!==0?plStr(pl):'0'}</td>
      <td class="idr-cell" style="color:${idrColor}" data-idr="${d}">${idrDisp}</td>
      <td class="pct-cell" style="color:${plColor}" data-pct="${d}">${pct}</td>
      <td><span class="${badgeCls(result)}" data-day="${d}">${result==='NONE'?'—':result}</span></td>
      <td><textarea class="note" rows="1" placeholder="catatan…" data-day="${d}" data-field="note">${row.note||''}</textarea></td>`;
    tbody.appendChild(tr);
  }
  tbody.querySelectorAll('input,textarea').forEach(el=>el.addEventListener('input',()=>updateRow(el)));
  tbody.querySelectorAll('span[data-day]').forEach(badge=>{
    badge.addEventListener('click',()=>{
      const day=badge.dataset.day;
      if(!monthData[day])monthData[day]={};
      monthData[day].result=cycleResult(monthData[day].result);
      saveMonth(activeMonth,monthData);
      badge.className=badgeCls(monthData[day].result);
      badge.textContent=monthData[day].result==='NONE'?'—':monthData[day].result;
      
      // Update IDR dan Stats secara presisi tanpa merusak ketikan user
      refreshIDR();
    });
  });
}
function updateRow(el){
  const day=el.dataset.day,field=el.dataset.field;
  if(!monthData[day])monthData[day]={};
  monthData[day][field]=el.value;
  saveMonth(activeMonth,monthData);
  const r=monthData[day];
  const inc=parseFloat(r.income)||0,out=parseFloat(r.outcome)||0,pl=inc-out;
  const plColor=pl>0?'var(--teal-400)':pl<0?'var(--red-400)':'var(--hint)';
  const idrColor=pl>0?'var(--teal-400)':pl<0?'var(--red-400)':'var(--hint)';
  const plCell=document.querySelector(`td[data-pl="${day}"]`);
  const idrCell=document.querySelector(`td[data-idr="${day}"]`);
  const pctCell=document.querySelector(`td[data-pct="${day}"]`);
  if(plCell){plCell.textContent=pl!==0?plStr(pl):'0';plCell.style.color=plColor;}
  if(idrCell){idrCell.textContent=pl!==0?fmtIDR(uscToIDR(pl)):'—';idrCell.style.color=idrColor;}
  if(pctCell){pctCell.textContent=modalAwal?((pl/modalAwal)*100).toFixed(2)+'%':'—';pctCell.style.color=plColor;}
  
  // Update IDR dan Stats secara presisi tanpa merusak ketikan user
  refreshIDR();
}

/* ─── MONTH BAR ─── */
function renderMonthBar(id){
  const el=document.getElementById(id);el.innerHTML='';
  MONTHS.forEach((name,i)=>{
    const btn=document.createElement('button');
    btn.className='month-btn'+(i===activeMonth?' active':'');
    btn.textContent=name;
    btn.onclick=()=>{activeMonth=i;monthData=loadMonth(i);render();if(activeTab==='recap')renderRecap();};
    el.appendChild(btn);
  });
}

/* ─── RECAP ─── */
function renderRecap(){
  renderMonthBar('monthBar2');
  const m=activeMonth,d=monthData,days=daysIn(m);
  document.getElementById('rcDailySub').textContent=MONTHS[m]+' '+YEAR;
  const dailyRows=[];
  for(let i=1;i<=days;i++){const row=d[i]||{};const inc=parseFloat(row.income)||0,out=parseFloat(row.outcome)||0,pl=inc-out;const result=row.result||'NONE';if(inc===0&&out===0&&result==='NONE')continue;dailyRows.push({day:i,pl,result,pair:row.pair||'—'});}
  if(!dailyRows.length){document.getElementById('rcDaily').innerHTML='<div class="empty">Belum ada data trading bulan ini.</div>';}
  else{
    let totPL=0,totW=0,totL=0,totB=0;
    let h=`<table class="rtable"><thead><tr><th>Tgl</th><th>Pair</th><th>P/L USC</th><th class="th-idr">Rupiah LIVE</th><th>% Modal</th><th>Hasil</th></tr></thead><tbody>`;
    dailyRows.forEach(r=>{totPL+=r.pl;if(r.result==='WIN')totW++;else if(r.result==='LOSS')totL++;else if(r.result==='BE')totB++;
      h+=`<tr><td><b>${r.day}</b> <span style="color:var(--hint);font-size:10px">${dayName(m,r.day).substring(0,3)}</span></td><td style="font-family:var(--font);font-weight:600">${r.pair}</td><td class="${plCls(r.pl)}">${plStr(r.pl)}</td><td class="td-idr ${plCls(r.pl)}">${fmtIDR(uscToIDR(r.pl))}</td><td class="${plCls(r.pl)}">${pctStr(r.pl)}</td><td><span class="mini-badge ${mbCls(r.result)}">${r.result==='NONE'?'—':r.result}</span></td></tr>`;});
    h+=`</tbody><tfoot><tr><td colspan="2" style="font-family:var(--font)">Total <span style="font-weight:400;color:var(--hint);font-size:10px">${totW}W/${totL}L/${totB}BE</span></td><td class="${plCls(totPL)}">${plStr(totPL)}</td><td class="td-idr ${plCls(totPL)}">${fmtIDRFull(uscToIDR(totPL))}</td><td class="${plCls(totPL)}">${pctStr(totPL)}</td><td></td></tr></tfoot></table>`;
    document.getElementById('rcDaily').innerHTML=h;
  }
  document.getElementById('rcWeeklySub').textContent=MONTHS[m]+' '+YEAR;
  const weeks={};
  for(let i=1;i<=days;i++){const wn=weekNum(i);if(!weeks[wn])weeks[wn]={pl:0,wins:0,losses:0,be:0,trades:0,start:i,end:i};const row=d[i]||{};weeks[wn].pl+=(parseFloat(row.income)||0)-(parseFloat(row.outcome)||0);weeks[wn].end=i;const res=row.result||'NONE';if(res==='WIN'){weeks[wn].wins++;weeks[wn].trades++;}else if(res==='LOSS'){weeks[wn].losses++;weeks[wn].trades++;}else if(res==='BE'){weeks[wn].be++;weeks[wn].trades++;}}
  let weekTotPL=0;
  let wh=`<table class="rtable"><thead><tr><th>Minggu</th><th>Periode</th><th>W/L/BE</th><th>P/L USC</th><th class="th-idr">Rupiah LIVE</th><th>% Modal</th></tr></thead><tbody>`;
  Object.keys(weeks).map(Number).sort((a,b)=>a-b).forEach(wn=>{const w=weeks[wn];weekTotPL+=w.pl;const h=w.trades>0;wh+=`<tr><td style="font-family:var(--font)"><b>Ke-${wn}</b></td><td style="font-family:var(--font);color:var(--hint);font-size:11px">${w.start}–${w.end} ${MONTHS[m].substring(0,3)}</td><td style="font-family:var(--font)">${h?`<span style="color:var(--teal-400);font-weight:700">${w.wins}</span>/<span style="color:var(--red-400);font-weight:700">${w.losses}</span>/<span style="color:var(--amber-400);font-weight:700">${w.be}</span>`:'<span style="color:var(--hint)">—</span>'}</td><td class="${h?plCls(w.pl):'pl-zero'}">${h?plStr(w.pl):'—'}</td><td class="td-idr ${h?plCls(w.pl):'pl-zero'}">${h?fmtIDR(uscToIDR(w.pl)):'—'}</td><td class="${h?plCls(w.pl):'pl-zero'}">${h?pctStr(w.pl):'—'}</td></tr>`;});
  wh+=`</tbody><tfoot><tr><td colspan="3" style="font-family:var(--font)">Total Bulan</td><td class="${plCls(weekTotPL)}">${plStr(weekTotPL)}</td><td class="td-idr ${plCls(weekTotPL)}">${fmtIDRFull(uscToIDR(weekTotPL))}</td><td class="${plCls(weekTotPL)}">${pctStr(weekTotPL)}</td></tr></tfoot></table>`;
  document.getElementById('rcWeekly').innerHTML=wh;
  document.getElementById('rcMonthlySub').textContent='Semua bulan '+YEAR;
  let monthRows=[],grandPL=0,grandW=0,grandL=0,grandB=0,grandT=0;
  for(let mi=0;mi<12;mi++){const md=mi===activeMonth?monthData:loadMonth(mi);let mpl=0,mw=0,ml=0,mb=0,mt=0;for(let i=1;i<=daysIn(mi);i++){const row=md[i]||{};mpl+=(parseFloat(row.income)||0)-(parseFloat(row.outcome)||0);const res=row.result||'NONE';if(res==='WIN'){mw++;mt++;}else if(res==='LOSS'){ml++;mt++;}else if(res==='BE'){mb++;mt++;}}grandPL+=mpl;grandW+=mw;grandL+=ml;grandB+=mb;grandT+=mt;monthRows.push({mi,pl:mpl,wins:mw,losses:ml,be:mb,trades:mt});}
  let mh=`<table class="rtable"><thead><tr><th>Bulan</th><th>W/L/BE</th><th>P/L USC</th><th class="th-idr">Rupiah LIVE</th><th>% Modal</th></tr></thead><tbody>`;
  monthRows.forEach(r=>{const isAct=r.mi===activeMonth,h=r.trades>0;mh+=`<tr style="${isAct?'background:var(--teal-50);':''}"><td style="font-family:var(--font)"><b style="${isAct?'color:var(--teal-600)':''}">${MONTHS[r.mi]}</b></td><td style="font-family:var(--font)">${h?`<span style="color:var(--teal-400);font-weight:700">${r.wins}</span>/<span style="color:var(--red-400);font-weight:700">${r.losses}</span>/<span style="color:var(--amber-400);font-weight:700">${r.be}</span>`:'<span style="color:var(--border)">—</span>'}</td><td class="${h?plCls(r.pl):'pl-zero'}">${h?plStr(r.pl):'—'}</td><td class="td-idr ${h?plCls(r.pl):'pl-zero'}">${h?fmtIDR(uscToIDR(r.pl)):'—'}</td><td class="${h?plCls(r.pl):'pl-zero'}">${h?pctStr(r.pl):'—'}</td></tr>`;});
  mh+=`</tbody><tfoot><tr><td style="font-family:var(--font)">Total ${YEAR} <span style="font-weight:400;color:var(--hint);font-size:10px">${grandW}W/${grandL}L/${grandB}BE</span></td><td style="font-family:var(--font)"><span style="color:var(--teal-400);font-weight:700">${grandW}</span>/<span style="color:var(--red-400);font-weight:700">${grandL}</span>/<span style="color:var(--amber-400);font-weight:700">${grandB}</span></td><td class="${plCls(grandPL)}">${plStr(grandPL)}</td><td class="td-idr ${plCls(grandPL)}">${fmtIDRFull(uscToIDR(grandPL))}</td><td class="${plCls(grandPL)}">${pctStr(grandPL)}</td></tr></tfoot></table>`;
  document.getElementById('rcMonthly').innerHTML=mh;
  document.getElementById('rcYearlySub').textContent='Visualisasi per bulan '+YEAR;
  const maxAbs=Math.max(...monthRows.map(r=>Math.abs(r.pl)),0.01);
  let yh='<div class="yr-wrap">';
  monthRows.forEach(r=>{const isAct=r.mi===activeMonth;const barW=r.trades>0?Math.max((Math.abs(r.pl)/maxAbs)*100,2):0;yh+=`<div class="yr-row"><div class="yr-lbl" style="${isAct?'color:var(--teal-600);font-weight:700':''}">${MONTHS[r.mi].substring(0,3)}</div><div class="yr-bg">${r.trades>0?`<div class="yr-fill ${r.pl>=0?'yr-pos':'yr-neg'}" style="width:${barW}%"></div>`:''}</div><div class="yr-val ${r.trades>0?plCls(r.pl):'pl-zero'}">${r.trades>0?(r.pl>=0?'+':'')+r.pl.toFixed(2):'—'}${r.trades>0?`<br><span class="yr-idr">${fmtIDR(uscToIDR(r.pl))}</span>`:''}</div></div>`;});
  yh+=`<div class="yr-total"><div><div style="font-size:12px;font-weight:600;color:var(--muted)">Total P/L ${YEAR}</div><div style="font-size:11px;color:var(--hint);margin-top:2px">${grandT} trade · ${grandW}W/${grandL}L/${grandB}BE</div></div><div style="text-align:right"><div style="font-size:18px;font-weight:800;font-family:var(--mono)" class="${plCls(grandPL)}">${plStr(grandPL)} USC</div><div style="font-size:13px;font-weight:700;font-family:var(--mono);color:var(--blue-400)">${fmtIDRFull(uscToIDR(grandPL))}</div></div></div></div>`;
  document.getElementById('rcYearly').innerHTML=yh;
}

/* ─── TABS ─── */
function switchTab(tab,btn){activeTab=tab;document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('tab-jurnal').classList.toggle('show',tab==='jurnal');document.getElementById('tab-recap').classList.toggle('show',tab==='recap');if(tab==='recap')renderRecap();}
function setHeaderDate(){const now=new Date();document.getElementById('hDate').textContent=DAYS[now.getDay()]+', '+now.getDate()+' '+MONTHS[now.getMonth()]+' '+now.getFullYear();}
function render(){renderMonthBar('monthBar1');renderStats(calcStats(activeMonth,monthData));renderTable();}

/* ─── INIT ─── */
loadModal();
monthData=loadMonth(activeMonth);
setHeaderDate();
render();

let splashClosed=false;
function closeSplash(){if(splashClosed)return;splashClosed=true;setTimeout(()=>{const s=document.getElementById('splash');s.classList.add('hide');setTimeout(()=>s.style.display='none',600);},500);}

// Memulai fetch dari Binance Live API, kemudian sambung dengan WebSocket
fetchKursLive().then(() => {
    closeSplash();
    initLiveUSD();
}).catch(() => {
    closeSplash();
    initLiveUSD();
});
setTimeout(closeSplash,2500);

// Auto-refresh setiap 1 menit sebagai backup / fallback jika WebSocket terputus
setInterval(()=>{
  const ov=parseFloat(document.getElementById('kursOverride').value);
  if(isNaN(ov)||ov<1000) fetchKursLive();
},REFRESH_INTERVAL);
</script>
</body>
</html>
