import React from 'react';
import { FaPrayingHands, FaBrain, FaBalanceScale, FaRegCheckCircle } from 'react-icons/fa';

const IntegrationGuide = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-700 mb-4">
        Integrasi komunikasi subyektif dengan prinsip-prinsip Pola Pertolongan Allah 
        merupakan pendekatan yang menyelaraskan kekuatan pikiran dengan spiritualitas Islam. 
        Berikut panduan untuk menerapkannya secara harmonis:
      </p>
      
      <div className="space-y-4">
        <div className="bg-neutral-50 p-3 rounded-lg flex gap-3">
          <div className="mt-1 text-secondary-600">
            <FaPrayingHands />
          </div>
          <div>
            <h3 className="font-bold text-sm">Mulai dengan Doa dan Niat yang Benar</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Sebelum melakukan komunikasi subyektif, mulailah dengan doa dan niatkan untuk 
              kebaikan diri sendiri dan orang lain. Pastikan tujuan Anda selaras dengan 
              nilai-nilai Islam dan memberi manfaat kepada sesama.
            </p>
          </div>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg flex gap-3">
          <div className="mt-1 text-primary-600">
            <FaBrain />
          </div>
          <div>
            <h3 className="font-bold text-sm">Visualisasi dengan Kesadaran Tauhid</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Saat melakukan visualisasi, ingatlah bahwa hasilnya tergantung pada kehendak 
              Allah. Visualisasikan tujuan Anda sambil mengingat bahwa Allah adalah Pencipta 
              segala sebab dan akibat. Bayangkan hasil akhir dengan perasaan syukur kepada Allah.
            </p>
          </div>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg flex gap-3">
          <div className="mt-1 text-neutral-600">
            <FaBalanceScale />
          </div>
          <div>
            <h3 className="font-bold text-sm">Seimbangkan Ikhtiar dan Tawakal</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Lakukan komunikasi subyektif sebagai bentuk ikhtiar (usaha), namun tetap bertawakal (berserah diri) 
              kepada Allah. Setelah melakukan visualisasi dan afirmasi, "titipkan" hasilnya kepada Allah 
              dan terima dengan ikhlas apapun yang diberikan-Nya.
            </p>
          </div>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg flex gap-3">
          <div className="mt-1 text-green-600">
            <FaRegCheckCircle />
          </div>
          <div>
            <h3 className="font-bold text-sm">Mencari Keselarasan dengan PPA</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Pastikan praktik komunikasi subyektif Anda mendukung prinsip-prinsip PPA: perbaiki kualitas 
              ibadah, perbanyak sedekah, luaskan niat untuk kebaikan orang lain, dan lihat setiap 
              tantangan sebagai "pesan cinta" dari Allah.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-lg mt-4">
        <h3 className="font-bold text-sm mb-2">Kunci Integrasi yang Berhasil</h3>
        <ul className="text-sm space-y-2">
          <li className="flex gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span>Pratikkan keduanya secara konsisten dan berkesinambungan</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Jaga keseimbangan antara usaha duniawi dan spiritual</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span>Utamakan tujuan yang bermanfaat bagi diri sendiri dan orang lain</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Ingatlah bahwa keberhasilan adalah atas izin Allah semata</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntegrationGuide;