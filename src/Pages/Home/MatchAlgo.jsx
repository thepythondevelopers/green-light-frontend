import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiQuestionMark } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiLocationArrow } from 'react-icons/ti';

const MatchAlgo = () => {
    return (
        <>
            <div className="match-algoSec space">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col md={4}>
                            <div className="match-AlgoCont">
                                <h2 clasName="cmn_heading">Matching Algorithm</h2>
                                <p>Our algorithm shows you matches based on geographical location and the interested gender(s) selected.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="match-algoImg">
                                <div className="userInfoCard">
                                    <h6>Emily<br /> 27, San Francisco</h6>
                                    <p>Senior Analyst</p>
                                </div>
                                <picture>
                                    <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/match-algo.png" />
                                    <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/match-algo.png" />
                                    <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/match-algo.png" />
                                    <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/match-algo.png" />
                                    <img src="assets/images/match-algo.png" className="img-fluid" alt="login" />
                                </picture>
                                <div className="userStatus">
                                    <div className="icons">
                                        <span className="red-light light">
                                            <img src="/assets/images/status-red.png" alt="Status" />
                                            <AiOutlinePlus />
                                        </span>
                                        <span className="yellow-light light">
                                            <img src="/assets/images/status-yellow.png" alt="Status" />
                                            <BiQuestionMark />
                                        </span>
                                        <span className="green-light light">
                                            <img src="/assets/images/status-green.png" alt="Status" />
                                            <TiLocationArrow />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default MatchAlgo;