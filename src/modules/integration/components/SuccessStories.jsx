import React, { useState } from 'react';
import { FaRegLightbulb, FaUser, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Ahmad",
    age: 35,
    occupation: "Pengusaha",
    story: "Selama 2 tahun bisnis saya stagnan. Saya mulai menerapkan komunikasi subyektif dengan afirmasi dan visualisasi setiap malam, sambil meningkatkan kualitas shalat dan bersedekah rutin. Setelah 3 bulan konsisten, saya bertemu mitra bisnis yang membuka peluang baru. Saya yakin ini adalah hasil dari integrasi kedua pendekatan tersebut."
  },
  {
    id: 2,
    name: "Siti",
    age: 28,
    occupation: "Dokter",
    story: "Saya sulit mendapatkan posisi spesialis yang saya inginkan. Mulai menerapkan teknik komunikasi subyektif dengan target kepala departemen, sambil memperbanyak tahajud dan sedekah. Saya visualisasikan diri saya bekerja di posisi tersebut tiap malam sebelum tidur. Dalam 2 bulan, saya dipanggil untuk wawancara dan diterima. Yang menakjubkan, justru kepala departemen yang menghubungi saya!"
  },
  {
    id: 3,
    name: "Budi",
    age: 42,
    occupation: "Guru",
    story: "Hubungan dengan anak remaja saya sangat tegang. Saya menerapkan komunikasi subyektif dengan memvisualisasikan hubungan yang harmonis, sambil mendoakannya dalam setiap sujud dan bersedekah atas namanya. Saya juga mencari 'pesan cinta' Allah dalam masalah ini. Secara bertahap, hubungan kami membaik, dan sekarang kami bisa berkomunikasi dengan baik."
  }
];

const SuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };
  
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-700 mb-4">
        Berikut adalah beberapa kisah inspiratif dari orang-orang yang telah berhasil 
        menerapkan integrasi komunikasi subyektif dengan prinsip-prinsip Pola Pertolongan Allah:
      </p>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200 relative">
        <FaQuoteLeft className="text-neutral-200 text-3xl absolute top-4 left-4" />
        
        <div className="pt-8 pb-4 px-4">
          <div className="min-h-[180px]">
            <p className="text-sm text-neutral-700 italic">
              {testimonials[currentTestimonial].story}
            </p>
          </div>
          
          <div className="mt-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
              <FaUser />
            </div>
            <div className="ml-3">
              <p className="font-medium">{testimonials[currentTestimonial].name}</p>
              <p className="text-xs text-neutral-500">
                {testimonials[currentTestimonial].age} tahun, {testimonials[currentTestimonial].occupation}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevTestimonial}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center cursor-pointer hover:bg-neutral-200"
          >
            <FaChevronLeft size={14} />
          </button>
          
          <div className="flex gap-1">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full ${
                  idx === currentTestimonial ? 'bg-primary-600' : 'bg-neutral-300'
                }`}
              ></div>
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center cursor-pointer hover:bg-neutral-200"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <FaRegLightbulb className="text-yellow-500 text-xl mt-1" />
          <div>
            <h3 className="font-bold text-sm mb-1">Pelajaran dari Kisah-kisah Ini</h3>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Konsistensi adalah kunci keberhasilan integrasi kedua pendekatan</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Hasil mungkin tidak instan, tapi datang dalam waktu dan cara yang tepat</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Sedekah dan peningkatan kualitas ibadah memperkuat efektivitas komunikasi subyektif</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Niat yang baik dan bermanfaat bagi orang lain mempercepat datangnya hasil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;