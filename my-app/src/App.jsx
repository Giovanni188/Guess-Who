import { LanguageProvider } from './components/LanguageContext';
import NavHeader from './components/NavBar';
import Rule from './components/Rule';
import Foot from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return(
    <>
      <LanguageProvider>
        <NavHeader />
        <Container className="my-4">
          <Rule />
        </Container>
        <Container fluid>
          <Foot />
        </Container>
      </LanguageProvider>
    </>
  );
}

export default App
