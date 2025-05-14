import { Navbar, Container, Nav, Image} from "react-bootstrap";
import logo from '../assets/guess_who.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";

function NavHeader (props){
  return(
    <>
      <Navbar bg="light" data-bs-theme="light" className="d-flex">
        <Container fluid>
          <Nav className="me-auto">
            <Image src={logo} height="40px" width="60px" />
            <Nav.Link className="navbar_link" href="#">Home</Nav.Link>
            <Nav.Link className="navbar_link" href="#">Footballer</Nav.Link>
            <Nav.Link className="navbar_link" href="#">Login</Nav.Link>
            <Nav.Link className="navbar_link" href="#">Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;