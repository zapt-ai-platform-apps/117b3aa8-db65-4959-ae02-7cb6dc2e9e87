import React, { useState, useEffect } from 'react';
import { FaPray, FaCheckCircle, FaClock } from 'react-icons/fa';

const WorshipReminder = () => {
  const [prayerTimes, setPrayerTimes] = useState([
    { name: 'Subuh', time: '04:30', completed: false },
    { name: 'Dzuhur', time: '12:00', completed: false },
    { name: 'Ashar', time: '15:30', completed: false },
    { name: 'Maghrib', time: '18:00', completed: false },
    { name: 'Isya', time: '19:30', completed: false },
  ]);
  
  const [currentTime, setCurrentTime] = useState('');
  const [nextPrayer, setNextPrayer] = useState('');
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(formattedTime);
      
      // Find next prayer
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeValue = currentHour * 60 + currentMinute;
      
      let nextPrayerInfo = { name: '', timeUntil: Infinity };
      
      prayerTimes.forEach(prayer => {
        const [prayerHour, prayerMinute] = prayer.time.split(':').map(Number);
        const prayerTimeValue = prayerHour * 60 + prayerMinute;
        
        let timeUntil = prayerTimeValue - currentTimeValue;
        if (timeUntil < 0) {
          timeUntil += 24 * 60; // Add a day
        }
        
        if (timeUntil < nextPrayerInfo.timeUntil) {
          nextPrayerInfo = {
            name: prayer.name,
            timeUntil
          };
        }
      });
      
      const hoursUntil = Math.floor(nextPrayerInfo.timeUntil / 60);
      const minutesUntil = nextPrayerInfo.timeUntil % 60;
      
      setNextPrayer(`${nextPrayerInfo.name} dalam ${hoursUntil}j ${minutesUntil}m`);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [prayerTimes]);
  
  const toggleCompleted = (index) => {
    const updatedTimes = [...prayerTimes];
    updatedTimes[index].completed = !updatedTimes[index].completed;
    setPrayerTimes(updatedTimes);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Pengingat Ibadah</h2>
      
      <div className="bg-secondary-50 p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaClock className="text-secondary-600" />
          <div>
            <div className="font-medium">Waktu Sekarang</div>
            <div className="text-sm">{currentTime}</div>
          </div>
        </div>
        <div className="text-sm font-medium text-secondary-700">{nextPrayer}</div>
      </div>
      
      <div className="space-y-3">
        {prayerTimes.map((prayer, index) => (
          <div 
            key={prayer.name}
            className={`p-3 rounded-lg flex items-center justify-between ${
              prayer.completed 
                ? 'bg-green-50 border border-green-100' 
                : 'bg-white border border-neutral-200'
            }`}
            onClick={() => toggleCompleted(index)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                prayer.completed 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-secondary-100 text-secondary-600'
              }`}>
                <FaPray />
              </div>
              <div>
                <div className="font-medium">{prayer.name}</div>
                <div className="text-xs text-neutral-500">{prayer.time}</div>
              </div>
            </div>
            <div>
              {prayer.completed ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-neutral-300"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Meningkatkan Kualitas Ibadah</h3>
        <ul className="text-sm space-y-2">
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Fokus pada kehadiran Allah saat beribadah</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Pahami makna bacaan dalam shalat</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Perlambat gerakan untuk meningkatkan khusyu</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Tambahkan dzikir dan doa setelah shalat</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary-600 font-bold">•</span>
            <span>Tambahkan shalat sunnah untuk melengkapi shalat wajib</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-neutral-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Refleksi Harian</h3>
        <textarea 
          className="input-field h-24 mt-2"
          placeholder="Tuliskan refleksi ibadah Anda hari ini..."
        ></textarea>
      </div>
    </div>
  );
};

export default WorshipReminder;