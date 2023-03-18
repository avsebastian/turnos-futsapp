import styled from "styled-components"; 
import { NavLink as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { MenuOutlined } from "@ant-design/icons";


export const Nav = styled.nav`
    background: #f2f4f5;
    heigth: 80px;
//margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    //padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;    
`

export const NavLogo = styled(LinkR)`
    @media screen and (max-width: 768px) {
        margin: auto;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li `
    height: 80px;

`

export const NavLinks = styled(LinkS) `
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
