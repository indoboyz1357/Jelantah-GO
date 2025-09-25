import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Harga Jual Minyak Jelantah Terbaru
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Kami menawarkan harga yang kompetitif dan transparan, memastikan Anda mendapatkan nilai terbaik untuk setiap liter jelantah yang Anda jual.
          </p>
        </div>
      </div>

      <div className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 font-serif text-center">Harga Penjemputan Skala UMKM & Restoran</h2>
            <p className="text-center mt-2 text-gray-600">Harga didasarkan pada jumlah total penjemputan dalam satu kali transaksi.</p>
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
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Di atas 20 jerigen</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-semibold">Hubungi Kami</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">⚡ Minimal kuantiti: 40 liter / 2 jerigen full (18 Liter). Harga dapat berubah mengikuti kondisi pasar biodiesel. Hubungi kami untuk konfirmasi harga terbaru.</p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
             <h2 className="text-2xl font-bold text-gray-800 font-serif text-center">Faktor yang Mempengaruhi Harga</h2>
             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Volume</h3>
                    <p className="mt-1 text-gray-600">Semakin besar volume penjualan dalam satu kali transaksi, semakin baik harga yang bisa kami tawarkan karena efisiensi biaya logistik.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Kualitas</h3>
                    <p className="mt-1 text-gray-600">Jelantah yang bersih dari kotoran sisa makanan dan air memiliki nilai lebih tinggi karena lebih mudah diolah menjadi biodiesel.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Lokasi</h3>
                    <p className="mt-1 text-gray-600">Jarak lokasi penjemputan dari pusat pengolahan kami dapat sedikit mempengaruhi struktur harga karena biaya transportasi.</p>
                </div>
             </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 bg-[#F9F6EE] p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 font-serif">Kemitraan Skala Industri?</h2>
            <p className="mt-2 text-lg text-gray-600">
                Untuk kebutuhan penjemputan rutin di atas 500 liter/bulan, kami menyediakan penawaran harga khusus untuk kemitraan bisnis.
            </p>
             <div className="mt-6">
                <Link
                    to="/kontak"
                    className="inline-block bg-[#c4a648] text-gray-900 px-6 py-2.5 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 shadow"
                >
                    Hubungi Tim Bisnis Kami
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
