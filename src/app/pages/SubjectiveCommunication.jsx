import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import VisualizationGuide from '@/modules/subjective-communication/components/VisualizationGuide';
import AffirmationCreator from '@/modules/subjective-communication/components/AffirmationCreator';
import AlphaStateGuide from '@/modules/subjective-communication/components/AlphaStateGuide';
import PracticeScheduler from '@/modules/subjective-communication/components/PracticeScheduler';
import { BeliefTracker } from '@/modules/subjective-communication/components/BeliefTracker';
import { MiscallTechnique } from '@/modules/subjective-communication/components/MiscallTechnique';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SubjectiveCommunicationPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const tabs = [
    { name: 'Visualisasi', component: <VisualizationGuide /> },
    { name: 'Afirmasi', component: <AffirmationCreator /> },
    { name: 'Kondisi Alfa', component: <AlphaStateGuide /> },
    { name: 'Jadwal', component: <PracticeScheduler /> },
    { name: 'Keyakinan', component: <BeliefTracker /> },
    { name: 'Miscall', component: <MiscallTechnique /> },
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Komunikasi Subyektif</h1>
        <p className="text-neutral-600 text-sm">
          Pelajari dan praktikkan teknik-teknik komunikasi subyektif untuk membantu mewujudkan tujuan pribadi melalui kekuatan pikiran
        </p>
      </div>
      
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-primary-50 p-1 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                classNames(
                  'w-full py-2 text-sm font-medium leading-5 rounded-lg whitespace-nowrap',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-50 ring-primary-500',
                  selected
                    ? 'bg-white shadow text-primary-600'
                    : 'text-neutral-600 hover:bg-white/[0.25] hover:text-primary-700'
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-4 shadow-soft',
                'focus:outline-none'
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab.component}
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SubjectiveCommunicationPage;