import React from 'react';

export function ProgressTracker() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-600">
        Anda belum memiliki data kemajuan. Mulai praktik komunikasi subyektif dan PPA untuk melihat kemajuan Anda di sini.
      </p>
      
      <button className="btn-primary w-full flex justify-center items-center cursor-pointer">
        Mulai Praktik Baru
      </button>
    </div>
  );
}