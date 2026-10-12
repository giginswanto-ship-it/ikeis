/**
 * PORTAL IKEIS (Ikatan Keluarga Islam Simalungun) - JABODETABEK
 * JavaScript Application Logic & Interactive Features
 */

// 1. DATA MASTER KECAMATAN SIMALUNGUN (32 KECAMATAN LENGKAP)
const KECAMATAN_SIMALUNGUN = [
  "Bandar", "Bandar Huluan", "Bandar Masilam", "Bosar Maligas", 
  "Dolog Masagal", "Dolok Batu Nanggar", "Dolok Panribuan", "Dolok Pardamean", 
  "Dolok Silau", "Girsang Sipangan Bolon", "Gunung Malela", "Gunung Maligas", 
  "Haranggaol Horison", "Hatonduhan", "Huta Bayu Raja", "Jawa Maraja Bah Jambi", 
  "Jorlang Hataran", "Panei", "Panombeian Panei", "Pematang Bandar", 
  "Pematang Sidamanik", "Pematang Silimahuta", "Purba", "Raya", 
  "Raya Kahean", "Siantar", "Sidamanik", "Silimakuta", 
  "Silou Kahean", "Tanah Jawa", "Tapian Dolok", "Ujung Padang"
];

// WILAYAH JABODETABEK
const WILAYAH_JABODETABEK = [
  "Jakarta Selatan", "Jakarta Timur", "Jakarta Pusat", "Jakarta Barat", "Jakarta Utara",
  "Kota Bogor", "Kabupaten Bogor", "Kota Depok", 
  "Kota Tangerang", "Kota Tangerang Selatan", "Kabupaten Tangerang", 
  "Kota Bekasi", "Kabupaten Bekasi"
];

// 2. DATA DEMOGRAFI BPS & DITJEN DUKCAPIL KEMENDAGRI (DARI DOKUMEN RESMI)
const DATA_DEMOGRAFI = {
  totalPopulasi: "± 1.060.000 Jiwa (1,06 Juta)",
  persentaseIslam: 56.77,
  jiwaIslam: "± 605.000 Jiwa",
  jumlahKecamatan: 32,
  distribusiAgama: [
    { agama: "Islam", persentase: 56.77, keterangan: "Batak Simalungun Muslim, Jawa, Minang, Melayu, Mandailing", warna: "#991b1b" },
    { agama: "Kristen Protestan", persentase: 37.14, keterangan: "Tersebar di wilayah tengah, dataran tinggi, sentra adat", warna: "#0f172a" },
    { agama: "Katolik", persentase: 5.64, keterangan: "Komunitas jemaat paroki di berbagai kecamatan", warna: "#475569" },
    { agama: "Buddha", persentase: 0.22, keterangan: "Kawasan pemukiman perdagangan perkotaan", warna: "#d97706" },
    { agama: "Hindu & Konghucu", persentase: 0.07, keterangan: "Komunitas etnis & diaspora keagamaan minoritas", warna: "#94a3b8" },
    { agama: "Ugamo Malim / Lainnya", persentase: 0.01, keterangan: "Penghayat ajaran kepercayaan leluhur nusantara", warna: "#cbd5e1" }
  ],
  sentraMuslim: [
    { nama: "Kec. Siantar", konsentrasi: "Sangat Tinggi (Penyangga Perkotaan)" },
    { nama: "Kec. Tapian Dolok", konsentrasi: "Sangat Tinggi (Jalur Lintas & Perkebunan)" },
    { nama: "Kec. Bandar (Perdagangan)", konsentrasi: "Sangat Tinggi (Sentra Niaga Perkebunan)" },
    { nama: "Kec. Bosar Maligas", konsentrasi: "Tinggi (Agrikultur & Transmigrasi)" },
    { nama: "Kec. Gunung Malela", konsentrasi: "Tinggi (Kultural & Perkebunan)" },
    { nama: "Kec. Ujung Padang", konsentrasi: "Mayoritas Kuat (Pesisir & Dataran Rendah)" }
  ]
};

