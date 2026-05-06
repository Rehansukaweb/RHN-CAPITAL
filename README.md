<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0b1729;--navy2:#122040;--navy3:#1a3460;
  --gold:#c9a84c;--gold2:#f0c96a;--gold3:#fad98a;
  --green:#1a9e6b;--green2:#25c584;
  --red:#d94f4f;--red2:#f07070;
  --bg:#f5f4f0;--bg2:#eeece6;--bg3:#e8e5dd;
  --card:#ffffff;--border:#e0ddd5;--border2:#ccc9be;
  --text:#1a1a18;--text2:#5a5850;--text3:#9a9688;
  --radius:12px;--radius-sm:8px;
}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);font-size:14px;line-height:1.6;min-height:100vh}

/* ===== AUTH SCREEN ===== */
#auth-screen{
  position:fixed;inset:0;background:var(--navy);
  display:flex;align-items:center;justify-content:center;z-index:999;
}
.auth-box{
  background:#fff;border-radius:16px;padding:40px 44px;
  width:100%;max-width:420px;box-shadow:0 24px 64px rgba(0,0,0,0.35);
}
.auth-logo{text-align:center;margin-bottom:28px}
.auth-emblem{
  width:56px;height:56px;background:var(--navy);border-radius:14px;
  display:inline-flex;align-items:center;justify-content:center;
  font-size:26px;font-weight:700;color:var(--gold2);
  font-family:'DM Mono',monospace;margin-bottom:12px;
}
.auth-title{font-size:22px;font-weight:700;color:var(--navy);margin-bottom:4px}
.auth-sub{font-size:13px;color:var(--text3)}
.auth-tabs{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:24px;overflow:hidden}
.auth-tab{padding:10px;text-align:center;font-size:13px;font-weight:600;cursor:pointer;background:transparent;border:none;color:var(--text3);font-family:'DM Sans',sans-serif;transition:all .2s}
.auth-tab.active{background:var(--navy);color:var(--gold2)}
.auth-field{margin-bottom:14px}
.auth-field label{display:block;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--text3);margin-bottom:6px}
.auth-field input{
  width:100%;padding:11px 14px;font-size:14px;
  border:1.5px solid var(--border);border-radius:var(--radius-sm);
  font-family:'DM Sans',sans-serif;outline:none;color:var(--text);background:var(--bg);
  transition:border-color .2s;
}
.auth-field input:focus{border-color:var(--gold)}
.auth-btn{
  width:100%;padding:13px;background:var(--navy);color:var(--gold2);
  border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:700;
  letter-spacing:.5px;cursor:pointer;font-family:'DM Sans',sans-serif;
  text-transform:uppercase;transition:all .2s;margin-bottom:10px;
}
.auth-btn:hover{background:var(--navy3)}
.auth-btn:disabled{opacity:.5;cursor:not-allowed}
.auth-divider{text-align:center;font-size:12px;color:var(--text3);margin:10px 0;position:relative}
.auth-divider::before,.auth-divider::after{content:'';position:absolute;top:50%;width:42%;height:1px;background:var(--border)}
.auth-divider::before{left:0}.auth-divider::after{right:0}
.google-btn{
  width:100%;padding:12px;background:#fff;color:var(--text);
  border:1.5px solid var(--border);border-radius:var(--radius-sm);
  font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;
  display:flex;align-items:center;justify-content:center;gap:10px;
  transition:all .2s;
}
.google-btn:hover{border-color:#4285f4;background:#f8f9ff}
.google-btn svg{width:18px;height:18px;flex-shrink:0}
.auth-err{
  background:rgba(217,79,79,0.08);border:1px solid rgba(217,79,79,0.25);
  color:var(--red);border-radius:var(--radius-sm);padding:10px 14px;
  font-size:12px;margin-bottom:14px;display:none;
}
.auth-loading{text-align:center;padding:12px;color:var(--text3);font-size:13px}

/* ===== APP ===== */
#app-screen{display:none}
.topbar{
  background:var(--navy);padding:0 32px;
  display:flex;align-items:center;justify-content:space-between;
  height:64px;border-bottom:1px solid rgba(201,168,76,0.25);
  position:sticky;top:0;z-index:100;
}
.logo{display:flex;align-items:center;gap:12px}
.logo-emblem{
  width:40px;height:40px;background:rgba(201,168,76,0.12);
  border:1.5px solid rgba(201,168,76,0.5);border-radius:10px;
  display:flex;align-items:center;justify-content:center;
  font-size:18px;font-weight:600;color:var(--gold2);
  font-family:'DM Mono',monospace;letter-spacing:-1px;
}
.logo-name{font-size:16px;font-weight:600;color:#fff;letter-spacing:.3px}
.logo-tagline{font-size:10px;color:var(--gold);letter-spacing:2.5px;text-transform:uppercase;margin-top:1px}
.topbar-right{display:flex;align-items:center;gap:20px}
.live-clock{text-align:right}
.live-clock .time{font-family:'DM Mono',monospace;font-size:18px;font-weight:500;color:#fff;letter-spacing:1px}
.live-clock .date{font-size:11px;color:rgba(255,255,255,0.45);margin-top:1px}
.user-info{display:flex;align-items:center;gap:10px}
.user-avatar{
  width:34px;height:34px;border-radius:50%;background:rgba(201,168,76,0.2);
  border:1.5px solid rgba(201,168,76,0.4);
  display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:700;color:var(--gold2);overflow:hidden;
}
.user-avatar img{width:100%;height:100%;object-fit:cover}
.user-name{font-size:12px;color:rgba(255,255,255,.7);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.logout-btn{
  padding:6px 12px;border:1px solid rgba(201,168,76,0.35);border-radius:6px;
  background:transparent;color:rgba(255,255,255,.5);font-size:11px;
  cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;
  letter-spacing:.3px;
}
.logout-btn:hover{border-color:var(--gold);color:var(--gold2)}
.nav{
  background:var(--navy2);padding:0 32px;display:flex;gap:2px;
  border-bottom:1px solid rgba(255,255,255,.06);
}
.nav-btn{
  padding:14px 18px;font-size:12px;font-weight:500;letter-spacing:.4px;
  color:rgba(255,255,255,.4);border:none;background:none;cursor:pointer;
  border-bottom:2px solid transparent;transition:all .2s;
  text-transform:uppercase;font-family:'DM Sans',sans-serif;
}
.nav-btn:hover{color:rgba(255,255,255,.75)}
.nav-btn.active{color:var(--gold2);border-bottom-color:var(--gold)}
.main{padding:28px 32px;max-width:1200px;margin:0 auto}
.page{display:none}.page.active{display:block}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
.m-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px 22px;position:relative;overflow:hidden}
.m-card::after{content:'';position:absolute;top:0;right:0;width:80px;height:80px;border-radius:0 0 0 80px;opacity:.06}
.m-card.inc::after{background:var(--green)}.m-card.exp::after{background:var(--red)}
.m-card.bal::after{background:var(--gold)}.m-card.cnt::after{background:#4a8fd4}
.m-label{font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:10px}
.m-val{font-size:20px;font-weight:600;color:var(--text)}
.m-val.pos{color:var(--green)}.m-val.neg{color:var(--red)}.m-val.gold{color:var(--gold)}.m-val.blue{color:#4a8fd4}
.m-sub{font-size:11px;color:var(--text3);margin-top:5px}
.m-bar{height:3px;background:var(--bg2);border-radius:2px;margin-top:12px}
.m-bar-fill{height:100%;border-radius:2px;transition:width .6s}
.inc .m-bar-fill{background:var(--green)}.exp .m-bar-fill{background:var(--red)}
.bal .m-bar-fill{background:var(--gold)}.cnt .m-bar-fill{background:#4a8fd4}
.panel{display:grid;grid-template-columns:400px 1fr;gap:20px;margin-bottom:20px}
.panel.wide{grid-template-columns:1fr}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.card-head{padding:16px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.card-title{font-size:13px;font-weight:600;color:var(--text);letter-spacing:.2px}
.card-sub{font-size:11px;color:var(--text3);margin-top:2px}
.form-body{padding:20px 22px}
.type-toggle{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px}
.t-btn{
  padding:10px;border:1.5px solid var(--border);border-radius:var(--radius-sm);
  font-size:13px;font-weight:500;cursor:pointer;background:transparent;color:var(--text2);
  transition:all .2s;text-align:center;font-family:'DM Sans',sans-serif;
}
.t-btn.income.active{background:rgba(26,158,107,0.08);border-color:var(--green);color:var(--green)}
.t-btn.expense.active{background:rgba(217,79,79,0.08);border-color:var(--red);color:var(--red)}
.form-row{margin-bottom:13px}
.form-label{font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--text3);margin-bottom:6px;display:block}
.form-row input,.form-row select,.form-row textarea{
  width:100%;padding:9px 13px;font-size:13px;
  border:1px solid var(--border);border-radius:var(--radius-sm);
  background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;
  transition:border-color .2s;outline:none;
}
.form-row input:focus,.form-row select:focus,.form-row textarea:focus{border-color:var(--gold)}
.form-row textarea{resize:none;height:64px}
.submit-btn{
  width:100%;padding:12px;background:var(--navy);color:var(--gold2);
  border:none;border-radius:var(--radius-sm);font-size:13px;font-weight:600;
  letter-spacing:.5px;cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:all .2s;text-transform:uppercase;
}
.submit-btn:hover{background:var(--navy3)}
.submit-btn:disabled{opacity:.5;cursor:not-allowed}
.recent-item{padding:13px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;transition:background .15s}
.recent-item:hover{background:var(--bg)}.recent-item:last-child{border-bottom:none}
.ri-icon{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:14px;margin-right:12px;flex-shrink:0}
.ri-icon.inc{background:rgba(26,158,107,0.1);color:var(--green)}.ri-icon.exp{background:rgba(217,79,79,0.1);color:var(--red)}
.ri-left{display:flex;align-items:center}.ri-note{font-size:13px;font-weight:500;color:var(--text)}
.ri-meta{font-size:11px;color:var(--text3);margin-top:2px}.ri-right{text-align:right}
.ri-amount{font-size:13px;font-weight:600}.ri-amount.pos{color:var(--green)}.ri-amount.neg{color:var(--red)}
.del-btn{background:none;border:none;color:var(--text3);cursor:pointer;font-size:12px;padding:3px 6px;border-radius:4px;opacity:0;transition:opacity .2s;margin-top:3px}
.recent-item:hover .del-btn{opacity:1}.del-btn:hover{color:var(--red)}
.tbl-wrap{overflow-x:auto}
table.htbl{width:100%;border-collapse:collapse}
table.htbl th{padding:11px 18px;text-align:left;font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--text3);border-bottom:1px solid var(--border);background:var(--bg)}
table.htbl td{padding:12px 18px;font-size:13px;color:var(--text);border-bottom:1px solid var(--border)}
table.htbl tr:last-child td{border-bottom:none}
table.htbl tr:hover td{background:var(--bg)}
.badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.3px}
.badge.income{background:rgba(26,158,107,0.1);color:var(--green)}.badge.expense{background:rgba(217,79,79,0.1);color:var(--red)}
.a-pos{color:var(--green);font-weight:600}.a-neg{color:var(--red);font-weight:600}
.sum-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border-bottom:1px solid var(--border)}
.sum-item{padding:18px 22px;background:var(--card);text-align:center}
.sum-label{font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--text3);margin-bottom:8px}
.sum-val{font-size:20px;font-weight:600}
.chart-wrap{padding:20px 22px}.chart-legend{display:flex;gap:20px;margin-bottom:14px}
.leg-item{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text2)}
.leg-dot{width:10px;height:10px;border-radius:2px}
.period-bar{display:flex;gap:6px;flex-wrap:wrap;padding:12px 22px;border-bottom:1px solid var(--border)}
.p-btn{padding:5px 13px;border:1px solid var(--border);border-radius:20px;font-size:11px;font-weight:500;cursor:pointer;background:transparent;color:var(--text2);transition:all .2s;font-family:'DM Sans',sans-serif}
.p-btn:hover{border-color:var(--gold);color:var(--gold)}.p-btn.active{background:var(--navy);color:var(--gold2);border-color:var(--navy)}
.filter-bar{display:flex;gap:10px;align-items:center;padding:12px 22px;border-bottom:1px solid var(--border);flex-wrap:wrap}
.filter-bar select,.filter-bar input{padding:7px 12px;font-size:12px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;outline:none}
.filter-bar input{width:200px}
.empty{padding:48px;text-align:center;color:var(--text3);font-size:13px}
.empty-icon{font-size:32px;margin-bottom:12px;opacity:.4}
/* sync indicator */
.sync-dot{width:6px;height:6px;border-radius:50%;background:#25c584;display:inline-block;margin-right:6px;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.sync-label{font-size:11px;color:rgba(255,255,255,.45)}
::-webkit-scrollbar{width:6px;height:6px}
::-webkit-scrollbar-track{background:var(--bg2)}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}
</style>
</head>
<body>

<!-- ===== AUTH SCREEN ===== -->
<div id="auth-screen">
  <div class="auth-box">
    <div class="auth-logo">
      <div class="auth-emblem">R</div>
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
    <div class="auth-divider">atau</div>
    <button class="google-btn" onclick="doGoogle()">
      <svg viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C37 38.1 44 33 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>
      Lanjutkan dengan Google
    </button>
    <div id="auth-loading" class="auth-loading" style="display:none">Memuat...</div>
  </div>
</div>

<!-- ===== APP SCREEN ===== -->
<div id="app-screen">

<div class="topbar">
  <div class="logo">
    <div class="logo-emblem">R</div>
    <div>
      <div class="logo-name">RHN CAPITAL</div>
      <div class="logo-tagline">Arus Keuangan</div>
    </div>
  </div>
  <div class="topbar-right">
    <div style="display:flex;align-items:center;gap:6px">
      <span class="sync-dot" id="sync-dot" style="background:#9a9688"></span>
      <span class="sync-label" id="sync-label">Menghubungkan...</span>
    </div>
    <div class="live-clock">
      <div class="time" id="live-time">--:--:--</div>
      <div class="date" id="live-date">-</div>
    </div>
    <div class="user-info">
      <div class="user-avatar" id="user-avatar">?</div>
      <div class="user-name" id="user-name">-</div>
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

<!-- DASHBOARD -->
<div id="page-dashboard" class="page active">
  <div class="metrics" id="metric-cards"></div>
  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div>
          <div class="card-title">Tambah Transaksi</div>
          <div class="card-sub">Catat pemasukan atau pengeluaran baru</div>
        </div>
      </div>
      <div class="form-body">
        <div class="type-toggle">
          <div class="t-btn income active" id="btn-inc" onclick="selType('income')">+ Pemasukan</div>
          <div class="t-btn expense" id="btn-exp" onclick="selType('expense')">− Pengeluaran</div>
        </div>
        <div class="form-row">
          <label class="form-label">Jumlah (Rp)</label>
          <input type="number" id="f-amount" placeholder="0" min="0">
        </div>
        <div class="form-row">
          <label class="form-label">Kategori</label>
          <select id="f-cat"><option value="">Pilih kategori...</option></select>
        </div>
        <div class="form-row">
          <label class="form-label">Keterangan</label>
          <textarea id="f-note" placeholder="Catatan transaksi..."></textarea>
        </div>
        <div class="form-row">
          <label class="form-label">Tanggal &amp; Jam</label>
          <input type="datetime-local" id="f-date">
        </div>
        <button class="submit-btn" id="save-btn" onclick="addTx()">Simpan Transaksi</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title">Transaksi Terbaru</div></div>
      <div id="recent-list" style="max-height:420px;overflow-y:auto"></div>
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
    <div class="chart-wrap">
      <div style="position:relative;height:240px">
        <canvas id="chartMain"></canvas>
      </div>
    </div>
  </div>
</div>

<!-- HARIAN -->
<div id="page-harian" class="page">
  <div class="card">
    <div class="card-head">
      <div class="card-title">Laporan Harian</div>
      <input type="date" id="pick-daily" onchange="renderDaily()" style="padding:6px 12px;font-size:12px;border:1px solid #e0ddd5;border-radius:8px;background:#f5f4f0;font-family:'DM Sans',sans-serif;outline:none">
    </div>
    <div class="sum-grid" id="daily-sum"></div>
    <div class="tbl-wrap"><table class="htbl"><thead><tr><th>Waktu</th><th>Keterangan</th><th>Kategori</th><th>Tipe</th><th>Jumlah</th><th></th></tr></thead><tbody id="daily-body"></tbody></table></div>
  </div>
</div>

<!-- MINGGUAN -->
<div id="page-mingguan" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Mingguan</div></div>
    <div class="period-bar" id="week-sel"></div>
    <div class="sum-grid" id="week-sum"></div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div>
      </div>
      <div style="position:relative;height:200px"><canvas id="chartWeek"></canvas></div>
    </div>
    <div class="tbl-wrap"><table class="htbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th>Tipe</th><th>Jumlah</th><th></th></tr></thead><tbody id="week-body"></tbody></table></div>
  </div>
</div>

<!-- BULANAN -->
<div id="page-bulanan" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Bulanan</div></div>
    <div class="period-bar" id="month-sel"></div>
    <div class="sum-grid" id="month-sum"></div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div>
      </div>
      <div style="position:relative;height:200px"><canvas id="chartMonth"></canvas></div>
    </div>
    <div class="tbl-wrap"><table class="htbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th>Tipe</th><th>Jumlah</th><th></th></tr></thead><tbody id="month-body"></tbody></table></div>
  </div>
</div>

<!-- TAHUNAN -->
<div id="page-tahunan" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Tahunan</div></div>
    <div class="period-bar" id="year-sel"></div>
    <div class="sum-grid" id="year-sum"></div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:#1a9e6b"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:#d94f4f"></div>Pengeluaran</div>
      </div>
      <div style="position:relative;height:200px"><canvas id="chartYear"></canvas></div>
    </div>
    <div class="tbl-wrap"><table class="htbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th>Tipe</th><th>Jumlah</th><th></th></tr></thead><tbody id="year-body"></tbody></table></div>
  </div>
</div>

<!-- RIWAYAT -->
<div id="page-riwayat" class="page">
  <div class="card">
    <div class="card-head"><div class="card-title">Semua Riwayat Transaksi</div></div>
    <div class="filter-bar">
      <select id="flt-type" onchange="renderAll()">
        <option value="">Semua Tipe</option>
        <option value="income">Pemasukan</option>
        <option value="expense">Pengeluaran</option>
      </select>
      <input type="text" id="flt-search" placeholder="Cari keterangan / kategori..." oninput="renderAll()">
    </div>
    <div class="sum-grid" id="all-sum"></div>
    <div class="tbl-wrap"><table class="htbl"><thead><tr><th>Tanggal &amp; Jam</th><th>Keterangan</th><th>Kategori</th><th>Tipe</th><th>Jumlah</th><th></th></tr></thead><tbody id="all-body"></tbody></table></div>
  </div>
</div>

</div><!-- /main -->
</div><!-- /app-screen -->

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
const googleProvider = new GoogleAuthProvider();

// ===== STATE =====
const CATS = {
  income: ['Gaji','Investasi','Penjualan','Bonus','Dividen','Bunga','Transfer Masuk','Lainnya'],
  expense: ['Operasional','Pembelian Aset','Gaji Karyawan','Marketing','Utilitas','Transportasi','Pajak','Sewa','Lainnya']
};
let txs = [];
let curType = 'income';
let activePage = 'dashboard';
let charts = {};
let currentUser = null;
let unsubListener = null;

// ===== HELPERS =====
function fmt(n){ return 'Rp ' + Math.round(n).toLocaleString('id-ID') }
function fmtDate(dt){ return new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) }
function fmtTime(dt){ return new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}) }
function fmtFull(dt){ return fmtDate(dt) + ' · ' + fmtTime(dt) }
function nowISO(){ return new Date().toISOString().slice(0,16) }

