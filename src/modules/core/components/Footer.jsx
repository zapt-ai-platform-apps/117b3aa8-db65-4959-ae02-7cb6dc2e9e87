import React from 'react';

export function Footer() {
  return (
    <footer className="w-full py-4 px-6 bg-white border-t border-neutral-200 mt-auto">
      <div className="flex justify-center items-center">
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