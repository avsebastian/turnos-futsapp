import React, { useRef, useState } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const menuItems = [
  { key: '1', label: 'Inicio' },
  { key: '2', label: 'Acerca de' },
  { key: '3', label: 'Contacto' },
];

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const menuRef = useRef(null);

  // const handleMenuClick = () => {
  //   // Acceder al nodo del menú usando la referencia
  //   const menuNode = menuRef.current;
  //   // Hacer algo con el nodo...
  // };
  return (
    <Layout className="navbar">
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          ref={menuRef}
        ></Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
