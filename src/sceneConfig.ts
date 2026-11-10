export type TitleSceneConfig = {
  type: 'title';
  title: string;
  subtitle: string;
  durationInFrames: number;
};

export type DemoSceneConfig = {
  type: 'demo';
  assetId: string;
  caption: string;
  narration: string;
  cursorStart: [number, number];
  cursorTarget: [number, number];
  clickAtFrame: number;
  durationInFrames: number;
};

export type SceneConfig = TitleSceneConfig | DemoSceneConfig;

export const scenes: SceneConfig[] = [
  {
    type: 'title',
    title: 'SaveGeo Platform',
    subtitle: 'Earth observation, made actionable.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'landing_page',
    caption: 'Platform analitik geospasial berbasis AI.',
    narration:
      'Selamat datang di SaveGeo. Platform cerdas yang mengubah citra satelit menjadi keputusan nyata untuk bisnis Anda.',
    cursorStart: [100, 100],
    cursorTarget: [900, 180],
    clickAtFrame: 60,
    durationInFrames: 120,
  },
  {
    type: 'demo',
    assetId: 'login_page',
    caption: 'Akses workspace dengan otentikasi aman.',
    narration:
      'Masuk ke dalam workspace secara aman dan mulai eksplorasi data geospasial Anda.',
    cursorStart: [100, 100],
    cursorTarget: [540, 450],
    clickAtFrame: 45,
    durationInFrames: 90,
  },
  {
    type: 'title',
    title: 'Carbon Stock Estimation',
    subtitle: 'Hitung cadangan karbon secara presisi.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'carbon_aoi',
    caption: 'Pilih Area of Interest (AOI) dari database wilayah administratif.',
    narration:
      'Kita mulai dengan modul Carbon Stock. Anda dapat memilih wilayah administratif secara spesifik, hingga ke tingkat desa.',
    cursorStart: [100, 100],
    cursorTarget: [300, 300],
    clickAtFrame: 80,
    durationInFrames: 150,
  },
  {
    type: 'demo',
    assetId: 'carbon_analyze',
    caption: 'Jalankan model estimasi karbon secara real-time.',
    narration:
      'Hanya dengan satu klik, sistem akan menjalankan model AI untuk mengestimasi biomassa dan karbon organik tanah.',
    cursorStart: [100, 100],
    cursorTarget: [540, 400],
    clickAtFrame: 70,
    durationInFrames: 120,
  },
  {
    type: 'title',
    title: 'Land Cover Change',
    subtitle: 'Pantau dinamika tutupan lahan.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'lcc_select',
    caption: 'Bandingkan perubahan tutupan lahan multi-tahun.',
    narration:
      'Beralih ke modul Land Change, Anda bisa memantau perubahan tutupan lahan dari tahun ke tahun untuk melihat tren konversi area.',
    cursorStart: [100, 100],
    cursorTarget: [400, 280],
    clickAtFrame: 90,
    durationInFrames: 150,
  },
  {
    type: 'demo',
    assetId: 'lcc_results',
    caption: 'Matriks transisi memberikan data konversi lahan secara kuantitatif.',
    narration:
      'Hasil analisis langsung disajikan dalam bentuk matriks transisi yang akurat dan peta perubahan berbasis piksel.',
    cursorStart: [100, 100],
    cursorTarget: [700, 350],
    clickAtFrame: 60,
    durationInFrames: 120,
  },
  {
    type: 'title',
    title: 'Satellite Imagery',
    subtitle: 'Eksplorasi arsip citra mentah.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'satellite_draw',
    caption: 'Gambar AOI manual dan cari citra bebas awan.',
    narration:
      'Butuh citra mentah? Gambar area Anda sendiri di peta, terapkan filter batas awan, dan temukan citra satelit yang paling relevan.',
    cursorStart: [100, 100],
    cursorTarget: [450, 350],
    clickAtFrame: 100,
    durationInFrames: 150,
  },
  {
    type: 'demo',
    assetId: 'satellite_compare',
    caption: 'Bandingkan dua waktu akuisisi berbeda secara interaktif.',
    narration:
      'Gunakan fitur perbandingan slider untuk melihat perbedaan visual kondisi lapangan secara instan.',
    cursorStart: [100, 100],
    cursorTarget: [600, 500],
    clickAtFrame: 75,
    durationInFrames: 120,
  },
  {
    type: 'title',
    title: 'Disaster Intelligence',
    subtitle: 'Analisis dampak bencana.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'disaster_dashboard',
    caption: 'Pantau event bencana aktif beserta statistik areanya.',
    narration:
      'Untuk mitigasi risiko, dashboard bencana menyajikan sebaran titik panas dan wilayah terdampak secara real-time.',
    cursorStart: [100, 100],
    cursorTarget: [500, 280],
    clickAtFrame: 65,
    durationInFrames: 120,
  },
  {
    type: 'title',
    title: 'Crop Monitoring',
    subtitle: 'Evaluasi kesehatan vegetasi.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'crop_select',
    caption: 'Pilih lahan pertanian dan gabungkan sensor optik & radar.',
    narration:
      'Pada sektor agrikultur, SaveGeo memantau kesehatan tanaman, anomali cuaca, dan kelembapan tanah di lahan yang Anda tentukan.',
    cursorStart: [100, 100],
    cursorTarget: [350, 300],
    clickAtFrame: 85,
    durationInFrames: 150,
  },
  {
    type: 'title',
    title: 'Comprehensive Support',
    subtitle: 'Panduan lengkap di ujung jari.',
    durationInFrames: 90,
  },
  {
    type: 'demo',
    assetId: 'guide_settings',
    caption: 'Akses dokumentasi lengkap dan sesuaikan bahasa antarmuka.',
    narration:
      'Seluruh fitur ini didukung oleh panduan komprehensif dua bahasa. SaveGeo, kenali wilayah, buat keputusan yang lebih baik.',
    cursorStart: [100, 100],
    cursorTarget: [920, 50],
    clickAtFrame: 70,
    durationInFrames: 120,
  },
];
