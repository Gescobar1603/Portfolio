/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
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
                                Skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus dui, eget tincidunt felis fermentum id. Sed ut consequat risus. Sed viverra dolor at eros aliquam tincidunt. Integer ac vehicula felis, ac condimentum ligula. Duis blandit augue in libero vehicula, in fermentum risus varius.
                            </p>
                            <Carousel responsive = {responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={meter1} alt='Image'/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Image'/>
                                    <h5>Brand Identify</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='Image'/>
                                    <h5>Logo Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='Image'/>
                                    <h5>Web Development</h5>
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