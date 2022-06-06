import { Nav, Navbar, NavDropdown } from "dressa-ui";

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand children='DressaUI' />
        <>Um design system clean ;)</>
        <Navbar.Toggle aria-controls="basic" />
        <Navbar.Collapse id="basic">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/components'>Components</Nav.Link>
            <NavDropdown title="Dev" id="dropdown-1">
              <NavDropdown.Item href="https://github.com/drelocatelli/dressa-ui-package">Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.npmjs.com/package/dressa-ui">NPM</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default App;
