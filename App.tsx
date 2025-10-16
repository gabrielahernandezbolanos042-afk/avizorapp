import React, { useState } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import AboutCTA from './components/AboutCTA';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

const App: React.FC = () => {
  // Muestra el modal de inicio de sesión al cargar la página.
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);

  const handleOpenLoginModal = () => setLoginModalOpen(true);
  const handleCloseLoginModal = () => setLoginModalOpen(false);

  return (
    <div className="bg-[#0D1B2A] text-gray-200 antialiased">
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      <Header onLoginClick={handleOpenLoginModal} />
      <main>
        <Features />
        <AboutCTA />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