function showErr(msg){ const el=document.getElementById('auth-err'); el.textContent=msg; el.style.display='block' }
function hideErr(){ document.getElementById('auth-err').style.display='none' }
function setLoading(on){ document.getElementById('auth-loading').style.display=on?'block':'none'; document.getElementById('auth-submit-btn').disabled=on }

function setSyncStatus(ok){
  const dot=document.getElementById('sync-dot');
  const lbl=document.getElementById('sync-label');
  if(ok){ dot.style.background='#25c584'; lbl.textContent='Tersinkron' }
  else{ dot.style.background='#d94f4f'; lbl.textContent='Offline' }
}

// ===== AUTH TAB =====
let authMode = 'login';
window.switchTab = function(mode){
  authMode = mode;
  document.getElementById('tab-login').classList.toggle('active', mode==='login');
  document.getElementById('tab-register').classList.toggle('active', mode==='register');
  document.getElementById('field-confirm').style.display = mode==='register' ? 'block' : 'none';
  document.getElementById('auth-submit-btn').textContent = mode==='login' ? 'Masuk' : 'Daftar';
  hideErr();
};

// ===== DO AUTH =====
window.doAuth = async function(){
  const email = document.getElementById('auth-email').value.trim();
  const pass = document.getElementById('auth-pass').value;
  hideErr();
  if(!email || !pass){ showErr('Email dan sandi tidak boleh kosong.'); return }
  setLoading(true);
  try {
    if(authMode === 'login'){
      await signInWithEmailAndPassword(auth, email, pass);
    } else {
      const pass2 = document.getElementById('auth-pass2').value;
      if(pass !== pass2){ showErr('Sandi tidak cocok.'); setLoading(false); return }
      if(pass.length < 6){ showErr('Sandi minimal 6 karakter.'); setLoading(false); return }
      await createUserWithEmailAndPassword(auth, email, pass);
    }
  } catch(e){
    const msg = {
      'auth/user-not-found': 'Email tidak terdaftar.',
      'auth/wrong-password': 'Sandi salah.',
      'auth/invalid-email': 'Format email tidak valid.',
      'auth/email-already-in-use': 'Email sudah terdaftar. Silakan masuk.',
      'auth/invalid-credential': 'Email atau sandi salah.',
      'auth/too-many-requests': 'Terlalu banyak percobaan. Coba lagi nanti.'
    }[e.code] || ('Error: ' + e.message);
    showErr(msg);
    setLoading(false);
  }
};

