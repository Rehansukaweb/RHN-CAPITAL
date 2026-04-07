<!DOCTYPE html><html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RHN TERMINAL PRO</title><link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Share Tech Mono', monospace;}

body{background:black;color:#22c55e;}

.section{padding:100px 20px;text-align:center;}
.terminal{
border:1px solid #22c55e;
padding:20px;
max-width:800px;
margin:auto;
text-align:left;
}

input,button{
background:black;
border:1px solid #22c55e;
color:#22c55e;
padding:10px;
margin-top:10px;
}

button:hover{background:#22c55e;color:black;}

a{color:#22c55e;}
</style></head><body><!-- LOGIN --><section class="section">
<h2>> ACCESS SYSTEM</h2>
<div class="terminal">
<p>> STATUS : <span id="status">GUEST</span></p>
<input type="password" id="pass" placeholder="ENTER KEY">
<button onclick="login()">LOGIN</button>
</div>
</section><!-- MARKET --><section class="section">
<h2>> RHN TERMINAL</h2><div class="terminal"><p>> BTC : <span id="btc"></span></p>
<p>> ETH : <span id="eth"></span></p>
<p>> PEPE : <span id="pepe"></span></p>
<p>> GOLD : <span id="gold"></span></p><br><p>> SIGNAL BTC : <span id="signal"></span></p>
<p>> CONFIDENCE : <span id="confidence"></span></p>
<p>> SL/TP : <span id="risk"></span></p>
<p>> REASON : <span id="reason"></span></p><br><p>> MARKET MOOD : <span id="fear"></span></p><br><div id="news"></div></div></section><script>

let isPremium = false;

// LOGIN
function login(){
if(document.getElementById("pass").value === "RHN2026"){
isPremium = true;
document.getElementById("status").innerText = "PREMIUM";
}else{
alert("ACCESS DENIED");
}
}

// FETCH PRICE SIMPLE
async function getPrices(){
let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,pepe&vs_currencies=usd&include_24hr_change=true");
let data = await res.json();

document.getElementById("btc").innerText = "$"+data.bitcoin.usd;
document.getElementById("eth").innerText = "$"+data.ethereum.usd;
document.getElementById("pepe").innerText = "$"+data.pepe.usd;
}

// GOLD
async function getGold(){
try{
let res = await fetch("https://api.metals.live/v1/spot");
let data = await res.json();
let gold = data.find(x=>x.gold);
document.getElementById("gold").innerText="$"+gold.gold;
}catch{}
}

// FEAR
async function getFear(){
let res = await fetch("https://api.alternative.me/fng/");
let data = await res.json();
document.getElementById("fear").innerText = data.data[0].value + " ("+data.data[0].value_classification+")";
}

// NEWS
async function getNews(){
let res = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
let data = await res.json();

let html="";
data.Data.slice(0,3).forEach(n=>{
html+=`<p>> <a href="${n.url}" target="_blank">${n.title}</a></p>`;
});

document.getElementById("news").innerHTML=html;
}

// EMA
function ema(arr,p){
let k=2/(p+1),e=arr[0];
for(let i=1;i<arr.length;i++) e=arr[i]*k+e*(1-k);
return e;
}

// SIGNAL REAL
async function getSignal(){

let res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1");
let data = await res.json();

let prices = data.prices.map(p=>p[1]);

let ema9 = ema(prices.slice(-50),9);
let ema21 = ema(prices.slice(-50),21);

let last = prices.at(-1);
let prev = prices.at(-20);

let momentum = ((last-prev)/prev)*100;

let high = Math.max(...prices.slice(-50));
let low = Math.min(...prices.slice(-50));

let structure = last > (low+(high-low)*0.6);

// DECISION
let signal="NO TRADE",conf="LOW",reason="Sideways";

if(ema9>ema21 && momentum>0.8 && structure){
signal="BUY"; conf="HIGH";
reason="Trend + momentum bullish";
}
else if(ema9<ema21 && momentum<-0.8 && !structure){
signal="SELL"; conf="HIGH";
reason="Trend bearish kuat";
}

// RISK
let sl = (last*0.97).toFixed(0);
let tp = (last*1.03).toFixed(0);

// DISPLAY
if(isPremium){
document.getElementById("signal").innerText=signal;
document.getElementById("confidence").innerText=conf;
document.getElementById("risk").innerText=`SL: $${sl} / TP: $${tp}`;
document.getElementById("reason").innerText=reason;
}else{
document.getElementById("signal").innerText="LOCKED 🔒";
document.getElementById("confidence").innerText="-";
document.getElementById("risk").innerText="-";
document.getElementById("reason").innerText="PREMIUM ONLY";
}

}

// LOOP
setInterval(()=>{
getPrices();
getGold();
getFear();
getNews();
getSignal();
},15000);

getPrices();
getGold();
getFear();
getNews();
getSignal();

</script></body>
</html>
