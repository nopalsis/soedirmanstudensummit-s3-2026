// ponytail: PLACEHOLDER — rules text di bawah masih verbatim dari kode 2025
// (dresscodeData, +page.svelte lama), karena Google Doc "Aset Webs" 2026 section
// "Dresscode Day 1 & 2" TIDAK memisah Laki-laki/Perempuan (cuma 1 list per hari:
// Hijab/Atasan/Bawahan/Aksesoris/Kaos Kaki/Sepatu). Jangan hapus penanda ini
// sampai PIC konten kasih breakdown gender resmi utk 2026.

type GenderRules = {
	rules: string[];
	image: string;
	imageNonHijab?: string;
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
			image: '/images/dresscodes/gladi-cowok.webp'
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
			image: '/images/dresscodes/gladi-cewek-hijab.webp',
			imageNonHijab: '/images/dresscodes/gladi-cewek-non-hijab.webp'
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
			image: '/images/dresscodes/day1-cowok.webp'
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
			image: '/images/dresscodes/day1-cewek-hijab.webp',
			imageNonHijab: '/images/dresscodes/day1-cewek-non-hijab.webp'
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
			image: '/images/dresscodes/day2-cowok.webp'
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
			image: '/images/dresscodes/day2-cewek-hijab.webp',
			imageNonHijab: '/images/dresscodes/day2-cewek-non-hijab.webp'
		}
	}
};

export default dresscodeData;
