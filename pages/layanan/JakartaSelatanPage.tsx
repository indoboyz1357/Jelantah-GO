import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const JakartaSelatanPage: React.FC = () => {
    const pageData = {
        areaName: "Jakarta Selatan",
        imageUrl: "https://picsum.photos/seed/jaksel/600/500",
        coveredDistricts: [
            "Kebayoran Baru",
            "Kebayoran Lama",
            "Pesanggrahan",
            "Cilandak",
            "Pasar Minggu",
            "Jagakarsa",
            "Mampang Prapatan",
            "Pancoran",
            "Tebet",
            "Setiabudi",
        ],
        introText: "Sebagai salah satu area paling dinamis di Jakarta, Jakarta Selatan menghasilkan volume jelantah yang signifikan. JelantahGO menawarkan layanan penjemputan yang andal bagi kafe, restoran, dan perumahan di seluruh wilayah Jakarta Selatan."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default JakartaSelatanPage;
