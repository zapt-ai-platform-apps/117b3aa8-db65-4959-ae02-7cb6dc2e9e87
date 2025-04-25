import React, { useState } from 'react';
import { FaPlay, FaPause, FaStopwatch } from 'react-icons/fa';

const AlphaStateGuide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  
  const toggleTimer = () => {
    if (isPlaying) {
      clearInterval(intervalId);
    } else {
      const id = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
    setIsPlaying(!isPlaying);
  };
  
  const resetTimer = () => {
    clearInterval(intervalId);
    setIsPlaying(false);
    setTimer(0);
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Panduan Kondisi Alfa</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Apa itu Kondisi Alfa?</h3>
        <p className="text-sm mb-4">
          Kondisi alfa adalah keadaan pikiran di mana gelombang otak beroperasi pada frekuensi 8-13 Hz. 
          Ini adalah kondisi di antara sadar penuh (beta) dan tidur (theta), di mana pikiran sangat reseptif. 
          Kondisi ini ideal untuk melakukan komunikasi subyektif.
        </p>
        
        <div className="bg-secondary-50 p-3 rounded-lg mb-4">
          <h4 className="font-medium text-sm mb-2">Waktu Terbaik untuk Kondisi Alfa:</h4>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Sesaat sebelum tidur (ketika mulai mengantuk)</li>
            <li>Saat baru bangun tidur (masih setengah sadar)</li>
            <li>Saat terbangun di tengah malam (setelah terjadi kontak pikiran)</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Teknik Mencapai Kondisi Alfa</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg">
            <h4 className="font-medium mb-1">1. Teknik Pernapasan</h4>
            <p className="text-sm">
              Tarik napas dalam-dalam, tahan selama 4 detik, lalu lepaskan perlahan. 
              Ulangi 3 kali untuk menenangkan pikiran dan tubuh.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg">
            <h4 className="font-medium mb-1">2. Penghitungan Mundur</h4>
            <p className="text-sm">
              Hitung mundur dari 50 ke 1 dengan perlahan, bayangkan setiap angka dengan jelas.
              Saat mencapai angka 1, Anda akan berada dalam kondisi alfa yang dalam.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg">
            <h4 className="font-medium mb-1">3. Relaksasi Progresif</h4>
            <p className="text-sm">
              Fokus pada setiap bagian tubuh secara berurutan, mulai dari kaki hingga kepala, 
              dan rilekskan setiap bagian satu per satu.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-4">Latihan Praktik Kondisi Alfa</h3>
        
        <div className="bg-neutral-50 p-4 rounded-lg flex flex-col items-center">
          <div className="text-3xl font-mono font-bold mb-4">{formatTime(timer)}</div>
          
          <div className="flex gap-4">
            <button
              onClick={toggleTimer}
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                isPlaying ? 'bg-red-500 text-white' : 'bg-primary-600 text-white'
              }`}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <button
              onClick={resetTimer}
              className="w-12 h-12 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center cursor-pointer"
            >
              <FaStopwatch />
            </button>
          </div>
          
          <p className="text-sm text-center mt-4">
            {isPlaying 
              ? "Mulailah rileks dan praktikkan teknik pernapasan sambil menghitung mundur..."
              : "Tekan tombol mulai untuk memulai latihan kondisi alfa"}
          </p>
        </div>
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Tips Praktik Kondisi Alfa</h3>
        <ul className="text-sm space-y-2 list-disc list-inside">
          <li>Pastikan Anda berada di tempat yang tenang dan nyaman</li>
          <li>Hindari gangguan seperti ponsel atau suara keras</li>
          <li>Gunakan kondisi alfa ini untuk praktik visualisasi atau afirmasi</li>
          <li>Jangan khawatir jika tertidur saat berlatih di malam hari</li>
          <li>Praktikkan secara rutin agar semakin mahir mencapai kondisi alfa</li>
        </ul>
      </div>
    </div>
  );
};

export default AlphaStateGuide;