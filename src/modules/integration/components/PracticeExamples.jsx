import React, { useState } from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const examples = [
  {
    id: 1,
    situation: "Mencari Pekerjaan",
    steps: [
      "Visualisasikan diri Anda diterima di pekerjaan yang diinginkan dengan detail",
      "Afirmasikan komunikasi dengan pemberi kerja yang menguntungkan kedua belah pihak",
      "Perbaiki kualitas ibadah, terutama shalat wajib dan tahajud",
      "Bersedekah dengan niat membantu orang lain dan membuka pintu rezeki",
      "Setelah wawancara, 'titipkan' hasilnya kepada Allah dengan ikhlas"
    ]
  },
  {
    id: 2,
    situation: "Penyembuhan Penyakit",
    steps: [
      "Visualisasikan tubuh yang sehat dan proses penyembuhan dengan detail",
      "Afirmasikan komunikasi dengan sel-sel tubuh untuk menjadi sehat",
      "Cari 'pesan cinta' Allah di balik sakit yang dialami",
      "Tingkatkan ibadah dan gunakan doa-doa ma'tsur untuk kesembuhan",
      "Bersedekah khusus untuk niat kesembuhan dengan hati ikhlas",
      "Ikuti pengobatan medis sebagai ikhtiar, sambil bertawakal pada Allah"
    ]
  },
  {
    id: 3,
    situation: "Memperbaiki Hubungan",
    steps: [
      "Visualisasikan hubungan yang harmonis dengan orang tersebut",
      "Afirmasikan komunikasi subyektif yang positif dan menguntungkan kedua pihak",
      "Doakan kebaikan untuk orang tersebut dengan tulus",
      "Bersedekah dengan niat memperbaiki hubungan",
      "Lakukan usaha nyata untuk memperbaiki hubungan (minta maaf, berkomunikasi)",
      "Titipkan hasil akhirnya kepada Allah dengan ridha"
    ]
  },
  {
    id: 4,
    situation: "Sukses dalam Bisnis",
    steps: [
      "Visualisasikan bisnis yang sukses dengan manfaat bagi banyak orang",
      "Afirmasikan komunikasi dengan calon pelanggan/mitra yang win-win",
      "Luaskan niat bisnis untuk memberi manfaat pada masyarakat luas",
      "Jalankan bisnis dengan nilai-nilai Islam (jujur, adil, tidak gharar)",
      "Sisihkan sebagian keuntungan untuk sedekah secara konsisten",
      "Lakukan 'ikhtiar iman maksimal' dengan menyeimbangkan usaha duniawi dan spiritual"
    ]
  }
];

const PracticeExamples = () => {
  const [selectedExample, setSelectedExample] = useState(examples[0]);
  
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-700 mb-4">
        Berikut adalah beberapa contoh praktis penerapan komunikasi subyektif 
        yang diintegrasikan dengan prinsip Pola Pertolongan Allah dalam berbagai situasi:
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {examples.map(example => (
          <button
            key={example.id}
            onClick={() => setSelectedExample(example)}
            className={`px-3 py-1 text-sm rounded-full cursor-pointer ${
              selectedExample.id === example.id
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {example.situation}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">{selectedExample.situation}</h3>
        
        <div className="space-y-3">
          {selectedExample.steps.map((step, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="bg-primary-100 w-6 h-6 rounded-full flex items-center justify-center text-primary-700 shrink-0 mt-0.5">
                {index + 1}
              </div>
              <p className="text-sm flex-1">{step}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Prinsip Kunci dalam Contoh Ini</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1" />
            <p className="text-sm">
              <span className="font-medium">Keseimbangan:</span> Menggabungkan teknik visualisasi/afirmasi dengan ibadah dan tawakal
            </p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1" />
            <p className="text-sm">
              <span className="font-medium">Win-win solution:</span> Mengutamakan manfaat bagi diri sendiri dan orang lain
            </p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1" />
            <p className="text-sm">
              <span className="font-medium">Ikhtiar lengkap:</span> Melakukan usaha duniawi dan spiritual secara bersamaan
            </p>
          </div>
          <div className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1" />
            <p className="text-sm">
              <span className="font-medium">Titip:</span> Menyerahkan hasil akhir kepada Allah setelah berusaha maksimal
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button className="text-primary-600 flex items-center gap-1 text-sm cursor-pointer">
          <span>Lihat lebih banyak contoh</span> <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default PracticeExamples;