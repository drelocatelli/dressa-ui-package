import { CSSProperties } from "styled-components";

export interface AppProps {
    children?: React.ReactNode,
    style?: CSSProperties    
}

export interface AppPropsChildren extends AppProps{
    children: React.ReactNode;
}

export interface AppPropsWithTheme extends AppProps {
    darkMode?: boolean;
}