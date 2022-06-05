import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
import { maxLayout } from "./constants";
import '../assets/css/basic.css';
import { createContext, useState } from "react";
import Icon from "./Icon";
const ThemeContext = createContext({});
export const NavbarBrand = ({ children = 'Brand' }) => _jsx("div", Object.assign({ className: "brand" }, { children: children }));
export default function Navbar(props) {
    var _a;
    const [darkMode, setDarkMode] = useState((_a = props.darkMode) !== null && _a !== void 0 ? _a : false);
    return (_jsx(ThemeContext.Provider, Object.assign({ value: { darkMode, setDarkMode } }, { children: _jsx(NavStyle, Object.assign({ darkMode: darkMode, style: props.style }, { children: _jsx("div", Object.assign({ className: "navbar" }, { children: props.children })) })) })));
}
export const Nav = (props) => (_jsxs(_Fragment, { children: [_jsxs("ul", Object.assign({ className: "navbar-expanded", style: props.style }, { children: [" ", props.children, " "] })), _jsxs("ul", Object.assign({ className: "navbar-mobile", style: props.style }, { children: [" ", props.children, " "] }))] }));
const NavLink = (props) => {
    return (_jsx(_Fragment, { children: _jsx("li", Object.assign({ style: props["li-style"] }, { children: _jsx("a", Object.assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
};
const NavbarToggle = (props) => {
    var _a;
    function toggleNavbar() {
        const navbar = document.querySelector('.navbar');
        const navbarMobile = navbar === null || navbar === void 0 ? void 0 : navbar.querySelector('.navbar-mobile');
        if (navbarMobile) {
            const style = getComputedStyle(navbarMobile);
            window.onresize = (ev) => {
                const { innerWidth } = ev.target;
                if (innerWidth >= maxLayout.width) {
                    return navbarMobile.style.setProperty('display', 'none');
                }
            };
            if (style.display == 'none') {
                return navbarMobile.style.setProperty('display', 'block');
            }
            return navbarMobile.style.setProperty('display', 'none');
        }
    }
    return (_jsx(_Fragment, { children: _jsx("button", Object.assign({ className: "toggleButton", type: "button", onClick: toggleNavbar }, { children: (_a = props.icon) !== null && _a !== void 0 ? _a : _jsx(Icon, { name: "menu" }) })) }));
};
const NavbarCollapse = (props) => {
    return (_jsx(_Fragment, { children: props.children }));
};
export const NavDropdown = (props) => {
    var _a;
    function detectDropdownClick(e) {
        const dropdownExpanded = document.querySelector(`#${props.id}`);
        const ulDropdown = dropdownExpanded === null || dropdownExpanded === void 0 ? void 0 : dropdownExpanded.querySelector('ul.dropdown');
        const ulDropDownStyle = getComputedStyle(ulDropdown);
        const ulDropDownMobile = document.querySelector('.navbar-mobile ul.dropdown');
        // toggle mobile dropdown
        if (getComputedStyle(ulDropDownMobile).display == 'block') {
            ulDropDownMobile.style.setProperty('display', 'none');
        }
        else {
            ulDropDownMobile.style.setProperty('display', 'block');
        }
        // toggle position of ul.dropdown
        if (ulDropDownStyle.top.startsWith('-')) {
            const navPosition = parseInt(navHeight);
            ulDropdown.style.setProperty('top', `${navPosition}px`);
        }
        else {
            ulDropdown.style.setProperty('top', '-8000px');
        }
    }
    return (_jsx(_Fragment, { children: _jsxs("div", Object.assign({ className: "dropdown-expanded", id: props.id }, { children: [_jsx("li", Object.assign({ className: "dropdown-menu", onClick: detectDropdownClick }, { children: _jsxs("a", Object.assign({ href: "javascript:void(0);" }, { children: [props.title, "\u00A0", (_a = props.icon) !== null && _a !== void 0 ? _a : _jsx(Icon, { name: "arrow_drop_down" })] })) })), _jsx("ul", Object.assign({ className: "dropdown" }, { children: props.children }))] })) }));
};
const NavDropDownItem = (props) => {
    // const { darkMode, setDarkMode } = useContext(ThemeContext) as ThemeContextProps;
    return (_jsx(_Fragment, { children: _jsx("li", Object.assign({ style: props["li-style"] }, { children: _jsx("a", Object.assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
};
//*-------------------------------------------- childs
Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;
Nav.Link = NavLink;
NavDropdown.Item = NavDropDownItem;
//*-------------------------------------------- style
const navHeight = '72px';
const NavStyle = styled.nav `
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

            a {
                display: inline-flex;
                flex-direction: row;
                align-items: stretch;
            }
        }

        ul.dropdown {
            transform: translateY(-50%);
            position: absolute; 
            left: 5px; 
            z-index: 10000000000;
            padding:18px 1rem; 
            min-width: 10rem;
            top:-8000px;
            box-sizing: border-box; 
            list-style: none; 
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
        padding: 20px 0;

        .dropdown-expanded {
            ul.dropdown {
                display: none;
                padding: initial;
                position: relative;
                left: initial;
                top: initial;
                min-width: initial;
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

        .dropdown-expanded {
            ul.dropdown {
                background: #202024;
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

        .dropdown-expanded {
            ul.dropdown {
                background: #f9f9f9;
            }
        }
    `
};
//# sourceMappingURL=Navbar.js.map