// 3. SEED DATA ANGGOTA IKEIS JABODETABEK
const SEED_MEMBERS = [
  {
    id: "IKEIS-JBD-2026-001",
    nama: "H. Zulkifli Damanik, S.E., M.M.",
    marga: "Damanik",
    jenisKelamin: "Laki-laki",
    domisili: "Jakarta Selatan",
    alamat: "Jl. Tebet Barat Dalam No. 18, Tebet",
    kecamatanAsal: "Tapian Dolok",
    nagoriAsal: "Nagori Sinaksak",
    profesi: "Konsultan Bisnis & Wiraswasta",
    telepon: "081289112233",
    email: "zulkifli.damanik@gmail.com",
    bidangMinat: "Ekonomi & Usaha Komunitas",
    tanggalGabung: "2024-01-15",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-002",
    nama: "Dr. Hj. Nurasyiah Saragih, M.Pd.",
    marga: "Saragih Garingging",
    jenisKelamin: "Perempuan",
    domisili: "Kota Depok",
    alamat: "Pesona Depok Estate Blok B3, Sukmajaya",
    kecamatanAsal: "Raya",
    nagoriAsal: "Pamatang Raya",
    profesi: "Dosen & Peneliti Pendidikan",
    telepon: "081377889900",
    email: "nurasyiah.saragih@univ.ac.id",
    bidangMinat: "Pendidikan & Pembinaan Generasi Muda",
    tanggalGabung: "2024-02-10",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-003",
    nama: "M. Faisal Purba, S.T.",
    marga: "Purba Dasuha",
    jenisKelamin: "Laki-laki",
    domisili: "Kota Bekasi",
    alamat: "Harapan Indah Regency Blok CF No. 12",
    kecamatanAsal: "Bandar",
    nagoriAsal: "Perdagangan I",
    profesi: "Senior Software Engineer",
    telepon: "081765432100",
    email: "faisal.purba@techcorp.id",
    bidangMinat: "Media, IT & Hubungan Masyarakat",
    tanggalGabung: "2024-03-01",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-004",
    nama: "Ustadz H. Ahmad Ridwan Sinaga, Lc.",
    marga: "Sinaga Dadihur",
    jenisKelamin: "Laki-laki",
    domisili: "Jakarta Timur",
    alamat: "Kavling DKI Pondok Kelapa, Duren Sawit",
    kecamatanAsal: "Gunung Malela",
    nagoriAsal: "Nagori Senio",
    profesi: "Dai / Pengajar Pondok Pesantren",
    telepon: "082199001122",
    email: "ahmad.sinaga.lc@gmail.com",
    bidangMinat: "Dakwah & Kajian Fiqih Keislaman",
    tanggalGabung: "2024-01-20",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-005",
    nama: "dr. Siti Rahmah Lubis Damanik, Sp.A",
    marga: "Lubis / Suami Damanik",
    jenisKelamin: "Perempuan",
    domisili: "Kota Tangerang Selatan",
    alamat: "BSD City, Cluster Foresta Blok B8, Serpong",
    kecamatanAsal: "Siantar",
    nagoriAsal: "Dolok Marlawan",
    profesi: "Dokter Spesialis Anak",
    telepon: "081123456789",
    email: "dr.siti.rahmah@hospital.id",
    bidangMinat: "Kesehatan & Bakti Sosial",
    tanggalGabung: "2024-04-12",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-006",
    nama: "Bambang Suhendra Purba, S.H.",
    marga: "Purba Tambak",
    jenisKelamin: "Laki-laki",
    domisili: "Kota Bogor",
    alamat: "Villa Indah Pajajaran, Bogor Timur",
    kecamatanAsal: "Bosar Maligas",
    nagoriAsal: "Nagori Marihat Tanjung",
    profesi: "Advokat & Konsultan Hukum",
    telepon: "081512345670",
    email: "bambang.purba.law@gmail.com",
    bidangMinat: "Advokasi & Bantuan Hukum Warga",
    tanggalGabung: "2024-05-02",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-007",
    nama: "Rahmad Hidayat Sinaga",
    marga: "Sinaga",
    jenisKelamin: "Laki-laki",
    domisili: "Kota Tangerang",
    alamat: "Moderland Townhouse Blok C5, Cipondoh",
    kecamatanAsal: "Ujung Padang",
    nagoriAsal: "Nagori Huta Parik",
    profesi: "Pengusaha Logistik & Ekspedisi",
    telepon: "081299887766",
    email: "rahmad.logistik@gmail.com",
    bidangMinat: "Sosial & Kas Kemalangan",
    tanggalGabung: "2024-05-20",
    status: "Aktif"
  },
  {
    id: "IKEIS-JBD-2026-008",
    nama: "Fatimah Zahra Saragih",
    marga: "Saragih Simarmata",
    jenisKelamin: "Perempuan",
    domisili: "Jakarta Pusat",
    alamat: "Cempaka Putih Timur VII No. 9",
    kecamatanAsal: "Tanah Jawa",
    nagoriAsal: "Balimbingan",
    profesi: "Mahasiswi Pascasarjana & Pegiat Budaya",
    telepon: "087812344321",
    email: "fatimah.saragih@student.ac.id",
    bidangMinat: "Generasi Muda & Budaya Simalungun",
    tanggalGabung: "2024-06-11",
    status: "Aktif"
  }
];

