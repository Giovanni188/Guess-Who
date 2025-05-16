import { useLanguage } from "./LanguageContext";
import {Col, Row, Button} from "react-bootstrap";
import { BsJoystick } from "react-icons/bs";
import DifficultButton from "./DifficultButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";
import { useState } from "react";

const translations = {
    en: { 
        title: "Guess the champion!!!",
        description: "The goal of the game is to guess the hidden football player. To do this, you need to choose one of the categories (Age, Nationality, etc.) and guess the correct answer. The players who do not match that category will be excluded. When you want to guess the hidden player, you can select their photo, and if it's correct, you win the game!",
        start: "Start a match!"
    },
    it: {
        title: "Indovina il campione!!!",
        description: "L'obiettivo del gioco è indovinare il calciatore nascosto. Per farlo, devi scegliere una delle categorie (Età, Nazionalità, ecc.) e indovinare la risposta corretta. I giocatori che non corrispondono a quella categoria verranno esclusi. Quando pensi di aver capito chi è il calciatore nascosto, puoi selezionare la sua foto e, se è quella giusta, vinci la partita!",
        start: "Inizia una partita!"
    }
};

function Rule () {

    const { language } = useLanguage();

    const [mode, setMode] = useState();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setMode("difficult");
        setIsDisabled(true);    
    }

    return(
        <>
            <Row className="justify-content-center">
                <Col md={10} lg={8} className="h2_container text-center bg-body">
                    <h2 className="h2_title">{translations[language].title}</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={10} lg={8} className="p_container text-center bg-body">
                    <p className="p text-body">{translations[language].description}</p>
                </Col>
            </Row>  
            <Row className="justify-content-center align-items-center">
                <Col md={10} lg={8} className="d-flex justify-content-center ">
                    <Button className="Startbutton" onClick={handleClick} disabled={isDisabled}>
                        <i className="me-2"><BsJoystick/></i>{translations[language].start}
                    </Button>
                </Col>
                {mode === "difficult" && <div className="d-flex align-items-center justify-content-center">
                            <DifficultButton /> 
                        </div>
                    }
            </Row>      
        </>
    );
}

export default Rule;