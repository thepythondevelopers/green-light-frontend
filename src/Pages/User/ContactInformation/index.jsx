import React, { useState, useEffect, } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import "../../../assets/css/info-card.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import axios from "axios";
const api = " http://44.211.151.102/api";

const ContactInformation = () => {
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [professionalInfo, setProfessionalInfo] = useState({
        email: "",
        have_car: "",
        work_position: "",
        work_employer: "",
        education_degree: "",
        education_school: "",
        about_me: ""
    });

    const handleProfessionalInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProfessionalInfo({ ...professionalInfo, [name]: value });
        console.log("professionalInfo name", name);
        console.log("professionalInfo value", value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        professionalInfoAPI(professionalInfo)
    }

    useEffect(() => {
        dispatch(getUserAPI());
    }, []);
    useEffect(() => {
        setProfessionalInfo(user);
    }, [user]);

    // Personal Preferences API
    const professionalInfoAPI = (data) => {
        console.log("data", data);
        fetch(`${api}/location-information`, {
            method: 'POST',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(result => {
                setProfessionalInfo(result);
                dispatch(getUserAPI());
                setMessage("Location Informations are successfully Updated.");
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            })
            .catch(error => {
                console.log('error', error);
                setErrorMessage(error);

            });
    }
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
                                                    <Form.Select defaultValue="Palmyra, New York" name="location" value={professionalInfo.location} onChange={(e) => { handleProfessionalInfo(e) }}>
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
                                                    <Form.Control type="tel" placeholder="Your mobile number" name="mobile" value={professionalInfo.mobile} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="email">
                                                    <Form.Label>Email address:</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email address" disabled name="email" value={professionalInfo.email} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="country">
                                                    <Form.Label>Country:</Form.Label>
                                                    <Form.Select defaultValue="Country / Region" name="country" value={professionalInfo.country} onChange={(e) => { handleProfessionalInfo(e) }}>
                                                        <option>Country / Region</option>
                                                        <option>5'6”</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="state">
                                                    <Form.Label>State:</Form.Label>
                                                    <Form.Select defaultValue="State / Province" name="state" value={professionalInfo.state} onChange={(e) => { handleProfessionalInfo(e) }}>
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
                                                    <Form.Select defaultValue="Your city" name="city" value={professionalInfo.city} onChange={(e) => { handleProfessionalInfo(e) }}>
                                                        <option>Your city</option>
                                                        <option selected>Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="zipcode">
                                                    <Form.Label>Zipcode:</Form.Label>
                                                    <Form.Select defaultValue="Your ZIP code" name="zipcode" value={professionalInfo.zipcode} onChange={(e) => { handleProfessionalInfo(e) }}>
                                                        <option>Your ZIP code</option>
                                                        <option selected>Blonde</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-button-group d-flex justify-content-between">
                                        <button type="button" className="cmn_btn form-btn border">Cancel</button>
                                        <button type="button" className="cmn_btn form-btn cmn_green" onClick={(e) => handleSubmit(e)}>Save Changes</button>
                                    </div>
                                    {message && <Alert variant="success"> <p className="text-center">{message}</p></Alert>}
                                    {errorMessage && <Alert variant="danger"> <p className="text-center">{errorMessage}</p></Alert>}
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