

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

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');
require('./assets/css/basic.css');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
    return jsxRuntime.jsx(IconStyle, __assign({ style: __assign(__assign({}, props.style), { fontSize: "".concat(props.size, "px") }) }, { children: props.name }));
}
var IconStyle = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    font-family: 'Material Icons', monospace;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n"], ["\n    font-family: 'Material Icons', monospace;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n"])));
var templateObject_1$2;

var ThemeContext = react.createContext({});
var NavbarBrand = function (_a) {
    var _b = _a.children, children = _b === void 0 ? 'Brand' : _b;
    return jsxRuntime.jsx("div", __assign({ className: "brand" }, { children: children }));
};
function Navbar(props) {
    var _a;
    var _b = react.useState((_a = props.darkMode) !== null && _a !== void 0 ? _a : false), darkMode = _b[0], setDarkMode = _b[1];
    return (jsxRuntime.jsx(ThemeContext.Provider, __assign({ value: { darkMode: darkMode, setDarkMode: setDarkMode } }, { children: jsxRuntime.jsx(NavStyle, __assign({ darkMode: darkMode, style: props.style }, { children: jsxRuntime.jsx("div", __assign({ className: "navbar" }, { children: props.children })) })) })));
}
var Nav = function (props) { return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("ul", __assign({ className: "navbar-expanded", style: props.style }, { children: [" ", props.children, " "] })), jsxRuntime.jsxs("ul", __assign({ className: "navbar-mobile", style: props.style }, { children: [" ", props.children, " "] }))] })); };
var NavLink = function (props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("li", __assign({ style: props["li-style"] }, { children: jsxRuntime.jsx("a", __assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
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
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("button", __assign({ className: "toggleButton", type: "button", onClick: toggleNavbar }, { children: (_a = props.icon) !== null && _a !== void 0 ? _a : jsxRuntime.jsx(Icon, { name: "menu" }) })) }));
};
var NavbarCollapse = function (props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.children }));
};
var NavDropdown = function (props) {
    var _a;
    var dropdownExpanded = react.createRef();
    function detectDropdownClick() {
        var dropdown = dropdownExpanded.current;
        var dropdownContent = dropdown.querySelector('ul.dropdown');
        var navPosition = parseInt(navHeight) - 26;
        if (window.outerWidth < maxLayout.width) {
            // toggle block or none
            if (getComputedStyle(dropdownContent).display == 'block') {
                dropdownContent.style.setProperty('display', 'none');
            }
            else {
                dropdownContent.style.setProperty('display', 'block');
            }
        }
        // toggle position of ul.dropdown
        if (getComputedStyle(dropdownContent).top.startsWith('-')) {
            dropdownContent.style.setProperty('top', "".concat(navPosition, "px"));
        }
        else {
            dropdownContent.style.setProperty('top', "-800px");
        }
    }
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", __assign({ className: "dropdown-expanded", id: props.id, ref: dropdownExpanded }, { children: [jsxRuntime.jsx("li", __assign({ className: "dropdown-menu", onClick: detectDropdownClick }, { children: jsxRuntime.jsxs("a", __assign({ href: "javascript:void(0);" }, { children: [props.title, "\u00A0", (_a = props.icon) !== null && _a !== void 0 ? _a : jsxRuntime.jsx(Icon, { name: "arrow_drop_down" })] })) })), jsxRuntime.jsx("ul", __assign({ className: "dropdown", id: props.id }, { children: props.children }))] })) }));
};
var NavDropDownItem = function (props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("li", __assign({ style: props["li-style"] }, { children: jsxRuntime.jsx("a", __assign({ href: props.href, style: props["a-style"] }, { children: props.children })) })) }));
};
var NavdropdownDivider = function (props) {
    var darkMode = react.useContext(ThemeContext).darkMode;
    return (jsxRuntime.jsx(NavSeparator, { darkMode: darkMode, style: props.style }));
};
//*-------------------------------------------- childs
Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;
Nav.Link = NavLink;
NavDropdown.Item = NavDropDownItem;
NavDropdown.Divider = NavdropdownDivider;
//*-------------------------------------------- style
var navHeight = '72px';
var dropdownIndent = '25px';
var NavSeparator = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    border-bottom: 1px solid ", ";\n    box-shadow: 0px -1px 1px ", ";\n    margin: 5px 0;\n\n    @media screen and (max-width: ", "px) {\n        margin-left: ", ";\n    }\n"], ["\n    border-bottom: 1px solid ", ";\n    box-shadow: 0px -1px 1px ", ";\n    margin: 5px 0;\n\n    @media screen and (max-width: ", "px) {\n        margin-left: ", ";\n    }\n"])), function (props) { return props.darkMode ? '#000' : '#eee'; }, function (props) { return props.darkMode ? '#fff' : '#000'; }, maxLayout.width, dropdownIndent);
var NavStyle = styled__default["default"].nav(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    ", ";\n\n    display: flex;\n    user-select:none;\n    height: ", ";\n    box-sizing: border-box;\n    align-items: center;\n    font-size: 14px;\n    justify-content: space-around;\n\n    .navbar {\n        display: contents;\n    }\n    \n    .dropdown-expanded {\n        position: relative;\n        display: inline;\n        \n        li.dropdown-menu {\n            display: inline;\n\n            a {\n                display: inline-flex;\n                flex-direction: row;\n                align-items: stretch;\n            }\n        }\n\n        ul.dropdown {\n            position: absolute; \n            left: 5px; \n            z-index: 10000000000;\n            padding:18px 1rem; \n            min-width: 10rem;\n            top:-8000px;\n            box-sizing: border-box; \n            list-style: none; \n\n            li {\n                a {\n                    display: block;\n                    padding:.5rem 0;\n                }\n            }\n        }\n    }\n    \n    .navbar-mobile {\n        display: none;\n    }\n\n    button.toggleButton {\n        display:none;\n    }\n\n    .brand {\n        user-select:none;\n        font-size: 1.3rem;\n        text-transform:capitalize;\n    }\n\n    li {\n        list-style: none;\n    }\n\n    .navbar-expanded {\n        & > li {\n            display:inline;\n    \n            & > a {\n                display: inline-flex;\n                align-items: center;\n                height: ", ";\n                box-sizing: border-box;\n                margin-right: 10px;\n                padding-inline: 12px;\n                transition: color .2s;\n                \n            }\n        }\n\n    }\n\n\n    @media screen and (max-width: ", "px) {\n        flex-direction: column;\n        justify-content: space-between;\n        box-sizing: content-box;\n        height: auto;\n        padding: 10px 0;\n\n        \n        .dropdown-expanded {\n            li.dropdown-menu {\n                display: block;\n            }\n\n            ul.dropdown {\n                display: none;\n                padding: initial;\n                position: relative;\n                left: initial;\n                top: 0!important;\n                min-width: initial;\n                box-shadow: none;\n                text-indent: ", ";\n                background: transparent;\n            }\n        }\n\n        button.toggleButton {\n            position: absolute;\n            top: 20px;\n            right: 23px;\n            display: block;\n            padding: 5px 1rem;\n            border: none;\n            outline:none;\n            border-radius: 8px;\n            background: transparent;\n\n            div {\n                font-size: 2rem;\n            }\n        }\n\n        .brand {\n            margin: 10px 0;\n        }\n\n        .navbar-expanded {\n            display: none;\n        }\n\n        .navbar-mobile {\n            padding-top: 20px;\n            li {\n                a {\n                    display: block;\n                    height: auto;\n                    padding:10px 0;\n                    margin: 0 0;\n                }\n            }\n        }\n    }\n\n"], ["\n    ", ";\n\n    display: flex;\n    user-select:none;\n    height: ", ";\n    box-sizing: border-box;\n    align-items: center;\n    font-size: 14px;\n    justify-content: space-around;\n\n    .navbar {\n        display: contents;\n    }\n    \n    .dropdown-expanded {\n        position: relative;\n        display: inline;\n        \n        li.dropdown-menu {\n            display: inline;\n\n            a {\n                display: inline-flex;\n                flex-direction: row;\n                align-items: stretch;\n            }\n        }\n\n        ul.dropdown {\n            position: absolute; \n            left: 5px; \n            z-index: 10000000000;\n            padding:18px 1rem; \n            min-width: 10rem;\n            top:-8000px;\n            box-sizing: border-box; \n            list-style: none; \n\n            li {\n                a {\n                    display: block;\n                    padding:.5rem 0;\n                }\n            }\n        }\n    }\n    \n    .navbar-mobile {\n        display: none;\n    }\n\n    button.toggleButton {\n        display:none;\n    }\n\n    .brand {\n        user-select:none;\n        font-size: 1.3rem;\n        text-transform:capitalize;\n    }\n\n    li {\n        list-style: none;\n    }\n\n    .navbar-expanded {\n        & > li {\n            display:inline;\n    \n            & > a {\n                display: inline-flex;\n                align-items: center;\n                height: ", ";\n                box-sizing: border-box;\n                margin-right: 10px;\n                padding-inline: 12px;\n                transition: color .2s;\n                \n            }\n        }\n\n    }\n\n\n    @media screen and (max-width: ", "px) {\n        flex-direction: column;\n        justify-content: space-between;\n        box-sizing: content-box;\n        height: auto;\n        padding: 10px 0;\n\n        \n        .dropdown-expanded {\n            li.dropdown-menu {\n                display: block;\n            }\n\n            ul.dropdown {\n                display: none;\n                padding: initial;\n                position: relative;\n                left: initial;\n                top: 0!important;\n                min-width: initial;\n                box-shadow: none;\n                text-indent: ", ";\n                background: transparent;\n            }\n        }\n\n        button.toggleButton {\n            position: absolute;\n            top: 20px;\n            right: 23px;\n            display: block;\n            padding: 5px 1rem;\n            border: none;\n            outline:none;\n            border-radius: 8px;\n            background: transparent;\n\n            div {\n                font-size: 2rem;\n            }\n        }\n\n        .brand {\n            margin: 10px 0;\n        }\n\n        .navbar-expanded {\n            display: none;\n        }\n\n        .navbar-mobile {\n            padding-top: 20px;\n            li {\n                a {\n                    display: block;\n                    height: auto;\n                    padding:10px 0;\n                    margin: 0 0;\n                }\n            }\n        }\n    }\n\n"])), function (props) { return (props.darkMode ? NavTheme.dark : NavTheme.light); }, navHeight, navHeight, maxLayout.width, dropdownIndent);
var NavTheme = {
    dark: "\n        background: #121214;\n        color: rgb(225, 225, 230);\n\n        button.toggleButton {\n            color: #fff;\n        }\n\n        a {\n            color: rgb(115, 115, 128);\n\n            &:hover {\n                color: rgb(225, 225, 230);\n            }\n        }\n\n        .dropdown-expanded {\n            ul.dropdown {\n                background: #202024;\n                box-shadow: inset 0px 0px 4px #000;\n            }\n        }\n    ",
    light: "\n        background: #f9f9f9;\n        color: #000;\n\n        button.toggleButton {\n            color: #000;\n        }\n\n        a{\n            color: #888;\n            &:hover {\n                color: #000;\n            }\n        }\n\n        .dropdown-expanded {\n            margin-right: 1rem;\n            ul.dropdown {\n                background: #f9f9f9;\n                // box-shadow: inset 0px 0px 4px #ccc;\n            }\n        }\n    "
};
var templateObject_1$1, templateObject_2$1;

function Form(props) {
    return (jsxRuntime.jsx(FormStyled, { children: jsxRuntime.jsx("form", __assign({}, props, { children: props.children })) }));
}
function Button(props) {
    return jsxRuntime.jsx(ButtonStyled, __assign({ style: props.style, bg: props.bg }, { children: props.children }));
}
function FormGroup(_a) {
    var children = _a.children;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children }));
}
//* -------------------------- childs
Form.Group = FormGroup;
var ButtonColors;
(function (ButtonColors) {
    ButtonColors["primary"] = "#90cdf4";
    ButtonColors["secondary"] = "red";
})(ButtonColors || (ButtonColors = {}));
var ButtonStyled = styled__default["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding:0 1rem;\n    border-radius: 0.375rem;\n    margin: 3px;\n    background: ", ";\n    height: 2.5rem;\n    box-sizing:border-box;\n    border:0;\n    outline: 0;\n    opacity: .9;\n    cursor: pointer;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &:active {\n        opacity: .8;\n\n    }\n"], ["\n    padding:0 1rem;\n    border-radius: 0.375rem;\n    margin: 3px;\n    background: ", ";\n    height: 2.5rem;\n    box-sizing:border-box;\n    border:0;\n    outline: 0;\n    opacity: .9;\n    cursor: pointer;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &:active {\n        opacity: .8;\n\n    }\n"])), function (props) { return props.bg; });
var FormStyled = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var templateObject_1, templateObject_2;

exports.Button = Button;
exports.Form = Form;
exports.Icon = Icon;
exports.Nav = Nav;
exports.NavDropdown = NavDropdown;
exports.Navbar = Navbar;
//# sourceMappingURL=index.js.map
