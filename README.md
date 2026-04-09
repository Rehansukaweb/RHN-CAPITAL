
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}

body{
background:#f8fafc;
color:#0f172a;
}

/* NAVBAR */
header{
position:fixed;
top:0;width:100%;
background:white;
border-bottom:1px solid #e2e8f0;
z-index:999;
}

.nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 30px;
}

.logo{
font-weight:700;
color:#22c55e;
font-size:20px;
}

.menu button{
background:none;
border:none;
margin-left:20px;
cursor:pointer;
color:#475569;
font-weight:500;
}

.menu button:hover{color:#22c55e;}

/* HERO */
.hero{
padding:140px 30px 60px;
text-align:center;
max-width:900px;
margin:auto;
}

.hero h1{
font-size:42px;
margin-bottom:10px;
}

.hero p{
color:#64748b;
line-height:1.7;
}

.btn{
padding:14px 28px;
border-radius:10px;
background:#22c55e;
color:white;
border:none;
cursor:pointer;
margin-top:20px;
}

/* SECTION */
.section{
padding:70px 30px;
max-width:1100px;
margin:auto;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
background:white;
border:1px solid #e2e8f0;
border-radius:15px;
padding:20px;
transition:.3s;
cursor:pointer;
}

.card:hover{
transform:translateY(-5px);
box-shadow:0 10px 30px rgba(0,0,0,0.05);
}

/* DASHBOARD STYLE */
.dashboard{
display:flex;
gap:20px;
margin-top:20px;
}

.sidebar{
width:200px;
background:white;
border:1px solid #e2e8f0;
border-radius:12px;
padding:15px;
}

.sidebar div{
padding:10px;
cursor:pointer;
border-radius:8px;
margin-bottom:5px;
}

.sidebar div:hover{background:#f1f5f9;}

.main{
flex:1;
}

.content-card{
background:white;
border:1px solid #e2e8f0;
border-radius:15px;
padding:20px;
margin-bottom:15px;
}

footer{
text-align:center;
padding:40px;
color:#64748b;
}

</style>
</head>

<body>

<header>
<div class="nav">
<div class="logo">RHN CAPITAL</div>
<div class="menu">
<button onclick="scrollToSec('about')">About</button>
<button onclick="scrollToSec('features')">Features</button>
<button onclick="scrollToSec('course')">Course</button>
<button onclick="scrollToSec('contact')">Contact</button>
</div>
</div>
</header>

<section class="hero">
<h1>Platform Edukasi & Analisa Market Profesional</h1>
<p>
RHN Capital adalah platform edukasi investasi modern yang membantu trader memahami crypto, forex, dan saham dengan pendekatan profesional berbasis risk management dan market structure.
</p>
<button class="btn">Mulai Belajar</button>
</section>

<section id="about" class="section">
<h2>Tentang RHN Capital</h2>
<p>
Kami fokus membangun trader dengan mindset kuat, bukan sekadar profit cepat. Semua materi disusun untuk jangka panjang.
</p>
</section>

<section id="features" class="section">
<h2>Fitur Platform</h2>

<div class="grid">

<div class="card">
<h3>📊 Analisa Market</h3>
<p>Crypto, Forex, Saham berbasis data.</p>
</div>

<div class="card">
<h3>🧠 Psychology</h3>
<p>Kontrol emosi dan mindset trader.</p>
</div>

<div class="card">
<h3>📚 Course System</h3>
<p>Materi bertahap dan terstruktur.</p>
</div>

<div class="card">
<h3>⚡ Strategy</h3>
<p>Setup profesional dengan risk control.</p>
</div>

</div>
</section>

<section id="course" class="section">
<h2>Learning Dashboard</h2>

<div class="dashboard">

<div class="sidebar">
<div onclick="loadCourse('crypto')">Crypto</div>
<div onclick="loadCourse('forex')">Forex</div>
<div onclick="loadCourse('saham')">Saham</div>
</div>

<div class="main" id="courseContent">
<div class="content-card">
Pilih materi untuk mulai belajar.
</div>
</div>

</div>
</section>

<section id="contact" class="section">
<h2>Kontak</h2>
<button class="btn" onclick="window.open('https://wa.me/6285717426626')">WhatsApp</button>
</section>

<footer>
© 2026 RHN CAPITAL
</footer>

<script>

function scrollToSec(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function loadCourse(type){
let text = ""

for(let i=1;i<=5;i++){
text += `
<div class="content-card">
<h3>${type.toUpperCase()} Materi ${i}</h3>
<p>Market bergerak berdasarkan supply demand dan psikologi pelaku market. Trader profesional fokus pada probabilitas, bukan prediksi.</p>
<p>Risk management adalah kunci utama dalam bertahan di market jangka panjang.</p>
<p>Kesabaran dan disiplin lebih penting dibanding entry sempurna.</p>
<p>Market selalu mencari likuiditas sebelum bergerak.</p>
<p>Fokus pada proses, bukan hasil instan.</p>
</div>
`
}

document.getElementById("courseContent").innerHTML = text
}

</script>

</body>
</html>
