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

// HELPER SVG GENERATOR UNTUK DOKUMENTASI KEGIATAN SILATURAHMI DEFAULT (MAKS 3 FOTO)
function generateSampleSilaturahmiPhoto(title, sub, iconType = "ukhuwah") {
  const iconPath = iconType === "kuliner" 
    ? '<circle cx="0" cy="-35" r="32" fill="#7f1d1d" stroke="#f59e0b" stroke-width="2"/><path d="M-15 -35 h30 M-10 -45 c0 15 20 15 20 0" stroke="#fef08a" stroke-width="2.5" fill="none"/>'
    : iconType === "pengajian"
    ? '<circle cx="0" cy="-35" r="32" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><path d="M-14 -25 l14 -16 l14 16 M-14 -25 h28" stroke="#fef08a" stroke-width="2.5" fill="none"/>'
    : '<circle cx="0" cy="-35" r="32" fill="#450a0a" stroke="#f59e0b" stroke-width="2"/><path d="M-12 -28 c0 -6 5 -10 12 -10 s12 4 12 10 M-8 -44 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0" stroke="#fef08a" stroke-width="2.5" fill="none"/>';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
    <defs>
      <linearGradient id="g_${title.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e0508"/>
        <stop offset="50%" stop-color="#4c0519"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
    </defs>
    <rect width="600" height="450" fill="url(#g_${title.replace(/[^a-zA-Z0-9]/g, '')})"/>
    <circle cx="530" cy="70" r="140" fill="rgba(217, 119, 6, 0.12)"/>
    <circle cx="70" cy="380" r="90" fill="rgba(153, 27, 27, 0.25)"/>
    <rect x="25" y="25" width="550" height="400" rx="16" fill="none" stroke="rgba(251, 191, 36, 0.45)" stroke-width="2" stroke-dasharray="8 6"/>
    <rect x="0" y="442" width="600" height="8" fill="#d97706"/>
    <g transform="translate(300, 210)" text-anchor="middle">
      ${iconPath}
      <text y="24" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="20" fill="#ffffff">${title}</text>
      <text y="52" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="500" font-size="13" fill="#fde68a">${sub}</text>
      <rect x="-110" y="78" width="220" height="28" rx="14" fill="#991b1b" stroke="#f59e0b" stroke-width="1.2"/>
      <text y="97" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">DOKUMENTASI SILATURAHMI</text>
    </g>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// HELPER SVG GENERATOR UNTUK PASFOTO RESMI KTA (RASIO 3:4 PROPORSIONAL)
function generateSamplePasfoto(nama, gender = "Laki-laki") {
  const cleanNama = (nama || "Anggota").trim();
  const initials = cleanNama.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase() || "IK";
  const isFemale = gender === "Perempuan";
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="300" height="400">
    <defs>
      <linearGradient id="pas_${initials}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4c0519"/>
        <stop offset="60%" stop-color="#1e0508"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
    </defs>
    <!-- Background Merah-Hitam Simalungun -->
    <rect width="300" height="400" fill="url(#pas_${initials})"/>
    <circle cx="150" cy="145" r="95" fill="rgba(217, 119, 6, 0.15)"/>
    <rect x="10" y="10" width="280" height="380" rx="8" fill="none" stroke="rgba(251, 191, 36, 0.35)" stroke-width="2"/>
    
    <!-- Torso / Pakaian Adat Formal -->
    <path d="M40 375 C45 260 255 260 260 375 Z" fill="#991b1b"/>
    <path d="M110 375 L150 280 L190 375 Z" fill="#ffffff" opacity="0.95"/>
    <path d="M142 280 L158 280 L155 375 L145 375 Z" fill="#0f172a"/>
    <path d="M125 310 L175 310 L150 350 Z" fill="#d97706" opacity="0.85"/>

    <!-- Kepala / Silhouette -->
    <circle cx="150" cy="140" r="56" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>

    <!-- Peci / Hijab -->
    ${isFemale ? 
      '<path d="M85 140 C85 65 215 65 215 140 C215 220 85 220 85 140 Z" fill="#4c0519" opacity="0.85"/><path d="M100 135 C100 85 200 85 200 135 C200 195 100 195 100 135 Z" fill="#7f1d1d" opacity="0.9"/>' : 
      '<rect x="92" y="78" width="116" height="42" rx="6" fill="#09090b" stroke="#fbbf24" stroke-width="1.5"/><rect x="92" y="112" width="116" height="6" fill="#d97706"/>'
    }

    <!-- Inisial Wajah / Identitas -->
    <text x="150" y="${isFemale ? 150 : 160}" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="28" fill="#1e0508">${initials}</text>
    
    <!-- Label KTA -->
    <rect x="0" y="376" width="300" height="24" fill="#000000"/>
    <text x="150" y="392" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="10" font-weight="bold" fill="#fbbf24" letter-spacing="1">PASFOTO KTA IKEIS</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// 3. SEED DATA ANGGOTA IKEIS JABODETABEK
const SEED_MEMBERS = [
  {
    id: "IKEIS-JBD-2026-001",
    nama: "H. Zulkifli Damanik, S.E., M.M.",
    marga: "Damanik",
    jenisKelamin: "Laki-laki",
    fotoDiri: generateSamplePasfoto("H. Zulkifli Damanik", "Laki-laki"),
    domisili: "Jakarta Selatan",
    alamat: "Jl. Tebet Barat Dalam No. 18, Tebet",
    kecamatanAsal: "Tapian Dolok",
    nagoriAsal: "Nagori Sinaksak",
    profesi: "Konsultan Bisnis & Wiraswasta",
    telepon: "081289112233",
    email: "zulkifli.damanik@gmail.com",
    bidangMinat: "Ekonomi & Usaha Komunitas",
    tanggalGabung: "2024-01-15",
    status: "Aktif",
    statusSilaturahmi: "Alhamdulillah selesai silaturahmi bulanan keluarga Damanik se-Jakarta Selatan di Tebet. Suasana penuh kehangatan bernostalgia kampung halaman.",
    statusWaktu: "Hari ini, 14:20 WIB",
    fotoKegiatan: [
      {
        id: "foto-1-1",
        url: generateSampleSilaturahmiPhoto("Silaturahmi Warga Tebet", "Temu Kangen Dongan Tubu Jaksel", "ukhuwah"),
        caption: "Silaturahmi Bulanan Warga Tebet & Sekitarnya",
        waktu: "12 Okt 2026"
      },
      {
        id: "foto-1-2",
        url: generateSampleSilaturahmiPhoto("Jamuan Dayok Binatur", "Santap Kuliner Halal Khas Simalungun", "kuliner"),
        caption: "Jamuan Khas Halal Dayok Binatur",
        waktu: "12 Okt 2026"
      },
      {
        id: "foto-1-3",
        url: generateSampleSilaturahmiPhoto("Foto Bersama Pengurus", "Ukhuwah Dongan Sabutuha Jabodetabek", "ukhuwah"),
        caption: "Foto Bersama Pengurus Korwil Jaksel",
        waktu: "12 Okt 2026"
      }
    ]
  },
  {
    id: "IKEIS-JBD-2026-002",
    nama: "Dr. Hj. Nurasyiah Saragih, M.Pd.",
    marga: "Saragih Garingging",
    jenisKelamin: "Perempuan",
    fotoDiri: generateSamplePasfoto("Dr. Hj. Nurasyiah Saragih", "Perempuan"),
    domisili: "Kota Depok",
    alamat: "Pesona Depok Estate Blok B3, Sukmajaya",
    kecamatanAsal: "Raya",
    nagoriAsal: "Pamatang Raya",
    profesi: "Dosen & Peneliti Pendidikan",
    telepon: "081377889900",
    email: "nurasyiah.saragih@univ.ac.id",
    bidangMinat: "Pendidikan & Pembinaan Generasi Muda",
    tanggalGabung: "2024-02-10",
    status: "Aktif",
    statusSilaturahmi: "Kunjungan silaturahmi & takziah ke kediaman inang boru di Depok Timur. Alhamdulillah tali persaudaraan sesama perantau tetap terjaga erat.",
    statusWaktu: "Kemarin, 19:45 WIB",
    fotoKegiatan: [
      {
        id: "foto-2-1",
        url: generateSampleSilaturahmiPhoto("Pengajian Rutin Ibu-Ibu Depok", "Kajian Keluarga Sakinah & Silaturahmi", "pengajian"),
        caption: "Pertemuan Silaturahmi Warga Depok",
        waktu: "11 Okt 2026"
      },
      {
        id: "foto-2-2",
        url: generateSampleSilaturahmiPhoto("Tinuktuk Asli Raya", "Oleh-oleh Kampung Halaman untuk Dongan", "kuliner"),
        caption: "Penyerahan Bingkisan Rempah Tradisional",
        waktu: "11 Okt 2026"
      }
    ]
  },
  {
    id: "IKEIS-JBD-2026-003",
    nama: "M. Faisal Purba, S.T.",
    marga: "Purba Dasuha",
    jenisKelamin: "Laki-laki",
    fotoDiri: generateSamplePasfoto("M. Faisal Purba", "Laki-laki"),
    domisili: "Kota Bekasi",
    alamat: "Harapan Indah Regency Blok CF No. 12",
    kecamatanAsal: "Bandar",
    nagoriAsal: "Perdagangan I",
    profesi: "Senior Software Engineer",
    telepon: "081765432100",
    email: "faisal.purba@techcorp.id",
    bidangMinat: "Media, IT & Hubungan Masyarakat",
    tanggalGabung: "2024-03-01",
    status: "Aktif",
    statusSilaturahmi: "Kopdar santai generasi muda IKEIS di Harapan Indah Bekasi. Siap berkontribusi mengawal digitalisasi portal silaturahmi warga rantau.",
    statusWaktu: "2 hari yang lalu",
    fotoKegiatan: [
      {
        id: "foto-3-1",
        url: generateSampleSilaturahmiPhoto("Kopdar Milenial IKEIS Bekasi", "Sinergi IT & Pengembangan Web Komunitas", "ukhuwah"),
        caption: "Temu Pemuda & Milenial IKEIS Bekasi",
        waktu: "10 Okt 2026"
      }
    ]
  },
  {
    id: "IKEIS-JBD-2026-004",
    nama: "Ustadz H. Ahmad Ridwan Sinaga, Lc.",
    marga: "Sinaga Dadihur",
    jenisKelamin: "Laki-laki",
    fotoDiri: generateSamplePasfoto("Ustadz H. Ahmad Ridwan Sinaga", "Laki-laki"),
    domisili: "Jakarta Timur",
    alamat: "Kavling DKI Pondok Kelapa, Duren Sawit",
    kecamatanAsal: "Gunung Malela",
    nagoriAsal: "Nagori Senio",
    profesi: "Dai / Pengajar Pondok Pesantren",
    telepon: "082199001122",
    email: "ahmad.sinaga.lc@gmail.com",
    bidangMinat: "Dakwah & Kajian Fiqih Keislaman",
    tanggalGabung: "2024-01-20",
    status: "Aktif",
    statusSilaturahmi: "Kajian bulanan fiqih muamalah perantau di Duren Sawit Jakarta Timur. Menguatkan iman dan merekatkan persaudaraan.",
    statusWaktu: "3 hari yang lalu",
    fotoKegiatan: [
      {
        id: "foto-4-1",
        url: generateSampleSilaturahmiPhoto("Kajian Fiqih Muamalah Jaktim", "Duren Sawit Jakarta Timur", "pengajian"),
        caption: "Dokumentasi Kajian Fiqih Perantau",
        waktu: "9 Okt 2026"
      }
    ]
  },
  {
    id: "IKEIS-JBD-2026-005",
    nama: "dr. Siti Rahmah Lubis Damanik, Sp.A",
    marga: "Lubis / Suami Damanik",
    jenisKelamin: "Perempuan",
    fotoDiri: generateSamplePasfoto("dr. Siti Rahmah Lubis Damanik", "Perempuan"),
    domisili: "Kota Tangerang Selatan",
    alamat: "BSD City, Cluster Foresta Blok B8, Serpong",
    kecamatanAsal: "Siantar",
    nagoriAsal: "Dolok Marlawan",
    profesi: "Dokter Spesialis Anak",
    telepon: "081123456789",
    email: "dr.siti.rahmah@hospital.id",
    bidangMinat: "Kesehatan & Bakti Sosial",
    tanggalGabung: "2024-04-12",
    status: "Aktif",
    statusSilaturahmi: "",
    statusWaktu: "",
    fotoKegiatan: []
  },
  {
    id: "IKEIS-JBD-2026-006",
    nama: "Bambang Suhendra Purba, S.H.",
    marga: "Purba Tambak",
    jenisKelamin: "Laki-laki",
    fotoDiri: generateSamplePasfoto("Bambang Suhendra Purba", "Laki-laki"),
    domisili: "Kota Bogor",
    alamat: "Villa Indah Pajajaran, Bogor Timur",
    kecamatanAsal: "Bosar Maligas",
    nagoriAsal: "Nagori Marihat Tanjung",
    profesi: "Advokat & Konsultan Hukum",
    telepon: "081512345670",
    email: "bambang.purba.law@gmail.com",
    bidangMinat: "Advokasi & Bantuan Hukum Warga",
    tanggalGabung: "2024-05-02",
    status: "Aktif",
    statusSilaturahmi: "",
    statusWaktu: "",
    fotoKegiatan: []
  },
  {
    id: "IKEIS-JBD-2026-007",
    nama: "Rahmad Hidayat Sinaga",
    marga: "Sinaga",
    jenisKelamin: "Laki-laki",
    fotoDiri: generateSamplePasfoto("Rahmad Hidayat Sinaga", "Laki-laki"),
    domisili: "Kota Tangerang",
    alamat: "Moderland Townhouse Blok C5, Cipondoh",
    kecamatanAsal: "Ujung Padang",
    nagoriAsal: "Nagori Huta Parik",
    profesi: "Pengusaha Logistik & Ekspedisi",
    telepon: "081299887766",
    email: "rahmad.logistik@gmail.com",
    bidangMinat: "Sosial & Kas Kemalangan",
    tanggalGabung: "2024-05-20",
    status: "Aktif",
    statusSilaturahmi: "",
    statusWaktu: "",
    fotoKegiatan: []
  },
  {
    id: "IKEIS-JBD-2026-008",
    nama: "Fatimah Zahra Saragih",
    marga: "Saragih Simarmata",
    jenisKelamin: "Perempuan",
    fotoDiri: generateSamplePasfoto("Fatimah Zahra Saragih", "Perempuan"),
    domisili: "Jakarta Pusat",
    alamat: "Cempaka Putih Timur VII No. 9",
    kecamatanAsal: "Tanah Jawa",
    nagoriAsal: "Balimbingan",
    profesi: "Mahasiswi Pascasarjana & Pegiat Budaya",
    telepon: "087812344321",
    email: "fatimah.saragih@student.ac.id",
    bidangMinat: "Generasi Muda & Budaya Simalungun",
    tanggalGabung: "2024-06-11",
    status: "Aktif",
    statusSilaturahmi: "",
    statusWaktu: "",
    fotoKegiatan: []
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
  let members = JSON.parse(data);
  let needsUpdate = false;

  members = members.map(m => {
    // Migration: populate seed status & photo gallery if missing
    const seed = SEED_MEMBERS.find(s => s.id === m.id);
    if ((!m.fotoKegiatan || m.fotoKegiatan.length === 0) && seed && seed.fotoKegiatan && seed.fotoKegiatan.length > 0) {
      m.fotoKegiatan = seed.fotoKegiatan;
      m.statusSilaturahmi = seed.statusSilaturahmi;
      m.statusWaktu = seed.statusWaktu;
      needsUpdate = true;
    } else {
      if (!m.fotoKegiatan) m.fotoKegiatan = [];
      if (typeof m.statusSilaturahmi === "undefined") m.statusSilaturahmi = "";
      if (typeof m.statusWaktu === "undefined") m.statusWaktu = "";
    }

    // Migration: populate fotoDiri if missing
    if (!m.fotoDiri) {
      if (seed && seed.fotoDiri) {
        m.fotoDiri = seed.fotoDiri;
      } else {
        m.fotoDiri = generateSamplePasfoto(m.nama, m.jenisKelamin);
      }
      needsUpdate = true;
    }

    return m;
  });

  if (needsUpdate) {
    localStorage.setItem("ikeis_members", JSON.stringify(members));
  }
  return members;
}

function saveMembers(members) {
  localStorage.setItem("ikeis_members", JSON.stringify(members));
}

// Client-side HTML5 Canvas Image Compression Helper (Max 800px, JPEG 0.72)
function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

// State Pasfoto Pendaftaran Baru
let registeredPhotoBase64 = "";

async function handleRegFotoInput(files) {
  if (!files || files.length === 0) return;
  const file = files[0];
  try {
    const compressed = await compressImage(file, 600, 800, 0.78);
    registeredPhotoBase64 = compressed;

    const imgEl = document.getElementById("regFotoImg");
    const placeholderEl = document.getElementById("regFotoPlaceholder");
    const previewBox = document.getElementById("regFotoPreviewBox");
    const btnHapus = document.getElementById("btnHapusFotoDiri");

    if (imgEl) {
      imgEl.src = compressed;
      imgEl.classList.remove("hidden");
    }
    if (placeholderEl) placeholderEl.classList.add("hidden");
    if (previewBox) previewBox.classList.add("has-photo");
    if (btnHapus) btnHapus.classList.remove("hidden");
  } catch (err) {
    console.error("Gagal membaca foto diri:", err);
    alert("Gagal memproses berkas foto. Silakan coba kembali.");
  }
}

function resetFotoDiriReg(event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  registeredPhotoBase64 = "";
  const fileInput = document.getElementById("regFotoInput");
  if (fileInput) fileInput.value = "";

  const imgEl = document.getElementById("regFotoImg");
  const placeholderEl = document.getElementById("regFotoPlaceholder");
  const previewBox = document.getElementById("regFotoPreviewBox");
  const btnHapus = document.getElementById("btnHapusFotoDiri");

  if (imgEl) {
    imgEl.src = "";
    imgEl.classList.add("hidden");
  }
  if (placeholderEl) placeholderEl.classList.remove("hidden");
  if (previewBox) previewBox.classList.remove("has-photo");
  if (btnHapus) btnHapus.classList.add("hidden");
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

// 6. SEED & STORAGE CONFIG WEB (KAS SOLIDARITAS, KORWIL, & PIN ADMIN)
const SEED_CONFIG = {
  adminPin: "ikeis2026",
  kas: {
    namaBank: "Bank Syariah Indonesia (BSI)",
    noRekening: "719 8820 192",
    atasNama: "IKEIS Jabodetabek Peduli",
    kontakKonfirmasi: "0812-8911-2233 (H. Zulkifli Damanik)"
  },
  korwil: [
    { id: "korwil-dki", wilayah: "Korwil DKI Jakarta", nama: "H. Zulkifli Damanik", lokasi: "Tebet, Jakarta Selatan", wa: "6281289112233" },
    { id: "korwil-bogor", wilayah: "Korwil Bogor Raya", nama: "Bambang S. Purba, S.H.", lokasi: "Pajajaran, Kota Bogor", wa: "6281512345670" },
    { id: "korwil-depok", wilayah: "Korwil Kota Depok", nama: "Dr. Hj. Nurasyiah Saragih", lokasi: "Sukmajaya, Kota Depok", wa: "6281377889900" },
    { id: "korwil-tangerang", wilayah: "Korwil Tangerang Raya", nama: "Rahmad H. Sinaga", lokasi: "Cipondoh / Tangsel", wa: "6281299887766" },
    { id: "korwil-bekasi", wilayah: "Korwil Bekasi Raya", nama: "M. Faisal Purba, S.T.", lokasi: "Harapan Indah, Bekasi", wa: "6281765432100" }
  ]
};

function getStoredConfig() {
  const data = localStorage.getItem("ikeis_config");
  if (!data) {
    localStorage.setItem("ikeis_config", JSON.stringify(SEED_CONFIG));
    return SEED_CONFIG;
  }
  try {
    const parsed = JSON.parse(data);
    if (!parsed.adminPin) parsed.adminPin = "ikeis2026";
    if (!parsed.kas) parsed.kas = SEED_CONFIG.kas;
    if (!parsed.korwil || parsed.korwil.length === 0) parsed.korwil = SEED_CONFIG.korwil;
    return parsed;
  } catch (e) {
    return SEED_CONFIG;
  }
}

function saveConfig(config) {
  localStorage.setItem("ikeis_config", JSON.stringify(config));
}

function getStoredAgenda() {
  const data = localStorage.getItem("ikeis_agenda");
  if (!data) {
    localStorage.setItem("ikeis_agenda", JSON.stringify(SEED_AGENDA));
    return SEED_AGENDA;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return SEED_AGENDA;
  }
}

function saveAgenda(agenda) {
  localStorage.setItem("ikeis_agenda", JSON.stringify(agenda));
}

// Render Data Kas Solidaritas (Baitul Mal) di Halaman Depan
function renderBaitulMalInfo() {
  const config = getStoredConfig();
  const bankEl = document.getElementById("kasBankNama");
  const noRekEl = document.getElementById("kasNoRekening");
  const anEl = document.getElementById("kasAtasNama");
  const waEl = document.getElementById("kasKontakKonfirmasi");
  const btnCopy = document.getElementById("btnCopyRekening");

  if (bankEl && config.kas) bankEl.textContent = config.kas.namaBank;
  if (noRekEl && config.kas) noRekEl.textContent = config.kas.noRekening;
  if (anEl && config.kas) anEl.textContent = config.kas.atasNama.startsWith("a.n.") ? config.kas.atasNama : `a.n. ${config.kas.atasNama}`;
  if (waEl && config.kas) waEl.textContent = config.kas.kontakKonfirmasi;
  if (btnCopy && config.kas) {
    const cleanRek = config.kas.noRekening.replace(/\s+/g, '');
    btnCopy.onclick = () => copyRekening(cleanRek);
  }
}

// Render Kontak 5 Korwil di Halaman Depan
function renderKorwilCards() {
  const container = document.getElementById("korwilCardsContainer");
  if (!container) return;

  const config = getStoredConfig();
  const korwils = config.korwil || [];

  container.innerHTML = korwils.map(k => {
    const cleanWa = (k.wa || "").replace(/[^0-9]/g, "");
    return `
      <div class="bg-[#14060a] p-5 rounded-2xl border border-red-900/40 shadow-sm space-y-2">
        <div class="text-xs font-bold uppercase text-amber-400 tracking-wider">${k.wilayah}</div>
        <div class="font-bold text-white text-sm">${k.nama}</div>
        <div class="text-xs text-slate-400">${k.lokasi}</div>
        <a href="https://api.whatsapp.com/send?phone=${cleanWa}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 pt-1">
          <span>WhatsApp Korwil</span> &rarr;
        </a>
      </div>
    `;
  }).join("");
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
  renderBaitulMalInfo();
  renderKorwilCards();
  renderPengurusCards();
  renderPengumumanCards();
  initRegistrationForm();
  updateLiveStatsHeader();
  populateAdminDropdowns();

  // Set sample KTA photo preview in Bagian Pendaftaran
  const sampleFoto = document.getElementById("sampleKtaFoto");
  if (sampleFoto) {
    sampleFoto.src = generateSamplePasfoto("H. Zulkifli Damanik", "Laki-laki");
  }
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
      fotoDiri: registeredPhotoBase64 || generateSamplePasfoto(nama, jenisKelamin),
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
      status: "Aktif",
      statusSilaturahmi: "",
      statusWaktu: "",
      fotoKegiatan: []
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

    // Reset Form & Photo Preview
    form.reset();
    resetFotoDiriReg();

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
  
  // Set Pasfoto Resmi KTA Proporsional
  const ktaFoto = document.getElementById("ktaCardFoto");
  if (ktaFoto) {
    ktaFoto.src = member.fotoDiri || generateSamplePasfoto(member.nama, member.jenisKelamin);
  }
  
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
    const hasStatus = m.statusSilaturahmi && m.statusSilaturahmi.trim().length > 0;
    const photos = m.fotoKegiatan || [];
    const hasPhotos = photos.length > 0;

    return `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-600/40 transition-all p-5 flex flex-col justify-between group">
        <div>
          <!-- Header Card -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              ${m.fotoDiri ? `
                <div class="w-12 h-14 rounded-xl bg-slate-900 overflow-hidden shadow-sm shrink-0 border-2 border-amber-400/80">
                  <img src="${m.fotoDiri}" alt="${m.nama}" class="w-full h-full object-cover" />
                </div>
              ` : `
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 via-red-950 to-slate-950 text-amber-300 font-bold flex items-center justify-center text-base shadow-sm shrink-0 border border-amber-400/40">
                  ${initials}
                </div>
              `}
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

          <!-- Status Silaturahmi Warga (Jika Ada) -->
          ${hasStatus ? `
            <div class="mt-3 p-3 bg-red-50/70 rounded-xl border border-red-200/70 text-xs text-slate-800 relative">
              <div class="flex items-start gap-2">
                <svg class="w-4 h-4 text-red-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                <div class="flex-1">
                  <span class="italic text-slate-700 line-clamp-2">"${m.statusSilaturahmi}"</span>
                  <span class="block text-[10px] text-red-800 font-semibold mt-1">🕒 ${m.statusWaktu || 'Baru saja'}</span>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Galeri Foto Kegiatan Silaturahmi (Maksimal 3 Foto) -->
          ${hasPhotos ? `
            <div class="mt-3 pt-2.5 border-t border-slate-100">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                  <span>📸</span> Foto Kegiatan:
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-900 text-amber-300 border border-amber-400/40">
                  ${photos.length} / 3 Foto
                </span>
              </div>
              <div class="grid grid-cols-3 gap-1.5">
                ${photos.map((f, i) => `
                  <div class="photo-slot h-16 rounded-lg cursor-pointer" onclick="openPhotoLightbox('${f.url}', '${(f.caption || m.nama).replace(/'/g, "\\'")}')" title="${f.caption || 'Klik untuk perbesar'}">
                    <img src="${f.url}" alt="${f.caption || 'Foto Silaturahmi'}" class="w-full h-full object-cover" />
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Action Buttons (Space Warga, KTA, Sapa WA) -->
        <div class="pt-4 flex items-center justify-between gap-1.5 mt-2 border-t border-slate-100">
          <button onclick="openMemberSpace('${m.id}')" title="Buka Space Silaturahmi (Status & Upload Foto)" class="flex-1 py-1.5 px-2 bg-gradient-to-r from-red-800 to-red-950 hover:from-red-900 hover:to-black text-amber-300 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1 shadow-sm border border-amber-400/30">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            <span>Space Warga</span>
          </button>

          <button onclick="viewMemberKta('${m.id}')" title="Lihat KTA Digital" class="py-1.5 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1 border border-slate-200">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
            <span>KTA</span>
          </button>
          
          <a href="https://api.whatsapp.com/send?phone=${m.telepon ? m.telepon.replace(/^0/, '62') : ''}&text=${encodeURIComponent(`Assalamu'alaikum Uda/Inang/Bapa ${m.nama}, saya sesama anggota IKEIS Jabodetabek...`)}" target="_blank" title="Sapa melalui WhatsApp" class="py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1 shadow-sm">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.053 1.343 1.849.528.47 1.077.674 1.279.76.202.086.319.072.435-.058.116-.13.491-.57.622-.765.13-.195.26-.162.434-.097.174.065 1.102.52 1.29.614.188.094.313.141.359.22.046.079.046.455-.098.86z"/></svg>
            <span>WA</span>
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

// =====================================================================
// SPACE SILATURAHMI ANGGOTA (MAKSIMAL 3 FOTO & STATUS UKHUWAH)
// =====================================================================
let activeSpaceMemberId = null;
let activeSpaceDraftPhotos = [];

function openMemberSpace(memberId) {
  const members = getStoredMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) {
    alert("Data anggota tidak ditemukan.");
    return;
  }

  activeSpaceMemberId = memberId;
  activeSpaceDraftPhotos = JSON.parse(JSON.stringify(member.fotoKegiatan || []));

  // Set member profile details in modal
  const initials = member.nama.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const avatarEl = document.getElementById("spaceMemberAvatar");
  if (avatarEl) {
    if (member.fotoDiri) {
      avatarEl.innerHTML = `<img src="${member.fotoDiri}" alt="${member.nama}" class="w-full h-full object-cover rounded-2xl" />`;
    } else {
      avatarEl.textContent = initials;
    }
  }

  const namaEl = document.getElementById("spaceMemberNama");
  if (namaEl) namaEl.textContent = member.nama;

  const idEl = document.getElementById("spaceMemberId");
  if (idEl) idEl.textContent = member.id;

  const margaEl = document.getElementById("spaceMemberMarga");
  if (margaEl) margaEl.textContent = `Marga ${member.marga}`;

  const domisiliEl = document.getElementById("spaceMemberDomisili");
  if (domisiliEl) domisiliEl.textContent = member.domisili;

  const asalEl = document.getElementById("spaceMemberAsal");
  if (asalEl) asalEl.textContent = `Asal Kec. ${member.kecamatanAsal}${member.nagoriAsal && member.nagoriAsal !== '-' ? ' (' + member.nagoriAsal + ')' : ''}`;

  const statusInput = document.getElementById("spaceStatusInput");
  if (statusInput) statusInput.value = member.statusSilaturahmi || "";

  const statusWaktuEl = document.getElementById("spaceStatusWaktu");
  if (statusWaktuEl) {
    statusWaktuEl.textContent = member.statusWaktu ? `Terakhir diperbarui: ${member.statusWaktu}` : "Belum ada status silaturahmi yang ditulis";
  }

  // Setup WhatsApp share button
  const shareBtn = document.getElementById("btnShareSpaceWa");
  if (shareBtn) {
    const waText = encodeURIComponent(
      `Horas! Kunjungi Space Silaturahmi saya di Portal IKEIS Jabodetabek:\n` +
      `Nama: ${member.nama} (${member.marga})\n` +
      `KTA ID: ${member.id}\n` +
      `Status: "${member.statusSilaturahmi || 'Silaturahmi mempererat ukhuwah dongan sabutuha'}"\n` +
      `Dokumentasi: ${activeSpaceDraftPhotos.length} Foto Silaturahmi\n` +
      `Habonaron Do Bona!`
    );
    shareBtn.href = `https://api.whatsapp.com/send?text=${waText}`;
  }

  renderSpacePhotoGallery();

  const modal = document.getElementById("modalMemberSpace");
  if (modal) modal.classList.remove("hidden");
}

function closeMemberSpace() {
  const modal = document.getElementById("modalMemberSpace");
  if (modal) modal.classList.add("hidden");
  activeSpaceMemberId = null;
  activeSpaceDraftPhotos = [];
}

function renderSpacePhotoGallery() {
  const container = document.getElementById("spacePhotoGrid");
  const countBadge = document.getElementById("spacePhotoCountBadge");
  const uploadZone = document.getElementById("spaceUploadZone");
  const uploadAlert = document.getElementById("spaceUploadMaxAlert");

  const total = activeSpaceDraftPhotos.length;
  if (countBadge) {
    countBadge.textContent = `${total} / 3 Foto Kegiatan`;
    if (total === 3) {
      countBadge.className = "px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
    } else {
      countBadge.className = "px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300";
    }
  }

  if (uploadZone) {
    if (total >= 3) {
      uploadZone.classList.add("hidden");
    } else {
      uploadZone.classList.remove("hidden");
      const remaining = 3 - total;
      const helperText = document.getElementById("spaceUploadRemainingText");
      if (helperText) {
        helperText.textContent = `Tersisa ${remaining} slot foto kegiatan silaturahmi`;
      }
    }
  }

  if (uploadAlert) {
    if (total >= 3) {
      uploadAlert.classList.remove("hidden");
    } else {
      uploadAlert.classList.add("hidden");
    }
  }

  if (!container) return;

  if (total === 0) {
    container.innerHTML = `
      <div class="col-span-full py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        <p class="text-xs text-slate-500 font-medium">Belum ada foto kegiatan silaturahmi yang diunggah.</p>
        <p class="text-[11px] text-slate-400 mt-0.5">Unggah maksimal 3 foto dokumentasi silaturahmi Anda bersama dongan sabutuha.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = activeSpaceDraftPhotos.map((photo, index) => {
    return `
      <div class="photo-slot group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
        <img src="${photo.url}" alt="${photo.caption || 'Foto Silaturahmi'}" onclick="openPhotoLightbox('${photo.url}', '${(photo.caption || 'Foto Silaturahmi ' + (index+1)).replace(/'/g, "\\'")}')" class="w-full h-44 object-cover cursor-pointer" />
        
        <!-- Overlay Badges -->
        <div class="absolute top-2 left-2 pointer-events-none">
          <span class="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-amber-300 text-[10px] font-bold border border-amber-400/40">
            Foto #${index + 1}
          </span>
        </div>
        <div class="absolute top-2 right-2">
          <button type="button" onclick="removeSpacePhoto(${index})" title="Hapus foto ini" class="w-7 h-7 rounded-full bg-red-600/90 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Caption Bar -->
        <div class="p-2.5 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
          <input type="text" value="${photo.caption || ''}" onchange="updatePhotoCaption(${index}, this.value)" placeholder="Keterangan foto..." class="w-full text-xs text-slate-700 bg-slate-50 px-2 py-1 rounded border border-slate-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-700" />
        </div>
      </div>
    `;
  }).join("");
}

function updatePhotoCaption(index, newCaption) {
  if (activeSpaceDraftPhotos[index]) {
    activeSpaceDraftPhotos[index].caption = newCaption.trim();
  }
}

async function handleSpacePhotoInput(files) {
  if (!files || files.length === 0) return;
  const currentTotal = activeSpaceDraftPhotos.length;
  const remaining = 3 - currentTotal;

  if (remaining <= 0) {
    alert("Maksimal 3 foto kegiatan silaturahmi. Anda harus menghapus salah satu foto yang ada terlebih dahulu jika ingin mengganti.");
    return;
  }

  if (files.length > remaining) {
    alert(`Anda memilih ${files.length} foto, namun kuota tersisa hanya ${remaining} foto. Hanya ${remaining} foto pertama yang akan diproses (maksimal 3 foto per anggota).`);
  }

  const filesToProcess = Array.from(files).slice(0, remaining);

  for (const file of filesToProcess) {
    try {
      const compressedUrl = await compressImage(file, 800, 800, 0.72);
      activeSpaceDraftPhotos.push({
        id: `foto-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        url: compressedUrl,
        caption: file.name.replace(/\.[^/.]+$/, "").substring(0, 40),
        waktu: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
      });
    } catch (err) {
      console.error("Gagal mengompresi foto:", err);
    }
  }

  const fileInput = document.getElementById("spaceFileInput");
  if (fileInput) fileInput.value = "";

  renderSpacePhotoGallery();
}

