import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
    const steps = [
        {
            name: "Langkah 1: Daftar & Request Penjemputan",
            description: "Proses dimulai dengan beberapa klik mudah. Unduh aplikasi kami atau daftar langsung di website. Cukup masukkan detail alamat Anda, perkirakan jumlah jelantah yang akan dijual, dan pilih jadwal penjemputan yang paling sesuai dengan kesibukan Anda. Sistem kami akan secara otomatis mencarikan kurir terdekat.",
            image: "https://picsum.photos/seed/how1/600/400"
        },
        {
            name: "Langkah 2: Lacak Kurir & Komunikasi Real-Time",
            description: "Tinggalkan ketidakpastian. Setelah permintaan Anda dikonfirmasi, Anda bisa melacak posisi kurir secara langsung di peta, sama seperti layanan ojek online. Fitur ini memberikan Anda estimasi waktu kedatangan yang akurat. Jika ada perubahan, Anda bisa berkomunikasi langsung dengan kurir melalui fitur private chat di dalam aplikasi.",
            image: "https://picsum.photos/seed/how2/600/400"
        },
        {
            name: "Langkah 3: Proses Timbang & Verifikasi di Lokasi",
            description: "Transparansi adalah kunci kepercayaan. Saat kurir kami tiba, mereka akan menimbang minyak jelantah Anda menggunakan timbangan digital yang akurat, tepat di depan Anda. Anda dapat melihat dan mengonfirmasi beratnya secara langsung. Proses ini memastikan tidak ada keraguan dan kedua belah pihak merasa adil.",
            image: "https://picsum.photos/seed/how3/600/400"
        },
        {
            name: "Langkah 4: Pembayaran Digital Cepat & Aman",
            description: "Lupakan pembayaran tunai yang merepotkan. Begitu jumlah jelantah terverifikasi, pembayaran akan diproses secara digital dalam hitungan menit. Dana akan langsung masuk ke saldo akun JelantahGO Anda, yang bisa dicairkan ke rekening bank kapan saja. Setiap transaksi tercatat rapi dan dapat diakses di riwayat akun Anda.",
            image: "https://picsum.photos/seed/how4/600/400"
        }
    ];

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
                        Proses Jual Jelantah dalam 4 Langkah Mudah
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Kami merancang alur kerja yang intuitif, transparan, dan didukung teknologi untuk memberikan Anda pengalaman terbaik.
                    </p>
                </div>

                <div className="mt-20 space-y-20">
                    {steps.map((step, index) => (
                        <div key={step.name} className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                            <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                                <h2 className="text-3xl font-bold text-gray-800 font-serif">{step.name}</h2>
                                <p className="mt-4 text-lg text-gray-600">{step.description}</p>
                            </div>
                            <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                                <img className="rounded-lg shadow-xl" src={step.image} alt={step.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#F9F6EE] py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 font-serif">Mudah, Bukan?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Sekarang giliran Anda untuk mencoba kemudahan menjual minyak jelantah bersama JelantahGO.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/daftar-afiliasi"
                            className="inline-block bg-[#c4a648] text-gray-900 px-8 py-3 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Daftar & Request Penjemputan Pertama Anda
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksPage;
