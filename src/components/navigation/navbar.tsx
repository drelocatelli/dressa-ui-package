import { AppProps, AppPropsWithTheme } from "../../types/basicTypes";
import styled from 'styled-components';

const NavbarBrand = ({children = 'Brand'} : AppProps) => <div className="brand">{children}</div>

export default function Navbar(
    {
        darkMode = false, 
        children
    } : AppPropsWithTheme
) {

    return(
        <NavStyle darkMode={darkMode}>
            {children}
        </NavStyle>
    );

}

export const Nav = ({children}: AppProps) => ( <ul> {children} </ul> );

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = (props : NavLinkProps) => <li><a href={props.href}>{props.children}</a></li>;


//*-------------------------------------------- childs
Navbar.Brand = NavbarBrand;
Nav.Link = NavLink;

//*-------------------------------------------- style
const navHeight = '72px';

const NavStyle = styled.nav<AppPropsWithTheme>`
    ${props => (props.darkMode ? NavTheme.dark : NavTheme.light)};

    display: flex;
    user-select:none;
    height: ${navHeight};
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;

    .brand {
        user-select:none;
        font-size: 1.3rem;
        text-transform:capitalize;
    }

    li {
        list-style:none;
        display:inline;

        a {
            display: inline-flex;
            align-items: center;
            height: ${navHeight};
            box-sizing: border-box;
            margin-right: 10px;
            padding-inline: 12px;
            transition: color .2s;
            
        }
    }

`;

const NavTheme = {
    dark: `
        background: #202024;
        color: rgb(225, 225, 230);

        a {
            color: rgb(115, 115, 128);

            &:hover {
                color: rgb(225, 225, 230);
            }
        }
    `,

    light: `
        background: #f9f9f9;
        color: #000;

        a{
            color: #8f8f8f;
            &:hover {
                color: #000;
            }
        }
    `
}