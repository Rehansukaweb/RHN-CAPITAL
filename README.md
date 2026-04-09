
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL EDUCATION</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

/* ===== BASE ===== */
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{background:#020617;color:#e2e8f0;overflow:hidden;}

:root{
--border:#1e293b;
--primary:#22c55e;
--sub:#94a3b8;
}

/* ===== APP ===== */
.app{
height:100vh;
display:flex;
flex-direction:column;
}

/* ===== HEADER ===== */
.header{
height:60px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
border-bottom:1px solid var(--border);
background:#020617;
}

.logo{
display:flex;
align-items:center;
gap:10px;
}

.logo img{width:35px;border-radius:8px;}

.status{
font-size:12px;
color:var(--primary);
}

/* ===== SCREEN ===== */
.screen{
flex:1;
overflow-y:auto;
display:none;
padding-bottom:80px;
}

.screen.active{
display:block;
}

/* ===== HERO ===== */
.hero{
padding:20px;
}

.hero h1{
font-size:22px;
}

.hero p{
font-size:13px;
color:var(--sub);
}

/* ===== GRID MENU ===== */
.grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
padding:20px;
}

.box{
padding:18px;
border:1px solid var(--border);
border-radius:14px;
text-align:center;
cursor:pointer;
transition:.3s;
}

.box:hover{
transform:scale(1.05);
box-shadow:0 0 15px #22c55e33;
}

/* ===== LIST ===== */
.list{
padding:20px;
}

.card{
border:1px solid var(--border);
border-radius:12px;
padding:15px;
margin-bottom:10px;
cursor:pointer;
transition:.2s;
}

.card:hover{
background:#020617;
box-shadow:0 0 10px #22c55e22;
}

/* ===== CONTENT ===== */
.content{
padding:20px;
}

.content h2{
margin-bottom:10px;
}

.content p{
color:var(--sub);
font-size:14px;
line-height:1.6;
}

/* ===== NAV ===== */
.nav{
position:fixed;
bottom:0;
width:100%;
display:flex;
justify-content:space-around;
border-top:1px solid var(--border);
background:#020617;
padding:10px 0;
}

.nav div{
font-size:12px;
color:var(--sub);
cursor:pointer;
}

.nav .active{
color:var(--primary);
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
<div class="status">EDUCATION</div>
</div>

<!-- HOME -->
<div class="screen active" id="home">

<div class="hero">
<h1>Learning Dashboard</h1>
<p>Pelajari Crypto, Forex, dan Saham dari dasar hingga advance</p>
</div>

<div class="grid">

<div class="box" onclick="go('crypto')">Crypto</div>
<div class="box" onclick="go('forex')">Forex</div>
<div class="box" onclick="go('saham')">Saham</div>
<div class="box" onclick="go('profile')">Profile</div>

</div>

</div>

<!-- CRYPTO -->
<div class="screen" id="crypto">
<div class="list">
<h2>Materi Crypto</h2>

<div class="card" onclick="openContent('btc')">Apa itu Bitcoin</div>
<div class="card" onclick="openContent('cycle')">Market Cycle</div>
<div class="card" onclick="openContent('altcoin')">Altcoin Strategy</div>

</div>
</div>

<!-- FOREX -->
<div class="screen" id="forex">
<div class="list">
<h2>Materi Forex</h2>

<div class="card" onclick="openContent('xauusd')">Apa itu XAUUSD</div>
<div class="card" onclick="openContent('risk')">Risk Management</div>
<div class="card" onclick="openContent('news')">News Impact</div>

</div>
</div>

<!-- SAHAM -->
<div class="screen" id="saham">
<div class="list">
<h2>Materi Saham</h2>

<div class="card" onclick="openContent('fundamental')">Fundamental</div>
<div class="card" onclick="openContent('valuasi')">Valuasi</div>
<div class="card" onclick="openContent('growth')">Growth Investing</div>

</div>
</div>

<!-- PROFILE -->
<div class="screen" id="profile">
<div class="content">
<h2>RHN CAPITAL</h2>
<p>
Platform edukasi finansial yang berfokus pada crypto, forex, dan saham.
Tujuan utama adalah membangun pemahaman market dan mindset investasi jangka panjang.
</p>
</div>
</div>

<!-- CONTENT -->
<div class="screen" id="content">
<div class="content" id="contentArea"></div>
</div>

</div>

<!-- NAV -->
<div class="nav">
<div class="active" onclick="nav(this,'home')">Home</div>
<div onclick="nav(this,'crypto')">Learn</div>
<div onclick="nav(this,'profile')">Profile</div>
</div>

<script>

/* NAV */
function go(id){show(id)}
function nav(el,id){
document.querySelectorAll('.nav div').forEach(e=>e.classList.remove('active'))
el.classList.add('active')
show(id)
}
function show(id){
document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'))
document.getElementById(id).classList.add('active')
}

/* CONTENT SYSTEM */
function openContent(type){

let data = {
btc: "<h2>Bitcoin</h2><p>Bitcoin adalah aset digital pertama yang menggunakan teknologi blockchain.</p>",
cycle: "<h2>Market Cycle</h2><p>Market bergerak dalam fase akumulasi, markup, distribusi, dan markdown.</p>",
altcoin: "<h2>Altcoin</h2><p>Altcoin mengikuti Bitcoin dan memiliki volatilitas lebih tinggi.</p>",

xauusd: "<h2>XAUUSD</h2><p>XAUUSD adalah pasangan emas terhadap dolar AS.</p>",
risk: "<h2>Risk Management</h2><p>Gunakan maksimal 1-2% risiko per trade.</p>",
news: "<h2>News Impact</h2><p>Berita ekonomi mempengaruhi pergerakan market.</p>",

fundamental: "<h2>Fundamental</h2><p>Analisa kondisi keuangan perusahaan.</p>",
valuasi: "<h2>Valuasi</h2><p>Menentukan harga wajar saham.</p>",
growth: "<h2>Growth</h2><p>Fokus pada perusahaan dengan pertumbuhan tinggi.</p>"
}

document.getElementById("contentArea").innerHTML = data[type]
show("content")

}

</script>

</body>
</html>
