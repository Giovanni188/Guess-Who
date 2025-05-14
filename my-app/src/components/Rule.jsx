import {Col, Row, Button} from "react-bootstrap";
import { BsJoystick } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";

function Rule (props) {
    return(
        <>
            <Row className="justify-content-center">
                <Col md={10} lg={8} className="h2_container text-center">
                    <h2 className="h2_title">Guess the champion!!!</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={10} lg={8} className="p_container text-center">
                    <p className="p">The goal of the game is to guess the hidden football player. To do this, you need to choose one of the categories (Age, Nationality, etc.) and guess the correct answer. The players who do not match that category will be excluded. When you want to guess the hidden player, you can select their photo, and if it's correct, you win the game!</p>
                </Col>
            </Row>  
            <Row className="justify-content-center align-items-center">
                <Col md={10} lg={8} className="d-flex justify-content-center">
                    <Button className="button">
                        <i className="me-2"><BsJoystick/></i>Start a match!
                    </Button>
                </Col>
            </Row>      
        </>
    );
}

export default Rule;