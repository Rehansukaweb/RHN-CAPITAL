<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL APP</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{background:#020617;color:#e2e8f0;overflow:hidden;}

:root{
--primary:#22c55e;
--border:#1e293b;
--sub:#94a3b8;
}

.app{display:flex;height:100vh;}

.sidebar{
width:230px;
background:#020617;
border-right:1px solid var(--border);
padding:20px;
}

.logo{display:flex;gap:10px;align-items:center;margin-bottom:30px;}
.logo img{width:35px;}

.menu div{
padding:12px;margin-bottom:5px;border-radius:10px;
cursor:pointer;color:var(--sub);
}
.menu .active{background:var(--primary);color:black;}

.main{flex:1;display:flex;flex-direction:column;}

.topbar{
height:60px;display:flex;align-items:center;justify-content:space-between;
padding:0 20px;border-bottom:1px solid var(--border);
}

.content{flex:1;overflow-y:auto;padding:25px;}

.card{
border:1px solid var(--border);
border-radius:16px;
padding:20px;
margin-bottom:20px;
}

.btn{
padding:10px;
background:var(--primary);
border:none;
border-radius:10px;
cursor:pointer;
margin-top:10px;
}

.progress{
height:10px;background:#111827;border-radius:10px;
overflow:hidden;margin-top:10px;
}

.bar{height:100%;background:var(--primary);}

</style>
</head>

<body>

<div class="app">

<div class="sidebar">
<b>RHN CAPITAL</b>
<div class="menu">
<div onclick="route('dashboard')" class="active">Dashboard</div>
<div onclick="route('crypto')">Crypto</div>
<div onclick="route('forex')">Forex</div>
<div onclick="route('saham')">Saham</div>
</div>
</div>

<div class="main">
<div class="topbar">
<input placeholder="Cari materi..." oninput="search(this.value)">
<div>Education System</div>
</div>
<div class="content" id="appContent"></div>
</div>

</div>

<script>

let state = {
progress: JSON.parse(localStorage.getItem("progress")) || {}
}

function route(page){
document.querySelectorAll('.menu div').forEach(e=>e.classList.remove('active'))
event.target.classList.add('active')

if(page==="dashboard") renderDashboard()
if(page==="crypto") renderCourse("crypto")
if(page==="forex") renderCourse("forex")
if(page==="saham") renderCourse("saham")
}

function renderDashboard(){
let total = Object.keys(state.progress).length

document.getElementById("appContent").innerHTML = `
<h1>Dashboard</h1>

<div class="card">
<p>Progress Belajar</p>
<div class="progress"><div class="bar" style="width:${total*5}%"></div></div>
<p>${total} modul selesai</p>
</div>

<div class="card">
<p>Selamat datang di RHN Capital Education System.</p>
</div>
`
}

function renderCourse(type){

let modules = []
for(let i=1;i<=10;i++){
modules.push({
id:type+i,
title:type.toUpperCase()+" Module "+i,
desc:"Pembelajaran "+type+" level "+i
})
}

let html = `<h1>${type.toUpperCase()} COURSE</h1>`

modules.forEach(m=>{
let done = state.progress[m.id]

html += `
<div class="card">
<h3>${m.title}</h3>
<p>${m.desc}</p>
<button class="btn" onclick="openModule('${m.id}')">Buka</button>
${done ? "<p style='color:#22c55e'>✔ Selesai</p>" : ""}
</div>
`
})

document.getElementById("appContent").innerHTML = html
}

function openModule(id){

let materi = {

/* CRYPTO */
crypto1:`<h1>Bitcoin</h1><p>Bitcoin adalah aset digital desentralisasi dengan supply terbatas 21 juta.</p>`,
crypto2:`<h1>Blockchain</h1><p>Blockchain adalah ledger transparan yang tidak bisa diubah.</p>`,
crypto3:`<h1>Market Cycle</h1><p>Accumulation → Markup → Distribution → Markdown.</p>`,
crypto4:`<h1>Liquidity</h1><p>Market bergerak menuju likuiditas.</p>`,
crypto5:`<h1>Altcoin</h1><p>Altcoin mengikuti Bitcoin dengan volatilitas tinggi.</p>`,
crypto6:`<h1>BTC Dominance</h1><p>Menentukan kekuatan Bitcoin terhadap altcoin.</p>`,
crypto7:`<h1>On Chain</h1><p>Analisa wallet dan transaksi besar.</p>`,
crypto8:`<h1>Supply Demand</h1><p>Harga ditentukan supply vs demand.</p>`,
crypto9:`<h1>Halving</h1><p>Mengurangi supply BTC → bullish.</p>`,
crypto10:`<h1>Strategi</h1><p>Buy fear, sell euforia.</p>`,

/* FOREX */
forex1:`<h1>Forex</h1><p>Pasar mata uang terbesar dunia.</p>`,
forex2:`<h1>Pair</h1><p>EURUSD, GBPUSD, XAUUSD.</p>`,
forex3:`<h1>XAUUSD</h1><p>Gold vs USD.</p>`,
forex4:`<h1>Trend</h1><p>Ikuti arah market.</p>`,
forex5:`<h1>Support Resistance</h1><p>Area penting harga.</p>`,
forex6:`<h1>Risk Management</h1><p>Gunakan 1-2% risiko.</p>`,
forex7:`<h1>Leverage</h1><p>Memperbesar posisi.</p>`,
forex8:`<h1>News</h1><p>CPI, NFP, dll.</p>`,
forex9:`<h1>Psikologi</h1><p>Kontrol emosi trading.</p>`,
forex10:`<h1>Strategi</h1><p>Trend following.</p>`,

/* SAHAM */
saham1:`<h1>Saham</h1><p>Kepemilikan perusahaan.</p>`,
saham2:`<h1>Fundamental</h1><p>Laporan keuangan.</p>`,
saham3:`<h1>Valuasi</h1><p>Harga wajar saham.</p>`,
saham4:`<h1>Growth</h1><p>Perusahaan berkembang.</p>`,
saham5:`<h1>Dividen</h1><p>Pembagian laba.</p>`,
saham6:`<h1>Risiko</h1><p>Harga bisa turun.</p>`,
saham7:`<h1>Jangka Panjang</h1><p>Fokus long term.</p>`,
saham8:`<h1>Sentiment</h1><p>Dipengaruhi berita.</p>`,
saham9:`<h1>Siklus</h1><p>Market cycle saham.</p>`,
saham10:`<h1>Strategi</h1><p>Buy undervalued.</p>`
}

let isi = materi[id] || "<p>Materi belum tersedia</p>"

isi += `<button class="btn" onclick="complete('${id}')">Tandai Selesai</button>`

document.getElementById("appContent").innerHTML = isi
}

function complete(id){
state.progress[id] = true
localStorage.setItem("progress", JSON.stringify(state.progress))
alert("Progress tersimpan")
route("dashboard")
}

function search(q){
q=q.toLowerCase()
document.querySelectorAll('.card').forEach(c=>{
c.style.display = c.innerText.toLowerCase().includes(q)?'block':'none'
})
}

renderDashboard()

</script>

</body>
</html>
