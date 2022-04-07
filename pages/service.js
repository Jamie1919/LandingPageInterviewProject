import { Col, Container, Row } from "reactstrap";
import Image from 'next/image';
/* eslint-disable */
function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <Image src={"LandingPage/ServiceComponent1.png"} className="img-fluid service-img" />
            <h2>Real Time Updates</h2>
            <p>
              We will give you the quickest and best updates as soon as possible.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image src={"LandingPage/ServiceComponent2.png"} className="img-fluid service-img" />
            <h2>Best Information</h2>
            <p>
              The best and up to date information for all your favourite gaming needs.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image
              src={"LandingPage/ServiceComponent3.png"}
              className="img-fluid service-img"
            />
            <h2>Quality Content</h2>
            <p>
              You will give you all the best content from the creators and what gaming coneynt they provide.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;