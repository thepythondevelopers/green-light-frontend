import React from "react";
import {Row, Col} from "react-bootstrap";

const Features = () => {
    return(
        <>
            <div className="featureSec">
                <Row className="m-0 align-items-center">
                    <Col md={6}>
                        <picture className="full-width">
                            <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/amazing-feature.png" />
                            <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/amazing-feature.png" />
                            <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/amazing-feature.png" />
                            <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/amazing-feature.png" />
                            <img src="assets/images/amazing-feature.png" className="img-fluid" alt="login" />
                        </picture>
                    </Col>
                    <Col md={6}>
                        <div className="featureWrap">
                            <h2 className="cmn-heading2 text-center">Amazing Features</h2>
                            <ul className="featuresList">
                                <li className="featureItem">
                                    <img src="assets/images/profile.svg" alt="feature1" />
                                    <h3>Secured Profile</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </li>
                                <li className="featureItem">
                                    <img src="assets/images/block.svg" alt="feature2" />
                                    <h3>Annoyed</h3>
                                    <p>Report, hide, or block anyone, anytime</p>
                                </li>
                                <li className="featureItem">
                                    <img src="assets/images/people-arrow.svg" alt="feature3" />
                                    <h3>Not Interested / Sure?</h3>
                                    <p>No problem, we’ve got a button for that</p>
                                </li>
                                <li className="featureItem">
                                    <img src="assets/images/chat-dots.svg" alt="feature4" />
                                    <h3>Chatting</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Features;