window.doGoogle = async function(){
  hideErr(); setLoading(true);
  try { await signInWithPopup(auth, googleProvider); }
  catch(e){ showErr('Login Google gagal: ' + e.message); setLoading(false); }
};

window.doLogout = async function(){
  if(unsubListener){ unsubListener(); unsubListener=null; }
  txs = [];
  await signOut(auth);
};

// ===== AUTH STATE =====
onAuthStateChanged(auth, user => {
  if(user){
    currentUser = user;
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'block';
    setLoading(false);
    setupUser(user);
    listenTransactions(user.uid);
  } else {
    currentUser = null;
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('app-screen').style.display = 'none';
    if(unsubListener){ unsubListener(); unsubListener=null; }
    txs = [];
  }
});

function setupUser(user){
  const name = user.displayName || user.email.split('@')[0];
  document.getElementById('user-name').textContent = name;
  const av = document.getElementById('user-avatar');
  if(user.photoURL){ av.innerHTML=`<img src="${user.photoURL}" alt="">`; }
  else { av.textContent = name.charAt(0).toUpperCase(); }
}

// ===== FIRESTORE =====
function listenTransactions(uid){
  if(unsubListener){ unsubListener(); }
  const q = query(collection(db, 'users', uid, 'transactions'), orderBy('createdAt','desc'));
  unsubListener = onSnapshot(q, snap => {
    txs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    setSyncStatus(true);
    refreshAll();
  }, err => {
    console.error(err);
    setSyncStatus(false);
  });
}

window.addTx = async function(){
  if(!currentUser) return;
  const amt = parseFloat(document.getElementById('f-amount').value);
  const cat = document.getElementById('f-cat').value;
  const note = document.getElementById('f-note').value.trim();
  const dt = document.getElementById('f-date').value;
  if(!amt || amt<=0){ alert('Masukkan jumlah yang valid.'); return }
  if(!cat){ alert('Pilih kategori terlebih dahulu.'); return }
  const btn = document.getElementById('save-btn');
  btn.disabled = true; btn.textContent = 'Menyimpan...';
  try {
    await addDoc(collection(db,'users',currentUser.uid,'transactions'), {
      type: curType, amount: amt, category: cat,
      note: note||'-', date: dt||nowISO(),
      createdAt: serverTimestamp()
    });
    document.getElementById('f-amount').value='';
    document.getElementById('f-note').value='';
    document.getElementById('f-date').value=nowISO();
  } catch(e){ alert('Gagal menyimpan: '+e.message); }
  btn.disabled=false; btn.textContent='Simpan Transaksi';
};

window.delTx = async function(id){
  if(!currentUser || !confirm('Hapus transaksi ini?')) return;
  try {
    await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id));
  } catch(e){ alert('Gagal menghapus: '+e.message); }
};

// ===== CLOCK =====
function updateClock(){
  const n=new Date();
  document.getElementById('live-time').textContent=n.toLocaleTimeString('id-ID');
  document.getElementById('live-date').textContent=n.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
}
setInterval(updateClock,1000); updateClock();

