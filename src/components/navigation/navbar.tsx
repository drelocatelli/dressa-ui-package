import { AppProps, AppPropsWithTheme } from "../../types/basicTypes";
import styled from 'styled-components';
import { maxLayout, mediumLayout } from "../constants";
import Icon from "../media/icons";
import React from "react";

const NavbarBrand = ({ children = 'Brand' }: AppProps) => <div className="brand">{children}</div>

export default function Navbar(
    {
        darkMode = false,
        children
    }: AppPropsWithTheme
) {

    return (
        <NavStyle darkMode={darkMode}>
            {children}
        </NavStyle>
    );

}

export const Nav = ({ children }: AppProps) => (<ul> {children} </ul>);

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <>
            <li><a href={props.href}>{props.children}</a></li>
        </>
    );
}

interface NavToggleProps {
    "aria-controls": string;
}

const NavbarToggle = (props: NavToggleProps) => {
    return(
        <>
            <button className="toggleButton">
                <Icon name="view_headline" />
            </button>
        </>
    );    
} 

const NavbarCollapse = (props: {children: React.ReactNode, id: string}) => {
    return(
        <>
            {props.children}
        </>
    );
}

//*-------------------------------------------- childs
Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;

Nav.Link = NavLink;

//*-------------------------------------------- style
const navHeight = '72px';

const NavStyle = styled.nav<AppPropsWithTheme>`
    ${props => (props.darkMode ? NavTheme.dark : NavTheme.light)};

    display: flex;
    user-select:none;
    height: ${navHeight};
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;

    button.toggleButton {
        display:none;
    }

    .brand {
        user-select:none;
        font-size: 1.3rem;
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
            margin-right: 10px;
            padding-inline: 12px;
            transition: color .2s;
            
        }
    }

    @media screen and (max-width: ${maxLayout.width}px) {
        flex-direction: column;
        justify-content: space-between;
        box-sizing: content-box;
        height: auto;
        padding: 20px 0;

        button.toggleButton {
            position: absolute;
            top: 20px;
            right: 23px;
            display: block;
            padding: 5px 1rem;
            border: none;
            outline:none;
            border-radius: 8px;
            background: transparent;

            div {
                font-size: 2rem;
            }
        }

        .brand {
            margin: 10px 0;
        }

        li {
            display: none;
            
            a {
                height: auto;
                padding:10px 0;
            }
        }
    }

`;

const NavTheme = {
    dark: `
        background: #202024;
        color: rgb(225, 225, 230);

        button.toggleButton {
            color: #fff;
        }

        a {
            color: rgb(115, 115, 128);

            &:hover {
                color: rgb(225, 225, 230);
            }
        }
    `,

    light: `
        background: #f9f9f9;
        color: #000;

        button.toggleButton {
            color: #000;
        }

        a{
            color: #8f8f8f;
            &:hover {
                color: #000;
            }
        }
    `
}