// 4. SEED DATA FORUM & DINDING SILATURAHMI UKHUWAH
const SEED_FORUM = [
  {
    id: "post-1",
    author: "H. Zulkifli Damanik",
    korwil: "Jakarta Selatan",
    kategori: "Kabar Komunitas",
    waktu: "10 jam yang lalu",
    judul: "Kabar Duka & Silaturahmi Takziah Warga Asal Tapian Dolok",
    isi: "Innalillahi wa inna ilaihi raji'un. Telah berpulang ke rahmatullah Bapak Arman Saragih (68 thn), orang tua dari saudara kita Ir. Hendra Saragih di Jatibening, Bekasi. Almarhum dikebumikan ba'da Ashar di TPU Selapajang. IKEIS Jabodetabek telah menyalurkan santunan duka dari Kas Solidaritas. Mohon doa dan takziah ukhuwah dari seluruh dongan tubu.",
    likes: 24,
    replies: [
      { author: "M. Faisal Purba", waktu: "8 jam yang lalu", pesan: "Turut berduka cita mendalam. Semoga almarhum husnul khatimah dan keluarga ditabahkan. Aamiin." },
      { author: "Ustadz H. Ahmad Ridwan Sinaga", waktu: "7 jam yang lalu", pesan: "Allahummaghfirlahu warhamhu wa'afihi wa'fu 'anhu. Insya Allah malam ini kita bacakan tahlil dan doa bersama via Zoom." }
    ]
  },
  {
    id: "post-2",
    author: "Dr. Hj. Nurasyiah Saragih",
    korwil: "Kota Depok",
    kategori: "Agenda Pengajian",
    waktu: "1 hari yang lalu",
    judul: "Pengajian Bulanan & Temu Kangen Warga IKEIS Jabodetabek di TMII",
    isi: "Assalamu'alaikum wr. wb. Dongan sabutuha, tondong, boru, panogolan na hinormatan. Kami mengundang seluruh keluarga besar IKEIS Jabodetabek dalam pengajian rutin dwi-mingguan yang insya Allah diadakan Ahad mendatang di Aula Masjid Pangeran Diponegoro TMII. Akan ada kultum keislaman, silaturahmi perantau, serta jamuan masakan halal khas kampung halaman (Dayok Binatur & Tinuktuk halal). Mari bawa putra-putri kita agar mengenal sanak saudara se-tanoh Hatubuan!",
    likes: 38,
    replies: [
      { author: "dr. Siti Rahmah Lubis", waktu: "20 jam yang lalu", pesan: "Insya Allah rombongan dari Tangerang Selatan dan Bintaro akan hadir 2 mobil. Horas ukhuwah!" }
    ]
  },
  {
    id: "post-3",
    author: "Rahmad Hidayat Sinaga",
    korwil: "Kota Tangerang",
    kategori: "Info Usaha / UMKM",
    waktu: "2 hari yang lalu",
    judul: "Penyediaan Rempah & Bahan Khas Simalungun Halal untuk Wilayah Jabodetabek",
    isi: "Horas dongan sahundulan! Bagi ibu-ibu atau keluarga yang rindu bumbu Tinuktuk khas Simalungun asli dari Raya & Siantar, atau membutuhkan kopi Sidamanik halal dan beras Ramos asli Simalungun di Jabodetabek, toko berkah kami di Cipondoh siap mengantar atau kirim via Gojek/Paxlov. Khusus anggota IKEIS ada diskon silaturahmi 15%! Silakan japri.",
    likes: 19,
    replies: [
      { author: "Fatimah Zahra Saragih", waktu: "1 hari yang lalu", pesan: "Alhamdulillah sangat membantu uda, kemarin cari Tinuktuk asli susah sekali di Jakarta Pusat. Segera order!" }
    ]
  }
];

// 5. SEED DATA AGENDA KEGIATAN
const SEED_AGENDA = [
  {
    id: "agenda-1",
    judul: "Pengajian Rutin & Silaturahmi Ukhuwah IKEIS Jabodetabek",
    tanggal: "Ahad, 25 Oktober 2026",
    jam: "09.00 - 12.30 WIB",
    lokasi: "Aula Masjid Agung At-Tin, TMII, Jakarta Timur",
    penceramah: "Ustadz H. Ahmad Ridwan Sinaga, Lc.",
    tema: "Menguatkan Nilai 'Habonaron Do Bona' dalam Kehidupan Muslim Modern di Perantauan",
    pesertaTerdaftar: 64,
    status: "Membuka RSVP"
  },
  {
    id: "agenda-2",
    judul: "Kajian Fiqih Muamalah & Temu Pengusaha Muslim Simalungun",
    tanggal: "Sabtu, 7 November 2026",
    jam: "13.30 - 16.00 WIB",
    lokasi: "Gedung Pertemuan Graha Wisata Ragunan, Jakarta Selatan",
    penceramah: "Dewan Pakar Ekonomi Syariah & Pengurus IKEIS",
    tema: "Sinergi Ekonomi Perantau: Membangun Koperasi dan Ekosistem Bisnis Warga",
    pesertaTerdaftar: 42,
    status: "Membuka RSVP"
  },
  {
    id: "agenda-3",
    judul: "Penyaluran Santunan Anak Yatim & Dhuafa Warga Simalungun",
    tanggal: "Jumat, 20 November 2026",
    jam: "Ba'da Shalat Ashar",
    lokasi: "Sekretariat IKEIS Jabodetabek & Serentak di 5 Korwil",
    penceramah: "Baitul Mal & Divisi Sosial IKEIS",
    tema: "Berbagi Kasih dan Berkah Ukhuwah untuk Sesama Perantau",
    pesertaTerdaftar: 85,
    status: "Donasi Dibuka"
  }
];

