import React, { useState } from 'react';

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FieldSoccerSection from '../components/FieldSoccerSection';


export function Home() {


  const [loading, setLoading] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <>
      <NavBar
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
      <HeroSection />
      <AboutSection />
      <FieldSoccerSection />
    </>
  );
}
