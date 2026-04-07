
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>RHN TERMINAL ELITE - GOLD SIGNAL</title>

<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">

<style>
body{background:#000;color:#22c55e;font-family:'Share Tech Mono', monospace;}
.container{max-width:900px;margin:auto;padding:20px;}
.box{border:1px solid #22c55e;padding:20px;margin-top:20px;}
.price{font-size:18px;}
.up{color:#22c55e;}
.down{color:#ef4444;}
.blink{animation:blink 1s infinite;}
@keyframes blink{50%{opacity:0.3;}}
</style>
</head>

<body>

<div class="container">

<div class="box">
<h2>> RHN CAPITAL</h2>
<p>> Mode : SMC SNIPER</p>
<p>> Status : <span class="blink">LIVE</span></p>
</div>

<div class="box">
<h2>> MARKET</h2>
<p class="price">BTC : <span id="btc">-</span></p>
<p class="price">GOLD : <span id="gold">-</span></p>
</div>

<div class="box">
<h2>> BTC SIGNAL</h2>
<p>> TYPE : <span id="btc_type">-</span></p>
<p>> ENTRY : <span id="btc_entry">-</span></p>
<p>> SL : <span id="btc_sl">-</span></p>
<p>> TP : <span id="btc_tp">-</span></p>
</div>

<div class="box">
<h2>> XAUUSD SIGNAL</h2>
<p>> TYPE : <span id="gold_type">-</span></p>
<p>> ENTRY : <span id="gold_entry">-</span></p>
<p>> SL : <span id="gold_sl">-</span></p>
<p>> TP : <span id="gold_tp">-</span></p>
<p>> RR : 1:2</p>
</div>

</div>

<script>

let lastPrices = {};
let goldHistory = [];

// ===== UPDATE =====
function update(id, price){
let el = document.getElementById(id);
let old = lastPrices[id];

if(old){
if(price>old) el.className="up";
else if(price<old) el.className="down";
}

el.innerText="$"+Number(price).toLocaleString();
lastPrices[id]=price;
}

// ===== BTC =====
async function getBTC(){
let r = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
let d = await r.json();
update("btc", d.bitcoin.usd);
}

// ===== GOLD REAL =====
async function getGold(){
try{
let r = await fetch("https://query1.finance.yahoo.com/v7/finance/quote?symbols=XAUUSD=X");
let d = await r.json();

let price = d.quoteResponse.result[0].regularMarketPrice;

update("gold", price);

// simpan history buat signal
goldHistory.push(price);
if(goldHistory.length > 50) goldHistory.shift();

}catch{}
}

// ===== EMA =====
function ema(data,p){
let k=2/(p+1), e=data[0];
for(let i=1;i<data.length;i++){
e=data[i]*k+e*(1-k);
}
return e;
}

// ===== BTC SIGNAL =====
async function btcSignal(){
let r = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1");
let d = await r.json();

let prices = d.prices.map(p=>p[1]);
let last = prices.at(-1);

let ema9 = ema(prices.slice(-100),9);
let ema21 = ema(prices.slice(-100),21);

let type="WAIT", entry="-", sl="-", tp="-";

if(ema9>ema21){
type="BUY";
entry=last;
sl=entry*0.99;
tp=entry*1.02;
}else if(ema9<ema21){
type="SELL";
entry=last;
sl=entry*1.01;
tp=entry*0.98;
}

document.getElementById("btc_type").innerText=type;
document.getElementById("btc_entry").innerText="$"+entry.toFixed(2);
document.getElementById("btc_sl").innerText="$"+sl.toFixed(2);
document.getElementById("btc_tp").innerText="$"+tp.toFixed(2);
}

// ===== GOLD SIGNAL (SMC STYLE) =====
function goldSignal(){

if(goldHistory.length < 20) return;

let last = goldHistory.at(-1);
let prev = goldHistory.at(-10);

let high = Math.max(...goldHistory);
let low = Math.min(...goldHistory);

let momentum = ((last-prev)/prev)*100;

let type="WAIT", entry="-", sl="-", tp="-";

// BUY
if(last <= low*1.01 && momentum>0){
type="BUY";
entry=last;
sl=entry*0.995;
tp=entry*1.01;
}

// SELL
else if(last >= high*0.99 && momentum<0){
type="SELL";
entry=last;
sl=entry*1.005;
tp=entry*0.99;
}

// OUTPUT
document.getElementById("gold_type").innerText=type;

if(type!=="WAIT"){
document.getElementById("gold_entry").innerText="$"+entry.toFixed(2);
document.getElementById("gold_sl").innerText="$"+sl.toFixed(2);
document.getElementById("gold_tp").innerText="$"+tp.toFixed(2);
}else{
document.getElementById("gold_entry").innerText="-";
document.getElementById("gold_sl").innerText="-";
document.getElementById("gold_tp").innerText="-";
}

}

// ===== LOOP =====
setInterval(()=>{
getBTC();
getGold();
goldSignal();
},1500);

setInterval(()=>{
btcSignal();
},8000);

// INIT
getBTC();
getGold();
btcSignal();

</script>

</body>
