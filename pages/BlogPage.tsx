import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {

  const articleData = [
    {
      category: "Seputar Pengepul & Penjualan Jelantah",
      articles: [
        {
          title: "Pengepul Minyak Jelantah: Panduan Lengkap untuk Rumah Tangga & UMKM (Pillar)",
          description: "Memahami peran pengepul dan bagaimana memilih partner yang tepat untuk menjual jelantah Anda secara aman dan menguntungkan.",
          imageUrl: "https://picsum.photos/seed/jelantah1/600/400",
          link: "/blog/pengepul-minyak-jelantah-panduan-lengkap",
        },
        {
          title: "Jual Minyak Jelantah: Cara, Syarat, dan Tips Agar Untung Besar (Pillar)",
          description: "Dari persiapan hingga negosiasi harga, pelajari langkah-langkah praktis untuk memaksimalkan keuntungan dari penjualan jelantah Anda.",
          imageUrl: "https://picsum.photos/seed/jelantah2/600/400",
          link: "/blog/jual-minyak-jelantah-tips-untung",
        },
        {
          title: "Apa Itu Pengepul Minyak Jelantah dan Bagaimana Cara Kerjanya?",
          description: "Memahami peran krusial pengepul dalam rantai daur ulang dan ekonomi sirkular.",
          imageUrl: "https://picsum.photos/seed/cluster1/600/400",
          link: "/blog/apa-itu-pengepul-minyak-jelantah",
        },
        {
          title: "Syarat dan Prosedur Jual Minyak Jelantah ke Pengepul Resmi",
          description: "Ketahui apa saja yang perlu disiapkan agar proses penjualan Anda lancar dan efisien.",
          imageUrl: "https://picsum.photos/seed/cluster2/600/400",
          link: "/blog/syarat-prosedur-jual-jelantah-resmi",
        },
        {
          title: "Tips Mendapatkan Harga Tinggi Saat Menjual Minyak Jelantah",
          description: "Strategi cerdas untuk meningkatkan nilai jual dari setiap liter jelantah yang Anda kumpulkan.",
          imageUrl: "https://picsum.photos/seed/cluster3/600/400",
          link: "/blog/tips-harga-tinggi-saat-jual-jelantah",
        },
        {
          title: "Kesalahan Umum Saat Jual Minyak Jelantah yang Harus Dihindari",
          description: "Hindari jebakan-jebakan ini untuk memastikan transaksi Anda aman dan menguntungkan.",
          imageUrl: "https://picsum.photos/seed/cluster4/600/400",
          link: "/blog/kesalahan-umum-saat-jual-jelantah",
        },
        {
          title: "Rekomendasi Pengepul Minyak Jelantah Terpercaya di Indonesia",
          description: "Panduan memilih partner yang tepat di era digital untuk keamanan dan keuntungan maksimal.",
          imageUrl: "https://picsum.photos/seed/cluster5/600/400",
          link: "/blog/rekomendasi-pengepul-jelantah-terpercaya",
        },
      ]
    },
    {
      category: "Seputar Harga & Bisnis Jelantah",
      articles: [
        {
          title: "Harga Minyak Jelantah 2025: Update Terbaru per Liter (Pillar)",
          description: "Analisis tren harga jelantah terkini dan faktor-faktor yang mempengaruhinya agar Anda selalu mendapatkan penawaran terbaik.",
          imageUrl: "https://picsum.photos/seed/jelantah3/600/400",
          link: "/blog/harga-minyak-jelantah-2025",
        },
        {
          title: "Bisnis Minyak Jelantah: Peluang, Tantangan, dan Cara Memulai (Pillar)",
          description: "Tertarik memulai bisnis pengumpulan jelantah? Simak panduan lengkap mengenai model bisnis, perizinan, dan strategi suksesnya.",
          imageUrl: "https://picsum.photos/seed/jelantah4/600/400",
          link: "/blog/bisnis-minyak-jelantah-cara-memulai",
        },
        {
          title: "Faktor yang Mempengaruhi Harga Minyak Jelantah per Liter",
          description: "Dari pasar CPO hingga kebijakan pemerintah, pahami variabel yang menentukan harga jelantah.",
          imageUrl: "https://picsum.photos/seed/cluster6/600/400",
          link: "/blog/faktor-yang-mempengaruhi-harga-jelantah",
        },
        {
          title: "Prediksi Harga Minyak Jelantah 2025–2030",
          description: "Analisis tren jangka panjang dan mengapa nilai jelantah Anda kemungkinan besar akan terus meningkat.",
          imageUrl: "https://picsum.photos/seed/cluster7/600/400",
          link: "/blog/prediksi-harga-jelantah-2025-2030",
        },
        {
          title: "Analisis Bisnis Minyak Jelantah: Modal, Omzet, dan ROI",
          description: "Perhitungan sederhana untuk Anda yang tertarik terjun ke bisnis pengumpulan jelantah.",
          imageUrl: "https://picsum.photos/seed/cluster8/600/400",
          link: "/blog/analisis-bisnis-jelantah-modal-omzet-roi",
        },
         {
          title: "Kisah Sukses UMKM dari Bisnis Minyak Jelantah",
          description: "Kisah nyata yang membuktikan bahwa limbah bisa menjadi jalan menuju kesuksesan.",
          imageUrl: "https://picsum.photos/seed/cluster9/600/400",
          link: "/blog/kisah-sukses-umkm-dari-bisnis-jelantah",
        },
        {
          title: "Strategi Mengembangkan Bisnis Jual Beli Minyak Jelantah",
          description: "Dari diversifikasi sumber hingga optimasi logistik, bawa bisnis Anda ke level berikutnya.",
          imageUrl: "https://picsum.photos/seed/cluster10/600/400",
          link: "/blog/strategi-mengembangkan-bisnis-jual-beli-jelantah",
        },
      ]
    },
    {
        category: "Seputar Manfaat & Sistem Penjemputan",
        articles: [
            {
                title: "Manfaat Menjual Minyak Jelantah: Ekonomi, Lingkungan, dan Sosial (Pillar)",
                description: "Lebih dari sekadar uang, temukan dampak positif yang Anda ciptakan dengan menjual jelantah.",
                imageUrl: "https://picsum.photos/seed/jelantah5/600/400",
                link: "/blog/manfaat-menjual-minyak-jelantah",
            },
            {
                title: "Sistem Penjemputan Minyak Jelantah: Mudah, Cepat, dan Transparan (Pillar)",
                description: "Bagaimana teknologi merevolusi proses penjemputan jelantah? Pelajari sistem modern kami.",
                imageUrl: "https://picsum.photos/seed/jelantah6/600/400",
                link: "/blog/sistem-penjemputan-minyak-jelantah",
            },
             {
                title: "Manfaat Ekonomi Menjual Minyak Jelantah bagi Rumah Tangga",
                description: "Dari penghasilan tambahan langsung hingga penghematan biaya perbaikan rumah.",
                imageUrl: "https://picsum.photos/seed/cluster11/600/400",
                link: "/blog/manfaat-ekonomi-menjual-jelantah-bagi-rumah-tangga",
            },
            {
                title: "Dampak Lingkungan Jika Minyak Jelantah Didaur Ulang",
                description: "Bagaimana tindakan Anda secara aktif mengurangi emisi karbon dan menyelamatkan ekosistem air.",
                imageUrl: "https://picsum.photos/seed/cluster12/600/400",
                link: "/blog/dampak-lingkungan-jika-jelantah-didaur-ulang",
            },
             {
                title: "Sistem Penjemputan Minyak Jelantah di Jakarta dan Sekitarnya",
                description: "Bagaimana kami mengatasi tantangan logistik di kota megapolitan untuk layanan yang andal.",
                imageUrl: "https://picsum.photos/seed/cluster13/600/400",
                link: "/blog/sistem-penjemputan-jelantah-di-jakarta",
            },
             {
                title: "Teknologi Digital untuk Penjemputan Minyak Jelantah",
                description: "Mengintip di balik layar aplikasi dan platform yang membuat semuanya bekerja.",
                imageUrl: "https://picsum.photos/seed/cluster14/600/400",
                link: "/blog/teknologi-digital-untuk-penjemputan-jelantah",
            },
             {
                title: "Peran Kurir dalam Ekosistem Pengelolaan Minyak Jelantah",
                description: "Mereka adalah ujung tombak yang memastikan layanan berjalan lancar di lapangan.",
                imageUrl: "https://picsum.photos/seed/cluster15/600/400",
                link: "/blog/peran-kurir-dalam-ekosistem-jelantah",
            },
        ]
    },
    {
        category: "Seputar Biodiesel & Edukasi Lingkungan",
        articles: [
            {
                title: "Mengenal Biodiesel: Energi Bersih dari Dapur Anda (Pillar)",
                description: "Apa itu biodiesel dan bagaimana minyak jelantah bisa menjadi bahan bakarnya? Pahami sains di balik energi terbarukan ini.",
                imageUrl: "https://picsum.photos/seed/jelantah7/600/400",
                link: "/blog/mengenal-biodiesel-dari-jelantah",
            },
             {
                title: "Bahaya Membuang Jelantah ke Saluran Air dan Solusinya (Pillar)",
                description: "Dari pipa tersumbat hingga pencemaran air, ketahui dampak buruk dari kebiasaan membuang jelantah.",
                imageUrl: "https://picsum.photos/seed/jelantah8/600/400",
                link: "/blog/bahaya-membuang-jelantah-ke-saluran-air",
            },
             {
                title: "Cara Menyimpan Minyak Jelantah dengan Benar (Pillar)",
                description: "Jelantah yang disimpan dengan baik akan memiliki nilai jual lebih tinggi. Ikuti tips praktis ini.",
                imageUrl: "https://picsum.photos/seed/jelantah9/600/400",
                link: "/blog/cara-menyimpan-minyak-jelantah",
            },
            {
                title: "Perbedaan Pengepul Resmi dan Tidak Resmi (Pillar)",
                description: "Kenali ciri-ciri pengepul resmi dan hindari risiko penipuan atau penyalahgunaan jelantah.",
                imageUrl: "https://picsum.photos/seed/jelantah10/600/400",
                link: "/blog/perbedaan-pengepul-resmi-dan-tidak",
            },
            {
                title: "Kenapa Harus Jual Minyak Jelantah? Dampak Jika Dibuang (Pillar)",
                description: "Sebuah pengingat penting tentang konsekuensi membuang jelantah sembarangan.",
                imageUrl: "https://picsum.photos/seed/jelantah11/600/400",
                link: "/blog/kenapa-harus-jual-minyak-jelantah",
            },
            {
                title: "Bagaimana Proses Minyak Jelantah Menjadi Biodiesel?",
                description: "Dari pra-pengolahan hingga pemurnian, inilah perjalanan kimia jelantah Anda.",
                imageUrl: "https://picsum.photos/seed/cluster16/600/400",
                link: "/blog/bagaimana-proses-jelantah-menjadi-biodiesel",
            },
            {
                title: "Potensi Jelantah sebagai Sumber Energi Terbarukan di Indonesia",
                description: "Mengapa limbah dapur ini adalah aset strategis nasional untuk masa depan energi kita.",
                imageUrl: "https://picsum.photos/seed/cluster17/600/400",
                link: "/blog/potensi-jelantah-sebagai-sumber-energi-terbarukan",
            },
             {
                title: "Cara Aman Menyimpan Minyak Jelantah di Rumah Tangga",
                description: "Tips praktis untuk menyimpan jelantah secara aman, terutama jika ada anak-anak.",
                imageUrl: "https://picsum.photos/seed/cluster18/600/400",
                link: "/blog/cara-aman-menyimpan-jelantah-di-rumah-tangga",
            },
             {
                title: "Bahaya Menjual Minyak Jelantah ke Pihak Tidak Resmi",
                description: "Ketahui risiko terbesar: jelantah Anda bisa diolah menjadi minyak oplosan berbahaya.",
                imageUrl: "https://picsum.photos/seed/cluster19/600/400",
                link: "/blog/bahaya-menjual-jelantah-ke-pihak-tidak-resmi",
            },
            {
                title: "Dampak Pembuangan Minyak Jelantah ke Lingkungan & Cara Mencegahnya",
                description: "Dari zona mati di sungai hingga kerusakan tanah, pahami bencana ekologis yang bisa kita cegah.",
                imageUrl: "https://picsum.photos/seed/cluster20/600/400",
                link: "/blog/dampak-pembuangan-jelantah-ke-lingkungan-dan-cara-mencegahnya",
            }
        ]
    }
  ];

  const allCategories = ["Semua Artikel", ...articleData.map(cat => cat.category)];
  const [activeTab, setActiveTab] = useState(allCategories[0]);

  const getFilteredArticles = () => {
    if (activeTab === "Semua Artikel") {
      return articleData.flatMap(cat => cat.articles);
    }
    return articleData.find(cat => cat.category === activeTab)?.articles || [];
  };

  const filteredArticles = getFilteredArticles();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Arsip Blog JelantahGO
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Wawasan, berita, dan panduan terkini seputar dunia minyak jelantah, ekonomi sirkular, dan gaya hidup berkelanjutan.
          </p>
        </div>

        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`
                    ${activeTab === category 
                      ? 'border-[#c4a648] text-[#c4a648]' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  `}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {filteredArticles.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link to={post.link} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 font-serif hover:text-[#c4a648]">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={post.link}
                      className="text-base font-semibold text-[#c4a648] hover:text-[#a18836] transition-colors"
                    >
                      Baca Selengkapnya &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
