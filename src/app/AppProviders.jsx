import React from 'react';
import { UserProvider } from '@/modules/core/context/UserContext';
import { PracticeProvider } from '@/modules/core/context/PracticeContext';
import { NotificationProvider } from '@/modules/core/context/NotificationContext';

export function AppProviders({ children }) {
  return (
    <UserProvider>
      <PracticeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </PracticeProvider>
    </UserProvider>
  );
}