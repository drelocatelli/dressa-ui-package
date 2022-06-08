import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './components/Container';
import Form, { Button, ButtonColors } from './components/Forms';
import { Icon } from './components/Icons';
import { Nav, Navbar, NavDropdown } from './components/Nav';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function App() {

    const formHandler = (e : React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = (name: string) => new FormData(form).get(name);

        console.log(formData('name'))
    };
    
    return (
        <>
            <Navbar darkMode>
                <Navbar.Brand children='DressaUI Lib' />
                Um design system clean ;)
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/'>Components</Nav.Link>
                        <NavDropdown title='Dev' id='basic-dpdown'>
                            <NavDropdown.Item href='https://github.com/drelocatelli/dressa-ui-package'>Github</NavDropdown.Item>
                            <NavDropdown.Item href='https://github.com/drelocatelli/dressa-ui-package'>Github</NavDropdown.Item>
                            <NavDropdown.Item href='https://github.com/drelocatelli/dressa-ui-package'>Github</NavDropdown.Item>
                            <NavDropdown.Item href='https://github.com/drelocatelli/dressa-ui-package'>Github</NavDropdown.Item>
                            <NavDropdown.Item href='https://github.com/drelocatelli/dressa-ui-package'>Github</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='https://www.npmjs.com/package/dressa-ui'>NPM</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id='dropdown-2' title='Dropdown 2'>
                            <NavDropdown.Item href='/'>Teste</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                Ambiente de testes de components.
            </Container>
            <Container>
                <Form onSubmit={formHandler}>
                    <Form.Group>
                        <input type="text" name="name" />
                        <Button type="submit" bg={ButtonColors.secondary}>Enviar</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}