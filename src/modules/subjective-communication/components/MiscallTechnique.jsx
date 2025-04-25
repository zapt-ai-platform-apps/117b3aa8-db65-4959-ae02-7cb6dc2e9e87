import React, { useState } from 'react';
import { FaRegLightbulb, FaBed, FaClipboard, FaRegClock } from 'react-icons/fa';

export function MiscallTechnique() {
  const [targetName, setTargetName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [miscallPhrase, setMiscallPhrase] = useState('');
  
  const generatePhrase = () => {
    if (targetName && purpose) {
      setMiscallPhrase(
        `Saya akan bangun ketika pikiran saya terhubung dengan pikiran ${targetName} untuk ${purpose}`
      );
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(miscallPhrase);
    alert('Kalimat berhasil disalin!');
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Teknik "Miscall" untuk Kontak Pikiran</h2>
      
      <div className="bg-secondary-50 p-4 rounded-lg">
        <div className="flex items-start gap-3 mb-4">
          <FaRegLightbulb className="text-yellow-500 text-xl mt-1" />
          <div>
            <h3 className="font-bold mb-1">Apa itu Teknik "Miscall"?</h3>
            <p className="text-sm text-neutral-700">
              Teknik "miscall" adalah cara untuk memprogram pikiran bawah sadar Anda agar terbangun 
              saat terjadi kontak pikiran dengan target. Ini seperti memasang "alarm mental" yang 
              membangunkan Anda di waktu yang tepat untuk melakukan komunikasi subyektif.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Buat Kalimat "Miscall"</h3>
        
        <div className="space-y-3 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Target</label>
            <input 
              type="text"
              className="input-field"
              placeholder="Contoh: Ahmad Fauzi"
              value={targetName}
              onChange={(e) => setTargetName(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Tujuan Kontak Pikiran</label>
            <input 
              type="text"
              className="input-field"
              placeholder="Contoh: menyetujui proposal saya"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>
          
          <button 
            onClick={generatePhrase}
            className="btn-primary w-full cursor-pointer"
            disabled={!targetName || !purpose}
          >
            Buat Kalimat
          </button>
        </div>
        
        {miscallPhrase && (
          <div className="bg-neutral-50 p-3 rounded-lg relative">
            <p className="pr-8 text-sm font-medium">{miscallPhrase}</p>
            <button 
              onClick={copyToClipboard}
              className="absolute top-3 right-3 text-primary-600 cursor-pointer"
              aria-label="Salin ke clipboard"
            >
              <FaClipboard />
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Cara Menggunakan Teknik "Miscall"</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 shrink-0">
              1
            </div>
            <div>
              <h4 className="font-medium">Persiapan Sebelum Tidur</h4>
              <p className="text-sm text-neutral-600">
                Sebelum tidur, ucapkan kalimat "miscall" 10-20 kali dengan penuh 
                keyakinan. Visualisasikan proses terbangun dan berkomunikasi dengan target.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 shrink-0">
              2
            </div>
            <div>
              <h4 className="font-medium">Saat Terbangun</h4>
              <p className="text-sm text-neutral-600">
                Ketika Anda terbangun di tengah malam, yakinlah bahwa ini adalah hasil dari 
                kontak pikiran, bukan karena faktor lain. Ini adalah waktu ideal untuk 
                melakukan komunikasi subyektif.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 shrink-0">
              3
            </div>
            <div>
              <h4 className="font-medium">Lakukan Komunikasi Subyektif</h4>
              <p className="text-sm text-neutral-600">
                Segera lakukan visualisasi dan afirmasi sesuai tujuan Anda. Jangan tertidur 
                kembali sebelum menyelesaikan komunikasi subyektif ini.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 shrink-0">
              4
            </div>
            <div>
              <h4 className="font-medium">Catatan Pengalaman</h4>
              <p className="text-sm text-neutral-600">
                Catat kapan Anda terbangun dan detail pengalaman komunikasi subyektif yang dilakukan. 
                Perhatikan hasil-hasil yang muncul setelahnya.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg flex gap-4">
        <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-700 shrink-0">
          <FaBed />
        </div>
        <div>
          <h3 className="font-bold mb-1">Pengingat Penting</h3>
          <p className="text-sm text-neutral-700">
            Sebelum menggunakan teknik "miscall", pastikan Anda sudah menguasai teknik visualisasi 
            dan afirmasi. Teknik ini paling efektif ketika dilakukan secara konsisten dan dengan 
            keyakinan penuh. Ingatlah bahwa waktu antara tengah malam sampai subuh dipercaya sebagai 
            waktu yang baik untuk kontak pikiran.
          </p>
        </div>
      </div>
    </div>
  );
}