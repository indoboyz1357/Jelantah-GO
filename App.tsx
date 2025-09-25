import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AffiliatePage from './pages/AffiliatePage';

// Pillar Articles
import PengepulMinyakJelantahPage from './pages/articles/PengepulMinyakJelantahPage';
import JualMinyakJelantahPage from './pages/articles/JualMinyakJelantahPage';
import HargaMinyakJelantahPage from './pages/articles/HargaMinyakJelantahPage';
import BisnisMinyakJelantahPage from './pages/articles/BisnisMinyakJelantahPage';
import ManfaatMenjualJelantahPage from './pages/articles/ManfaatMenjualJelantahPage';
import SistemPenjemputanJelantahPage from './pages/articles/SistemPenjemputanJelantahPage';
import MengenalBiodieselPage from './pages/articles/MengenalBiodieselPage';
import BahayaMembuangJelantahPage from './pages/articles/BahayaMembuangJelantahPage';
import CaraMenyimpanJelantahPage from './pages/articles/CaraMenyimpanJelantahPage';
import PerbedaanPengepulResmiPage from './pages/articles/PerbedaanPengepulResmiPage';
import KenapaHarusJualJelantahPage from './pages/articles/KenapaHarusJualJelantahPage';

// Cluster Articles
import ApaItuPengepulPage from './pages/articles/clusters/ApaItuPengepulPage';
import SyaratProsedurJualJelantahPage from './pages/articles/clusters/SyaratProsedurJualJelantahPage';
import TipsHargaTinggiJelantahPage from './pages/articles/clusters/TipsHargaTinggiJelantahPage';
import KesalahanUmumJualJelantahPage from './pages/articles/clusters/KesalahanUmumJualJelantahPage';
import RekomendasiPengepulPage from './pages/articles/clusters/RekomendasiPengepulPage';
import FaktorHargaJelantahPage from './pages/articles/clusters/FaktorHargaJelantahPage';
import PrediksiHargaJelantahPage from './pages/articles/clusters/PrediksiHargaJelantahPage';
import AnalisisBisnisJelantahPage from './pages/articles/clusters/AnalisisBisnisJelantahPage';
import KisahSuksesUmkmJelantahPage from './pages/articles/clusters/KisahSuksesUmkmJelantahPage';
import StrategiBisnisJelantahPage from './pages/articles/clusters/StrategiBisnisJelantahPage';
import ManfaatEkonomiJelantahPage from './pages/articles/clusters/ManfaatEkonomiJelantahPage';
import DampakLingkunganDaurUlangJelantahPage from './pages/articles/clusters/DampakLingkunganDaurUlangJelantahPage';
import SistemPenjemputanJakartaPage from './pages/articles/clusters/SistemPenjemputanJakartaPage';
import TeknologiDigitalPenjemputanPage from './pages/articles/clusters/TeknologiDigitalPenjemputanPage';
import PeranKurirJelantahPage from './pages/articles/clusters/PeranKurirJelantahPage';
import ProsesJelantahJadiBiodieselPage from './pages/articles/clusters/ProsesJelantahJadiBiodieselPage';
import PotensiJelantahEnergiTerbarukanPage from './pages/articles/clusters/PotensiJelantahEnergiTerbarukanPage';
import CaraAmanMenyimpanJelantahPage from './pages/articles/clusters/CaraAmanMenyimpanJelantahPage';
import BahayaJualJelantahTidakResmiPage from './pages/articles/clusters/BahayaJualJelantahTidakResmiPage';
import DampakPembuanganJelantahPage from './pages/articles/clusters/DampakPembuanganJelantahPage';

