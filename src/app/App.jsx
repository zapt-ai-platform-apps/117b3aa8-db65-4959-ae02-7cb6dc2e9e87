import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import HomePage from './pages/Home';
import SubjectiveCommunicationPage from './pages/SubjectiveCommunication';
import PPAPage from './pages/PPA';
import IntegrationPage from './pages/Integration';
import ProfilePage from './pages/Profile';

export default function App() {
  console.log('App rendering...');
  
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="subjective-communication" element={<SubjectiveCommunicationPage />} />
            <Route path="ppa" element={<PPAPage />} />
            <Route path="integration" element={<IntegrationPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}