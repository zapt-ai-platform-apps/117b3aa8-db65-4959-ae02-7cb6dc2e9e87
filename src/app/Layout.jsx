import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BottomNavigation } from '@/modules/core/components/BottomNavigation';
import { Header } from '@/modules/core/components/Header';
import { Footer } from '@/modules/core/components/Footer';

export function Layout() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-auto pb-16">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="page-container"
        >
          <Outlet />
        </motion.div>
      </main>
      <BottomNavigation />
      <Footer />
    </div>
  );
}