// Local Service Pages
import JakartaPusatPage from './pages/layanan/JakartaPusatPage';
import JakartaBaratPage from './pages/layanan/JakartaBaratPage';
import JakartaSelatanPage from './pages/layanan/JakartaSelatanPage';
import JakartaTimurPage from './pages/layanan/JakartaTimurPage';
import JakartaUtaraPage from './pages/layanan/JakartaUtaraPage';
import BogorPage from './pages/layanan/BogorPage';
import DepokPage from './pages/layanan/DepokPage';
import TangerangPage from './pages/layanan/TangerangPage';
import TangerangSelatanPage from './pages/layanan/TangerangSelatanPage';
import BekasiPage from './pages/layanan/BekasiPage';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-[#F9F6EE] text-gray-700 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/cara-kerja" element={<HowItWorksPage />} />
            <Route path="/harga" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />
            <Route path="/syarat-ketentuan" element={<TermsOfServicePage />} />
            <Route path="/daftar-afiliasi" element={<AffiliatePage />} />
            
            {/* Local Service Page Routes */}
            <Route path="/layanan/jakarta-pusat" element={<JakartaPusatPage />} />
            <Route path="/layanan/jakarta-barat" element={<JakartaBaratPage />} />
            <Route path="/layanan/jakarta-selatan" element={<JakartaSelatanPage />} />
            <Route path="/layanan/jakarta-timur" element={<JakartaTimurPage />} />
            <Route path="/layanan/jakarta-utara" element={<JakartaUtaraPage />} />
            <Route path="/layanan/bogor" element={<BogorPage />} />
            <Route path="/layanan/depok" element={<DepokPage />} />
            <Route path="/layanan/tangerang" element={<TangerangPage />} />
            <Route path="/layanan/tangerang-selatan" element={<TangerangSelatanPage />} />
            <Route path="/layanan/bekasi" element={<BekasiPage />} />

            {/* Pillar Article Routes */}
            <Route path="/blog/pengepul-minyak-jelantah-panduan-lengkap" element={<PengepulMinyakJelantahPage />} />
            <Route path="/blog/jual-minyak-jelantah-tips-untung" element={<JualMinyakJelantahPage />} />
            <Route path="/blog/harga-minyak-jelantah-2025" element={<HargaMinyakJelantahPage />} />
            <Route path="/blog/bisnis-minyak-jelantah-cara-memulai" element={<BisnisMinyakJelantahPage />} />
            <Route path="/blog/manfaat-menjual-minyak-jelantah" element={<ManfaatMenjualJelantahPage />} />
            <Route path="/blog/sistem-penjemputan-minyak-jelantah" element={<SistemPenjemputanJelantahPage />} />
            <Route path="/blog/mengenal-biodiesel-dari-jelantah" element={<MengenalBiodieselPage />} />
            <Route path="/blog/bahaya-membuang-jelantah-ke-saluran-air" element={<BahayaMembuangJelantahPage />} />
            <Route path="/blog/cara-menyimpan-minyak-jelantah" element={<CaraMenyimpanJelantahPage />} />
            <Route path="/blog/perbedaan-pengepul-resmi-dan-tidak" element={<PerbedaanPengepulResmiPage />} />
            <Route path="/blog/kenapa-harus-jual-minyak-jelantah" element={<KenapaHarusJualJelantahPage />} />

            {/* Cluster Article Routes */}
            <Route path="/blog/apa-itu-pengepul-minyak-jelantah" element={<ApaItuPengepulPage />} />
            <Route path="/blog/syarat-prosedur-jual-jelantah-resmi" element={<SyaratProsedurJualJelantahPage />} />
            <Route path="/blog/tips-harga-tinggi-saat-jual-jelantah" element={<TipsHargaTinggiJelantahPage />} />
            <Route path="/blog/kesalahan-umum-saat-jual-jelantah" element={<KesalahanUmumJualJelantahPage />} />
            <Route path="/blog/rekomendasi-pengepul-jelantah-terpercaya" element={<RekomendasiPengepulPage />} />
            <Route path="/blog/faktor-yang-mempengaruhi-harga-jelantah" element={<FaktorHargaJelantahPage />} />
            <Route path="/blog/prediksi-harga-jelantah-2025-2030" element={<PrediksiHargaJelantahPage />} />
            <Route path="/blog/analisis-bisnis-jelantah-modal-omzet-roi" element={<AnalisisBisnisJelantahPage />} />
            <Route path="/blog/kisah-sukses-umkm-dari-bisnis-jelantah" element={<KisahSuksesUmkmJelantahPage />} />
            <Route path="/blog/strategi-mengembangkan-bisnis-jual-beli-jelantah" element={<StrategiBisnisJelantahPage />} />
            <Route path="/blog/manfaat-ekonomi-menjual-jelantah-bagi-rumah-tangga" element={<ManfaatEkonomiJelantahPage />} />
            <Route path="/blog/dampak-lingkungan-jika-jelantah-didaur-ulang" element={<DampakLingkunganDaurUlangJelantahPage />} />
            <Route path="/blog/sistem-penjemputan-jelantah-di-jakarta" element={<SistemPenjemputanJakartaPage />} />
            <Route path="/blog/teknologi-digital-untuk-penjemputan-jelantah" element={<TeknologiDigitalPenjemputanPage />} />
            <Route path="/blog/peran-kurir-dalam-ekosistem-jelantah" element={<PeranKurirJelantahPage />} />
            <Route path="/blog/bagaimana-proses-jelantah-menjadi-biodiesel" element={<ProsesJelantahJadiBiodieselPage />} />
            <Route path="/blog/potensi-jelantah-sebagai-sumber-energi-terbarukan" element={<PotensiJelantahEnergiTerbarukanPage />} />
            <Route path="/blog/cara-aman-menyimpan-jelantah-di-rumah-tangga" element={<CaraAmanMenyimpanJelantahPage />} />
            <Route path="/blog/bahaya-menjual-jelantah-ke-pihak-tidak-resmi" element={<BahayaJualJelantahTidakResmiPage />} />
            <Route path="/blog/dampak-pembuangan-jelantah-ke-lingkungan-dan-cara-mencegahnya" element={<DampakPembuanganJelantahPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;