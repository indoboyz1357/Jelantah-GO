import React from 'react';
import { Link } from 'react-router-dom';

interface LayananAreaTemplateProps {
  areaName: string;
  imageUrl: string;
  coveredDistricts: string[];
  introText: string;
}

const LayananAreaTemplate: React.FC<LayananAreaTemplateProps> = ({ areaName, imageUrl, coveredDistricts, introText }) => {
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Penjemputan Minyak Jelantah",
    "provider": {
      "@id": "https://jelantahgo.example.com/#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": areaName
    },
    "name": `Layanan Penjemputan Minyak Jelantah di ${areaName}`,
    "description": `JelantahGO menyediakan layanan penjemputan minyak jelantah gratis dan profesional untuk rumah tangga dan UMKM di seluruh area ${areaName}.`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Layanan",
      "item": "https://jelantahgo.example.com/#/layanan"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": areaName
    }]
  };
  
  return (
    <div className="bg-white">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif">
            Jual Minyak Jelantah di {areaName}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Layanan penjemputan gratis, cepat, dan terpercaya dari JelantahGO kini hadir di {areaName}.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Solusi Jelantah untuk Warga {areaName}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {introText}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Dengan sistem kami yang modern, Anda bisa dengan mudah mengubah limbah dapur menjadi penghasilan tambahan sambil menjaga kebersihan lingkungan di {areaName}.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img className="rounded-lg shadow-xl" src={imageUrl} alt={`Layanan JelantahGO di ${areaName}`} />
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 font-serif text-center">Area Jangkauan Kami di {areaName}</h3>
          <p className="text-center mt-2 text-gray-600">Kami menjangkau seluruh kecamatan dan kelurahan di {areaName}, termasuk:</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {coveredDistricts.map((district) => (
              <div key={district} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-700">{district}</p>
              </div>
            ))}
          </div>
           <p className="text-center mt-4 text-sm text-gray-500">*Dan area sekitarnya. Hubungi kami jika area Anda tidak tercantum.</p>
        </div>

      </div>

      <div className="bg-[#F9F6EE] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Siap Jual Jelantah di {areaName}?</h2>
            <p className="mt-4 text-lg text-gray-600">
                Prosesnya cepat dan mudah. Jadwalkan penjemputan pertama Anda hari ini!
            </p>
            <div className="mt-8">
                <Link
                    to="/kontak"
                    className="inline-block bg-[#c4a648] text-gray-900 px-8 py-3 rounded-md text-base font-semibold hover:bg-[#b5983f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Request Penjemputan di {areaName}
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LayananAreaTemplate;