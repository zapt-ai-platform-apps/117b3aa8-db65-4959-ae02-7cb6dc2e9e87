import React, { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const steps = [
  {
    title: "Persiapan Visualisasi",
    content: "Temukan tempat yang tenang dan nyaman. Duduk atau berbaring dengan posisi rileks. Pastikan Anda tidak akan terganggu selama sesi visualisasi."
  },
  {
    title: "Fokus pada Hasil Akhir",
    content: "Bayangkan dengan jelas hasil akhir yang Anda inginkan. Misalnya, jika Anda menginginkan mobil baru, bayangkan diri Anda sudah memiliki dan mengendarai mobil tersebut."
  },
  {
    title: "Libatkan Panca Indera",
    content: "Gunakan semua panca indera dalam visualisasi Anda. Lihat warna-warna, detail seperti bintik-bintik atau tekstur objek. Rasakan, dengar, cium bau, dan rasakan sensasi memiliki tujuan tersebut."
  },
  {
    title: "Rasakan Emosi Positif",
    content: "Rasakan kebahagiaan, rasa syukur, dan kepuasan seolah-olah tujuan Anda sudah tercapai. Emosi positif ini sangat penting untuk memperkuat visualisasi Anda."
  },
  {
    title: "Praktikkan Secara Konsisten",
    content: "Lakukan visualisasi ini secara rutin, terutama sebelum tidur dan saat bangun di pagi hari. Konsistensi adalah kunci keberhasilan komunikasi subyektif."
  }
];

const VisualizationGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };
  
  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Panduan Visualisasi Terarah</h2>
      
      <div className="mb-6">
        <div className="bg-primary-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">{steps[currentStep].title}</h3>
            <div className="text-xs text-neutral-500">
              Langkah {currentStep + 1} dari {steps.length}
            </div>
          </div>
          <p className="text-sm mb-4">{steps[currentStep].content}</p>
          
          <div className="flex justify-between mt-4">
            <button 
              onClick={prevStep} 
              disabled={currentStep === 0}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                currentStep === 0 
                  ? 'bg-neutral-100 text-neutral-400' 
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              Sebelumnya
            </button>
            <button 
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                currentStep === steps.length - 1
                  ? 'bg-neutral-100 text-neutral-400'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary-50 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Contoh Visualisasi</h3>
        <p className="text-sm mb-4">
          "Bayangkan Anda sedang mengendarai mobil baru yang Anda inginkan. 
          Rasakan tekstur setir di tangan Anda. Cium aroma mobil baru. 
          Dengar suara mesin yang halus. Lihat dengan jelas warna dan 
          detailnya. Rasakan kebahagiaan dan rasa syukur yang dalam."
        </p>
        
        <div className="bg-white p-3 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-secondary-600 text-white flex items-center justify-center cursor-pointer hover:bg-secondary-700 transition-colors"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <div className="text-sm">
              <div className="font-medium">Panduan Audio Visualisasi</div>
              <div className="text-xs text-neutral-500">5:30 menit</div>
            </div>
          </div>
          
          <button 
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Poin Penting</h3>
        <ul className="text-sm space-y-2 list-disc list-inside">
          <li>Lakukan visualisasi terutama saat pikiran dalam kondisi alfa (sebelum tidur/setelah bangun)</li>
          <li>Fokus pada hasil akhir, bukan pada proses atau hambatan</li>
          <li>Libatkan emosi positif seperti rasa syukur dan kebahagiaan</li>
          <li>Semakin detail visualisasi, semakin efektif hasilnya</li>
          <li>Kombinasikan dengan afirmasi positif untuk hasil maksimal</li>
        </ul>
      </div>
      
      <button className="btn-primary w-full cursor-pointer">
        Mulai Sesi Visualisasi
      </button>
    </div>
  );
};

export default VisualizationGuide;