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
import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import Navbar from '../components/Navbar';

import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const { Content, Footer } = Layout;

const Home = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const [loading, setLoading] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const showLoginModal = () => {
    setLoginModalOpen(true);
  };

  const showRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const handleLoginModalCancel = () => {
    setLoginModalOpen(false);
  };

  const handleRegisterModalCancel = () => {
    setRegisterModalOpen(false);
  };
  const handleRegisterModalClick = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  const handleLoginModalClick = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleLogin = (values) => {
    // TODO: Llamado a la api
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoginModalOpen(false);
    }, 3000);
    console.log(values);
    localStorage.setItem('isLoggedIn', true);
  };
  const handleRegister = (values) => {
    // TODO: Llamado a la api
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegisterModalOpen(false);
    }, 3000);
    console.log(values);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
  };

  // TODO: crear un context authprovider
  const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  return (
    <Layout className="layout">
      <Navbar />
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          // style={{
          //   background: colorBgContainer,
          // }}
        >
          Content
        </div>
        {/* TODO: Estoso botones llevarlo al navbar */}
        {!isLoggedIn() && (
          <>
            <Button type="primary" onClick={showLoginModal}>
              Iniciar sesión
            </Button>
            <Button type="primary" onClick={showRegisterModal}>
              Registrarse
            </Button>
            <LoginModal
              open={loginModalOpen}
              onCancel={handleLoginModalCancel}
              onOk={handleLogin}
              loading={loading}
              onRegisterClick={handleRegisterModalClick}
            />
            <RegisterModal
              open={registerModalOpen}
              onCancel={handleRegisterModalCancel}
              onOk={handleRegister}
              loading={loading}
              onLoginClick={handleLoginModalClick}
            />
          </>
        )}
        {isLoggedIn() && (
          <Button type="primary" onClick={handleLogout}>
            Cerrar Sesion
          </Button>
        )}
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Futsapp
      </Footer>
    </Layout>
  );
};

export default Home;

            {isLoginModalOpen && <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen}/>}
        </>
    ) 
}