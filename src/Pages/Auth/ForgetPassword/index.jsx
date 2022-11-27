import React, { useState, useEffect } from "react";
import '../../../assets/css/auth.css';
import { Link } from "react-router-dom";
import { Row, Col, Button, Form, Alert } from 'react-bootstrap';
import axios from "axios";
const api = " http://44.211.151.102/api";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailSuccess, setEmailSuccess] = useState("");
    console.log("email", email)
    const [isSubmit, setIsSubmit] = useState(false);
    // On Validation
    // const onValidation = (email) => {
    //     const error = "";
    //     if (!email) {
    //         error = " Please fill email address"
    //     } else {
    //         error = " Please fill email address"
    //     }
    //     return error;
    // }
    const handleForSubmit = (e) => {
        e.preventDefault();
        // setEmailError(onValidation(email));
        setIsSubmit(true);
        if (email === "" && isSubmit) {
            console.log("formVar", email)
        }
        LoginApi(email);
    }

    // Handle Login API
    const LoginApi = (formResp) => {
        axios.post(`${api}/forget-password`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            email: formResp,
        })
            .then(result => {
                setEmailError("")
                console.log("LoginApi Success::", result.data.message);
                setEmailSuccess(result.data.message);
            })
            .catch(error => {
                setEmailSuccess("")
                console.log("LoginApi error::", error);
                setEmailError(error.response.data.error[0].msg);
            })
    }
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
                            <p>Enter the email address associated with your  account and we'll send you a link to reset your password.</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Button className="cmn_btn cmn_green" variant="primary" type="submit" onClick={(e) => handleForSubmit(e)}>
                                    Continue
                                </Button>
                                {emailError && <Alert variant="danger" className="mt-3"> <p className="text-center">{emailError}</p></Alert>}
                                {emailSuccess && <Alert variant="success" className="mt-3"> <p className="text-center">{emailSuccess}</p></Alert>}
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