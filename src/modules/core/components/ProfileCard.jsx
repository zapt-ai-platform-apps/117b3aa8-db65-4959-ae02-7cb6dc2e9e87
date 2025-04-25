import React from 'react';

export function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-soft p-4 text-center">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-3xl font-bold">
          {user.name.charAt(0)}
        </div>
      </div>
      <h2 className="text-xl font-bold mt-3">{user.name}</h2>
      <p className="text-sm text-neutral-500">Bergabung sejak {user.joined}</p>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-primary-50 p-3 rounded-lg">
          <p className="text-2xl font-bold text-primary-700">{user.practices}</p>
          <p className="text-xs text-neutral-600">Praktik</p>
        </div>
        <div className="bg-secondary-50 p-3 rounded-lg">
          <p className="text-2xl font-bold text-secondary-700">{user.goals.length}</p>
          <p className="text-xs text-neutral-600">Tujuan</p>
        </div>
      </div>
      
      <button className="btn-outline mt-4 w-full">Edit Profil</button>
    </div>
  );
}