// ===== UI =====
window.selType = function(t){
  curType=t;
  document.getElementById('btn-inc').classList.toggle('active',t==='income');
  document.getElementById('btn-exp').classList.toggle('active',t==='expense');
  const s=document.getElementById('f-cat');
  s.innerHTML='<option value="">Pilih kategori...</option>';
  CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)});
};

window.switchPage = function(p){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el=>el.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat'];
  document.querySelectorAll('.nav-btn')[pages.indexOf(p)].classList.add('active');
  activePage=p; refreshAll();
};

function calcSum(arr){
  const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  return{inc,exp,bal:inc-exp,count:arr.length};
}
function renderSumGrid(el,arr){
  const s=calcSum(arr);
  el.innerHTML=`
    <div class="sum-item"><div class="sum-label">Pemasukan</div><div class="sum-val a-pos">${fmt(s.inc)}</div></div>
    <div class="sum-item"><div class="sum-label">Pengeluaran</div><div class="sum-val a-neg">${fmt(s.exp)}</div></div>
    <div class="sum-item"><div class="sum-label">Saldo Bersih</div><div class="sum-val ${s.bal>=0?'a-pos':'a-neg'}">${fmt(s.bal)}</div></div>`;
}
function renderTbl(tbody,arr,full){
  if(!arr.length){tbody.innerHTML=`<tr><td colspan="6"><div class="empty"><div class="empty-icon">○</div>Belum ada transaksi</div></td></tr>`;return}
  tbody.innerHTML=arr.map(t=>`<tr>
    <td style="font-size:12px;white-space:nowrap">
      <span style="font-weight:500">${full?fmtFull(t.date):fmtDate(t.date)}</span>
      ${!full?'<br><span style="color:var(--text3)">'+fmtTime(t.date)+'</span>':''}
    </td>
    <td>${t.note}</td>
    <td style="color:var(--text2)">${t.category}</td>
    <td><span class="badge ${t.type}">${t.type==='income'?'Pemasukan':'Pengeluaran'}</span></td>
    <td class="${t.type==='income'?'a-pos':'a-neg'}" style="white-space:nowrap">${t.type==='income'?'+':'-'}${fmt(t.amount)}</td>
    <td><button class="del-btn" onclick="delTx('${t.id}')">✕</button></td>
  </tr>`).join('');
}