// =====================================================================
// STATE MANAGEMENT & LOCAL STORAGE
// =====================================================================

function getStoredMembers() {
  const data = localStorage.getItem("ikeis_members");
  if (!data) {
    localStorage.setItem("ikeis_members", JSON.stringify(SEED_MEMBERS));
    return SEED_MEMBERS;
  }
  return JSON.parse(data);
}

function saveMembers(members) {
  localStorage.setItem("ikeis_members", JSON.stringify(members));
}

function getStoredForum() {
  const data = localStorage.getItem("ikeis_forum");
  if (!data) {
    localStorage.setItem("ikeis_forum", JSON.stringify(SEED_FORUM));
    return SEED_FORUM;
  }
  return JSON.parse(data);
}

function saveForum(forum) {
  localStorage.setItem("ikeis_forum", JSON.stringify(forum));
}

// =====================================================================
// INISIALISASI SAAT DOM READY
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  populateKecamatanDropdowns();
  populateWilayahDropdowns();
  initDemographyCharts();
  renderMembersDirectory();
  renderForumFeed();
  renderAgendaCards();
  initRegistrationForm();
  updateLiveStatsHeader();
});

// Populate Dropdown Kecamatan Simalungun (32 Kecamatan)
function populateKecamatanDropdowns() {
  const regSelect = document.getElementById("regKecamatan");
  const filterSelect = document.getElementById("filterKecamatan");

  if (regSelect) {
    KECAMATAN_SIMALUNGUN.forEach(kec => {
      const opt = document.createElement("option");
      opt.value = kec;
      opt.textContent = `Kecamatan ${kec}`;
      regSelect.appendChild(opt);
    });
  }

  if (filterSelect) {
    KECAMATAN_SIMALUNGUN.forEach(kec => {
      const opt = document.createElement("option");
      opt.value = kec;
      opt.textContent = `Asal Kec. ${kec}`;
      filterSelect.appendChild(opt);
    });
  }
}

// Populate Dropdown Wilayah Jabodetabek
function populateWilayahDropdowns() {
  const regDomisili = document.getElementById("regDomisili");
  const filterWilayah = document.getElementById("filterWilayah");

  if (regDomisili) {
    WILAYAH_JABODETABEK.forEach(wil => {
      const opt = document.createElement("option");
      opt.value = wil;
      opt.textContent = wil;
      regDomisili.appendChild(opt);
    });
  }

  if (filterWilayah) {
    WILAYAH_JABODETABEK.forEach(wil => {
      const opt = document.createElement("option");
      opt.value = wil;
      opt.textContent = `Domisili ${wil}`;
      filterWilayah.appendChild(opt);
    });
  }
}

// Update Live Stats
function updateLiveStatsHeader() {
  const members = getStoredMembers();
  const elMemberCount = document.getElementById("statTotalAnggota");
  if (elMemberCount) {
    elMemberCount.textContent = `${members.length} Warga`;
  }
}

// =====================================================================
// CHART DEMOGRAFI DARI DATA DOKUMEN RESMI (BPS & DUKCAPIL KEMENDAGRI)
// =====================================================================
let chartAgamaInstance = null;
let chartSentraInstance = null;

function initDemographyCharts() {
  // 1. Donut Chart Distribusi Agama
  const ctxAgama = document.getElementById("chartAgama");
  if (ctxAgama && typeof Chart !== "undefined") {
    if (chartAgamaInstance) chartAgamaInstance.destroy();

    const labels = DATA_DEMOGRAFI.distribusiAgama.map(item => item.agama);
    const dataValues = DATA_DEMOGRAFI.distribusiAgama.map(item => item.persentase);
    const bgColors = DATA_DEMOGRAFI.distribusiAgama.map(item => item.warna);

    chartAgamaInstance = new Chart(ctxAgama, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [{
          data: dataValues,
          backgroundColor: bgColors,
          borderWidth: 2,
          borderColor: "#ffffff",
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 14,
              padding: 12,
              font: {
                family: "'Plus Jakarta Sans', sans-serif",
                size: 11
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const item = DATA_DEMOGRAFI.distribusiAgama[context.dataIndex];
                return ` ${item.agama}: ${item.persentase}% (${item.keterangan})`;
              }
            }
          }
        },
        cutout: "68%"
      }
    });
  }

  // 2. Bar Chart Perbandingan Konsentrasi Wilayah Lumbung Muslim
  const ctxSentra = document.getElementById("chartSentra");
  if (ctxSentra && typeof Chart !== "undefined") {
    if (chartSentraInstance) chartSentraInstance.destroy();

    chartSentraInstance = new Chart(ctxSentra, {
      type: "bar",
      data: {
        labels: ["Ujung Padang", "Bandar", "Bosar Maligas", "Tapian Dolok", "Siantar", "Gunung Malela"],
        datasets: [{
          label: "Indeks Konsentrasi Muslim (%)",
          data: [82.4, 76.8, 74.2, 68.5, 65.3, 63.8],
          backgroundColor: "rgba(153, 27, 27, 0.88)",
          hoverBackgroundColor: "#7f1d1d",
          borderColor: "#991b1b",
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: value => value + "%"
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)"
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: context => ` Estimasi Konsentrasi Pemeluk: ${context.parsed.y}%`
            }
          }
        }
      }
    });
  }
}

// =====================================================================
// REGISTRASI ANGGOTA BARU & GENERATE KTA DIGITAL
// =====================================================================
function initRegistrationForm() {
  const form = document.getElementById("formRegistrasiAnggota");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("regNama").value.trim();
    const marga = document.getElementById("regMarga").value.trim();
    const jenisKelamin = document.querySelector('input[name="regGender"]:checked')?.value || "Laki-laki";
    const tempatLahir = document.getElementById("regTempatLahir").value.trim();
    const tanggalLahir = document.getElementById("regTanggalLahir").value;
    const domisili = document.getElementById("regDomisili").value;
    const alamat = document.getElementById("regAlamat").value.trim();
    const kecamatanAsal = document.getElementById("regKecamatan").value;
    const nagoriAsal = document.getElementById("regNagori").value.trim() || "-";
    const profesi = document.getElementById("regProfesi").value.trim();
    const telepon = document.getElementById("regTelepon").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const bidangMinat = document.getElementById("regBidangMinat").value;

    if (!nama || !marga || !domisili || !kecamatanAsal || !telepon) {
      alert("Mohon lengkapi kolom bertanda bintang (*)!");
      return;
    }

    const members = getStoredMembers();
    const nextSeq = String(members.length + 1).padStart(3, '0');
    const newId = `IKEIS-JBD-2026-${nextSeq}`;

    const newMember = {
      id: newId,
      nama: nama,
      marga: marga,
      jenisKelamin: jenisKelamin,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      domisili: domisili,
      alamat: alamat,
      kecamatanAsal: kecamatanAsal,
      nagoriAsal: nagoriAsal,
      profesi: profesi || "Warga Komunitas",
      telepon: telepon,
      email: email,
      bidangMinat: bidangMinat || "Ukhuwah & Silaturahmi",
      tanggalGabung: new Date().toISOString().split("T")[0],
      status: "Aktif"
    };

    members.unshift(newMember);
    saveMembers(members);

    // Refresh directory & stats
    renderMembersDirectory();
    updateLiveStatsHeader();

    // Trigger confetti effect if library exists
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }

    // Reset Form
    form.reset();

    // Render & Open KTA Modal
    showKtaModal(newMember, true);
  });
}

// =====================================================================
// MODAL KTA DIGITAL (KARTU TANDA ANGGOTA ELEKTRONIK)
// =====================================================================
function showKtaModal(member, isNew = false) {
  const modal = document.getElementById("modalKta");
  if (!modal) return;

  // Set data to modal KTA card
  document.getElementById("ktaCardNama").textContent = member.nama;
  document.getElementById("ktaCardId").textContent = member.id;
  document.getElementById("ktaCardMarga").textContent = member.marga;
  document.getElementById("ktaCardDomisili").textContent = member.domisili;
  document.getElementById("ktaCardAsal").textContent = `Kec. ${member.kecamatanAsal}${member.nagoriAsal && member.nagoriAsal !== '-' ? ' (' + member.nagoriAsal + ')' : ''}`;
  document.getElementById("ktaCardProfesi").textContent = member.profesi;
  document.getElementById("ktaCardTglGabung").textContent = member.tanggalGabung || "2026";
  
  // Title indicator
  const titleNotice = document.getElementById("ktaModalNotice");
  if (titleNotice) {
    if (isNew) {
      titleNotice.classList.remove("hidden");
      titleNotice.innerHTML = `
        <div class="p-3 bg-red-50 border border-red-200 text-red-900 rounded-lg text-sm mb-3">
          <span class="font-bold">Alhamdulillah! Pendaftaran Berhasil.</span><br/>
          Selamat bergabung dengan Ikatan Keluarga Islam Simalungun Jabodetabek. Berikut Kartu Tanda Anggota (KTA) Digital Anda.
        </div>
      `;
    } else {
      titleNotice.classList.add("hidden");
      titleNotice.innerHTML = "";
    }
  }

  // Setup WhatsApp share button
  const btnWaShare = document.getElementById("btnShareKtaWa");
  if (btnWaShare) {
    const waText = encodeURIComponent(
      `Horas! Saya telah resmi terdaftar sebagai anggota Ikatan Keluarga Islam Simalungun (IKEIS) Jabodetabek dengan No KTA: ${member.id}.\nNama: ${member.nama}\nAsal Simalungun: Kec. ${member.kecamatanAsal}\nDomisili: ${member.domisili}\nHabonaron Do Bona!`
    );
    btnWaShare.href = `https://api.whatsapp.com/send?text=${waText}`;
  }

  modal.classList.remove("hidden");
}

