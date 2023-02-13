import React, { useState, useEffect } from "react";
import '../../../assets/css/auth.css';
import { Link } from "react-router-dom";
import { Row, Col, Button, Form, Alert } from 'react-bootstrap';
import axios from "axios";
const api = " https://greenlightapi.pamsar.com/api";

const CreatePassword = () => {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState("");
    console.log("password", password)
    const [isSubmit, setIsSubmit] = useState(false);
    // On Validation
    // const onValidation = (password) => {
    //     const error = "";
    //     if (!password) {
    //         error = " Please fill password address"
    //     } else {
    //         error = " Please fill password address"
    //     }
    //     return error;
    // }
    const handleForSubmit = (e) => {
        e.preventDefault();
        // setPasswordError(onValidation(password));
        setIsSubmit(true);
        if (password === "" && isSubmit) {
            console.log("formVar", password)
        }
        LoginApi(password);
    }

    // Handle Login API
    const LoginApi = (formResp) => {
        axios.post(`${api}/change-password`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            password: formResp,
        })
            .then(result => {
                setPasswordError("")
                console.log("LoginApi Success::", result.data.message);
                setPasswordSuccess(result.data.message);
            })
            .catch(error => {
                setPasswordSuccess("")
                console.log("LoginApi error::", error);
                setPasswordError(error.response.data.error[0].msg);
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
                            <h3>Change Passwod</h3>
                            <p>Enter the password that you want to add with your account</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="pass" placeholder="Enter password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button className="cmn_btn cmn_green" variant="primary" type="submit" onClick={(e) => handleForSubmit(e)}>
                                    Reset Password
                                </Button>
                                {passwordError && <Alert variant="danger" className="mt-3"> <p className="text-center">{passwordError}</p></Alert>}
                                {passwordSuccess && <Alert variant="success" className="mt-3"> <p className="text-center">{passwordSuccess}</p></Alert>}
                            </Form>
                            <p className="auth-bottom-text">Dont have an account? <Link className="simple">Join free today</Link></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default CreatePassword;