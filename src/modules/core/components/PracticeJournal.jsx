import React, { useState } from 'react';

export function PracticeJournal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  
  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const entry = {
        id: Date.now(),
        text: newEntry,
        date: new Date().toLocaleDateString('id-ID', {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      
      setEntries([entry, ...entries]);
      setNewEntry('');
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <textarea 
          className="input-field h-24 resize-none"
          placeholder="Tuliskan pengalaman atau hasil praktik Anda di sini..."
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        ></textarea>
        <button 
          className="btn-primary w-full cursor-pointer"
          onClick={handleAddEntry}
        >
          Tambah Catatan
        </button>
      </div>
      
      <div className="space-y-3 mt-4">
        {entries.length === 0 ? (
          <p className="text-sm text-neutral-500 text-center italic">
            Belum ada catatan jurnal. Mulai catat pengalaman praktik Anda.
          </p>
        ) : (
          entries.map(entry => (
            <div key={entry.id} className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
              <p className="text-sm">{entry.text}</p>
              <p className="text-xs text-neutral-500 mt-2">{entry.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}