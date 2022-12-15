// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel  from 'react-multi-carousel';
import { Row, Col, Container } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills" >
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="skill-bx wow bg-dark">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={1000 * 3}
                                infinite={true}
                                renderButtonGroupOutside
                                className="skill-slider">
                                <div className="item ">
                                    <h4>Basic Front End</h4>
                                    <Row>
                                        <Col xs={12} md={3} xl={3} className='skill-title'>Html</Col>
                                        <Col xs={12} md={9} xl={9} style={{ margin: 'auto 0' }}>
                                            <ProgressBar animated striped variant="success" now={80} label={`${80}%`} />                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={12} md={3} xl={3} className='skill-title'>Css</Col>
                                        <Col xs={12} md={9} xl={9} style={{ margin: 'auto 0' }}>
                                            <ProgressBar animated striped variant="success" now={90} label={`${90}%`} />                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={12} md={3} xl={3} className='skill-title'>Javascript</Col>
                                        <Col xs={12} md={9} xl={9} style={{ margin: 'auto 0' }}>
                                            <ProgressBar animated striped variant="success" now={80} label={`${80}%`} />                                            
                                        </Col>
                                    </Row>
                                </div>
                                <div className="item ">
                                    <h4>Javascript Frameworks</h4>
                                    <Row>
                                        <Col xs={12} md={3} xl={3} className='skill-title'>JQuery</Col>
                                        <Col xs={12} md={9} xl={9} style={{ margin: 'auto 0' }}>
                                            <ProgressBar animated striped variant="primary" now={80} label={`${100}%`} />                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={12} md={3} xl={3} className='skill-title'>React</Col>
                                        <Col xs={12} md={9} xl={9} style={{ margin: 'auto 0' }}>
                                            <ProgressBar animated striped variant="warning" now={90} label={`${50}%`} />                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={12} md={3} xl={3} className='skill-title'>Vue</Col>
                                        <Col xs={12} md={9} xl={9} style={{ margin: 'auto 0' }}>
                                            <ProgressBar animated striped variant="success" now={80} label={`${70}%`} />                                            
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
              </section>
    )
}