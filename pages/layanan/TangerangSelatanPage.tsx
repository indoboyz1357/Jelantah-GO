import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const TangerangSelatanPage: React.FC = () => {
    const pageData = {
        areaName: "Tangerang Selatan",
        imageUrl: "https://picsum.photos/seed/tangsel/600/500",
        coveredDistricts: [
            "Serpong",
            "Serpong Utara",
            "Pondok Aren",
            "Ciputat",
            "Ciputat Timur",
            "Pamulang",
            "Setu",
        ],
        introText: "Untuk warga dan pelaku bisnis di Tangerang Selatan yang dinamis, JelantahGO menawarkan solusi modern untuk menjual minyak jelantah. Dari BSD hingga Bintaro, layanan kami siap menjangkau Anda dengan cepat dan efisien."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default TangerangSelatanPage;
