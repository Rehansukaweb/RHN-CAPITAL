<!DOCTYPE html><html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN TERMINAL ELITE</title><link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"><style>
body{
background:#000;
color:#22c55e;
font-family:'Share Tech Mono', monospace;
}

.container{
max-width:900px;
margin:auto;
padding:20px;
}

.terminal{
border:1px solid #22c55e;
padding:20px;
margin-top:20px;
}

h1{font-size:22px;margin-bottom:10px;}

.price{font-size:18px;}

.up{color:#22c55e;}
.down{color:#ef4444;}

.profile{
border:1px solid #22c55e;
padding:15px;
margin-bottom:20px;
}

.blink{
animation:blink 1s infinite;
}

@keyframes blink{
50%{opacity:0.2;}
}
</style></head><body><div class="container"><!-- PROFILE --><div class="profile">
<h1>> RHN CAPITAL</h1>
<p>> Founder : Rehan</p>
<p>> System : AI Trading Terminal</p>
<p>> Focus : Crypto | Forex | Gold</p>
<p>> Status : <span class="blink">ACTIVE</span></p>
</div><!-- MARKET --><div class="terminal">
<h1>> LIVE MARKET</h1><p class="price">BTC : <span id="btc">-</span></p>
<p class="price">ETH : <span id="eth">-</span></p>
<p class="price">PEPE : <span id="pepe">-</span></p>
<p class="price">GOLD : <span id="gold">-</span></p></div><!-- SIGNAL --><div class="terminal">
<h1>> SIGNAL ENGINE</h1><p>> BTC SIGNAL : <span id="btc_signal">-</span></p>
<p>> BTC RISK : <span id="btc_risk">-</span></p><br><p>> GOLD SIGNAL : <span id="gold_signal">-</span></p>
<p>> GOLD RISK : <span id="gold_risk">-</span></p></div></div><script>

let lastPrices = {};
let goldBuffer = [];

// ===== UPDATE PRICE =====
function updatePrice(id, newPrice){
let el = document.getElementById(id);
let old = lastPrices[id];

if(old){
if(newPrice > old) el.className="up";
else if(newPrice < old) el.className="down";
}

el.innerText = "$" + Number(newPrice).toLocaleString();
lastPrices[id] = newPrice;
}

// ===== CRYPTO =====
async function getPrices(){
try{
let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,pepe&vs_currencies=usd");
let data = await res.json();

updatePrice("btc", data.bitcoin.usd);
updatePrice("eth", data.ethereum.usd);
updatePrice("pepe", data.pepe.usd);

}catch{}
}

// ===== GOLD =====
async function getGold(){
try{
let res = await fetch("https://api.metals.live/v1/spot");
let data = await res.json();

let goldObj = data.find(x => x.gold);

if(goldObj && goldObj.gold){
updatePrice("gold", goldObj.gold);
handleGold(goldObj.gold);
}else{
throw "no data";
}

}catch{
// fallback
updatePrice("gold", 2300);
handleGold(2300);
}
}

// ===== EMA =====
function ema(arr,p){
let k=2/(p+1),e=arr[0];
for(let i=1;i<arr.length;i++){
e=arr[i]*k+e*(1-k);
}
return e;
}

// ===== BTC SIGNAL =====
async function getBTCSignal(){
try{
let res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1");
let data = await res.json();

let prices = data.prices.map(p=>p[1]);

let ema9 = ema(prices.slice(-50),9);
let ema21 = ema(prices.slice(-50),21);

let last = prices.at(-1);
let prev = prices.at(-10);

let momentum = ((last-prev)/prev)*100;

let signal="WAIT";

if(ema9>ema21 && momentum>0.5) signal="BUY";
else if(ema9<ema21 && momentum<-0.5) signal="SELL";

// RISK 1:2
let r=0.01;
let sl,tp;

if(signal==="BUY"){
sl=last*(1-r);
tp=last*(1+r*2);
}else if(signal==="SELL"){
sl=last*(1+r);
tp=last*(1-r*2);
}else{
sl=last; tp=last;
}

document.getElementById("btc_signal").innerText=signal;
document.getElementById("btc_risk").innerText=`SL $${sl.toFixed(0)} / TP $${tp.toFixed(0)}`;

}catch{}
}

// ===== GOLD SIGNAL (BUFFER REAL-TIME) =====
function handleGold(price){

goldBuffer.push(price);

if(goldBuffer.length > 50){
goldBuffer.shift();
}

calcGoldSignal();
}

function calcGoldSignal(){

if(goldBuffer.length < 20) return;

let ema9 = ema(goldBuffer,9);
let ema21 = ema(goldBuffer,21);

let last = goldBuffer.at(-1);
let prev = goldBuffer.at(-5);

let momentum = ((last-prev)/prev)*100;

let signal="WAIT";

if(ema9>ema21 && momentum>0.2) signal="BUY";
else if(ema9<ema21 && momentum<-0.2) signal="SELL";

// RISK 1:2
let r=0.005;
let sl,tp;

if(signal==="BUY"){
sl=last*(1-r);
tp=last*(1+r*2);
}else if(signal==="SELL"){
sl=last*(1+r);
tp=last*(1-r*2);
}else{
sl=last; tp=last;
}

document.getElementById("gold_signal").innerText=signal;
document.getElementById("gold_risk").innerText=`SL $${sl.toFixed(0)} / TP $${tp.toFixed(0)}`;
}

// ===== LOOP =====
setInterval(()=>{
getPrices();
getGold();
},2000);

setInterval(()=>{
getBTCSignal();
},10000);

// INIT
getPrices();
getGold();
getBTCSignal();

</script></body>
</html>
