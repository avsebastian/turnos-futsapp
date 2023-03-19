import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavBarElement";
import Sidebar from "../Sidebar";
import { Button } from '../ButtonElement'

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>{ 
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/">
                <img className="logo" src="/soccer-logo.png" alt="logo" />
            </NavLogo>
             <MobileIcon>
                <MenuOutlined onClick={() => { setOpenMenu(true) }}
                              style={{color: scrollNav ? '#000' : '#fff'}}
                />
                <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                  <NavLinks to="nosotros" scrollNav={scrollNav}>
                      Nosotros
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/services" scrollNav={scrollNav}>
                      Services
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/contact-us" scrollNav={scrollNav}>
                      Contact Us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/profile" scrollNav={scrollNav}>
                      Profile
                  </NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <Button to="/singin"> Iniciar Sesión </Button>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
