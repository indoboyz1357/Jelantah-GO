import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const TangerangPage: React.FC = () => {
    const pageData = {
        areaName: "Tangerang",
        imageUrl: "https://picsum.photos/seed/tangerang/600/500",
        coveredDistricts: [
            "Tangerang",
            "Karawaci",
            "Cibodas",
            "Jatiuwung",
            "Batuceper",
            "Benda",
            "Cipondoh",
            "Pinang",
            "Ciledug",
            "Larangan",
        ],
        introText: "Layanan penjemputan jelantah profesional dari JelantahGO kini hadir di Kota Tangerang. Kami siap menjadi mitra bagi pusat-pusat kuliner, industri, dan perumahan untuk pengelolaan limbah yang lebih baik dan menguntungkan."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default TangerangPage;
