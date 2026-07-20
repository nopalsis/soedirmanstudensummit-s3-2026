export interface Assignment {
  name: string;
  description: string;
  longDescription: string;
  openedAt?: Date;
}

export const assignments: Assignment[] = [
  {
    name: "Penugasan 1",
    description: "Perkenalkan Dirimu",
    longDescription: "Tuliskan tentang dirimu, asal daerah, hobi, dan harapanmu di Universitas Jenderal Soedirman.",
    openedAt: new Date()
  },
  {
    name: "Penugasan 2",
    description: "Video Kreatif",
    longDescription: "Buat video kreatif dengan tema 'Generasi Soedirman' dengan durasi maksimal 1 menit.",
    openedAt: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
  },
  {
    name: "Penugasan 3",
    description: "Fotografi Unsoed",
    longDescription: "Ambil foto terbaik di area Universitas Jenderal Soedirman dan bagikan cerita di baliknya.",
    openedAt: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000)
  },
  {
    name: "Penugasan 4",
    description: "Karya Seni Batik",
    longDescription: "Ciptakan karya seni batik modern dengan inspirasi dari budaya lokal Purwokerto.",
    openedAt: new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)
  },
  {
    name: "Penugasan 5",
    description: "Esai Inspiratif",
    longDescription: "Tuliskan esai tentang tokoh inspiratif dalam hidupmu dan pengaruhnya terhadap kehidupan akademis.",
    openedAt: new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000)
  },
  {
    name: "Penugasan 6",
    description: "Kolaborasi Kreatif",
    longDescription: "Berkolaborasi dengan teman dan ciptakan sesuatu yang unik untuk komunitas kampus.",
    openedAt: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
  },
  {
    name: "Penugasan 7",
    description: "Presentasi Inovatif",
    longDescription: "Presentasikan ide inovatif untuk meningkatkan kehidupan kampus Unsoed.",
    openedAt: new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000)
  },
  {
    name: "Penugasan 8",
    description: "Refleksi Akhir",
    longDescription: "Refleksikan pengalaman mengikuti S3 dan apa yang akan kamu bawa dalam perjalanan akademis di Unsoed.",
    openedAt: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)
  }
];
