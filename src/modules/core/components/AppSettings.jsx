import React, { useState } from 'react';
import { FaBell, FaMoon, FaSun, FaRegQuestionCircle } from 'react-icons/fa';

export function AppSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    reminders: true
  });
  
  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <FaBell className="text-primary-600" />
          <span>Notifikasi</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
          />
          <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          {settings.darkMode ? <FaMoon className="text-secondary-600" /> : <FaSun className="text-yellow-500" />}
          <span>Mode Gelap</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
          <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <FaRegQuestionCircle className="text-primary-600" />
          <span>Pengingat Praktik</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={settings.reminders}
            onChange={() => handleToggle('reminders')}
          />
          <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
        </label>
      </div>
      
      <div className="mt-4 pt-4 border-t border-neutral-200">
        <h3 className="font-bold text-sm mb-2">Tentang Aplikasi</h3>
        <p className="text-xs text-neutral-600">
          Spiritual Communication App v1.0.0<br />
          Aplikasi untuk memberdayakan pengguna dalam mewujudkan impian melalui sinergi komunikasi subyektif dan prinsip spiritual Islam.
        </p>
      </div>
    </div>
  );
}