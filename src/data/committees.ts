/**
 * Data kepanitiaan Soedirman Student Summit 2026.
 *
 * Sumber:
 * - Nama koor & Instagram : Google Docs "Instagram Koor S3"
 *   (docs/d/1KX_2gDj-aM2lWDy03t_V4SGeNyvYlFSG-wuTM34SOe0, tab t.8vip7ae23q9v)
 * - Deskripsi jobdesk     : repo S3 2025 (src/data/committees.ts), jobdesk divisi identik
 * - Foto koor             : Google Drive folder "Foto Koor"
 *   (drive.google.com/drive/folders/1hjqg-MP_nNlX5SGUW62LnsuSoKymBNmI)
 *   -> 16/16 sudah lengkap per 26 Juli 2026, pola nama file:
 *      "<Kode/Nama Divisi> (<Nama Lengkap Koordinator>).webp"
 * - Background divisi     : folder lokal "Foto Background Divisi" (per divisi,
 *                       2026). Acara, Humas, dan Steering Committee tidak
 *                       punya foto sendiri di folder itu -> reuse background
 *                       patung kuda Unsoed dari repo S3 2025
 *                       (static/img/committee/backgrounds/patung-kuda-halaman-rektor.webp).
 *
 * Catatan status data (per 8 Agustus 2026):
 * - `image`           : LENGKAP 16/16, semua koor sudah punya foto asli.
 * - `imageBackground` : LENGKAP 16/16, semua divisi sudah punya background sendiri.
 * - `description`     : LENGKAP 16/16. Deskripsi Kurikulum dikonfirmasi user
 *                       langsung (bukan porting dari repo 2025 seperti divisi lain).
 * - `staff`           : belum ada data sama sekali untuk semua divisi. Field
 *                       sengaja dipertahankan agar tombol "Lihat Anggota"
 *                       muncul otomatis begitu array diisi.
 */

export type Committee = {
	/** Nama divisi, tampil sebagai label kartu */
	name: string;
	/** Nama lengkap koordinator divisi */
	memberName: string;
	/** Foto koor asli dari Drive */
	image: string | null;
	/** Foto anggota divisi sebagai background kartu. null = pakai fallback biru + batik */
	imageBackground: string | null;
	/** Deskripsi jobdesk divisi. String kosong = menunggu tim konten */
	description: string;
	/** Username Instagram koor, tanpa @ dan tanpa URL */
	instagram?: string;
	/** Daftar anggota divisi. Belum ada datanya -> tombol tidak dirender */
	staff?: string[];
};

