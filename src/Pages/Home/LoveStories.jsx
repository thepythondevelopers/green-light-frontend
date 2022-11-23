import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LoveStories = () => {
    return (
        <>
            <section className="love-stories">
                <Container>
                    <h2 className="cmn-heading2 text-center">Successful Love Stories</h2>
                </Container>
                <div className="love-story-box space">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className="love-story">
                                    <img src="assets/images/rating.png" alt="rating" />
                                    <h3>Louis Jabeth</h3>
                                    <span>Lorem ipsum Lorem ipsum</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="love-story">
                                    <img src="assets/images/rating.png" alt="rating" />
                                    <h3>Louis Jabeth</h3>
                                    <span>Lorem ipsum Lorem ipsum</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="love-story">
                                    <img src="assets/images/rating.png" alt="rating" />
                                    <h3>Louis Jabeth</h3>
                                    <span>Lorem ipsum Lorem ipsum</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default LoveStories;