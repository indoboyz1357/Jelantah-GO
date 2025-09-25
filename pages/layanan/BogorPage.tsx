import React from 'react';
import LayananAreaTemplate from '../../components/LayananAreaTemplate';

const BogorPage: React.FC = () => {
    const pageData = {
        areaName: "Bogor",
        imageUrl: "https://picsum.photos/seed/bogor/600/500",
        coveredDistricts: [
            "Bogor Tengah",
            "Bogor Timur",
            "Bogor Barat",
            "Bogor Utara",
            "Bogor Selatan",
            "Tanah Sareal",
            "Cibinong",
            "Gunung Putri",
        ],
        introText: "Warga Bogor dan sekitarnya kini dapat dengan mudah menjual minyak jelantah. JelantahGO hadir di Kota dan Kabupaten Bogor, menawarkan layanan penjemputan profesional untuk mendukung lingkungan asri Bogor tetap terjaga."
    };

    return <LayananAreaTemplate {...pageData} />;
};

export default BogorPage;
