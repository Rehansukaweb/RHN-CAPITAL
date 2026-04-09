
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL PRO</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{background:#020617;color:#e2e8f0;overflow:hidden;}

:root{
--primary:#22c55e;
--border:#1e293b;
--glass:rgba(255,255,255,0.04);
}

/* APP */
.app{display:flex;height:100vh;}

/* SIDEBAR */
.sidebar{
width:250px;
background:#020617;
border-right:1px solid var(--border);
padding:20px;
}

.logo{color:var(--primary);font-weight:bold;margin-bottom:20px;}

.menu div{
padding:12px;
border-radius:10px;
cursor:pointer;
margin-bottom:5px;
}

.menu div:hover{background:#111827;}
.active{background:var(--primary);color:black;}

/* MAIN */
.main{flex:1;display:flex;flex-direction:column;}

.topbar{
height:60px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
border-bottom:1px solid var(--border);
}

.content{
flex:1;
overflow-y:auto;
padding:20px;
}

/* CARD */
.card{
background:var(--glass);
border:1px solid var(--border);
border-radius:15px;
padding:20px;
margin-bottom:15px;
}

/* BTN */
.btn{
padding:10px;
background:var(--primary);
border:none;
border-radius:10px;
cursor:pointer;
margin-top:10px;
}

/* LOCK */
.lock{color:red;font-size:12px;}
</style>
</head>

<body>

<div class="app">

<div class="sidebar">
<div class="logo">RHN CAPITAL</div>

<div class="menu">
<div onclick="route('dashboard')" class="active">Dashboard</div>
<div onclick="route('crypto')">Crypto</div>
<div onclick="route('forex')">Forex</div>
<div onclick="route('saham')">Saham</div>
</div>

<button class="btn" onclick="login()">Login</button>

</div>

<div class="main">

<div class="topbar">
<div id="status">Belum Login</div>
</div>

<div class="content" id="app"></div>

</div>
</div>

<!-- FIREBASE -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>

<script>

/* ===== CONFIG ===== */
const firebaseConfig = {
apiKey: "ISI_API_KEY",
authDomain: "ISI_DOMAIN",
projectId: "ISI_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

let userPremium = false;
let currentUser = null;

/* ===== LOGIN ===== */
function login(){
let email = prompt("Email:");
let pass = prompt("Password:");

auth.signInWithEmailAndPassword(email, pass)
.then(res=>{
currentUser = res.user;
loadUser();
})
.catch(()=>{
auth.createUserWithEmailAndPassword(email, pass)
.then(res=>{
currentUser = res.user;
db.collection("users").doc(res.user.uid).set({premium:false});
alert("Register sukses");
loadUser();
});
});
}

/* ===== LOAD USER ===== */
function loadUser(){
db.collection("users").doc(currentUser.uid).get()
.then(doc=>{
userPremium = doc.data().premium;
document.getElementById("status").innerText =
userPremium ? "PREMIUM USER" : "FREE USER";
dashboard();
});
}

/* ===== ROUTER ===== */
function route(p){
document.querySelectorAll('.menu div').forEach(e=>e.classList.remove('active'))
event.target.classList.add('active')

if(p==="dashboard") dashboard()
if(p==="crypto") course("crypto")
if(p==="forex") course("forex")
if(p==="saham") course("saham")
}

/* ===== DASHBOARD ===== */
function dashboard(){
document.getElementById("app").innerHTML = `
<h1>RHN CAPITAL</h1>

<div class="card">
<p>Platform edukasi investasi profesional.</p>
</div>

<div class="card">
<p>Status: ${userPremium ? "Premium" : "Free"}</p>
</div>
`
}

/* ===== COURSE ===== */
function course(type){

let html = `<h1>${type.toUpperCase()}</h1>`

for(let i=1;i<=8;i++){

let premium = i>4

html += `
<div class="card">
<p>Module ${i}</p>
${premium ? "<p class='lock'>🔒 Premium</p>" : ""}
<button class="btn" onclick="openModule('${type}',${i},${premium})">Buka</button>
</div>
`
}

document.getElementById("app").innerHTML = html
}

/* ===== MODULE CONTENT (FIX NO LOOP SPAM) ===== */
function openModule(type,i,premium){

if(premium && !userPremium){
alert("Harus Premium!");
return;
}

let materi = `<h1>${type.toUpperCase()} MODULE ${i}</h1>`

/* CRYPTO */
if(type==="crypto"){
if(i===1){
materi+=`<p>Crypto adalah aset digital berbasis blockchain.</p>`
}
if(i===2){
materi+=`<p>Bitcoin adalah acuan utama market crypto.</p>`
}
if(i===3){
materi+=`<p>Market cycle: accumulation → bull → distribution → bear.</p>`
}
if(i===4){
materi+=`<p>Liquidity adalah target utama market.</p>`
}
if(i>=5){
materi+=`<p>Strategi lanjutan: entry setelah konfirmasi dan risk management.</p>`
}
}

/* FOREX */
if(type==="forex"){
if(i===1){
materi+=`<p>Forex adalah pasar terbesar di dunia.</p>`
}
if(i===2){
materi+=`<p>XAUUSD dipengaruhi USD dan suku bunga.</p>`
}
if(i===3){
materi+=`<p>Trend dan struktur market sangat penting.</p>`
}
if(i===4){
materi+=`<p>Risk management wajib untuk bertahan.</p>`
}
if(i>=5){
materi+=`<p>Strategi: liquidity sweep + confirmation entry.</p>`
}
}

/* SAHAM */
if(type==="saham"){
if(i===1){
materi+=`<p>Saham adalah kepemilikan perusahaan.</p>`
}
if(i===2){
materi+=`<p>Analisa fundamental menentukan kualitas perusahaan.</p>`
}
if(i===3){
materi+=`<p>Valuasi menentukan harga murah atau mahal.</p>`
}
if(i===4){
materi+=`<p>Dividen adalah keuntungan tambahan.</p>`
}
if(i>=5){
materi+=`<p>Strategi: buy good company & hold.</p>`
}
}

materi += `
<div class="card">
<p><b>Kesimpulan:</b> disiplin dan konsistensi adalah kunci.</p>
</div>
`

document.getElementById("app").innerHTML = materi
}

/* INIT */
dashboard()

</script>

</body>
</html>
