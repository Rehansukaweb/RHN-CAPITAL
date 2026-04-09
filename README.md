<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RHN CAPITAL APP</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

/* ===== BASE ===== */
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins;
}

body{
background:#020617;
color:white;
overflow-x:hidden;
}

/* ===== APP CONTAINER ===== */
.app{
padding-bottom:80px;
}

/* ===== HEADER ===== */
.header{
position:sticky;
top:0;
background:rgba(2,6,23,.85);
backdrop-filter:blur(12px);
padding:15px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #1e293b;
z-index:999;
}

.logo{
display:flex;
align-items:center;
gap:10px;
}

.logo img{
width:38px;
border-radius:8px;
}

.balance{
font-size:14px;
color:#22c55e;
}

/* ===== HERO ===== */
.hero{
padding:25px;
}

.hero h1{
font-size:28px;
margin-bottom:5px;
}

.hero p{
font-size:14px;
color:#94a3b8;
}

/* ===== CARD BALANCE ===== */
.wallet{
margin:20px;
padding:20px;
border-radius:20px;
background:linear-gradient(135deg,#22c55e,#16a34a);
color:black;
box-shadow:0 0 40px #22c55e55;
}

.wallet h2{
font-size:24px;
}

.wallet small{
opacity:.8;
}

/* ===== MENU GRID ===== */
.menu{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
padding:20px;
}

.box{
background:#020617;
border:1px solid #1f2937;
padding:20px;
border-radius:16px;
text-align:center;
cursor:pointer;
transition:.3s;
}

.box:hover{
transform:scale(1.05);
box-shadow:0 0 25px #22c55e33;
}

.box h3{
margin-top:10px;
font-size:15px;
}

/* ===== NEWS ===== */
.news{
padding:20px;
}

.news-card{
background:#020617;
border:1px solid #1f2937;
border-radius:16px;
padding:15px;
margin-bottom:10px;
}

.news-card span{
color:#22c55e;
font-size:12px;
}

/* ===== BOTTOM NAV ===== */
.bottom{
position:fixed;
bottom:0;
width:100%;
background:#020617;
border-top:1px solid #1f2937;
display:flex;
justify-content:space-around;
padding:10px 0;
}

.bottom div{
text-align:center;
font-size:12px;
color:#94a3b8;
cursor:pointer;
}

.bottom div.active{
color:#22c55e;
}

/* ===== BUTTON ===== */
.btn{
margin-top:15px;
padding:12px;
width:100%;
border:none;
border-radius:12px;
background:#22c55e;
font-weight:bold;
cursor:pointer;
}

/* ===== POPUP ===== */
.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:1000;
}

.popup img{
width:280px;
border-radius:12px;
}

.close{
position:absolute;
top:20px;
right:20px;
font-size:24px;
cursor:pointer;
}

</style>
</head>

<body>

<div class="app">

<!-- HEADER -->
<div class="header">
<div class="logo">
<img src="RHN LOGO.jpg">
<b>RHN CAPITAL</b>
</div>
<div class="balance">ONLINE</div>
</div>

<!-- HERO -->
<div class="hero">
<h1>Dashboard</h1>
<p>Platform Analisa & Trading Modern</p>
</div>

<!-- WALLET -->
<div class="wallet">
<small>Total Portfolio</small>
<h2>Rp 0</h2>
</div>

<!-- MENU -->
<div class="menu">

<div class="box" onclick="openPage('crypto')">
📊
<h3>Crypto</h3>
</div>

<div class="box" onclick="openPage('forex')">
💱
<h3>Forex</h3>
</div>

<div class="box" onclick="openPage('saham')">
📈
<h3>Saham</h3>
</div>

<div class="box" onclick="openQRIS()">
💳
<h3>Deposit</h3>
</div>

</div>

<!-- NEWS -->
<div class="news">
<h3>Market Insight</h3>

<div class="news-card">
<span>BTC</span>
<p>Bitcoin memasuki fase akumulasi kuat.</p>
</div>

<div class="news-card">
<span>XAUUSD</span>
<p>Gold bullish dipicu pelemahan USD.</p>
</div>

</div>

</div>

<!-- BOTTOM NAV -->
<div class="bottom">
<div class="active">Home</div>
<div onclick="openWA()">Contact</div>
<div onclick="openIG()">Social</div>
</div>

<!-- POPUP QR -->
<div class="popup" id="qris">
<div class="close" onclick="closeQRIS()">✕</div>
<img src="QRIS.jpg.jpeg">
</div>

<script>

/* NAVIGATION */
function openPage(type){
if(type === 'crypto'){
location.href = 'ANALISACRYPTO.html'
}
if(type === 'forex'){
location.href = 'ANALISAFOREX.html'
}
if(type === 'saham'){
location.href = 'ANALISASAHAM.html'
}
}

/* CONTACT */
function openWA(){
window.open('https://wa.me/6285717426626')
}

function openIG(){
window.open('https://instagram.com/huyrehan')
}

/* QR */
function openQRIS(){
document.getElementById("qris").style.display="flex"
}

function closeQRIS(){
document.getElementById("qris").style.display="none"
}

</script>

</body>
</html>
