
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RHN CAPITAL MASTER EDUCATION</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter;}
body{background:#020617;color:#e2e8f0;overflow:hidden;}

:root{
--primary:#22c55e;
--border:#1e293b;
--glass:rgba(255,255,255,0.04);
}

.app{display:flex;height:100vh;}

.sidebar{
width:250px;
background:#020617;
border-right:1px solid var(--border);
padding:20px;
overflow-y:auto;
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

.main{flex:1;display:flex;flex-direction:column;}

.topbar{
height:60px;
display:flex;
align-items:center;
padding:0 20px;
border-bottom:1px solid var(--border);
}

.content{
flex:1;
overflow-y:auto;
padding:20px;
}

.card{
background:var(--glass);
border:1px solid var(--border);
border-radius:15px;
padding:20px;
margin-bottom:20px;
}

h1{margin-bottom:15px;}
h2{margin-top:10px;color:var(--primary);}
p{margin-bottom:8px;line-height:1.7;}
</style>
</head>

<body>

<div class="app">

<div class="sidebar">
<div class="logo">RHN CAPITAL</div>

<div class="menu">
<div onclick="renderAll()" class="active">200 Materi</div>
</div>
</div>

<div class="main">
<div class="topbar">MASTER FINANCIAL EDUCATION</div>
<div class="content" id="app"></div>
</div>

</div>

<script>

/* ===== 200 MATERI BERBEDA ===== */
const materi = [

/* ===== CRYPTO (1–50) ===== */
"Bitcoin adalah aset digital pertama yang mengubah sistem keuangan global.",
"Blockchain memungkinkan transaksi tanpa perantara.",
"Supply terbatas Bitcoin membuatnya anti inflasi.",
"Altcoin memiliki risiko lebih tinggi dibanding Bitcoin.",
"Market crypto sangat dipengaruhi sentimen global.",
"Whale dapat mempengaruhi pergerakan harga.",
"Fear and Greed Index penting untuk membaca emosi market.",
"Support dan resistance adalah dasar trading.",
"Volume menunjukkan kekuatan pergerakan.",
"Market cap menentukan ukuran aset.",
"Liquidity adalah target utama market.",
"Breakout sering diikuti fakeout.",
"Trend adalah arah utama market.",
"Sideways adalah fase konsolidasi.",
"Bull market ditandai kenaikan panjang.",
"Bear market ditandai penurunan panjang.",
"Halving Bitcoin mempengaruhi supply.",
"On-chain data memberi insight tambahan.",
"Exchange besar punya pengaruh besar.",
"Leverage meningkatkan risiko.",
"Stop loss melindungi modal.",
"Take profit mengunci keuntungan.",
"FOMO adalah musuh trader.",
"DYOR penting sebelum investasi.",
"Fundamental kuat tidak selalu naik cepat.",
"Tokenomics menentukan supply demand.",
"Burn token mengurangi supply.",
"Staking memberi passive income.",
"DeFi membuka sistem keuangan baru.",
"NFT adalah aset digital unik.",
"Layer 1 adalah blockchain utama.",
"Layer 2 meningkatkan efisiensi.",
"Gas fee adalah biaya transaksi.",
"Wallet menyimpan aset crypto.",
"Private key sangat penting.",
"Cold wallet lebih aman.",
"Hot wallet lebih praktis.",
"Exchange centralized lebih mudah.",
"DEX lebih desentralisasi.",
"Slippage mempengaruhi entry.",
"Order book menunjukkan likuiditas.",
"Spread mempengaruhi biaya trading.",
"Scalping butuh fokus tinggi.",
"Swing trading lebih santai.",
"Position trading jangka panjang.",
"Market manipulasi sering terjadi.",
"Liquidity grab sering sebelum reversal.",
"Smart money bergerak diam-diam.",
"Retail sering jadi korban.",
"Kesabaran adalah kunci profit.",

/* ===== FOREX (51–100) ===== */
"Forex adalah pasar terbesar dunia.",
"Pair major memiliki likuiditas tinggi.",
"EURUSD paling sering diperdagangkan.",
"USD adalah mata uang utama.",
"Interest rate mempengaruhi forex.",
"Inflasi mempengaruhi nilai mata uang.",
"NFP berdampak besar ke market.",
"CPI penting untuk analisa USD.",
"XAUUSD berkorelasi dengan USD.",
"DXY menunjukkan kekuatan dolar.",
"Trendline membantu analisa.",
"Support resistance penting.",
"Liquidity zone adalah area penting.",
"Break structure tanda perubahan trend.",
"Fake breakout sering terjadi.",
"Stop hunting sering dilakukan market.",
"Risk management wajib.",
"Lot size menentukan risiko.",
"Leverage harus hati-hati.",
"Margin call bisa menghabiskan akun.",
"Spread adalah biaya trading.",
"Slippage bisa terjadi saat news.",
"News trading berisiko tinggi.",
"Scalping butuh cepat.",
"Swing trading lebih stabil.",
"Position trading jangka panjang.",
"Session London paling aktif.",
"Session New York volatil tinggi.",
"Session Asia cenderung sepi.",
"Overtrading adalah kesalahan.",
"Revenge trading berbahaya.",
"Disiplin lebih penting dari strategi.",
"Jurnal trading membantu evaluasi.",
"Backtest meningkatkan akurasi.",
"Forward test validasi strategi.",
"Psychology menentukan hasil.",
"Loss adalah bagian trading.",
"Profit konsisten lebih penting.",
"RR ratio minimal 1:2.",
"Entry harus punya alasan.",
"Jangan entry random.",
"Setup harus jelas.",
"Konfirmasi meningkatkan winrate.",
"Trend friend trader.",
"Counter trend lebih berisiko.",
"Patience adalah edge.",
"Timing entry penting.",
"Exit sama pentingnya.",
"Market tidak bisa ditebak.",
"Probabilitas adalah kunci.",

/* ===== SAHAM (101–150) ===== */
"Saham adalah kepemilikan perusahaan.",
"Fundamental penting untuk investasi.",
"Revenue menunjukkan pendapatan.",
"Net profit menunjukkan laba.",
"PER menentukan valuasi.",
"PBV menunjukkan nilai buku.",
"ROE menunjukkan efisiensi.",
"Debt ratio menunjukkan risiko.",
"Dividen memberi income.",
"Blue chip lebih stabil.",
"Growth stock lebih agresif.",
"Value stock undervalued.",
"Market sentiment mempengaruhi harga.",
"Bandar bisa menggerakkan saham.",
"Volume penting dalam saham.",
"Breakout sering terjadi.",
"Support resistance berlaku juga.",
"Trend naik lebih aman.",
"Sideways menunggu momentum.",
"IPO bisa hype tinggi.",
"Overvalued berisiko turun.",
"Undervalued peluang naik.",
"Analisa teknikal membantu timing.",
"Analisa fundamental untuk jangka panjang.",
"Buy low sell high prinsip dasar.",
"Cut loss penting.",
"Averaging harus hati-hati.",
"Diversifikasi mengurangi risiko.",
"Sektor mempengaruhi performa.",
"Makro ekonomi penting.",
"Suku bunga mempengaruhi saham.",
"Inflasi mempengaruhi daya beli.",
"Global market berpengaruh.",
"Sentimen berita penting.",
"Investor institusi kuat.",
"Retail sering emosional.",
"Kesabaran penting.",
"Jangan ikut-ikutan.",
"Strategi harus jelas.",
"Long term lebih aman.",
"Trading saham lebih sulit.",
"Likuiditas penting.",
"Spread mempengaruhi entry.",
"Timing sangat penting.",
"Profit konsisten tujuan utama.",
"Disiplin penting.",
"Emosi harus dikontrol.",
"Plan harus diikuti.",
"Evaluasi rutin penting.",
"Konsistensi adalah kunci.",

/* ===== PSYCHOLOGY (151–200) ===== */
"Trading adalah game mental.",
"Emosi adalah musuh utama.",
"Fear membuat salah keputusan.",
"Greed membuat overtrade.",
"Disiplin lebih penting.",
"Konsistensi tujuan utama.",
"Loss adalah normal.",
"Profit tidak selalu.",
"Mindset harus kuat.",
"Fokus proses bukan hasil.",
"Jangan balas dendam market.",
"Sabar menunggu setup.",
"Jangan FOMO.",
"Jangan panic sell.",
"Confidence penting.",
"Overconfidence berbahaya.",
"Plan harus diikuti.",
"Jangan ubah strategi tiba-tiba.",
"Evaluasi penting.",
"Jurnal membantu.",
"Self control penting.",
"Stop loss harus dipakai.",
"Take profit harus jelas.",
"Target realistis.",
"Jangan terlalu ambisius.",
"Proses butuh waktu.",
"Tidak ada sukses instan.",
"Belajar terus.",
"Adaptasi penting.",
"Market berubah.",
"Strategi harus fleksibel.",
"Mindset probabilitas.",
"Tidak semua trade profit.",
"Accept loss.",
"Focus long term.",
"Disiplin harian.",
"Kontrol emosi.",
"Jangan terlalu banyak indikator.",
"Sederhana lebih baik.",
"Kualitas lebih penting dari kuantitas.",
"1 setup cukup.",
"Jangan overthinking.",
"Trust your system.",
"Evaluate performance.",
"Upgrade skill.",
"Konsisten latihan.",
"Jangan bandingkan diri.",
"Fokus diri sendiri.",
"Growth mindset penting.",
"Kesuksesan butuh proses."

];

/* RENDER */
function renderAll(){
let html = "<h1>200 MATERI RHN CAPITAL</h1>"

materi.forEach((m,i)=>{
html += `
<div class="card">
<h2>Materi ${i+1}</h2>
<p>${m}</p>
</div>
`
})

document.getElementById("app").innerHTML = html
}

/* INIT */
renderAll()

</script>

</body>
</html>
