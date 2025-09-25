import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const JakartaTimurPage: React.FC = () => {
    const pageData = {
        areaName: "Jakarta Timur",
        imageUrl: "https://picsum.photos/seed/jaktim/600/500",
        coveredDistricts: [
            "Matraman",
            "Pulo Gadung",
            "Jatinegara",
            "Duren Sawit",
            "Kramat Jati",
            "Makasar",
            "Pasar Rebo",
            "Ciracas",
            "Cipayung",
            "Cakung",
        ],
        introText: "JelantahGO berkomitmen untuk melayani wilayah Jakarta Timur yang luas dan padat. Kami menyediakan solusi pengelolaan jelantah yang mudah diakses bagi seluruh masyarakat dan pelaku usaha di Jakarta Timur, membantu menjaga kebersihan lingkungan lokal."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default JakartaTimurPage;
