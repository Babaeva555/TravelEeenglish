import React from 'react';
import Header from './components/Header';
import ForWhom from './components/ForWhom';
import Program from './components/Program';
import Features from './components/Features';
import InfoCards from './components/InfoCards';
import Enrollment from './components/Enrollment';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <>
      <div className="bg-atmosphere"></div>
      <div className="runway-lights"></div>
      <div className="container">
        <Header />
        <ForWhom />
        <Program />
        <Features />
        <InfoCards />
        <Enrollment />
        <Footer />
      </div>
    </>
  );
}

export default App;