function mkChart(id,labels,incData,expData){
  if(charts[id]){charts[id].destroy();delete charts[id]}
  const c=document.getElementById(id);if(!c)return;
  charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[
    {label:'Pemasukan',data:incData,backgroundColor:'rgba(26,158,107,0.75)',borderRadius:4,borderSkipped:false},
    {label:'Pengeluaran',data:expData,backgroundColor:'rgba(217,79,79,0.7)',borderRadius:4,borderSkipped:false}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{
    x:{ticks:{color:'#9a9688',font:{size:10,family:"'DM Sans',sans-serif"}},grid:{display:false},border:{display:false}},
    y:{ticks:{color:'#9a9688',font:{size:10},callback:v=>'Rp'+Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:'rgba(0,0,0,0.04)'},border:{display:false}}
  }}});
}

function renderMetrics(){
  const s=calcSum(txs);
  const todayStr=new Date().toDateString();
  const todayTxs=txs.filter(t=>new Date(t.date).toDateString()===todayStr);
  const ts=calcSum(todayTxs);
  const pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0;
  document.getElementById('metric-cards').innerHTML=`
    <div class="m-card inc"><div class="m-label">Total Pemasukan</div><div class="m-val pos">${fmt(s.inc)}</div><div class="m-sub">${s.count} transaksi tercatat</div><div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div></div>
    <div class="m-card exp"><div class="m-label">Total Pengeluaran</div><div class="m-val neg">${fmt(s.exp)}</div><div class="m-sub">${pct}% dari pemasukan</div><div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div></div>
    <div class="m-card bal"><div class="m-label">Saldo Bersih</div><div class="m-val gold">${fmt(s.bal)}</div><div class="m-sub">${s.bal>=0?'Surplus':'Defisit'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div></div>
    <div class="m-card cnt"><div class="m-label">Hari Ini</div><div class="m-val blue">${ts.count} transaksi</div><div class="m-sub">${ts.inc>0?fmt(ts.inc)+' masuk':'Belum ada pemasukan'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${ts.count>0?80:0}%"></div></div></div>`;
}

