import NavHeader from './components/NavBar';
import Rule from './components/Rule';
import Foot from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return(
    <>
      <NavHeader />
      <Container className="my-4">
        <Rule />
      </Container>
      <Container fluid>
        <Foot />
      </Container>
    </>
  );
}

export default App
