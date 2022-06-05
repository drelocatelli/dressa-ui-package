import { AppProps, AppPropsChildren, AppPropsWithTheme } from "../types/basicTypes";
import React, { CSSProperties } from "react";
declare function Navbar(props: AppPropsWithTheme): JSX.Element;
declare namespace Navbar {
    var Brand: ({ children }: AppProps) => JSX.Element;
    var Toggle: (props: NavToggleProps) => JSX.Element;
    var Collapse: (props: {
        children: React.ReactNode;
        id: string;
    }) => JSX.Element;
}
export default Navbar;
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
}
interface NavDropDownProps extends AppPropsChildren {
    title: string;
    id: string;
}
export declare const NavDropdown: {
    (props: NavDropDownProps): JSX.Element;
    Item: (props: NavDropDonwItem) => JSX.Element;
};
interface NavDropDonwItem extends NavLinkProps {
    href: string;
}
