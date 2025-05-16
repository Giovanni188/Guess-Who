import { useLanguage } from "./LanguageContext";
import { Row, Col, Button } from "react-bootstrap";
import { BsJoystick } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";

const translations = {
    en: { 
        easy: "Easy", 
        normal: "Normal", 
        hard: "Hard",
        easy_items: "12 items",
        normal_items: "24 items",
        hard_items: "36 items"},
    it: {
        easy: "Facile", 
        normal: "Normale", 
        hard: "Difficile",
        easy_items: "12 oggetti",
        normal_items: "24 oggetti",
        hard_items: "36 oggetti"
    }
};

function DifficultButton() {

    const { language } = useLanguage();

    return (
        <> 
            <Row className="justify-content-center ">
                <Button className="diffButton">
                    <i className="me-2"><BsJoystick/></i>{translations[language].easy}
                </Button>
                <Col md={10} lg={8} className="p_container text-center bg-body">
                    <p className="p text-body">{translations[language].easy_items}</p>
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                <Button className="diffButton">
                    <i className="me-2"><BsJoystick/></i>{translations[language].normal}
                </Button>
                <Col md={10} lg={8} className="p_container text-center bg-body">
                    <p className="p text-body">{translations[language].normal_items}</p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Button className="diffButton">
                    <i className="me-2"><BsJoystick/></i>{translations[language].hard}
                </Button>
                <Col md={10} lg={8} className="p_container text-center bg-body">
                    <p className="p text-body">{translations[language].hard_items}</p>
                </Col>
            </Row>
        </>
    );
}

export default DifficultButton;