let selectedRole = "siswa";
let currentStudentTab = "home";
let currentTeacherTab = "overview";

function showView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById(viewId);
  if (target) target.classList.add("active");
  window.scrollTo({top: 0, behavior: "smooth"});
}

function selectRole(role) {
  selectedRole = role;
  document.getElementById("studentRole").classList.toggle("selected", role === "siswa");
  document.getElementById("teacherRole").classList.toggle("selected", role === "guru");
}

function enterApp() {
  const name = document.getElementById("demoName").value.trim() || (selectedRole === "siswa" ? "Siswa" : "Guru");
  if (selectedRole === "siswa") {
    document.getElementById("studentGreeting").textContent = name.split(" ")[0];
    document.getElementById("studentSideName").textContent = name;
    showView("student");
  } else {
    document.getElementById("teacherSideName").textContent = name;
    showView("teacher");
  }
}

function studentTab(tab, button) {
  currentStudentTab = tab;
  document.querySelectorAll("#student .side-link").forEach(el => el.classList.remove("active"));
  if (button) button.classList.add("active");
  const content = document.getElementById("studentContent");
  if (tab === "home") {
    location.reload();
    return;
  }
  const pages = {
    task: `<button class="back-link" onclick="studentTab('home')">← Kembali ke beranda</button><span class="eyebrow">TUGAS AKTIF</span><h1 class="page-title">Tugasku</h1><p class="page-subtitle">Lanjutkan proses belajar yang sedang kamu kerjakan.</p><div class="task-list-card"><div class="task-list-icon">✎</div><div class="task-list-info"><span class="pill green-pill">Sedang berjalan</span><h3>Teks Argumentasi: Penggunaan AI dalam Pendidikan</h3><p>Bahasa Indonesia · Tugas 3 · Tenggat 12 November 2026</p><div class="task-mini-progress"><span></span></div><small>Pos 1 dari 3 · Jejak</small></div><button class="btn btn-primary-custom btn-sm" onclick="openStage('jejak')">Lanjutkan →</button></div>`,
    history: `<button class="back-link" onclick="studentTab('home')">← Kembali ke beranda</button><span class="eyebrow">CATATAN PERJALANAN</span><h1 class="page-title">Riwayat belajarku</h1><p class="page-subtitle">Lihat kembali langkah-langkah yang sudah kamu lalui.</p><div class="history-card"><div class="history-date">05 NOV 2026</div><div class="history-line"><b>Draft 1 dibuat</b><small>Menuliskan gagasan awal tentang penggunaan AI dalam pendidikan.</small></div><div class="history-line"><b>Revisi 2 disimpan</b><small>Menambahkan data survei untuk memperkuat argumen.</small></div><div class="history-line"><b>Tanda bantuan AI ditambahkan</b><small>Satu bagian ditandai dan saran AI diubah sesuai sumber.</small></div></div>`
  };
  content.innerHTML = pages[tab] || pages.home;
}

