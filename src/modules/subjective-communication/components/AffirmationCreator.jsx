import React, { useState } from 'react';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';

const exampleAffirmations = [
  {
    category: "Pekerjaan",
    template: "[Nama Anda] meminta kepada [Nama Target] untuk menerima [Anda/proposal/dll] karena akan menguntungkan kedua belah pihak. [Target] sangat setuju."
  },
  {
    category: "Bisnis",
    template: "[Nama Anda] meminta kepada [Nama Klien] untuk membeli produk/jasa [nama produk] karena akan meningkatkan [manfaat untuk klien]. [Klien] sangat senang dan setuju."
  },
  {
    category: "Hubungan",
    template: "[Nama Anda] meminta kepada [Nama Orang] untuk [tujuan hubungan] karena akan menciptakan kebahagiaan bersama. [Orang] tersenyum dan mengangguk setuju."
  }
];

const AffirmationCreator = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pekerjaan");
  const [affirmationText, setAffirmationText] = useState("");
  const [savedAffirmations, setSavedAffirmations] = useState([]);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const template = exampleAffirmations.find(a => a.category === category)?.template || '';
    setAffirmationText(template);
  };
  
  const handleSaveAffirmation = () => {
    if (affirmationText.trim()) {
      setSavedAffirmations([...savedAffirmations, {
        id: Date.now(),
        text: affirmationText,
        category: selectedCategory
      }]);
      setAffirmationText("");
    }
  };
  
  const handleDeleteAffirmation = (id) => {
    setSavedAffirmations(savedAffirmations.filter(aff => aff.id !== id));
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Pembuat Afirmasi Subyektif</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Pilih Kategori</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {exampleAffirmations.map(a => (
            <button
              key={a.category}
              onClick={() => handleCategoryChange(a.category)}
              className={`px-3 py-1 text-sm rounded-full cursor-pointer ${
                selectedCategory === a.category
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {a.category}
            </button>
          ))}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Template Afirmasi</label>
          <textarea
            className="input-field h-28 text-sm"
            value={affirmationText}
            onChange={(e) => setAffirmationText(e.target.value)}
            placeholder="Masukkan afirmasi subyektif Anda di sini..."
          />
        </div>
        
        <div className="text-sm text-neutral-600 mb-4">
          <p className="mb-2">Tips untuk afirmasi efektif:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Gunakan nama lengkap Anda dan target</li>
            <li>Fokus pada win-win solution</li>
            <li>Bayangkan target tersenyum dan mengangguk setuju</li>
            <li>Ucapkan afirmasi 10-20 kali dengan penuh keyakinan</li>
          </ul>
        </div>
        
        <button 
          onClick={handleSaveAffirmation}
          className="btn-primary w-full flex items-center justify-center gap-2 cursor-pointer"
        >
          <FaSave /> <span>Simpan Afirmasi</span>
        </button>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Afirmasi Tersimpan</h3>
        
        {savedAffirmations.length === 0 ? (
          <div className="text-center py-6 bg-neutral-50 rounded-lg border border-dashed border-neutral-300">
            <p className="text-neutral-500 mb-2">Belum ada afirmasi tersimpan</p>
            <button 
              onClick={() => handleCategoryChange("Pekerjaan")}
              className="text-primary-600 text-sm flex items-center justify-center gap-1 mx-auto cursor-pointer"
            >
              <FaPlus size={12} /> <span>Buat Afirmasi Pertama</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {savedAffirmations.map(aff => (
              <div key={aff.id} className="p-3 bg-white rounded-lg border border-neutral-200 flex items-start justify-between">
                <div>
                  <div className="text-xs font-medium text-primary-600 mb-1">{aff.category}</div>
                  <p className="text-sm">{aff.text}</p>
                </div>
                <button 
                  onClick={() => handleDeleteAffirmation(aff.id)}
                  className="text-neutral-400 hover:text-red-500 p-1 cursor-pointer"
                  aria-label="Hapus afirmasi"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AffirmationCreator;