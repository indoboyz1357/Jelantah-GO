import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const JakartaUtaraPage: React.FC = () => {
    const pageData = {
        areaName: "Jakarta Utara",
        imageUrl: "https://picsum.photos/seed/jakut/600/500",
        coveredDistricts: [
            "Cilincing",
            "Koja",
            "Kelapa Gading",
            "Tanjung Priok",
            "Pademangan",
            "Penjaringan",
        ],
        introText: "Kawasan pesisir dan industri Jakarta Utara kini terlayani oleh JelantahGO. Kami siap menjadi mitra terpercaya bagi industri kuliner, perumahan, dan apartemen di Jakarta Utara untuk mengubah limbah jelantah menjadi berkah."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default JakartaUtaraPage;
