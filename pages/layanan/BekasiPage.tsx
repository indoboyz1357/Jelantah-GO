import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const BekasiPage: React.FC = () => {
    const pageData = {
        areaName: "Bekasi",
        imageUrl: "https://picsum.photos/seed/bekasi/600/500",
        coveredDistricts: [
            "Bekasi Timur",
            "Bekasi Barat",
            "Bekasi Utara",
            "Bekasi Selatan",
            "Rawalumbu",
            "Medan Satria",
            "Bantar Gebang",
            "Jatiasih",
            "Jatisampurna",
            "Pondok Gede",
        ],
        introText: "JelantahGO memperluas jangkauan layanan hingga ke seluruh area Bekasi. Bagi Anda yang berada di kawasan industri, pusat perbelanjaan, maupun perumahan, kami siap membantu Anda mengelola jelantah secara profesional."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default BekasiPage;
