import React, { useState } from 'react';

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FieldSoccerSection from '../components/FieldSoccerSection';

import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

export function Home() {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLoginModal = () => setIsLoginModalOpen((prevState) => !prevState);
  const handleRegisterModal = () =>
    setIsRegisterModalOpen((prevState) => !prevState);
  return (
    <>
      <NavBar
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
      <HeroSection />
      <AboutSection />
      <FieldSoccerSection />

      {isLoginModalOpen && (
        <LoginModal
          handleCloseLogin={handleLoginModal}
          isLoginModalOpen={isLoginModalOpen}
          handleRegister={handleRegisterModal}
          isRegisterModalOpen={isRegisterModalOpen}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          handleCloseRegister={handleRegisterModal}
          isRegisterModalOpen={isRegisterModalOpen}
          handleLogin={handleLoginModal}
          isLoginModalOpen={isLoginModalOpen}
        />
      )}
    </>
  );
}
