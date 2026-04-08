<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RHN CAPITAL</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

/* ===== GLOBAL ===== */
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}

body{
background:linear-gradient(180deg,#020617,#0f172a);
color:white;
overflow-x:hidden;
}

/* ===== NAVBAR ===== */
header{
position:fixed;
width:100%;
top:0;
background:rgba(2,6,23,.75);
backdrop-filter:blur(10px);
border-bottom:1px solid #1f2937;
z-index:999;
}

.nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 25px;
}

.logo{
display:flex;
align-items:center;
gap:10px;
}

.logo img{
width:42px;
filter:drop-shadow(0 0 10px #22c55e88);
}

.menu button{
background:none;
border:none;
color:#9ca3af;
margin-left:15px;
cursor:pointer;
}

.menu button:hover{color:#22c55e;}

/* ===== HERO ===== */
.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero img{
width:500px;
margin-bottom:20px;
animation:float 4s infinite ease-in-out;
}

@keyframes float{
0%{transform:translateY(0);}
50%{transform:translateY(-10px);}
100%{transform:translateY(0);}
}

.hero h1{
font-size:46px;
margin-bottom:10px;
}

.hero p{
max-width:700px;
color:#94a3b8;
}

.btn{
margin-top:25px;
padding:15px 32px;
border:none;
border-radius:12px;
background:linear-gradient(135deg,#22c55e,#16a34a);
cursor:pointer;
font-weight:600;
transition:.3s;
}

.btn:hover{
transform:scale(1.08);
box-shadow:0 0 40px #22c55e88;
}

/* ===== SECTION ===== */
.section{
padding:110px 20px;
max-width:1100px;
margin:auto;
text-align:center;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:25px;
}

.card{
background:#020617;
border:1px solid #1f2937;
border-radius:18px;
padding:25px;
cursor:pointer;
transition:.4s;
}

.card:hover{
transform:translateY(-8px);
box-shadow:0 0 35px rgba(34,197,94,.25);
}

.action{
margin-top:15px;
padding:12px;
background:#22c55e;
border-radius:10px;
color:black;
font-weight:bold;
}

/* ===== QRIS POPUP ===== */
.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.85);
display:none;
justify-content:center;
align-items:center;
z-index:1000;
}

.popup img{
width:300px;
border-radius:12px;
}

.close{
position:absolute;
top:20px;
right:30px;
font-size:25px;
cursor:pointer;
}

/* ===== FOOTER ===== */
footer{
text-align:center;
padding:30px;
color:#6b7280;
}

</style>
</head>

<body>

<!-- NAVBAR -->
<header>
<div class="nav">
<div class="logo">
<img src="RHN LOGO.jpg">
<b>RHN CAPITAL</b>
</div>

<div class="menu">
<button onclick="scrollTo('about')">About</button>
<button onclick="scrollTo('services')">Services</button>
<button onclick="scrollTo('premium')">Premium</button>
<button onclick="scrollTo('contact')">Contact</button>
</div>
</div>
</header>

<!-- HERO -->
<section class="hero">

<img src="RHN LOGO.jpg">

<h1>RHN CAPITAL</h1>

<p>
RHN Capital adalah platform investasi modern yang berfokus pada
analisa pasar saham, cryptocurrency, dan trading forex berbasis
strategi makro ekonomi global serta manajemen risiko profesional.
Kami membantu investor memahami market cycle,
mengembangkan capital growth, dan membangun sistem trading disiplin.
</p>

<button class="btn"
onclick="window.open('https://wa.me/6285717426626','_blank')">
Konsultasi Sekarang
</button>

</section>

<!-- ABOUT -->
<section id="about" class="section">

<h2>Tentang RHN Capital</h2>

<p>
RHN Capital menggabungkan pendekatan investasi modern dengan analisa
teknikal, fundamental, dan makro ekonomi global. Fokus utama kami
adalah pertumbuhan aset jangka panjang melalui strategi probabilitas,
risk management ketat, dan pemahaman siklus finansial dunia.
</p>

<br>

<p>
Fokus investasi meliputi:
Crypto Asset • Saham Global & Indonesia • Trading Forex • Market Psychology • Portfolio Strategy.
</p>

</section>

<!-- SERVICES -->
<section id="services" class="section">

<h2>Layanan Platform</h2>

<div class="grid">

<div class="card" onclick="window.location.href='ANALISACRYPTO.html'">
<h3>₿ Analisa Crypto</h3>
<p>Market cycle & Bitcoin strategy.</p>
<div class="action">Buka</div>
</div>

<div class="card" onclick="window.location.href='ANALISASAHAM.html'">
<h3>📈 Analisa Saham</h3>
<p>Valuasi & momentum market.</p>
<div class="action">Buka</div>
</div>

<div class="card" onclick="window.location.href='ANALISAFOREX.html'">
<h3>💱 Trading Forex</h3>
<p>Risk reward & macro analysis.</p>
<div class="action">Buka</div>
</div>

</div>

</section>

<!-- CONTACT -->
<section id="contact" class="section">

<h2>Kontak</h2>

<button class="btn" onclick="window.open('https://wa.me/6285717426626')">
WhatsApp
</button>

<button class="btn" onclick="window.open('https://instagram.com/huyrehan')">
Instagram
</button>

<button class="btn" onclick="window.open('https://tiktok.com/@rehanhuy')">
TikTok
</button>

</section>

<!-- QRIS POPUP -->
<div class="popup" id="qrisPopup">
<div class="close" onclick="closeQRIS()">✕</div>
<img src="QRIS.jpg.jpeg">
</div>

<footer>
© 2026 RHN CAPITAL — Investment Platform
</footer>

<script>

function scrollTo(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function openQRIS(){
document.getElementById("qrisPopup").style.display="flex";
}

function closeQRIS(){
document.getElementById("qrisPopup").style.display="none";
}

</script>

</body>
</html>

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
