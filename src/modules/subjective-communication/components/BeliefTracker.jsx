import React, { useState } from 'react';
import { FaStar, FaRegStar, FaExclamationTriangle } from 'react-icons/fa';

export function BeliefTracker() {
  const [beliefScore, setBeliefScore] = useState(3);
  const [challenges, setChallenges] = useState([]);
  const [newChallenge, setNewChallenge] = useState('');
  
  const handleAddChallenge = () => {
    if (newChallenge.trim()) {
      setChallenges([...challenges, { 
        id: Date.now(), 
        text: newChallenge,
        resolved: false
      }]);
      setNewChallenge('');
    }
  };
  
  const toggleChallengeResolved = (id) => {
    setChallenges(
      challenges.map(challenge => 
        challenge.id === id 
          ? { ...challenge, resolved: !challenge.resolved } 
          : challenge
      )
    );
  };
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          onClick={() => setBeliefScore(i)}
          className="text-2xl cursor-pointer"
        >
          {i <= beliefScore ? (
            <FaStar className="text-yellow-500" />
          ) : (
            <FaRegStar className="text-neutral-400" />
          )}
        </button>
      );
    }
    return stars;
  };
  
  const getBeliefMessage = () => {
    if (beliefScore <= 1) return "Keyakinan Anda masih sangat rendah. Teruslah belajar dan praktekan teknik komunikasi subyektif.";
    if (beliefScore <= 2) return "Anda memiliki beberapa keraguan. Fokus pada pembelajaran dan latihan rutin.";
    if (beliefScore <= 3) return "Keyakinan Anda sedang berkembang. Lanjutkan praktik rutin Anda.";
    if (beliefScore <= 4) return "Keyakinan Anda cukup kuat. Anda akan melihat hasil yang semakin baik.";
    return "Keyakinan Anda sangat kuat. Dengan keyakinan ini, hasil akan lebih cepat terlihat.";
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Pelacak Keyakinan</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Tingkat Keyakinan Anda</h3>
        
        <div className="flex justify-center mb-4">
          {renderStars()}
        </div>
        
        <div className={`p-3 rounded-lg text-center text-sm ${
          beliefScore >= 4 
            ? 'bg-green-50 text-green-700'
            : beliefScore >= 3
              ? 'bg-blue-50 text-blue-700'
              : 'bg-yellow-50 text-yellow-700'
        }`}>
          {getBeliefMessage()}
        </div>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Tantangan Keyakinan</h3>
        
        <div className="space-y-2 mb-4">
          <input
            type="text"
            className="input-field"
            placeholder="Apa yang membuat Anda ragu? (misal: Saya tidak yakin ini akan berhasil)"
            value={newChallenge}
            onChange={(e) => setNewChallenge(e.target.value)}
          />
          <button 
            onClick={handleAddChallenge}
            className="btn-primary w-full cursor-pointer"
          >
            Tambah Tantangan
          </button>
        </div>
        
        {challenges.length === 0 ? (
          <div className="text-center py-4 text-neutral-500 text-sm italic">
            Tidak ada tantangan keyakinan yang tercatat
          </div>
        ) : (
          <div className="space-y-2">
            {challenges.map(challenge => (
              <div 
                key={challenge.id} 
                className={`p-3 rounded-lg flex items-start gap-3 ${
                  challenge.resolved 
                    ? 'bg-green-50 border border-green-100' 
                    : 'bg-white border border-neutral-200'
                }`}
              >
                {challenge.resolved ? (
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                    ✓
                  </span>
                ) : (
                  <FaExclamationTriangle className="w-6 h-6 text-yellow-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className={`text-sm ${challenge.resolved ? 'line-through text-neutral-500' : ''}`}>
                    {challenge.text}
                  </p>
                </div>
                <button 
                  onClick={() => toggleChallengeResolved(challenge.id)}
                  className={`text-xs px-2 py-1 rounded cursor-pointer ${
                    challenge.resolved
                      ? 'bg-neutral-200 text-neutral-700'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {challenge.resolved ? 'Tandai Belum Teratasi' : 'Tandai Teratasi'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-secondary-50 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Tips Menghilangkan Keraguan</h3>
        <ul className="text-sm space-y-2 list-disc list-inside">
          <li>Mulai dengan tujuan kecil untuk membangun keyakinan</li>
          <li>Catat dan ingat setiap keberhasilan komunikasi subyektif</li>
          <li>Baca kisah sukses dari orang lain yang berhasil</li>
          <li>Praktikkan secara konsisten, minimal 21 hari berturut-turut</li>
          <li>Ingat bahwa keraguan adalah penghalang utama keberhasilan</li>
        </ul>
      </div>
    </div>
  );
}