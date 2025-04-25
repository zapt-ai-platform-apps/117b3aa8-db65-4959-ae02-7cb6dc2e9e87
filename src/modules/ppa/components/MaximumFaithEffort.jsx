import React, { useState } from 'react';
import { FaBalanceScale, FaBrain, FaHeart } from 'react-icons/fa';

const MaximumFaithEffort = () => {
  const [selectedEffort, setSelectedEffort] = useState('balanced');
  
  const efforts = [
    {
      id: 'physical',
      title: 'Ikhtiar Fisik Berlebihan',
      description: 'Terlalu fokus pada usaha fisik/duniawi (bekerja berlebihan, menelantarkan ibadah)',
      benefits: ['Hasil material mungkin terlihat', 'Prestasi duniawi tercapai'],
      drawbacks: ['Jauh dari Allah', 'Stres dan kelelahan', 'Sering mengabaikan ibadah', 'Ketergantungan pada diri sendiri']
    },
    {
      id: 'balanced',
      title: 'Ikhtiar Iman Maksimal',
      description: 'Keseimbangan antara ikhtiar fisik dan spiritual, dengan penekanan pada kedekatan dengan Allah',
      benefits: ['Mendapat pertolongan Allah', 'Ketenangan hati', 'Hasil lebih barokah', 'Perlindungan dari Allah'],
      drawbacks: []
    },
    {
      id: 'passive',
      title: 'Pasif Tanpa Ikhtiar',
      description: 'Hanya berdoa tanpa melakukan usaha nyata (pasrah tanpa usaha)',
      benefits: ['Terlihat spiritual'],
      drawbacks: ['Tidak sesuai tuntunan Islam', 'Hasil tidak optimal', 'Malas berusaha', 'Salah memahami tawakal']
    }
  ];
  
  const selectedEffortData = efforts.find(e => e.id === selectedEffort);
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Ikhtiar Iman Maksimal</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Konsep "Ikhtiar Iman Maksimal"</h3>
        <p className="text-sm text-neutral-700 mb-4">
          "Ikhtiar Iman Maksimal" adalah konsep dalam Pola Pertolongan Allah (PPA) yang menekankan 
          pentingnya memaksimalkan upaya keimanan (seperti doa, tawakal, sedekah) di atas upaya duniawi yang berlebihan. 
          Ini bukan berarti meninggalkan usaha duniawi, tetapi menyeimbangkannya dengan penekanan pada 
          kedekatan dengan Allah.
        </p>
        
        <div className="bg-secondary-50 p-3 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Prinsip Ikhtiar Iman Maksimal:</h4>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Lakukan usaha fisik/duniawi secukupnya</li>
            <li>Maksimalkan usaha spiritual (ibadah, doa, sedekah)</li>
            <li>Utamakan kedekatan dengan Allah di atas segalanya</li>
            <li>Yakin bahwa pertolongan Allah lebih kuat dari usaha manusia</li>
            <li>Tetap berusaha namun bergantung sepenuhnya pada Allah</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Perbandingan Jenis Ikhtiar</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {efforts.map(effort => (
            <button
              key={effort.id}
              onClick={() => setSelectedEffort(effort.id)}
              className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
                selectedEffort === effort.id
                  ? effort.id === 'balanced'
                    ? 'bg-secondary-600 text-white'
                    : effort.id === 'physical'
                      ? 'bg-red-600 text-white'
                      : 'bg-yellow-500 text-white'
                  : 'bg-white text-neutral-700'
              }`}
            >
              {effort.title}
            </button>
          ))}
        </div>
        
        <div className={`p-4 rounded-lg ${
          selectedEffort === 'balanced'
            ? 'bg-secondary-50 border border-secondary-200'
            : selectedEffort === 'physical'
              ? 'bg-red-50 border border-red-200'
              : 'bg-yellow-50 border border-yellow-200'
        }`}>
          <div className="flex items-start gap-3 mb-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              selectedEffort === 'balanced'
                ? 'bg-secondary-100 text-secondary-600'
                : selectedEffort === 'physical'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-yellow-100 text-yellow-600'
            }`}>
              {selectedEffort === 'balanced' ? (
                <FaBalanceScale />
              ) : selectedEffort === 'physical' ? (
                <FaBrain />
              ) : (
                <FaHeart />
              )}
            </div>
            <div>
              <h4 className="font-bold">{selectedEffortData.title}</h4>
              <p className="text-sm text-neutral-700 mt-1">{selectedEffortData.description}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h5 className="text-sm font-medium mb-1">Kelebihan:</h5>
              <ul className="text-sm list-disc list-inside pl-2 space-y-1">
                {selectedEffortData.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            {selectedEffortData.drawbacks.length > 0 && (
              <div>
                <h5 className="text-sm font-medium mb-1">Kekurangan:</h5>
                <ul className="text-sm list-disc list-inside pl-2 space-y-1">
                  {selectedEffortData.drawbacks.map((drawback, idx) => (
                    <li key={idx}>{drawback}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-2">Menerapkan Ikhtiar Iman Maksimal</h3>
        <ol className="text-sm space-y-2 list-decimal list-inside">
          <li>Tetapkan tujuan yang jelas dan niat yang lurus</li>
          <li>Lakukan usaha fisik/duniawi yang diperlukan (tanpa berlebihan)</li>
          <li>Perbanyak ibadah, doa, dan sedekah terkait tujuan tersebut</li>
          <li>Lakukan shalat hajat dan zikir dengan istiqomah</li>
          <li>Titipkan hasil akhir kepada Allah dengan penuh tawakal</li>
          <li>Terima hasil dengan ikhlas, apapun yang Allah berikan</li>
        </ol>
      </div>
    </div>
  );
};

export default MaximumFaithEffort;