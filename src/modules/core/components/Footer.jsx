import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 px-6 bg-white border-t border-neutral-200 mt-auto">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-sm text-neutral-600">
          &copy; {currentYear} Spiritual Communication App
        </p>
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-neutral-600 hover:text-neutral-800 transition-colors"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}