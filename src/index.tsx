import React from 'react';
import ReactDOM from 'react-dom/client';
import { Nav, Navbar, NavDropdown } from './components/Nav';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode> <App /> </React.StrictMode>);

function App() {
    return (
        <>
            <Navbar>
                <Navbar.Brand children='DressaUI' />
                Um design system clean ;)
                <Navbar.Toggle aria-controls='basic' />
                <Navbar.Collapse id='basic'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/'>Components</Nav.Link>
                        <NavDropdown title='Dev' id='basic-dpdown'>
                            <NavDropdown.Item href='https://github.com/drelocatelli/dressa-ui-package'>Github</NavDropdown.Item>
                            <NavDropdown.Item href='https://www.npmjs.com/package/dressa-ui'>NPM</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            Ambiente de testes de components.
        </>
    );
}