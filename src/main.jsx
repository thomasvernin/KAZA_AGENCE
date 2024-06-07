import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

// Utilisation de createRoot pour le rendu de l'application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


