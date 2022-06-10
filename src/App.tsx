//@ts-ignore
import { Nav, Navbar, NavDropdown } from 'dressa-ui';
import React from 'react';

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand children='DressaUI' />
        Um design system clean ;)
        <Navbar.Toggle aria-controls='basic' />
        <Navbar.Collapse>
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
      Em construção...
    </>
  );
}

export default App;
