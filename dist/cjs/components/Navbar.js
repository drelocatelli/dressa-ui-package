"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavDropdown = exports.Nav = exports.NavbarBrand = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const constants_1 = require("./constants");
require("../assets/css/basic.css");
const react_1 = require("react");
const Icon_1 = __importDefault(require("./Icon"));
const ThemeContext = (0, react_1.createContext)({});
const NavbarBrand = ({ children = 'Brand' }) => (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "brand" }, { children: children }));
exports.NavbarBrand = NavbarBrand;
function Navbar(props) {
    var _a;
    const [darkMode, setDarkMode] = (0, react_1.useState)((_a = props.darkMode) !== null && _a !== void 0 ? _a : false);
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, Object.assign({ value: { darkMode, setDarkMode } }, { children: (0, jsx_runtime_1.jsx)(NavStyle, Object.assign({ darkMode: darkMode, style: props.style }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "navbar" }, { children: props.children })) })) })));
}
exports.default = Navbar;
const Nav = (props) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "navbar-expanded", style: props.style }, { children: [" ", props.children, " "] })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "navbar-mobile", style: props.style }, { children: [" ", props.children, " "] }))] }));
exports.Nav = Nav;
const NavLink = (props) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("li", Object.assign({ style: props["li-style"] }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
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
                if (innerWidth >= constants_1.maxLayout.width) {
                    return navbarMobile.style.setProperty('display', 'none');
                }
            };
            if (style.display == 'none') {
                return navbarMobile.style.setProperty('display', 'block');
            }
            return navbarMobile.style.setProperty('display', 'none');
        }
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "toggleButton", type: "button", onClick: toggleNavbar }, { children: (_a = props.icon) !== null && _a !== void 0 ? _a : (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "menu" }) })) }));
};
const NavbarCollapse = (props) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.children }));
};
const NavDropdown = (props) => {
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "dropdown-expanded", id: props.id }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "dropdown-menu", onClick: detectDropdownClick }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ href: "javascript:void(0);" }, { children: [props.title, "\u00A0", (_a = props.icon) !== null && _a !== void 0 ? _a : (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "arrow_drop_down" })] })) })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "dropdown" }, { children: props.children }))] })) }));
};
exports.NavDropdown = NavDropdown;
const NavDropDownItem = (props) => {
    // const { darkMode, setDarkMode } = useContext(ThemeContext) as ThemeContextProps;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("li", Object.assign({ style: props["li-style"] }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
};
//*-------------------------------------------- childs
Navbar.Brand = exports.NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;
exports.Nav.Link = NavLink;
exports.NavDropdown.Item = NavDropDownItem;
//*-------------------------------------------- style
const navHeight = '72px';
const NavStyle = styled_components_1.default.nav `
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


    @media screen and (max-width: ${constants_1.maxLayout.width}px) {
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