import React from 'react';
import { Link } from 'react-router-dom';

const AffiliatePage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
                        Program Afiliasi JelantahGO
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Jadi Pahlawan Lingkungan & Dapatkan Penghasilan Pasif Rp200 untuk Setiap Liter Jelantah yang Terkumpul.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 font-serif">Kenapa Harus Gabung?</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Program Afiliasi JelantahGO adalah kesempatan bagi Anda untuk mendapatkan keuntungan finansial sambil memberikan dampak positif yang nyata. Anda tidak perlu modal, tidak perlu stok barang. Cukup sebarkan berita baik dan ajak orang-orang di sekitar Anda untuk mengelola jelantah dengan cara yang benar.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
                                    <span className="text-gray-700 font-medium">Penghasilan Pasif:</span><p className="ml-2 text-gray-600">Dapatkan Rp200/liter tanpa batas maksimal.</p>
                                </li>
                                <li className="flex items-start">
                                     <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                     <span className="text-gray-700 font-medium">Dampak Nyata:</span><p className="ml-2 text-gray-600">Setiap referral Anda membantu mengurangi pencemaran lingkungan.</p>
                                </li>
                                 <li className="flex items-start">
                                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="text-gray-700 font-medium">Mudah & Fleksibel:</span><p className="ml-2 text-gray-600">Kerja dari mana saja, kapan saja. Cukup bagikan kode unik Anda.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img className="rounded-lg shadow-xl" src="https://picsum.photos/seed/afiliasi/600/500" alt="Program Afiliasi" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F6EE] py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 font-serif text-center">Cara Kerja Program Afiliasi</h2>
                    <div className="mt-12 space-y-10">
                        <div className="flex items-start"><div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[#c4a648] text-white font-bold text-xl">1</div><div className="ml-4"><h3 className="text-lg font-medium text-gray-900">Daftar & Dapatkan Kode</h3><p className="mt-1 text-gray-600">Isi formulir di bawah ini untuk bergabung. Setelah disetujui, Anda akan menerima kode referral unik.</p></div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[#c4a648] text-white font-bold text-xl">2</div><div className="ml-4"><h3 className="text-lg font-medium text-gray-900">Bagikan Kode Anda</h3><p className="mt-1 text-gray-600">Ajak teman, keluarga, tetangga, atau pemilik UMKM untuk menggunakan JelantahGO dengan kode Anda.</p></div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[#c4a648] text-white font-bold text-xl">3</div><div className="ml-4"><h3 className="text-lg font-medium text-gray-900">Lacak Kinerja & Komisi</h3><p className="mt-1 text-gray-600">Pantau semua aktivitas referral dan total komisi yang Anda hasilkan melalui dashboard transparan kami.</p></div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[#c4a648] text-white font-bold text-xl">4</div><div className="ml-4"><h3 className="text-lg font-medium text-gray-900">Dapatkan Pembayaran</h3><p className="mt-1 text-gray-600">Komisi akan dibayarkan secara berkala langsung ke rekening bank yang Anda daftarkan.</p></div></div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold text-gray-800 font-serif text-center">Formulir Pendaftaran Afiliasi</h2>
                 <form action="#" method="POST" className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div className="sm:col-span-2">
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <div className="mt-1"><input type="text" name="full-name" id="full-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border-gray-300 rounded-md" /></div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                        <div className="mt-1"><input id="email" name="email" type="email" required autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border-gray-300 rounded-md" /></div>
                    </div>
                     <div>
                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Nomor WhatsApp</label>
                        <div className="mt-1"><input type="text" name="phone-number" id="phone-number" required autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-[#c4a648] focus:border-[#c4a648] border-gray-300 rounded-md" /></div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex items-start">
                            <div className="flex-shrink-0"><input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-[#c4a648] focus:ring-[#b5983f] border-gray-300 rounded"/></div>
                            <div className="ml-3"><label htmlFor="terms" className="text-sm text-gray-600">Saya telah membaca dan menyetujui <Link to="/syarat-ketentuan" className="font-medium text-[#c4a648] hover:underline">Syarat & Ketentuan</Link> program afiliasi.</label></div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-[#c4a648] hover:bg-[#b5983f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c4a648]">
                            Daftar Sekarang
                        </button>
                    </div>
                 </form>
            </div>
        </div>
    );
};

export default AffiliatePage;
