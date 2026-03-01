<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<title>RHN CAPITAL</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

/* ===== GLOBAL ===== */
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Inter',sans-serif;
}

body{
background:linear-gradient(180deg,#020617,#0b1220);
color:white;
overflow-x:hidden;
}

/* ===== NAVBAR ===== */
header{
position:fixed;
width:100%;
top:0;
background:rgba(2,6,23,.8);
backdrop-filter:blur(10px);
border-bottom:1px solid #1f2937;
z-index:999;
}

.nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:14px 25px;
}

.logo{
display:flex;
align-items:center;
gap:10px;
}

.logo img{
width:38px;
}

.menu button{
background:none;
border:none;
color:#9ca3af;
margin-left:15px;
cursor:pointer;
font-size:14px;
}

.menu button:hover{
color:white;
}

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

.hero h1{
font-size:42px;
margin-bottom:10px;
animation:fadeUp 1.2s ease;
}

.hero p{
color:#9ca3af;
max-width:600px;
animation:fadeUp 1.6s ease;
}

.cta{
margin-top:25px;
padding:14px 30px;
border:none;
border-radius:12px;
background:linear-gradient(135deg,#22c55e,#16a34a);
font-weight:600;
cursor:pointer;
box-shadow:0 0 25px rgba(34,197,94,.4);
transition:.3s;
}

.cta:hover{
transform:scale(1.07);
}

/* ===== DASHBOARD ===== */
.section{
padding:90px 20px;
max-width:1100px;
margin:auto;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:20px;
}

.card{
background:#020617;
border:1px solid #1f2937;
border-radius:18px;
padding:22px;
cursor:pointer;
transition:.4s;
position:relative;
overflow:hidden;
}

.card:hover{
transform:translateY(-6px);
box-shadow:0 0 35px rgba(34,197,94,.25);
}

.card::after{
content:'';
position:absolute;
width:120%;
height:120%;
background:radial-gradient(circle,#22c55e22,transparent);
top:-40%;
left:-40%;
opacity:0;
transition:.5s;
}

.card:hover::after{
opacity:1;
}

.card h3{
margin-bottom:8px;
}

/* ===== BUTTON AREA ===== */
.action{
margin-top:15px;
padding:10px;
border-radius:8px;
background:#22c55e;
color:black;
font-weight:600;
text-align:center;
}

/* ===== CONTACT ===== */
.contact{
text-align:center;
}

.contact a{
display:block;
margin:10px auto;
width:260px;
padding:14px;
background:#111827;
border-radius:12px;
text-decoration:none;
color:white;
transition:.3s;
}

.contact a:hover{
background:#22c55e;
color:black;
}

/* ===== FOOTER ===== */
footer{
text-align:center;
padding:25px;
color:#6b7280;
}

/* ===== ANIMATION ===== */
@keyframes fadeUp{
from{opacity:0;transform:translateY(30px);}
to{opacity:1;transform:translateY(0);}
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
<button onclick="scrollToSection('services')">Services</button>
<button onclick="scrollToSection('dashboard')">Dashboard</button>
<button onclick="scrollToSection('contact')">Contact</button>
</div>

</div>
</header>

<!-- HERO -->
<section class="hero">

<h1>RHN CAPITAL</h1>
<p>
Modern Investment Platform berfokus pada pertumbuhan aset,
strategi market global, dan manajemen risiko profesional.
</p>

<button class="cta"
onclick="window.open('https://wa.me/6285717426626','_blank')">
Mulai Konsultasi
</button>

</section>

<!-- SERVICES -->
<section id="services" class="section">

<h2>Layanan RHN Capital</h2>

<div class="grid">

<div class="card" onclick="alert('Analisa Market Dibuka')">
<h3>📊 Market Analysis</h3>
<p>Analisa teknikal & makro ekonomi global.</p>
<div class="action">Buka</div>
</div>

<div class="card" onclick="alert('Portfolio Strategy')">
<h3>💼 Portfolio Strategy</h3>
<p>Strategi diversifikasi aset profesional.</p>
<div class="action">Lihat</div>
</div>

<div class="card" onclick="alert('Crypto Research')">
<h3>₿ Crypto Research</h3>
<p>Riset aset digital & siklus market.</p>
<div class="action">Akses</div>
</div>

<div class="card" onclick="alert('Education Module')">
<h3>🎓 Education</h3>
<p>Materi edukasi investasi & trading.</p>
<div class="action">Masuk</div>
</div>

</div>

</section>

<!-- DASHBOARD -->
<section id="dashboard" class="section">

<h2>Dashboard Fitur</h2>

<div class="grid">

<div class="card" onclick="window.open('https://tradingview.com','_blank')">
<h3>Live Market</h3>
<p>Akses chart global realtime.</p>
<div class="action">Open</div>
</div>

<div class="card" onclick="window.open('https://coingecko.com','_blank')">
<h3>Crypto Data</h3>
<p>Market data cryptocurrency.</p>
<div class="action">View</div>
</div>

<div class="card" onclick="window.open('https://wa.me/6285717426626','_blank')">
<h3>Private Consultation</h3>
<p>Konsultasi langsung.</p>
<div class="action">Chat</div>
</div>

</div>

</section>

<!-- CONTACT -->
<section id="contact" class="section contact">

<h2>Hubungi RHN Capital</h2>

<a href="https://wa.me/6285717426626" target="_blank">
WhatsApp — 085717426626
</a>

<a href="https://instagram.com/rehanhuy" target="_blank">
Instagram — @rehanhuy
</a>

<a href="https://tiktok.com/@rehanhuy" target="_blank">
TikTok — @rehanhuy
</a>

</section>

<footer>
© 2026 RHN CAPITAL — Investment Platform
</footer>

<script>
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}
</script>

</body>
</html>
