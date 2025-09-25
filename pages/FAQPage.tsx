import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

const FAQPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqData: FaqCategory[] = [
    {
      category: "Layanan Penjemputan",
      questions: [
        {
          q: "Berapa minimal minyak jelantah yang bisa dijemput?",
          a: "Kami melayani penjemputan dengan minimal 5 liter. Kami menyarankan untuk mengumpulkan jelantah dalam jerigen atau wadah tertutup hingga mencapai jumlah minimal untuk efisiensi proses penjemputan."
        },
        {
          q: "Apakah layanan penjemputan benar-benar gratis?",
          a: "Betul. Layanan penjemputan kami sepenuhnya gratis tanpa biaya tersembunyi untuk seluruh area yang terjangkau oleh layanan JelantahGO. Anda hanya perlu menyiapkan jelantahnya."
        },
        {
          q: "Area mana saja yang dijangkau oleh layanan JelantahGO?",
          a: "Saat ini, kami fokus melayani area Jabodetabek, Bandung, dan Surabaya. Kami terus berupaya memperluas jangkauan layanan kami ke kota-kota lain di Indonesia. Pantau terus website kami untuk informasi terbaru."
        },
        {
          q: "Bagaimana cara mempersiapkan jelantah sebelum dijemput?",
          a: "Sangat mudah. Pastikan jelantah sudah dalam suhu ruang (tidak panas), lalu saring kotoran sisa makanan agar lebih bersih. Simpan dalam wadah yang kuat dan tertutup rapat seperti jerigen, botol plastik, atau drigen."
        }
      ]
    },
    {
      category: "Pembayaran & Harga",
      questions: [
        {
          q: "Bagaimana cara saya mendapatkan pembayaran?",
          a: "Pembayaran akan dilakukan secara digital. Setelah kurir kami menimbang dan memverifikasi jumlah jelantah Anda, pembayaran akan segera ditransfer ke rekening bank yang Anda daftarkan atau masuk sebagai saldo di akun JelantahGO Anda."
        },
        {
          q: "Berapa harga beli minyak jelantah saat ini?",
          a: "Harga minyak jelantah bersifat fluktuatif mengikuti harga pasar biodiesel. Anda dapat melihat estimasi harga terbaru di halaman 'Harga' kami. Harga final akan dikonfirmasi saat proses verifikasi penjemputan."
        },
        {
          q: "Apakah ada potongan biaya admin?",
          a: "Tidak ada. Jumlah yang Anda lihat saat verifikasi adalah jumlah yang akan Anda terima. Kami berkomitmen pada transparansi penuh tanpa biaya tersembunyi."
        }
      ]
    },
    {
      category: "Program Afiliasi",
      questions: [
        {
          q: "Bagaimana cara bergabung dengan program afiliasi?",
          a: "Anda bisa mendaftar program afiliasi melalui halaman 'Daftar Afiliasi' di website kami. Setelah terdaftar, Anda akan mendapatkan kode referral unik yang bisa Anda bagikan."
        },
        {
          q: "Bagaimana cara kerja komisi Rp200/liter?",
          a: "Setiap liter jelantah yang berhasil kami jemput dari pengguna baru yang mendaftar menggunakan kode referral Anda akan tercatat. Komisi sebesar Rp200 per liter akan diakumulasikan di akun afiliasi Anda dan dapat dicairkan secara berkala."
        },
        {
          q: "Di mana saya bisa melihat performa afiliasi saya?",
          a: "Anda akan memiliki akses ke dashboard afiliasi khusus di mana Anda bisa melacak jumlah referral, total liter terkumpul, dan total komisi yang Anda dapatkan secara real-time."
        }
      ]
    }
  ];

  const toggleFaq = (question: string) => {
    if (openFaq === question) {
      setOpenFaq(null);
    } else {
      setOpenFaq(question);
    }
  };

  const allFaqs = faqData.flatMap(category => category.questions);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Temukan jawaban cepat untuk pertanyaan paling umum tentang layanan, pembayaran, dan program kami.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          {faqData.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 font-serif mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.q)}
                      className="w-full flex justify-between items-center text-left p-5 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                    >
                      <span className="text-lg font-medium text-gray-800">{faq.q}</span>
                      <span className="transform transition-transform duration-300">
                        {openFaq === faq.q ?
                          <svg className="w-6 h-6 text-[#c4a648]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path></svg>
                          :
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        }
                      </span>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === faq.q ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="p-5 border-t border-gray-200">
                        <p className="text-base text-gray-600">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

         <div className="mt-16 text-center border-t border-gray-200 pt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 font-serif">Masih Punya Pertanyaan?</h3>
            <p className="mt-2 text-lg text-gray-600">Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami.</p>
            <div className="mt-6">
                <Link
                    to="/kontak"
                    className="inline-block bg-[#c4a648] text-gray-900 px-6 py-3 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 shadow"
                >
                    Hubungi Kami
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;