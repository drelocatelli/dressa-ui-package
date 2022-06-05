import { AppProps, AppPropsWithTheme } from "../../types/basicTypes";
import styled from 'styled-components';
import React from "react";

const NavbarBrand = ({children = 'Brand'} : AppProps) => <div className="brand">{children}</div>

export default function Navbar(
    {
        darkMode = false, 
        children
    } : AppPropsWithTheme
) {

    return(
        <Nav darkMode={darkMode}>
            {children}
        </Nav>
    );

}

Navbar.Brand = NavbarBrand;

export {Navbar};

const navHeight = '72px';

const Nav = styled.nav<AppPropsWithTheme>`
    ${props => (props.darkMode ? NavTheme.dark : NavTheme.light)};

    display: flex;
    height: ${navHeight};
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;

    .brand {
        user-select:none;
        text-transform:capitalize;
    }

    li {
        list-style:none;
        display:inline;

        a {
            display: inline-flex;
            align-items: center;
            height: ${navHeight};
            box-sizing: border-box;
            margin-right: 15px;
            padding-inline: 12px;
            transition: color .2s;
            
        }
    }

`;

const NavTheme = {
    dark: `
        background: #202024;
        color: rgb(225, 225, 230);

        a {
            color: rgb(115, 115, 128);

            &:hover {
                color: rgb(225, 225, 230);
            }
        }
    `,

    light: `
        background: #f9f9f9;
        color: #333;

    `
}