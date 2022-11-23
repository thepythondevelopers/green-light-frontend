import React, { useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import { Link } from "react-router-dom";
import { Nav, Tab, Col, Row, Container } from 'react-bootstrap';
import "../../../assets/css/chat.css";
import "../../../assets/css/dashboard.css";

const ContactList = () => {
    return (
        <>
            <Header />
            {/* <ContactListTab /> */}
            <section className="body-wrap chat-body cmnTab-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="contactList">
                    <Nav variant="pills" className="nav-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="contactList">Matches</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/user/chat"}>Chat</Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Container>
                            <Tab.Pane className="space" eventKey="contactList">
                                <div className="info-card">
                                    <div class="cmn_heading_box"><h5 class="inner_cmn_heading">Recent Talks</h5></div>
                                    <div className="recentListBox">
                                        <ul className="recentList">
                                            <li className="recentInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                    <p>Can you please send me</p>
                                                    <span>02:25 pm</span>
                                                </div>
                                            </li>
                                            <li className="recentInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status offline"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                    <p>Can you please send me</p>
                                                    <span>02:25 pm</span>
                                                </div>
                                            </li>
                                            <li className="recentInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                    <p>Can you please send me</p>
                                                    <span>02:25 pm</span>
                                                </div>
                                            </li>
                                            <li className="recentInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status offline"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                    <p>Can you please send me</p>
                                                    <span>02:25 pm</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="inviteListBox">
                                        <ul className="inviteList">
                                            <li className="inviteInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                </div>
                                            </li>
                                            <li className="inviteInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status offline"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                </div>
                                            </li>
                                            <li className="inviteInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                </div>
                                            </li>
                                            <li className="inviteInfo">
                                                <div className="contact-list-img">
                                                    <img src="/assets/images/profile-icon.png" alt="contact info" />
                                                    <span class="status offline"></span>
                                                </div>
                                                <div className="contact-list-info">
                                                    <h6>Hero Alom</h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Container>
                    </Tab.Content>
                </Tab.Container>
            </section>
            <Footer />
        </>
    )
}

export default ContactList;