import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import WorshipReminder from '@/modules/ppa/components/WorshipReminder';
import PPAMotivation from '@/modules/ppa/components/PPAMotivation';
import LoveMessageFinder from '@/modules/ppa/components/LoveMessageFinder';
import IntentionExpander from '@/modules/ppa/components/IntentionExpander';
import CharityModule from '@/modules/ppa/components/CharityModule';
import TitipConcept from '@/modules/ppa/components/TitipConcept';
import MaximumFaithEffort from '@/modules/ppa/components/MaximumFaithEffort';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const PPAPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const tabs = [
    { name: 'Ibadah', component: <WorshipReminder /> },
    { name: 'Motivasi', component: <PPAMotivation /> },
    { name: 'Pesan Cinta', component: <LoveMessageFinder /> },
    { name: 'Niat', component: <IntentionExpander /> },
    { name: 'Sedekah', component: <CharityModule /> },
    { name: 'Titip', component: <TitipConcept /> },
    { name: 'Ikhtiar', component: <MaximumFaithEffort /> },
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Pola Pertolongan Allah (PPA)</h1>
        <p className="text-neutral-600 text-sm">
          Pelajari dan terapkan prinsip-prinsip Pola Pertolongan Allah untuk mendekatkan diri kepada Allah dan mendapatkan pertolongan-Nya
        </p>
      </div>
      
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-secondary-50 p-1 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                classNames(
                  'w-full py-2 text-sm font-medium leading-5 rounded-lg whitespace-nowrap',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-secondary-50 ring-secondary-500',
                  selected
                    ? 'bg-white shadow text-secondary-600'
                    : 'text-neutral-600 hover:bg-white/[0.25] hover:text-secondary-700'
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

export default PPAPage;