const committees: Committee[] = [
	{
		name: 'Project Officer',
		memberName: 'Alin Hasya Yondy Qinthara',
		image: '/images/committee/members/project-officer.webp',
		imageBackground: '/images/committee/backgrounds/po.webp',
		description:
			'Mengawal arah gerak, menjaga konsistensi visi, dan memastikan setiap elemen acara berjalan harmonis dari awal hingga akhir. Project Officer bertanggung jawab penuh atas koordinasi antar divisi, pengambilan keputusan strategis, dan keberlangsungan seluruh program, serta menjadi pusat kendali dari seluruh rangkaian Soedirman Student Summit 2026.',
		instagram: 'alinnyqq'
	},
	{
		name: 'Sekretaris',
		memberName: 'Lathifah Isna Anggraini',
		image: '/images/committee/members/sekretaris.webp',
		imageBackground: '/images/committee/backgrounds/sekretaris.webp',
		description:
			'Mengelola seluruh dokumen dan administrasi internal, mulai dari surat-menyurat, notulensi, hingga penyusunan proposal serta laporan pertanggungjawaban. Dengan arsip yang rapi dan sistematis, Divisi Sekretaris memastikan setiap data kepanitiaan tersimpan aman dan mudah diakses.',
		instagram: 'ltffhsn'
	},
	{
		name: 'Bendahara',
		memberName: 'Amad Saefudin',
		image: '/images/committee/members/bendahara.webp',
		imageBackground: '/images/committee/backgrounds/bendahara.webp',
		description:
			'Mengelola seluruh arus kas, menyusun laporan keuangan, dan memastikan setiap transaksi tercatat secara transparan dan akuntabel. Mulai dari pengelolaan IWP, SPD, hingga pembuatan LPJ dan RAB, semuanya ditangani dengan penuh pertanggungjawaban oleh Divisi Bendahara.',
		instagram: 'amd.sfdn_'
	},
	{
		name: 'Acara',
		memberName: 'Randita Eka Wulandari',
		image: '/images/committee/members/acara.webp',
		imageBackground: '/images/committee/backgrounds/steering-committee.webp',
		description:
			'Merancang konsep acara, menyusun alur teknis, serta memastikan jalannya kegiatan sejalan dengan nilai yang akan disampaikan. Divisi Acara dalam pelaksanaannya juga berperan aktif dalam koordinasi lintas divisi dan stakeholder, serta bertanggung jawab penuh atas kelancaran pelaksanaan Soedirman Student Summit 2026.',
		instagram: 'reewulan_'
	},
	{
		name: 'Kurikulum',
		memberName: 'Naila Adzima',
		image: '/images/committee/members/kurikulum.webp',
		imageBackground: '/images/committee/backgrounds/kurikulum.webp',
		description:
			'Kurikulum: Berfokus pada perancangan alur pembelajaran, pengembangan materi, serta sistem penugasan dalam Soedirman Student Summit 2025. Divisi ini bertanggung jawab memastikan seluruh proses pembelajaran berjalan secara sistematis, relevan, dan sesuai dengan tujuan pengembangan mahasiswa baru. Terdiri dari beberapa fokus kerja seperti pengembangan materi, penyusunan penugasan, evaluasi pembelajaran, serta perancangan project implementatif. Divisi Kurikulum menjadi pusat pengembangan konsep akademik dan pengalaman belajar peserta selama rangkaian S3.',
		instagram: 'nailaadzm'
	},
	{
		name: 'Lapangan',
		memberName: 'Himawan Alun Jaladri',
		image: '/images/committee/members/lapangan.webp',
		imageBackground: '/images/committee/backgrounds/lapangan.webp',
		description:
			'Mengatur alur mobilisasi peserta, menyusun regulasi teknis, hingga memastikan setiap titik kegiatan berjalan tertib dan kondusif, Divisi Lapangan bertanggung jawab penuh terhadap pengondisian selama rangkaian kegiatan Soedirman Student Summit 2026 berlangsung.',
		instagram: 'himawan.alun'
	},
	{
		name: 'Humas',
		memberName: 'Citra Sastyaviani',
		image: '/images/committee/members/humas.webp',
		imageBackground: '/images/committee/backgrounds/steering-committee.webp',
		description:
			'Menjembatani komunikasi antara panitia dengan berbagai pihak internal maupun eksternal, seperti fakultas, paguyuban, UKM, hingga media partner. Divisi Humas juga berperan sebagai Liaison Officer bagi narasumber dan tim pendukung, serta memastikan segala kebutuhan teknis dan non-teknis terpenuhi dengan optimal.',
		instagram: 'ctrasastyaa'
	},
	{
		name: 'PIT',
		memberName: 'Muhammad Alwan Khaerodin',
		image: '/images/committee/members/pit.webp',
		imageBackground: '/images/committee/backgrounds/pit.webp',
		description:
			'Terdiri dari empat sub-divisi: Admin (Minsoed), Content Creator, Pendataan, dan IT. Mengelola komunikasi digital, strategi media sosial, data mahasiswa baru, dan pembangunan website. PIT menjadi pusat kendali data, media, dan teknologi Soedirman Student Summit 2026.',
		instagram: 'wannn._.999'
	},
	{
		name: 'DDD',
		memberName: 'B. Safina Aulia Rani',
		image: '/images/committee/members/ddd.webp',
		imageBackground: '/images/committee/backgrounds/ddd.webp',
		description:
			'Mengelola seluruh aspek visual dan dokumentasi acara. Dari merancang konsep desain, menata dekorasi, hingga mengabadikan setiap momen penting. DDD memastikan setiap konten visual tersampaikan secara konsisten dan profesional, serta hasil dokumentasi terdistribusi dengan sistematis.',
		instagram: 'soy_fina27'
	},
	{
		name: 'USDA',
		memberName: 'Hanna Sherly Filzauni',
		image: '/images/committee/members/usda.webp',
		imageBackground: '/images/committee/backgrounds/usda.webp',
		description:
			'Merancang strategi usaha hingga pelaporan dana, Divisi USDA juga menjalankan berbagai bentuk penggalangan dana dengan sistematis dan penuh tanggung jawab. Mulai dari pre-order merchandise, event fundraising, hingga pelaporan dana yang transparan, semua dikelola secara sistematis dan bertanggung jawab oleh Divisi USDA.',
		instagram: 'hannasfii'
	},
	{
		name: 'Sponsorship',
		memberName: 'Aji Anatsa',
		image: '/images/committee/members/sponsorship.webp',
		imageBackground: '/images/committee/backgrounds/sponsorship.webp',
		description:
			'Merancang proposal yang profesional, menjalin komunikasi dengan sponsor, dan memastikan seluruh bentuk kerjasama berjalan sesuai kesepakatan. Dari proses negosiasi hingga pelaporan, Divisi Sponsorship bertugas untuk menjaga transparansi serta membangun relasi yang saling menguntungkan, baik dalam segi pendanaan maupun dukungan lainnya demi kelancaran pelaksanaan kegiatan.',
		instagram: 'ajinatssa'
	},
	{
		name: 'ATP',
		memberName: 'Ahmad Alfan Adibi',
		image: '/images/committee/members/atp.webp',
		imageBackground: '/images/committee/backgrounds/atp.webp',
		description:
			'Memastikan seluruh kebutuhan perlengkapan dan akomodasi acara terpenuhi, mulai dari pengadaan, pendataan, hingga kerjasama dengan pihak eksternal seperti vendor, fakultas, dan stakeholder internal kampus lainnya. Dengan koordinasi yang matang, Divisi ATP memastikan setiap kebutuhan logistik dan akomodasi berjalan tanpa hambatan.',
		instagram: 'ahmadadibie'
	},
	{
		name: 'Konsumsi',
		memberName: 'Muhammad Faqih Al Amin',
		image: '/images/committee/members/konsumsi.webp',
		imageBackground: '/images/committee/backgrounds/konsumsi.webp',
		description:
			'Memastikan seluruh kebutuhan konsumsi terpenuhi dengan baik, mulai dari perencanaan, pemesanan, hingga distribusi di hari pelaksanaan. Dengan perhatian khusus terhadap data alergi, pilihan konsumsi alternatif, serta koordinasi dengan vendor dan tamu undangan, Divisi Konsumsi bertanggung jawab untuk memastikan setiap proses berjalan lancar dan tepat waktu.',
		instagram: 'faqihalmn'
	},
	{
		name: 'Medis',
		memberName: 'Khalila Tabitha Dwi P.',
		image: '/images/committee/members/medis.webp',
		imageBackground: '/images/committee/backgrounds/medis.webp',
		description:
			'Memastikan ketersediaan obat-obatan, menyusun alur pertolongan darurat, dan siap memberikan penanganan pertama saat terjadi situasi kegawatdaruratan. Tak hanya itu, Divisi Medis juga mencatat kondisi kesehatan peserta dan panitia, serta berkoordinasi dengan fasilitas medis untuk penanganan lanjutan.',
		instagram: 'klilaa__'
	},
	{
		name: 'Pendamping Putra',
		memberName: 'Azkia Husni Mubarok',
		image: '/images/committee/members/pendamping-putra.webp',
		imageBackground: '/images/committee/backgrounds/pendamping.webp',
		description:
			'Menjadi garda depan dalam membimbing dan mendampingi mahasiswa baru selama rangkaian acara, Divisi Pendamping juga berperan dalam menyampaikan informasi, memfasilitasi interaksi, hingga memastikan partisipasi aktif dan ketertiban peserta di setiap sesi dengan komunikatif, hangat, dan penuh tanggung jawab.',
		instagram: 'galaskiesss'
	},
	{
		name: 'Pendamping Putri',
		memberName: 'Zahra Arwita Wisnowardhani',
		image: '/images/committee/members/pendamping-putri.webp',
		imageBackground: '/images/committee/backgrounds/pendamping.webp',
		description:
			'Menjadi garda depan dalam membimbing dan mendampingi mahasiswa baru selama rangkaian acara, Divisi Pendamping juga berperan dalam menyampaikan informasi, memfasilitasi interaksi, hingga memastikan partisipasi aktif dan ketertiban peserta di setiap sesi dengan komunikatif, hangat, dan penuh tanggung jawab.',
		instagram: '211975_'
	}
];

export default committees;
