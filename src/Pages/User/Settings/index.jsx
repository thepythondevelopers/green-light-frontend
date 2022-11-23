import React from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa';
import "../../../assets/css/info-card.css";

const Settings = () => {
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
                                    <h5 className="inner_cmn_heading ml-3">Settings</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box border-0">
                                        <h6 className="icon-heading"><img src="/assets/images/id-card.svg" alt="id-card" />My Membership</h6>
                                        <p className="icon-box-pad">Raise your chances of success</p>
                                        <Link to={"/user/membership"} className="cmn_btn membership_btn icon-box-pad">Become a Premium Member now</Link>
                                        <ul className="membership-plan-list">
                                            <li className="membership-list-heading">
                                                <h6>Your Plan:</h6>
                                                <h6>Renewal Date</h6>
                                                <h6>Price</h6>
                                                <h6>Actions</h6>
                                            </li>
                                            <li className="membership-list">
                                                <p>Recurring Plan</p>
                                                <p>Jan 31, 2022</p>
                                                <p>$1.99/month</p>
                                                <p>Cancel Plan</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="form-box border-0">
                                        <div className="form-flex">
                                            <h6 className="icon-heading mb-0"><img src="/assets/images/notification-deactivated.svg" alt="notification-deactivated" />Deactivate Account</h6>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                className="account-deactivate"
                                            />
                                        </div>
                                        <div className="account-warning">
                                            <p>Hi<br />
                                                We're sorry to hear you'd like to delete your account.
                                                If you're just looking to take a break, you can always temporarily
                                                disable your GLF account instead.</p>
                                            <button className="cmn_btn cmn_green">Confirm</button>
                                        </div>
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

export default Settings;