import { Row, Col } from "react-bootstrap";
import { BsMoon, BsGlobe } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";

function Foot (props) {
    return(
        <>
            <Row className="footer justify-content-between align-items-center">
                <Col className="justify-content-left" xs="auto">
                    <p className="mb-0">&copy; Gruppo Ninjas</p>
                </Col>
                <Col xs="auto" className="d-flex justify-content-left">
                    <a className="footer_right" href="#"><BsMoon /></a>
                    <a className="footer_right ms-3" href="#"><BsGlobe /></a>
                </Col>
            </Row>
        </>
    );
}

export default Foot;