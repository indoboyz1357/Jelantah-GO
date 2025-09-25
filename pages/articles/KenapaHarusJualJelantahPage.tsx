import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../components/ArticleLayout';

const KenapaHarusJualJelantahPage: React.FC = () => {
    return (
        <ArticleLayout
            category="Lingkungan"
            title="Kenapa Harus Jual Minyak Jelantah? Dampak Jika Dibuang ke Lingkungan"
            slug="kenapa-harus-jual-minyak-jelantah"
            datePublished="2024-05-11"
        >
            <p className="mt-8">
                Setiap hari, jutaan liter minyak jelantah dihasilkan dari dapur di seluruh Indonesia. Keputusan sederhana tentang apa yang harus dilakukan dengan limbah ini—dibuang atau dijual—memiliki konsekuensi yang sangat besar. Memahaminya adalah langkah pertama untuk menjadi konsumen yang lebih bertanggung jawab.
            </p>
            <figure className="my-8">
                <img className="w-full rounded-lg" src="https://picsum.photos/seed/jelantah11/800/500" alt="Ikan mati di perairan yang tercemar minyak" />
                <figcaption>Membuang jelantah sembarangan adalah bencana ekologis yang tak terlihat.</figcaption>
            </figure>

            <h2 className="font-serif font-bold text-gray-800">Saat Jelantah Dibuang: Rantai Bencana Dimulai</h2>
            <p>Membuang jelantah ke tanah, selokan, atau tempat sampah tampaknya sepele. Namun, inilah yang terjadi selanjutnya:</p>
            <ul>
                <li><strong>Mencemari Tanah:</strong> Jelantah yang meresap ke tanah akan menyumbat pori-pori, membunuh mikroorganisme penyubur, dan membuat tanah menjadi tidak produktif. Tanaman akan sulit tumbuh di area yang terkontaminasi.</li>
                <li><strong>Mencemari Air Permukaan:</strong> Saat hujan, jelantah dari tanah atau tempat sampah akan terbawa ke selokan, lalu berakhir di sungai dan danau. Lapisan minyak di permukaan air menghalangi oksigen, membunuh ikan dan merusak ekosistem.</li>
                <li><strong>Mencemari Air Tanah:</strong> Jelantah juga bisa meresap jauh ke dalam tanah dan mencemari akuifer, yaitu sumber air tanah yang sering digunakan untuk sumur dan pasokan air bersih masyarakat.</li>
            </ul>

            <h2 className="font-serif font-bold text-gray-800">Dampak Jangka Panjang yang Tak Terlihat</h2>
            <p>Selain kerusakan ekosistem yang langsung terlihat, ada dampak lain yang lebih luas. Simak juga artikel kami tentang <Link to="/blog/bahaya-membuang-jelantah-ke-saluran-air" className="text-[#c4a648] hover:underline">bahaya membuang jelantah ke saluran air</Link>.</p>
            <blockquote>
                <p>Limbah jelantah yang tidak terkelola adalah sumber emisi metana, gas rumah kaca yang puluhan kali lebih kuat dari karbon dioksida.</p>
            </blockquote>
            <ul>
                <li><strong>Memicu Perubahan Iklim:</strong> Jelantah yang membusuk di tempat pembuangan akhir (TPA) akan melepaskan gas metana, mempercepat pemanasan global.</li>
                <li><strong>Menimbulkan Bau dan Hama:</strong> Tumpukan jelantah di lingkungan akan menimbulkan bau busuk dan menjadi sarang bagi hama seperti tikus dan kecoa, yang membawa penyakit.</li>
                <li><strong>Beban Ekonomi:</strong> Pemerintah harus mengeluarkan biaya besar untuk membersihkan saluran air yang tersumbat, merehabilitasi tanah yang tercemar, dan mengelola TPA yang semakin penuh.</li>
            </ul>

            <div className="mt-12 p-6 rounded-lg bg-gray-50 border">
                <h3 className="font-serif font-bold text-gray-800">Dalam Topik Edukasi & Lingkungan</h3>
                <p className="mt-2">Artikel ini adalah panduan utama Anda. Untuk pemahaman yang lebih dalam, jelajahi artikel-artikel pendukung kami:</p>
                <ul className="mt-4 space-y-2 list-none">
                    <li><Link to="/blog/dampak-pembuangan-jelantah-ke-lingkungan-dan-cara-mencegahnya" className="text-[#c4a648] hover:underline font-semibold">&rarr; Dampak Pembuangan Minyak Jelantah ke Lingkungan & Cara Mencegahnya</Link></li>
                </ul>
            </div>
            
            <h2 className="font-serif font-bold text-gray-800 mt-8">Solusi Sederhana: Menjual adalah Menyelamatkan</h2>
            <p>Kabar baiknya, semua dampak buruk ini bisa kita cegah dengan satu tindakan sederhana: <strong>menjual minyak jelantah Anda</strong>. Mengapa ini adalah solusi terbaik?</p>
            <ol>
                <li><strong>Memutus Rantai Pencemaran:</strong> Dengan menjualnya ke pengepul resmi seperti <Link to="/" className="text-[#c4a648] hover:underline">JelantahGO</Link>, Anda memastikan 100% jelantah Anda keluar dari siklus limbah dan masuk ke siklus daur ulang.</li>
                <li><strong>Mengubah Masalah Jadi Solusi:</strong> Limbah yang tadinya merusak lingkungan diubah menjadi biodiesel, energi bersih yang justru membantu mengurangi emisi karbon.</li>
                <li><strong>Mendapatkan Insentif Ekonomi:</strong> Anda mendapatkan imbalan finansial karena telah bertindak benar. Ini adalah insentif yang mendorong lebih banyak orang untuk peduli. Pelajari semua <Link to="/blog/manfaat-menjual-minyak-jelantah" className="text-[#c4a648] hover:underline">manfaat menjual jelantah</Link> di sini.</li>
            </ol>
            <p>Keputusan ada di tangan Anda setiap kali wajan di dapur Anda mendingin. Apakah Anda akan menjadi bagian dari masalah, atau bagian dari solusi? Pilihan untuk menjual bukan hanya pilihan yang menguntungkan, tapi juga pilihan yang paling bertanggung jawab bagi masa depan planet kita.</p>
        </ArticleLayout>
    );
};

export default KenapaHarusJualJelantahPage;
