<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL — Professional Terminal</title>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --bg:      #0a0b0d;
  --bg1:     #0d0f12;
  --bg2:     #111318;
  --bg3:     #161a1f;
  --bg4:     #1c2028;
  --border:  #1e2229;
  --border2: #262d36;
  --border3: #303840;
  --text:    #e2e4e9;
  --text2:   #7c8694;
  --text3:   #3e4650;
  --gold:    #f0b429;
  --gold2:   #f9d175;
  --green:   #00d97e;
  --red:     #ff4d5a;
  --blue:    #4a9eff;
  --cyan:    #00c8d4;
  --purple:  #8b5cf6;
  --mono: 'IBM Plex Mono', monospace;
  --sans: 'DM Sans', sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; overflow: hidden; background: var(--bg); color: var(--text); font-family: var(--mono); font-size: 11px; }

/* TOPBAR */
.topbar {
  height: 44px;
  background: var(--bg1);
  border-bottom: 1px solid var(--border2);
  display: flex; align-items: stretch; flex-shrink: 0;
  position: relative;
}
.topbar::after {
  content:''; position:absolute; bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,var(--gold) 0%,transparent 35%);
}
.tb-brand {
  display:flex; align-items:center; padding:0 18px; gap:10px;
  background:linear-gradient(135deg,#0d1117 0%,#161c24 100%);
  border-right:1px solid var(--border2); min-width:170px;
}
.brand-mark {
  width:26px; height:26px; background:var(--gold);
  display:flex; align-items:center; justify-content:center;
  font-weight:700; font-size:11px; color:#000; letter-spacing:0.04em;
  clip-path:polygon(0 0,90% 0,100% 10%,100% 100%,10% 100%,0 90%);
}
.brand-name { font-size:12px; font-weight:700; color:var(--text); letter-spacing:0.1em; font-family:var(--sans); }
.brand-sub  { font-size:7px; color:var(--text3); letter-spacing:0.18em; font-family:var(--sans); }
.tb-pair { display:flex; align-items:center; padding:0 14px; gap:10px; border-right:1px solid var(--border); }
.pair-sym  { font-size:14px; font-weight:700; color:var(--gold); letter-spacing:0.06em; font-family:var(--sans); }
.pair-divider { width:1px; height:18px; background:var(--border2); }
.pair-price { font-size:18px; font-weight:700; font-family:var(--mono); color:var(--text); transition:color .2s; }
.pair-chg   { font-size:9px; font-weight:600; padding:2px 7px; font-family:var(--mono); }
.tb-stats { display:flex; align-items:center; border-right:1px solid var(--border); }
.tb-stat { padding:0 12px; border-right:1px solid var(--border); height:44px; display:flex; flex-direction:column; justify-content:center; }
.tb-stat:last-child { border-right:none; }
.tb-stat-l { font-size:7px; color:var(--text3); letter-spacing:0.12em; margin-bottom:2px; font-family:var(--sans); }
.tb-stat-v { font-size:11px; font-weight:600; color:var(--text2); font-family:var(--mono); }
.tb-right { margin-left:auto; display:flex; align-items:center; padding:0 14px; gap:14px; border-left:1px solid var(--border); }
.tb-equity { display:flex; flex-direction:column; align-items:flex-end; }
.tb-eq-l { font-size:7px; color:var(--text3); letter-spacing:0.12em; margin-bottom:2px; }
.tb-eq-v { font-size:13px; font-weight:700; font-family:var(--mono); color:var(--gold); }
.live-dot { width:6px; height:6px; border-radius:50%; background:var(--green); animation:blink 1.4s ease infinite; }
@keyframes blink { 0%,100%{opacity:1;box-shadow:0 0 4px var(--green)} 50%{opacity:.2;box-shadow:none} }
.tb-clock  { font-size:11px; color:var(--text2); font-family:var(--mono); }
.tb-badge  { font-size:7px; letter-spacing:.14em; color:var(--text3); border:1px solid var(--border2); padding:2px 6px; font-family:var(--sans); }

/* MARQUEE */
.marquee { height:22px; background:var(--bg1); border-bottom:1px solid var(--border); overflow:hidden; display:flex; align-items:center; flex-shrink:0; }
.mq-inner { display:flex; animation:mscroll 55s linear infinite; white-space:nowrap; }
@keyframes mscroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
.mq-item { display:flex; align-items:center; gap:6px; padding:0 14px; border-right:1px solid var(--border); height:22px; flex-shrink:0; }
.mq-sym { color:var(--text2); font-size:8px; font-weight:600; letter-spacing:.06em; }
.mq-p   { font-size:8px; color:var(--text); font-weight:500; }
.mq-g   { color:var(--green); font-size:8px; font-weight:600; }
.mq-r   { color:var(--red);   font-size:8px; font-weight:600; }

/* LAYOUT */
.main-layout { display:grid; grid-template-columns:1fr 330px; height:calc(100vh - 66px - 20px); overflow:hidden; }

/* CHART AREA */
.chart-area { display:flex; flex-direction:column; overflow:hidden; border-right:1px solid var(--border2); }
.chart-topbar {
  background:var(--bg2); border-bottom:1px solid var(--border);
  padding:0 12px; height:34px; display:flex; align-items:center; gap:3px; flex-shrink:0;
}
.ctb-sep { width:1px; height:18px; background:var(--border); margin:0 8px; }
.ctb-lbl { font-size:7px; color:var(--text3); letter-spacing:.1em; margin-right:3px; }
.ctb-btn {
  font-size:8px; font-family:var(--mono); padding:2px 7px;
  border:1px solid var(--border2); background:transparent; color:var(--text3);
  cursor:pointer; transition:all .12s; letter-spacing:.04em;
}
.ctb-btn:hover { border-color:var(--border3); color:var(--text2); }
.ctb-btn.act { border-color:var(--gold); color:var(--gold); background:rgba(240,180,41,.07); }
.chart-metrics { display:grid; grid-template-columns:repeat(7,1fr); border-bottom:1px solid var(--border); flex-shrink:0; background:var(--bg2); }
.cm-cell { padding:5px 10px; border-right:1px solid var(--border); }
.cm-cell:last-child { border-right:none; }
.cm-lbl { font-size:7px; color:var(--text3); letter-spacing:.12em; margin-bottom:2px; font-family:var(--sans); }
.cm-val { font-size:12px; font-weight:600; font-family:var(--mono); line-height:1; }
.cm-sub { font-size:7px; color:var(--text3); margin-top:2px; font-family:var(--sans); }
.canvas-wrap { flex:1; position:relative; overflow:hidden; background:var(--bg); }
#candleCanvas { position:absolute; inset:0; width:100%; height:100%; cursor:crosshair; }
.chart-tooltip {
  position:absolute; background:rgba(13,15,18,.96); border:1px solid var(--border2);
  padding:7px 9px; font-size:8px; font-family:var(--mono); pointer-events:none;
  display:none; z-index:20; line-height:1.8; min-width:115px; backdrop-filter:blur(4px);
}
.tt-hdr { color:var(--gold); font-weight:600; font-size:8px; margin-bottom:2px; border-bottom:1px solid var(--border); padding-bottom:2px; }
#crosshairH,#crosshairV { position:absolute; pointer-events:none; display:none; z-index:10; }
#crosshairH { left:0;right:0;height:0;border-top:1px dashed rgba(240,180,41,.2); }
#crosshairV { top:0;bottom:0;width:0;border-left:1px dashed rgba(240,180,41,.2); }
.phase-bar {
  background:var(--bg2); border-top:1px solid var(--border);
  padding:4px 12px; flex-shrink:0; display:flex; align-items:center; gap:8px; height:26px;
}
.pb-dot  { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
.pb-lbl  { font-size:7px; font-weight:700; letter-spacing:.18em; color:var(--text3); min-width:120px; font-family:var(--sans); }
.pb-track{ flex:1; height:2px; background:var(--border); overflow:hidden; }
.pb-fill { height:100%; width:0%; transition:width .15s; }
.pb-pct  { font-size:8px; color:var(--text3); min-width:28px; text-align:right; }

/* RIGHT PANEL */
.right-panel { display:flex; flex-direction:column; overflow:hidden; background:var(--bg1); }
.sec-hdr {
  padding:5px 12px; background:var(--bg2); border-bottom:1px solid var(--border);
  font-size:7px; font-weight:600; color:var(--text3); letter-spacing:.18em;
  display:flex; align-items:center; justify-content:space-between; font-family:var(--sans); flex-shrink:0;
}
.sec-hdr-l { display:flex; align-items:center; gap:5px; }
.sec-dot   { width:4px; height:4px; background:var(--gold); }

/* EQUITY */
.equity-section { padding:10px 12px; border-bottom:1px solid var(--border); flex-shrink:0; }
.eq-grid { display:grid; grid-template-columns:1fr 1fr; gap:5px; margin-bottom:8px; }
.eq-card { background:var(--bg3); border:1px solid var(--border); padding:7px 9px; position:relative; overflow:hidden; }
.eq-card::before { content:''; position:absolute; top:0;left:0;width:2px;height:100%; }
.eq-card.gold::before { background:var(--gold); }
.eq-card.green::before { background:var(--green); }
.eq-card.red::before { background:var(--red); }
.eq-card.blue::before { background:var(--blue); }
.eq-card-l { font-size:6px; color:var(--text3); letter-spacing:.14em; margin-bottom:3px; font-family:var(--sans); }
.eq-card-v { font-size:13px; font-weight:700; font-family:var(--mono); }
.eq-card-s { font-size:7px; color:var(--text3); margin-top:1px; font-family:var(--sans); }
.equity-spark { height:32px; position:relative; }
#equitySparkCanvas { width:100%; height:100%; }

/* ORDER BOOK */
.ob-cols-hdr { display:grid; grid-template-columns:1fr 60px 50px; padding:2px 12px; font-size:6px; color:var(--text3); letter-spacing:.1em; border-bottom:1px solid var(--border); font-family:var(--sans); flex-shrink:0; }
.ob-body { overflow-y:auto; }
.ob-row { display:grid; grid-template-columns:1fr 60px 50px; padding:2px 12px; font-size:8px; font-family:var(--mono); position:relative; cursor:default; }
.ob-row:hover { background:rgba(255,255,255,.012); }
.ob-bar { position:absolute; top:0;bottom:0;right:0;opacity:.08;pointer-events:none; }
.ob-ask .ob-bar { background:var(--red); }
.ob-bid .ob-bar { background:var(--green); }
.ask-p { color:var(--red); font-weight:600; }
.bid-p { color:var(--green); font-weight:600; }
.ob-sz  { text-align:right; color:var(--text2); }
.ob-tot { text-align:right; color:var(--text3); }
.ob-mid { padding:3px 12px; text-align:center; font-size:10px; font-weight:700; color:var(--text); background:var(--bg3); border-top:1px solid var(--border); border-bottom:1px solid var(--border); font-family:var(--mono); flex-shrink:0; }
.ob-mid span { font-size:7px; color:var(--text3); margin:0 6px; font-weight:400; }

/* ORDER ENTRY */
.oe-body { padding:8px 12px; }
.lot-strip { display:grid; grid-template-columns:repeat(5,1fr); gap:3px; margin-bottom:7px; }
.lot-btn { font-family:var(--mono); font-size:8px; font-weight:600; padding:4px 3px; border:1px solid var(--border2); background:transparent; color:var(--text3); cursor:pointer; text-align:center; transition:all .1s; }
.lot-btn:hover { border-color:var(--border3); color:var(--text2); }
.lot-btn.sel  { border-color:var(--gold); color:var(--gold); background:rgba(240,180,41,.07); }
.cl-row { display:flex; gap:5px; align-items:center; margin-bottom:8px; }
.cl-lbl { font-size:7px; color:var(--text3); white-space:nowrap; font-family:var(--sans); }
.cl-input { flex:1; font-family:var(--mono); font-size:10px; font-weight:600; color:var(--gold); background:var(--bg3); border:1px solid var(--border2); padding:3px 6px; outline:none; transition:border-color .1s; }
.cl-input:focus { border-color:var(--gold); }
.cl-info { font-size:8px; color:var(--text2); font-family:var(--mono); white-space:nowrap; }
.sltp-grid { display:grid; grid-template-columns:1fr 1fr; gap:5px; margin-bottom:8px; }
.sltp-f { display:flex; flex-direction:column; gap:2px; }
.sltp-l { font-size:6px; color:var(--text3); letter-spacing:.1em; font-family:var(--sans); }
.sltp-i { font-family:var(--mono); font-size:9px; font-weight:600; background:var(--bg3); border:1px solid var(--border2); color:var(--text); padding:3px 5px; outline:none; }
.sltp-i:focus { border-color:var(--border3); }
.bs-grid { display:grid; grid-template-columns:1fr 1fr; gap:5px; }
.bs-btn { font-family:var(--sans); font-size:12px; font-weight:700; letter-spacing:.08em; padding:9px 6px; border:1px solid; cursor:pointer; background:transparent; transition:all .12s; position:relative; overflow:hidden; display:flex; flex-direction:column; align-items:center; gap:1px; }
.bs-btn::before { content:''; position:absolute; inset:0; opacity:0; transition:opacity .12s; }
.bs-btn:hover::before { opacity:1; }
.bs-btn:active { transform:scale(.97); }
.buy-btn  { color:var(--green); border-color:rgba(0,217,126,.5); }
.buy-btn::before  { background:rgba(0,217,126,.1); }
.sell-btn { color:var(--red); border-color:rgba(255,77,90,.5); }
.sell-btn::before { background:rgba(255,77,90,.1); }
.btn-sub  { font-size:8px; font-family:var(--mono); opacity:.7; font-weight:400; }

/* POSITION */
.pos-grid { display:grid; grid-template-columns:1fr 1fr; }
.pos-cell { padding:4px 12px; border-bottom:1px solid var(--border); border-right:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; }
.pos-cell:nth-child(even) { border-right:none; }
.pos-k { font-size:6px; color:var(--text3); letter-spacing:.1em; font-family:var(--sans); }
.pos-v { font-size:9px; font-weight:600; font-family:var(--mono); }
.close-all { margin:7px 12px; width:calc(100% - 24px); font-family:var(--sans); font-size:9px; font-weight:600; letter-spacing:.1em; padding:6px; border:1px solid var(--border2); background:transparent; color:var(--text3); cursor:pointer; transition:all .12s; }
.close-all:hover { border-color:var(--red); color:var(--red); background:rgba(255,77,90,.05); }

/* SIM CONTROLS */
.sim-body { padding:8px 12px; border-bottom:1px solid var(--border); }
.sim-ctrl-row { display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:4px; margin-bottom:7px; }
.sim-btn { font-family:var(--mono); font-size:8px; font-weight:600; letter-spacing:.06em; padding:5px 6px; border:1px solid var(--border2); background:transparent; color:var(--text2); cursor:pointer; transition:all .12s; display:flex; align-items:center; justify-content:center; gap:4px; }
.sim-btn:hover { border-color:var(--border3); color:var(--text); }
.sim-btn.on { border-color:var(--green); color:var(--green); background:rgba(0,217,126,.05); }
.sim-btn.paused-state { border-color:var(--gold); color:var(--gold); }
.sliders-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:7px; }
.sl-item { display:flex; flex-direction:column; gap:2px; }
.sl-lbl  { font-size:6px; color:var(--text3); letter-spacing:.1em; font-family:var(--sans); }
.sl-row  { display:flex; align-items:center; gap:4px; }
.sl-row input[type=range] { flex:1; -webkit-appearance:none; height:2px; background:var(--border2); outline:none; cursor:pointer; }
.sl-row input[type=range]::-webkit-slider-thumb { -webkit-appearance:none; width:8px; height:8px; background:var(--gold); cursor:pointer; }
.sl-v  { font-size:9px; font-weight:700; color:var(--gold); width:14px; text-align:right; font-family:var(--mono); }

/* LOG + TAPE */
.log-section { flex:1; overflow:hidden; display:flex; flex-direction:column; min-height:0; }
.log-body { flex:1; overflow-y:auto; }
.log-item { padding:2px 12px; border-bottom:1px solid rgba(30,34,41,.6); font-size:7px; font-family:var(--mono); line-height:1.7; animation:logslide .2s ease; display:flex; gap:5px; }
@keyframes logslide { from{opacity:0;background:rgba(240,180,41,.04)} to{opacity:1;background:transparent} }
.log-ts { color:var(--text3); flex-shrink:0; }
.log-msg.lp { color:var(--green); }
.log-msg.ld { color:#ff7078; }
.log-msg.lw { color:var(--gold2); }
.log-msg.li { color:var(--text2); }
.tape-wrap { border-top:1px solid var(--border); flex-shrink:0; }
.tape-cols { display:grid; grid-template-columns:30px 75px 1fr 42px; padding:2px 12px; font-size:6px; color:var(--text3); letter-spacing:.1em; border-bottom:1px solid var(--border); font-family:var(--sans); }
.tape-body { overflow-y:auto; max-height:82px; }
.tape-row  { display:grid; grid-template-columns:30px 75px 1fr 42px; padding:2px 12px; font-size:7px; font-family:var(--mono); border-bottom:1px solid rgba(30,34,41,.4); animation:fadeup .18s ease; }
@keyframes fadeup { from{opacity:0;transform:translateY(-2px)} to{opacity:1;transform:translateY(0)} }
.t-buy  { color:var(--green); font-weight:600; }
.t-sell { color:var(--red);   font-weight:600; }

/* DISCLAIMER */
.disclaimer { position:fixed; bottom:0;left:0;right:0; padding:3px 14px; background:var(--bg1); border-top:1px solid var(--border); font-size:7px; color:var(--text3); text-align:center; font-family:var(--sans); z-index:100; }
::-webkit-scrollbar { width:2px; height:2px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:var(--border2); }
</style>
</head>
<body>

<div class="topbar">
  <div class="tb-brand">
    <div class="brand-mark">FDN</div>
    <div>
      <div class="brand-name">FDN CAPITAL</div>
      <div class="brand-sub">MARKET TERMINAL</div>
    </div>
  </div>
  <div class="tb-pair">
    <span class="pair-sym">XAU/USD</span>
    <div class="pair-divider"></div>
    <span class="pair-price" id="tb-price">2,342.50</span>
    <span class="pair-chg" id="tb-chg">+0.00%</span>
  </div>
  <div class="tb-stats">
    <div class="tb-stat"><div class="tb-stat-l">SESSION HIGH</div><div class="tb-stat-v" id="tb-high">—</div></div>
    <div class="tb-stat"><div class="tb-stat-l">SESSION LOW</div><div class="tb-stat-v" id="tb-low">—</div></div>
    <div class="tb-stat"><div class="tb-stat-l">VOLUME</div><div class="tb-stat-v" id="tb-vol">0</div></div>
    <div class="tb-stat"><div class="tb-stat-l">SPREAD</div><div class="tb-stat-v">0.50</div></div>
    <div class="tb-stat"><div class="tb-stat-l">OPEN LOTS</div><div class="tb-stat-v" id="tb-lot">0.00</div></div>
    <div class="tb-stat"><div class="tb-stat-l">FLOAT P&amp;L</div><div class="tb-stat-v" id="tb-upnl" style="color:var(--text3)">$0.00</div></div>
  </div>
  <div class="tb-right">
    <div class="tb-equity">
      <div class="tb-eq-l">EQUITY</div>
      <div class="tb-eq-v" id="tb-equity">$10,000.00</div>
    </div>
    <div class="pair-divider"></div>
    <div class="live-dot"></div>
    <span class="tb-clock" id="clock">--:--:--</span>
    <span class="tb-badge">LIVE SIM</span>
  </div>
</div>

<div class="marquee"><div class="mq-inner" id="mqInner"></div></div>

<div class="main-layout" style="padding-bottom:20px">

  <!-- CHART -->
  <div class="chart-area">
    <div class="chart-topbar">
      <span class="ctb-lbl">TF:</span>
      <button class="ctb-btn act" onclick="setTF('M1',this)" data-tf="M1">M1</button>
      <button class="ctb-btn" onclick="setTF('M5',this)" data-tf="M5">M5</button>
      <button class="ctb-btn" onclick="setTF('M15',this)" data-tf="M15">M15</button>
      <button class="ctb-btn" onclick="setTF('H1',this)" data-tf="H1">H1</button>
      <div class="ctb-sep"></div>
      <span class="ctb-lbl">OVERLAY:</span>
      <button class="ctb-btn" id="tb-ma20" onclick="toggleOv('ma20')">MA20</button>
      <button class="ctb-btn" id="tb-ma50" onclick="toggleOv('ma50')">MA50</button>
      <button class="ctb-btn" id="tb-bb"   onclick="toggleOv('bb')">BB(20)</button>
      <button class="ctb-btn" id="tb-vwap" onclick="toggleOv('vwap')">VWAP</button>
      <button class="ctb-btn" id="tb-vol"  onclick="toggleOv('vol')">VOL</button>
      <span style="margin-left:auto;font-size:7px;color:var(--text3);letter-spacing:.08em;font-family:var(--sans)">FDN CAPITAL · XAU/USD · SIMULATION</span>
    </div>
    <div class="chart-metrics">
      <div class="cm-cell"><div class="cm-lbl">LAST</div><div class="cm-val" id="cm-last">2,342.50</div><div class="cm-sub" id="cm-chg">—</div></div>
      <div class="cm-cell"><div class="cm-lbl">BID</div><div class="cm-val" style="color:var(--green)" id="cm-bid">2,342.00</div><div class="cm-sub">market</div></div>
      <div class="cm-cell"><div class="cm-lbl">ASK</div><div class="cm-val" style="color:var(--red)" id="cm-ask">2,343.00</div><div class="cm-sub">market</div></div>
      <div class="cm-cell"><div class="cm-lbl">HIGH</div><div class="cm-val" style="color:var(--green)" id="cm-high">—</div><div class="cm-sub">session</div></div>
      <div class="cm-cell"><div class="cm-lbl">LOW</div><div class="cm-val" style="color:var(--red)" id="cm-low">—</div><div class="cm-sub">session</div></div>
      <div class="cm-cell"><div class="cm-lbl">CANDLE O</div><div class="cm-val" id="cm-co" style="color:var(--text2)">—</div><div class="cm-sub">open</div></div>
      <div class="cm-cell"><div class="cm-lbl">RANGE</div><div class="cm-val" id="cm-cr" style="color:var(--text2)">—</div><div class="cm-sub">H-L pips</div></div>
    </div>
    <div class="canvas-wrap" id="chartWrap">
      <canvas id="candleCanvas"></canvas>
      <div id="crosshairH"></div>
      <div id="crosshairV"></div>
      <div class="chart-tooltip" id="chartTip">
        <div class="tt-hdr" id="tt-time">—</div>
        <div style="color:var(--text2)">O:<span id="tt-o" style="color:var(--text);margin-left:4px">—</span></div>
        <div style="color:var(--text2)">H:<span id="tt-h" style="color:var(--green);margin-left:4px">—</span></div>
        <div style="color:var(--text2)">L:<span id="tt-l" style="color:var(--red);margin-left:4px">—</span></div>
        <div style="color:var(--text2)">C:<span id="tt-c" style="margin-left:4px">—</span></div>
        <div style="color:var(--text2)">V:<span id="tt-v" style="color:var(--text3);margin-left:4px">—</span></div>
      </div>
    </div>
    <div class="phase-bar">
      <div class="pb-dot" id="pbDot" style="background:var(--text3)"></div>
      <span class="pb-lbl" id="pbLbl">MARKET IDLE</span>
      <div class="pb-track"><div class="pb-fill" id="pbFill"></div></div>
      <span class="pb-pct" id="pbPct">—</span>
      <span style="font-size:8px;color:var(--text2);margin-left:8px;font-family:var(--mono)" id="pbInfo"></span>
    </div>
  </div>

  <!-- RIGHT PANEL -->
  <div class="right-panel">

    <!-- EQUITY -->
    <div class="sec-hdr">
      <div class="sec-hdr-l"><div class="sec-dot"></div>ACCOUNT EQUITY</div>
      <span id="eq-badge" style="font-size:7px;color:var(--text3)">BASE: $10,000</span>
    </div>
    <div class="equity-section">
      <div class="eq-grid">
        <div class="eq-card gold"><div class="eq-card-l">BALANCE</div><div class="eq-card-v" id="eq-balance" style="color:var(--gold)">$10,000.00</div><div class="eq-card-s">realized base</div></div>
        <div class="eq-card green"><div class="eq-card-l">EQUITY</div><div class="eq-card-v" id="eq-equity" style="color:var(--green)">$10,000.00</div><div class="eq-card-s">bal + float</div></div>
        <div class="eq-card blue"><div class="eq-card-l">MARGIN USED</div><div class="eq-card-v" id="eq-margin" style="color:var(--blue)">$0.00</div><div class="eq-card-s">positions</div></div>
        <div class="eq-card red"><div class="eq-card-l">FREE MARGIN</div><div class="eq-card-v" id="eq-free" style="color:var(--text2)">$10,000.00</div><div class="eq-card-s">available</div></div>
      </div>
      <div class="equity-spark"><canvas id="equitySparkCanvas"></canvas></div>
    </div>

    <!-- ORDER BOOK -->
    <div class="sec-hdr"><div class="sec-hdr-l"><div class="sec-dot"></div>ORDER BOOK — XAU/USD DEPTH</div></div>
    <div class="ob-cols-hdr"><span>PRICE</span><span style="text-align:right">SIZE</span><span style="text-align:right">DEPTH</span></div>
    <div class="ob-body" id="askBook" style="max-height:72px"></div>
    <div class="ob-mid" id="obMid">2,342.50 <span>SPREAD 0.50</span></div>
    <div class="ob-body" id="bidBook" style="max-height:72px"></div>

    <!-- ORDER ENTRY -->
    <div class="sec-hdr"><div class="sec-hdr-l"><div class="sec-dot"></div>ORDER ENTRY</div><span style="font-size:7px;color:var(--text3)">MARKET ORDER</span></div>
    <div class="oe-body">
      <div class="lot-strip">
        <button class="lot-btn" onclick="setLot(0.01,this)">0.01</button>
        <button class="lot-btn" onclick="setLot(0.1,this)">0.10</button>
        <button class="lot-btn sel" onclick="setLot(1.0,this)">1.00</button>
        <button class="lot-btn" onclick="setLot(5.0,this)">5.00</button>
        <button class="lot-btn" onclick="setLot(10,this)">10.0</button>
      </div>
      <div class="cl-row">
        <span class="cl-lbl">LOT:</span>
        <input class="cl-input" type="number" id="customLot" value="1.00" min="0.01" step="0.01" oninput="setCustomLot(this.value)">
        <span class="cl-info" id="lot-info">= 100 oz gold</span>
      </div>
      <div class="sltp-grid">
        <div class="sltp-f"><span class="sltp-l">STOP LOSS (pips)</span><input class="sltp-i" type="number" id="slPips" value="50" min="0"></div>
        <div class="sltp-f"><span class="sltp-l">TAKE PROFIT (pips)</span><input class="sltp-i" type="number" id="tpPips" value="100" min="0"></div>
      </div>
      <div class="bs-grid">
        <button class="bs-btn buy-btn" onclick="placeOrder('buy')">BUY<span class="btn-sub" id="buy-price">@ 2,343.00</span></button>
        <button class="bs-btn sell-btn" onclick="placeOrder('sell')">SELL<span class="btn-sub" id="sell-price">@ 2,342.00</span></button>
      </div>
    </div>

    <!-- POSITION -->
    <div class="sec-hdr"><div class="sec-hdr-l"><div class="sec-dot"></div>OPEN POSITION</div><span id="pos-badge" style="font-size:7px;color:var(--text3)">FLAT</span></div>
    <div class="pos-grid">
      <div class="pos-cell"><span class="pos-k">STATUS</span><span class="pos-v" id="p-status" style="color:var(--text3)">FLAT</span></div>
      <div class="pos-cell"><span class="pos-k">DIRECTION</span><span class="pos-v" id="p-dir" style="color:var(--text3)">—</span></div>
      <div class="pos-cell"><span class="pos-k">LOT</span><span class="pos-v" id="p-lot">0.00</span></div>
      <div class="pos-cell"><span class="pos-k">ENTRY</span><span class="pos-v" id="p-entry">—</span></div>
      <div class="pos-cell"><span class="pos-k">CURRENT</span><span class="pos-v" id="p-cur">—</span></div>
      <div class="pos-cell"><span class="pos-k">PIPS</span><span class="pos-v" id="p-pips" style="color:var(--text3)">—</span></div>
      <div class="pos-cell"><span class="pos-k">FLOAT P&amp;L</span><span class="pos-v" id="p-upnl" style="color:var(--text3)">$0.00</span></div>
      <div class="pos-cell"><span class="pos-k">REALIZED</span><span class="pos-v" id="p-rpnl" style="color:var(--text3)">$0.00</span></div>
    </div>
    <button class="close-all" onclick="closePosition()">▣ CLOSE ALL POSITIONS</button>

    <!-- SIM CONTROLS -->
    <div class="sec-hdr"><div class="sec-hdr-l"><div class="sec-dot"></div>SIMULATION</div></div>
    <div class="sim-body">
      <div class="sim-ctrl-row">
        <button class="sim-btn" id="btnAuto" onclick="toggleAuto()"><span id="autoDot" style="width:5px;height:5px;border-radius:50%;background:var(--text3)"></span>AUTO</button>
        <button class="sim-btn" id="btnPause" onclick="togglePause()">⏸ PAUSE</button>
        <button class="sim-btn" onclick="resetSim()">↺ RESET</button>
        <button class="sim-btn" onclick="injectVol()">⚡ SPIKE</button>
      </div>
      <div class="sliders-grid">
        <div class="sl-item"><span class="sl-lbl">VOLATILITY</span><div class="sl-row"><input type="range" id="slVol" min="1" max="10" value="3" step="1" oninput="document.getElementById('svVol').textContent=this.value"><span class="sl-v" id="svVol">3</span></div></div>
        <div class="sl-item"><span class="sl-lbl">TREND BIAS</span><div class="sl-row"><input type="range" id="slTrend" min="-5" max="5" value="0" step="1" oninput="document.getElementById('svTrend').textContent=this.value"><span class="sl-v" id="svTrend">0</span></div></div>
        <div class="sl-item"><span class="sl-lbl">NOISE</span><div class="sl-row"><input type="range" id="slNoise" min="0" max="10" value="3" step="1" oninput="document.getElementById('svNoise').textContent=this.value"><span class="sl-v" id="svNoise">3</span></div></div>
      </div>
    </div>

    <!-- LOG + TAPE -->
    <div class="log-section">
      <div class="sec-hdr" style="flex-shrink:0"><div class="sec-hdr-l"><div class="sec-dot"></div>ACTIVITY LOG</div><span id="log-ct" style="font-size:7px;color:var(--text3)">0 EVENTS</span></div>
      <div class="log-body" id="logPanel"><div class="log-item"><span class="log-ts">[00:00:00]</span><span class="log-msg li">FDN Capital initialized. XAU/USD simulation ready.</span></div></div>
      <div class="tape-wrap">
        <div class="tape-cols"><span>SIDE</span><span>PRICE</span><span>LOT</span><span style="text-align:right">PIPS</span></div>
        <div class="tape-body" id="tapebody"></div>
      </div>
    </div>

  </div>
</div>

<div class="disclaimer">⚠ FDN CAPITAL SIMULATOR — EDUCATIONAL ONLY. Harga XAU/USD bersifat fiktif. Tidak mencerminkan pasar riil. Pump &amp; dump adalah manipulasi pasar ilegal.</div>

<script>
// ── CONFIG ──────────────────────────────────────────────────────
const INIT_PRICE   = 2342.50;
const SPREAD       = 0.50;
const PIP_SIZE     = 0.10;
const LOT_UNITS    = 100;
const INIT_BALANCE = 10000;
const MARGIN_RATE  = 0.01;

const TF_TICKS = { M1:12, M5:20, M15:30, H1:60 };
const TF_IVL   = { M1:380, M5:480, M6:580, H1:680 };

// ── STATE ──────────────────────────────────────────────────────
let S = {};
let currentTF = 'M1';
let tickTimer = null;
let logCount  = 0;
let lastTapeP = INIT_PRICE;

function initState(){
  return {
    price: INIT_PRICE, high: INIT_PRICE, low: INIT_PRICE,
    balance: INIT_BALANCE, realPnl: 0, totalVol: 0,
    pos: null, lot: 1.0, paused: false,
    autoMode: false, autoPhase: 'idle', autoStep: 0, autoMax: 0,
    momentum: 0,
    eqHistory: [INIT_BALANCE],
    candles: [], curCandle: null, tickInCandle: 0, simTime: 0,
    ov: { ma20:false, ma50:false, bb:false, vwap:false, vol:false },
  };
}

// ── MARQUEE ─────────────────────────────────────────────────────
const MKTS=[['XAU/USD','2,342.50','+0.12%',true],['EUR/USD','1.0862','+0.09%',true],['GBP/USD','1.2715','-0.07%',false],['USD/JPY','153.42','+0.18%',true],['XAG/USD','27.84','+0.44%',true],['AUD/USD','0.6530','-0.12%',false],['USD/CHF','0.9041','+0.05%',true],['US30','38,420','+0.28%',true],['SPX500','5,234','+0.15%',true],['BTC/USD','68,150','+1.18%',true],['ETH/USD','3,195','+0.87%',true],['USOIL','81.20','-0.38%',false],['NZD/USD','0.5991','-0.10%',false],['NAS100','18,290','+0.21%',true]];
(function(){let h='';for(let j=0;j<2;j++) for(const[s,p,c,u] of MKTS){const cl=u?'mq-g':'mq-r';h+=`<div class="mq-item"><span class="mq-sym">${s}</span><span class="mq-p">${p}</span><span class="${cl}">${c}</span></div>`;}document.getElementById('mqInner').innerHTML=h;})();
setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString('id-ID');},1000);

