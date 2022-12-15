import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { LogoIcon } from "./LogoIcon";
import { SocialIcon } from "./SocialIcon";

export const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <LogoIcon/> 
          </Col> */}
          <Col 
          // size={12} sm={6} 
          className="text-center">
          <SocialIcon />
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}