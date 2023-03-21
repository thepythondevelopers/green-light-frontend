import React, { useEffect, useState } from "react";
import '../../../assets/css/auth.css';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Alert } from 'react-bootstrap';
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import jwtDecode from 'jwt-decode';


const api = " https://greenlightapi.pamsar.com/api";

const Login = () => {
    const navigate = useNavigate();
    // Form Variables
    const [formVar, setFormVar] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState("");
    const [loginError, setLoginError] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    // On Change Event
    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormVar({ ...formVar, [name]: value });
    }

    // On Validation
    const onValidation = (values) => {
        const error = {};
        if (!values.email) {
            error.email = " Please fill email address"
        }
        if (!values.password) {
            error.password = " Please fill password"
        }
        return error;
    }
    // Form Submit
    const handleForSubmit = (e) => {
        e.preventDefault();
        setErrors(onValidation(formVar));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log("formVar", formVar)
            LoginApi(formVar);
        }
    }, [errors]);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log("formVar", formVar)
            LoginApi(formVar);
        }
    }, [errors]);

    // Handle Login API
    const LoginApi = (formResp) => {
        axios.post(`${api}/sign-in`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            email: formResp.email,
            password: formResp.password
        })
            .then(result => {
                console.log("LoginApi result::", result);
                if (!result.data.error) {
                    setLoginError("");
                    setMessage("Sucessfully Login! You will redirected to the Personal Info Page");
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    setTimeout(() => {
                        setMessage("");
                        navigate("/user/personal-info");
                    }, 2000);
                } else {
                    setLoginError(result.data.error)
                }
            })
            .catch(error => {
                console.log("LoginApi error::", error);
            })
    }


      const responseFacebook = (response) => {
        console.log(response);
      }
      
    return (
        <>
            <div className="auth-body">
                <Row className="m-0">
                    <Col md={6} className="p-0">
                        <div className="auth-imageSide">
                            <picture className="auth-imageSide">
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
                    <Col md={6} className="align-self-center">
                        <div className="auth-cont">
                            <div className="backbtn">
                                <Link to={"/register"} className="simpleLink"><IoIosArrowBack />Back</Link>
                            </div>
                            <h6>Welcome back</h6>
                            <h3>Sign Up to your Account!</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address*</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email address" value={formVar.email} required onChange={(e) => handleInputChange(e)} />
                                    {errors?.email && <Form.Text className="error">{errors?.email}</Form.Text>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password*</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Enter password" value={formVar.password} onChange={(e) => handleInputChange(e)} />
                                    {errors?.password && <Form.Text className="error">{errors?.password}</Form.Text>}
                                </Form.Group>
                                <div className="auth-login-box">
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Link to={"/forget-password"} className="cmn_link">Forgot password?</Link>
                                </div>
                                {message && <Alert variant="success"> <p>{message}</p></Alert>}
                                {loginError && <Alert variant="danger"> <p>{loginError}</p></Alert>}
                                <Button className="cmn_btn cmn_green" variant="primary" type="submit" onClick={(e) => handleForSubmit(e)}>
                                    Sign In
                                </Button>
                            </Form>
                            <Button className="cmn_btn"> <img src="assets/images/google.svg" alt="Google"  /> Sign In with Gmail</Button>

                            <GoogleLogin
                            onSuccess={credentialResponse => {
                                // if (credentialResponse.credential != null) {
                                //     const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
                                //     console.log(USER_CREDENTIAL);
                                //    }
                            }}
                            onError={() => {
                              console.log('Login Failed');
                            }}
                          />
                            <Button className="cmn_btn"><img src="assets/images/facebook.svg" alt="Facebook" />  Sign In with Facebook</Button>

                            <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                          />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Login;