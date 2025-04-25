import React, { useState } from 'react';
import { FaUsers, FaPlus, FaSave, FaTrash } from 'react-icons/fa';

const IntentionExpander = () => {
  const [personalGoal, setPersonalGoal] = useState('');
  const [expandedIntention, setExpandedIntention] = useState('');
  const [savedIntentions, setSavedIntentions] = useState([]);
  
  const handleExpand = () => {
    if (personalGoal.trim()) {
      // In a real app, this would be more sophisticated
      // For now, we'll use a template to expand the intention
      setExpandedIntention(
        `${personalGoal} agar saya dapat membantu keluarga saya, berbagi dengan sesama yang membutuhkan, dan menjadi contoh yang baik bagi orang lain sehingga mereka juga terinspirasi untuk melakukan kebaikan.`
      );
    }
  };
  
  const saveIntention = () => {
    if (expandedIntention.trim()) {
      setSavedIntentions([
        ...savedIntentions,
        {
          id: Date.now(),
          original: personalGoal,
          expanded: expandedIntention
        }
      ]);
      
      setPersonalGoal('');
      setExpandedIntention('');
    }
  };
  
  const deleteIntention = (id) => {
    setSavedIntentions(savedIntentions.filter(intent => intent.id !== id));
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Pengembang Niat</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Pentingnya Meluaskan Niat</h3>
        <div className="flex items-start gap-3 mb-4">
          <FaUsers className="text-secondary-600 text-xl mt-1" />
          <p className="text-sm text-neutral-700">
            Dalam Pola Pertolongan Allah (PPA), niat yang luas dan mencakup kebaikan bagi orang lain 
            memiliki kekuatan yang lebih besar. Allah lebih cepat mengabulkan doa yang manfaatnya 
            tidak hanya untuk diri sendiri, tetapi juga untuk banyak orang.
          </p>
        </div>
        
        <div className="bg-secondary-50 p-3 rounded-lg text-sm">
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-secondary-600 font-bold">•</span>
              <span>Niat yang sempit: "Saya ingin sukses berbisnis"</span>
            </li>
            <li className="flex gap-2">
              <span className="text-secondary-600 font-bold">•</span>
              <span>Niat yang luas: "Saya ingin sukses berbisnis agar dapat menyediakan lapangan kerja, membantu yang membutuhkan, dan menginspirasi pembisnis lain untuk berbuat baik"</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Luaskan Niat Anda</h3>
        
        <div className="space-y-3 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Niat/Tujuan Pribadi Anda</label>
            <input
              type="text"
              className="input-field"
              placeholder="Contoh: Saya ingin lulus ujian dengan nilai baik"
              value={personalGoal}
              onChange={(e) => setPersonalGoal(e.target.value)}
            />
          </div>
          
          <button
            onClick={handleExpand}
            className="btn-secondary w-full flex items-center justify-center gap-2 cursor-pointer"
            disabled={!personalGoal.trim()}
          >
            <FaPlus /> <span>Luaskan Niat</span>
          </button>
        </div>
        
        {expandedIntention && (
          <div className="bg-white p-3 rounded-lg mb-4">
            <h4 className="font-medium text-sm mb-2">Niat yang Diperluas:</h4>
            <p className="text-sm mb-3">{expandedIntention}</p>
            
            <button
              onClick={saveIntention}
              className="btn-primary w-full flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaSave /> <span>Simpan Niat</span>
            </button>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Niat yang Tersimpan</h3>
        
        {savedIntentions.length === 0 ? (
          <div className="text-center py-6 bg-white rounded-lg border border-dashed border-neutral-300">
            <p className="text-neutral-500">Belum ada niat yang tersimpan</p>
          </div>
        ) : (
          <div className="space-y-3">
            {savedIntentions.map(intent => (
              <div key={intent.id} className="bg-white p-3 rounded-lg border border-neutral-200">
                <div className="flex justify-between mb-2">
                  <div className="text-xs font-medium text-secondary-600">Niat Awal:</div>
                  <button
                    onClick={() => deleteIntention(intent.id)}
                    className="text-neutral-400 hover:text-red-500 p-1 cursor-pointer"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
                <p className="text-sm mb-3">{intent.original}</p>
                
                <div className="bg-secondary-50 p-2 rounded-lg">
                  <div className="text-xs font-medium text-secondary-600 mb-1">Niat yang Diperluas:</div>
                  <p className="text-sm">{intent.expanded}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IntentionExpander;