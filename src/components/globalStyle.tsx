import { createGlobalStyle } from "styled-components";

const DressaUIWrapper = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('../assets/fonts/Roboto-Regular.ttf');
    }

    @font-face {
        font-family: 'Material Icons';
        src: url('../assets/fonts/Material\ Icons.woff2') format('woff2');
    }

    * {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;

export {DressaUIWrapper};

