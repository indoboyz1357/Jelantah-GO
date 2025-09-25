import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      name: "Penjemputan Minyak Jelantah",
      description: "Layanan utama kami yang dirancang untuk kemudahan Anda. Kami melayani penjemputan gratis langsung dari lokasi Anda, baik dari rumah, warung, kafe, maupun restoran. Cukup ajukan permintaan melalui platform kami, dan biarkan kurir kami yang bekerja.",
      details: ["Minimal penjemputan 5 liter.", "Penjemputan terjadwal & fleksibel.", "Proses timbang transparan di lokasi.", "Berlaku untuk rumah tangga & UMKM."]
    },
    {
      name: "Program Afiliasi Rp200/Liter",
      description: "Ubah jaringan Anda menjadi sumber penghasilan pasif. Dengan program afiliasi kami, Anda mendapatkan komisi untuk setiap liter jelantah yang berhasil kami jemput dari pengguna yang Anda referensikan. Ini adalah cara mudah untuk mendapatkan keuntungan sambil menyebarkan kebaikan.",
      details: ["Komisi Rp200 untuk setiap liter.", "Dashboard transparan untuk melacak performa.", "Materi promosi disediakan.", "Terbuka untuk siapa saja."]
    },
    {
      name: "Kemitraan Bisnis & Industri",
      description: "Untuk bisnis skala besar seperti hotel, pabrik makanan, atau pusat perbelanjaan, kami menawarkan solusi pengelolaan limbah jelantah yang profesional dan terstruktur. Kami menjamin penjemputan rutin, harga yang kompetitif, dan dokumentasi lengkap untuk kebutuhan audit Anda.",
      details: ["Kontrak kerjasama yang fleksibel.", "Harga B2B yang kompetitif.", "Laporan dan dokumentasi lengkap.", "Layanan pelanggan prioritas."]
    },
    {
      name: "Edukasi & Kampanye Lingkungan",
      description: "Kami percaya bahwa perubahan sejati dimulai dari kesadaran. JelantahGO aktif menyelenggarakan program edukasi di sekolah, komunitas, dan media sosial untuk meningkatkan pemahaman tentang bahaya limbah jelantah dan manfaat ekonomi sirkular.",
      details: ["Workshop & seminar online/offline.", "Materi edukasi gratis.", "Program pengumpulan di komunitas.", "Kolaborasi dengan institusi pendidikan."]
    }
  ];

  const serviceAreas = [
    { name: "Jakarta Pusat", link: "/layanan/jakarta-pusat" },
    { name: "Jakarta Barat", link: "/layanan/jakarta-barat" },
    { name: "Jakarta Selatan", link: "/layanan/jakarta-selatan" },
    { name: "Jakarta Timur", link: "/layanan/jakarta-timur" },
    { name: "Jakarta Utara", link: "/layanan/jakarta-utara" },
    { name: "Bogor", link: "/layanan/bogor" },
    { name: "Depok", link: "/layanan/depok" },
    { name: "Tangerang", link: "/layanan/tangerang" },
    { name: "Tangerang Selatan", link: "/layanan/tangerang-selatan" },
    { name: "Bekasi", link: "/layanan/bekasi" },
  ];


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Solusi Terintegrasi untuk Minyak Jelantah Anda
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Dari penjemputan di depan pintu hingga program kemitraan skala industri, kami memiliki layanan yang tepat untuk setiap kebutuhan.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {services.map((service, index) => (
            <div key={service.name} className={`flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">{service.name}</h2>
                <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.details.map(detail => (
                    <li key={detail} className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <img className="rounded-lg shadow-xl w-full h-auto object-cover" src={`https://picsum.photos/seed/service${index + 1}/600/450`} alt={service.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
       <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Jangkauan Layanan Kami</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                    Saat ini kami fokus melayani seluruh area di Jabodetabek. Pilih kota Anda untuk melihat detail layanan.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceAreas.map(area => (
                    <Link to={area.link} key={area.name} className="block p-6 text-center bg-white rounded-lg hover:bg-[#c4a648] hover:text-white transition-colors duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
                        <p className="font-semibold">{area.name}</p>
                    </Link>
                ))}
            </div>
        </div>
      </div>

       <div className="bg-[#F9F6EE] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Punya Kebutuhan Khusus?</h2>
            <p className="mt-4 text-lg text-gray-600">
                Tim kami siap membantu merancang solusi yang paling sesuai untuk Anda, komunitas, atau bisnis Anda.
            </p>
            <div className="mt-8">
                <Link
                    to="/kontak"
                    className="inline-block bg-[#c4a648] text-gray-900 px-8 py-3 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Hubungi Kami Sekarang
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;