function closeKtaModal() {
  const modal = document.getElementById("modalKta");
  if (modal) modal.classList.add("hidden");
}

function printKtaCard() {
  window.print();
}

// =====================================================================
// DIREKTORI ANGGOTA JABODETABEK & FILTERING
// =====================================================================
function renderMembersDirectory() {
  const container = document.getElementById("membersGridContainer");
  const resultCount = document.getElementById("directoryResultCount");
  if (!container) return;

  const members = getStoredMembers();
  const searchInput = document.getElementById("searchMemberInput")?.value.toLowerCase().trim() || "";
  const filterWilayah = document.getElementById("filterWilayah")?.value || "";
  const filterKecamatan = document.getElementById("filterKecamatan")?.value || "";

  const filtered = members.filter(m => {
    const matchSearch = !searchInput || 
      m.nama.toLowerCase().includes(searchInput) ||
      m.marga.toLowerCase().includes(searchInput) ||
      m.profesi.toLowerCase().includes(searchInput) ||
      m.domisili.toLowerCase().includes(searchInput) ||
      m.kecamatanAsal.toLowerCase().includes(searchInput) ||
      m.nagoriAsal.toLowerCase().includes(searchInput);

    const matchWilayah = !filterWilayah || m.domisili === filterWilayah;
    const matchKecamatan = !filterKecamatan || m.kecamatanAsal === filterKecamatan;

    return matchSearch && matchWilayah && matchKecamatan;
  });

  if (resultCount) {
    resultCount.textContent = `Menampilkan ${filtered.length} dari ${members.length} Anggota Terdata`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h4 class="text-base font-semibold text-slate-800">Tidak ada anggota yang cocok</h4>
        <p class="text-sm text-slate-500 mt-1 max-w-md mx-auto">Coba ubah kata kunci pencarian atau sesuaikan pilihan filter wilayah domisili dan asal kecamatan.</p>
        <button onclick="resetDirectoryFilters()" class="mt-4 px-4 py-2 bg-red-800 text-white text-xs font-medium rounded-lg hover:bg-red-900 transition">
          Reset Filter Pencarian
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(m => {
    // Initials for avatar
    const initials = m.nama.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();

    return `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-600/40 transition-all p-5 flex flex-col justify-between group">
        <div>
          <!-- Header Card -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 via-red-950 to-slate-950 text-amber-300 font-bold flex items-center justify-center text-base shadow-sm shrink-0 border border-amber-400/40">
                ${initials}
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-base leading-snug group-hover:text-red-800 transition">${m.nama}</h4>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200/60">
                    Marga: ${m.marga}
                  </span>
                  <span class="text-xs text-slate-400 font-mono">${m.id}</span>
                </div>
              </div>
            </div>
            <span class="inline-block px-2 py-1 bg-red-50 text-red-800 border border-red-200/60 text-xs font-semibold rounded-full shrink-0">
              ${m.status || 'Aktif'}
            </span>
          </div>

          <!-- Metadata -->
          <div class="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-red-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span><strong>Domisili:</strong> ${m.domisili}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-red-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span><strong>Asal:</strong> Kec. ${m.kecamatanAsal} ${m.nagoriAsal && m.nagoriAsal !== '-' ? `(${m.nagoriAsal})` : ''}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span><strong>Profesi:</strong> ${m.profesi}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 flex items-center justify-between gap-2 mt-2">
          <button onclick="viewMemberKta('${m.id}')" class="flex-1 py-1.5 px-3 bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-800 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1.5 border border-slate-200">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
            KTA Digital
          </button>
          
          <a href="https://api.whatsapp.com/send?phone=${m.telepon ? m.telepon.replace(/^0/, '62') : ''}&text=${encodeURIComponent(`Assalamu'alaikum Uda/Inang/Bapa ${m.nama}, saya sesama anggota IKEIS Jabodetabek asal Simalungun...`)}" target="_blank" class="py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1.5 shadow-sm">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.053 1.343 1.849.528.47 1.077.674 1.279.76.202.086.319.072.435-.058.116-.13.491-.57.622-.765.13-.195.26-.162.434-.097.174.065 1.102.52 1.29.614.188.094.313.141.359.22.046.079.046.455-.098.86z"/></svg>
            Sapa WA
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function viewMemberKta(memberId) {
  const members = getStoredMembers();
  const found = members.find(m => m.id === memberId);
  if (found) {
    showKtaModal(found, false);
  }
}

function resetDirectoryFilters() {
  const searchInput = document.getElementById("searchMemberInput");
  const filterWilayah = document.getElementById("filterWilayah");
  const filterKecamatan = document.getElementById("filterKecamatan");

  if (searchInput) searchInput.value = "";
  if (filterWilayah) filterWilayah.value = "";
  if (filterKecamatan) filterKecamatan.value = "";

  renderMembersDirectory();
}

// Ekspor data direktori ke CSV
function exportDirectoryToCSV() {
  const members = getStoredMembers();
  if (members.length === 0) {
    alert("Tidak ada data anggota untuk diekspor!");
    return;
  }

  const headers = ["ID KTA", "Nama Lengkap", "Marga", "Jenis Kelamin", "Domisili Jabodetabek", "Alamat", "Kecamatan Asal Simalungun", "Nagori Asal", "Profesi", "Telepon/WA", "Email", "Bidang Minat", "Tanggal Bergabung"];
  
  const csvRows = [
    headers.join(","),
    ...members.map(m => [
      `"${m.id}"`,
      `"${m.nama.replace(/"/g, '""')}"`,
      `"${m.marga}"`,
      `"${m.jenisKelamin || ''}"`,
      `"${m.domisili}"`,
      `"${(m.alamat || '').replace(/"/g, '""')}"`,
      `"${m.kecamatanAsal}"`,
      `"${(m.nagoriAsal || '').replace(/"/g, '""')}"`,
      `"${(m.profesi || '').replace(/"/g, '""')}"`,
      `"${m.telepon}"`,
      `"${m.email || ''}"`,
      `"${m.bidangMinat || ''}"`,
      `"${m.tanggalGabung || ''}"`
    ].join(","))
  ];

  const blob = new Blob(["\uFEFF" + csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `IKEIS_Direktori_Anggota_Jabodetabek_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// =====================================================================
// FORUM & DINDING SILATURAHMI UKHUWAH
// =====================================================================
function renderForumFeed() {
  const container = document.getElementById("forumFeedContainer");
  if (!container) return;

  const forum = getStoredForum();

  container.innerHTML = forum.map(post => {
    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition">
        <!-- Post Header -->
        <div class="flex items-center justify-between gap-4 mb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-red-100 text-red-800 font-bold flex items-center justify-center text-sm border border-red-200">
              ${post.author.charAt(0)}
            </div>
            <div>
              <h5 class="font-bold text-slate-900 text-sm">${post.author}</h5>
              <div class="flex items-center gap-2 text-xs text-slate-500">
                <span>Korwil ${post.korwil}</span>
                <span>•</span>
                <span>${post.waktu}</span>
              </div>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${
            post.kategori.includes('Duka') ? 'bg-rose-50 text-rose-700 border border-rose-200' :
            post.kategori.includes('Agenda') ? 'bg-red-50 text-red-700 border border-red-200' :
            'bg-amber-50 text-amber-800 border border-amber-200'
          }">
            ${post.kategori}
          </span>
        </div>

        <!-- Post Content -->
        <h4 class="font-bold text-slate-900 text-base mb-2">${post.judul}</h4>
        <p class="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-4">${post.isi}</p>

        <!-- Actions & Replies Counter -->
        <div class="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
          <button onclick="likeForumPost('${post.id}')" class="flex items-center gap-1.5 text-slate-600 hover:text-red-700 font-medium transition">
            <svg class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a2 2 0 00-.8 1.4z"></path></svg>
            <span>Ukhuwah (${post.likes})</span>
          </button>
          <span class="text-slate-400">${post.replies?.length || 0} Tanggapan Silaturahmi</span>
        </div>

        <!-- Replies list -->
        ${post.replies && post.replies.length > 0 ? `
          <div class="mt-4 pt-3 border-t border-dashed border-slate-200 space-y-2.5">
            ${post.replies.map(rep => `
              <div class="p-3 bg-slate-50 rounded-xl text-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-slate-800">${rep.author}</span>
                  <span class="text-slate-400 text-[10px]">${rep.waktu}</span>
                </div>
                <p class="text-slate-600">${rep.pesan}</p>
              </div>
            `).join("")}
          </div>
        ` : ''}

        <!-- Quick Reply Box -->
        <div class="mt-3 flex gap-2">
          <input type="text" id="replyInput_${post.id}" placeholder="Tulis doa atau tanggapan ukhuwah..." class="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600" />
          <button onclick="submitForumReply('${post.id}')" class="px-3 py-1.5 bg-red-800 hover:bg-red-900 text-white text-xs font-semibold rounded-lg transition">Kirim</button>
        </div>
      </div>
    `;
  }).join("");
}

function likeForumPost(postId) {
  const forum = getStoredForum();
  const post = forum.find(p => p.id === postId);
  if (post) {
    post.likes = (post.likes || 0) + 1;
    saveForum(forum);
    renderForumFeed();
  }
}

function submitForumReply(postId) {
  const input = document.getElementById(`replyInput_${postId}`);
  if (!input || !input.value.trim()) return;

  const forum = getStoredForum();
  const post = forum.find(p => p.id === postId);
  if (post) {
    if (!post.replies) post.replies = [];
    post.replies.push({
      author: "Warga IKEIS (Anda)",
      waktu: "Baru saja",
      pesan: input.value.trim()
    });
    saveForum(forum);
    renderForumFeed();
  }
}

function submitNewForumPost(e) {
  e.preventDefault();
  const author = document.getElementById("postAuthor").value.trim();
  const korwil = document.getElementById("postKorwil").value;
  const kategori = document.getElementById("postKategori").value;
  const judul = document.getElementById("postJudul").value.trim();
  const isi = document.getElementById("postIsi").value.trim();

  if (!author || !judul || !isi) {
    alert("Mohon isi nama, judul, dan isi pesan ukhuwah!");
    return;
  }

  const forum = getStoredForum();
  const newPost = {
    id: `post-${Date.now()}`,
    author: author,
    korwil: korwil || "Jabodetabek",
    kategori: kategori || "Kabar Komunitas",
    waktu: "Baru saja",
    judul: judul,
    isi: isi,
    likes: 1,
    replies: []
  };

  forum.unshift(newPost);
  saveForum(forum);

  // Reset form
  document.getElementById("formNewForumPost").reset();
  renderForumFeed();
  alert("Pesan silaturahmi berhasil disiarkan di dinding ukhuwah!");
}

// =====================================================================
// AGENDA KEGIATAN & RSVP
// =====================================================================
function renderAgendaCards() {
  const container = document.getElementById("agendaCardsContainer");
  if (!container) return;

  container.innerHTML = SEED_AGENDA.map(ag => {
    return `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-1 bg-red-50 text-red-800 text-xs font-bold rounded-md border border-red-200">
              ${ag.status}
            </span>
            <span class="text-xs text-slate-500 font-medium flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-red-700" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
              ${ag.pesertaTerdaftar} Konfirmasi Hadir
            </span>
          </div>

          <h4 class="font-bold text-slate-900 text-lg leading-snug mb-3">${ag.judul}</h4>
          
          <div class="space-y-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-red-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <div><strong>Waktu:</strong> ${ag.tanggal} • ${ag.jam}</div>
            </div>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-rose-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              <div><strong>Tempat:</strong> ${ag.lokasi}</div>
            </div>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <div><strong>Tema / Bahasan:</strong> "${ag.tema}"</div>
            </div>
          </div>
        </div>

        <div class="p-6 pt-0">
          <button onclick="handleRsvpAgenda('${ag.id}', '${ag.judul}')" class="w-full py-2.5 px-4 bg-red-800 hover:bg-red-900 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Konfirmasi Hadir (RSVP)
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function handleRsvpAgenda(agendaId, agendaJudul) {
  const nama = prompt(`Konfirmasi Kehadiran pada:\n${agendaJudul}\n\nMasukkan Nama Lengkap Anda:`);
  if (!nama) return;

  const ag = SEED_AGENDA.find(a => a.id === agendaId);
  if (ag) {
    ag.pesertaTerdaftar += 1;
    renderAgendaCards();
    alert(`Terima kasih Bapak/Ibu ${nama}! Kehadiran Anda telah tercatat. Panitia sekretariat akan menghubungi untuk konfirmasi titik kumpul.`);
  }
}

// Copy Rekening Kas Donasi
function copyRekening(noRekening) {
  navigator.clipboard.writeText(noRekening).then(() => {
    alert(`Nomor Rekening ${noRekening} berhasil disalin ke clipboard!`);
  }).catch(() => {
    prompt("Silakan salin nomor rekening berikut:", noRekening);
  });
}
