import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const DepokPage: React.FC = () => {
    const pageData = {
        areaName: "Depok",
        imageUrl: "https://picsum.photos/seed/depok/600/500",
        coveredDistricts: [
            "Pancoran Mas",
            "Beji",
            "Cimanggis",
            "Sukmajaya",
            "Cilodong",
            "Limo",
            "Cinere",
            "Tapos",
            "Sawangan",
            "Bojongsari",
        ],
        introText: "JelantahGO kini melayani seluruh wilayah Depok. Bagi Anda pelaku UMKM kuliner di sepanjang Margonda atau warga di kawasan perumahan, kami siap menjemput jelantah Anda dan mengubahnya menjadi nilai ekonomi."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default DepokPage;
