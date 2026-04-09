
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL ELITE</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{
background:linear-gradient(180deg,#020617,#0f172a);
color:white;
overflow-x:hidden;
}

/* NAVBAR */
header{
position:fixed;
top:0;width:100%;
background:rgba(2,6,23,.8);
backdrop-filter:blur(10px);
padding:15px;
z-index:999;
display:flex;
justify-content:center;
font-weight:600;
color:#22c55e;
}

/* CONTENT */
.content{
padding:80px 20px 90px;
max-width:900px;
margin:auto;
}

/* CARD */
.card{
background:#020617;
border:1px solid #1f2937;
border-radius:18px;
padding:20px;
margin-bottom:20px;
}

h1{margin-bottom:15px;}
h2{color:#22c55e;margin:15px 0;}
p{margin-bottom:12px;line-height:1.8;color:#cbd5f5;}

/* BUTTON */
.btn{
display:inline-block;
padding:12px 18px;
background:#22c55e;
color:black;
border-radius:10px;
cursor:pointer;
margin-top:10px;
}

/* BOTTOM NAV */
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
color:#9ca3af;
cursor:pointer;
font-size:14px;
}

.bottom div.active{
color:#22c55e;
}

/* SCROLL BTN */
.topBtn{
position:fixed;
right:15px;
bottom:80px;
background:#22c55e;
color:black;
padding:10px;
border-radius:50%;
cursor:pointer;
}
</style>
</head>

<body>

<header>RHN CAPITAL EDUCATION</header>

<div class="content" id="app"></div>

<div class="bottom">
<div onclick="route('home')" class="active">Home</div>
<div onclick="route('crypto')">Crypto</div>
<div onclick="route('forex')">Forex</div>
<div onclick="route('saham')">Saham</div>
</div>

<div class="topBtn" onclick="scrollTop()">↑</div>

<script>

function route(p){
document.querySelectorAll('.bottom div').forEach(e=>e.classList.remove('active'))
event.target.classList.add('active')

if(p==='home') home()
if(p==='crypto') crypto()
if(p==='forex') forex()
if(p==='saham') saham()
}

/* HOME */
function home(){
document.getElementById("app").innerHTML = `
<div class="card">
<h1>RHN CAPITAL</h1>

<p>Platform edukasi investasi profesional untuk membangun mindset, skill, dan konsistensi dalam dunia market.</p>

<p>Tujuan utama bukan cepat kaya, tapi membangun sistem yang menghasilkan profit konsisten jangka panjang.</p>

<p>Disini kamu akan belajar crypto, forex, saham, dan psikologi market secara mendalam.</p>

</div>
`
}

/* MATERI TEMPLATE 10 PARAGRAF */
function materiJudul(judul){
return `
<div class="card">
<h1>${judul}</h1>

<p>Market keuangan global bergerak berdasarkan supply dan demand yang dipengaruhi oleh emosi manusia.</p>
<p>Setiap pergerakan harga bukan random, melainkan hasil dari akumulasi keputusan pelaku market besar.</p>
<p>Trader profesional tidak fokus pada prediksi, melainkan pada probabilitas dan manajemen risiko.</p>
<p>Kesalahan terbesar trader pemula adalah mencari entry sempurna tanpa memahami konteks market.</p>
<p>Market selalu mencari likuiditas, dimana stop loss trader retail berada.</p>
<p>Disiplin adalah kunci utama dalam mempertahankan profit jangka panjang.</p>
<p>Tanpa risk management, strategi terbaik sekalipun akan gagal.</p>
<p>Kesabaran lebih penting dibandingkan frekuensi trading.</p>
<p>Trader sukses fokus pada proses, bukan hasil instan.</p>
<p>Konsistensi kecil setiap hari akan menghasilkan hasil besar dalam jangka panjang.</p>

</div>
`
}

/* CRYPTO */
function crypto(){
let html = ""
for(let i=1;i<=5;i++){
html += materiJudul("Crypto Mastery "+i)
}
document.getElementById("app").innerHTML = html
}

/* FOREX */
function forex(){
let html = ""
for(let i=1;i<=5;i++){
html += materiJudul("Forex Mastery "+i)
}
document.getElementById("app").innerHTML = html
}

/* SAHAM */
function saham(){
let html = ""
for(let i=1;i<=5;i++){
html += materiJudul("Saham Mastery "+i)
}
document.getElementById("app").innerHTML = html
}

/* SCROLL TOP */
function scrollTop(){
window.scrollTo({top:0,behavior:'smooth'})
}

/* INIT */
home()

</script>

</body>
</html>
