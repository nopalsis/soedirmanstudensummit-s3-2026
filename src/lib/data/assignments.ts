export interface Assignment {
  name: string;
  description: string;
  longDescription: string;
  openedAt?: Date;
  deadline?: Date;
  deadlines?: {
    "SNBP-SNBT"?: Date;
    "Mandiri"?: Date;
  };
}

function createDeadlineDate(daysFromNow: number): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysFromNow, 23, 59, 59);
}

export const assignments: Assignment[] = [
  {
    name: "Borang FGD",
    description: "Unggah Instagram Story setelah FGD.",
    longDescription:
      "Mengunggah Instagram Story setelah melaksanakan FGD menggunakan template yang disediakan untuk memperkenalkan kegiatan S3 kepada khalayak.",
    openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
  },
    {
      name: "Built to Shine",
      description: "Buat video perkenalan diri.",
      longDescription:
        "Membuat video berupa perkenalan diri yang bertujuan mendorong mahasiswa baru lebih percaya diri dalam menunjukkan potensi dan karakter diri.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadlines: {
        "SNBP-SNBT": new Date(Date.now() + -3 * 24 * 60 * 60 * 1000),
        "Mandiri": createDeadlineDate(16),
      },
    },
    {
      name: "Words of Me",
      description: "Tuliskan tujuan dan arah pengembangan diri.",
      longDescription:
        "Words of Me bertujuan memotivasi mahasiswa baru untuk menetapkan tujuan hidup serta arah pengembangan diri selama menempuh pendidikan di perguruan tinggi.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
       deadlines: {
        "SNBP-SNBT": new Date(Date.now() + -3 * 24 * 60 * 60 * 1000),
        "Mandiri": createDeadlineDate(16),
      },
    },
    {
      name: "Bintang Soedirman Muda",
      description: "Tampilkan bakat dan potensi diri.",
      longDescription:
        "Memberikan ruang bagi mahasiswa baru untuk mengembangkan dan menampilkan bakat serta potensi diri melalui ekspresi yang kreatif dalam suasana yang positif dan menyenangkan.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadline: new Date(Date.now() + -2 * 24 * 60 * 60 * 1000),
    },
    {
      name: "Talkshow Branding UKM & Fakultas",
      description: "Ikuti talkshow pengenalan UKM dan fakultas.",
      longDescription:
        "Talkshow branding bertujuan memperkenalkan fakultas dan UKM di Universitas Jenderal Soedirman agar mahasiswa baru mengenal lingkungan kampus dan memilih UKM sesuai minat serta bakat.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(0),
    },
    {
      name: "LinkedIn",
      description: "Lengkapi profil LinkedIn.",
      longDescription:
        "Mahasiswa baru diharapkan memahami pemanfaatan LinkedIn sebagai sarana pengembangan diri, memperluas jejaring profesional, melatih komunikasi formal, serta mendokumentasikan pengalaman secara terstruktur.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(5),
    },
    {
      name: "Feel The Vibes",
      description: "Ikuti kegiatan flashmob.",
      longDescription:
        "Flashmob menjadi media ekspresi kolektif yang membangun kebersamaan, kekompakan, dan semangat mahasiswa baru sebagai Soedirman Muda.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(5),
    },
    {
      name: "Luminous Boundaries",
      description: "Pahami pentingnya batasan diri.",
      longDescription:
        "Bertujuan meningkatkan kesadaran mahasiswa baru mengenai pentingnya memahami dan menghormati batasan diri maupun orang lain sebagai upaya pencegahan kekerasan dan kekerasan seksual.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(10),
    },
    {
      name: "Mind Sync Session",
      description: "Ikuti podcast pengembangan diri.",
      longDescription:
        "Podcast yang membantu mahasiswa baru mengembangkan growth mindset, mengenali potensi diri, serta meningkatkan kemampuan beradaptasi secara akademik, emosional, dan sosial.",
      openedAt: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(14),
    },
    {
      name: "Twibbon",
      description: "Unggah Twibbon resmi.",
      longDescription:
        "Twibbon menjadi media perkenalan yang membantu mahasiswa baru mengekspresikan identitas diri, membangun rasa bangga dan solidaritas, serta memanfaatkan media sosial secara bijak.",
      openedAt: createDeadlineDate(16),
      deadline: createDeadlineDate(16),
    },
    {
      name: "From A Beginning to A New Chapter (Life Mapping | Add Yours)",
      description: "Buat Life Mapping.",
      longDescription:
        "Mahasiswa baru diajak merefleksikan perjalanan hidup, memahami proses yang membentuk diri, serta menggambarkan harapan dan tujuan yang ingin dicapai selama menjalani kehidupan kampus.",
      openedAt: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(16),
    },
    {
      name: "SOLO (School of Leadership Organization)",
      description: "Ikuti program pengembangan kepemimpinan.",
      longDescription:
        "Program pengembangan kepemimpinan yang mendorong mahasiswa baru mengenali potensi diri, merefleksikan perjalanan kepemimpinan, serta membangun jiwa kepemimpinan sebagai bekal menjadi pemimpin yang berdampak.",
      openedAt: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(16),
    },
    {
      name: "Yel-Yel Kelompok",
      description: "Buat yel-yel kelompok.",
      longDescription:
        "Membuat yel-yel kelompok sebagai media memperkenalkan identitas kelompok sekaligus membangun kekompakan antaranggota.",
      openedAt: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(18),
    },
    {
      name: "Papan Kelompok",
      description: "Buat papan informasi kelompok.",
      longDescription:
        "Membuat papan informasi secara kreatif yang merepresentasikan identitas kelompok mahasiswa baru.",
      openedAt: new Date(Date.now() + 19 * 24 * 60 * 60 * 1000),
      deadline: createDeadlineDate(18),
    },
];
