import React, { useState } from "react";
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
  NavBtnLink,
} from "./NavBarElement";
import Sidebar from "../Sidebar";

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <img className="logo" src="/soccer-logo.png" alt="logo" />
            </NavLogo>
             <MobileIcon>
                <MenuOutlined
                onClick={() => {
                    setOpenMenu(true);
                }}
                />
                <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                <NavLinks to="/about">
                    About
                </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="/services">
                    Services
                </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="/contact-us">
                    Contact Us
                </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="/profile">
                    Profile
                </NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/singin"> Iniciar Sesión </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
