import React, { useRef, useState, useContext } from 'react';
import { Layout, Menu } from 'antd';
import { AuthContext } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const { Header } = Layout;

import {
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

// const menuItems = [
//   { key: '1', label: 'Inicio' },
//   { key: '2', label: 'Acerca de' },
//   { key: '3', label: 'Contacto' },
// ];

// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
const Navbar = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const menuRef = useRef(null);

  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);

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

  const handleLogin2 = (values) => {
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

  // const handleMenuClick = () => {
  //   // Acceder al nodo del menú usando la referencia
  //   const menuNode = menuRef.current;
  //   // Hacer algo con el nodo...
  // };

  const menuItems = [
    {
      key: 'home',
      label: 'Inicio',
    },
    {
      key: 'loggedout',
      label: 'Usuario',
      icon: <UserOutlined />,
      visible: !isLoggedIn,
      children: [
        {
          key: 'login',
          label: 'Iniciar sesión',
          icon: <LoginOutlined />,
          onClick: showLoginModal,
          visible: !isLoggedIn,
        },
        {
          key: 'register',
          label: 'Registrarse',
          icon: <UserAddOutlined />,
          onClick: showRegisterModal,
          visible: !isLoggedIn,
        },
      ],
    },
    {
      key: 'user',
      label: 'Usuario',
      icon: <UserOutlined />,
      visible: isLoggedIn,
      children: [
        {
          key: 'profile',
          label: 'Perfil',
          icon: <UserOutlined />,
        },
        {
          key: 'logout',
          label: 'Cerrar sesión',
          icon: <LogoutOutlined />,
          onClick: handleLogout,
        },
      ],
    },
  ];

  return (
    <Layout className="navbar">
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={menuItems}
          ref={menuRef}
        ></Menu>       
      </Header>
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
    </Layout>
  );
};

export default Navbar;
