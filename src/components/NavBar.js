
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LogoIcon } from "./LogoIcon";
import { SocialIcon } from "./SocialIcon";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onUpdateActiveClass = (value) => {
        return activeLink === value ? 'active navbar-link' : 'navbar-link'
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand>
                    <LogoIcon />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={onUpdateActiveClass('home')} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={onUpdateActiveClass('skills')} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={onUpdateActiveClass('projects')} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    
                    <Nav>
                        <Nav.Link href="#connect" className={onUpdateActiveClass('connect')}>
                            Let’s connect
                        </Nav.Link>
                    </Nav>
                    <Nav style={{display:'flex',    alignItems: 'center' ,margin: '10px 0px'}}>
                        <SocialIcon />



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}