function renderRecent(){
  const el=document.getElementById('recent-list');
  const r=txs.slice(0,10);
  if(!r.length){el.innerHTML='<div class="empty"><div class="empty-icon">○</div>Belum ada transaksi</div>';return}
  el.innerHTML=r.map(t=>`
    <div class="recent-item">
      <div class="ri-left">
        <div class="ri-icon ${t.type}">${t.type==='income'?'↑':'↓'}</div>
        <div><div class="ri-note">${t.note}</div><div class="ri-meta">${fmtFull(t.date)} &nbsp;·&nbsp; ${t.category}</div></div>
      </div>
      <div class="ri-right">
        <div class="ri-amount ${t.type==='income'?'pos':'neg'}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
        <button class="del-btn" onclick="delTx('${t.id}')">Hapus</button>
      </div>
    </div>`).join('');
}

function renderMainChart(){
  const days=[],inc=[],exp=[];
  for(let i=29;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toDateString();
    const dt=txs.filter(t=>new Date(t.date).toDateString()===ds);
    days.push(d.toLocaleDateString('id-ID',{day:'2-digit',month:'short'}));
    inc.push(dt.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0));
    exp.push(dt.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0));
  }
  mkChart('chartMain',days,inc,exp);
}

window.renderDaily = function(){
  const pick=document.getElementById('pick-daily').value;
  const target=pick?new Date(pick).toDateString():new Date().toDateString();
  const arr=txs.filter(t=>new Date(t.date).toDateString()===target).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('daily-sum'),arr);
  renderTbl(document.getElementById('daily-body'),arr,false);
};

