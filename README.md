
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL APP</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

/* ================= BASE ================= */
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{background:#020617;color:#e2e8f0;overflow:hidden;}

:root{
--primary:#22c55e;
--border:#1e293b;
--sub:#94a3b8;
}

/* ================= APP ================= */
.app{
display:flex;
height:100vh;
}

/* ================= SIDEBAR ================= */
.sidebar{
width:230px;
background:#020617;
border-right:1px solid var(--border);
padding:20px;
display:flex;
flex-direction:column;
}

.logo{
display:flex;
gap:10px;
align-items:center;
margin-bottom:30px;
}

.logo img{width:35px;}

.menu div{
padding:12px;
margin-bottom:5px;
border-radius:10px;
cursor:pointer;
color:var(--sub);
}

.menu div:hover{
background:#111827;
color:white;
}

.menu .active{
background:var(--primary);
color:black;
}

/* ================= MAIN ================= */
.main{
flex:1;
display:flex;
flex-direction:column;
}

/* ================= TOPBAR ================= */
.topbar{
height:60px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
border-bottom:1px solid var(--border);
}

.search{
background:#020617;
border:1px solid var(--border);
padding:8px 12px;
border-radius:10px;
color:white;
}

/* ================= CONTENT ================= */
.content{
flex:1;
overflow-y:auto;
padding:25px;
}

/* ================= CARD ================= */
.card{
border:1px solid var(--border);
border-radius:16px;
padding:20px;
margin-bottom:20px;
transition:.3s;
}

.card:hover{
box-shadow:0 0 25px #22c55e22;
}

/* ================= BUTTON ================= */
.btn{
padding:10px 15px;
background:var(--primary);
border:none;
border-radius:10px;
cursor:pointer;
margin-top:10px;
}

/* ================= PROGRESS ================= */
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
width:0%;
transition:.3s;
}

</style>
</head>

<body>

<div class="app">

<!-- SIDEBAR -->
<div class="sidebar">

<div class="logo">
<img src="RHN LOGO.jpg">
<b>RHN CAPITAL</b>
</div>

<div class="menu">
<div onclick="route('dashboard')" class="active">Dashboard</div>
<div onclick="route('crypto')">Crypto</div>
<div onclick="route('forex')">Forex</div>
<div onclick="route('saham')">Saham</div>
</div>

</div>

<!-- MAIN -->
<div class="main">

<div class="topbar">
<input class="search" placeholder="Cari materi..." oninput="search(this.value)">
<div id="userStatus">User Progress</div>
</div>

<div class="content" id="appContent"></div>

</div>
</div>

<script>

/* ================= STATE ================= */
let state = {
progress: JSON.parse(localStorage.getItem("progress")) || {}
}

/* ================= ROUTER ================= */
function route(page){

document.querySelectorAll('.menu div').forEach(e=>e.classList.remove('active'))
event.target.classList.add('active')

if(page === "dashboard") renderDashboard()
if(page === "crypto") renderCourse("crypto")
if(page === "forex") renderCourse("forex")
if(page === "saham") renderCourse("saham")

}

/* ================= DASHBOARD ================= */
function renderDashboard(){

let total = Object.keys(state.progress).length

document.getElementById("appContent").innerHTML = `
<h1>Dashboard</h1>

<div class="card">
<p>Progress Belajar</p>
<div class="progress"><div class="bar" style="width:${total*10}%"></div></div>
<p>${total} modul selesai</p>
</div>

<div class="card">
<p>Selamat datang di RHN Capital Education System.</p>
</div>
`

}

/* ================= COURSE ================= */
function renderCourse(type){

let modules = []

for(let i=1;i<=20;i++){
modules.push({
id:type+i,
title:type.toUpperCase()+" Module "+i,
desc:"Pembelajaran mendalam tentang "+type+" level "+i
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

/* ================= MODULE ================= */
function openModule(id){

let text = `<h1>Module ${id}</h1>`

for(let i=0;i<120;i++){
text += `<p>Materi ${id} line ${i} — memahami struktur market, psikologi, dan strategi profesional RHN Capital.</p>`
}

text += `<button class="btn" onclick="complete('${id}')">Tandai Selesai</button>`

document.getElementById("appContent").innerHTML = text

}

/* ================= COMPLETE ================= */
function complete(id){
state.progress[id] = true
localStorage.setItem("progress", JSON.stringify(state.progress))
alert("Progress tersimpan")
route("dashboard")
}

/* ================= SEARCH ================= */
function search(q){
q = q.toLowerCase()
document.querySelectorAll('.card').forEach(c=>{
c.style.display = c.innerText.toLowerCase().includes(q) ? 'block':'none'
})
}

/* INIT */
renderDashboard()

</script>

</body>
</html>
