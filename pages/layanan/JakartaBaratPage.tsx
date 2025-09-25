import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const JakartaBaratPage: React.FC = () => {
    const pageData = {
        areaName: "Jakarta Barat",
        imageUrl: "https://picsum.photos/seed/jakbar/600/500",
        coveredDistricts: [
            "Cengkareng",
            "Grogol Petamburan",
            "Kalideres",
            "Kebon Jeruk",
            "Kembangan",
            "Palmerah",
            "Taman Sari",
            "Tambora",
        ],
        introText: "Dari pusat bisnis hingga kawasan perumahan, JelantahGO melayani seluruh area Jakarta Barat. Kami hadir untuk memudahkan UMKM kuliner dan rumah tangga dalam mengelola minyak jelantah secara bertanggung jawab dan menguntungkan."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default JakartaBaratPage;
