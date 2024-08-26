import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3  from "../assets/img/project-img3.png";

export const Projects = () =>{

    const projects = [
        {
            title:"Bussines Intelligence",
            description: "Data Analytics",
            imgUrl: projImg1,
        },
        {
            title:"Calculadora Inteligente",
            description: "Data Analytics",
            imgUrl: projImg2,
        },
        {
            title:"Bussines Intelligence",
            description: "Data Analytics",
            imgUrl: projImg3,
        },
        {
            title:"Bussines Intelligence",
            description: "Data Analytics",
            imgUrl: projImg1,
        },
        {
            title:"Bussines Intelligence",
            description: "Data Analytics",
            imgUrl: projImg2,
        },
        {
            title:"Bussines Intelligence",
            description: "Data Analytics",
            imgUrl: projImg3,
        },

    ];

    return(

        <section className="project" id ="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Aqui algunos de mis proyectos persolanes</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                         <Nav variant ="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Seccion 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey ="second">Seccion 2 </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey ="third">Seccion 3</Nav.Link>
                        </Nav.Item>
                        </Nav> 
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return (
                                                <ProjectCard
                                                key ={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third"> lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="#"></img>
        </section>
        
    )
}