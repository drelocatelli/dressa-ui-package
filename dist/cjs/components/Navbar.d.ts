import { AppProps, AppPropsChildren, AppPropsWithTheme } from "../types/basicTypes";
import { CSSProperties } from "react";
export declare const NavbarBrand: ({ children }: AppProps) => JSX.Element;
export declare function Navbar(props: AppPropsWithTheme): JSX.Element;
export declare namespace Navbar {
    var Brand: ({ children }: AppProps) => JSX.Element;
    var Toggle: (props: NavToggleProps) => JSX.Element;
    var Collapse: (props: {
        children: import("react").ReactNode;
        id: string;
    }) => JSX.Element;
}
export declare const Nav: {
    (props: AppProps): JSX.Element;
    Link: (props: NavLinkProps) => JSX.Element;
};
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    "a-style"?: CSSProperties;
    "li-style"?: CSSProperties;
}
interface NavToggleProps {
    "aria-controls": string;
    icon?: React.ReactNode;
}
interface NavDropDownProps extends AppPropsChildren {
    title: string;
    id: string;
    icon?: React.ReactNode;
}
export declare const NavDropdown: {
    (props: NavDropDownProps): JSX.Element;
    Item: (props: NavDropDonwItem) => JSX.Element;
};
interface NavDropDonwItem extends NavLinkProps {
    href: string;
}
export {};
