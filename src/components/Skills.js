import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades
                            </h2>
                            <p>
                            Ingeniero de software con experiencia en Angular y React para desarrollo frontend, manejo de bases de datos SQL, y en el uso del framework de backend Spring Boot. Especializado en la creación de soluciones Full-Stack, con un enfoque en optimizar la experiencia del usuario. Comprometido con la innovación y la mejora continua en el desarrollo de aplicaciones web.
                            </p>
                            <Carousel responsive = {responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={meter1} alt='Image'/>
                                    <h5>Fronted Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Image'/>
                                    <h5>Backend Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='Image'/>
                                    <h5>IT Support</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='Image'/>
                                    <h5>SQL Server</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}