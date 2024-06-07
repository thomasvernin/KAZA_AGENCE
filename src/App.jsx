import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'; // Correction ici

import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;

