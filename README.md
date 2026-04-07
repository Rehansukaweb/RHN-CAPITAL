
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN FINAL BOSS TERMINAL</title><link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"><style>
body{background:#000;color:#22c55e;font-family:'Share Tech Mono', monospace;}
.container{max-width:1000px;margin:auto;padding:20px;}
.box{border:1px solid #22c55e;padding:20px;margin-top:20px;}
.up{color:#22c55e;}
.down{color:#ef4444;}
.blink{animation:blink 1s infinite;}
@keyframes blink{50%{opacity:0.3;}}
</style></head><body><div class="container"><div class="box">
<h2>> RHN FINAL BOSS SYSTEM</h2>
<p>> Engine : Smart Money + Sniper + Session</p>
<p>> Mode : Multi-Timeframe</p>
<p>> Status : <span class="blink">LIVE EXECUTION</span></p>
</div><div class="box">
<h2>> MARKET</h2>
<p>BTC : <span id="btc">-</span></p>
<p>GOLD : <span id="gold">-</span></p>
<p>SESSION : <span id="session">-</span></p>
</div><div class="box">
<h2>> SIGNAL CORE</h2>
<p>BTC : <span id="btc_signal">-</span></p>
<p>BTC ENTRY : <span id="btc_entry">-</span></p><br><p>GOLD : <span id="gold_signal">-</span></p>
<p>GOLD ENTRY : <span id="gold_entry">-</span></p>
</div></div><script>

// ===== STATE =====
let btc=[], gold=[], last={};

// ===== SESSION =====
function session(){
let h = new Date().getUTCHours();

let s="ASIA";
if(h>=7 && h<12) s="LONDON";
if(h>=12 && h<17) s="NEW YORK";

document.getElementById("session").innerText=s;
return s;
}

// ===== UI =====
function setPrice(id,v){
let el=document.getElementById(id);
if(last[id]) el.className = v>last[id]?"up":"down";
el.innerText="$"+v.toLocaleString();
last[id]=v;
}

// ===== EMA =====
function ema(d,p){
let k=2/(p+1),e=d[0];
for(let i=1;i<d.length;i++){
e=d[i]*k+e*(1-k);
}
return e;
}

// ===== ATR =====
function atr(d){
let t=[];
for(let i=1;i<d.length;i++){
t.push(Math.abs(d[i]-d[i-1]));
}
return t.reduce((a,b)=>a+b,0)/t.length;
}

// ===== STRUCTURE =====
function structure(d){
let h=Math.max(...d.slice(-15));
let l=Math.min(...d.slice(-15));
let p=d.at(-1);

if(p>h) return "BOS_UP";
if(p<l) return "BOS_DOWN";
return "RANGE";
}

// ===== SMART MONEY SNIPER =====
function engine(d,idSig,idEntry){

if(d.length<40) return;

let lastP=d.at(-1);
let prev=d.at(-2);

let emaFast=ema(d.slice(-40),9);
let emaSlow=ema(d.slice(-40),21);
let vol=atr(d.slice(-40));
let str=structure(d);
let ses=session();

let sig="WAIT";
let entry="WAIT";

// LIQUIDITY SWEEP
let high=Math.max(...d.slice(-5));
let low=Math.min(...d.slice(-5));

let sweepUp = lastP>high && prev<high;
let sweepDown = lastP<low && prev>low;

// SESSION FILTER
let active = (ses==="LONDON" || ses==="NEW YORK");

// FINAL LOGIC
if(active){

if(str==="BOS_UP" && emaFast>emaSlow && sweepDown){
sig="BUY SNIPER";
let sl=lastP-vol;
let tp=lastP+vol*2;
entry=`ENTRY ${lastP.toFixed(2)} SL ${sl.toFixed(2)} TP ${tp.toFixed(2)}`;
}

else if(str==="BOS_DOWN" && emaFast<emaSlow && sweepUp){
sig="SELL SNIPER";
let sl=lastP+vol;
let tp=lastP-vol*2;
entry=`ENTRY ${lastP.toFixed(2)} SL ${sl.toFixed(2)} TP ${tp.toFixed(2)}`;
}

}

document.getElementById(idSig).innerText=sig;
document.getElementById(idEntry).innerText=entry;
}

// ===== BTC REAL-TIME =====
let ws=new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

ws.onmessage=(e)=>{
let d=JSON.parse(e.data);
let p=parseFloat(d.p);

setPrice("btc",p);

btc.push(p);
if(btc.length>200) btc.shift();

engine(btc,"btc_signal","btc_entry");
};

// ===== GOLD =====
async function goldFetch(){
try{
let r=await fetch("https://query1.finance.yahoo.com/v8/finance/chart/XAUUSD=X?interval=1m&range=1d");
let j=await r.json();

let c=j.chart.result[0].indicators.quote[0].close.filter(x=>x);
let p=c.at(-1);

setPrice("gold",p);

gold=c.slice(-200);

engine(gold,"gold_signal","gold_entry");

}catch{}
}

setInterval(goldFetch,5000);
goldFetch();

</script></body>
