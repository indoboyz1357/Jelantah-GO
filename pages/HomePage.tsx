import React, { useState } from 'react';

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

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="bg-[#F9F6EE]">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif leading-tight">
                        JelantahGO – Solusi Jual Beli &amp; Penjemputan Minyak Jelantah Terpercaya
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-gray-600">
                        Platform digital untuk menukar minyak jelantah jadi cuan, mendukung lingkungan, dan energi terbarukan. Penjemputan gratis, transaksi tercatat digital, dan program afiliasi Rp200/liter.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
                    <p className="mt-6 text-sm text-gray-500 text-center md:text-left">
                        <span className="font-semibold text-yellow-600">Penjemputan Gratis</span> Area: Jabodetabek, Bandung, Surabaya
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
      
      {/* Section 1: Apa Itu Minyak Jelantah? */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
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
            <div className="lg:text-center">
                <h2 className="text-3xl text-gray-800 font-bold tracking-tight sm:text-4xl font-serif">Cara Kerja JelantahGO</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Sebuah proses yang dirancang untuk kemudahan dan transparansi maksimal bagi Anda.</p>
            </div>
            <div className="mt-16 grid items-start gap-16 lg:grid-cols-4">
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">1</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Daftar Akun & Request</h3>
                    <p className="mt-2 text-base text-gray-500">Buat akun Anda dalam hitungan menit. Setelah itu, isi formulir permintaan penjemputan, tentukan perkiraan jumlah jelantah, dan pilih jadwal yang paling sesuai untuk Anda.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">2</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Kurir Menjemput</h3>
                    <p className="mt-2 text-base text-gray-500">Tim kurir profesional kami akan menghubungi Anda untuk konfirmasi dan datang ke lokasi Anda tepat waktu. Mereka dilengkapi dengan peralatan untuk menimbang jelantah secara akurat dan transparan di depan Anda.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">3</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Verifikasi & Pembayaran</h3>
                    <p className="mt-2 text-base text-gray-500">Setelah penimbangan, jumlah liter akan tercatat secara digital. Total pembayaran akan langsung dihitung berdasarkan harga terkini. Anda bisa memilih metode pembayaran yang paling nyaman.</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c4a648] text-white font-bold text-3xl mx-auto shadow-lg">4</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">Saldo Masuk ke Akun</h3>
                    <p className="mt-2 text-base text-gray-500">Pembayaran akan langsung ditransfer ke rekening bank Anda atau masuk sebagai saldo di akun JelantahGO Anda, yang bisa Anda cairkan kapan saja. Semua riwayat transaksi tercatat rapi di dashboard Anda.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 5: JelantahGO vs Cara Konvensional */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">JelantahGO vs Cara Konvensional</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Lihat perbedaan signifikan yang kami tawarkan untuk merevolusi cara Anda mengelola minyak jelantah.</p>
            </div>
            <div className="mt-12 flow-root">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Aspek</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Konvensional</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-[#F9F6EE]">JelantahGO</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Penjemputan</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Harus antar sendiri ke pengepul, lokasi terbatas.</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Gratis jemput ke lokasi Anda, jangkauan luas.</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Komisi Afiliasi</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Tidak ada.</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Rp200 per liter dari setiap referral yang berhasil.</td>
                                    </tr>
                                     <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Transaksi</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Manual, tunai, seringkali tidak transparan.</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Digital, non-tunai, tercatat, dan transparan.</td>
                                    </tr>
                                     <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Skala Layanan</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Terbatas pada area tertentu, sulit melayani skala besar.</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Melayani dari rumah tangga hingga industri besar.</td>
                                    </tr>
                                     <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Edukasi & Dampak</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Kurang ada edukasi dan kampanye lingkungan.</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-700 bg-[#F9F6EE]">Kampanye dan edukasi aktif untuk kesadaran lingkungan.</td>
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
            <div className="lg:text-center">
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

      {/* NEW SECTION: Our Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Dampak Kami Sejauh Ini</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Setiap liter jelantah yang terkumpul menciptakan dampak positif yang nyata bagi lingkungan dan masyarakat.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-white/60 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">50.000+</p>
              <p className="text-base font-medium text-gray-500">Liter Terkumpul</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.C14 5 16.09 5.777 17.657 7.343A8 8 0 0118 18c-1-1-2-2-3-2s-2 1-3 2a8 8 0 015.657-5.657z" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">125 Ton</p>
              <p className="text-base font-medium text-gray-500">Estimasi CO2 Berkurang</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg">
               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#c4a648] text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0115.357-2m0 0H15" /></svg>
              </div>
              <p className="mt-5 text-3xl font-bold text-gray-900">50 Juta</p>
              <p className="text-base font-medium text-gray-500">Liter Air Terselamatkan</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg">
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
                <a
                    href="#"
                    className="inline-block bg-[#c4a648] text-gray-900 px-10 py-4 border border-transparent rounded-md text-lg font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                    Request Penjemputan Sekarang
                </a>
                 <p className="mt-4 text-sm text-gray-500">(Fitur ini sedang dalam pengembangan)</p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
