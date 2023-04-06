import React, { useState } from 'react';

import NavBar from '../components/NavBar';
// import Navbar from '../components/Navbar';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FieldSoccerSection from '../components/FieldSoccerSection';

import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { Button, Layout } from 'antd';

const { Content, Footer } = Layout;

export function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
    setIsLoginModalOpen(false);
  };

  const handleRegisterModalCancel = () => {
    setRegisterModalOpen(false);
  };
  const handleRegisterModalClick = () => {
    setLoginModalOpen(false);
    setIsLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  const handleLoginModalClick = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
    setIsLoginModalOpen(true);
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
    <>
      <NavBar
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
      <HeroSection />
      <AboutSection />
      <FieldSoccerSection />

      <Layout className="layout">
        {/* <Navbar /> */}
        <Content
          style={{
            padding: '0 50px',
          }}
        >
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
                open={isLoginModalOpen}
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
      </Layout>

      {isLoginModalOpen && (
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}
    </>
  );
}
