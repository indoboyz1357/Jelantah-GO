import React from 'react';
import { Link } from 'react-router-dom';

const popularArticles = [
  { title: "Harga Minyak Jelantah 2025", link: "/blog/harga-minyak-jelantah-2025" },
  { title: "Jual Minyak Jelantah: Cara & Syarat", link: "/blog/jual-minyak-jelantah-tips-untung" },
  { title: "Perbedaan Pengepul Resmi dan Tidak Resmi", link: "/blog/perbedaan-pengepul-resmi-dan-tidak" },
  { title: "Manfaat Menjual Minyak Jelantah", link: "/blog/manfaat-menjual-minyak-jelantah" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-8 sticky top-28">
      {/* CTA Widget */}
      <div className="p-6 rounded-lg bg-[#F9F6EE] border border-gray-200/50">
        <h3 className="text-xl font-bold text-gray-800 font-serif">Siap Jual Jelantah?</h3>
        <p className="mt-2 text-gray-600">
          Ubah limbah dapur Anda menjadi cuan dengan proses yang mudah, cepat, dan transparan.
        </p>
        <Link
          to="/kontak"
          className="mt-4 inline-block w-full text-center bg-[#c4a648] text-gray-900 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#b5983f] transition-all duration-300 shadow"
        >
          Request Penjemputan
        </Link>
      </div>

      {/* Popular Articles Widget */}
      <div className="p-6 rounded-lg bg-white border border-gray-200/50 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 font-serif">Artikel Populer</h3>
        <ul className="mt-4 space-y-3">
          {popularArticles.map((article) => (
            <li key={article.link}>
              <Link to={article.link} className="text-base text-gray-600 hover:text-[#c4a648] hover:underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services Widget */}
       <div className="p-6 rounded-lg bg-white border border-gray-200/50 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 font-serif">Layanan Unggulan</h3>
         <ul className="mt-4 space-y-3">
            <li><Link to="/layanan" className="flex items-center text-gray-600 hover:text-[#c4a648]"><svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Penjemputan Gratis</Link></li>
            <li><Link to="/daftar-afiliasi" className="flex items-center text-gray-600 hover:text-[#c4a648]"><svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Program Afiliasi</Link></li>
            <li><Link to="/layanan" className="flex items-center text-gray-600 hover:text-[#c4a648]"><svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Kemitraan UMKM</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
