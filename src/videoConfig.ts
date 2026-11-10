export const videoConfig = { 
  fps: 30, 
  durationInFrames: 13470, 
  videoSrc: 'SaveGeo Demo Viewer.mp4' 
};

export type SceneConfig = {
  startFrame: number;
  durationInFrames: number;
  text: string;
  audioSrc: string;
  zoomTarget: [number, number]; // [x, y] coordinates on a 1920x1080 canvas
  zoomScale: number; // 1.0 means no zoom, 1.3 means 130% zoom
  buttonClickTarget?: [number, number]; // [x, y] button click coordinates for highlight
  buttonClickZoom?: number; // zoom scale on button (e.g., 1.8, 2.0)
  buttonClickStartFrame?: number; // frame offset when button click zoom starts (default: 30)
};

export const scenes: SceneConfig[] = [
  { startFrame: 90, durationInFrames: 150, text: "Platform analitik geospasial terpadu untuk keputusan nyata.", audioSrc: "vo_01.mp3", zoomTarget: [960, 540], zoomScale: 1.0 },
  { startFrame: 360, durationInFrames: 210, text: "Eksplorasi fitur dari estimasi karbon hingga pemantauan bencana.", audioSrc: "vo_02.mp3", zoomTarget: [960, 540], zoomScale: 1.1 },
  { startFrame: 750, durationInFrames: 150, text: "Sistem login yang aman dan mendukung multi-role pengguna.", audioSrc: "vo_03.mp3", zoomTarget: [1108, 576], zoomScale: 1.1, buttonClickTarget: [1108, 576], buttonClickZoom: 2.2, buttonClickStartFrame: 40 },
  { startFrame: 1290, durationInFrames: 180, text: "Modul Carbon Stock: Workspace analisis cadangan karbon.", audioSrc: "vo_04.mp3", zoomTarget: [200, 300], zoomScale: 1.3, buttonClickTarget: [400, 200], buttonClickZoom: 2.0, buttonClickStartFrame: 40 },
  { startFrame: 2100, durationInFrames: 180, text: "Pencarian Area of Interest (AOI) berbasis wilayah administratif.", audioSrc: "vo_05.mp3", zoomTarget: [400, 400], zoomScale: 1.4, buttonClickTarget: [600, 300], buttonClickZoom: 1.9, buttonClickStartFrame: 50 },
  { startFrame: 2700, durationInFrames: 180, text: "Persempit AOI hingga tingkat Kecamatan.", audioSrc: "vo_06.mp3", zoomTarget: [800, 600], zoomScale: 1.4, buttonClickTarget: [700, 500], buttonClickZoom: 1.9, buttonClickStartFrame: 40 },
  { startFrame: 3090, durationInFrames: 180, text: "Jalankan model AI estimasi karbon.", audioSrc: "vo_07.mp3", zoomTarget: [400, 700], zoomScale: 1.3, buttonClickTarget: [500, 650], buttonClickZoom: 2.1, buttonClickStartFrame: 30 },
  { startFrame: 3870, durationInFrames: 240, text: "Hasil perhitungan: Distribusi AGB, BGB, & Karbon Organik Tanah.", audioSrc: "vo_08.mp3", zoomTarget: [1400, 500], zoomScale: 1.2 },
  { startFrame: 4380, durationInFrames: 180, text: "Ekspor data hasil ke format GeoTIFF atau CSV.", audioSrc: "vo_09.mp3", zoomTarget: [1500, 200], zoomScale: 1.4, buttonClickTarget: [1600, 150], buttonClickZoom: 2.0, buttonClickStartFrame: 40 },
  { startFrame: 4710, durationInFrames: 180, text: "Modul Land Cover Change: Melacak perubahan area tutupan lahan.", audioSrc: "vo_010.mp3", zoomTarget: [200, 400], zoomScale: 1.3 },
  { startFrame: 5400, durationInFrames: 210, text: "Pilih dataset dan rentang tahun komparasi (contoh: 2024 - 2025).", audioSrc: "vo_11.mp3", zoomTarget: [400, 450], zoomScale: 1.4, buttonClickTarget: [500, 400], buttonClickZoom: 1.9, buttonClickStartFrame: 50 },
  { startFrame: 6060, durationInFrames: 210, text: "Matriks Transisi: Pergeseran antar kelas lahan (dalam Hektar).", audioSrc: "vo_12.mp3", zoomTarget: [960, 400], zoomScale: 1.3, buttonClickTarget: [1000, 350], buttonClickZoom: 1.8, buttonClickStartFrame: 60 },
  { startFrame: 6390, durationInFrames: 240, text: "Analisis grafik Net Change & tren luas lahan (Time Series).", audioSrc: "vo_13.mp3", zoomTarget: [960, 600], zoomScale: 1.3 },
  { startFrame: 6900, durationInFrames: 180, text: "Change Map: Tinjauan spasial lokasi lahan yang berubah.", audioSrc: "vo_14.mp3", zoomTarget: [960, 540], zoomScale: 1.2 },
  { startFrame: 7920, durationInFrames: 180, text: "Modul Satellite Imagery: Eksplorasi arsip citra mentah.", audioSrc: "vo_15.mp3", zoomTarget: [200, 500], zoomScale: 1.3, buttonClickTarget: [300, 400], buttonClickZoom: 1.95, buttonClickStartFrame: 50 },
  { startFrame: 8280, durationInFrames: 240, text: "Gambar poligon kustom untuk membatasi pencarian area.", audioSrc: "vo_16.mp3", zoomTarget: [400, 500], zoomScale: 1.3, buttonClickTarget: [450, 450], buttonClickZoom: 1.95, buttonClickStartFrame: 80 },
  { startFrame: 8850, durationInFrames: 210, text: "Terapkan filter batas tutupan awan pada citra satelit.", audioSrc: "vo_17.mp3", zoomTarget: [400, 600], zoomScale: 1.4, buttonClickTarget: [500, 550], buttonClickZoom: 2.0, buttonClickStartFrame: 50 },
  { startFrame: 9360, durationInFrames: 210, text: "Pilih dua scene akuisisi dari tanggal yang berbeda.", audioSrc: "vo_18.mp3", zoomTarget: [1600, 300], zoomScale: 1.3, buttonClickTarget: [1500, 250], buttonClickZoom: 1.9, buttonClickStartFrame: 60 },
  { startFrame: 9750, durationInFrames: 180, text: "Gunakan Slider Interaktif untuk membandingkan kondisi visual.", audioSrc: "vo_19.mp3", zoomTarget: [960, 540], zoomScale: 1.2 },
  { startFrame: 9960, durationInFrames: 180, text: "Modul Disaster Intelligence: Pantau status bencana real-time.", audioSrc: "vo_20.mp3", zoomTarget: [200, 600], zoomScale: 1.3, buttonClickTarget: [250, 500], buttonClickZoom: 1.9, buttonClickStartFrame: 40 },
  { startFrame: 10200, durationInFrames: 240, text: "Event detail memetakan sebaran titik panas di wilayah terdampak.", audioSrc: "vo_21.mp3", zoomTarget: [1200, 500], zoomScale: 1.2, buttonClickTarget: [1300, 450], buttonClickZoom: 1.9, buttonClickStartFrame: 60 },
  { startFrame: 10620, durationInFrames: 120, text: "Pantau grafik statistik harian dan sebaran per-provinsi.", audioSrc: "vo_22.mp3", zoomTarget: [960, 800], zoomScale: 1.3 },
  { startFrame: 10860, durationInFrames: 150, text: "Modul Crop Monitoring: Evaluasi agrikultur dan lahan.", audioSrc: "vo_23.mp3", zoomTarget: [200, 700], zoomScale: 1.3, buttonClickTarget: [250, 600], buttonClickZoom: 1.95, buttonClickStartFrame: 40 },
  { startFrame: 11070, durationInFrames: 240, text: "Pilih lahan dari Saved Fields & aktifkan sensor optik-radar.", audioSrc: "vo_24.mp3", zoomTarget: [400, 600], zoomScale: 1.3, buttonClickTarget: [500, 550], buttonClickZoom: 1.95, buttonClickStartFrame: 70 },
  { startFrame: 11580, durationInFrames: 240, text: "Hasil indeks kesehatan vegetasi (NDVI) & anomali cuaca.", audioSrc: "vo_25.mp3", zoomTarget: [1400, 500], zoomScale: 1.2 },
  { startFrame: 12120, durationInFrames: 240, text: "Modul Full Guide: Dokumentasi dan panduan lengkap penggunaan.", audioSrc: "vo_26.mp3", zoomTarget: [200, 800], zoomScale: 1.3, buttonClickTarget: [300, 700], buttonClickZoom: 1.95, buttonClickStartFrame: 50 },
  { startFrame: 13050, durationInFrames: 420, text: "SaveGeo: Kenali wilayah, buat keputusan. Terima kasih.", audioSrc: "vo_27.mp3", zoomTarget: [960, 540], zoomScale: 1.0 }
];
