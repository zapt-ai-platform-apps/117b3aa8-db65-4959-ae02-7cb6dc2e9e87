import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaPray, FaHeart } from 'react-icons/fa';
import { Card } from '@/modules/core/components/Card';
import { QuoteBox } from '@/modules/core/components/QuoteBox';

const HomePage = () => {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Spiritual Communication App</h1>
        <p className="text-neutral-600">
          Memberdayakan Anda untuk mewujudkan impian melalui sinergi komunikasi subyektif dan prinsip spiritual Islam
        </p>
      </div>
      
      <QuoteBox 
        quote="Mengintegrasikan kekuatan pikiran dengan ketaatan kepada Allah untuk mencapai kesejahteraan lahir dan batin"
        author="Spiritual Communication App"
      />
      
      <div className="mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link to="/subjective-communication">
            <Card 
              icon={<FaBook className="text-primary-600" size={24} />}
              title="Komunikasi Subyektif"
              description="Pelajari teknik komunikasi subyektif untuk membantu mewujudkan tujuan pribadi melalui visualisasi dan afirmasi positif"
            />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/ppa">
            <Card 
              icon={<FaPray className="text-secondary-600" size={24} />}
              title="Pola Pertolongan Allah (PPA)"
              description="Pelajari dan terapkan prinsip Pola Pertolongan Allah untuk mendekatkan diri kepada-Nya dan mendapatkan pertolongan-Nya"
            />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/integration">
            <Card 
              icon={<FaHeart className="text-red-500" size={24} />}
              title="Integrasi Pendekatan"
              description="Pelajari cara mengintegrasikan komunikasi subyektif dengan prinsip Pola Pertolongan Allah dalam kehidupan sehari-hari"
            />
          </Link>
        </motion.div>
      </div>
      
      <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
        <h2 className="font-bold text-lg mb-2">Mari Mulai Perjalanan Anda</h2>
        <p className="text-sm text-neutral-700">
          Aplikasi ini dirancang untuk membimbing Anda langkah demi langkah dalam mempraktikkan teknik komunikasi subyektif dengan tetap berpegang pada nilai-nilai spiritual Islam. Pilih salah satu area di atas untuk memulai.
        </p>
      </div>
    </div>
  );
};

export default HomePage;