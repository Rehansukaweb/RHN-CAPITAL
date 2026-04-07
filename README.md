
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
</style></head><body><div class="container"><!-- PROFILE RHN --><div class="profile">
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
<h1>> SIGNAL ENGINE</h1><p>> SIGNAL : <span id="signal">-</span></p>
<p>> CONFIDENCE : <span id="conf">-</span></p>
<p>> SL/TP : <span id="risk">-</span></p>
<p>> REASON : <span id="reason">-</span></p></div></div><script>

let lastPrices = {};

// ===== PRICE FETCH SUPER CEPAT =====
async function getPrices(){
let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,pepe&vs_currencies=usd");
let data = await res.json();

updatePrice("btc", data.bitcoin.usd);
updatePrice("eth", data.ethereum.usd);
updatePrice("pepe", data.pepe.usd);
}

// ===== GOLD =====
async function getGold(){
try{
let res = await fetch("https://api.metals.live/v1/spot");
let data = await res.json();
let gold = data.find(x=>x.gold);
updatePrice("gold", gold.gold);
}catch{}
}

// ===== UPDATE + ANIMASI =====
function updatePrice(id, newPrice){

let el = document.getElementById(id);
let old = lastPrices[id];

if(old){
if(newPrice > old){
el.className="up";
}
else if(newPrice < old){
el.className="down";
}
}

el.innerText = "$" + newPrice;
lastPrices[id] = newPrice;
}

// ===== SIGNAL ENGINE (REAL LOGIC) =====
async function getSignal(){

let res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1");
let data = await res.json();

let prices = data.prices.map(p=>p[1]);

let ema9 = ema(prices.slice(-50),9);
let ema21 = ema(prices.slice(-50),21);

let last = prices.at(-1);
let prev = prices.at(-10);

let momentum = ((last-prev)/prev)*100;

let signal="WAIT", conf="LOW", reason="No setup";

// LOGIC
if(ema9>ema21 && momentum>0.5){
signal="BUY";
conf="HIGH";
reason="EMA cross + momentum naik";
}
else if(ema9<ema21 && momentum<-0.5){
signal="SELL";
conf="HIGH";
reason="EMA turun + tekanan jual";
}

// RISK
let sl = (last*0.98).toFixed(0);
let tp = (last*1.02).toFixed(0);

document.getElementById("signal").innerText=signal;
document.getElementById("conf").innerText=conf;
document.getElementById("risk").innerText=`SL $${sl} / TP $${tp}`;
document.getElementById("reason").innerText=reason;
}

// ===== EMA =====
function ema(arr,p){
let k=2/(p+1),e=arr[0];
for(let i=1;i<arr.length;i++){
e=arr[i]*k+e*(1-k);
}
return e;
}

// ===== LOOP CEPAT =====
setInterval(()=>{
getPrices();
getGold();
},2000);

// SIGNAL (lebih berat → jangan terlalu sering)
setInterval(()=>{
getSignal();
},10000);

// INIT
getPrices();
getGold();
getSignal();

</script></body>

