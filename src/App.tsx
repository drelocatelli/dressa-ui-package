import Navbar, { Nav } from "./components/header/navbar";

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
    </>
  );
}