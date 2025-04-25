import React, { useState } from 'react';
import { FaBell, FaPlus, FaTrash, FaCheck } from 'react-icons/fa';

const defaultReminders = [
  { id: 1, time: '22:00', days: [0, 1, 2, 3, 4, 5, 6], label: 'Visualisasi sebelum tidur', active: true },
  { id: 2, time: '06:00', days: [0, 1, 2, 3, 4, 5, 6], label: 'Afirmasi pagi hari', active: true },
];

const PracticeScheduler = () => {
  const [reminders, setReminders] = useState(defaultReminders);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    time: '12:00',
    days: [1, 3, 5],
    label: '',
    active: true
  });
  
  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  
  const toggleDay = (day) => {
    const updatedDays = newReminder.days.includes(day)
      ? newReminder.days.filter(d => d !== day)
      : [...newReminder.days, day];
    
    setNewReminder({
      ...newReminder,
      days: updatedDays
    });
  };
  
  const handleAddReminder = () => {
    if (newReminder.label.trim()) {
      setReminders([
        ...reminders,
        {
          ...newReminder,
          id: Date.now()
        }
      ]);
      setNewReminder({
        time: '12:00',
        days: [1, 3, 5],
        label: '',
        active: true
      });
      setShowAddForm(false);
    }
  };
  
  const toggleReminderActive = (id) => {
    setReminders(
      reminders.map(reminder => 
        reminder.id === id 
          ? { ...reminder, active: !reminder.active } 
          : reminder
      )
    );
  };
  
  const deleteReminder = (id) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Jadwal Praktik</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Pengingat Praktik</h3>
        
        <div className="space-y-3 mb-4">
          {reminders.map(reminder => (
            <div key={reminder.id} className={`p-3 rounded-lg flex items-center justify-between ${
              reminder.active ? 'bg-primary-50 border border-primary-100' : 'bg-neutral-100 border border-neutral-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  reminder.active ? 'bg-primary-100 text-primary-700' : 'bg-neutral-200 text-neutral-500'
                }`}>
                  <FaBell />
                </div>
                <div>
                  <div className="font-medium">{reminder.label}</div>
                  <div className="text-xs text-neutral-600">
                    {reminder.time} • {reminder.days.map(d => dayNames[d]).join(', ')}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => toggleReminderActive(reminder.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    reminder.active 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-neutral-300 text-neutral-600'
                  }`}
                >
                  <FaCheck size={12} />
                </button>
                <button 
                  onClick={() => deleteReminder(reminder.id)}
                  className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center cursor-pointer hover:bg-red-100 hover:text-red-600"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!showAddForm ? (
          <button 
            onClick={() => setShowAddForm(true)}
            className="w-full py-2 border-2 border-dashed border-neutral-300 rounded-lg text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaPlus size={12} /> <span>Tambah Pengingat</span>
          </button>
        ) : (
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Tambah Pengingat Baru</h4>
            
            <div className="space-y-3 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Deskripsi</label>
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Contoh: Visualisasi tujuan"
                  value={newReminder.label}
                  onChange={(e) => setNewReminder({...newReminder, label: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Waktu</label>
                <input 
                  type="time" 
                  className="input-field"
                  value={newReminder.time}
                  onChange={(e) => setNewReminder({...newReminder, time: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Hari</label>
                <div className="flex flex-wrap gap-2">
                  {dayNames.map((day, index) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(index)}
                      className={`w-8 h-8 rounded-full text-sm cursor-pointer ${
                        newReminder.days.includes(index)
                          ? 'bg-primary-600 text-white'
                          : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {day.charAt(0)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setShowAddForm(false)}
                className="btn-outline flex-1 cursor-pointer"
              >
                Batal
              </button>
              <button 
                onClick={handleAddReminder}
                className="btn-primary flex-1 cursor-pointer"
              >
                Tambah
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Jadwal Praktik yang Direkomendasikan</h3>
        <ul className="text-sm space-y-2">
          <li className="flex gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span><strong>Pagi hari:</strong> Praktik afirmasi saat bangun tidur (5-10 menit)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span><strong>Malam hari:</strong> Visualisasi dan afirmasi sebelum tidur (10-15 menit)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span><strong>Tengah malam:</strong> Jika terbangun, lakukan komunikasi subyektif (saat kontak pikiran)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span><strong>Menjelang sore:</strong> Relaksasi singkat dan atur ulang niat (3-5 menit)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeScheduler;