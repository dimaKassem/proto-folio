import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../asserts/img/proj-1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const frontEndProjects = [
        {
            title: "Landing Page",
            description: "Using Html & Css Only",
            imgUrl: projImg1,
            projectLink: '#',
        },
        {
            title: "Movie",
            description: "Using Html Css Javascript",
            imgUrl: projImg1,
            projectLink: '#',
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className="mb-5">Projects</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 flex-column flex-md-row justify-content-evenly " id="pills-tab">
                                            <Nav.Item size={12} md={4} >
                                                <Nav.Link eventKey="first" >Front End Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item sm={12} md={4}>
                                                <Nav.Link eventKey="second">Vue Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item sm={12} md={4} >
                                                <Nav.Link eventKey="third">React Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                            className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        frontEndProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    )
}