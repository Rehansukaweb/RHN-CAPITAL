
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN FAST TERMINAL</title><link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"><style>
body{background:#000;color:#22c55e;font-family:'Share Tech Mono', monospace;}
.container{max-width:900px;margin:auto;padding:20px;}
.box{border:1px solid #22c55e;padding:20px;margin-top:20px;}
.up{color:#22c55e;}
.down{color:#ef4444;}
</style></head><body><div class="container"><div class="box">
<h2>> RHN FAST SYSTEM</h2>
<p>> Mode : ULTRA RESPONSIVE</p>
</div><div class="box">
<h2>> MARKET</h2>
<p>BTC : <span id="btc">-</span></p>
<p>GOLD : <span id="gold">-</span></p>
</div><div class="box">
<h2>> SIGNAL</h2>
<p>BTC : <span id="btc_signal">-</span></p>
<p>GOLD : <span id="gold_signal">-</span></p>
</div></div><script>

// ===== STATE =====
let btc=[], gold=[], last={};

// ===== UI =====
function setPrice(id,v){
let el=document.getElementById(id);
if(last[id]) el.className = v>last[id]?"up":"down";
el.innerText="$"+v.toLocaleString();
last[id]=v;
}

// ===== SIMPLE FAST SIGNAL =====
function fastSignal(data){
if(data.length<10) return "WAIT";

let last=data.at(-1);
let avg=data.slice(-10).reduce((a,b)=>a+b,0)/10;

if(last>avg) return "BUY";
if(last<avg) return "SELL";
return "WAIT";
}

// ===== BTC REAL-TIME =====
let ws=new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

ws.onmessage=(e)=>{
let d=JSON.parse(e.data);
let p=parseFloat(d.p);

setPrice("btc",p);

btc.push(p);
if(btc.length>50) btc.shift();

document.getElementById("btc_signal").innerText = fastSignal(btc);
};

// ===== GOLD SUPER FAST =====
async function goldFetch(){
try{
let r=await fetch("https://query1.finance.yahoo.com/v8/finance/chart/XAUUSD=X?interval=1m&range=1d");
let j=await r.json();

let c=j.chart.result[0].indicators.quote[0].close.filter(x=>x);
let p=c.at(-1);

setPrice("gold",p);

gold.push(p);
if(gold.length>50) gold.shift();

document.getElementById("gold_signal").innerText = fastSignal(gold);

}catch{}
}

// LOOP CEPAT BANGET
setInterval(goldFetch,1000);
goldFetch();

</script></body>
