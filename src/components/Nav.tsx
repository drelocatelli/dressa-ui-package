import { AppProps, AppPropsChildren, AppPropsWithTheme } from "../types/basicTypes";
import styled from 'styled-components';
import { maxLayout } from "./constants";
import '../assets/css/basic.css';

import { createContext, createRef, CSSProperties, useContext, useState } from "react";
import { Icon } from "./Icons";

const ThemeContext = createContext({});

export const NavbarBrand = ({ children = 'Brand' }: AppProps) => <div className="brand">{children}</div>

interface ThemeProps {
    darkMode?: boolean;
    setDarkMode?: (darkMode: boolean) => void;
}

export function Navbar(props: AppPropsWithTheme) {

    const [darkMode, setDarkMode] = useState<boolean>(props.darkMode ?? false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <NavStyle darkMode={darkMode} style={props.style}>
                <div className="navbar">
                    {props.children}
                </div>
            </NavStyle>
        </ThemeContext.Provider>
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
    icon?: React.ReactNode;
    target?: string;
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
                {props.icon ?? <Icon name="menu" />}
            </button>
        </>
    );
}

const NavbarCollapse = (props: { children: React.ReactNode }) => {
    return (
        <>
            {props.children}
        </>
    );
}

interface NavDropDownProps extends AppPropsChildren {
    title: string;
    id: string;
    icon?: React.ReactNode;
}

export const NavDropdown = (props: NavDropDownProps) => {

    const dropdownExpanded = createRef();

    function detectDropdownClick() {
        const dropdown = dropdownExpanded.current as HTMLElement;
        const dropdownContent = dropdown.querySelector('ul.dropdown') as HTMLElement;

        const navPosition = parseInt(navHeight) - 26;

        if(window.outerWidth < maxLayout.width) {
            // toggle block or none
            if(getComputedStyle(dropdownContent).display == 'block') {
                dropdownContent.style.setProperty('display', 'none');
            } else {
                dropdownContent.style.setProperty('display', 'block');
            }
        }


        // toggle position of ul.dropdown
        if (getComputedStyle(dropdownContent).top.startsWith('-')) {

            dropdownContent.style.setProperty('top', `${navPosition}px`);
        } else {
            dropdownContent.style.setProperty('top', `-800px`);
        }
    }

    return (
        <>
            <div className="dropdown-expanded" id={props.id} ref={dropdownExpanded as React.RefObject<HTMLDivElement>}>
                <li className="dropdown-menu" onClick={detectDropdownClick}>
                    <a href="javascript:void(0);">
                        {props.title}&nbsp;
                        {props.icon ?? <Icon name="arrow_drop_down" />}
                    </a>
                </li>
                <ul className="dropdown" id={props.id}>
                    {props.children}
                </ul>
            </div>
        </>
    );
}

interface NavDropDonwItem extends NavLinkProps {
    href: string;
}

const NavDropDownItem = (props: NavDropDonwItem) => {
    return (
        <>
            <li style={props["li-style"]}>
                <a href={props.href} style={props["a-style"]}>{props.children}</a>
            </li>
        </>
    );
}

const NavdropdownDivider = (props: { style?: CSSProperties }) => {

    const { darkMode } = useContext(ThemeContext) as ThemeProps;

    return (
        <NavSeparator darkMode={darkMode} style={props.style} />
    );
}

//*-------------------------------------------- childs
Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;

Nav.Link = NavLink;

NavDropdown.Item = NavDropDownItem;
NavDropdown.Divider = NavdropdownDivider;

//*-------------------------------------------- style
const navHeight = '72px';
const dropdownIndent = '25px';

const NavSeparator = styled.div<AppPropsWithTheme>`
    border-bottom: 1px solid ${props => props.darkMode ? '#000' : '#eee'};
    box-shadow: 0px -1px 1px ${props => props.darkMode ? '#fff' : '#000'};
    margin: 5px 0;

    @media screen and (max-width: ${maxLayout.width}px) {
        margin-left: ${dropdownIndent};
    }
`;

const NavStyle = styled.nav<AppPropsWithTheme>`
    ${props => (props.darkMode ? NavTheme.dark : NavTheme.light)};

    display: flex;
    user-select:none;
    height: ${navHeight};
    box-sizing: border-box;
    align-items: center;
    font-size: 14px;
    justify-content: space-around;

    .navbar {
        display: contents;
    }
    
    .dropdown-expanded {
        position: relative;
        display: inline;
        
        li.dropdown-menu {
            display: inline;

            a {
                display: inline-flex;
                flex-direction: row;
                align-items: stretch;
            }
        }

        ul.dropdown {
            position: absolute; 
            left: 5px; 
            z-index: 10000000000;
            padding:18px 1rem; 
            min-width: 10rem;
            top:-8000px;
            box-sizing: border-box; 
            list-style: none; 

            li {
                a {
                    display: block;
                    padding:.5rem 0;
                }
            }
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
        & > li {
            display:inline;
    
            & > a {
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
        padding: 10px 0;

        
        .dropdown-expanded {
            li.dropdown-menu {
                display: block;
            }

            ul.dropdown {
                display: none;
                padding: initial;
                position: relative;
                left: initial;
                top: 0!important;
                min-width: initial;
                box-shadow: none;
                text-indent: ${dropdownIndent};
                background: transparent;
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
            padding-top: 20px;
            li {
                a {
                    display: block;
                    height: auto;
                    padding:10px 0;
                    margin: 0 0;
                }
            }
        }
    }

`;

const NavTheme = {
    dark: `
        background: #121214;
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

        .dropdown-expanded {
            ul.dropdown {
                background: #202024;
                box-shadow: inset 0px 0px 4px #000;
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
            color: #888;
            &:hover {
                color: #000;
            }
        }

        .dropdown-expanded {
            margin-right: 1rem;
            ul.dropdown {
                background: #f9f9f9;
                // box-shadow: inset 0px 0px 4px #ccc;
            }
        }
    `
}