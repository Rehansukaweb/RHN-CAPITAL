
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL — Financial Education Platform</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

/* ================= GLOBAL ================= */
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Inter;
}

body{
background:#020617;
color:#e2e8f0;
overflow:hidden;
}

/* ================= ROOT ================= */
:root{
--primary:#22c55e;
--border:#1e293b;
--card:#020617;
--sub:#94a3b8;
}

/* ================= APP ================= */
.app{
height:100vh;
display:flex;
flex-direction:column;
}

/* ================= HEADER ================= */
.header{
height:60px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
border-bottom:1px solid var(--border);
background:rgba(2,6,23,.9);
}

.logo{
display:flex;
align-items:center;
gap:10px;
}

.logo img{
width:35px;
border-radius:8px;
}

.status{
font-size:12px;
color:var(--primary);
}

/* ================= SCREEN ================= */
.screen{
flex:1;
overflow-y:auto;
display:none;
padding-bottom:80px;
}

.screen.active{
display:block;
}

/* ================= HERO ================= */
.hero{
padding:25px;
}

.hero h1{
font-size:24px;
margin-bottom:5px;
}

.hero p{
color:var(--sub);
font-size:13px;
}

/* ================= GRID ================= */
.grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
padding:20px;
}

.box{
padding:20px;
border-radius:14px;
border:1px solid var(--border);
text-align:center;
cursor:pointer;
transition:.3s;
}

.box:hover{
transform:scale(1.05);
box-shadow:0 0 15px #22c55e33;
}

/* ================= LIST ================= */
.list{
padding:20px;
}

.card{
padding:15px;
border-radius:12px;
border:1px solid var(--border);
margin-bottom:12px;
cursor:pointer;
transition:.2s;
}

.card:hover{
background:#020617;
box-shadow:0 0 12px #22c55e22;
}

/* ================= CONTENT ================= */
.content{
padding:25px;
line-height:1.7;
}

.content h2{
margin-bottom:10px;
}

.content h3{
margin-top:20px;
}

.content p{
color:var(--sub);
margin-bottom:10px;
}

/* ================= NAV ================= */
.nav{
position:fixed;
bottom:0;
width:100%;
display:flex;
justify-content:space-around;
background:#020617;
border-top:1px solid var(--border);
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
<div class="status">EDUCATION CORE</div>
</div>

<!-- HOME -->
<div class="screen active" id="home">

<div class="hero">
<h1>RHN Capital Learning System</h1>
<p>Platform edukasi finansial berbasis market cycle & probabilitas</p>
</div>

<div class="grid">
<div class="box" onclick="go('about')">Tentang</div>
<div class="box" onclick="go('crypto')">Crypto</div>
<div class="box" onclick="go('forex')">Forex</div>
<div class="box" onclick="go('saham')">Saham</div>
</div>

</div>

<!-- ABOUT -->
<div class="screen" id="about">
<div class="content">

<h2>RHN Capital</h2>

<p>
RHN Capital adalah platform edukasi finansial yang berfokus pada pengembangan
pemahaman mendalam terhadap market global, khususnya cryptocurrency,
forex, dan saham.
</p>

<p>
Tujuan utama dari RHN Capital bukan sekadar memberikan sinyal atau rekomendasi,
melainkan membangun cara berpikir investor yang rasional, disiplin, dan berbasis data.
</p>

<h3>Visi</h3>
<p>
Membangun generasi investor yang memahami market cycle dan tidak bergantung pada spekulasi.
</p>

<h3>Misi</h3>
<p>
Memberikan edukasi berkualitas tinggi tentang struktur market, psikologi trading,
dan strategi investasi jangka panjang.
</p>

<h3>Filosofi</h3>
<p>
Market tidak bergerak secara acak. Semua pergerakan memiliki struktur, siklus,
dan probabilitas yang dapat dipelajari.
</p>

</div>
</div>

<!-- CRYPTO -->
<div class="screen" id="crypto">
<div class="list">
<h2>Crypto Learning</h2>

<div class="card" onclick="openContent('btc')">Bitcoin & Blockchain</div>
<div class="card" onclick="openContent('cycle')">Market Cycle</div>
<div class="card" onclick="openContent('liquidity')">Liquidity</div>
<div class="card" onclick="openContent('altcoin')">Altcoin Strategy</div>

</div>
</div>

<!-- FOREX -->
<div class="screen" id="forex">
<div class="list">
<h2>Forex Learning</h2>

<div class="card" onclick="openContent('xauusd')">XAUUSD</div>
<div class="card" onclick="openContent('macro')">Macro Economy</div>
<div class="card" onclick="openContent('risk')">Risk Management</div>
<div class="card" onclick="openContent('news')">News Impact</div>

</div>
</div>

<!-- SAHAM -->
<div class="screen" id="saham">
<div class="list">
<h2>Saham Learning</h2>

<div class="card" onclick="openContent('fundamental')">Fundamental</div>
<div class="card" onclick="openContent('valuasi')">Valuasi</div>
<div class="card" onclick="openContent('growth')">Growth Investing</div>

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
<div onclick="nav(this,'about')">About</div>
</div>

<script>

/* NAVIGATION */
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

btc: `
<h2>Bitcoin & Blockchain</h2>
<p>Bitcoin adalah aset digital pertama yang menggunakan sistem desentralisasi.</p>
<p>Blockchain berfungsi sebagai ledger transparan yang tidak bisa dimanipulasi.</p>
<p>Supply Bitcoin terbatas, membuatnya menjadi store of value.</p>
<p>Dalam jangka panjang, Bitcoin bergerak mengikuti siklus halving.</p>
`,

cycle: `
<h2>Market Cycle</h2>
<p>Market selalu bergerak dalam 4 fase utama:</p>
<p>1. Accumulation</p>
<p>2. Markup</p>
<p>3. Distribution</p>
<p>4. Markdown</p>
<p>Investor sukses adalah yang membeli di akumulasi dan menjual di distribusi.</p>
`,

liquidity: `
<h2>Liquidity</h2>
<p>Liquidity adalah bahan bakar market.</p>
<p>Market selalu bergerak menuju area likuiditas.</p>
<p>Stop loss trader sering menjadi target market maker.</p>
`,

altcoin: `
<h2>Altcoin Strategy</h2>
<p>Altcoin mengikuti Bitcoin.</p>
<p>Profit terbesar terjadi saat altseason.</p>
<p>Namun risiko juga lebih tinggi.</p>
`,

xauusd: `
<h2>XAUUSD</h2>
<p>Gold adalah aset safe haven.</p>
<p>Harga emas dipengaruhi oleh USD dan suku bunga.</p>
`,

macro: `
<h2>Macro Economy</h2>
<p>Data seperti CPI, NFP, dan interest rate mempengaruhi market global.</p>
`,

risk: `
<h2>Risk Management</h2>
<p>Gunakan maksimal 1-2% risiko per trade.</p>
<p>Tanpa risk management, profit tidak akan bertahan.</p>
`,

news: `
<h2>News Impact</h2>
<p>News besar bisa menyebabkan volatilitas tinggi.</p>
<p>Trader profesional menghindari entry saat news.</p>
`,

fundamental: `
<h2>Fundamental</h2>
<p>Analisa laporan keuangan perusahaan.</p>
`,

valuasi: `
<h2>Valuasi</h2>
<p>Menentukan apakah saham undervalued atau overvalued.</p>
`,

growth: `
<h2>Growth Investing</h2>
<p>Fokus pada perusahaan dengan pertumbuhan tinggi.</p>
`

}

document.getElementById("contentArea").innerHTML = data[type]
show("content")

}

</script>

</body>
</html>
