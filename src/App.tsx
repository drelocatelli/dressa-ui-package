import Box from "./components/layout/box";
import Icon from "./components/media/icons";
import Navbar, { Nav } from "./components/navigation/navbar";

export default function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>DressaUI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Edit</Nav.Link>
            <Nav.Link href="/">Edit</Nav.Link>
            <Nav.Link href="/">Edit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Box bg="cyan" width="200px">
        this is a box.
      </Box>
    </>
  );
}