function openStage(stage) {
  const content = document.getElementById("studentContent");
  const back = `<button class="back-link" onclick="studentTab('home')">← Kembali ke perjalanan</button>`;
  if (stage === "jejak") {
    content.innerHTML = `${back}<span class="eyebrow">POS 01 · DOKUMENTASI PROSES</span><h1 class="page-title">Jejak ide dan tulisanmu.</h1><p class="page-subtitle">Tidak perlu langsung sempurna. Mulai dari apa yang kamu pikirkan.</p><div class="workspace-grid"><section class="workspace-card"><div class="workspace-head"><div><span class="pill green-pill">Draft aktif</span><h3>Penggunaan AI dalam Pendidikan</h3></div><span class="autosave">● Tersimpan di demo</span></div><label class="form-label">Tuliskan draf atau revisimu</label><textarea class="form-control custom-input writing-area" id="draftText">Penggunaan AI semakin dekat dengan kehidupan pelajar. Teknologi ini dapat membantu menemukan informasi dan menyusun ide, tetapi pemahaman tetap perlu dibangun melalui proses berpikir sendiri.</textarea><div class="revision-box"><b>◷ Riwayat proses</b><div class="revision-item"><span>Draft 1</span><small>Gagasan awal masih umum</small></div><div class="revision-item"><span>Revisi 2</span><small>Menambahkan data survei</small></div><div class="revision-item"><span>Revisi 3</span><small>Menyesuaikan argumen dan sumber</small></div></div></section><aside class="workspace-card aid-card"><span class="eyebrow">TRANSPARANSI PENGGUNAAN AI</span><h3>Apakah kamu menggunakan bantuan AI?</h3><p>Tandai jika ada bagian tulisan yang mendapat bantuan AI.</p><div class="ai-form-group"><label class="check-line" for="aiUsed"><input type="checkbox" id="aiUsed"><span>Saya menggunakan bantuan AI</span></label><div class="ai-decision-field"><label class="form-label" for="aiDecision">Keputusan terhadap saran AI</label><select class="form-select custom-input" id="aiDecision"><option>Mengubah saran AI</option><option>Menerima saran AI</option><option>Menolak saran AI</option></select></div><div class="ai-reason-field"><label class="form-label" for="aiReason">Apa alasanmu?</label><textarea class="form-control custom-input" id="aiReason" rows="3" placeholder="Contoh: Saran tersebut kurang sesuai dengan sumber yang saya gunakan."></textarea></div></div><button class="btn btn-primary-custom w-100 mt-3" onclick="demoNotice('Catatan Jejak berhasil disimpan dalam simulasi.')">Simpan jejak <span>→</span></button></aside></div>`;
  } else if (stage === "jeda") {
    content.innerHTML = `${back}<span class="eyebrow">POS 02 · REFLEKSI DIRI</span><h1 class="page-title">Ambil jeda sejenak.</h1><p class="page-subtitle">Refleksi membantumu mengenali apa yang sudah dan belum dipahami.</p><div class="reflection-layout"><section class="workspace-card"><div class="question-block"><span>01</span><div><b>Apa hal paling penting yang kamu pelajari dari tugas ini?</b><textarea class="form-control custom-input mt-2" rows="3" placeholder="Ceritakan dengan kata-katamu sendiri..."></textarea></div></div><div class="question-block"><span>02</span><div><b>Bagian mana yang paling menantang? Mengapa?</b><textarea class="form-control custom-input mt-2" rows="3" placeholder="Tuliskan bagian yang membuatmu berpikir..."></textarea></div></div><div class="question-block"><span>03</span><div><b>Apa yang akan kamu perbaiki jika mengerjakan tugas serupa?</b><textarea class="form-control custom-input mt-2" rows="3" placeholder="Rencanakan langkah berikutnya..."></textarea></div></div><button class="btn btn-primary-custom" onclick="demoNotice('Refleksi tersimpan dalam simulasi.')">Simpan refleksi →</button></section><aside class="workspace-card guide-card"><span class="guide-avatar">✳</span><span class="eyebrow">PEMANDU REFLEKSI</span><h3>Aku di sini untuk membantumu berpikir.</h3><p>Pemandu tidak memberikan jawaban. Ia hanya mengajukan pertanyaan agar kamu menemukan pemahamanmu sendiri.</p><div class="guide-question" id="guideQuestion">Apa alasanmu memilih contoh tersebut dibandingkan contoh yang lain?</div><button class="btn btn-soft w-100" onclick="nextPrompt()">Pertanyaan lain ↻</button><small class="guide-rule">Pemandu bertanya, kamu yang menemukan jawabannya.</small></aside></div>`;
  } else {
    content.innerHTML = `${back}<span class="eyebrow">POS 03 · VERIFIKASI PEMAHAMAN</span><h1 class="page-title">Sekarang, ceritakan pemahamanmu.</h1><p class="page-subtitle">Jawab berdasarkan tugas yang sudah kamu kerjakan, tanpa bantuan AI.</p><div class="quiz-card"><div class="quiz-top"><span class="pill green-pill">Simulasi uji mikro</span><span class="timer" id="timer">05:00</span></div><p class="quiz-instruction">Waktu pengerjaan lima menit. Jawaban tidak harus panjang, yang penting menunjukkan pemahamanmu.</p><div class="quiz-question"><b>01</b><div><strong>Mengapa kamu memilih data atau contoh tersebut untuk mendukung argumenmu?</strong><textarea class="form-control custom-input mt-3" rows="3" placeholder="Jelaskan alasanmu..."></textarea></div></div><div class="quiz-question"><b>02</b><div><strong>Jelaskan hubungan antara dua gagasan utama dalam tulisanmu dengan kata-katamu sendiri.</strong><textarea class="form-control custom-input mt-3" rows="3" placeholder="Coba jelaskan pemahamanmu..."></textarea></div></div><button class="btn btn-primary-custom" onclick="demoNotice('Jawaban uji mikro terkirim dalam simulasi.')">Kirim jawaban →</button><p class="quiz-disclaimer">Hasil uji mikro merupakan petunjuk pemahaman, bukan satu-satunya penentu nilai.</p></div>`;
    startTimer();
  }
}

