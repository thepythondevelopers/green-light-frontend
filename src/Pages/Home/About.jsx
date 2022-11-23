import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
const About = () => {
    return(
        <>
            <div className="aboutSec space">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="about-cont">
                                <h2 className="cmn-heading2">About Us</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Link to={"/register"} className="cmn_btn cmn_green">Find your Partner</Link>
                            </div>
                        </Col>
                        <Col md={6}>
                        <picture className="about_img">
                            <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/about.png" />
                            <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/about.png" />
                            <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/about.png" />
                            <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/about.png" />
                            <img src="assets/images/about.png" className="img-fluid" alt="about" />
                        </picture>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default About;