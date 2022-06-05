export interface AppProps {
    children?: React.ReactNode    
}

export interface AppPropsWithTheme extends AppProps {
    darkMode?: boolean;
}