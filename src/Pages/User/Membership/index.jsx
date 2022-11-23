import React from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col } from "react-bootstrap";
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import "../../../assets/css/membership.css";

const Membership = () => {
    return (
        <>
            <Header />
            <ProfileBanner />
            <section className="body-wrap space">
                <Container>
                    <h2 className="cmn-heading2 text-center">Upgrade to Premium</h2>
                    <div className="membership-wrap">
                        <Row className="justify-content-evenly">
                            <Col md={6} lg={4}>
                                <div className="membership-box">
                                    <h3 className="membership-box-heading">Upgrade to Premium</h3>
                                    <div className="membership-body">
                                        <p>Recurring / Non-Recurring</p>
                                        <ul className="membership-features">
                                            <li> <AiFillCheckCircle /> See Last Online for Green</li>
                                            <li> <AiFillCheckCircle /> Read Receipts on all conversations</li>
                                            <li> <AiFillCheckCircle /> Search by Standard Fields on Registration Page</li>
                                            <li> <AiFillCheckCircle /> Search by Free Text Fields on Registration Page</li>
                                            <li> <AiFillCheckCircle /> Up to 12 images instead of 6 images</li>
                                            <li> <AiFillCheckCircle /> Undo the last Red Light</li>
                                        </ul>
                                        <ul className="membership-price-list">
                                            <li>$9.99 <span>/month</span></li>
                                            <li>$1.99 <span>/day</span></li>
                                        </ul>
                                        <button className="cmn_btn cmn_green w-100 rounded-pill">Upgrade Now <MdArrowForwardIos /></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="advertisement-landscape">
                            <picture>
                                <source media="(min-width:768px)" type="image/webp" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <source media="(min-width:768px)" type="image/jpg" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <source media="(max-width:767px)" type="image/webp" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <source media="(max-width:767px)" type="image/jpg" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <img src="/assets/images/auth-sidebar-bottom.png" className="img-fluid" alt="login" />
                            </picture>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Membership;