import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Berapa minimal minyak jelantah yang bisa dijemput?",
      a: "Kami melayani penjemputan dengan minimal 5 liter. Kami menyarankan untuk mengumpulkan jelantah dalam jerigen atau wadah tertutup hingga mencapai jumlah minimal untuk efisiensi proses penjemputan."
    },
    {
      q: "Apakah layanan penjemputan benar-benar gratis?",
      a: "Betul. Layanan penjemputan kami sepenuhnya gratis tanpa biaya tersembunyi untuk seluruh area yang terjangkau oleh layanan JelantahGO. Anda hanya perlu menyiapkan jelantahnya."
    },
    {
      q: "Bagaimana cara saya mendapatkan pembayaran?",
      a: "Pembayaran akan dilakukan secara digital. Setelah kurir kami menimbang dan memverifikasi jumlah jelantah Anda, pembayaran akan segera ditransfer ke rekening bank yang Anda daftarkan atau masuk sebagai saldo di akun JelantahGO Anda."
    },
    {
      q: "Area mana saja yang dijangkau oleh layanan JelantahGO?",
      a: "Saat ini, kami fokus melayani area Jabodetabek, Bandung, dan Surabaya. Kami terus berupaya memperluas jangkauan layanan kami ke kota-kota lain di Indonesia. Pantau terus website kami untuk informasi terbaru."
    },
     {
      q: "Bagaimana cara bergabung dengan program afiliasi?",
      a: "Anda bisa mendaftar program afiliasi melalui dashboard akun Anda. Setelah terdaftar, Anda akan mendapatkan kode referral unik yang bisa Anda bagikan. Setiap liter jelantah yang berhasil dijemput dari pengguna yang mendaftar menggunakan kode Anda akan memberikan komisi sebesar Rp200."
    }
  ];
  
  const blogPosts = [
    {
      title: "Pengepul Minyak Jelantah: Panduan Lengkap untuk Rumah Tangga & UMKM",
      description: "Memahami peran pengepul dan bagaimana memilih partner yang tepat untuk menjual jelantah Anda secara aman dan menguntungkan.",
      imageUrl: "https://picsum.photos/seed/jelantah1/600/400",
      link: "/blog/pengepul-minyak-jelantah-panduan-lengkap",
    },
    {
      title: "Jual Minyak Jelantah: Cara, Syarat, dan Tips Agar Untung Besar",
      description: "Dari persiapan hingga negosiasi harga, pelajari langkah-langkah praktis untuk memaksimalkan keuntungan dari penjualan jelantah Anda.",
      imageUrl: "https://picsum.photos/seed/jelantah2/600/400",
      link: "/blog/jual-minyak-jelantah-tips-untung",
    },
    {
      title: "Harga Minyak Jelantah 2025: Update Terbaru per Liter",
      description: "Analisis tren harga jelantah terkini dan faktor-faktor yang mempengaruhinya agar Anda selalu mendapatkan penawaran terbaik.",
      imageUrl: "https://picsum.photos/seed/jelantah3/600/400",
      link: "/blog/harga-minyak-jelantah-2025",
    },
    {
      title: "Bisnis Minyak Jelantah: Peluang, Tantangan, dan Cara Memulai",
      description: "Tertarik memulai bisnis pengumpulan jelantah? Simak panduan lengkap mengenai model bisnis, perizinan, dan strategi suksesnya.",
      imageUrl: "https://picsum.photos/seed/jelantah4/600/400",
      link: "/blog/bisnis-minyak-jelantah-cara-memulai",
    },
    {
      title: "Manfaat Menjual Minyak Jelantah: Ekonomi, Lingkungan, dan Sosial",
      description: "Lebih dari sekadar uang, temukan dampak positif yang Anda ciptakan dengan menjual jelantah bagi lingkungan, masyarakat, dan ekonomi.",
      imageUrl: "https://picsum.photos/seed/jelantah5/600/400",
      link: "/blog/manfaat-menjual-minyak-jelantah",
    },
    {
      title: "Sistem Penjemputan Minyak Jelantah: Mudah, Cepat, dan Transparan",
      description: "Bagaimana teknologi merevolusi proses penjemputan jelantah? Pelajari sistem modern yang kami tawarkan untuk kenyamanan Anda.",
      imageUrl: "https://picsum.photos/seed/jelantah6/600/400",
      link: "/blog/sistem-penjemputan-minyak-jelantah",
    },
  ];

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://jelantahgo.example.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jelantahgo.example.com/#/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[#F9F6EE]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif leading-tight">
                        JelantahGO – Solusi Jual Beli &amp; Penjemputan Minyak Jelantah Terpercaya
                    </h1>
                    <p className="mt-4 text-lg font-semibold text-[#c4a648]">
                        Pelopor Platform Digital Jual Beli Minyak Jelantah #1 di Indonesia
                    </p>
                    <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600">
                        Platform digital untuk menukar minyak jelantah jadi cuan, mendukung lingkungan, dan energi terbarukan. Penjemputan gratis, transaksi tercatat digital, dan program afiliasi Rp200/liter.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#request-pickup"
                            className="bg-[#c4a648] text-gray-900 px-6 py-3 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Request Penjemputan Sekarang
                        </a>
                        <a
                            href="#"
                            className="bg-white text-gray-800 px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300"
                        >
                            Daftar Afiliasi – Rp200/Liter
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-gray-500 text-center lg:text-left">
                        <span className="font-semibold text-yellow-600">Penjemputan Gratis</span> Area: Jakarta dan sekitarnya
                    </p>
                </div>
                <div className="relative">
                    <img src="https://picsum.photos/id/1060/600/400" alt="Proses pengumpulan minyak jelantah" className="rounded-lg shadow-2xl w-full" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-600">Telah menjemput</p>
                            <p className="text-xl font-bold text-[#c4a648]">50.000+ liter</p>
                        </div>
                        <div className="text-right">
                             <p className="text-sm text-gray-600">Partner</p>
                            <p className="text-xl font-bold text-gray-800">100+ UMKM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW SECTION: Harga */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Daftar Harga Minyak Jelantah 2025</h2>
            </div>
            <div className="mt-10 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Kuantitas Jerigen (18 Liter Full)</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Harga per Jerigen</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2 – 4 jerigen</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-semibold">Rp 130.000</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">5 – 10 jerigen</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-semibold">Rp 140.000</td>
                                    </tr>
                                     <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">11 – 20 jerigen</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-semibold">Rp 150.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">⚡ Minimal kuantiti: 40 liter / 2 jerigen full (18 Liter).</p>
            <div className="mt-6 text-center">
              <Link
                to="/harga"
                className="inline-block bg-white text-gray-800 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 shadow-sm"
              >
                Lihat Detail Harga Lengkap
              </Link>
            </div>
        </div>
      </section>
      
      {/* Section 1: Apa Itu Minyak Jelantah? */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Apa Itu Minyak Jelantah?</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Minyak jelantah adalah minyak goreng bekas pakai yang berasal dari berbagai jenis minyak goreng seperti minyak jagung, minyak sayur, minyak samin, dan sebagainya. Ini adalah limbah yang seringkali dianggap sepele, padahal memiliki dampak besar dan nilai ekonomi yang tersembunyi.</p>
            </div>
            <div className="mt-10 text-base text-gray-700 space-y-4 max-w-4xl mx-auto text-justify">
                <p>Secara sederhana, setiap kali kita menggoreng makanan, kualitas minyak akan menurun. Proses pemanasan berulang kali mengubah struktur kimia minyak, membuatnya menjadi lebih kental, berwarna gelap, dan mengeluarkan bau tengik. Minyak inilah yang kita sebut sebagai minyak jelantah atau Used Cooking Oil (UCO). Sumbernya sangat beragam, mulai dari skala rumah tangga, pedagang makanan kaki lima, restoran, hingga industri makanan besar.</p>
                <p>Masalahnya, banyak masyarakat yang belum tahu cara mengelola limbah ini dengan benar. Pilihan paling umum adalah membuangnya langsung ke saluran pembuangan air, wastafel, atau bahkan ke tanah. Praktik ini tanpa disadari menimbulkan serangkaian masalah serius, mulai dari penyumbatan pipa, pencemaran sumber air, hingga kerusakan ekosistem. Padahal, jika dikelola dengan tepat, minyak jelantah bukan lagi menjadi limbah, melainkan sumber daya berharga yang dapat diolah menjadi produk bernilai tinggi seperti biodiesel.</p>
            </div>
        </div>
      </section>

      {/* Section 2: Mengapa Harus Menjual Minyak Jelantah? */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 font-serif">Mengapa Harus Menjual Minyak Jelantah?</h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Mengubah limbah menjadi keuntungan sambil memberikan dampak positif bagi banyak aspek.</p>
                  <div className="mt-6 text-center">
                    <Link
                        to="/tentang-kami"
                        className="inline-block bg-white text-gray-800 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 shadow-sm"
                    >
                        Pelajari Lebih Lanjut di Tentang Kami
                    </Link>
                  </div>
              </div>
              <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 font-serif">Punya Nilai Ekonomi Tinggi</h3>
                      <p className="mt-2 text-base text-gray-600">Jangan buang uang Anda ke saluran pembuangan. Minyak jelantah memiliki nilai jual yang kompetitif. Setiap liter yang Anda kumpulkan bisa diubah menjadi penghasilan tambahan, baik untuk individu, rumah tangga, maupun bisnis kuliner. JelantahGO memastikan Anda mendapatkan harga terbaik yang transparan.</p>
                  </div>
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 font-serif">Mendukung Lingkungan</h3>
                      <p className="mt-2 text-base text-gray-600">Satu liter minyak jelantah yang dibuang sembarangan dapat mencemari ribuan liter air bersih. Dengan menjualnya, Anda secara aktif mencegah pencemaran air dan tanah, menjaga ekosistem perairan, dan mengurangi risiko penyumbatan saluran drainase yang dapat menyebabkan banjir.</p>
                  </div>
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 font-serif">Bahan Baku Energi Terbarukan</h3>
                      <p className="mt-2 text-base text-gray-600">Jelantah yang Anda jual akan diolah menjadi biodiesel, sumber energi alternatif yang lebih ramah lingkungan. Biodiesel menghasilkan emisi karbon yang jauh lebih rendah dibandingkan solar dari fosil. Anda berkontribusi langsung pada program transisi energi bersih dan ketahanan energi nasional.</p>
                  </div>
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 font-serif">Lebih Aman untuk Kesehatan</h3>
                      <p className="mt-2 text-base text-gray-600">Menggunakan minyak goreng berulang kali sangat berbahaya bagi kesehatan karena dapat memicu berbagai penyakit degeneratif. Dengan menjual jelantah, Anda mendorong praktik memasak yang lebih sehat bagi keluarga atau pelanggan Anda, serta mencegah jelantah disalahgunakan oleh oknum tidak bertanggung jawab.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 3: Layanan Utama JelantahGO */}
       <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Layanan Utama JelantahGO</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Kami menyediakan ekosistem lengkap untuk pengelolaan minyak jelantah yang mudah, menguntungkan, dan berdampak.</p>
                 <div className="mt-6">
                    <Link to="/layanan" className="text-base font-semibold text-[#c4a648] hover:text-[#a18836] transition-colors">
                        Pelajari Lebih Lanjut Mengenai Layanan Kami &rarr;
                    </Link>
                </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="p-8 rounded-lg bg-white/60 border border-gray-200/50">
                    <h3 className="text-xl font-semibold text-gray-800">Jual Beli Minyak Jelantah</h3>
                    <p className="mt-2 text-base text-gray-600">Kami melayani penjualan minyak jelantah dari berbagai skala, mulai dari rumah tangga dengan beberapa liter hingga restoran dan industri yang menghasilkan ratusan liter per bulan. Prosesnya mudah, transparan, dan dengan harga yang bersaing.</p>
                </div>
                 <div className="p-8 rounded-lg bg-white/60 border border-gray-200/50">
                    <h3 className="text-xl font-semibold text-gray-800">Penjemputan Minyak Jelantah</h3>
                    <p className="mt-2 text-base text-gray-600">Tidak perlu repot mengantar jelantah Anda. Cukup ajukan permintaan melalui platform kami, dan kurir kami akan datang menjemput langsung ke lokasi Anda sesuai jadwal yang disepakati. Layanan penjemputan gratis dan tersedia di berbagai kota besar.</p>
                </div>
                 <div className="p-8 rounded-lg bg-white/60 border border-gray-200/50">
                    <h3 className="text-xl font-semibold text-gray-800">Program Afiliasi Rp200/Liter</h3>
                    <p className="mt-2 text-base text-gray-600">Dapatkan penghasilan pasif dengan mengajak teman, tetangga, atau komunitas Anda untuk menjual jelantah ke JelantahGO. Anda akan mendapatkan komisi Rp200 untuk setiap liter yang terkumpul dari referral Anda. Semakin banyak yang Anda ajak, semakin besar pendapatan Anda.</p>
                </div>
                 <div className="p-8 rounded-lg bg-white/60 border border-gray-200/50">
                    <h3 className="text-xl font-semibold text-gray-800">Edukasi & Kesadaran Lingkungan</h3>
                    <p className="mt-2 text-base text-gray-600">Kami percaya perubahan dimulai dari pengetahuan. Melalui blog, seminar, dan kampanye sosial, kami aktif memberikan edukasi mengenai bahaya limbah jelantah dan manfaat pengelolaannya, membangun komunitas yang peduli lingkungan.</p>
                </div>
            </div>
        </div>
    </section>
      
      {/* Section 4: Cara Kerja JelantahGO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl text-gray-800 font-bold tracking-tight sm:text-4xl font-serif">Cara Kerja JelantahGO</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Sebuah proses yang dirancang untuk kemudahan dan transparansi maksimal bagi Anda.</p>
                <div className="mt-6">
                    <Link to="/cara-kerja" className="text-base font-semibold text-[#c4a648] hover:text-[#a18836] transition-colors">
                        Lihat Detail Cara Kerja &rarr;
                    </Link>
                </div>
            </div>
            <div className="mt-16 max-w-4xl mx-auto grid gap-x-12 gap-y-16 md:grid-cols-2">
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">1</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Request Penjemputan</h3>
                    <p className="mt-2 text-base text-gray-500">Buat akun dalam hitungan menit, lalu ajukan permintaan penjemputan. Tentukan jumlah jelantah dan pilih jadwal yang paling sesuai untuk Anda.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">2</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Lacak Kurir & Komunikasi</h3>
                    <p className="mt-2 text-base text-gray-500">Stop menunggu dalam ketidakpastian. Lacak posisi kurir secara real-time di peta aplikasi. Hubungi kurir dengan mudah melalui fitur private chat.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">3</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Timbang & Verifikasi Transparan</h3>
                    <p className="mt-2 text-base text-gray-500">Saat kurir tiba, jelantah akan ditimbang secara akurat di depan Anda. Proses verifikasi yang jujur dan terbuka untuk kepercayaan Anda.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">4</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Pembayaran Digital Cepat</h3>
                    <p className="mt-2 text-base text-gray-500">Setelah verifikasi, pembayaran langsung masuk sebagai saldo di akun JelantahGO atau ditransfer ke rekening. Cepat, aman, dan semua transaksi tercatat rapi.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 5: JelantahGO vs Cara Konvensional */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Tinggalkan Cara Lama yang Merepotkan</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Ini Bukan Sekadar Transaksi, Ini Adalah Gerakan Menuju Solusi Cerdas & Membanggakan.</p>
            </div>
            <div className="mt-12 flow-root">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Aspek</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Konvensional (Cara Lama)</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-[#F9F6EE]">JelantahGO (Solusi Cerdas)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Pengalaman Pengguna</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">Proses manual, tidak pasti, dan membuang waktu. Anda yang harus repot.</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Cepat, modern, dan sepenuhnya otomatis. Cukup satu klik, kami yang urus.</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Kepercayaan & Kontrol</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">Harga 'gelap', timbangan manual, pembayaran tunai tanpa catatan.</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Harga terbaik yang transparan, penimbangan akurat, pembayaran digital tercatat rapi.</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Kemudahan Komunikasi</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">Janji penjemputan via WhatsApp yang sering tidak pasti. Anda membuang waktu menunggu kurir yang tak kunjung datang.</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Stop menunggu dalam ketidakpastian. Lacak posisi kurir secara real-time di peta, sama seperti ojek online.</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Peluang & Dampak</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">Sekadar membuang limbah. Tak ada nilai tambah.</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Mengubah limbah jadi cuan + penghasilan pasif dari afiliasi. Anda menjadi pahlawan lingkungan.</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Inovasi</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">Manual dan tidak terintegrasi. Bergantung pada komunikasi personal.</td>
                                        <td className="whitespace-pre-wrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Pelopor platform digital pertama di Indonesia dengan sistem terintegrasi.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 6: Manfaat Ekonomi */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 font-serif">Manfaat Ekonomi dari Minyak Jelantah</h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Membuka peluang ekonomi baru dari limbah yang sering terabaikan.</p>
              </div>
              <div className="mt-12 grid gap-10 md:grid-cols-3">
                  <div className="p-6 border-l-4 border-[#c4a648]">
                      <h3 className="text-xl font-semibold text-gray-800">UMKM & Restoran</h3>
                      <p className="mt-2 text-base text-gray-600">Bagi bisnis kuliner, limbah jelantah adalah biaya tersembunyi. Dengan JelantahGO, limbah ini berubah menjadi aset yang menghasilkan pemasukan tambahan. Ini membantu meningkatkan efisiensi operasional dan profitabilitas bisnis Anda.</p>
                  </div>
                   <div className="p-6 border-l-4 border-[#c4a648]">
                      <h3 className="text-xl font-semibold text-gray-800">Komunitas & Sekolah</h3>
                      <p className="mt-2 text-base text-gray-600">Program pengumpulan jelantah bisa menjadi sumber penggalangan dana yang efektif untuk kegiatan sosial, acara sekolah, atau kas RT/RW. Kami siap bekerja sama dengan komunitas untuk menciptakan program yang bermanfaat secara sosial dan ekonomi.</p>
                  </div>
                   <div className="p-6 border-l-4 border-[#c4a648]">
                      <h3 className="text-xl font-semibold text-gray-800">Industri Biodiesel</h3>
                      <p className="mt-2 text-base text-gray-600">Dengan menyediakan pasokan bahan baku yang stabil dan berkualitas, Anda mendukung pertumbuhan industri energi terbarukan di Indonesia. Ini menciptakan lapangan kerja baru di sektor energi bersih dan mengurangi ketergantungan negara pada bahan bakar fosil.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 7: Minyak Jelantah & Energi Biodiesel */}
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Minyak Jelantah & Energi Biodiesel</h2>
                 <div className="mt-6 prose prose-lg text-gray-700 mx-auto text-justify">
                    <p>Indonesia adalah salah satu produsen biodiesel terbesar di dunia, dan minyak jelantah memegang peranan krusial dalam rantai pasok ini. Proses konversi jelantah menjadi biodiesel, yang dikenal sebagai transesterifikasi, mengubah limbah menjadi bahan bakar yang setara dengan solar. Keunggulannya luar biasa: biodiesel dari jelantah mengurangi emisi gas rumah kaca hingga lebih dari 80% dibandingkan solar fosil. Ini menjadikannya pilar penting dalam upaya mitigasi perubahan iklim. Setiap liter jelantah yang Anda jual bukan hanya menjadi uang, tetapi juga menjadi energi bersih yang menggerakkan mesin, mengurangi polusi udara, dan membangun masa depan energi yang lebih berkelanjutan untuk Indonesia.</p>
                </div>
            </div>
        </section>

      {/* Section 8: Testimoni Pengguna */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Apa Kata Mereka?</h2>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-2">
                <blockquote className="p-8 bg-[#F9F6EE] rounded-lg border-l-4 border-[#c4a648]">
                    <p className="text-lg text-gray-700">“Sejak ada JelantahGO, saya tidak perlu repot buang jelantah atau cari pengepul. Tinggal request, langsung dijemput, uangnya masuk. Praktis banget buat ibu rumah tangga seperti saya. Lingkungan bersih, dapat uang tambahan pula!”</p>
                    <footer className="mt-4">
                        <p className="font-semibold text-gray-900">– Ibu Rina, Jakarta</p>
                    </footer>
                </blockquote>
                 <blockquote className="p-8 bg-[#F9F6EE] rounded-lg border-l-4 border-[#c4a648]">
                    <p className="text-lg text-gray-700">“Program afiliasinya keren! Saya ajak tetangga satu komplek, sekarang tiap bulan dapat komisi lumayan. Dashboardnya juga transparan, jadi bisa lihat berapa liter yang terkumpul dari referral. Benar-benar win-win solution.”</p>
                    <footer className="mt-4">
                        <p className="font-semibold text-gray-900">– Pak Dedi, Bandung</p>
                    </footer>
                </blockquote>
            </div>
        </div>
      </section>

      {/* NEW SECTION: Blog */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Baca Artikel Terbaru Kami</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Dapatkan wawasan mendalam, tips praktis, dan berita terkini seputar dunia minyak jelantah, keberlanjutan, dan ekonomi sirkular.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="mt-2 text-xl font-semibold text-gray-900 font-serif">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
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
           <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-block bg-white text-gray-800 px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 shadow-sm"
            >
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Dampak Kami Sejauh Ini</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Setiap liter jelantah yang terkumpul menciptakan dampak positif yang nyata bagi lingkungan dan masyarakat.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-[#F9F6EE] rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">50.000+</p>
              <p className="text-base font-medium text-gray-500">Liter Terkumpul</p>
            </div>
            <div className="p-4 bg-[#F9F6EE] rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.C14 5 16.09 5.777 17.657 7.343A8 8 0 0118 18c-1-1-2-2-3-2s-2 1-3 2a8 8 0 015.657-5.657z" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">125 Ton</p>
              <p className="text-base font-medium text-gray-500">Estimasi CO2 Berkurang</p>
            </div>
            <div className="p-4 bg-[#F9F6EE] rounded-lg">
               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0115.357-2m0 0H15" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">50 Juta</p>
              <p className="text-base font-medium text-gray-500">Liter Air Terselamatkan</p>
            </div>
            <div className="p-4 bg-[#F9F6EE] rounded-lg">
               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">100+</p>
              <p className="text-base font-medium text-gray-500">Mitra UMKM Terberdayakan</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <p className="mt-4 text-lg text-gray-600">Menemukan jawaban cepat untuk pertanyaan paling umum tentang layanan kami.</p>
          </div>
          <div className="mt-12 space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-5 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-800">{faq.q}</span>
                  <span className="transform transition-transform duration-300">
                    {openFaq === index ?
                      <svg className="w-6 h-6 text-[#c4a648]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path></svg>
                      :
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    }
                  </span>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 border-t border-gray-200">
                    <p className="text-base text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="inline-block bg-white text-gray-800 px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 shadow-sm"
            >
              Lihat Semua Pertanyaan
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section 9: Final CTA */}
      <section id="request-pickup" className="py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-4xl font-serif">
                Ayo Ubah Jelantah Jadi Cuan & Energi Bersih!
            </h2>
            <ul className="mt-6 inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-gray-600">
                <li>✓ Menambah penghasilan</li>
                <li>✓ Menjaga lingkungan</li>
                <li>✓ Mendukung energi terbarukan</li>
            </ul>
            <div className="mt-10">
                <Link
                    to="/kontak"
                    className="inline-block bg-[#c4a648] text-gray-900 px-10 py-4 border border-transparent rounded-md text-lg font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                    Kontak Kami
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;