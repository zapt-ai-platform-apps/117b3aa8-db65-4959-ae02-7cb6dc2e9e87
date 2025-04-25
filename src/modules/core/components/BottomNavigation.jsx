import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaPray, FaHeart, FaUser } from 'react-icons/fa';

export function BottomNavigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Beranda', icon: <FaHome size={20} /> },
    { path: '/subjective-communication', label: 'Komunikasi', icon: <FaBook size={20} /> },
    { path: '/ppa', label: 'PPA', icon: <FaPray size={20} /> },
    { path: '/integration', label: 'Integrasi', icon: <FaHeart size={20} /> },
    { path: '/profile', label: 'Profil', icon: <FaUser size={20} /> },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-soft flex justify-around items-center h-16 z-10">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center p-2 rounded transition-colors ${
              isActive ? 'text-primary-600' : 'text-neutral-500 hover:text-primary-500'
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}