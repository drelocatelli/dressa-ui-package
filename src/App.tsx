import Box from "./components/layout/box";
import Navbar, { Nav, NavDropdown } from "./components/navigation/navbar";

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
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href='/'>Action</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>


			{/* <Box bg="blue" width="200px">
				this is a box.
			</Box> */}
		</>
	);
}