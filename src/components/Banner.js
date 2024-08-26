import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TypingEffect from "./funtions/TypingEffect";




export const Banner  = () => {

    const [loopNum, setLoopNum] = useState (0);
    const [isDeleting, setIsDeleting] = useState (false);
    const toRotate = ["Web Developer", "Software Engineer", "Backend Developer"];
    const [text, setText] = useState ('');
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <section className="banner" id="Home">

            <Container>

                <Row className="align-items-center">
                    <Col xs={12} md={10} xl={7}>
                    <span className="tagline">Bienvenido a mi Portfolio</span>
                    <h1>{`Hi There, I'm `}<span className="wrap"><h1>{`Gustavo Escobar `}</h1><TypingEffect /></span></h1>
                    <p>Soy Bachiller en Ingenieria de Sistemas de Trujillo, Perú. 
                      
                    </p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle  size={25}/></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}