function removeSpacePhoto(index) {
  if (confirm("Hapus foto kegiatan ini?")) {
    activeSpaceDraftPhotos.splice(index, 1);
    renderSpacePhotoGallery();
  }
}

function saveMemberSpace() {
  if (!activeSpaceMemberId) return;

  const members = getStoredMembers();
  const memberIndex = members.findIndex(m => m.id === activeSpaceMemberId);
  if (memberIndex === -1) {
    alert("Data anggota tidak ditemukan.");
    return;
  }

  const statusInput = document.getElementById("spaceStatusInput");
  const newStatus = statusInput ? statusInput.value.trim() : "";

  // Strictly enforce max 3 photos
  const finalPhotos = activeSpaceDraftPhotos.slice(0, 3);

  const now = new Date();
  const timeFormatted = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) + ', ' + 
    now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';

  members[memberIndex].statusSilaturahmi = newStatus;
  members[memberIndex].statusWaktu = timeFormatted;
  members[memberIndex].fotoKegiatan = finalPhotos;

  saveMembers(members);

  // Refresh directory
  renderMembersDirectory();

  if (typeof confetti === "function") {
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
  }

  alert("Alhamdulillah! Status dan foto kegiatan silaturahmi berhasil disimpan ke Space Anda.");
  closeMemberSpace();
}

