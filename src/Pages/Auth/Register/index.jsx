import React from "react";
import '../../../assets/css/auth.css';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

const Register = () => {
    return (
        <>
            <div className="auth-body">
                <Row className="m-0 align-items-center">
                    <Col md={6} className="p-0">
                        <div className="auth-imageSide">
                            <picture className="auth-bigImg">
                                <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/auth-sidebar-top.png" />
                                <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/auth-sidebar-top.png" />
                                <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/auth-sidebar-top.png" />
                                <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/auth-sidebar-top.png" />
                                <img src="assets/images/auth-sidebar-top.png" className="img-fluid" alt="login" />
                            </picture>
                            <picture className="auth-portrait">
                                <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/auth-sidebar-bottom.png" />
                                <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/auth-sidebar-bottom.png" />
                                <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/auth-sidebar-bottom.png" />
                                <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/auth-sidebar-bottom.png" />
                                <img src="assets/images/auth-sidebar-bottom.png" className="img-fluid" alt="login" />
                            </picture>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="auth-cont">
                            <h3>Welcome to the Green Light Future!</h3>
                            <picture>
                                <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/auth-heart.png" />
                                <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/auth-heart.png" />
                                <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/auth-heart.png" />
                                <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/auth-heart.png" />
                                <img src="assets/images/auth-heart.png" className="img-fluid" alt="login" />
                            </picture>
                            <p>Once finds you one Match per day, every day, chosen especially for you.</p>
                            <Link className="cmn_btn cmn_green" to={"/signup"}>Join Us</Link>
                            <Link className="cmn_btn" to={"/login"}>Sign In</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Register;