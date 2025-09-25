import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const JakartaPusatPage: React.FC = () => {
    const pageData = {
        areaName: "Jakarta Pusat",
        imageUrl: "https://picsum.photos/seed/jakpus/600/500",
        coveredDistricts: [
            "Gambir",
            "Sawah Besar",
            "Kemayoran",
            "Senen",
            "Cempaka Putih",
            "Menteng",
            "Tanah Abang",
            "Johar Baru",
        ],
        introText: "Bagi Anda yang tinggal atau memiliki usaha di pusat ibu kota, JelantahGO menyediakan solusi efisien untuk mengelola limbah minyak jelantah Anda. Kami memahami dinamika Jakarta Pusat yang sibuk dan menawarkan layanan penjemputan yang fleksibel dan tepat waktu."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default JakartaPusatPage;
