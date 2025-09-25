import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jelantahgo.example.com/#/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Tentang Kami"
    }]
  };
  
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Misi Kami untuk Indonesia yang Lebih Hijau & Sejahtera
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            JelantahGO lahir dari sebuah keprihatinan sederhana: limbah minyak jelantah yang sering terbuang sia-sia, padahal memiliki potensi luar biasa.
          </p>
        </div>
      </div>

      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 font-serif">Dari Limbah Menjadi Berkah</h2>
              <p className="mt-4 text-lg text-gray-600">
                Kami melihat masalah di depan mata: jutaan liter minyak jelantah dari rumah tangga dan UMKM kuliner dibuang ke saluran air, mencemari lingkungan dan merusak ekosistem. Di sisi lain, kami melihat sebuah peluang: potensi minyak jelantah sebagai bahan baku biodiesel, sebuah sumber energi terbarukan yang ramah lingkungan.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                JelantahGO diciptakan untuk menjembatani kesenjangan ini. Kami membangun sebuah platform digital yang memudahkan siapa saja—dari ibu rumah tangga hingga pemilik restoran—untuk mengubah limbah jelantah mereka menjadi sumber penghasilan, sekaligus berkontribusi langsung pada kelestarian lingkungan dan ketahanan energi nasional.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img className="rounded-lg shadow-xl" src="https://picsum.photos/seed/about1/600/500" alt="Tim JelantahGO" />
            </div>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Visi Kami</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Menjadi ekosistem digital terdepan di Indonesia dalam pengelolaan limbah minyak jelantah yang berkelanjutan, menciptakan ekonomi sirkular yang memberdayakan masyarakat dan melestarikan lingkungan.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Misi Kami</h3>
                <ul className="mt-2 text-lg text-gray-600 list-disc list-inside space-y-2">
                  <li>Memberikan akses yang mudah dan menguntungkan bagi masyarakat untuk menjual minyak jelantah.</li>
                  <li>Menjamin transparansi dan efisiensi dalam setiap proses, dari penjemputan hingga pembayaran.</li>
                  <li>Mengedukasi masyarakat tentang pentingnya pengelolaan limbah yang bertanggung jawab.</li>
                  <li>Membangun rantai pasok biodiesel yang kuat untuk mendukung transisi energi bersih di Indonesia.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="bg-[#F9F6EE] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Siap Menjadi Bagian dari Perubahan?</h2>
            <p className="mt-4 text-lg text-gray-600">
                Setiap liter jelantah yang Anda kumpulkan adalah langkah nyata menuju masa depan yang lebih baik.
            </p>
            <div className="mt-8">
                <Link
                    to="/cara-kerja"
                    className="inline-block bg-[#c4a648] text-gray-900 px-8 py-3 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Lihat Cara Kerja Kami
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;