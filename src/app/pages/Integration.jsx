import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaBookOpen, FaLightbulb } from 'react-icons/fa';
import IntegrationGuide from '@/modules/integration/components/IntegrationGuide';
import PracticeExamples from '@/modules/integration/components/PracticeExamples';
import SuccessStories from '@/modules/integration/components/SuccessStories';
import { Card } from '@/modules/core/components/Card';

const IntegrationPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Integrasi Pendekatan</h1>
        <p className="text-neutral-600 text-sm">
          Pelajari cara mengintegrasikan komunikasi subyektif dengan prinsip-prinsip Pola Pertolongan Allah secara harmonis
        </p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100 shadow-sm">
        <p className="text-sm italic text-neutral-700">
          "Komunikasi subyektif harus dilakukan dengan niat yang baik dan selaras dengan nilai-nilai agama, sejalan dengan konsep win-win solution dan membantu orang lain. Keberhasilan akhir adalah atas izin dan kehendak Allah semata."
        </p>
      </div>
      
      <div className="space-y-4 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card
            icon={<FaBookOpen className="text-primary-600" size={24} />}
            title="Panduan Integrasi"
            description="Pelajari cara menyelaraskan teknik komunikasi subyektif dengan nilai-nilai spiritual Islam"
            content={<IntegrationGuide />}
            expanded={true}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            icon={<FaLightbulb className="text-yellow-500" size={24} />}
            title="Contoh Praktik"
            description="Contoh konkret cara menerapkan kedua pendekatan dalam berbagai situasi kehidupan"
            content={<PracticeExamples />}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card
            icon={<FaHandHoldingHeart className="text-red-500" size={24} />}
            title="Kisah Inspiratif"
            description="Kisah inspiratif penerapan kedua pendekatan dalam kehidupan nyata"
            content={<SuccessStories />}
          />
        </motion.div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-soft">
        <h2 className="font-bold text-lg mb-2">Hal Penting untuk Diingat</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-neutral-700">
          <li>Mulai setiap sesi komunikasi subyektif dengan doa dan niat baik</li>
          <li>Pastikan tujuan Anda selaras dengan nilai-nilai spiritual dan bermanfaat bagi orang lain</li>
          <li>Setelah melakukan visualisasi dan afirmasi, "titipkan" hasilnya kepada Allah</li>
          <li>Kedekatan dengan Allah melalui ibadah memperkuat efektivitas komunikasi subyektif</li>
          <li>Yakinlah bahwa hasil akhir adalah yang terbaik menurut Allah, bukan menurut keinginan pribadi</li>
        </ul>
      </div>
    </div>
  );
};

export default IntegrationPage;