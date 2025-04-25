import React from 'react';
import { useState } from 'react';
import { FaCog, FaRegStickyNote, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { ProfileCard } from '@/modules/core/components/ProfileCard';
import { ProgressTracker } from '@/modules/core/components/ProgressTracker';
import { PracticeJournal } from '@/modules/core/components/PracticeJournal';
import { AppSettings } from '@/modules/core/components/AppSettings';
import { Card } from '@/modules/core/components/Card';

const ProfilePage = () => {
  const [user] = useState({
    name: 'Pengguna',
    joined: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
    practices: 0,
    goals: []
  });
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Profil Saya</h1>
        <p className="text-neutral-600 text-sm">
          Kelola profil, pantau kemajuan, dan catat pengalaman praktik Anda
        </p>
      </div>
      
      <div className="space-y-6">
        <ProfileCard user={user} />
        
        <Card
          icon={<FaChartLine className="text-primary-600" size={24} />}
          title="Kemajuan Saya"
          description="Pantau kemajuan praktik dan pencapaian tujuan Anda"
          content={<ProgressTracker />}
        />
        
        <Card
          icon={<FaRegStickyNote className="text-secondary-600" size={24} />}
          title="Jurnal Praktik"
          description="Catat pengalaman dan hasil praktik komunikasi subyektif dan PPA Anda"
          content={<PracticeJournal />}
        />
        
        <Card
          icon={<FaCog className="text-neutral-600" size={24} />}
          title="Pengaturan Aplikasi"
          description="Sesuaikan pengaturan notifikasi, tampilan, dan preferensi aplikasi"
          content={<AppSettings />}
        />
        
        <button className="btn-outline w-full flex items-center justify-center gap-2 mt-4">
          <FaSignOutAlt />
          <span>Keluar</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;