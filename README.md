<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>RHN TERMINAL ELITE - FINAL BOSS</title>

<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">

<style>
body{
background:#000;
color:#22c55e;
font-family:'Share Tech Mono', monospace;
}

.container{
max-width:950px;
margin:auto;
padding:20px;
}

.box{
border:1px solid #22c55e;
padding:20px;
margin-top:20px;
}

h1{
font-size:20px;
margin-bottom:10px;
}

.price{
font-size:18px;
}

.up{color:#22c55e;}
.down{color:#ef4444;}

.blink{
animation:blink 1s infinite;
}

@keyframes blink{
50%{opacity:0.3;}
}
</style>
</head>

<body>

<div class="container">

<!-- PROFILE -->
<div class="box">
<h1>> RHN CAPITAL</h1>
<p>> Founder : Rehan</p>
<p>> System : AI SMC Sniper Engine</p>
<p>> Mode : Smart Money + Liquidity Trap</p>
<p>> Status : <span class="blink">LIVE</span></p>
</div>

<!-- MARKET -->
<div class="box">
<h1>> LIVE MARKET</h1>
<p class="price">BTC : <span id="btc">-</span></p>
<p class="price">ETH : <span id="eth">-</span></p>
<p class="price">PEPE : <span id="pepe">-</span></p>
<p class="price">GOLD : <span id="gold">-</span></p>
</div>

<!-- SIGNAL -->
<div class="box">
<h1>> SMC SNIPER SIGNAL</h1>
<p>> SIGNAL : <span id="signal">-</span></p>
<p>> CONFIDENCE : <span id="conf">-</span></p>
<p>> ENTRY : <span id="entry">-</span></p>
<p>> SL/TP : <span id="risk">-</span></p>
<p>> REASON : <span id="reason">-</span></p>
</div>

</div>

<script>

// ===== GLOBAL =====
let lastPrices = {};

// ===== FETCH CRYPTO =====
async function getCrypto(){
try{
let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,pepe&vs_currencies=usd");
let data = await res.json();

update("btc", data.bitcoin.usd);
update("eth", data.ethereum.usd);
update("pepe", data.pepe.usd);

}catch{}
}

// ===== FETCH GOLD =====
async function getGold(){
try{
let res = await fetch("https://api.metals.live/v1/spot");
let data = await res.json();
let gold = data.find(x=>x.gold);
update("gold", gold.gold);
}catch{}
}

// ===== UPDATE UI =====
function update(id, price){
let el = document.getElementById(id);
let old = lastPrices[id];

if(old){
if(price > old) el.className="up";
else if(price < old) el.className="down";
}

el.innerText = "$" + price;
lastPrices[id] = price;
}

// ===== EMA =====
function ema(data, period){
let k = 2/(period+1);
let e = data[0];

for(let i=1;i<data.length;i++){
e = data[i]*k + e*(1-k);
}
return e;
}

// ===== SMC SNIPER SIGNAL =====
async function getSignal(){
try{

let res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1");
let data = await res.json();

let prices = data.prices.map(p=>p[1]);

let last = prices.at(-1);
let prev = prices.at(-20);

// ===== TREND =====
let ema9 = ema(prices.slice(-100),9);
let ema21 = ema(prices.slice(-100),21);

// ===== MOMENTUM =====
let momentum = ((last-prev)/prev)*100;

// ===== LIQUIDITY (SIMULASI SMC) =====
let high = Math.max(...prices.slice(-50));
let low = Math.min(...prices.slice(-50));

let nearHigh = last > high * 0.995;
let nearLow = last < low * 1.005;

// ===== LOGIC SMC =====
let signal="WAIT";
let conf="LOW";
let reason="No setup";
let entry=last;

// ===== SNIPER BUY =====
if(ema9 > ema21 && momentum > 0.3 && nearLow){
signal="BUY";
conf="HIGH";
reason="Liquidity sweep bawah + uptrend (SMC)";
}

// ===== SNIPER SELL =====
else if(ema9 < ema21 && momentum < -0.3 && nearHigh){
signal="SELL";
conf="HIGH";
reason="Liquidity sweep atas + downtrend (SMC)";
}

// ===== RISK 1:2 =====
let sl, tp;

if(signal==="BUY"){
sl = entry * 0.99;
tp = entry * 1.02;
}
else if(signal==="SELL"){
sl = entry * 1.01;
tp = entry * 0.98;
}
else{
sl="-"; tp="-";
}

// ===== OUTPUT =====
document.getElementById("signal").innerText = signal;
document.getElementById("conf").innerText = conf;
document.getElementById("entry").innerText = "$" + entry.toFixed(2);

if(signal!=="WAIT"){
document.getElementById("risk").innerText =
`SL $${sl.toFixed(2)} / TP $${tp.toFixed(2)} (1:2)`;
}else{
document.getElementById("risk").innerText = "-";
}

document.getElementById("reason").innerText = reason;

}catch{}
}

// ===== LOOP SUPER CEPAT =====
setInterval(()=>{
getCrypto();
getGold();
},1500);

// SIGNAL (berat → jangan terlalu cepat)
setInterval(()=>{
getSignal();
},8000);

// INIT
getCrypto();
getGold();
getSignal();

</script>

</body>
</html>
