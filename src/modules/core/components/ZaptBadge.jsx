import React from 'react';

export default function ZaptBadge() {
  return (
    <div className="fixed bottom-20 right-4 z-10">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full shadow-md flex items-center"
      >
        Made on ZAPT
      </a>
    </div>
  );
}