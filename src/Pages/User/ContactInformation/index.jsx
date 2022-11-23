import React, { useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import "../../../assets/css/info-card.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import axios from "axios";
const api = " http://44.211.151.102/api";

const ContactInformation = () => {
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [contactInfo, setContactInfo] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        interested_in: "",
        height: "",
        eyes: "",
        hair_color: "",
        interests: []
    });
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
                                    <h5 className="inner_cmn_heading ml-3">Location and Contact Information</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="location">
                                                    <Form.Label>Location:</Form.Label>
                                                    <Form.Select defaultValue="Palmyra, New York">
                                                        <option>Palmyra, New York</option>
                                                        <option>Female</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="mobile">
                                                    <Form.Label>Mobile</Form.Label>
                                                    <Form.Control type="tel" placeholder="Your mobile number" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="email">
                                                    <Form.Label>Email address:</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email address" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="country">
                                                    <Form.Label>Country:</Form.Label>
                                                    <Form.Select defaultValue="Country / Region">
                                                        <option>Country / Region</option>
                                                        <option>5'6”</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="state">
                                                    <Form.Label>State:</Form.Label>
                                                    <Form.Select defaultValue="State / Province">
                                                        <option>State / Province</option>
                                                        <option>5'6”</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="city">
                                                    <Form.Label>City:</Form.Label>
                                                    <Form.Select defaultValue="Your city">
                                                        <option>Your city</option>
                                                        <option selected>Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="zipcode">
                                                    <Form.Label>Zipcode:</Form.Label>
                                                    <Form.Select defaultValue="Your ZIP code">
                                                        <option>Your ZIP code</option>
                                                        <option selected>Blonde</option>
                                                    </Form.Select>
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

export default ContactInformation;