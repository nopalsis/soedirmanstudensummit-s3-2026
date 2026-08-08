export interface Faculty {
	title: string;
	desc: string;
	facultyColor: string;
	link: string;
}

const dataFakultas: Faculty[] = [
	{
		title: 'Fakultas Pertanian',
		desc: 'Fakultas Pertanian Universitas Jenderal Soedirman (Faperta) merupakan fakultas yang paling awal berdiri sekaligus menjadi dasar pembentukan Unsoed di Purwokerto, resmi dibuka pada 20 September 1962. Fakultas ini berfokus pada pengembangan ilmu dan teknologi pertanian tropis berbasis kearifan lokal desa dengan standar internasional. Program studinya terbagi dalam tiga jurusan: Agroekoteknologi, Sosial Ekonomi Pertanian, dan Teknologi Pertanian, dari jenjang Diploma hingga Doktor.',
		facultyColor: 'bg-[#046941]',
		link: 'https://faperta.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Biologi',
		desc: 'Fakultas Biologi Universitas Jenderal Soedirman berdiri sejak 23 September 1963, bersamaan dengan berdirinya Unsoed. Fakultas ini menyelenggarakan program sarjana S1 Biologi, S1 Mikrobiologi, dan S1 Biologi Terapan, serta program vokasi D3 Budi Daya Ikan. Untuk jenjang lanjut, tersedia S2 Biologi sejak 2002 dan S3 Biologi sejak 22 Agustus 2013.',
		facultyColor: 'bg-[#0101FA]',
		link: 'https://bio.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Ekonomi dan Bisnis',
		desc: 'Fakultas Ekonomi dan Bisnis (FEB) Universitas Jenderal Soedirman didirikan pada 9 Oktober 1963 sebagai salah satu dari tiga fakultas pertama Unsoed, awalnya bernama Fakultas Ekonomi sebelum berganti nama menjadi FEB pada 2013. FEB menyelenggarakan pendidikan dari jenjang Diploma, Sarjana, Magister, Profesi, hingga Doktor di bidang Akuntansi, Manajemen, dan Ekonomi. Fakultas ini turut aktif dalam penelitian, kewirausahaan, dan penguatan ekonomi berbasis kearifan lokal.',
		facultyColor: 'bg-[#9F9E9D]',
		link: 'https://feb.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Peternakan',
		desc: 'Fakultas Peternakan Universitas Jenderal Soedirman resmi berdiri pada 10 Februari 1966 melalui serah terima Fakultas Kedokteran Hewan dan Peternakan UII Yogyakarta Cabang Purwokerto. Fakultas ini berfokus pada pengembangan sumberdaya peternakan dan kearifan lokal berkelanjutan melalui sains produksi, nutrisi dan pakan, sosial ekonomi, serta teknologi peternakan. Peternakan menyelenggarakan empat jenjang program studi: Diploma Tiga Budidaya Ternak, Sarjana, Magister, dan Doktor Peternakan.',
		facultyColor: 'bg-[#FF9934]',
		link: 'https://fapet.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Hukum',
		desc: 'Fakultas Hukum Universitas Jenderal Soedirman (FH Unsoed) didirikan berdasarkan Keputusan Presiden RI No. 50 Tahun 1982, dengan fokus pada pendidikan hukum berkualitas berbasis integritas moral dan kearifan lokal. FH Unsoed menyelenggarakan Program Sarjana Ilmu Hukum (termasuk Kelas Internasional berakreditasi FIBAA), serta Program Pascasarjana Magister Ilmu Hukum, Magister Kenotariatan, dan Doktor Ilmu Hukum.',
		facultyColor: 'bg-[#FC0101]',
		link: 'https://fh.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Ilmu Sosial dan Ilmu Politik',
		desc: 'Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) Universitas Jenderal Soedirman resmi berdiri pada 21 Oktober 1993, setelah sebelumnya Program Studi Sosiologi dan Ilmu Administrasi Negara berada di bawah Fakultas Hukum. FISIP berlokasi di Grendeng, Purwokerto Utara, dengan visi unggul dalam ilmu sosial dan politik berbasis kearifan lokal di tingkat internasional. Fakultas ini menyelenggarakan lima program studi Sarjana dan lima program Pascasarjana, termasuk Sosiologi, Administrasi Publik, Ilmu Politik, Ilmu Komunikasi, dan Hubungan Internasional.',
		facultyColor: 'bg-[#FF6502]',
		link: 'https://fisip.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Kedokteran',
		desc: 'Fakultas Kedokteran Universitas Jenderal Soedirman bermula dari Program Pendidikan Dokter pada 1 Maret 2001, kemudian bertransformasi menjadi bagian dari Fakultas Kedokteran dan Ilmu-ilmu Kesehatan (FKIK) pada 2007, sebelum berdiri mandiri berdasarkan Permendikbud No. 21 Tahun 2014. Fakultas ini menyelenggarakan Program Studi Kedokteran, Kedokteran Gigi, Profesi Dokter dan Dokter Gigi, Magister Ilmu Biomedis, Doktor Kedokteran, hingga Program Pendidikan Dokter Spesialis. Fasilitasnya mencakup berbagai laboratorium serta Rumah Sakit Gigi dan Mulut (RSGM) Pendidikan pertama di Jawa Tengah.',
		facultyColor: 'bg-[#3CB372]',
		link: 'https://fk.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Teknik',
		desc: 'Fakultas Teknik Universitas Jenderal Soedirman resmi berdiri pada 2014 berdasarkan Permendikbud No. 21 Tahun 2014, hasil pemekaran Fakultas Sains dan Teknik menjadi tiga fakultas mandiri: Fakultas Teknik, Fakultas MIPA, dan Fakultas Perikanan dan Ilmu Kelautan. Berkampus di Blater, Kalimanah, Purbalingga seluas sekitar 11 hektar, Fakultas Teknik menyelenggarakan sembilan program studi meliputi Teknik Sipil, Teknik Elektro, Teknik Geologi, Informatika, Teknik Industri, Teknik Mesin, Arsitektur, Teknik Komputer, dan Teknik Pertambangan.',
		facultyColor: 'bg-[#14076F]',
		link: 'https://ft.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Ilmu-ilmu Kesehatan',
		desc: 'Fakultas Ilmu-Ilmu Kesehatan (FIKes) Universitas Jenderal Soedirman terbentuk dari pengembangan Fakultas Kedokteran dan Ilmu Kesehatan (FKIK), berdiri mandiri sejak 2014 untuk mendukung kebutuhan tenaga kesehatan profesional berbasis kearifan lokal pedesaan. FIKes menyelenggarakan program Sarjana seperti Kesehatan Masyarakat, Keperawatan, Farmasi, dan Ilmu Gizi, hingga Magister, Profesi, dan Doktor Keperawatan.',
		facultyColor: 'bg-[#3DFEFE]',
		link: 'https://fikes.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Ilmu Budaya',
		desc: 'Fakultas Ilmu Budaya (FIB) Universitas Jenderal Soedirman berdiri pada tahun 2014 dengan visi diakui internasional sebagai pusat pengembangan ilmu budaya berbasis kearifan lokal pada 2034. FIB menyelenggarakan 9 program studi dari D3 hingga S2, meliputi Bahasa Inggris, Bahasa Mandarin, Sastra Inggris, Sastra Indonesia, Sastra Jepang, Pendidikan Bahasa Inggris/Indonesia/Jepang, dan Linguistik.',
		facultyColor: 'bg-[#FFFFFF]',
		link: 'https://fib.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
		desc: 'Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) Universitas Jenderal Soedirman merupakan salah satu dari tiga fakultas hasil pemekaran Fakultas Sains dan Teknik pada tahun 2014, bersama Fakultas Teknik dan Fakultas Perikanan dan Ilmu Kelautan. FMIPA membina empat bidang ilmu: Kimia (peminatan organik, anorganik, analitik, fisik, dan biokimia), Matematika (murni dan terapan), Fisika (teoritik-komputasi, material, geofisika, medis), serta Statistika (data sains medik, statistika bisnis dan asuransi).',
		facultyColor:
			'bg-gradient-to-r from-[#800202] from-35% via-[#FFD303] via-50% to-[#800202] to-65%',
		link: 'https://fmipa.unsoed.ac.id/'
	},
	{
		title: 'Fakultas Perikanan dan Ilmu Kelautan',
		desc: 'Fakultas Perikanan dan Ilmu Kelautan (FPIK) Universitas Jenderal Soedirman didirikan berdasarkan SK Rektor Nomor 1600/UN23/OT.01/2014 tanggal 24 Oktober 2014. FPIK berkampus di Komplek GOR Soesilo Soedarman, Karangwangkal, Purwokerto, dengan tiga Program Studi Sarjana (Manajemen Sumberdaya Perairan, Akuakultur, Ilmu Kelautan) dan dua Program Studi Magister (Ilmu Kelautan, Sumber Daya Akuatik). Fakultas ini berfokus pada pengembangan sumber daya perikanan dan kelautan berbasis kearifan lokal.',
		facultyColor:
			'bg-gradient-to-br from-[#000066] from-35% via-[#02FFFF] via-50% to-[#000066] to-65%',
		link: 'https://fpik.unsoed.ac.id/'
	}
];

export default dataFakultas;
