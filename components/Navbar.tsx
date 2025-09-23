import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrandIcon } from './icons/LeafIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/tentang-kami", text: "Tentang Kami" },
    { to: "/layanan", text: "Layanan" },
    { to: "/cara-kerja", text: "Cara Kerja" },
    { to: "/harga", text: "Harga" },
    { to: "/blog", text: "Blog" },
    { to: "/faq", text: "FAQ" },
    { to: "/kontak", text: "Kontak" },
  ];

  const activeLinkStyle = {
    color: '#c4a648',
    fontWeight: '600',
  };

  return (
    <nav className="bg-[#F9F6EE]/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <BrandIcon className="h-8 w-8 text-[#c4a648]" />
                <span className="text-2xl font-bold text-gray-800 font-serif">Jelantah<span className="text-[#c4a648]">GO</span></span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-gray-600 hover:text-[#c4a648] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <a href="#request-pickup" className="bg-[#c4a648] text-gray-900 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow">
                Request Penjemputan
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#c4a648] inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#b5983f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-gray-600 hover:bg-[#c4a648] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.text}
              </NavLink>
            ))}
             <a href="#request-pickup" onClick={() => setIsOpen(false)} className="bg-[#c4a648] text-white block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium hover:bg-[#b5983f] transition-all duration-300">
                Request Penjemputan
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;