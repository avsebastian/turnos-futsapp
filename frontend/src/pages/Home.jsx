import React, { useState } from "react";

import NavBar from "../components/NavBar";
import HeroSection from '../components/HeroSection'
import AboutSection from "../components/AboutSection";
import FieldSoccerSection from "../components/FieldSoccerSection";

import LoginModal from "../components/LoginModal";

export function Home() {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return(
        <>
            <NavBar isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen}/>
            <HeroSection />
            <AboutSection />
            <FieldSoccerSection />

            {isLoginModalOpen && <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen}/>}
        </>
    ) 
}