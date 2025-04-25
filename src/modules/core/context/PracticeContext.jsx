import React, { createContext, useState, useContext } from 'react';

const PracticeContext = createContext();

export function PracticeProvider({ children }) {
  const [practices, setPractices] = useState([]);
  const [goals, setGoals] = useState([]);
  const [currentPractice, setCurrentPractice] = useState(null);
  
  // Functions for practice management
  const addPractice = (practice) => {
    setPractices([...practices, { ...practice, id: Date.now(), date: new Date() }]);
  };
  
  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: Date.now(), created: new Date(), completed: false }]);
  };
  
  return (
    <PracticeContext.Provider
      value={{
        practices,
        goals,
        currentPractice,
        setCurrentPractice,
        addPractice,
        addGoal
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
}

export function usePractice() {
  const context = useContext(PracticeContext);
  if (context === undefined) {
    throw new Error('usePractice must be used within a PracticeProvider');
  }
  return context;
}