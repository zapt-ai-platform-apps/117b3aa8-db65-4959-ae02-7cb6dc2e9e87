import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export function Card({ icon, title, description, content, expanded = false }) {
  const [isOpen, setIsOpen] = useState(expanded);
  
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden">
      <div 
        className={`p-4 flex items-start gap-3 ${content ? 'cursor-pointer' : ''}`}
        onClick={() => content && setIsOpen(!isOpen)}
      >
        {icon && <div className="mt-1">{icon}</div>}
        <div className="flex-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>
        {content && (
          <button 
            className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            aria-label={isOpen ? "Tutup" : "Buka"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.div>
          </button>
        )}
      </div>
      
      {content && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-neutral-100"
            >
              <div className="p-4">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}