// Lightbox modal handler
function openPhotoLightbox(imgSrc, caption = "") {
  const modal = document.getElementById("modalPhotoLightbox");
  const imgEl = document.getElementById("lightboxImage");
  const capEl = document.getElementById("lightboxCaption");

  if (!modal || !imgEl) return;
  imgEl.src = imgSrc;
  if (capEl) capEl.textContent = caption || "Dokumentasi Kegiatan Silaturahmi IKEIS Jabodetabek";
  modal.classList.remove("hidden");
}

function closePhotoLightbox() {
  const modal = document.getElementById("modalPhotoLightbox");
  if (modal) modal.classList.add("hidden");
}

// Quick selector modal to open Space for any member
function promptSelectMemberForSpace() {
  const modal = document.getElementById("modalSelectMemberSpace");
  const selectEl = document.getElementById("selectMemberSpaceDropdown");
  if (!modal || !selectEl) return;

  const members = getStoredMembers();
  selectEl.innerHTML = members.map(m => `
    <option value="${m.id}">[${m.id}] ${m.nama} (${m.domisili})</option>
  `).join("");

  modal.classList.remove("hidden");
}

function closeSelectMemberSpaceModal() {
  const modal = document.getElementById("modalSelectMemberSpace");
  if (modal) modal.classList.add("hidden");
}

