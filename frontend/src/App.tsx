import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/sections';
import { HomePage, AboutPage } from './pages';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
