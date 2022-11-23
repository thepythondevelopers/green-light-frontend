import React from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import "../../../assets/css/info-card.css";

const PersonalPreferences = () => {
    return (
        <>
            <Header />
            <ProfileBanner />
            <section className="body-wrap space">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Sidebar />
                        </Col>
                        <Col md={8}>
                            <div className="info-card">
                                <div className="cmn_heading_box d-flex align-items-center">
                                    <FaUserCircle />
                                    <h5 className="inner_cmn_heading ml-3">Professional Information</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/car.svg" alt="car" />
                                                <Form.Group controlId="have-car">
                                                    <Form.Label>Have Car:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="have-car"
                                                                id={`reverse-${type}-have-car-1`}
                                                                label="Yes"
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="have-car"
                                                                type={type}
                                                                id={`reverse-${type}-have-car-2`}
                                                                label="No"
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/baseline-work.svg" alt="baseline-work" />
                                                <Form.Group controlId="work">
                                                    <Form.Label>Work:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/baseline-work.svg" alt="baseline-work" className="disable" />
                                                <Form.Group controlId="position">
                                                    <Form.Label className="multitext-label">Position:</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your job profile..." />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/baseline-work.svg" alt="baseline-work" className="disable" />
                                                <Form.Group controlId="employer">
                                                    <Form.Label className="multitext-label">Employer:</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your Employer's Name..." />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/education.svg" alt="education" />
                                                <Form.Group controlId="education">
                                                    <Form.Label>Education:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/education.svg" alt="education" className="disable" />
                                                <Form.Group controlId="degree">
                                                    <Form.Label className="multitext-label">Degree:</Form.Label>
                                                    <Form.Control type="degree" placeholder="Your degree..." />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/education.svg" alt="education" className="disable" />
                                                <Form.Group controlId="school">
                                                    <Form.Label className="multitext-label">School:</Form.Label>
                                                    <Form.Control type="text" placeholder="Your school..." />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box border-0">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/user-outlined.svg" alt="user-outlined" />
                                                <Form.Group controlId="about-me">
                                                    <Form.Label>About Me:</Form.Label>
                                                    <Form.Control as="textarea" aria-label="With textarea" placeholder="Write about yourself..." row="20" col="20" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-button-group d-flex justify-content-between">
                                        <button type="button" className="cmn_btn form-btn border">Cancel</button>
                                        <button type="button" className="cmn_btn form-btn cmn_green">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default PersonalPreferences;