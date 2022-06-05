import Box from "./components/layout/box";
import Navbar, { Nav } from "./components/navigation/navbar";

export default function App() {
  return (
    <>
      <Navbar darkMode>
        <Navbar.Brand/>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Edit</Nav.Link>
          <Nav.Link href="/">Edit</Nav.Link>
          <Nav.Link href="/">Edit</Nav.Link>
        </Nav>
      </Navbar>

      <Box bg="cyan" width="200px">
        this is a box.
      </Box>
    </>
  );
}