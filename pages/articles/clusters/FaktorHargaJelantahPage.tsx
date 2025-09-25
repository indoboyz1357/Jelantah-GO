import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../components/ArticleLayout';

const FaktorHargaJelantahPage: React.FC = () => {
    return (
        <ArticleLayout
            category="Analisis Pasar"
            title="Faktor yang Mempengaruhi Harga Minyak Jelantah per Liter"
            slug="faktor-yang-mempengaruhi-harga-jelantah"
            datePublished="2024-05-17"
        >
            <p>
                Harga minyak jelantah yang Anda terima bukanlah angka acak. Ia merupakan hasil dari interaksi kompleks antara berbagai faktor di pasar komoditas global dan kondisi lokal. Memahami faktor-faktor ini akan memberi Anda gambaran yang lebih jelas tentang nilai limbah dapur Anda.
            </p>
            <figure className="my-8">
                <img className="w-full rounded-lg" src="https://picsum.photos/seed/cluster6/800/500" alt="Infografik faktor-faktor yang mempengaruhi harga" />
                <figcaption>Dari pasar CPO hingga kebijakan pemerintah, banyak variabel yang berperan.</figcaption>
            </figure>

            <h2 className="font-serif font-bold text-gray-800">Faktor Eksternal (Makro)</h2>
            <p>Faktor-faktor ini berada di luar kendali Anda atau pengepul, tetapi memiliki dampak terbesar pada harga dasar.</p>
            <ul>
                <li><strong>Harga Minyak Mentah Dunia:</strong> Ketika harga minyak mentah (dan turunannya, solar) tinggi, biodiesel menjadi alternatif yang lebih menarik secara ekonomi. Hal ini meningkatkan permintaan bahan baku, termasuk jelantah, dan mendorong harganya naik.</li>
                <li><strong>Harga Minyak Sawit (CPO):</strong> CPO adalah bahan baku utama biodiesel di Indonesia. Harga jelantah seringkali bergerak sejalan dengan harga CPO. Jika CPO mahal, produsen biodiesel akan mencari alternatif yang lebih murah seperti jelantah.</li>
                <li><strong>Kebijakan Pemerintah (Mandatori Biodiesel):</strong> Program seperti B35 di Indonesia (campuran 35% biodiesel) menciptakan permintaan domestik yang sangat besar dan stabil untuk jelantah. Kenaikan persentase mandatori akan menaikkan permintaan dan harga.</li>
                 <li><strong>Kurs Dolar AS:</strong> Karena jelantah adalah komoditas ekspor, harganya di pasar internasional seringkali dalam USD. Pelemahan Rupiah terhadap Dolar dapat membuat harga ekspor menjadi lebih menarik dan berpotensi menaikkan harga di tingkat lokal.</li>
            </ul>

            <h2 className="font-serif font-bold text-gray-800">Faktor Internal (Mikro)</h2>
            <p>Faktor-faktor ini berkaitan langsung dengan kondisi jelantah Anda dan efisiensi rantai pasok.</p>
            <ol>
                <li><strong>Kualitas:</strong> Ini faktor terpenting di tingkat penjual. Jelantah dengan kadar air dan kotoran (M.I.U) serta tingkat asam lemak bebas (FFA) yang rendah akan dihargai paling tinggi.</li>
                <li><strong>Volume Penjualan:</strong> Prinsip skala ekonomi berlaku di sini. Menjual dalam volume besar mengurangi biaya logistik per liter bagi pengepul, sehingga mereka bisa menawarkan harga yang lebih baik.</li>
                <li><strong>Lokasi Geografis:</strong> Jarak dari lokasi Anda ke gudang agregasi atau pabrik pengolahan mempengaruhi biaya transportasi, yang dapat sedikit memengaruhi harga final.</li>
            </ol>
            
            <blockquote>
                <p>Meskipun Anda tidak bisa mengontrol harga CPO, Anda bisa mengontrol kualitas dan volume jelantah Anda. Fokus pada apa yang bisa Anda kendalikan. Lihat <Link to="/blog/harga-minyak-jelantah-2025" className="text-[#c4a648] hover:underline">artikel pilar kami tentang harga jelantah</Link> untuk informasi lebih lanjut.</p>
            </blockquote>
            <p>
                Dengan memahami dinamika ini, Anda dapat membuat keputusan yang lebih strategis tentang kapan dan bagaimana cara menjual jelantah untuk mendapatkan keuntungan maksimal.
            </p>
        </ArticleLayout>
    );
};

export default FaktorHargaJelantahPage;
