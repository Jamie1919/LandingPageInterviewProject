import { Col, Container, Row } from "reactstrap";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
/* eslint-disable */
function ContactComponent() {
  return (
    <div className="contact-container-bg">
      <Container className="contact-component">
        <Row>
          <Col xs={12} md={6}>
            <h1>Contact Information</h1>
            <p>
             Here you can find all the information needed to contact us.
            </p>
            <div>
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-linkedin-square"></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Links</b>
            <br />
            <br />
            <h6>Overview</h6>
            <p>
             Personal Contact details   
            </p>
            <h6>Email</h6>
            <p>
            JohnDoe183@gmail.com
            </p>
            <h6>Contact</h6>
            <p>
            +27 (061) 167-7890
            </p>
          </Col>
          <Col xs={12} md={3}>
            <b>Company</b>
            <br />
            <br />
            <h6>Overview</h6>
            <p>
             Company Contact details   
            </p>
            <h6>Email</h6>
            <p>
            ThePlatform@gmail.com
            </p>
            <h6>Contact</h6>
            <p>
            +27 (061) 185-6932
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;