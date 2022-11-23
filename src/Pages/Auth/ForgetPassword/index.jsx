import React from "react";
import '../../../assets/css/auth.css';
import { Link } from "react-router-dom";
import { Row, Col, Button, Form } from 'react-bootstrap';

const ForgetPassword = () => {
    return (
        <>
            <div className="auth-body">
                <Row className="m-0">
                    <Col md={6} className="p-0">
                        <div className="auth-imageSide">
                            <picture>
                                <source media="(min-width:768px)" type="image/webp" datasrcset="assets/images/auth-sidebar-top.png" />
                                <source media="(min-width:768px)" type="image/jpg" datasrcset="assets/images/auth-sidebar-top.png" />
                                <source media="(max-width:767px)" type="image/webp" datasrcset="assets/images/auth-sidebar-top.png" />
                                <source media="(max-width:767px)" type="image/jpg" datasrcset="assets/images/auth-sidebar-top.png" />
                                <img src="assets/images/auth-sidebar-top.png" className="img-fluid" alt="login" />
                            </picture>
                            <picture>
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
                            <div className="backbtn">
                                <Link to={"/register"} className="simpleLink">Back</Link>
                            </div>
                            <h3>Forgot your password?</h3>
                            <p>Enter the email address associated with your  account and we’ll send you a link to reset your password.</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Button className="cmn_btn cmn_green" variant="primary" type="submit">
                                    Continue
                                </Button>
                            </Form>
                            <p className="auth-bottom-text">Dont have an account? <Link className="simple">Join free today</Link></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default ForgetPassword;