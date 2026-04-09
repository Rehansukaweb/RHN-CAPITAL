
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL ULTIMATE</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{
background:linear-gradient(180deg,#020617,#020617,#0f172a);
color:#e2e8f0;
overflow:hidden;
}

/* ===== ROOT ===== */
:root{
--primary:#22c55e;
--border:#1e293b;
--glass:rgba(255,255,255,0.03);
--sub:#94a3b8;
}

/* ===== APP ===== */
.app{display:flex;height:100vh;}

/* ===== SIDEBAR ===== */
.sidebar{
width:260px;
background:#020617;
border-right:1px solid var(--border);
padding:20px;
overflow-y:auto;
}

.logo{
font-size:20px;
font-weight:700;
color:var(--primary);
margin-bottom:25px;
}

.menu div{
padding:12px;
border-radius:10px;
cursor:pointer;
margin-bottom:5px;
color:var(--sub);
transition:.3s;
}

.menu div:hover{
background:#111827;
color:white;
}

.menu .active{
background:var(--primary);
color:black;
}

/* ===== MAIN ===== */
.main{
flex:1;
display:flex;
flex-direction:column;
}

/* ===== TOPBAR ===== */
.topbar{
height:60px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
border-bottom:1px solid var(--border);
}

.search{
padding:8px 12px;
border-radius:10px;
border:1px solid var(--border);
background:#020617;
color:white;
}

/* ===== CONTENT ===== */
.content{
flex:1;
overflow-y:auto;
padding:25px;
animation:fade .3s ease;
}

@keyframes fade{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;}
}

/* ===== CARD ===== */
.card{
background:var(--glass);
backdrop-filter:blur(10px);
border:1px solid var(--border);
border-radius:18px;
padding:20px;
margin-bottom:20px;
transition:.3s;
}

.card:hover{
transform:translateY(-5px);
box-shadow:0 0 25px #22c55e22;
}

/* ===== TEXT ===== */
h1{margin-bottom:15px;}
h2{margin-bottom:10px;color:var(--primary);}
p{margin-bottom:10px;color:#cbd5f5;line-height:1.6;}

/* ===== BUTTON ===== */
.btn{
padding:10px 15px;
background:var(--primary);
border:none;
border-radius:10px;
cursor:pointer;
margin-top:10px;
}

/* ===== PROGRESS ===== */
.progress{
height:10px;
background:#111827;
border-radius:10px;
overflow:hidden;
margin-top:10px;
}

.bar{
height:100%;
background:var(--primary);
transition:.3s;
}

/* ===== LEVEL ===== */
.level{
color:#facc15;
font-weight:bold;
}

</style>
</head>

<body>

<div class="app">

<!-- SIDEBAR -->
<div class="sidebar">
<div class="logo">RHN CAPITAL</div>

<div class="menu">
<div onclick="route('dashboard')" class="active">Dashboard</div>
<div onclick="route('crypto')">Crypto</div>
<div onclick="route('forex')">Forex</div>
<div onclick="route('saham')">Saham</div>
<div onclick="route('psychology')">Psychology</div>
</div>
</div>

<!-- MAIN -->
<div class="main">

<div class="topbar">
<input class="search" placeholder="Cari materi..." oninput="search(this.value)">
<div id="status"></div>
</div>

<div class="content" id="app"></div>

</div>

</div>

<script>

/* ===== STATE ===== */
let progress = JSON.parse(localStorage.getItem("progress")) || {}

function level(){
let total = Object.keys(progress).length
if(total < 10) return "Beginner"
if(total < 30) return "Intermediate"
return "Elite"
}

/* ===== ROUTER ===== */
function route(p){
document.querySelectorAll('.menu div').forEach(e=>e.classList.remove('active'))
event.target.classList.add('active')

if(p==="dashboard") dashboard()
if(p==="crypto") course("crypto",20)
if(p==="forex") course("forex",20)
if(p==="saham") course("saham",15)
if(p==="psychology") psychology()
}

/* ===== DASHBOARD ===== */
function dashboard(){

let total = Object.keys(progress).length

document.getElementById("status").innerHTML = `
<span class="level">${level()}</span> | ${total} Modul
`

document.getElementById("app").innerHTML = `
<h1>RHN CAPITAL ELITE SYSTEM</h1>

<div class="card">
<p>Platform edukasi finansial profesional berbasis sistem: crypto, forex, saham, dan psikologi.</p>
</div>

<div class="card">
<p>Progress belajar:</p>
<div class="progress">
<div class="bar" style="width:${total*2}%"></div>
</div>
</div>

<div class="card">
<p>Tujuan: membangun trader dengan mindset probabilitas, disiplin, dan risk management ketat.</p>
</div>
`
}

/* ===== COURSE ===== */
function course(type,total){

let html = `<h1>${type.toUpperCase()} SYSTEM</h1>`

for(let i=1;i<=total;i++){

let id = type+i
let done = progress[id]

html += `
<div class="card">
<h2>${type.toUpperCase()} MODULE ${i}</h2>
<p>Pembelajaran ${type} level ${i}</p>
<button class="btn" onclick="openModule('${id}')">Buka</button>
${done ? "<p style='color:#22c55e'>✔ selesai</p>" : ""}
</div>
`
}

document.getElementById("app").innerHTML = html
}

/* ===== MODULE ===== */
function openModule(id){

let materi = `
<h1>${id.toUpperCase()}</h1>

<p>Market tidak bergerak random. Harga bergerak berdasarkan likuiditas dan kepentingan institusi.</p>
<p>Trader retail sering menjadi likuiditas karena entry emosional.</p>

<p><b>Konsep penting:</b></p>
<p>- Liquidity</p>
<p>- Break of Structure</p>
<p>- Trend continuation</p>
<p>- Market manipulation</p>

<p><b>Strategi:</b></p>
<p>- Entry setelah konfirmasi</p>
<p>- Hindari FOMO</p>
<p>- Gunakan risk management</p>

<p>Semakin tinggi level, semakin penting memahami struktur market daripada indikator.</p>
`

for(let i=0;i<100;i++){
materi += `<p>Insight profesional: market mencari likuiditas sebelum bergerak ke arah utama. Disiplin dan konsistensi adalah kunci utama.</p>`
}

materi += `<button class="btn" onclick="done('${id}')">Selesai</button>`

document.getElementById("app").innerHTML = materi
}

/* ===== DONE ===== */
function done(id){
progress[id]=true
localStorage.setItem("progress", JSON.stringify(progress))
route("dashboard")
}

/* ===== SEARCH ===== */
function search(q){
q=q.toLowerCase()
document.querySelectorAll('.card').forEach(c=>{
c.style.display = c.innerText.toLowerCase().includes(q)?'block':'none'
})
}

/* ===== PSYCHOLOGY ===== */
function psychology(){
document.getElementById("app").innerHTML=`
<h1>Psychology Trading</h1>

<div class="card">
<p>90% trader gagal karena emosi.</p>
<p>Disiplin > strategi.</p>
</div>

<div class="card">
<p>Trader sukses fokus konsistensi, bukan profit cepat.</p>
</div>
`
}

/* INIT */
dashboard()

</script>

</body>
</html>
