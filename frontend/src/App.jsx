import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductPreviews from './components/ProductPreviews';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <ProductPreviews />
      <Benefits />
      <CTA />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;