function wkKey(d){const dt=new Date(d);const day=dt.getDay();const diff=dt.getDate()-day+(day===0?-6:1);const m=new Date(new Date(d).setDate(diff));return m.toISOString().slice(0,10)}
function renderWeekly(){
  const weeks={};txs.forEach(t=>{const k=wkKey(t.date);(weeks[k]=weeks[k]||[]).push(t)});
  const keys=Object.keys(weeks).sort().reverse().slice(0,8);
  const sel=document.getElementById('week-sel');
  sel.innerHTML=keys.map((k,i)=>{const m=new Date(k),s=new Date(k);s.setDate(s.getDate()+6);return`<button class="p-btn${i===0?' active':''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})} – ${s.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}</button>`}).join('');
  if(keys.length)showWeek(keys[0]);
}
window.selWeek=function(k,btn){document.querySelectorAll('#week-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showWeek(k)};
function showWeek(k){
  const arr=txs.filter(t=>wkKey(t.date)===k).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('week-sum'),arr);renderTbl(document.getElementById('week-body'),arr,false);
  const days=['Sen','Sel','Rab','Kam','Jum','Sab','Min'];
  const inc=new Array(7).fill(0),exp=new Array(7).fill(0);
  arr.forEach(t=>{const idx=(new Date(t.date).getDay()+6)%7;if(t.type==='income')inc[idx]+=t.amount;else exp[idx]+=t.amount});
  mkChart('chartWeek',days,inc,exp);
}

function renderMonthly(){
  const months={};txs.forEach(t=>{const k=t.date.slice(0,7);(months[k]=months[k]||[]).push(t)});
  const keys=Object.keys(months).sort().reverse().slice(0,12);
  const sel=document.getElementById('month-sel');
  sel.innerHTML=keys.map((k,i)=>{const[y,m]=k.split('-');const d=new Date(y,m-1);return`<button class="p-btn${i===0?' active':''}" onclick="selMonth('${k}',this)">${d.toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`}).join('');
  if(keys.length)showMonth(keys[0]);
}
window.selMonth=function(k,btn){document.querySelectorAll('#month-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showMonth(k)};
function showMonth(k){
  const arr=txs.filter(t=>t.date.slice(0,7)===k).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('month-sum'),arr);renderTbl(document.getElementById('month-body'),arr,false);
  const[y,m]=k.split('-');const dim=new Date(y,m,0).getDate();
  const labels=[],inc=new Array(dim).fill(0),exp=new Array(dim).fill(0);
  for(let i=1;i<=dim;i++)labels.push(i+'');
  arr.forEach(t=>{const d=new Date(t.date).getDate()-1;if(t.type==='income')inc[d]+=t.amount;else exp[d]+=t.amount});
  mkChart('chartMonth',labels,inc,exp);
}

function renderYearly(){
  const years={};txs.forEach(t=>{const k=t.date.slice(0,4);(years[k]=years[k]||[]).push(t)});
  const keys=Object.keys(years).sort().reverse();
  const sel=document.getElementById('year-sel');
  sel.innerHTML=keys.map((k,i)=>`<button class="p-btn${i===0?' active':''}" onclick="selYear('${k}',this)">${k}</button>`).join('');
  if(keys.length)showYear(keys[0]);
}
window.selYear=function(k,btn){document.querySelectorAll('#year-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showYear(k)};
function showYear(k){
  const arr=txs.filter(t=>t.date.startsWith(k)).sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('year-sum'),arr);renderTbl(document.getElementById('year-body'),arr,false);
  const MNTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const inc=new Array(12).fill(0),exp=new Array(12).fill(0);
  arr.forEach(t=>{const m2=new Date(t.date).getMonth();if(t.type==='income')inc[m2]+=t.amount;else exp[m2]+=t.amount});
  mkChart('chartYear',MNTHS,inc,exp);
}

window.renderAll = function(){
  const tf=document.getElementById('flt-type').value;
  const s=(document.getElementById('flt-search').value||'').toLowerCase();
  let arr=[...txs];
  if(tf)arr=arr.filter(t=>t.type===tf);
  if(s)arr=arr.filter(t=>t.note.toLowerCase().includes(s)||t.category.toLowerCase().includes(s));
  arr.sort((a,b)=>new Date(b.date)-new Date(a.date));
  renderSumGrid(document.getElementById('all-sum'),arr);
  renderTbl(document.getElementById('all-body'),arr,true);
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

// ===== INIT =====
document.getElementById('pick-daily').value=new Date().toISOString().slice(0,10);
document.getElementById('f-date').value=nowISO();
selType('income');
</script>
</body>
</html>
