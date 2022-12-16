import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import LandingPageImg from "../asserts/img/landingPage.png";
import SpecialDesignCompanyImg from "../asserts/img/specialDesignCompany.png";
import ProtoFolioImg from "../asserts/img/protoFolio.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const frontEndProjects = [
        {
            title: "Landing Page",
            description: "Using Html & Css Only",
            imgUrl: LandingPageImg,
            projectLink: 'https://dimakassem.github.io/landing-page/',
            githupLink:'https://github.com/dimaKassem/landing-page'
        },
        {
            title: "SpecialDesignCompany",
            description: "Using Html Css Javascript",
            imgUrl: SpecialDesignCompanyImg,
            projectLink: 'https://dimakassem.github.io/SpecialDesignCompany/',
            githupLink:'https://github.com/dimaKassem/SpecialDesignCompany'
        }
    ];
    const reactProjects = [
        {
            title: "Proto-Folio",
            description: "Using React & BootStrap",
            imgUrl: ProtoFolioImg,
            projectLink: 'https://dimakassem.github.io/proto-folio/',
            githupLink:'https://github.com/dimaKassem/proto-folio'
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
                                                <Row className="justify-content-evenly">
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
                                                <p>under Building</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            <Row className="justify-content-evenly">
                                                    {
                                                        reactProjects.map((project, index) => {
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