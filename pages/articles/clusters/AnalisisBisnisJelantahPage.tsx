import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../components/ArticleLayout';

const AnalisisBisnisJelantahPage: React.FC = () => {
    return (
        <ArticleLayout
            category="Studi Kelayakan"
            title="Analisis Bisnis Minyak Jelantah: Modal, Omzet, dan ROI"
            slug="analisis-bisnis-jelantah-modal-omzet-roi"
            datePublished="2024-05-19"
        >
            <p>
                Tertarik untuk terjun ke bisnis pengumpulan minyak jelantah? Memahami angka-angka di baliknya adalah langkah pertama yang penting. Berikut adalah analisis sederhana mengenai modal, potensi omzet, dan Return on Investment (ROI) untuk bisnis skala kecil hingga menengah.
            </p>
            <figure className="my-8">
                <img className="w-full rounded-lg" src="https://picsum.photos/seed/cluster8/800/500" alt="Kalkulator di atas laporan bisnis" />
                <figcaption>Menghitung potensi keuntungan adalah kunci dalam merencanakan bisnis.</figcaption>
            </figure>

            <h2 className="font-serif font-bold text-gray-800">Estimasi Modal Awal (Skala Agen Lokal)</h2>
            <p>Modal utama dalam bisnis ini adalah untuk peralatan dan operasional awal.</p>
            <ul>
                <li><strong>Peralatan:</strong>
                    <ul>
                        <li>Timbangan Digital (kapasitas 50-100 kg): Rp 500.000 - Rp 1.500.000</li>
                        <li>Jerigen/Drum (20-30 buah @Rp 25.000): Rp 500.000 - Rp 750.000</li>
                        <li>Corong, saringan, alat kebersihan: Rp 200.000</li>
                    </ul>
                </li>
                 <li><strong>Transportasi:</strong>
                    <ul>
                        <li>Motor dengan keranjang/gerobak (jika belum ada): Modal bervariasi.</li>
                         <li>Biaya bensin awal: Rp 100.000 - Rp 200.000</li>
                    </ul>
                </li>
                <li><strong>Total Estimasi Modal Awal (di luar kendaraan):</strong> Sekitar <strong>Rp 1.300.000 - Rp 2.650.000</strong></li>
            </ul>

            <h2 className="font-serif font-bold text-gray-800">Potensi Omzet dan Keuntungan</h2>
            <p>Keuntungan Anda adalah selisih (margin) antara harga beli dari sumber dan harga jual ke agregator/pabrik.</p>
            <p><strong>Contoh Skenario:</strong></p>
            <ul>
                <li>Target pengumpulan per bulan: <strong>1.000 Liter</strong> (sekitar 55 jerigen)</li>
                <li>Harga beli rata-rata dari rumah tangga/UMKM: <strong>Rp 6.000/liter</strong></li>
                <li>Harga jual ke agregator besar: <strong>Rp 8.000/liter</strong></li>
                <li>Margin keuntungan per liter: <strong>Rp 2.000</strong></li>
            </ul>
            <p>
                <strong>Potensi Keuntungan Kotor:</strong> 1.000 Liter x Rp 2.000 = <strong>Rp 2.000.000 per bulan</strong>.
            </p>
            <p>Dari keuntungan kotor ini, Anda perlu mengurangi biaya operasional seperti bensin, pulsa, dan penyusutan alat. Keuntungan bersih bisa berada di kisaran Rp 1.500.000 - Rp 1.800.000 per bulan untuk target 1.000 liter.</p>

            <h2 className="font-serif font-bold text-gray-800">Return on Investment (ROI)</h2>
            <p>ROI mengukur seberapa cepat modal Anda kembali.</p>
            <p><strong>ROI = (Keuntungan Bersih Bulanan / Modal Awal) x 100%</strong></p>
            <p>Dengan asumsi keuntungan bersih Rp 1.500.000 dan modal awal Rp 2.000.000, maka:</p>
            <p>ROI = (1.500.000 / 2.000.000) x 100% = 75% per bulan.</p>
            <p>Ini berarti, secara teori, modal Anda bisa kembali dalam waktu kurang dari 2 bulan. Ini menunjukkan bahwa bisnis ini memiliki potensi perputaran modal yang sangat cepat.</p>
            
            <blockquote>
                <p>Angka-angka ini adalah estimasi. Riset harga beli dan jual di area Anda sangat penting. Untuk panduan memulai yang lebih lengkap, baca <Link to="/blog/bisnis-minyak-jelantah-cara-memulai" className="text-[#c4a648] hover:underline">artikel pilar kami tentang bisnis jelantah</Link>.</p>
            </blockquote>
            <p>
               Meskipun terlihat menjanjikan, kesuksesan dalam bisnis ini sangat bergantung pada kemampuan Anda membangun jaringan, menjaga kepercayaan pemasok, dan efisiensi operasional.
            </p>
        </ArticleLayout>
    );
};

export default AnalisisBisnisJelantahPage;
