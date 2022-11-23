import React, { useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import { Nav, Tab, Col, Row, Container } from 'react-bootstrap';
import "../../../assets/css/matches.css";
import "../../../assets/css/dashboard.css";
import { Link } from "react-router-dom";
import { MdOutlineReport } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";
import { CiFaceSmile } from "react-icons/ci";

const Chat = () => {
    return (
        <>
            <Header />
            {/* <chatTab /> */}
            <section className="body-wrap chat-body cmnTab-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="chat">
                    <Nav variant="pills" className="nav-tabs">
                        <Nav.Item>
                            <Link className="nav-link" to={"/user/contact-list"}>Matches</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="chat">Chat</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Container>
                            <Tab.Pane className="space" eventKey="chat">
                                <div className="info-card">
                                    <div class="cmn_heading_box"><h5 class="inner_cmn_heading">Jason Roy</h5></div>
                                    <div className="chat-box">
                                        <div className="chatReceiver chat-box-card">
                                            <img src="/assets/images/profile2.png" alt="Receiver" />
                                            <div className="chat-message">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <span className="chat-time">10 min ago</span>
                                            </div>
                                        </div>
                                        <div className="chatSender chat-box-card">
                                            <div className="chat-message">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <span className="chat-time">10 min ago</span>
                                            </div>
                                            <img src="/assets/images/profile2.png" alt="Sender" />
                                        </div>
                                        <div className="chatReceiver chat-box-card">
                                            <img src="/assets/images/profile2.png" alt="Receiver" />
                                            <div className="chat-message">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <span className="chat-time">10 min ago</span>
                                            </div>
                                        </div>
                                        <div className="chatSender chat-box-card">
                                            <div className="chat-message">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <span className="chat-time">10 min ago</span>
                                            </div>
                                            <img src="/assets/images/profile2.png" alt="Sender" />
                                        </div>
                                        <div className="chatReceiver chat-box-card">
                                            <img src="/assets/images/profile2.png" alt="Receiver" />
                                            <div className="chat-message">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <span className="chat-time">10 min ago</span>
                                            </div>
                                        </div>
                                        <div className="chatSender chat-box-card">
                                            <div className="chat-message">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <span className="chat-time">10 min ago</span>
                                            </div>
                                            <img src="/assets/images/profile2.png" alt="Sender" />
                                        </div>
                                    </div>
                                    <div className="chatBottomCard">
                                        <CiFaceSmile />
                                        <input type="text" placeholder="Type a message..." />
                                        <button class="cmn_green cmn_btn"><TiLocationArrow />Send</button>
                                    </div>
                                </div>
                                <div className="report"><MdOutlineReport />Report User</div>
                            </Tab.Pane>
                        </Container>
                    </Tab.Content>
                </Tab.Container>
            </section>
            <Footer />
        </>
    )
}

export default Chat;