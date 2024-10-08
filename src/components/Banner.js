/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import headerImg from "../assets/img/logo1.PNG";
import TypingEffect from "./funtions/TypingEffect";
import 'animate.css';
import TrackVisibility from "react-on-screen";



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
      <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a mi Portfolio</span>
                <h1>{`Gustavo Escobar`} <span ><span className="wrap"></span><TypingEffect></TypingEffect></span></h1>
                  <p>Ingeniero de Sistemas Computacionales.</p>
                  <p>Con 24 años, me apasionan las nuevas tecnologías. Estoy en constante búsqueda de perfeccionar mis habilidades y aplicar mi experiencia en el desarrollo de software y tecnología, creando soluciones innovadoras y efectivas.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )

}
