import React from 'react';
import { Link } from 'react-router-dom';
import { BrandIcon } from './icons/LeafIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
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
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kontak</h3>
                <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">support@jelantahgo.com</a></li>
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">+62 123 4567 890</a></li>
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