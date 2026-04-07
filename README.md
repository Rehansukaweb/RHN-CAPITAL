
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN TERMINAL PRO</title><link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"><style>
body{
background:#000;
color:#22c55e;
font-family:'Share Tech Mono', monospace;
}
.container{max-width:900px;margin:auto;padding:20px;}
.box{border:1px solid #22c55e;padding:20px;margin-top:20px;}
.price{font-size:18px;}
.up{color:#22c55e;}
.down{color:#ef4444;}
.blink{animation:blink 1s infinite;}
@keyframes blink{50%{opacity:0.3;}}
</style></head><body>
<div class="container"><div class="box">
<h2>> RHN CAPITAL</h2>
<p>> Status : <span class="blink">LIVE SYSTEM</span></p>
</div><div class="box">
<h2>> MARKET</h2>
<p>BTC : <span id="btc">-</span></p>
<p>GOLD : <span id="gold">-</span></p>
</div><div class="box">
<h2>> SIGNAL (ATR BASED)</h2>
<p>BTC : <span id="btc_signal">-</span></p>
<p>BTC RR : <span id="btc_rr">-</span></p>
<br>
<p>GOLD : <span id="gold_signal">-</span></p>
<p>GOLD RR : <span id="gold_rr">-</span></p>
</div></div><script>

let last = {};

// ===== UI UPDATE =====
function setPrice(id,val){
let el=document.getElementById(id);
if(last[id]){
el.className = val>last[id] ? "up" : "down";
}
el.innerText="$"+val.toLocaleString();
last[id]=val;
}

// ===== ATR =====
function atr(data){
let trs=[];
for(let i=1;i<data.length;i++){
let high=data[i];
let low=data[i];
let prev=data[i-1];
trs.push(Math.abs(high-prev));
}
return trs.reduce((a,b)=>a+b,0)/trs.length;
}

// ===== BTC =====
async function btc(){
let r=await fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=50");
let d=await r.json();

let closes=d.map(x=>parseFloat(x[4]));
let lastP=closes.at(-1);

setPrice("btc",lastP);

// SIGNAL
let ema9 = ema(closes,9);
let ema21 = ema(closes,21);
let vol = atr(closes);

let sig="WAIT";
if(ema9>ema21) sig="BUY";
if(ema9<ema21) sig="SELL";

// RR 1:2
let sl,tp;

if(sig==="BUY"){
sl=lastP-vol;
tp=lastP+vol*2;
}else if(sig==="SELL"){
sl=lastP+vol;
tp=lastP-vol*2;
}else{
sl=lastP; tp=lastP;
}

document.getElementById("btc_signal").innerText=sig;
document.getElementById("btc_rr").innerText=`SL ${sl.toFixed(0)} / TP ${tp.toFixed(0)}`;
}

// ===== GOLD REAL (Yahoo) =====
async function gold(){
let r=await fetch("https://query1.finance.yahoo.com/v8/finance/chart/XAUUSD=X?interval=1m&range=1d");
let j=await r.json();

let closes=j.chart.result[0].indicators.quote[0].close.filter(x=>x);
let lastP=closes.at(-1);

setPrice("gold",lastP);

// SIGNAL
let ema9 = ema(closes,9);
let ema21 = ema(closes,21);
let vol = atr(closes);

let sig="WAIT";
if(ema9>ema21) sig="BUY";
if(ema9<ema21) sig="SELL";

// RR 1:2
let sl,tp;

if(sig==="BUY"){
sl=lastP-vol;
tp=lastP+vol*2;
}else if(sig==="SELL"){
sl=lastP+vol;
tp=lastP-vol*2;
}else{
sl=lastP; tp=lastP;
}

document.getElementById("gold_signal").innerText=sig;
document.getElementById("gold_rr").innerText=`SL ${sl.toFixed(0)} / TP ${tp.toFixed(0)}`;
}

// ===== EMA =====
function ema(data,period){
let k=2/(period+1);
let e=data[0];
for(let i=1;i<data.length;i++){
e=data[i]*k+e*(1-k);
}
return e;
}

// LOOP CEPAT
setInterval(()=>{
btc();
gold();
},3000);

btc();
gold();

</script></body>

