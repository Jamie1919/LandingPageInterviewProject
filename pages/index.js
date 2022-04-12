import {Container, Row, Col} from 'reactstrap';
import Image from 'next/image';
import imageURL from '../public/LandingPage/TopComponent.png';
/* eslint-disable */
function TopContainer() {
    return (
      <>
        <div className="background"></div>
        <div className="texture">
          <Container className="container-top">
            <Row className="section-top">
              <Col xs={12} md={6} className="section-top-left">
                <img src="/LandingPage/TopComponent.png" className="img-fluid"/>
              </Col>
              <Col xs={12} md={6} className="section-top-right shadow">
                <div className="">
                  <img
                    className="plate-img img-fluid"
                    
                  />
                  <img
                    className="plate-img img-fluid"
                   
                  />
                </div>
                <h6>The Platform</h6>
                <h2>Get Your Gaming News</h2>
                <h1>The Platform</h1>
                <p>
                  This is where you can get all your updates and news for Gaming
                </p>
                <button className="btn btn-custom">Download App</button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default TopContainer;