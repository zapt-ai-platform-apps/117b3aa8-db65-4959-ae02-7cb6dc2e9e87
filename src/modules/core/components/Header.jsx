import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';
  
  return (
    <header className="bg-white shadow-sm py-4 px-4 sticky top-0 z-10">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        {!isHomePage ? (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-neutral-600 hover:text-primary-600 transition-colors cursor-pointer"
            aria-label="Kembali"
          >
            <FaArrowLeft />
          </button>
        ) : (
          <div className="text-lg font-bold text-primary-600">
            SpiritComm
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
            alt="App logo" 
            className="w-8 h-8"
          />
        </div>
      </div>
    </header>
  );
}