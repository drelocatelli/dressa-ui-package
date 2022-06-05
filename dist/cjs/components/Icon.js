"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconStyle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("../assets/css/basic.css");
const styled_components_1 = __importDefault(require("styled-components"));
/*
    LIST OF ICONS HERE:
    https://fonts.google.com/icons?selected=Material+Icons
*/
function Icon(props) {
    return (0, jsx_runtime_1.jsx)(exports.IconStyle, Object.assign({ style: Object.assign(Object.assign({}, props.style), { fontSize: `${props.size}px` }) }, { children: props.name }));
}
exports.default = Icon;
exports.IconStyle = styled_components_1.default.div `
    font-family: 'Material Icons', monospace;
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';
`;
//# sourceMappingURL=Icon.js.map