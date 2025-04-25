import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  
  // Add a notification
  const addNotification = (notification) => {
    const id = Date.now();
    setNotifications([
      ...notifications, 
      { 
        id, 
        ...notification, 
        read: false, 
        date: new Date() 
      }
    ]);
    
    // Auto-remove after 5 seconds if it's a toast notification
    if (notification.type === 'toast') {
      setTimeout(() => {
        removeNotification(id);
      }, 5000);
    }
    
    return id;
  };
  
  // Remove a notification
  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  
  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };
  
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        markAsRead
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}