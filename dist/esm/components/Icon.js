import { jsx as _jsx } from "react/jsx-runtime";
import '../assets/css/basic.css';
import styled from "styled-components";
/*
    LIST OF ICONS HERE:
    https://fonts.google.com/icons?selected=Material+Icons
*/
export default function Icon(props) {
    return _jsx(IconStyle, Object.assign({ style: Object.assign(Object.assign({}, props.style), { fontSize: `${props.size}px` }) }, { children: props.name }));
}
export const IconStyle = styled.div `
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