// ── FORMATTERS ──────────────────────────────────────────────────
function fp(p){return p.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
function fv(n){return n>=1e3?(n/1e3).toFixed(1)+'K':n.toFixed(2);}
function fts(){const t=S.simTime,h=Math.floor(t/3600),m=Math.floor((t%3600)/60),s=t%60;return`[${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}]`;}

// ── LOG ─────────────────────────────────────────────────────────
function log(msg,type='i'){
  const el=document.getElementById('logPanel');
  const d=document.createElement('div');d.className='log-item';
  d.innerHTML=`<span class="log-ts">${fts()}</span><span class="log-msg l${type}">${msg}</span>`;
  el.insertBefore(d,el.firstChild);if(el.children.length>120)el.removeChild(el.lastChild);
  logCount++;document.getElementById('log-ct').textContent=logCount+' EVENTS';
}

// ── LOT ─────────────────────────────────────────────────────────
function setLot(v,btn){
  S.lot=v;
  document.querySelectorAll('.lot-btn').forEach(b=>b.classList.remove('sel'));
  if(btn)btn.classList.add('sel');
  document.getElementById('customLot').value=v.toFixed(2);
  document.getElementById('lot-info').textContent=`= ${(v*LOT_UNITS).toFixed(0)} oz gold`;
}
function setCustomLot(v){
  S.lot=Math.max(0.01,parseFloat(v)||0.01);
  document.querySelectorAll('.lot-btn').forEach(b=>b.classList.remove('sel'));
  document.getElementById('lot-info').textContent=`= ${(S.lot*LOT_UNITS).toFixed(0)} oz gold`;
}

// ── ORDER ────────────────────────────────────────────────────────
function placeOrder(side){
  if(S.pos){log('⚠ Close existing position first.','w');return;}
  const entry=side==='buy'?S.price+SPREAD/2:S.price-SPREAD/2;
  S.pos={side,entry,lot:S.lot,sl:+document.getElementById('slPips').value,tp:+document.getElementById('tpPips').value};
  document.getElementById('tb-lot').textContent=S.lot.toFixed(2);
  log(`${side.toUpperCase()} ${S.lot.toFixed(2)}L @ ${fp(entry)} | SL:${S.pos.sl}p TP:${S.pos.tp}p`,'p');
  updateUI();
}
function closePosition(){
  if(!S.pos)return;
  const pips=S.pos.side==='buy'?(S.price-S.pos.entry)/PIP_SIZE:(S.pos.entry-S.price)/PIP_SIZE;
  const pnl=pips*S.pos.lot*PIP_SIZE*LOT_UNITS;
  S.realPnl+=pnl;S.balance+=pnl;
  const sign=pnl>=0?'+':'-';
  log(`CLOSED ${S.pos.side.toUpperCase()} ${S.pos.lot.toFixed(2)}L @ ${fp(S.price)} | ${pips>=0?'+':''}${pips.toFixed(1)} pips | ${sign}$${Math.abs(pnl).toFixed(2)}`,pnl>=0?'p':'d');
  S.pos=null;document.getElementById('tb-lot').textContent='0.00';updateUI();
}

// ── CANDLE ───────────────────────────────────────────────────────
function newC(p,t){return{o:p,h:p,l:p,c:p,vol:0,t};}
function finishC(){if(S.curCandle&&S.curCandle.vol>0){S.candles.push(S.curCandle);if(S.candles.length>300)S.candles.shift();}}
function getLabel(){const t=S.simTime;return`${String(Math.floor(t/3600)).padStart(2,'0')}:${String(Math.floor((t%3600)/60)).padStart(2,'0')}`;}

// ── TICK ─────────────────────────────────────────────────────────
// Price movement: lot size influences volatility → bigger lot = bigger impulse
function pushTick(forced){
  if(S.paused)return;
  const vol  =parseInt(document.getElementById('slVol').value);
  const trend=parseInt(document.getElementById('slTrend').value);
  const noise=parseInt(document.getElementById('slNoise').value);

  const baseVol = 0.04 + vol*0.025;
  const tBias   = trend*0.012;
  const noiseC  = (Math.random()-0.5)*noise*0.035;

  // Lot pressure: open position's lot creates slight directional drift
  let lotPressure = 0;
  if(S.pos){
    const dir = S.pos.side==='buy'?1:-1;
    // Larger lot = more market impact
    lotPressure = dir * S.pos.lot * 0.006;
  }

  // Mean reversion
  const meanRev = (INIT_PRICE - S.price) * 0.00015;

  S.momentum = S.momentum*0.88 + (tBias+noiseC)*0.12;
  let delta = forced!==undefined ? forced : (Math.random()-0.5)*baseVol*2 + tBias*0.08 + noiseC + meanRev + S.momentum + lotPressure;
  const maxD = baseVol*3.5;
  delta = Math.max(-maxD,Math.min(maxD,delta));

  S.price = Math.max(2100,S.price+delta);
  S.high  = Math.max(S.high,S.price);
  S.low   = Math.min(S.low,S.price);
  S.totalVol += (0.1+Math.random()*1.5);
  S.simTime++;
  S.tickInCandle++;

  // Candle update with realistic wicks
  const lbl = getLabel();
  if(!S.curCandle) S.curCandle=newC(S.price,lbl);
  // Wick simulation: intra-tick extremes based on volatility
  const wickScale = baseVol*(0.5+Math.random());
  const upW  = Math.max(0,delta>0?delta*0.3+wickScale*0.4:wickScale*0.3);
  const dnW  = Math.max(0,delta<0?Math.abs(delta)*0.3+wickScale*0.4:wickScale*0.3);
  S.curCandle.h   = Math.max(S.curCandle.h, S.price+upW);
  S.curCandle.l   = Math.min(S.curCandle.l, S.price-dnW);
  S.curCandle.c   = S.price;
  S.curCandle.vol += 0.1+Math.random()*0.9;
  S.curCandle.t   = lbl;

  const tpc = TF_TICKS[currentTF]||12;
  if(S.tickInCandle>=tpc){
    S.tickInCandle=0;finishC();
    S.curCandle=newC(S.price,getLabel());
  }

  // Tape
  if(Math.random()>0.55){
    const tl=+(0.1+Math.random()*9.9).toFixed(2);
    addTape(delta>=0?'B':'S',S.price,tl);
  }

  // SL/TP check
  if(S.pos){
    const pips=S.pos.side==='buy'?(S.price-S.pos.entry)/PIP_SIZE:(S.pos.entry-S.price)/PIP_SIZE;
    if(S.pos.tp>0&&pips>=S.pos.tp){log(`✓ TP HIT @ ${fp(S.price)} | +${pips.toFixed(1)}p`,'p');closePosition();}
    else if(S.pos.sl>0&&pips<=-S.pos.sl){log(`✗ SL HIT @ ${fp(S.price)} | ${pips.toFixed(1)}p`,'d');closePosition();}
  }

  drawChart();updateUI();
  if(Math.random()>0.68)updateOB();

  if(S.simTime%5===0){
    S.eqHistory.push(getEquity());
    if(S.eqHistory.length>140)S.eqHistory.shift();
    drawSpark();
  }
}

// ── AUTO SCENARIO ───────────────────────────────────────────────
// Drives price through accumulate→surge→distribute→drop cycle
// No manual pump/dump buttons. AUTO scenario does this automatically.
function autoTick(){
  if(!S.autoMode||S.paused)return;
  S.autoStep++;
  const p=S.autoStep/S.autoMax;
  const ph=S.autoPhase;
  if(ph==='accum'){
    pushTick(0.03+Math.random()*0.04);
    phaseBar('ACCUMULATING',p,'var(--gold)');
    if(S.autoStep>=S.autoMax){log('Distribution building. Smart money loading.','w');setAP('surge');}
  } else if(ph==='surge'){
    const k=1+p*1.8;
    pushTick(0.1*k+Math.random()*0.07*k);
    phaseBar('SURGING ▲',p,'var(--green)');
    if(S.autoStep>=S.autoMax){log('Peak zone. Distribution phase.','d');setAP('distrib');}
  } else if(ph==='distrib'){
    pushTick((Math.random()-0.55)*0.12);
    phaseBar('DISTRIBUTING',p,'var(--gold2)');
    if(S.autoStep>=S.autoMax){log('Selling pressure emerging.','d');setAP('drop');}
  } else if(ph==='drop'){
    const k=1+p*1.5;
    pushTick(-0.09*k-Math.random()*0.07*k);
    phaseBar('DROPPING ▼',p,'var(--red)');
    if(S.autoStep>=S.autoMax){log('Cycle complete. Normalizing.','i');phaseBar('IDLE',0,'var(--text3)');setAP('rest');}
  } else if(ph==='rest'){
    pushTick();
    if(S.autoStep>=S.autoMax)setAP('accum');
  }
}
function setAP(ph){
  S.autoPhase=ph; S.autoStep=0;
  S.autoMax={accum:55,surge:45,distrib:35,drop:50,rest:25}[ph]||40;
}
function phaseBar(lbl,pct,col){
  document.getElementById('pbLbl').textContent=lbl;
  document.getElementById('pbFill').style.width=(pct*100).toFixed(0)+'%';
  document.getElementById('pbFill').style.background=col;
  document.getElementById('pbDot').style.background=col;
  document.getElementById('pbPct').textContent=(pct*100).toFixed(0)+'%';
  document.getElementById('pbInfo').textContent=fp(S.price);
}

function injectVol(){
  let n=0;const iv=setInterval(()=>{if(n++>=15){clearInterval(iv);return;}pushTick((Math.random()-0.45)*0.35);},75);
  log('Volume spike injected.','w');
}

// ── ORDER BOOK ───────────────────────────────────────────────────
function updateOB(){
  const p=S.price;const asks=[],bids=[];
  for(let i=5;i>=1;i--){asks.push([p+SPREAD/2+i*(0.35+Math.random()*0.3),+(0.5+Math.random()*48).toFixed(2)]);}
  for(let i=1;i<=5;i++){bids.push([p-SPREAD/2-i*(0.35+Math.random()*0.3),+(0.5+Math.random()*48).toFixed(2)]);}
  const mx=Math.max(...asks.map(a=>a[1]),...bids.map(b=>b[1]));
  let ah='',bh='';
  for(const[ap,lot]of asks){const pct=(lot/mx*100).toFixed(0);ah+=`<div class="ob-row ob-ask"><div class="ob-bar" style="width:${pct}%"></div><span class="ask-p">${fp(ap)}</span><span class="ob-sz">${lot.toFixed(2)}</span><span class="ob-tot">${(ap*lot*0.01).toFixed(0)}</span></div>`;}
  for(const[bp,lot]of bids){const pct=(lot/mx*100).toFixed(0);bh+=`<div class="ob-row ob-bid"><div class="ob-bar" style="width:${pct}%"></div><span class="bid-p">${fp(bp)}</span><span class="ob-sz">${lot.toFixed(2)}</span><span class="ob-tot">${(bp*lot*0.01).toFixed(0)}</span></div>`;}
  document.getElementById('askBook').innerHTML=ah;
  document.getElementById('bidBook').innerHTML=bh;
  document.getElementById('obMid').innerHTML=`${fp(p)} <span>SPREAD 0.50</span>`;
  document.getElementById('cm-bid').textContent=fp(p-SPREAD/2);
  document.getElementById('cm-ask').textContent=fp(p+SPREAD/2);
  document.getElementById('buy-price').textContent=`@ ${fp(p+SPREAD/2)}`;
  document.getElementById('sell-price').textContent=`@ ${fp(p-SPREAD/2)}`;
}

// ── TAPE ─────────────────────────────────────────────────────────
function addTape(side,price,lot){
  const pips=((price-lastTapeP)/PIP_SIZE).toFixed(1);lastTapeP=price;
  const el=document.getElementById('tapebody');
  const d=document.createElement('div');d.className='tape-row';
  const pc=parseFloat(pips)>=0?'var(--green)':'var(--red)';
  d.innerHTML=`<span class="${side==='B'?'t-buy':'t-sell'}">${side}</span><span style="color:var(--text)">${fp(price)}</span><span style="color:var(--gold2)">${lot.toFixed(2)}</span><span style="color:${pc};text-align:right">${pips}</span>`;
  el.insertBefore(d,el.firstChild);if(el.children.length>50)el.removeChild(el.lastChild);
}

// ── EQUITY SPARK ────────────────────────────────────────────────
function getEquity(){
  let fl=0;
  if(S.pos){const p=S.pos.side==='buy'?(S.price-S.pos.entry)/PIP_SIZE:(S.pos.entry-S.price)/PIP_SIZE;fl=p*S.pos.lot*PIP_SIZE*LOT_UNITS;}
  return S.balance+fl;
}
function drawSpark(){
  const cvs=document.getElementById('equitySparkCanvas');if(!cvs)return;
  const W=cvs.clientWidth||280,H=cvs.clientHeight||32;
  cvs.width=W*devicePixelRatio;cvs.height=H*devicePixelRatio;
  const ctx=cvs.getContext('2d');ctx.scale(devicePixelRatio,devicePixelRatio);
  const data=S.eqHistory;if(data.length<2)return;
  const mn=Math.min(...data),mx=Math.max(...data),rng=mx-mn||1;
  const sx=W/(data.length-1),py=v=>H-2-((v-mn)/rng)*(H-4);
  ctx.clearRect(0,0,W,H);
  const last=data[data.length-1],col=last>=INIT_BALANCE?'0,217,126':'255,77,90';
  const gr=ctx.createLinearGradient(0,0,0,H);gr.addColorStop(0,`rgba(${col},.22)`);gr.addColorStop(1,`rgba(${col},0)`);
  ctx.beginPath();ctx.moveTo(0,py(data[0]));data.forEach((v,i)=>ctx.lineTo(i*sx,py(v)));
  ctx.lineTo((data.length-1)*sx,H);ctx.lineTo(0,H);ctx.closePath();ctx.fillStyle=gr;ctx.fill();
  ctx.beginPath();ctx.moveTo(0,py(data[0]));data.forEach((v,i)=>ctx.lineTo(i*sx,py(v)));
  ctx.strokeStyle=`rgba(${col},.9)`;ctx.lineWidth=1.5;ctx.stroke();
  const by=py(INIT_BALANCE);ctx.beginPath();ctx.moveTo(0,by);ctx.lineTo(W,by);
  ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=0.5;ctx.setLineDash([3,3]);ctx.stroke();ctx.setLineDash([]);
}

// ── UPDATE UI ────────────────────────────────────────────────────
function updateUI(){
  const chg=S.price-INIT_PRICE,pct=chg/INIT_PRICE*100;
  const col=chg>0?'var(--green)':chg<0?'var(--red)':'var(--text2)';
  document.getElementById('tb-price').textContent=fp(S.price);
  document.getElementById('tb-price').style.color=col;
  const ce=document.getElementById('tb-chg');
  ce.textContent=(chg>=0?'+':'')+fp(chg)+' ('+(pct>=0?'+':'')+pct.toFixed(2)+'%)';
  ce.style.color=col;ce.style.background=chg>0?'rgba(0,217,126,.12)':chg<0?'rgba(255,77,90,.12)':'transparent';
  document.getElementById('tb-high').textContent=fp(S.high);
  document.getElementById('tb-low').textContent=fp(S.low);
  document.getElementById('tb-vol').textContent=fv(S.totalVol);
  document.getElementById('cm-last').textContent=fp(S.price);document.getElementById('cm-last').style.color=col;
  document.getElementById('cm-chg').textContent=(chg>=0?'+':'')+fp(chg)+' / '+(pct>=0?'+':'')+pct.toFixed(2)+'%';
  document.getElementById('cm-chg').style.color=col;
  document.getElementById('cm-high').textContent=fp(S.high);document.getElementById('cm-low').textContent=fp(S.low);

  let fl=0,margin=0;
  if(S.pos){
    const pips=S.pos.side==='buy'?(S.price-S.pos.entry)/PIP_SIZE:(S.pos.entry-S.price)/PIP_SIZE;
    fl=pips*S.pos.lot*PIP_SIZE*LOT_UNITS;margin=S.pos.lot*S.pos.entry*LOT_UNITS*MARGIN_RATE;
    const pc=fl>=0?'var(--green)':'var(--red)';
    document.getElementById('p-status').textContent='OPEN';document.getElementById('p-status').style.color='var(--green)';
    document.getElementById('p-dir').textContent=S.pos.side.toUpperCase();document.getElementById('p-dir').style.color=S.pos.side==='buy'?'var(--green)':'var(--red)';
    document.getElementById('p-lot').textContent=S.pos.lot.toFixed(2)+'L';
    document.getElementById('p-entry').textContent=fp(S.pos.entry);
    document.getElementById('p-cur').textContent=fp(S.price);
    document.getElementById('p-pips').textContent=(pips>=0?'+':'')+pips.toFixed(1)+'p';document.getElementById('p-pips').style.color=pc;
    document.getElementById('p-upnl').textContent=(fl>=0?'+':'')+'$'+Math.abs(fl).toFixed(2);document.getElementById('p-upnl').style.color=pc;
    document.getElementById('tb-upnl').textContent=(fl>=0?'+':'')+'$'+Math.abs(fl).toFixed(2);document.getElementById('tb-upnl').style.color=pc;
    document.getElementById('pos-badge').textContent=(fl>=0?'+':'')+'$'+Math.abs(fl).toFixed(2);document.getElementById('pos-badge').style.color=pc;
    document.getElementById('eq-margin').textContent='$'+margin.toFixed(2);
    document.getElementById('eq-free').textContent='$'+(S.balance-margin+fl).toFixed(2);
  } else {
    ['p-status','p-dir','p-pips','p-upnl'].forEach(id=>{document.getElementById(id).style.color='var(--text3)';});
    document.getElementById('p-status').textContent='FLAT';document.getElementById('p-dir').textContent='—';
    document.getElementById('p-lot').textContent='0.00L';document.getElementById('p-entry').textContent='—';document.getElementById('p-cur').textContent='—';
    document.getElementById('p-pips').textContent='—';document.getElementById('p-upnl').textContent='$0.00';
    document.getElementById('tb-upnl').textContent='$0.00';document.getElementById('tb-upnl').style.color='var(--text3)';
    document.getElementById('pos-badge').textContent='FLAT';document.getElementById('pos-badge').style.color='var(--text3)';
    document.getElementById('eq-margin').textContent='$0.00';document.getElementById('eq-free').textContent='$'+S.balance.toFixed(2);
  }
  const rp=S.realPnl;
  document.getElementById('p-rpnl').textContent=(rp>=0?'+':'')+'$'+Math.abs(rp).toFixed(2);
  document.getElementById('p-rpnl').style.color=rp>0?'var(--green)':rp<0?'var(--red)':'var(--text3)';
  const eq=getEquity(),ec=eq>=INIT_BALANCE?'var(--green)':'var(--red)';
  document.getElementById('eq-balance').textContent='$'+S.balance.toFixed(2);
  document.getElementById('eq-equity').textContent='$'+eq.toFixed(2);document.getElementById('eq-equity').style.color=ec;
  document.getElementById('tb-equity').textContent='$'+eq.toFixed(2);document.getElementById('tb-equity').style.color=ec;
}

// ── CHART ─────────────────────────────────────────────────────────
const canvas=document.getElementById('candleCanvas');
const ctx=canvas.getContext('2d');

function resizeCanvas(){
  const w=canvas.parentElement.clientWidth,h=canvas.parentElement.clientHeight;
  canvas.width=w*devicePixelRatio;canvas.height=h*devicePixelRatio;
  canvas.style.width=w+'px';canvas.style.height=h+'px';drawChart();
}
window.addEventListener('resize',resizeCanvas);

function drawChart(){
  const W=canvas.width,H=canvas.height,dpr=devicePixelRatio;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0a0b0d';ctx.fillRect(0,0,W,H);
  const PR=66*dpr,PT=12*dpr,PB=S.ov.vol?52*dpr:22*dpr,CW=W-PR,CH=H-PT-PB;
  const all=[...S.candles];if(S.curCandle&&S.curCandle.vol>0)all.push(S.curCandle);
  if(all.length<2){ctx.fillStyle='#2a2e36';ctx.font=`${10*dpr}px IBM Plex Mono`;ctx.fillText('Awaiting data...',20*dpr,H/2);return;}
  const maxV=Math.max(28,Math.floor(CW/(14*dpr))),vis=all.slice(-maxV),nC=vis.length;
  let pH=Math.max(...vis.map(c=>c.h)),pL=Math.min(...vis.map(c=>c.l));

  // Compute overlays
  const ov=S.ov;let ma20=null,ma50=null,bbU=null,bbD=null,vwap=null;
  if(ov.ma20&&all.length>=20){ma20=cMA(all,vis,20);const v=ma20.filter(x=>x!==null);if(v.length){pH=Math.max(pH,...v);pL=Math.min(pL,...v);}}
  if(ov.ma50&&all.length>=50){ma50=cMA(all,vis,50);const v=ma50.filter(x=>x!==null);if(v.length){pH=Math.max(pH,...v);pL=Math.min(pL,...v);}}
  if(ov.bb&&all.length>=20){[bbU,bbD]=cBB(all,vis,20);const u=bbU.filter(x=>x!==null),d=bbD.filter(x=>x!==null);if(u.length){pH=Math.max(pH,...u);pL=Math.min(pL,...d);}}
  if(ov.vwap){vwap=cVWAP(vis);const v=vwap.filter(x=>x!==null);if(v.length){pH=Math.max(pH,...v);pL=Math.min(pL,...v);}}

  const rng=pH-pL||1,pad=rng*0.1,pHH=pH+pad,pLL=pL-pad,pSP=pHH-pLL;
  const py=p=>PT+CH*(1-(p-pLL)/pSP);
  const cW=CW/nC,cBW=Math.max(1.5*dpr,cW*0.60);

  // Grid
  ctx.lineWidth=0.5*dpr;ctx.strokeStyle='rgba(255,255,255,.03)';
  for(let i=0;i<=6;i++){
    const y=PT+CH*(i/6);ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(CW,y);ctx.stroke();
    ctx.fillStyle='#3e4650';ctx.font=`${7.5*dpr}px IBM Plex Mono`;ctx.textAlign='left';
    ctx.fillText(fp(pHH-(pSP*i/6)),CW+3*dpr,y+3*dpr);
  }
  const vst=Math.ceil(nC/7);
  vis.forEach((c,i)=>{if(i>0&&i%vst===0){const x=cW*i+cW/2;ctx.beginPath();ctx.moveTo(x,PT);ctx.lineTo(x,PT+CH);ctx.stroke();}});

  // Volume bars
  if(ov.vol){
    const mv=Math.max(...vis.map(c=>c.vol),.001);
    vis.forEach((c,i)=>{
      const x=cW*i+(cW-cBW)/2,vh=(c.vol/mv)*(PB-8*dpr),vy=H-6*dpr-vh;
      ctx.fillStyle=c.c>=c.o?'rgba(0,217,126,.18)':'rgba(255,77,90,.18)';
      ctx.fillRect(x,vy,cBW,vh);
    });
  }

  // Bollinger fill
  if(ov.bb&&bbU){
    ctx.beginPath();let f=true;
    bbU.forEach((v,i)=>{if(!v){f=true;return;}const x=cW*i+cW/2;if(f){ctx.moveTo(x,py(v));f=false;}else ctx.lineTo(x,py(v));});
    bbD.slice().reverse().forEach((v,i,a)=>{if(!v)return;const idx=a.length-1-i;const x=cW*idx+cW/2;ctx.lineTo(x,py(v));});
    ctx.closePath();ctx.fillStyle='rgba(74,158,255,.04)';ctx.fill();
    drawLine(ctx,bbU,cW,py,'rgba(74,158,255,.5)',0.7*dpr,[3*dpr,3*dpr]);
    drawLine(ctx,bbD,cW,py,'rgba(74,158,255,.5)',0.7*dpr,[3*dpr,3*dpr]);
  }
  if(ov.ma50&&ma50)drawLine(ctx,ma50,cW,py,'rgba(139,92,246,.75)',1*dpr);
  if(ov.ma20&&ma20)drawLine(ctx,ma20,cW,py,'rgba(248,196,113,.9)',1.2*dpr);
  if(ov.vwap&&vwap)drawLine(ctx,vwap,cW,py,'rgba(0,200,212,.8)',1*dpr,[4*dpr,2*dpr]);

  // ── CANDLES (with mandatory wicks) ──
  vis.forEach((c,i)=>{
    const x=cW*i+(cW-cBW)/2,mx=cW*i+cW/2;
    const bull=c.c>=c.o;
    const bTop=Math.max(c.o,c.c),bBot=Math.min(c.o,c.c);
    const bodyH=bTop-bBot,range=c.h-c.l||0.01;

    // Enforce minimum wick ratios for realism
    // Upper wick ≥ 8% of range, lower wick ≥ 8% of range
    const minWick=range*0.08;
    const realH=Math.max(c.h,bTop+minWick);
    const realL=Math.min(c.l,bBot-minWick);

    const col=bull?'#00d97e':'#ff4d5a';
    ctx.strokeStyle=col;ctx.lineWidth=Math.max(0.8*dpr,1);

    // Upper wick
    ctx.beginPath();ctx.moveTo(mx,py(realH));ctx.lineTo(mx,py(bTop));ctx.stroke();
    // Lower wick
    ctx.beginPath();ctx.moveTo(mx,py(bBot));ctx.lineTo(mx,py(realL));ctx.stroke();

    // Body
    const by=py(bTop),bh=Math.max(1.5*dpr,py(bBot)-py(bTop));
    ctx.fillStyle=bull?'rgba(0,217,126,.72)':'rgba(255,77,90,.72)';
    ctx.fillRect(x,by,cBW,bh);
    ctx.strokeStyle=col;ctx.lineWidth=0.5*dpr;ctx.strokeRect(x,by,cBW,bh);
  });

  // Current price line
  ctx.setLineDash([4*dpr,4*dpr]);ctx.strokeStyle='rgba(240,180,41,.45)';ctx.lineWidth=0.7*dpr;
  ctx.beginPath();ctx.moveTo(0,py(S.price));ctx.lineTo(CW,py(S.price));ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle='#f0b429';ctx.fillRect(CW,py(S.price)-7*dpr,PR,14*dpr);
  ctx.fillStyle='#000';ctx.font=`bold ${8.5*dpr}px IBM Plex Mono`;ctx.textAlign='center';
  ctx.fillText(fp(S.price),CW+PR/2,py(S.price)+3*dpr);

  // Position entry line
  if(S.pos){
    const ep=S.pos.entry,pips=S.pos.side==='buy'?(S.price-ep)/PIP_SIZE:(ep-S.price)/PIP_SIZE;
    const ec=pips>=0?'#00d97e':'#ff4d5a';
    ctx.setLineDash([5*dpr,3*dpr]);ctx.strokeStyle=ec;ctx.lineWidth=0.7*dpr;
    ctx.beginPath();ctx.moveTo(0,py(ep));ctx.lineTo(CW,py(ep));ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle=ec;ctx.fillRect(CW,py(ep)-6*dpr,PR,12*dpr);
    ctx.fillStyle='#000';ctx.font=`${7.5*dpr}px IBM Plex Mono`;ctx.textAlign='center';
    ctx.fillText(fp(ep),CW+PR/2,py(ep)+3*dpr);
  }

  // Time labels
  ctx.fillStyle='#3e4650';ctx.font=`${7*dpr}px IBM Plex Mono`;ctx.textAlign='center';
  vis.forEach((c,i)=>{if(i>0&&i%vst===0)ctx.fillText(c.t,cW*i+cW/2,H-7*dpr);});

  // Overlay legend
  let lx=6*dpr;const ly=PT-3*dpr;
  const legs=[];
  if(ov.ma20)legs.push(['MA20','rgba(248,196,113,.9)']);
  if(ov.ma50)legs.push(['MA50','rgba(139,92,246,.8)']);
  if(ov.bb)  legs.push(['BB(20)','rgba(74,158,255,.7)']);
  if(ov.vwap)legs.push(['VWAP','rgba(0,200,212,.8)']);
  legs.forEach(([l,c])=>{
    ctx.fillStyle=c;ctx.fillRect(lx,ly-4*dpr,12*dpr,2*dpr);lx+=15*dpr;
    ctx.fillStyle='#5a6270';ctx.font=`${7*dpr}px IBM Plex Mono`;ctx.textAlign='left';
    ctx.fillText(l,lx,ly);lx+=ctx.measureText(l).width+14*dpr;
  });
}

function drawLine(ctx,arr,cW,py,color,lw,dash){
  ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=lw;
  if(dash)ctx.setLineDash(dash);else ctx.setLineDash([]);
  let f=true;
  arr.forEach((v,i)=>{if(v===null){f=true;return;}const x=cW*i+cW/2;if(f){ctx.moveTo(x,py(v));f=false;}else ctx.lineTo(x,py(v));});
  ctx.stroke();ctx.setLineDash([]);
}
function cMA(all,vis,n){const ma=[],al=all.length;for(let i=0;i<vis.length;i++){const idx=al-vis.length+i;if(idx>=n-1){const sl=all.slice(idx-n+1,idx+1);ma.push(sl.reduce((a,b)=>a+b.c,0)/n);}else ma.push(null);}return ma;}
function cBB(all,vis,n){const u=[],d=[],al=all.length;for(let i=0;i<vis.length;i++){const idx=al-vis.length+i;if(idx>=n-1){const sl=all.slice(idx-n+1,idx+1);const m=sl.reduce((a,b)=>a+b.c,0)/n;const sd=Math.sqrt(sl.map(c=>(c.c-m)**2).reduce((a,b)=>a+b,0)/n);u.push(m+2*sd);d.push(m-2*sd);}else{u.push(null);d.push(null);}}return[u,d];}
function cVWAP(vis){let cpv=0,cv=0;return vis.map(c=>{const tp=(c.h+c.l+c.c)/3;const v=c.vol||1;cpv+=tp*v;cv+=v;return cpv/cv;});}

// ── TOOLTIP ──────────────────────────────────────────────────────
canvas.addEventListener('mousemove',e=>{
  const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;
  const all=[...S.candles];if(S.curCandle&&S.curCandle.vol>0)all.push(S.curCandle);
  const mv=Math.max(28,Math.floor(canvas.clientWidth/14));
  const vis=all.slice(-mv);const cw=canvas.clientWidth/vis.length;
  const idx=Math.min(Math.floor(mx/cw),vis.length-1);const c=vis[idx];
  document.getElementById('crosshairH').style.display='block';document.getElementById('crosshairH').style.top=my+'px';
  document.getElementById('crosshairV').style.display='block';document.getElementById('crosshairV').style.left=mx+'px';
  if(!c){document.getElementById('chartTip').style.display='none';return;}
  const tip=document.getElementById('chartTip');tip.style.display='block';
  tip.style.left=Math.min(mx+12,canvas.clientWidth-130)+'px';tip.style.top='8px';
  document.getElementById('tt-time').textContent=c.t+' · '+currentTF;
  document.getElementById('tt-o').textContent=fp(c.o);
  document.getElementById('tt-h').textContent=fp(c.h);
  document.getElementById('tt-l').textContent=fp(c.l);
  document.getElementById('tt-c').textContent=fp(c.c);document.getElementById('tt-c').style.color=c.c>=c.o?'var(--green)':'var(--red)';
  document.getElementById('tt-v').textContent=fv(c.vol);
  document.getElementById('cm-co').textContent=fp(c.o);
  document.getElementById('cm-cr').textContent=((c.h-c.l)/PIP_SIZE).toFixed(1)+'p';
});
canvas.addEventListener('mouseleave',()=>{
  document.getElementById('chartTip').style.display='none';
  document.getElementById('crosshairH').style.display='none';
  document.getElementById('crosshairV').style.display='none';
});

// ── CONTROLS ─────────────────────────────────────────────────────
function setTF(tf,btn){
  currentTF=tf;
  document.querySelectorAll('.ctb-btn[data-tf]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  finishC();S.curCandle=null;S.tickInCandle=0;
  startLoop();
}
function toggleOv(name){
  S.ov[name]=!S.ov[name];
  const ids={ma20:'tb-ma20',ma50:'tb-ma50',bb:'tb-bb',vwap:'tb-vwap',vol:'tb-vol'};
  document.getElementById(ids[name]).classList.toggle('act',S.ov[name]);
  drawChart();
}
function toggleAuto(){
  S.autoMode=!S.autoMode;
  document.getElementById('btnAuto').classList.toggle('on',S.autoMode);
  document.getElementById('autoDot').style.background=S.autoMode?'var(--green)':'var(--text3)';
  if(S.autoMode){setAP('accum');log('AUTO SCENARIO: full market cycle started.','w');}
  else{phaseBar('MARKET IDLE',0,'var(--text3)');log('AUTO disabled.','i');}
}
function togglePause(){
  S.paused=!S.paused;
  const b=document.getElementById('btnPause');
  b.textContent=S.paused?'▶ RESUME':'⏸ PAUSE';
  b.classList.toggle('paused-state',S.paused);
}

// ── RESET ────────────────────────────────────────────────────────
function resetSim(){
  const ov={...S.ov};
  S=initState();S.ov=ov;S.lot=parseFloat(document.getElementById('customLot').value)||1;
  logCount=0;lastTapeP=INIT_PRICE;
  document.getElementById('btnAuto').classList.remove('on');document.getElementById('autoDot').style.background='var(--text3)';
  document.getElementById('btnPause').textContent='⏸ PAUSE';document.getElementById('btnPause').classList.remove('paused-state');
  document.getElementById('logPanel').innerHTML='<div class="log-item"><span class="log-ts">[00:00:00]</span><span class="log-msg li">FDN Capital reset. XAU/USD ready.</span></div>';
  document.getElementById('tapebody').innerHTML='';document.getElementById('tb-lot').textContent='0.00';
  document.getElementById('log-ct').textContent='0 EVENTS';
  phaseBar('MARKET IDLE',0,'var(--text3)');

  // Seed 40 candles
  let p=INIT_PRICE;
  for(let i=0;i<40;i++){
    const trend=(Math.random()-0.5)*0.08,o=p,c=o+trend+(Math.random()-0.5)*0.25;
    const bdy=Math.abs(c-o),bTop=Math.max(o,c),bBot=Math.min(o,c);
    // Realistic wick proportions
    const uWick=bdy*0.15+Math.random()*0.35;
    const lWick=bdy*0.15+Math.random()*0.35;
    const h=bTop+uWick,l=bBot-lWick;
    const t=`${String(Math.floor(i/60)).padStart(2,'0')}:${String(i%60).padStart(2,'0')}`;
    S.candles.push({o,h,l,c,vol:0.5+Math.random()*6,t});
    p=c;S.simTime=i+1;
  }
  S.price=S.candles[S.candles.length-1].c;
  S.high=Math.max(...S.candles.map(c=>c.h));S.low=Math.min(...S.candles.map(c=>c.l));
  updateUI();updateOB();drawChart();drawSpark();startLoop();
}

// ── MAIN LOOP ────────────────────────────────────────────────────
function startLoop(){
  if(tickTimer)clearInterval(tickTimer);
  const ivl={M1:380,M5:480,M15:580,H1:700}[currentTF]||380;
  tickTimer=setInterval(()=>{
    if(S.paused)return;
    if(S.autoMode)autoTick();else pushTick();
  },ivl);
}
setInterval(updateOB,2500);

// ── INIT ─────────────────────────────────────────────────────────
S=initState();
resetSim();
setTimeout(resizeCanvas,30);
window.addEventListener('load',()=>{resizeCanvas();startLoop();});
</script>
</body>
</html>
