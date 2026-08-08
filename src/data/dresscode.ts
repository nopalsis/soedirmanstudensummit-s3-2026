// ponytail: PLACEHOLDER — rules text di bawah masih verbatim dari kode 2025
// (dresscodeData, +page.svelte lama), karena Google Doc "Aset Webs" 2026 section
// "Dresscode Day 1 & 2" TIDAK memisah Laki-laki/Perempuan (cuma 1 list per hari:
// Hijab/Atasan/Bawahan/Aksesoris/Kaos Kaki/Sepatu). Jangan hapus penanda ini
// sampai PIC konten kasih breakdown gender resmi utk 2026.
//
// Foto outfit (per 8 Agustus 2026): folder "Foto Outfit maba" (S3_WORKSPACE),
// 18 file = 3 hari x 3 kategori (cowok/cewek-hijab/cewek-non-hijab) x 2 tampak
// (full badan/samping). Konvensi nama di public/images/dresscodes/:
// "{hari}-{kategori}-{tampak}.webp", hari cocok dengan key object ini
// (gladi/day1/day2). "Non-Jilbab" dan "Non-Hijab" di file sumber disatukan
// jadi kategori "non-hijab".

type OutfitPhotos = {
	full: string;
	samping: string;
};

type GenderRules = {
	rules: string[];
	photos: OutfitPhotos;
	photosNonHijab?: OutfitPhotos;
};

type DayRules = {
	label: string;
	'laki-laki': GenderRules;
	perempuan: GenderRules;
};

const dresscodeData: Record<'gladi' | 'day1' | 'day2', DayRules> = {
	gladi: {
		label: 'Gladi',
		'laki-laki': {
			rules: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Batik lengan panjang.',
				'Sepatu dominan hitam.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).'
			],
			photos: {
				full: '/images/dresscodes/gladi-cowok-full.webp',
				samping: '/images/dresscodes/gladi-cowok-samping.webp'
			}
		},
		perempuan: {
			rules: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Batik lengan panjang.',
				'Sepatu dominan hitam.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Perempuan menggunakan bawahan berupa rok hitam panjang (dilarang span).'
			],
			photos: {
				full: '/images/dresscodes/gladi-cewek-hijab-full.webp',
				samping: '/images/dresscodes/gladi-cewek-hijab-samping.webp'
			},
			photosNonHijab: {
				full: '/images/dresscodes/gladi-cewek-non-hijab-full.webp',
				samping: '/images/dresscodes/gladi-cewek-non-hijab-samping.webp'
			}
		}
	},
	day1: {
		label: 'Hari 1',
		'laki-laki': {
			rules: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja putih lengan panjang.',
				'Dasi hitam.',
				'Sepatu bertali dominan hitam.',
				'Jas dan topi almamater.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).'
			],
			photos: {
				full: '/images/dresscodes/day1-cowok-full.webp',
				samping: '/images/dresscodes/day1-cowok-samping.webp'
			}
		},
		perempuan: {
			rules: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja dominan putih.',
				'Sepatu bertali dominan hitam.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Perempuan menggunakan bawahan hitam panjang.'
			],
			photos: {
				full: '/images/dresscodes/day1-cewek-hijab-full.webp',
				samping: '/images/dresscodes/day1-cewek-hijab-samping.webp'
			},
			photosNonHijab: {
				full: '/images/dresscodes/day1-cewek-non-hijab-full.webp',
				samping: '/images/dresscodes/day1-cewek-non-hijab-samping.webp'
			}
		}
	},
	day2: {
		label: 'Hari 2',
		'laki-laki': {
			rules: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja dominan putih.',
				'Sepatu bertali dominan hitam.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).'
			],
			photos: {
				full: '/images/dresscodes/day2-cowok-full.webp',
				samping: '/images/dresscodes/day2-cowok-samping.webp'
			}
		},
		perempuan: {
			rules: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja dominan putih.',
				'Sepatu bertali dominan hitam.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Perempuan menggunakan bawahan hitam panjang.'
			],
			photos: {
				full: '/images/dresscodes/day2-cewek-hijab-full.webp',
				samping: '/images/dresscodes/day2-cewek-hijab-samping.webp'
			},
			photosNonHijab: {
				full: '/images/dresscodes/day2-cewek-non-hijab-full.webp',
				samping: '/images/dresscodes/day2-cewek-non-hijab-samping.webp'
			}
		}
	}
};

export default dresscodeData;
