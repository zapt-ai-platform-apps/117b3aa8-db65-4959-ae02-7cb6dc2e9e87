import React, { useState } from 'react';
import { FaPen, FaHandPaper } from 'react-icons/fa';

const TitipConcept = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [titipText, setTitipText] = useState('');
  
  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setGoals([
        ...goals,
        {
          id: Date.now(),
          text: newGoal,
          status: 'active',
          titipDate: new Date().toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      ]);
      setNewGoal('');
    }
  };
  
  const updateGoalStatus = (id, status) => {
    setGoals(
      goals.map(goal => 
        goal.id === id 
          ? { ...goal, status } 
          : goal
      )
    );
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Konsep "Titip"</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Memahami Konsep "Titip"</h3>
        <p className="text-sm text-neutral-700 mb-4">
          Dalam Pola Pertolongan Allah (PPA), "titip" adalah konsep menyerahkan hasil akhir ikhtiar 
          kita kepada Allah setelah berusaha maksimal. Kita melakukan yang terbaik dalam usaha kita, 
          lalu mempercayakan hasilnya kepada Allah dengan keyakinan bahwa Dia akan memberikan 
          yang terbaik untuk kita.
        </p>
        
        <div className="p-3 bg-secondary-50 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Langkah-langkah "Titip":</h4>
          <ol className="text-sm list-decimal list-inside space-y-2">
            <li>Lakukan ikhtiar (usaha) maksimal</li>
            <li>Berdoa dengan sungguh-sungguh</li>
            <li>Serahkan hasil akhirnya kepada Allah dengan tulus</li>
            <li>Terima apapun hasilnya dengan ridha dan syukur</li>
            <li>Yakin bahwa hasil yang diberikan Allah adalah yang terbaik</li>
          </ol>
        </div>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Praktik Konsep "Titip"</h3>
        
        <div className="bg-white p-3 rounded-lg mb-4">
          <h4 className="font-medium text-sm mb-2">Tuliskan Tujuan Anda</h4>
          <div className="space-y-3">
            <input
              type="text"
              className="input-field"
              placeholder="Tuliskan tujuan yang ingin Anda titipkan..."
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
            />
            <button
              onClick={handleAddGoal}
              className="btn-secondary w-full cursor-pointer"
              disabled={!newGoal.trim()}
            >
              Tambahkan Tujuan
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">Kalimat "Titip"</h4>
          <div className="bg-white p-3 rounded-lg">
            <textarea
              className="input-field h-24"
              placeholder="Ya Allah, setelah berikhtiar untuk [tujuan], saya titipkan hasilnya kepada-Mu. Berikanlah hasil terbaik menurut-Mu, yang bermanfaat bagi diriku dan orang lain..."
              value={titipText}
              onChange={(e) => setTitipText(e.target.value)}
            ></textarea>
            
            <div className="flex justify-end mt-2">
              <button className="text-secondary-600 text-sm flex items-center gap-1 cursor-pointer">
                <FaPen size={12} /> <span>Dapatkan Contoh</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Tujuan yang "Dititipkan"</h3>
        
        {goals.length === 0 ? (
          <div className="text-center py-6 bg-white rounded-lg border border-dashed border-neutral-300">
            <FaHandPaper className="mx-auto text-3xl text-neutral-400 mb-2" />
            <p className="text-neutral-500">Belum ada tujuan yang dititipkan</p>
          </div>
        ) : (
          <div className="space-y-3">
            {goals.map(goal => (
              <div 
                key={goal.id} 
                className={`p-3 rounded-lg border ${
                  goal.status === 'fulfilled'
                    ? 'bg-green-50 border-green-200'
                    : goal.status === 'different'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-white border-neutral-200'
                }`}
              >
                <p className="font-medium">{goal.text}</p>
                <p className="text-xs text-neutral-500 mt-1">Dititipkan pada: {goal.titipDate}</p>
                
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => updateGoalStatus(goal.id, 'active')}
                    className={`text-xs px-2 py-1 rounded flex-1 cursor-pointer ${
                      goal.status === 'active'
                        ? 'bg-neutral-200 text-neutral-700'
                        : 'bg-white text-neutral-600 border border-neutral-300'
                    }`}
                  >
                    Dalam Proses
                  </button>
                  <button
                    onClick={() => updateGoalStatus(goal.id, 'fulfilled')}
                    className={`text-xs px-2 py-1 rounded flex-1 cursor-pointer ${
                      goal.status === 'fulfilled'
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-green-600 border border-green-300'
                    }`}
                  >
                    Terkabul
                  </button>
                  <button
                    onClick={() => updateGoalStatus(goal.id, 'different')}
                    className={`text-xs px-2 py-1 rounded flex-1 cursor-pointer ${
                      goal.status === 'different'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-blue-600 border border-blue-300'
                    }`}
                  >
                    Hasil Lain
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TitipConcept;