const prompts = ["Apa alasanmu memilih contoh tersebut dibandingkan contoh yang lain?","Bagian mana dari argumenmu yang paling ingin kamu pertahankan? Mengapa?","Adakah sudut pandang lain yang belum kamu pertimbangkan?","Apa yang berubah dari pemikiran awalmu setelah melakukan revisi?"];
let promptIndex = 0;
function nextPrompt(){promptIndex=(promptIndex+1)%prompts.length;const el=document.getElementById("guideQuestion");if(el)el.textContent=prompts[promptIndex];}
let timerInterval;
function startTimer(){clearInterval(timerInterval);let seconds=300;timerInterval=setInterval(()=>{seconds--;const el=document.getElementById("timer");if(!el){clearInterval(timerInterval);return;}el.textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;if(seconds<=0)clearInterval(timerInterval);},1000);}
function demoNotice(message){alert(message+" (Data tidak dikirim ke server.)");}

function teacherTab(tab, button){
  currentTeacherTab=tab;
  document.querySelectorAll("#teacher .side-link").forEach(el=>el.classList.remove("active"));
  if(button)button.classList.add("active");
  const content=document.getElementById("teacherContent");
  if(tab==="overview"){location.reload();return;}
  if(tab==="students"){
    content.innerHTML=`<button class="back-link" onclick="teacherTab('overview')">← Kembali ke ringkasan</button><span class="eyebrow">RUANG GURU / DATA SISWA</span><h1 class="page-title">Perjalanan setiap siswa</h1><p class="page-subtitle">Tinjau jejak proses dan temukan siswa yang membutuhkan pendampingan.</p><section class="panel"><div class="table-responsive"><table class="table align-middle student-table"><thead><tr><th>SISWA</th><th>JEJAK</th><th>JEDA</th><th>UJI</th><th>KESENJANGAN</th><th>AKSI</th></tr></thead><tbody>${[['Alya Putri','Lengkap','Lengkap','85','3','green'],['Bagas R.','Revisi','Lengkap','70','12','orange'],['Citra N.','Jejak tipis','Kosong','48','37','red'],['Dimas A.','Lengkap','Singkat','80','8','orange'],['Elsa P.','Lengkap','Lengkap','55','30','red']].map(s=>`<tr><td><b>${s[0]}</b><small>XI A</small></td><td><span class="pill ${s[5]==='green'?'green-pill':s[5]==='red'?'red-pill':'orange-pill'}">${s[1]}</span></td><td>${s[2]}</td><td>${s[3]}</td><td><b>${s[4]} poin</b></td><td><button class="detail-btn" onclick="showStudentDetail('${s[0]}')">Lihat detail</button></td></tr>`).join('')}</tbody></table></div><p class="table-note">Seluruh nama dan nilai pada tabel merupakan data ilustrasi.</p></section>`;
  }else{
    content.innerHTML=`<button class="back-link" onclick="teacherTab('overview')">← Kembali ke ringkasan</button><span class="eyebrow">RUANG GURU / INSIGHT BELAJAR</span><h1 class="page-title">Insight perjalanan kelas</h1><p class="page-subtitle">Ringkasan untuk membantu guru menentukan arah pendampingan.</p><div class="insight-grid"><section class="panel"><span class="eyebrow">PENYELESAIAN TIGA POS</span><h2 class="insight-number">22 <small>dari 32 siswa</small></h2><div class="bar-track"><span style="width:69%"></span></div><p class="muted">Data ilustrasi penyelesaian seluruh tahapan.</p></section><section class="panel"><span class="eyebrow">KESENJANGAN PAHAM</span><h2 class="insight-number">14 <small>poin rata-rata</small></h2><p class="muted">Selisih antara nilai tugas dan hasil uji mikro pada data simulasi.</p></section></div><section class="panel mt-3"><h2 class="panel-title">Catatan interpretasi</h2><p class="muted">Indikator digunakan sebagai penunjuk arah pendampingan. Guru tetap perlu membaca konteks, riwayat proses, dan jawaban siswa sebelum mengambil keputusan penilaian.</p></section>`;
  }
}

function showStudentDetail(name){
  document.getElementById("detailTitle").textContent=name;
  document.getElementById("detailBody").innerHTML=`<p class="muted">Ringkasan data ilustrasi perjalanan belajar.</p><div class="detail-row"><span>Pos 1 · Jejak</span><span>Perlu ditinjau</span></div><div class="detail-row"><span>Pos 2 · Jeda</span><span>Belum lengkap</span></div><div class="detail-row"><span>Pos 3 · Uji mikro</span><span>48 / 100</span></div><div class="detail-row"><span>Kesenjangan Paham</span><span>37 poin</span></div><div class="detail-row"><span>Saran pendampingan</span><span>Diskusikan alasan dan argumen</span></div><p class="muted mt-3 mb-0">Data ini hanya contoh tampilan. Keputusan akhir tetap berada pada guru.</p>`;
  bootstrap.Modal.getOrCreateInstance(document.getElementById("detailModal")).show();
}
