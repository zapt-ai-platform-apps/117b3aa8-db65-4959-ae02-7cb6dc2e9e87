import React, { useState } from 'react';
import { FaRegLightbulb, FaHandHoldingHeart, FaHistory, FaPlus } from 'react-icons/fa';

const CharityModule = () => {
  const [charities, setCharities] = useState([
    { id: 1, name: 'Masjid Terdekat', description: 'Donasi untuk pembangunan atau pemeliharaan masjid' },
    { id: 2, name: 'Anak Yatim', description: 'Bantuan pendidikan dan kebutuhan anak yatim' },
    { id: 3, name: 'Fakir Miskin', description: 'Bantuan makanan dan kebutuhan pokok untuk fakir miskin' },
    { id: 4, name: 'Lembaga Pendidikan', description: 'Donasi untuk lembaga pendidikan Islam' },
    { id: 5, name: 'Bencana Alam', description: 'Bantuan untuk korban bencana alam' }
  ]);
  
  const [charityLogs, setCharityLogs] = useState([]);
  const [showAddLog, setShowAddLog] = useState(false);
  const [newLog, setNewLog] = useState({
    charityId: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });
  
  const handleAddLog = () => {
    if (newLog.charityId && newLog.amount) {
      const charity = charities.find(c => c.id.toString() === newLog.charityId);
      
      setCharityLogs([
        ...charityLogs,
        {
          id: Date.now(),
          charityName: charity.name,
          ...newLog,
          amount: parseFloat(newLog.amount)
        }
      ]);
      
      setNewLog({
        charityId: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        notes: ''
      });
      
      setShowAddLog(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Modul Sedekah</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <div className="flex items-start gap-3 mb-4">
          <FaRegLightbulb className="text-yellow-500 text-xl mt-1" />
          <div>
            <h3 className="font-bold mb-1">Keutamaan Sedekah dalam PPA</h3>
            <p className="text-sm text-neutral-700">
              Sedekah adalah cara paling cepat untuk mendapatkan pertolongan Allah. 
              Dalam Pola Pertolongan Allah (PPA), sedekah disebut sebagai "Batas Getar Bawah" atau 
              "Sedekah yang Bikin NGERI" karena keajaibannya yang sering tak terduga.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-3 rounded-lg mb-4">
          <h4 className="font-medium text-sm mb-2">Manfaat Sedekah dalam Pola Pertolongan Allah:</h4>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Mempercepat datangnya pertolongan Allah</li>
            <li>Menolak bala dan musibah</li>
            <li>Membuka pintu rezeki yang tidak disangka-sangka</li>
            <li>Menghapus dosa dan kesalahan</li>
            <li>Melipatgandakan pahala dan kebaikan</li>
          </ul>
        </div>
        
        <div className="text-sm italic text-neutral-600 border-l-4 border-secondary-500 pl-3 py-1">
          "Sedekah itu tidak pernah mengurangi harta. Justru Allah akan menggantinya dengan yang lebih baik."
        </div>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Catatan Sedekah</h3>
          <button 
            onClick={() => setShowAddLog(true)}
            className="text-secondary-600 flex items-center gap-1 text-sm cursor-pointer"
          >
            <FaPlus size={12} /> <span>Tambah</span>
          </button>
        </div>
        
        {showAddLog ? (
          <div className="bg-white p-3 rounded-lg mb-4">
            <h4 className="font-medium text-sm mb-3">Catat Sedekah Baru</h4>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Tujuan Sedekah</label>
                <select 
                  className="input-field"
                  value={newLog.charityId}
                  onChange={(e) => setNewLog({...newLog, charityId: e.target.value})}
                >
                  <option value="">Pilih tujuan sedekah</option>
                  {charities.map(charity => (
                    <option key={charity.id} value={charity.id}>{charity.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1">Jumlah</label>
                <input 
                  type="number" 
                  className="input-field"
                  placeholder="Jumlah dalam Rupiah"
                  value={newLog.amount}
                  onChange={(e) => setNewLog({...newLog, amount: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1">Tanggal</label>
                <input 
                  type="date" 
                  className="input-field"
                  value={newLog.date}
                  onChange={(e) => setNewLog({...newLog, date: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1">Catatan</label>
                <textarea 
                  className="input-field h-16"
                  placeholder="Catatan tentang sedekah ini..."
                  value={newLog.notes}
                  onChange={(e) => setNewLog({...newLog, notes: e.target.value})}
                ></textarea>
              </div>
              
              <div className="flex gap-2 pt-2">
                <button 
                  onClick={() => setShowAddLog(false)}
                  className="btn-outline flex-1 cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  onClick={handleAddLog}
                  className="btn-primary flex-1 cursor-pointer"
                  disabled={!newLog.charityId || !newLog.amount}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        ) : (
          charityLogs.length === 0 ? (
            <div className="bg-white p-6 rounded-lg border border-dashed border-neutral-300 text-center">
              <FaHandHoldingHeart className="mx-auto text-3xl text-neutral-400 mb-2" />
              <p className="text-neutral-500 mb-2">Belum ada catatan sedekah</p>
              <p className="text-xs text-neutral-500">
                Catatlah sedekah Anda untuk melacak kebaikan yang telah Anda lakukan
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {charityLogs.map(log => (
                <div key={log.id} className="bg-white p-3 rounded-lg border border-neutral-200">
                  <div className="flex justify-between">
                    <span className="font-medium">{log.charityName}</span>
                    <span className="text-secondary-600 font-bold">Rp {log.amount.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {new Date(log.date).toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  {log.notes && (
                    <div className="mt-2 text-sm text-neutral-600 bg-neutral-50 p-2 rounded">
                      {log.notes}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex justify-center pt-2">
                <button className="flex items-center gap-1 text-neutral-500 text-sm cursor-pointer">
                  <FaHistory size={12} /> <span>Lihat semua riwayat</span>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CharityModule;