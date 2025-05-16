import { useLanguage } from "./LanguageContext";
import { Navbar, Container, Nav, Image} from "react-bootstrap";
import logo from '../assets/guess_who.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";
import Foot from "./Footer";

const translations = {
  en: { Home: "Home",
        Footballer: "Footballer list",
        Login: "Login",
        Registration: "Registration"
   },
  it: { Home: "Pagina iniziale",
        Footballer: "Lista calciatori",
        Login: "Accedi",
        Registration: "Registrazione"
   }
};


function NavHeader (props){
  const { language } = useLanguage();

  return(
    <>
      <Navbar className="d-flex bg-body">
        <Container fluid>
          <Nav className="me-auto">
            <Image src={logo} height="40px" width="60px" />
            <Nav.Link className="navbar_link text-body" href="#">{translations[language].Home}</Nav.Link>
            <Nav.Link className="navbar_link text-body" href="#">{translations[language].Footballer}</Nav.Link>
            <Nav.Link className="navbar_link text-body" href="#">{translations[language].Login}</Nav.Link>
            <Nav.Link className="navbar_link text-body" href="#">{translations[language].Registration}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;