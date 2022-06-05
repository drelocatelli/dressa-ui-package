import { AppProps, AppPropsChildren, AppPropsWithTheme } from "../../types/basicTypes";
import styled from 'styled-components';
import { maxLayout } from "../constants";
import Icon from "../media/icons";
import React, { CSSProperties, useEffect } from "react";

const NavbarBrand = ({ children = 'Brand' }: AppProps) => <div className="brand">{children}</div>

export default function Navbar(props: AppPropsWithTheme) {
    return (
        <NavStyle darkMode={props.darkMode} style={props.style}>
            <div className="navbar" data-darkMode={(props.darkMode) ?? false}>
                {props.children}
            </div>
        </NavStyle>
    );

}

export const Nav = (props: AppProps) => (
    <>
        <ul className="navbar-expanded" style={props.style}> {props.children} </ul>
        <ul className="navbar-mobile" style={props.style}> {props.children} </ul>
    </>
);

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    "a-style"?: CSSProperties;
    "li-style"?: CSSProperties;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <>
            <li style={props["li-style"]}><a href={props.href} style={props["a-style"]}>{props.children}</a></li>
        </>
    );
}

interface NavToggleProps {
    "aria-controls": string;
}

const NavbarToggle = (props: NavToggleProps) => {

    function toggleNavbar() {
        const navbar = document.querySelector('.navbar')
        const navbarMobile = navbar?.querySelector('.navbar-mobile') as HTMLElement;

        if (navbarMobile) {
            const style = getComputedStyle(navbarMobile);

            window.onresize = (ev) => {
                const { innerWidth }: any = ev.target;

                if (innerWidth >= maxLayout.width) {
                    return navbarMobile.style.setProperty('display', 'none');
                }
            }

            if (style.display == 'none') {
                return navbarMobile.style.setProperty('display', 'block');
            }

            return navbarMobile.style.setProperty('display', 'none');

        }
    }

    return (
        <>
            <button className="toggleButton" type="button" onClick={toggleNavbar}>
                <Icon name="menu" />
            </button>
        </>
    );
}

const NavbarCollapse = (props: { children: React.ReactNode, id: string }) => {
    return (
        <>
            {props.children}
        </>
    );
}

interface NavDropDownProps extends AppPropsChildren {
    title: string;
    id: string;
}

export const NavDropdown = (props: NavDropDownProps) => {

    function detectDropdownClick(e: any) {
        const dropdownExpanded = document.querySelector(`#${props.id}`);
        const ulDropdown = dropdownExpanded?.querySelector('ul.dropdown') as HTMLElement;
        const ulDropDownStyle = getComputedStyle(ulDropdown);

        // toggle position of ul.dropdown
        if (ulDropDownStyle.top.startsWith('-')) {
            const navPosition = parseInt(navHeight) - 18;

            ulDropdown.style.setProperty('top', `${navPosition}px`);
        } else {
            ulDropdown.style.setProperty('top', '-8000px');
        }
    }

    return (
        <>
            <div className="dropdown-expanded" id={props.id}>
                <li className="dropdown-menu" onClick={detectDropdownClick}>
                    <a href="javascript:void(0);">
                        {props.title} &nbsp;
                        <Icon name="keyboard_arrow_down" size={20} />
                    </a>
                </li>
                <ul className="dropdown">
                    {props.children}
                </ul>
            </div>
        </>
    );
}

interface NavDropDonwItem extends AppPropsChildren {
    href: string;
}

const NavDropDownItem = (props: NavDropDonwItem) => {
        
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
NavDropdown.Item = NavDropDownItem;

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

    .navbar {
        display: contents;
    }
    
    .dropdown-expanded {
        position: relative;
        display: inline;
        
        li.dropdown-menu {
            display: inline;
        }

        ul.dropdown {
            transform: translateY(-50%);
            position: absolute; 
            left: 5px; 
            z-index: 10000000000;
            padding:6px 0 0; 
            top:-8000px;
            background: #000; 
            min-width: 120px; 
            box-sizing: border-box; 
            list-style: none; 
        }
    }

    ul {
        .dropdown-expanded {

        }
                
        .dropdown-mobile {
            display: none;
         }
    }
    
    .navbar-mobile {
        display: none;
    }

    button.toggleButton {
        display:none;
    }

    .brand {
        user-select:none;
        font-size: 1.3rem;
        text-transform:capitalize;
    }

    li {
        list-style: none;
    }

    .navbar-expanded {
        li {
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

    }


    @media screen and (max-width: ${maxLayout.width}px) {
        flex-direction: column;
        justify-content: space-between;
        box-sizing: content-box;
        height: auto;
        padding: 20px 0;

        ul {
            .dropdown-expanded {
                display: none;
            }
        }

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

        .navbar-expanded {
            display: none;
        }

        .navbar-mobile {
            li {
                a {
                    display: block;
                    height: auto;
                    padding:10px 0;
                    margin: 10px 0;
                }
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