import React from 'react';
import { Link } from 'react-router-dom';
import { BrandIcon } from './icons/LeafIcon';

const Footer: React.FC = () => {
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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="col-span-2">
                <div className="flex items-center gap-2">
                    <BrandIcon className="h-8 w-8 text-[#c4a648]" />
                    <span className="text-2xl font-bold text-gray-800 font-serif">Jelantah<span className="text-[#c4a648]">GO</span></span>
                </div>
                <p className="mt-4 text-gray-500 text-sm">
                    Solusi jual beli & penjemputan minyak jelantah terpercaya untuk lingkungan yang lebih bersih dan ekonomi yang lebih baik.
                </p>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigasi</h3>
                <ul className="mt-4 space-y-4">
                    <li><Link to="/tentang-kami" className="text-base text-gray-500 hover:text-gray-900">Tentang Kami</Link></li>
                    <li><Link to="/layanan" className="text-base text-gray-500 hover:text-gray-900">Layanan</Link></li>
                    <li><Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
                    <li><Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">FAQ</Link></li>
                </ul>
            </div>
             <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Area Layanan</h3>
                <ul className="mt-4 space-y-4">
                    {serviceAreas.slice(0, 4).map(area => (
                         <li key={area.name}><Link to={area.link} className="text-base text-gray-500 hover:text-gray-900">{area.name}</Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                    <li><Link to="/kebijakan-privasi" className="text-base text-gray-500 hover:text-gray-900">Kebijakan Privasi</Link></li>
                    <li><Link to="/syarat-ketentuan" className="text-base text-gray-500 hover:text-gray-900">Syarat & Ketentuan</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kontak</h3>
                <ul className="mt-4 space-y-4">
                    <li><a href="mailto:info.jelantahgo@gmail.com" className="text-base text-gray-500 hover:text-gray-900">info.jelantahgo@gmail.com</a></li>
                    <li><a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">0851-8303-3995</a></li>
                </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} JelantahGO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;