import { CSSProperties } from "styled-components";

export interface AppProps {
    children?: React.ReactNode,
    style?: CSSProperties    
}

export interface AppPropsWithTheme extends AppProps {
    darkMode?: boolean;
}