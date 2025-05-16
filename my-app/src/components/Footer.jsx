import { useLanguage } from "./LanguageContext";
import { Row, Col} from "react-bootstrap";
import { BsMoon, BsGlobe, BsSun } from "react-icons/bs";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";
import { useEffect, useState } from "react";

const translations = {
    en: { name: "Ninjas Group"},
    it: { name: "Gruppo Ninjas"}
};

function Foot () {
    
    const [ darkMode, setDarkMode ] = useState(false);

    useEffect(() => {
        // se darkMode === true, aggiungi data-bs-theme al tag html
        if (darkMode) {
            document.documentElement.setAttribute("data-bs-theme", "dark");
        }
        //altrimenti, rimuovi
        else 
            document.documentElement.removeAttribute("data-bs-theme");
    }, [darkMode]);

    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
            document.documentElement.lang = language;
    }, [language]);

    return(
        <>
            <Row className="footer bg-body text-body justify-content-between align-items-center">
                <Col className="justify-content-left" xs="auto">
                    <p className="mb-0">&copy;{translations[language].name}</p>
                </Col>
                <Col xs="auto" className="d-flex justify-content-left">
                    <a className="footer_right ms-3" onClick={() => setDarkMode(oldMode => !oldMode)} >
                        { darkMode ? <BsSun/> : <BsMoon/>}</a>
                    <a className="footer_right ms-3" onClick={toggleLanguage}><BsGlobe /></a>
                </Col>
            </Row>
        </>
    );
}

export default Foot;