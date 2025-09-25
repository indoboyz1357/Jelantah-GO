import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Hubungi Kami
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Punya pertanyaan, saran, atau penawaran kerjasama? Tim JelantahGO siap membantu Anda.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Informasi Kontak</h2>
                <p className="mt-1 text-gray-600">Hubungi kami melalui kanal di bawah ini selama jam kerja (Senin - Jumat, 09:00 - 17:00 WIB).</p>
              </div>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-[#c4a648]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:info.jelantahgo@gmail.com" className="text-base text-gray-600 hover:text-gray-900">info.jelantahgo@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-[#c4a648]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                  <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-gray-900">0851-8303-3995</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-[#c4a648]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Alamat Kantor</h3>
                  <p className="text-base text-gray-600">Jl. Inovasi Digital No. 1, Jakarta, Indonesia (Placeholder)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 font-serif">Kirim Pesan</h2>
              <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nama Depan</label>
                  <div className="mt-1">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Nama Belakang</label>
                  <div className="mt-1">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border border-gray-300 rounded-md"></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-[#c4a648] hover:bg-[#b5983f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c4a648]">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
