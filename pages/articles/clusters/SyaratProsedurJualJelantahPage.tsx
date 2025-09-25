import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../../components/ArticleLayout';

const SyaratProsedurJualJelantahPage: React.FC = () => {
    return (
        <ArticleLayout
            category="Panduan Praktis"
            title="Syarat dan Prosedur Jual Minyak Jelantah ke Pengepul Resmi"
            slug="syarat-prosedur-jual-jelantah-resmi"
            datePublished="2024-05-13"
        >
            <p>
                Menjual minyak jelantah ke pengepul resmi seperti <Link to="/" className="text-[#c4a648] hover:underline">JelantahGO</Link> adalah proses yang mudah dan terstruktur. Memahami syarat dan prosedurnya akan membuat transaksi Anda berjalan lebih lancar dan efisien.
            </p>
            <figure className="my-8">
                <img className="w-full rounded-lg" src="https://picsum.photos/seed/cluster2/800/500" alt="Checklist syarat dan prosedur" />
                <figcaption>Mempersiapkan jelantah sesuai syarat akan mempercepat proses verifikasi.</figcaption>
            </figure>

            <h2 className="font-serif font-bold text-gray-800">Syarat Kualitas Minyak Jelantah</h2>
            <p>Untuk memastikan jelantah Anda diterima dan dihargai dengan baik, pastikan memenuhi syarat kualitas berikut:</p>
            <ul>
                <li><strong>Bebas Kontaminasi Air:</strong> Jangan mencampurkan air ke dalam jelantah. Air dapat memicu pertumbuhan bakteri dan merusak kualitas minyak. Pastikan wadah penyimpanan kering.</li>
                <li><strong>Minim Sisa Makanan:</strong> Saring jelantah Anda untuk menghilangkan sisa-sisa makanan. Semakin bersih jelantah Anda, semakin baik.</li>
                <li><strong>Tidak Tercampur Bahan Lain:</strong> Pastikan jelantah tidak terkontaminasi oleh minyak rem, oli mesin, atau bahan kimia rumah tangga lainnya.</li>
            </ul>

            <h2 className="font-serif font-bold text-gray-800">Syarat Administrasi dan Logistik</h2>
            <p>Syarat ini berkaitan dengan kelancaran proses penjemputan dan pembayaran.</p>
            <ol>
                <li><strong>Volume Minimal:</strong> Sebagian besar pengepul menerapkan volume minimal penjemputan (misalnya 5 atau 10 liter) untuk efisiensi. Pastikan Anda sudah mencapai batas ini sebelum request.</li>
                <li><strong>Informasi yang Jelas:</strong> Saat mendaftar atau request, berikan informasi alamat yang lengkap dan nomor telepon yang aktif untuk memudahkan kurir.</li>
                <li><strong>Akses Lokasi:</strong> Pastikan lokasi penjemputan dapat diakses oleh kendaraan kurir (motor atau mobil).</li>
                <li><strong>Wadah yang Sesuai:</strong> Simpan jelantah dalam wadah yang tidak bocor dan tertutup rapat, seperti jerigen.</li>
            </ol>
            
            <h2 className="font-serif font-bold text-gray-800">Prosedur Penjualan Standar</h2>
            <blockquote>
                <p>Proses digital memastikan setiap langkah tercatat dan transparan. Pelajari lebih lanjut di <Link to="/blog/jual-minyak-jelantah-tips-untung" className="text-[#c4a648] hover:underline">artikel utama kami tentang cara menjual jelantah</Link>.</p>
            </blockquote>
            <p>Berikut adalah alur prosedur yang umum diterapkan oleh pengepul resmi:</p>
            <ul>
                <li><strong>Request Penjemputan:</strong> Ajukan permintaan melalui platform yang disediakan.</li>
                <li><strong>Konfirmasi Jadwal:</strong> Anda akan menerima konfirmasi jadwal penjemputan dari sistem atau tim layanan pelanggan.</li>
                <li><strong>Proses di Lokasi:</strong> Kurir akan datang, menimbang jelantah di depan Anda, dan melakukan verifikasi kualitas secara visual.</li>
                <li><strong>Konfirmasi Transaksi:</strong> Anda akan diminta menyetujui hasil timbangan.</li>
                <li><strong>Pembayaran Digital:</strong> Pembayaran akan diproses ke akun Anda sesuai dengan data yang telah disetujui.</li>
            </ul>
            <p>
                Dengan mengikuti syarat dan prosedur ini, Anda tidak hanya memastikan transaksi yang mulus tetapi juga membantu pengepul menjaga kualitas bahan baku untuk industri biodiesel.
            </p>
        </ArticleLayout>
    );
};

export default SyaratProsedurJualJelantahPage;
