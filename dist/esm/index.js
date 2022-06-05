function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';
import { createContext, useState } from 'react';
import './assets/css/basic.css';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var maxLayout = {
    width: 1200
};

/*
    LIST OF ICONS HERE:
    https://fonts.google.com/icons?selected=Material+Icons
*/
function Icon(props) {
    return jsx(IconStyle, __assign({ style: __assign(__assign({}, props.style), { fontSize: "".concat(props.size, "px") }) }, { children: props.name }));
}
var IconStyle = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    font-family: 'Material Icons', monospace;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n"], ["\n    font-family: 'Material Icons', monospace;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n"])));
var templateObject_1$1;

var ThemeContext = createContext({});
var NavbarBrand = function (_a) {
    var _b = _a.children, children = _b === void 0 ? 'Brand' : _b;
    return jsx("div", __assign({ className: "brand" }, { children: children }));
};
function Navbar(props) {
    var _a;
    var _b = useState((_a = props.darkMode) !== null && _a !== void 0 ? _a : false), darkMode = _b[0], setDarkMode = _b[1];
    return (jsx(ThemeContext.Provider, __assign({ value: { darkMode: darkMode, setDarkMode: setDarkMode } }, { children: jsx(NavStyle, __assign({ darkMode: darkMode, style: props.style }, { children: jsx("div", __assign({ className: "navbar" }, { children: props.children })) })) })));
}
var Nav = function (props) { return (jsxs(Fragment, { children: [jsxs("ul", __assign({ className: "navbar-expanded", style: props.style }, { children: [" ", props.children, " "] })), jsxs("ul", __assign({ className: "navbar-mobile", style: props.style }, { children: [" ", props.children, " "] }))] })); };
var NavLink = function (props) {
    return (jsx(Fragment, { children: jsx("li", __assign({ style: props["li-style"] }, { children: jsx("a", __assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
};
var NavbarToggle = function (props) {
    var _a;
    function toggleNavbar() {
        var navbar = document.querySelector('.navbar');
        var navbarMobile = navbar === null || navbar === void 0 ? void 0 : navbar.querySelector('.navbar-mobile');
        if (navbarMobile) {
            var style = getComputedStyle(navbarMobile);
            window.onresize = function (ev) {
                var innerWidth = ev.target.innerWidth;
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
    return (jsx(Fragment, { children: jsx("button", __assign({ className: "toggleButton", type: "button", onClick: toggleNavbar }, { children: (_a = props.icon) !== null && _a !== void 0 ? _a : jsx(Icon, { name: "menu" }) })) }));
};
var NavbarCollapse = function (props) {
    return (jsx(Fragment, { children: props.children }));
};
//*-------------------------------------------- childs
Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;
Nav.Link = NavLink;
//*-------------------------------------------- style
var navHeight = '72px';
var NavStyle = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n\n    display: flex;\n    user-select:none;\n    height: ", ";\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: space-around;\n\n    .navbar {\n        display: contents;\n    }\n    \n    .dropdown-expanded {\n        position: relative;\n        display: inline;\n        \n        li.dropdown-menu {\n            display: inline;\n\n            a {\n                display: inline-flex;\n                flex-direction: row;\n                align-items: stretch;\n            }\n        }\n\n        ul.dropdown {\n            transform: translateY(-50%);\n            position: absolute; \n            left: 5px; \n            z-index: 10000000000;\n            padding:18px 1rem; \n            min-width: 10rem;\n            top:-8000px;\n            box-sizing: border-box; \n            list-style: none; \n        }\n    }\n    \n    .navbar-mobile {\n        display: none;\n    }\n\n    button.toggleButton {\n        display:none;\n    }\n\n    .brand {\n        user-select:none;\n        font-size: 1.3rem;\n        text-transform:capitalize;\n    }\n\n    li {\n        list-style: none;\n    }\n\n    .navbar-expanded {\n        & > li {\n            display:inline;\n    \n            & > a {\n                display: inline-flex;\n                align-items: center;\n                height: ", ";\n                box-sizing: border-box;\n                margin-right: 10px;\n                padding-inline: 12px;\n                transition: color .2s;\n                \n            }\n        }\n\n    }\n\n\n    @media screen and (max-width: ", "px) {\n        flex-direction: column;\n        justify-content: space-between;\n        box-sizing: content-box;\n        height: auto;\n        padding: 20px 0;\n\n        .dropdown-expanded {\n            ul.dropdown {\n                display: none;\n                padding: initial;\n                position: relative;\n                left: initial;\n                top: initial;\n                min-width: initial;\n            }\n        }\n\n        button.toggleButton {\n            position: absolute;\n            top: 20px;\n            right: 23px;\n            display: block;\n            padding: 5px 1rem;\n            border: none;\n            outline:none;\n            border-radius: 8px;\n            background: transparent;\n\n            div {\n                font-size: 2rem;\n            }\n        }\n\n        .brand {\n            margin: 10px 0;\n        }\n\n        .navbar-expanded {\n            display: none;\n        }\n\n        .navbar-mobile {\n            li {\n                a {\n                    display: block;\n                    height: auto;\n                    padding:10px 0;\n                    margin: 10px 0;\n                }\n            }\n        }\n    }\n\n"], ["\n    ", ";\n\n    display: flex;\n    user-select:none;\n    height: ", ";\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: space-around;\n\n    .navbar {\n        display: contents;\n    }\n    \n    .dropdown-expanded {\n        position: relative;\n        display: inline;\n        \n        li.dropdown-menu {\n            display: inline;\n\n            a {\n                display: inline-flex;\n                flex-direction: row;\n                align-items: stretch;\n            }\n        }\n\n        ul.dropdown {\n            transform: translateY(-50%);\n            position: absolute; \n            left: 5px; \n            z-index: 10000000000;\n            padding:18px 1rem; \n            min-width: 10rem;\n            top:-8000px;\n            box-sizing: border-box; \n            list-style: none; \n        }\n    }\n    \n    .navbar-mobile {\n        display: none;\n    }\n\n    button.toggleButton {\n        display:none;\n    }\n\n    .brand {\n        user-select:none;\n        font-size: 1.3rem;\n        text-transform:capitalize;\n    }\n\n    li {\n        list-style: none;\n    }\n\n    .navbar-expanded {\n        & > li {\n            display:inline;\n    \n            & > a {\n                display: inline-flex;\n                align-items: center;\n                height: ", ";\n                box-sizing: border-box;\n                margin-right: 10px;\n                padding-inline: 12px;\n                transition: color .2s;\n                \n            }\n        }\n\n    }\n\n\n    @media screen and (max-width: ", "px) {\n        flex-direction: column;\n        justify-content: space-between;\n        box-sizing: content-box;\n        height: auto;\n        padding: 20px 0;\n\n        .dropdown-expanded {\n            ul.dropdown {\n                display: none;\n                padding: initial;\n                position: relative;\n                left: initial;\n                top: initial;\n                min-width: initial;\n            }\n        }\n\n        button.toggleButton {\n            position: absolute;\n            top: 20px;\n            right: 23px;\n            display: block;\n            padding: 5px 1rem;\n            border: none;\n            outline:none;\n            border-radius: 8px;\n            background: transparent;\n\n            div {\n                font-size: 2rem;\n            }\n        }\n\n        .brand {\n            margin: 10px 0;\n        }\n\n        .navbar-expanded {\n            display: none;\n        }\n\n        .navbar-mobile {\n            li {\n                a {\n                    display: block;\n                    height: auto;\n                    padding:10px 0;\n                    margin: 10px 0;\n                }\n            }\n        }\n    }\n\n"])), function (props) { return (props.darkMode ? NavTheme.dark : NavTheme.light); }, navHeight, navHeight, maxLayout.width);
var NavTheme = {
    dark: "\n        background: #202024;\n        color: rgb(225, 225, 230);\n\n        button.toggleButton {\n            color: #fff;\n        }\n\n        a {\n            color: rgb(115, 115, 128);\n\n            &:hover {\n                color: rgb(225, 225, 230);\n            }\n        }\n\n        .dropdown-expanded {\n            ul.dropdown {\n                background: #202024;\n            }\n        }\n    ",
    light: "\n        background: #f9f9f9;\n        color: #000;\n\n        button.toggleButton {\n            color: #000;\n        }\n\n        a{\n            color: #8f8f8f;\n            &:hover {\n                color: #000;\n            }\n        }\n\n        .dropdown-expanded {\n            ul.dropdown {\n                background: #f9f9f9;\n            }\n        }\n    "
};
var templateObject_1;

export { Icon, Nav, Navbar };
//# sourceMappingURL=index.js.map