function submitSelectMemberSpace() {
  const selectEl = document.getElementById("selectMemberSpaceDropdown");
  if (!selectEl) return;
  const selectedId = selectEl.value;
  closeSelectMemberSpaceModal();
  if (selectedId) {
    openMemberSpace(selectedId);
  }
}

function openMemberSpaceFromKta() {
  const currentId = document.getElementById("ktaCardId")?.textContent?.trim();
  closeKtaModal();
  if (currentId) {
    openMemberSpace(currentId);
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

  const agenda = getStoredAgenda();

  container.innerHTML = agenda.map(ag => {
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
            ${ag.penceramah ? `
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-red-900 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <div><strong>Penceramah / Narasumber:</strong> ${ag.penceramah}</div>
            </div>` : ''}
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <div><strong>Tema / Bahasan:</strong> "${ag.tema}"</div>
            </div>
          </div>
        </div>

        <div class="p-6 pt-0">
          <button onclick="handleRsvpAgenda('${ag.id}', '${(ag.judul || '').replace(/'/g, "\\'")}')" class="w-full py-2.5 px-4 bg-red-800 hover:bg-red-900 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-sm">
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

  const agenda = getStoredAgenda();
  const ag = agenda.find(a => a.id === agendaId);
  if (ag) {
    ag.pesertaTerdaftar = (parseInt(ag.pesertaTerdaftar, 10) || 0) + 1;
    saveAgenda(agenda);
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

// =====================================================================
// PORTAL ADMINISTRATOR & PENGURUS IKEIS JABODETABEK
// =====================================================================

let activeAdminTab = "members";
let adminMemberFotoUploadBase64 = "";

// Cek apakah admin sedang dalam sesi aktif
function isAdminLoggedIn() {
  return sessionStorage.getItem("ikeis_admin_session") === "true";
}

// Buka Modal Login Admin
function openAdminLoginModal() {
  if (isAdminLoggedIn()) {
    openAdminPanel();
    return;
  }
  const modal = document.getElementById("modalAdminLogin");
  const errEl = document.getElementById("adminLoginError");
  const pinInput = document.getElementById("adminPinInput");
  if (errEl) errEl.classList.add("hidden");
  if (pinInput) {
    pinInput.value = "";
    setTimeout(() => pinInput.focus(), 150);
  }
  if (modal) modal.classList.remove("hidden");
}

function closeAdminLoginModal() {
  const modal = document.getElementById("modalAdminLogin");
  if (modal) modal.classList.add("hidden");
}

function toggleAdminPinVisibility() {
  const pinInput = document.getElementById("adminPinInput");
  if (pinInput) {
    pinInput.type = pinInput.type === "password" ? "text" : "password";
  }
}

// Proses Login Admin
function handleAdminLogin(e) {
  if (e) e.preventDefault();
  const pinInput = document.getElementById("adminPinInput");
  const errEl = document.getElementById("adminLoginError");
  const enteredPin = (pinInput?.value || "").trim();

  const config = getStoredConfig();
  const validPin = config.adminPin || "ikeis2026";

  if (enteredPin === validPin) {
    sessionStorage.setItem("ikeis_admin_session", "true");
    closeAdminLoginModal();
    openAdminPanel();
  } else {
    if (errEl) {
      errEl.classList.remove("hidden");
      errEl.textContent = "PIN salah! Masukkan PIN yang benar (Default: ikeis2026).";
    }
    if (pinInput) {
      pinInput.select();
      pinInput.focus();
    }
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem("ikeis_admin_session");
  closeAdminPanel();
  alert("Anda telah berhasil keluar (logout) dari Panel Administrator.");
}

// Buka Panel Dashboard Admin
function openAdminPanel() {
  const panel = document.getElementById("modalAdminPanel");
  if (!panel) return;
  panel.classList.remove("hidden");
  switchAdminTab(activeAdminTab || "members");
  updateAdminStatsBadges();
}

function closeAdminPanel() {
  const panel = document.getElementById("modalAdminPanel");
  if (panel) panel.classList.add("hidden");
}

// Ganti Tab Navigasi Admin
function switchAdminTab(tabName) {
  activeAdminTab = tabName;
  const tabs = ["members", "forum", "agenda", "kas", "system"];

  tabs.forEach(t => {
    const btn = document.getElementById(`btnTabAdmin${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const content = document.getElementById(`panelAdmin${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === tabName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
    if (content) {
      if (t === tabName) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    }
  });

  // Render konten sesuai tab aktif
  if (tabName === "members") renderAdminMembersTable();
  if (tabName === "forum") renderAdminForumList();
  if (tabName === "agenda") renderAdminAgendaList();
  if (tabName === "kas") {
    renderAdminKasForm();
    renderAdminKorwilList();
  }
  updateAdminStatsBadges();
}

// Update Ringkasan Angka di Header Panel
function updateAdminStatsBadges() {
  const members = getStoredMembers();
  const forum = getStoredForum();
  const agenda = getStoredAgenda();

  const statM = document.getElementById("adminStatMembers");
  const statF = document.getElementById("adminStatForum");
  const statA = document.getElementById("adminStatAgenda");

  const badgeM = document.getElementById("badgeTabMembers");
  const badgeF = document.getElementById("badgeTabForum");
  const badgeA = document.getElementById("badgeTabAgenda");

  if (statM) statM.textContent = members.length;
  if (statF) statF.textContent = forum.length;
  if (statA) statA.textContent = agenda.length;

  if (badgeM) badgeM.textContent = members.length;
  if (badgeF) badgeF.textContent = forum.length;
  if (badgeA) badgeA.textContent = agenda.length;
}

// Inisialisasi Dropdown Wilayah & Kecamatan untuk Admin
function populateAdminDropdowns() {
  const domSelect = document.getElementById("adminMemberDomisili");
  const filterWilayah = document.getElementById("adminMemberFilterWilayah");
  const kecSelect = document.getElementById("adminMemberKecamatan");

  if (domSelect && domSelect.options.length <= 1) {
    domSelect.innerHTML = "";
    WILAYAH_JABODETABEK.forEach(wil => {
      const opt = document.createElement("option");
      opt.value = wil;
      opt.textContent = wil;
      domSelect.appendChild(opt);
    });
  }

  if (filterWilayah && filterWilayah.options.length <= 1) {
    WILAYAH_JABODETABEK.forEach(wil => {
      const opt = document.createElement("option");
      opt.value = wil;
      opt.textContent = wil;
      filterWilayah.appendChild(opt);
    });
  }

  if (kecSelect && kecSelect.options.length <= 1) {
    kecSelect.innerHTML = "";
    KECAMATAN_SIMALUNGUN.forEach(kec => {
      const opt = document.createElement("option");
      opt.value = kec;
      opt.textContent = `Kecamatan ${kec}`;
      kecSelect.appendChild(opt);
    });
  }
}

// =====================================================================
// TAB 1: CRUD DATA ANGGOTA & KTA
// =====================================================================

function renderAdminMembersTable() {
  const tbody = document.getElementById("adminMembersTableBody");
  if (!tbody) return;

  const members = getStoredMembers();
  const search = (document.getElementById("adminMemberSearch")?.value || "").toLowerCase().trim();
  const filterWil = document.getElementById("adminMemberFilterWilayah")?.value || "";

  const filtered = members.filter(m => {
    const matchSearch = !search ||
      m.nama.toLowerCase().includes(search) ||
      m.marga.toLowerCase().includes(search) ||
      m.id.toLowerCase().includes(search) ||
      m.domisili.toLowerCase().includes(search) ||
      m.kecamatanAsal.toLowerCase().includes(search);
    const matchWil = !filterWil || m.domisili === filterWil;
    return matchSearch && matchWil;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-slate-400">
          Tidak ada data anggota yang cocok dengan filter pencarian.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(m => {
    const fotoSrc = m.fotoDiri || generateSamplePasfoto(m.nama, m.jenisKelamin);
    const countFotos = (m.fotoKegiatan || []).length;
    const cleanWa = (m.telepon || "").replace(/[^0-9]/g, "");

    return `
      <tr class="transition">
        <td>
          <div class="kta-photo-box" style="width: 38px; height: 50px;">
            <img src="${fotoSrc}" alt="${m.nama}" class="w-full h-full object-cover" />
          </div>
        </td>
        <td>
          <span class="font-mono text-xs font-bold text-amber-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
            ${m.id}
          </span>
        </td>
        <td>
          <div class="font-bold text-white text-xs sm:text-sm">${m.nama}</div>
          <div class="text-[11px] text-amber-300 font-medium">Marga ${m.marga} &bull; ${m.jenisKelamin || 'Laki-laki'}</div>
        </td>
        <td>
          <div class="text-xs text-slate-200 font-medium">${m.domisili}</div>
          <div class="text-[11px] text-slate-400">Kec. ${m.kecamatanAsal}${m.nagoriAsal && m.nagoriAsal !== '-' ? ' (' + m.nagoriAsal + ')' : ''}</div>
        </td>
        <td>
          <div class="text-xs text-slate-300 truncate max-w-[140px]">${m.profesi}</div>
        </td>
        <td>
          <a href="https://api.whatsapp.com/send?phone=${cleanWa.startsWith('0') ? '62' + cleanWa.slice(1) : cleanWa}" target="_blank" class="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-mono text-xs">
            <span>📱</span> ${m.telepon}
          </a>
        </td>
        <td>
          <span class="admin-badge ${countFotos > 0 ? 'bg-amber-950 text-amber-300 border border-amber-700' : 'bg-slate-800 text-slate-400 border border-slate-700'}">
            ${countFotos} / 3 Foto
          </span>
        </td>
        <td class="text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button onclick="adminEditMember('${m.id}')" class="p-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-xs transition border border-blue-700" title="Edit Data Anggota">
              ✏️ Edit
            </button>
            <button onclick="viewMemberKta('${m.id}')" class="p-1.5 rounded-lg bg-amber-900/60 hover:bg-amber-800 text-amber-200 text-xs transition border border-amber-700" title="Lihat & Cetak KTA">
              🪪 KTA
            </button>
            <button onclick="openMemberSpace('${m.id}')" class="p-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200 text-xs transition border border-red-700" title="Buka Space Silaturahmi (Foto & Status)">
              📸 Space
            </button>
            <button onclick="adminDeleteMember('${m.id}')" class="p-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 text-xs transition border border-rose-800" title="Hapus Anggota">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Buka Modal Tambah Anggota
function openAdminAddMemberModal() {
  populateAdminDropdowns();
  adminMemberFotoUploadBase64 = "";

  const form = document.getElementById("formAdminMember");
  if (form) form.reset();

  document.getElementById("adminMemberFormId").value = "";
  document.getElementById("adminMemberFormTitle").textContent = "Tambah Anggota Baru";
  document.getElementById("adminMemberFormBadge").textContent = "Tambah Data Baru";

  const preview = document.getElementById("adminMemberFotoPreview");
  if (preview) {
    preview.src = generateSamplePasfoto("Calon Anggota", "Laki-laki");
  }

  const modal = document.getElementById("modalAdminMemberForm");
  if (modal) modal.classList.remove("hidden");
}

// Buka Modal Edit Anggota
function adminEditMember(memberId) {
  populateAdminDropdowns();
  const members = getStoredMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) {
    alert("Data anggota tidak ditemukan.");
    return;
  }

  adminMemberFotoUploadBase64 = member.fotoDiri || "";

  document.getElementById("adminMemberFormId").value = member.id;
  document.getElementById("adminMemberFormTitle").textContent = `Edit Anggota: ${member.nama}`;
  document.getElementById("adminMemberFormBadge").textContent = `ID KTA: ${member.id}`;

  document.getElementById("adminMemberNama").value = member.nama;
  document.getElementById("adminMemberMarga").value = member.marga;
  document.getElementById("adminMemberGender").value = member.jenisKelamin || "Laki-laki";
  document.getElementById("adminMemberDomisili").value = member.domisili;
  document.getElementById("adminMemberKecamatan").value = member.kecamatanAsal;
  document.getElementById("adminMemberNagori").value = member.nagoriAsal || "";
  document.getElementById("adminMemberProfesi").value = member.profesi;
  document.getElementById("adminMemberTelepon").value = member.telepon;
  document.getElementById("adminMemberEmail").value = member.email || "";
  document.getElementById("adminMemberStatus").value = member.status || "Aktif";
  document.getElementById("adminMemberAlamat").value = member.alamat || "";
  document.getElementById("adminMemberStatusSilaturahmi").value = member.statusSilaturahmi || "";

  const preview = document.getElementById("adminMemberFotoPreview");
  if (preview) {
    preview.src = member.fotoDiri || generateSamplePasfoto(member.nama, member.jenisKelamin);
  }

  const modal = document.getElementById("modalAdminMemberForm");
  if (modal) modal.classList.remove("hidden");
}

function closeAdminMemberFormModal() {
  const modal = document.getElementById("modalAdminMemberForm");
  if (modal) modal.classList.add("hidden");
  adminMemberFotoUploadBase64 = "";
}

// Upload Pasfoto di Form Admin
async function handleAdminMemberFotoUpload(files) {
  if (!files || files.length === 0) return;
  try {
    const compressed = await compressImage(files[0], 600, 800, 0.78);
    adminMemberFotoUploadBase64 = compressed;
    const preview = document.getElementById("adminMemberFotoPreview");
    if (preview) preview.src = compressed;
  } catch (err) {
    console.error("Gagal memproses pasfoto:", err);
    alert("Gagal memproses foto. Silakan coba kembali.");
  }
}

// Gunakan Pasfoto Adat Generator
function adminMemberUseSampleFoto() {
  const nama = document.getElementById("adminMemberNama").value || "Warga IKEIS";
  const gender = document.getElementById("adminMemberGender").value || "Laki-laki";
  const sample = generateSamplePasfoto(nama, gender);
  adminMemberFotoUploadBase64 = sample;
  const preview = document.getElementById("adminMemberFotoPreview");
  if (preview) preview.src = sample;
}

// Simpan Data Anggota (Add / Update)
function handleAdminSaveMember(e) {
  if (e) e.preventDefault();

  const editId = document.getElementById("adminMemberFormId").value;
  const nama = document.getElementById("adminMemberNama").value.trim();
  const marga = document.getElementById("adminMemberMarga").value.trim();
  const gender = document.getElementById("adminMemberGender").value;
  const domisili = document.getElementById("adminMemberDomisili").value;
  const kecamatan = document.getElementById("adminMemberKecamatan").value;
  const nagori = document.getElementById("adminMemberNagori").value.trim();
  const profesi = document.getElementById("adminMemberProfesi").value.trim();
  const telepon = document.getElementById("adminMemberTelepon").value.trim();
  const email = document.getElementById("adminMemberEmail").value.trim();
  const status = document.getElementById("adminMemberStatus").value;
  const alamat = document.getElementById("adminMemberAlamat").value.trim();
  const statusSilaturahmi = document.getElementById("adminMemberStatusSilaturahmi").value.trim();

  if (!nama || !marga || !profesi || !telepon) {
    alert("Mohon lengkapi Nama, Marga, Profesi, dan Nomor Telepon.");
    return;
  }

  const finalFoto = adminMemberFotoUploadBase64 || generateSamplePasfoto(nama, gender);
  const members = getStoredMembers();

  if (editId) {
    // Mode Edit
    const index = members.findIndex(m => m.id === editId);
    if (index !== -1) {
      members[index] = {
        ...members[index],
        nama: nama,
        marga: marga,
        jenisKelamin: gender,
        fotoDiri: finalFoto,
        domisili: domisili,
        kecamatanAsal: kecamatan,
        nagoriAsal: nagori,
        profesi: profesi,
        telepon: telepon,
        email: email,
        status: status,
        alamat: alamat,
        statusSilaturahmi: statusSilaturahmi,
        statusWaktu: statusSilaturahmi ? "Diperbarui oleh Pengurus" : members[index].statusWaktu
      };
    }
  } else {
    // Mode Tambah Baru
    const newId = `IKEIS-JBD-2026-${String(members.length + 1).padStart(3, '0')}`;
    const newMember = {
      id: newId,
      nama: nama,
      marga: marga,
      jenisKelamin: gender,
      fotoDiri: finalFoto,
      domisili: domisili,
      kecamatanAsal: kecamatan,
      nagoriAsal: nagori,
      profesi: profesi,
      telepon: telepon,
      email: email,
      status: status,
      alamat: alamat,
      bidangMinat: "Ukhuwah & Silaturahmi",
      tanggalGabung: new Date().toISOString().split("T")[0],
      statusSilaturahmi: statusSilaturahmi,
      statusWaktu: statusSilaturahmi ? "Baru saja" : "",
      fotoKegiatan: []
    };
    members.unshift(newMember);
  }

  saveMembers(members);
  closeAdminMemberFormModal();

  // Re-render live website & admin table
  renderMembersDirectory();
  renderAdminMembersTable();
  updateLiveStatsHeader();
  updateAdminStatsBadges();

  alert(editId ? `Data anggota ${nama} berhasil diperbarui!` : `Anggota baru ${nama} berhasil ditambahkan!`);
}

// Hapus Anggota
function adminDeleteMember(memberId) {
  const members = getStoredMembers();
  const target = members.find(m => m.id === memberId);
  if (!target) return;

  const confirmed = confirm(
    `PERINGATAN HAPUS DATA:\n\nApakah Anda yakin ingin menghapus data anggota berikut?\nNama: ${target.nama}\nNo. KTA: ${target.id}\n\nTindakan ini tidak dapat dibatalkan.`
  );

  if (!confirmed) return;

  const updated = members.filter(m => m.id !== memberId);
  saveMembers(updated);

  renderMembersDirectory();
  renderAdminMembersTable();
  updateLiveStatsHeader();
  updateAdminStatsBadges();

  alert(`Data anggota ${target.nama} (${target.id}) telah dihapus dari sistem.`);
}

// =====================================================================
// TAB 2: CRUD DINDING FORUM & WARTA
// =====================================================================

function renderAdminForumList() {
  const container = document.getElementById("adminForumListContainer");
  if (!container) return;

  const forum = getStoredForum();

  if (forum.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-slate-800/40 rounded-2xl border border-slate-700 text-slate-400">
        Belum ada postingan warta di forum silaturahmi.
      </div>
    `;
    return;
  }

  container.innerHTML = forum.map(post => {
    const repliesCount = (post.replies || []).length;
    return `
      <div class="p-4 sm:p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3 transition hover:border-slate-600">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-950 text-amber-300 border border-red-800">
              ${post.kategori}
            </span>
            <span class="text-xs text-slate-400">Korwil ${post.korwil}</span>
            <span class="text-xs text-slate-500">•</span>
            <span class="text-xs text-slate-400">${post.waktu}</span>
          </div>

          <div class="flex items-center gap-1.5">
            <button onclick="adminEditPost('${post.id}')" class="px-2.5 py-1 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-xs font-semibold border border-blue-700 transition">
              ✏️ Edit Post
            </button>
            <button onclick="adminManageReplies('${post.id}')" class="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold border border-slate-600 transition">
              💬 Tanggapan (${repliesCount})
            </button>
            <button onclick="adminDeletePost('${post.id}')" class="px-2.5 py-1 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 text-xs font-semibold border border-rose-800 transition">
              🗑️ Hapus
            </button>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-white text-sm sm:text-base">${post.judul}</h4>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 whitespace-pre-line leading-relaxed">${post.isi}</p>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-slate-700/60 text-xs text-slate-400">
          <span>Penulis: <strong class="text-white">${post.author}</strong></span>
          <span>❤️ ${post.likes || 0} Ukhuwah</span>
        </div>
      </div>
    `;
  }).join("");
}

function openAdminAddPostModal() {
  document.getElementById("formAdminPost")?.reset();
  document.getElementById("adminPostFormId").value = "";
  document.getElementById("adminPostFormTitle").textContent = "Siarkan Warta / Postingan Baru";
  const modal = document.getElementById("modalAdminPostForm");
  if (modal) modal.classList.remove("hidden");
}

function adminEditPost(postId) {
  const forum = getStoredForum();
  const post = forum.find(p => p.id === postId);
  if (!post) {
    alert("Postingan tidak ditemukan.");
    return;
  }

  document.getElementById("adminPostFormId").value = post.id;
  document.getElementById("adminPostFormTitle").textContent = "Edit Postingan Forum";
  document.getElementById("adminPostAuthor").value = post.author;
  document.getElementById("adminPostKorwil").value = post.korwil || "Sekretariat Pusat";
  document.getElementById("adminPostKategori").value = post.kategori || "Pengumuman Resmi";
  document.getElementById("adminPostJudul").value = post.judul;
  document.getElementById("adminPostIsi").value = post.isi;

  const modal = document.getElementById("modalAdminPostForm");
  if (modal) modal.classList.remove("hidden");
}

function closeAdminPostFormModal() {
  const modal = document.getElementById("modalAdminPostForm");
  if (modal) modal.classList.add("hidden");
}

function handleAdminSavePost(e) {
  if (e) e.preventDefault();

  const editId = document.getElementById("adminPostFormId").value;
  const author = document.getElementById("adminPostAuthor").value.trim();
  const korwil = document.getElementById("adminPostKorwil").value;
  const kategori = document.getElementById("adminPostKategori").value;
  const judul = document.getElementById("adminPostJudul").value.trim();
  const isi = document.getElementById("adminPostIsi").value.trim();

  if (!author || !judul || !isi) {
    alert("Mohon lengkapi Penulis, Judul, dan Isi Postingan.");
    return;
  }

  const forum = getStoredForum();

  if (editId) {
    const idx = forum.findIndex(p => p.id === editId);
    if (idx !== -1) {
      forum[idx] = {
        ...forum[idx],
        author: author,
        korwil: korwil,
        kategori: kategori,
        judul: judul,
        isi: isi,
        waktu: "Diperbarui oleh Pengurus"
      };
    }
  } else {
    const newPost = {
      id: `post-${Date.now()}`,
      author: author,
      korwil: korwil,
      kategori: kategori,
      waktu: "Baru saja",
      judul: judul,
      isi: isi,
      likes: 1,
      replies: []
    };
    forum.unshift(newPost);
  }

  saveForum(forum);
  closeAdminPostFormModal();

  renderForumFeed();
  renderAdminForumList();
  updateAdminStatsBadges();

  alert(editId ? "Postingan berhasil diperbarui!" : "Warta baru berhasil disiarkan di forum!");
}

function adminDeletePost(postId) {
  const forum = getStoredForum();
  const target = forum.find(p => p.id === postId);
  if (!target) return;

  if (!confirm(`Apakah Anda yakin ingin menghapus postingan: "${target.judul}"?`)) return;

  const updated = forum.filter(p => p.id !== postId);
  saveForum(updated);

  renderForumFeed();
  renderAdminForumList();
  updateAdminStatsBadges();

  alert("Postingan berhasil dihapus dari forum.");
}

// Moderasi Komentar / Tanggapan
let activeModeratingPostId = null;

function adminManageReplies(postId) {
  activeModeratingPostId = postId;
  const forum = getStoredForum();
  const post = forum.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById("modalAdminReplies");
  const listContainer = document.getElementById("adminRepliesList");
  const title = document.getElementById("adminRepliesModalTitle");

  if (title) title.textContent = `Komentar pada: "${post.judul}"`;

  const replies = post.replies || [];

  if (replies.length === 0) {
    listContainer.innerHTML = `
      <div class="p-6 text-center text-xs text-slate-400 bg-slate-800 rounded-xl">
        Belum ada tanggapan atau komentar pada postingan ini.
      </div>
    `;
  } else {
    listContainer.innerHTML = replies.map((rep, idx) => {
      return `
        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-start justify-between gap-3 text-xs">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <strong class="text-white">${rep.author}</strong>
              <span class="text-slate-400 text-[10px]">${rep.waktu}</span>
            </div>
            <p class="text-slate-300 leading-relaxed">${rep.pesan}</p>
          </div>
          <button onclick="adminDeleteReply('${post.id}', ${idx})" class="px-2 py-1 bg-rose-950 hover:bg-rose-900 text-rose-300 rounded text-[11px] font-semibold border border-rose-800 shrink-0">
            Hapus
          </button>
        </div>
      `;
    }).join("");
  }

  if (modal) modal.classList.remove("hidden");
}

function closeAdminRepliesModal() {
  const modal = document.getElementById("modalAdminReplies");
  if (modal) modal.classList.add("hidden");
  activeModeratingPostId = null;
}

function adminDeleteReply(postId, replyIndex) {
  if (!confirm("Hapus komentar ini?")) return;

  const forum = getStoredForum();
  const post = forum.find(p => p.id === postId);
  if (post && post.replies) {
    post.replies.splice(replyIndex, 1);
    saveForum(forum);
    renderForumFeed();
    adminManageReplies(postId);
  }
}

// =====================================================================
// TAB 3: CRUD AGENDA KEGIATAN & RSVP
// =====================================================================

function renderAdminAgendaList() {
  const container = document.getElementById("adminAgendaListContainer");
  if (!container) return;

  const agenda = getStoredAgenda();

  if (agenda.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center bg-slate-800/40 rounded-2xl border border-slate-700 text-slate-400">
        Belum ada jadwal agenda kegiatan yang terdaftar.
      </div>
    `;
    return;
  }

  container.innerHTML = agenda.map(ag => {
    return `
      <div class="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4 transition hover:border-slate-600">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-950 text-amber-300 border border-red-800">
              ${ag.status}
            </span>
            <div class="flex items-center gap-1.5 text-xs">
              <span class="text-slate-400">RSVP:</span>
              <strong class="text-amber-400">${ag.pesertaTerdaftar} Warga</strong>
            </div>
          </div>

          <h4 class="font-bold text-white text-base leading-snug">${ag.judul}</h4>

          <div class="mt-3 space-y-1.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div>📅 <strong>Waktu:</strong> ${ag.tanggal} • ${ag.jam}</div>
            <div>📍 <strong>Tempat:</strong> ${ag.lokasi}</div>
            ${ag.penceramah ? `<div>🎙️ <strong>Penceramah:</strong> ${ag.penceramah}</div>` : ''}
            <div>💡 <strong>Tema:</strong> "${ag.tema}"</div>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-700/60 flex items-center justify-between gap-2">
          <div class="flex items-center gap-1 text-xs">
            <button onclick="adminAdjustRsvp('${ag.id}', 1)" class="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold" title="Tambah 1 Peserta RSVP">
              +1
            </button>
            <button onclick="adminAdjustRsvp('${ag.id}', -1)" class="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold" title="Kurang 1 Peserta RSVP">
              -1
            </button>
          </div>

          <div class="flex items-center gap-1.5">
            <button onclick="adminEditAgenda('${ag.id}')" class="px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-xs font-semibold border border-blue-700 transition">
              ✏️ Edit
            </button>
            <button onclick="adminDeleteAgenda('${ag.id}')" class="px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 text-xs font-semibold border border-rose-800 transition">
              🗑️ Hapus
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openAdminAddAgendaModal() {
  document.getElementById("formAdminAgenda")?.reset();
  document.getElementById("adminAgendaFormId").value = "";
  document.getElementById("adminAgendaFormTitle").textContent = "Tambah Agenda Kegiatan Baru";
  const modal = document.getElementById("modalAdminAgendaForm");
  if (modal) modal.classList.remove("hidden");
}

function adminEditAgenda(agendaId) {
  const agenda = getStoredAgenda();
  const ag = agenda.find(a => a.id === agendaId);
  if (!ag) {
    alert("Agenda tidak ditemukan.");
    return;
  }

  document.getElementById("adminAgendaFormId").value = ag.id;
  document.getElementById("adminAgendaFormTitle").textContent = "Edit Agenda Kegiatan";
  document.getElementById("adminAgendaJudul").value = ag.judul;
  document.getElementById("adminAgendaTanggal").value = ag.tanggal;
  document.getElementById("adminAgendaJam").value = ag.jam;
  document.getElementById("adminAgendaLokasi").value = ag.lokasi;
  document.getElementById("adminAgendaPenceramah").value = ag.penceramah || "";
  document.getElementById("adminAgendaStatus").value = ag.status || "Membuka RSVP";
  document.getElementById("adminAgendaTema").value = ag.tema || "";
  document.getElementById("adminAgendaPeserta").value = ag.pesertaTerdaftar || 0;

  const modal = document.getElementById("modalAdminAgendaForm");
  if (modal) modal.classList.remove("hidden");
}

function closeAdminAgendaFormModal() {
  const modal = document.getElementById("modalAdminAgendaForm");
  if (modal) modal.classList.add("hidden");
}

function handleAdminSaveAgenda(e) {
  if (e) e.preventDefault();

  const editId = document.getElementById("adminAgendaFormId").value;
  const judul = document.getElementById("adminAgendaJudul").value.trim();
  const tanggal = document.getElementById("adminAgendaTanggal").value.trim();
  const jam = document.getElementById("adminAgendaJam").value.trim();
  const lokasi = document.getElementById("adminAgendaLokasi").value.trim();
  const penceramah = document.getElementById("adminAgendaPenceramah").value.trim();
  const status = document.getElementById("adminAgendaStatus").value;
  const tema = document.getElementById("adminAgendaTema").value.trim();
  const peserta = parseInt(document.getElementById("adminAgendaPeserta").value, 10) || 0;

  if (!judul || !tanggal || !jam || !lokasi || !tema) {
    alert("Mohon lengkapi Judul, Tanggal, Jam, Lokasi, dan Tema kegiatan.");
    return;
  }

  const agenda = getStoredAgenda();

  if (editId) {
    const idx = agenda.findIndex(a => a.id === editId);
    if (idx !== -1) {
      agenda[idx] = {
        ...agenda[idx],
        judul: judul,
        tanggal: tanggal,
        jam: jam,
        lokasi: lokasi,
        penceramah: penceramah,
        status: status,
        tema: tema,
        pesertaTerdaftar: peserta
      };
    }
  } else {
    const newAgenda = {
      id: `agenda-${Date.now()}`,
      judul: judul,
      tanggal: tanggal,
      jam: jam,
      lokasi: lokasi,
      penceramah: penceramah,
      status: status,
      tema: tema,
      pesertaTerdaftar: peserta
    };
    agenda.push(newAgenda);
  }

  saveAgenda(agenda);
  closeAdminAgendaFormModal();

  renderAgendaCards();
  renderAdminAgendaList();
  updateAdminStatsBadges();

  alert(editId ? "Agenda berhasil diperbarui!" : "Agenda kegiatan baru berhasil ditambahkan!");
}

function adminDeleteAgenda(agendaId) {
  const agenda = getStoredAgenda();
  const target = agenda.find(a => a.id === agendaId);
  if (!target) return;

  if (!confirm(`Hapus agenda: "${target.judul}"?`)) return;

  const updated = agenda.filter(a => a.id !== agendaId);
  saveAgenda(updated);

  renderAgendaCards();
  renderAdminAgendaList();
  updateAdminStatsBadges();

  alert("Agenda berhasil dihapus.");
}

function adminAdjustRsvp(agendaId, delta) {
  const agenda = getStoredAgenda();
  const ag = agenda.find(a => a.id === agendaId);
  if (ag) {
    ag.pesertaTerdaftar = Math.max(0, (parseInt(ag.pesertaTerdaftar, 10) || 0) + delta);
    saveAgenda(agenda);
    renderAgendaCards();
    renderAdminAgendaList();
  }
}

// =====================================================================
// TAB 4: KAS SOLIDARITAS & PENGATURAN KORWIL
// =====================================================================

function renderAdminKasForm() {
  const config = getStoredConfig();

  const bankInput = document.getElementById("adminKasNamaBank");
  const noRekInput = document.getElementById("adminKasNoRekening");
  const anInput = document.getElementById("adminKasAtasNama");
  const waInput = document.getElementById("adminKasKontakWa");

  if (bankInput) bankInput.value = config.kas?.namaBank || "";
  if (noRekInput) noRekInput.value = config.kas?.noRekening || "";
  if (anInput) anInput.value = config.kas?.atasNama || "";
  if (waInput) waInput.value = config.kas?.kontakKonfirmasi || "";
}

function renderAdminKorwilList() {
  const container = document.getElementById("adminKorwilListContainer");
  if (!container) return;

  const config = getStoredConfig();
  const korwils = config.korwil || [];

  container.innerHTML = korwils.map((k, idx) => {
    return `
      <div class="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80 grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-center">
        <div>
          <label class="block text-[10px] text-slate-400 font-bold uppercase mb-0.5">Wilayah:</label>
          <input type="text" id="korwil_wilayah_${idx}" value="${k.wilayah}" class="admin-input w-full text-xs font-bold text-amber-300" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 font-bold uppercase mb-0.5">Nama Koordinator:</label>
          <input type="text" id="korwil_nama_${idx}" value="${k.nama}" class="admin-input w-full text-xs" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 font-bold uppercase mb-0.5">Sekretariat / Wilayah:</label>
          <input type="text" id="korwil_lokasi_${idx}" value="${k.lokasi}" class="admin-input w-full text-xs" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 font-bold uppercase mb-0.5">Nomor WhatsApp (62...):</label>
          <input type="text" id="korwil_wa_${idx}" value="${k.wa}" class="admin-input w-full text-xs font-mono" />
        </div>
      </div>
    `;
  }).join("");
}

function adminSaveKasDanKorwil() {
  const config = getStoredConfig();

  // Read Kas
  const bankInput = document.getElementById("adminKasNamaBank");
  const noRekInput = document.getElementById("adminKasNoRekening");
  const anInput = document.getElementById("adminKasAtasNama");
  const waInput = document.getElementById("adminKasKontakWa");

  config.kas = {
    namaBank: bankInput?.value.trim() || config.kas.namaBank,
    noRekening: noRekInput?.value.trim() || config.kas.noRekening,
    atasNama: anInput?.value.trim() || config.kas.atasNama,
    kontakKonfirmasi: waInput?.value.trim() || config.kas.kontakKonfirmasi
  };

  // Read Korwils
  const korwils = config.korwil || [];
  korwils.forEach((k, idx) => {
    const wil = document.getElementById(`korwil_wilayah_${idx}`);
    const nm = document.getElementById(`korwil_nama_${idx}`);
    const lok = document.getElementById(`korwil_lokasi_${idx}`);
    const wa = document.getElementById(`korwil_wa_${idx}`);

    if (wil) k.wilayah = wil.value.trim();
    if (nm) k.nama = nm.value.trim();
    if (lok) k.lokasi = lok.value.trim();
    if (wa) k.wa = wa.value.trim().replace(/[^0-9]/g, "");
  });
  config.korwil = korwils;

  saveConfig(config);

  // Update homepage UI immediately
  renderBaitulMalInfo();
  renderKorwilCards();

  alert("Pengaturan Kas Solidaritas dan Kontak Korwil berhasil disimpan dan langsung diperbarui di halaman web!");
}

// =====================================================================
// TAB 5: CADANGAN & SISTEM PENGATURAN
// =====================================================================

function adminChangePin(e) {
  if (e) e.preventDefault();

  const oldPinInput = document.getElementById("adminOldPin");
  const newPinInput = document.getElementById("adminNewPin");

  const config = getStoredConfig();
  const currentPin = config.adminPin || "ikeis2026";

  if (oldPinInput.value.trim() !== currentPin) {
    alert("PIN Lama tidak sesuai! Silakan periksa kembali.");
    oldPinInput.focus();
    return;
  }

  const newPin = newPinInput.value.trim();
  if (newPin.length < 4) {
    alert("PIN baru minimal harus 4 karakter.");
    newPinInput.focus();
    return;
  }

  config.adminPin = newPin;
  saveConfig(config);

  oldPinInput.value = "";
  newPinInput.value = "";

  alert(`Alhamdulillah! PIN Administrator berhasil diperbarui menjadi: "${newPin}". Harap catat PIN ini dengan aman.`);
}

// Ekspor Full JSON Database
function adminExportDatabaseJSON() {
  const database = {
    ikeis_members: getStoredMembers(),
    ikeis_forum: getStoredForum(),
    ikeis_agenda: getStoredAgenda(),
    ikeis_config: getStoredConfig(),
    exportedAt: new Date().toISOString(),
    version: "2.0-full-portal"
  };

  const jsonStr = JSON.stringify(database, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `IKEIS_Database_Full_Backup_${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("Berkas cadangan penuh database (Full Backup JSON) berhasil diunduh.");
}

// Impor / Pulihkan Database dari JSON
function adminImportDatabaseJSON() {
  const fileInput = document.getElementById("adminRestoreFileInput");
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    alert("Silakan pilih berkas .json cadangan terlebih dahulu.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.ikeis_members && !data.ikeis_forum && !data.ikeis_agenda) {
        alert("Format berkas JSON tidak sesuai dengan struktur database IKEIS.");
        return;
      }

      if (confirm(`Apakah Anda yakin ingin memulihkan database dari berkas "${file.name}"? Seluruh data saat ini akan ditimpa dengan data dari berkas cadangan.`)) {
        if (data.ikeis_members) saveMembers(data.ikeis_members);
        if (data.ikeis_forum) saveForum(data.ikeis_forum);
        if (data.ikeis_agenda) saveAgenda(data.ikeis_agenda);
        if (data.ikeis_config) saveConfig(data.ikeis_config);

        // Re-render whole site
        renderMembersDirectory();
        renderForumFeed();
        renderAgendaCards();
        renderBaitulMalInfo();
        renderKorwilCards();
        updateLiveStatsHeader();

        // Refresh admin views
        renderAdminMembersTable();
        renderAdminForumList();
        renderAdminAgendaList();
        renderAdminKasForm();
        renderAdminKorwilList();
        updateAdminStatsBadges();

        fileInput.value = "";
        alert("Alhamdulillah! Database IKEIS berhasil dipulihkan sepenuhnya.");
      }
    } catch (err) {
      console.error("Gagal membaca file JSON:", err);
      alert("Berkas JSON rusak atau tidak valid.");
    }
  };

  reader.readAsText(file);
}

// Reset Database ke Nilai Bawaan
function adminResetToDefaultData() {
  const confirm1 = confirm("PERINGATAN TINGKAT TINGGI:\n\nApakah Anda benar-benar yakin ingin mereset seluruh database web ke pengaturan awal pabrik?\nSemua data anggota yang baru didaftarkan dan postingan baru akan kembali ke sampel awal.");
  if (!confirm1) return;

  const confirmPrompt = prompt("Ketik kata 'RESET' (huruf besar) untuk melanjutkan reset pabrik:");
  if (confirmPrompt !== "RESET") {
    alert("Proses reset dibatalkan.");
    return;
  }

  localStorage.removeItem("ikeis_members");
  localStorage.removeItem("ikeis_forum");
  localStorage.removeItem("ikeis_agenda");
  localStorage.removeItem("ikeis_config");

  // Re-read triggers seeds
  getStoredMembers();
  getStoredForum();
  getStoredAgenda();
  getStoredConfig();

  // Re-render
  renderMembersDirectory();
  renderForumFeed();
  renderAgendaCards();
  renderBaitulMalInfo();
  renderKorwilCards();
  updateLiveStatsHeader();

  renderAdminMembersTable();
  renderAdminForumList();
  renderAdminAgendaList();
  renderAdminKasForm();
  renderAdminKorwilList();
  updateAdminStatsBadges();

  alert("Database dan materi web IKEIS telah berhasil direset ke pengaturan default!");
}

// =====================================================================
// BAGIKAN LINK WEBSITE MELALUI WHATSAPP
// =====================================================================
function shareWebViaWhatsApp() {
  const currentUrl = window.location.href;
  const message = 
`assalamualaikum warahmatullahi wabarakatuh, 

Mari bergabung dan jalin silaturahmi bersama keluarga besar Ikatan Keluarga Islam Simalungun (IKEIS) Wilayah Jabodetabek.

Portal Resmi IKEIS Jabodetabek:
- Registrasi Anggota & KTA Digital
- Direktori Warga Simalungun Perantauan
- Dinding Ukhuwah & Kabar Silaturahmi
- Kas Solidaritas Kemalangan (Baitul Mal) & Ambulans
- Agenda Pertemuan & Pengajian Rutin

Kunjungi tautan website resmi berikut:
${currentUrl}

Habonaron Do Bona.
Horas, Bujur!`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// =====================================================================
// DATA MASTER & LOGIKA SUSUNAN PENGURUS & PENGUMUMAN PENGURUS
// =====================================================================

const DATA_PENGURUS = [
  // --- DEWAN PEMBINA & PENASEHAT ---
  {
    id: "pengurus-1",
    nama: "Mayjen TNI (Purn.) H. Asril Damanik, S.IP.",
    kategori: "penasehat",
    kategoriLabel: "Dewan Pembina",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    jabatan: "Ketua Dewan Pembina",
    marga: "Damanik",
    asal: "Siantar / Silimakuta",
    domisili: "Jakarta Timur",
    gender: "Laki-laki",
    foto: null,
    pesan: "Menjaga martabat Habonaron Do Bona dan merajut solidaritas sesama perantau Muslim Simalungun."
  },
  {
    id: "pengurus-2",
    nama: "Prof. Dr. H. Faisal Saragih, M.A.",
    kategori: "penasehat",
    kategoriLabel: "Dewan Penasehat",
    badgeColor: "bg-red-100 text-red-900 border-red-200",
    jabatan: "Ketua Dewan Penasehat & Ulama",
    marga: "Saragih Garingging",
    asal: "Kec. Raya",
    domisili: "Jakarta Selatan",
    gender: "Laki-laki",
    foto: null,
    pesan: "Ukhuwah Islamiyah adalah fondasi kerukunan, tradisi luhur adalah jati diri bermasyarakat."
  },
  {
    id: "pengurus-3",
    nama: "Drs. H. Bachtiar Purba, M.M.",
    kategori: "penasehat",
    kategoriLabel: "Dewan Penasehat",
    badgeColor: "bg-red-100 text-red-900 border-red-200",
    jabatan: "Dewan Penasehat Adat & Budaya",
    marga: "Purba Dasuha",
    asal: "Purba Saribu",
    domisili: "Jakarta Pusat",
    gender: "Laki-laki",
    foto: null,
    pesan: "Falsafah Tolu Sahundulan menjadi pedoman musyawarah dan adab santun di rantau."
  },

  // --- BADAN PENGURUS HARIAN (BPH) ---
  {
    id: "pengurus-4",
    nama: "H. Zulkifli Damanik, S.E., M.M.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-red-900 text-amber-300 border-red-700",
    jabatan: "Ketua Umum",
    marga: "Damanik",
    asal: "Kec. Tapian Dolok",
    domisili: "Jakarta Selatan",
    gender: "Laki-laki",
    foto: null,
    telepon: "081289112233",
    pesan: "Membangun Ukhuwah, Melestarikan Budaya, dan Berkhidmat untuk Kemaslahatan Umat."
  },
  {
    id: "pengurus-5",
    nama: "Ir. Hendra Saragih, M.T.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-red-100 text-red-900 border-red-200",
    jabatan: "Wakil Ketua Umum I (Organisasi & Wilayah)",
    marga: "Saragih Garingging",
    asal: "Kec. Raya",
    domisili: "Jakarta Timur",
    gender: "Laki-laki",
    foto: null,
    telepon: "081377889900",
    pesan: "Konsolidasi aktif menjangkau seluruh warga Muslim Simalungun di 5 wilayah kota DKI Jakarta."
  },
  {
    id: "pengurus-6",
    nama: "Drs. H. Ahmad Fauzi Sinaga, M.Si.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-red-100 text-red-900 border-red-200",
    jabatan: "Wakil Ketua Umum II (Sosial & Keagamaan)",
    marga: "Sinaga Dadihurung",
    asal: "Kec. Tanah Jawa",
    domisili: "Jakarta Barat",
    gender: "Laki-laki",
    foto: null,
    telepon: "081122334455",
    pesan: "Memperkuat fungsi Baitul Mal sebagai pelindung sosial kemalangan dan duka cita sesama warga."
  },
  {
    id: "pengurus-7",
    nama: "Mhd. Rizky Damanik, S.Kom., M.T.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-slate-900 text-amber-300 border-slate-700",
    jabatan: "Sekretaris Umum",
    marga: "Damanik",
    asal: "Kec. Siantar",
    domisili: "Jakarta Pusat",
    gender: "Laki-laki",
    foto: null,
    telepon: "081566778899",
    pesan: "Tata kelola administrasi modern berbasis digitalisasi portal KTA dan transparansi informasi."
  },
  {
    id: "pengurus-8",
    nama: "Siti Aminah Purba, S.Pd.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    jabatan: "Wakil Sekretaris",
    marga: "Purba Tambak",
    asal: "Kec. Haranggaol Horison",
    domisili: "Jakarta Utara",
    gender: "Perempuan",
    foto: null,
    telepon: "081833445566",
    pesan: "Pencatatan data keluarga, dokumentasi warta, dan komunikasi aktif lintas generasi muda."
  },
  {
    id: "pengurus-9",
    nama: "Hj. Mardiah Saragih, S.E., Ak., CA.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    jabatan: "Bendahara Umum",
    marga: "Saragih Simarmata",
    asal: "Kec. Silou Kahean",
    domisili: "Jakarta Selatan",
    gender: "Perempuan",
    foto: null,
    telepon: "081799887766",
    pesan: "Amanah dan akuntabel dalam pelaporan kas solidaritas, infaq silaturahmi, dan dana ta'awun."
  },
  {
    id: "pengurus-10",
    nama: "H. Syahrial Sinaga, B.B.A.",
    kategori: "bph",
    kategoriLabel: "Pimpinan BPH",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    jabatan: "Wakil Bendahara",
    marga: "Sinaga Porti",
    asal: "Kec. Bosar Maligas",
    domisili: "Jakarta Timur",
    gender: "Laki-laki",
    foto: null,
    telepon: "081234567811",
    pesan: "Penyaluran cepat tanggap dana duka cita dan ambulans ukhuwah bagi warga yang berduka."
  },

  // --- KETUA BIDANG ---
  {
    id: "pengurus-11",
    nama: "Ust. Dr. H. Imran Purba, Lc., M.A.",
    kategori: "bidang",
    kategoriLabel: "Ketua Bidang",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    jabatan: "Ketua Bidang Dakwah & Ukhuwah Islamiyah",
    marga: "Purba Siboro",
    asal: "Kec. Dolok Batu Nanggar",
    domisili: "Jakarta Pusat",
    gender: "Laki-laki",
    foto: null,
    telepon: "081211223344",
    pesan: "Menyelenggarakan kajian berkala, bimbingan fardhu kifayah, dan pengajian keluarga."
  },
  {
    id: "pengurus-12",
    nama: "H. Rustam Damanik, S.Sn.",
    kategori: "bidang",
    kategoriLabel: "Ketua Bidang",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    jabatan: "Ketua Bidang Adat, Seni & Falsafah Budaya",
    marga: "Damanik",
    asal: "Kec. Panei",
    domisili: "Jakarta Selatan",
    gender: "Laki-laki",
    foto: null,
    telepon: "081399881122",
    pesan: "Merawat tutur adat, tradisi kuliner Dayok Binatur halal, dan filosofi Habonaron Do Bona."
  },
  {
    id: "pengurus-13",
    nama: "Ir. Muhammad Ilham Saragih",
    kategori: "bidang",
    kategoriLabel: "Ketua Bidang",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-200",
    jabatan: "Ketua Bidang Sosial Kemalangan & Baitul Mal",
    marga: "Saragih Sumbayak",
    asal: "Kec. Gunung Malela",
    domisili: "Jakarta Barat",
    gender: "Laki-laki",
    foto: null,
    telepon: "081744556677",
    pesan: "Siaga pendampingan rumah duka, santunan kemalangan, dan layanan mobil ambulans gratis."
  },
  {
    id: "pengurus-14",
    nama: "Hj. Roslina Sinaga, S.E.",
    kategori: "bidang",
    kategoriLabel: "Ketua Bidang",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    jabatan: "Ketua Bidang Pemberdayaan Usaha & UMKM",
    marga: "Sinaga",
    asal: "Kec. Bandar (Perdagangan)",
    domisili: "Jakarta Timur",
    gender: "Perempuan",
    foto: null,
    telepon: "081577889911",
    pesan: "Pemberdayaan jejaring wirausaha, lapak usaha warga, dan kemitraan ekonomi sesama dongan tubu."
  },
  {
    id: "pengurus-15",
    nama: "Fajar Damanik, S.I.Kom.",
    kategori: "bidang",
    kategoriLabel: "Ketua Bidang",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-200",
    jabatan: "Ketua Bidang Kepemudaan, Humas & Media",
    marga: "Damanik",
    asal: "Kec. Ujung Padang",
    domisili: "Jakarta Utara",
    gender: "Laki-laki",
    foto: null,
    telepon: "081922334455",
    pesan: "Merangkul generasi muda diaspora Simalungun melalui kreativitas digital, olahraga, dan sosial."
  }
];

const DATA_PENGUMUMAN_PENGURUS = [
  {
    id: "ann-1",
    nomor: "SK-01/DPP-IKEIS/DKI/X/2024",
    kategori: "sk",
    badgeLabel: "SK Resmi Pengurus",
    badgeClass: "bg-red-100 text-red-900 border-red-300",
    tanggal: "15 Oktober 2024 (Masa Khidmat 2024–2029)",
    judul: "Surat Keputusan Pengesahan & Pengukuhan Susunan Badan Pengurus IKEIS DKI Jakarta",
    ringkasan: "Memutuskan dan mengesahkan secara sah susunan Dewan Pembina, Dewan Penasehat, Badan Pengurus Harian (BPH), serta Koordinator Bidang Ikatan Keluarga Islam Simalungun Wilayah DKI Jakarta sebagai perpanjangan amanah ukhuwah dan pengayom perantau.",
    penandatangan: "Dewan Pembina & Ketua Umum IKEIS DKI Jakarta"
  },
  {
    id: "ann-2",
    nomor: "MKL-08/BPH-IKEIS/DKI/2026",
    kategori: "maklumat",
    badgeLabel: "Maklumat Silaturahmi",
    badgeClass: "bg-amber-100 text-amber-900 border-amber-300",
    tanggal: "12 Oktober 2026",
    judul: "Maklumat Silaturahmi Akbar Warga Muslim Simalungun se-DKI Jakarta di TMII",
    ringkasan: "Mengundang seluruh dongan sabutuha, boru, panogolan keluarga besar Muslim Simalungun dalam pertemuan akbar tahunan. Agenda meliputi silaturahmi perantau, tausiyah keagamaan, jamuan khas Dayok Binatur halal, dan santunan anak yatim.",
    penandatangan: "H. Zulkifli Damanik, S.E. (Ketum) & Mhd. Rizky Damanik, S.Kom. (Sekum)"
  },
  {
    id: "ann-3",
    nomor: "HMB-03/SOSIAL-IKEIS/2026",
    kategori: "himbauan",
    badgeLabel: "Himbauan Sosial",
    badgeClass: "bg-emerald-100 text-emerald-900 border-emerald-300",
    tanggal: "05 Oktober 2026",
    judul: "Himbauan Penguatan Kas Solidaritas Kemalangan & Siaga Ambulans Ukhuwah",
    ringkasan: "Laporan keterbukaan pengelolaan dana duka cita dan himbauan infaq/ta'awun sukarela Baitul Mal sebesar Rp 25.000/bulan per KK. Dana ini digunakan langsung untuk menjamin fardhu kifayah, santunan lelayu, dan pengantaran jenazah sesama warga.",
    penandatangan: "Bidang Sosial & Bendahara Umum IKEIS DKI Jakarta"
  },
  {
    id: "ann-4",
    nomor: "INS-02/ORG-IKEIS/DKI/2026",
    kategori: "maklumat",
    badgeLabel: "Instruksi Organisasi",
    badgeClass: "bg-blue-100 text-blue-900 border-blue-300",
    tanggal: "01 Oktober 2026",
    judul: "Instruksi Pemutakhiran Database Warga & Penerbitan KTA Digital Resmi",
    ringkasan: "Dihimbau kepada seluruh korwil dan koordinator keluarga di DKI Jakarta untuk mendaftarkan sanak saudara pada portal resmi. KTA Digital resmi dilengkapi nomor registrasi unik untuk mempermudah koordinasi sosial dan bantuan kemalangan.",
    penandatangan: "Sekretariat Pengurus IKEIS DKI Jakarta"
  }
];

// FUNGSI RENDER SUSUNAN PENGURUS
function renderPengurusCards(kategori = "all") {
  const container = document.getElementById("gridPengurusCards");
  if (!container) return;

  const filtered = kategori === "all" ? 
    DATA_PENGURUS : 
    DATA_PENGURUS.filter(p => p.kategori === kategori);

  container.innerHTML = filtered.map(p => {
    const fotoSrc = p.foto || generateSamplePasfoto(p.nama, p.gender);
    const waUrl = p.telepon ? `https://api.whatsapp.com/send?phone=62${p.telepon.replace(/^0/, '')}&text=${encodeURIComponent(`Assalamu'alaikum Bapa/Uda/Inang ${p.nama}, salam silaturahmi dari warga IKEIS DKI Jakarta...`)}` : null;

    return `
      <div class="pengurus-card rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div>
          <!-- Pasfoto Resmi 3:4 Proporsional -->
          <div class="pengurus-photo-box mb-4">
            <img src="${fotoSrc}" alt="Pasfoto ${p.nama}" />
          </div>

          <!-- Kategori & Jabatan -->
          <div class="text-center mb-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${p.badgeColor} mb-1.5">
              ${p.kategoriLabel}
            </span>
            <h4 class="font-bold text-sm sm:text-base text-red-950 font-serif leading-snug">
              ${p.jabatan}
            </h4>
            <h5 class="text-sm font-black text-slate-800 mt-1">
              ${p.nama}
            </h5>
          </div>

          <!-- Metadata Silsilah & Domisili -->
          <div class="bg-slate-50 rounded-xl p-3 text-xs space-y-1.5 border border-slate-200/80 mb-3 text-slate-600">
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Marga:</span>
              <span class="font-bold text-slate-800">${p.marga}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Tanoh Asal:</span>
              <span class="font-semibold text-slate-700">${p.asal}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Domisili:</span>
              <span class="font-semibold text-slate-700">${p.domisili}</span>
            </div>
          </div>

          <!-- Kutipan Amanah / Motto -->
          <p class="text-xs text-slate-500 italic text-center px-1 mb-4">
            "${p.pesan}"
          </p>
        </div>

        <!-- Tombol Aksi Silaturahmi WhatsApp -->
        <div>
          ${waUrl ? `
            <a href="${waUrl}" target="_blank" class="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition">
              <svg class="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.053 1.343 1.849.528.47 1.077.674 1.279.76.202.086.319.072.435-.058.116-.13.491-.57.622-.765.13-.195.26-.162.434-.097.174.065 1.102.52 1.29.614.188.094.313.141.359.22.046.079.046.455-.098.86z"/></svg>
              <span>Hubungi Pengurus</span>
            </a>
          ` : `
            <div class="w-full py-2 px-3 rounded-xl bg-slate-100 text-slate-500 font-medium text-xs text-center border border-slate-200">
              Sekretariat IKEIS DKI Jakarta
            </div>
          `}
        </div>
      </div>
    `;
  }).join("");
}

// FILTER PENGURUS TAB
function filterPengurus(kategori) {
  document.querySelectorAll(".tab-pengurus-btn").forEach(btn => {
    btn.classList.remove("active", "bg-red-900", "text-white", "shadow-md");
    btn.classList.add("bg-slate-100", "text-slate-700");
  });

  const activeBtn = document.getElementById(`tabPengurus-${kategori}`);
  if (activeBtn) {
    activeBtn.classList.add("active", "bg-red-900", "text-white", "shadow-md");
    activeBtn.classList.remove("bg-slate-100", "text-slate-700");
  }

  renderPengurusCards(kategori);
}

// FUNGSI RENDER PENGUMUMAN PENGURUS
function renderPengumumanCards(kategori = "all") {
  const container = document.getElementById("gridPengumumanCards");
  if (!container) return;

  const filtered = kategori === "all" ?
    DATA_PENGUMUMAN_PENGURUS :
    DATA_PENGUMUMAN_PENGURUS.filter(a => a.kategori === kategori);

  container.innerHTML = filtered.map(a => {
    return `
      <div class="announce-card bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between relative overflow-hidden">
        <div class="simalungun-border-stripe absolute top-0 left-0 right-0 h-1"></div>
        <div>
          <!-- Header Card Pengumuman -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pt-1">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider ${a.badgeClass}">
              ${a.badgeLabel}
            </span>
            <span class="text-xs text-slate-400 font-medium">${a.tanggal}</span>
          </div>

          <div class="text-[11px] font-mono text-red-800 font-bold mb-1.5">${a.nomor}</div>
          <h4 class="font-serif font-black text-lg text-slate-900 mb-2 leading-snug">
            ${a.judul}
          </h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            ${a.ringkasan}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div class="text-slate-500">
            <span class="block text-[10px] uppercase font-bold text-slate-400">Dikeluarkan oleh:</span>
            <span class="font-bold text-slate-800">${a.penandatangan}</span>
          </div>

          <button onclick="sharePengumumanViaWhatsApp('${a.id}')" class="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5 fill-current text-emerald-700" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.053 1.343 1.849.528.47 1.077.674 1.279.76.202.086.319.072.435-.058.116-.13.491-.57.622-.765.13-.195.26-.162.434-.097.174.065 1.102.52 1.29.614.188.094.313.141.359.22.046.079.046.455-.098.86z"/></svg>
            <span>Share ke WA</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// FILTER PENGUMUMAN TAB
function filterPengumuman(kategori) {
  document.querySelectorAll(".tab-announce-btn").forEach(btn => {
    btn.classList.remove("active", "bg-red-900", "text-white", "shadow-sm");
    btn.classList.add("bg-slate-100", "text-slate-700");
  });

  const activeBtn = document.getElementById(`tabAnnounce-${kategori}`);
  if (activeBtn) {
    activeBtn.classList.add("active", "bg-red-900", "text-white", "shadow-sm");
    activeBtn.classList.remove("bg-slate-100", "text-slate-700");
  }

  renderPengumumanCards(kategori);
}

// BAGIKAN PENGUMUMAN VIA WHATSAPP
function sharePengumumanViaWhatsApp(annId) {
  const ann = DATA_PENGUMUMAN_PENGURUS.find(a => a.id === annId);
  if (!ann) return;

  const currentUrl = window.location.href.split("#")[0] + "#pengumuman-pengurus";
  const text = 
`*PENGUMUMAN RESMI PENGURUS IKEIS DKI JAKARTA*
Nomor: ${ann.nomor}
Tanggal: ${ann.tanggal}

*${ann.judul}*

${ann.ringkasan}

_Dikeluarkan oleh: ${ann.penandatangan}_

Baca selengkapnya di portal resmi IKEIS DKI Jakarta:
${currentUrl}

Habonaron Do Bona. Horas, Bujur!`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}


