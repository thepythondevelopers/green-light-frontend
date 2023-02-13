import React, { useEffect, useState } from "react";
import '../../../assets/css/auth.css';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import CountryForm from "../../../assets/data/Country";
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { DayPicker, MonthPicker, YearPicker } from "react-dropdown-date";
import axios from "axios";

const api = " https://greenlightapi.pamsar.com/api";

const Signup = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    // Form Variables
    const [formVar, setFormVar] = useState({
        dob: "",
        day: "",
        month: "",
        year: "",
        display_name: "",
        email: "",
        password: "",
        cpassword: "",
        gender: "",
        interested_in: "",
        country: "",
        state: "",
        city: "",
        zipcode: "",
        latLng: {
            type: "Point",
            coordinates: [0, 0]
        }
    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [cPasswordVisible, setCPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState("");
    console.log("emailError", emailError);
    const [step, setStep] = useState(0);
    const formTitles = ["Sign Up to your Account!", "Sign up by answering a few questions:", "Almost done..."];

    // County State data
    const [ctyId, setCtyId] = useState(1);
    const [stateDrop, setStateDrop] = useState();

    const handleCountryChange = (e) => {
        const getCountryID = e.target.value;
        setFormVar({ ...formVar, "country": getCountryID });
        setCtyId(getCountryID)
    };
    useEffect(() => {
        let dataState;
        CountryForm.forEach((curelem) => {
            if (ctyId === curelem.country_id) {
                dataState = curelem.states;
            }
        });
        setStateDrop(dataState);

    }, [ctyId]);

    const [address, setAddress] = useState("");
    const handleChange = (value) => {
        setAddress(value);
        setFormVar({ ...formVar, "city": value });
        // result coordinates
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setFormVar({
                    ...formVar, "city": value, "latLng": {
                        "type": "Point",
                        "coordinates": [latLng.lat, latLng.lng]
                    }
                });
            })
            .catch(error => console.error('Error', error));
    }

    const handleSelect = (value) => {
        setAddress(value);
        // Get Coordinates 
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setFormVar({
                    ...formVar, "city": value, "latLng": {
                        "type": "Point",
                        "coordinates": [latLng.lat, latLng.lng]
                    }
                });
                console.log(latLng);
                console.log("formVar", formVar);

            })
            .catch(error => console.error('Error', error));
    }


    // On validation
    const validationStep1 = (values) => {
        const error = {};
        if (!values.email) {
            error.email = " Please fill email adddress"
        }
        if (!values.password) {
            error.password = " Please fill password"
        }
        if (!values.cpassword) {
            error.cpassword = " Please fill confirm password"
        } else if (values.password !== values.cpassword) {
            error.cpassword = "Password not matched"
        }
        return error;
    }
    const validationStep2 = (values) => {
        const error = {};
        if (!values.dob) {
            error.dob = " Please fill field"
        }
        return error;
    }
    const validationStep3 = (values) => {
        const error = {};
        if (!values.display_name) {
            error.display_name = " Please fill display name"
        }
        if (!values.gender) {
            error.gender = " Please fill gender field"
        }
        if (!values.interested_in) {
            error.interested_in = " Please fill interest field"
        }
        if (!values.country) {
            error.country = " Please fill country"
        }
        if (!values.state) {
            error.state = " Please fill state"
        }
        if (!values.city) {
            error.city = " Please fill city"
        }
        if (!values.zipcode) {
            error.zipcode = " Please fill zipcode"
        }
        return error;
    }

    // handle checbox change
    // const handleCheckboxVal = (e) => {
    //     console.log("e.target", e.target);
    // }
    // handle input change
    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormVar({ ...formVar, [name]: value });
    }
    const handleDateChange = (e) => {
        setFormVar({ ...formVar, "dob": [formVar.year, parseInt(formVar.month) + 1, formVar.day].join("-") });
        console.log("formVar", formVar);
    }

    // Step1
    const handleSignupStep1 = (e) => {
        e.preventDefault();
        setErrors(validationStep1(formVar));
        // SignUpApi(formVar);
        // if (emailError === "") {
        setIsSubmit(true);
        // }
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit && emailError == "") {
            if (step !== 2) {
                setStep((current) => current + 1);
                setIsSubmit(false);
            } else {
                SignUpApi(formVar);
                console.log("formVar", formVar)
            }
        }
    }, [errors]);

    // step2
    const handleSignupStep2 = (e) => {
        e.preventDefault();
        setErrors(validationStep2(formVar));
        setIsSubmit(true);
    }

    // Final Step
    const finalStep = (e) => {
        e.preventDefault();
        setErrors(validationStep3(formVar));
        setIsSubmit(true);

    }

    // Handle Signin  API

    const SignUpApi = (formResp) => {
        fetch(`${api}/sign-up`, {
            method: 'POST',
            headers: {
                // "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formResp),
        })
            .then(response => response.text())
            .then(result => {
                setEmailError("");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            })
            .catch(error => {
                console.log("LoginApi error::", error);
                // setEmailError(error.response.data.error[0].message)
                // if (error.response.data.error[0].message == "E-mail already in use") {
                //     setEmailError("E-mail already in use");
                // } else {
                //     setEmailError("");
                // }

            });
    }

    // -----------------------------------------------
    // const SignUpApi = (formResp) => {
    //     axios.post(`${api}/sign-up`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         // data: formResp
    //         email: formResp.email,
    //         password: formResp.password,
    //         dob: formResp.dob,
    //         display_name: formResp.display_name,
    //         gender: "Male",
    //         interested_in: "Female",
    //         country: formResp.country,
    //         state: formResp.state,
    //         city: formResp.city,
    //         zipcode: formResp.zipcode,
    //         latLng: formResp.latLng

    //     })
    //         .then(result => {
    //             console.log("LoginApi result::", result);
    //             // localStorage.setItem("user-info", JSON.stringify(result.data));
    //             setEmailError("");
    //             setTimeout(() => {
    //                 navigate("/login");
    //             }, 2000);
    //         })
    //         .catch(error => {
    //             console.log("LoginApi error::", error);
    //             setEmailError(error.response.data.error[0].message)
    //             if (error.response.data.error[0].message == "E-mail already in use") {
    //                 setEmailError("E-mail already in use");
    //             } else {
    //                 setEmailError("");
    //             }
    //         })
    // }
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
                                {
                                    step === 0 && (
                                        <Link to={"/register"} className="simpleLink"><IoIosArrowBack />Back</Link>
                                    )
                                }
                            </div>
                            {
                                formTitles.length > 0 && formTitles?.map((curElem, index) => {
                                    return (
                                        <h3 key={index}>
                                            {
                                                step === index && (<>
                                                    {curElem}
                                                </>)
                                            }
                                        </h3>
                                    )
                                })
                            }
                            <Form>
                                <div className={`formStep ${step === 0 && 'active'}`}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address*</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email address" value={formVar.email} onChange={(e) => handleInputChange(e)} />
                                        {errors?.email && <Form.Text className="error">{errors?.email}</Form.Text>}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Create password*</Form.Label>
                                        <Form.Control type={passwordVisible ? "text" : "password"} name="password" placeholder="Enter password" value={formVar.password} onChange={(e) => handleInputChange(e)} />
                                        <span className="iconVisible">
                                            {
                                                passwordVisible ? (
                                                    <AiOutlineEyeInvisible onClick={(e) => { setPasswordVisible(false) }} />
                                                ) : (
                                                    <AiOutlineEye onClick={(e) => { setPasswordVisible(true) }} />
                                                )
                                            }
                                        </span>
                                        {errors?.password && <Form.Text className="error">{errors?.password}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="cpassword">
                                        <Form.Label>Confirm password*</Form.Label>
                                        <Form.Control type={cPasswordVisible ? "text" : "password"} name="cpassword" placeholder="Enter confirm password" value={formVar.cpassword} onChange={(e) => handleInputChange(e)} />
                                        <span className="iconVisible">
                                            {
                                                cPasswordVisible ? (
                                                    <AiOutlineEyeInvisible onClick={(e) => { setCPasswordVisible(false) }} />
                                                ) : (
                                                    <AiOutlineEye onClick={(e) => { setCPasswordVisible(true) }} />
                                                )
                                            }
                                        </span>
                                        {errors?.cpassword && <Form.Text className="error">{errors?.cpassword}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I agree to terms & conditions" />
                                    </Form.Group>
                                    {emailError && <Form.Text className="error">{emailError}</Form.Text>}
                                    <Button className="cmn_btn cmn_green" variant="primary" type="submit" onClick={(e) => handleSignupStep1(e)}>
                                        Sign Up and Continue
                                    </Button>
                                    <Button className="cmn_btn"> <img src="assets/images/google.svg" alt="Google" /> Sign Up with Gmail</Button>
                                    <Button className="cmn_btn"><img src="assets/images/facebook.svg" alt="Facebook" />  Sign Up with Facebook</Button>
                                </div>
                                {/* step 2 */}
                                <div className={`formStep ${step === 1 && 'active'}`}>
                                    <Form.Label>Date of Birth*</Form.Label>
                                    <Row>
                                        <Col md={8}>
                                            <Form.Group className="mb-3" controlId="dob1">
                                                <MonthPicker
                                                    defaultValue={'month'}
                                                    numeric
                                                    short
                                                    caps
                                                    endYearGiven
                                                    year={formVar.year}
                                                    value={formVar.month}
                                                    reverse
                                                    required={true}
                                                    onChange={(month) => {
                                                        setFormVar({ ...formVar, "month": month, "dob": [formVar.year, parseInt(month) + 1, formVar.day].join("-") });
                                                    }}
                                                    id={'month'}
                                                    name={'month'}
                                                    classes={'classes'}
                                                    optionClasses={'optionClasses'}
                                                />
                                                {errors?.dob && <Form.Text className="error">{errors?.dob}</Form.Text>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3" controlId="dob2">
                                                <DayPicker
                                                    defaultValue={'day'}
                                                    year={formVar.year}
                                                    month={formVar.month}
                                                    endYearGiven
                                                    reverse
                                                    required={true}
                                                    value={formVar.day}
                                                    onChange={(day) => {
                                                        setFormVar({ ...formVar, "day": day, "dob": [formVar.year, parseInt(formVar.month) + 1, day].join("-") });
                                                    }}
                                                    id={'day'}
                                                    name={'day'}
                                                    classes={'classes'}
                                                    optionClasses={'optionClasses'}
                                                />
                                                {errors?.dob && <Form.Text className="error">{errors?.dob}</Form.Text>}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="dob3">
                                        <YearPicker
                                            defaultValue={'year'}
                                            start={1900}
                                            end={currentYear - 18}
                                            reverse
                                            required={true}
                                            value={formVar.year}
                                            onChange={(year) => {
                                                setFormVar({ ...formVar, "year": year, "dob": [year, parseInt(formVar.month) + 1, formVar.day].join("-") });
                                            }}
                                            id={'year'}
                                            name={'year'}
                                            classes={'classes'}
                                            optionClasses={'optionClasses'}
                                        />
                                        {errors?.dob && <Form.Text className="error">{errors?.dob}</Form.Text>}
                                    </Form.Group>
                                    <Form.Text className="text-muted form-unused-text"><AiOutlineEye /> Your age will be visible to others. This cannot be
                                        changed later.</Form.Text>
                                    <Form.Text className="error form-unused-text"> Note* user less then 18 years can not registered </Form.Text>
                                    <Button className="cmn_btn cmn_green" variant="primary" type="submit" onClick={(e) => handleSignupStep2(e)}> Continue</Button>
                                </div>
                                {/* Step 3 */}
                                <div className={`formStep ${step === 2 && 'active'}`}>
                                    <Form.Group className="mb-3" controlId="display_name">
                                        <Form.Label>Display Name*</Form.Label>
                                        <Form.Control type="text" name="display_name" placeholder="Your name" value={formVar.display_name} onChange={(e) => handleInputChange(e)} />
                                        {errors?.display_name && <Form.Text className="error">{errors?.display_name}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 full-w-field" controlId="gender" value={formVar.gender} onChange={(e) => { handleInputChange(e) }}>
                                        <Form.Label>I am*</Form.Label>
                                        {['radio'].map((type) => (
                                            <div key={`reverse-${type}`} className="mb-3 field-flex">
                                                <Form.Check
                                                    onchange={(e) => console.log("test")}
                                                    inline
                                                    reverse
                                                    type={type}
                                                    name="gender"
                                                    id={`reverse-${type}-gender-1`}
                                                    label="Male"
                                                    value="Male"

                                                />
                                                <Form.Check
                                                    inline
                                                    reverse
                                                    name="gender"
                                                    type={type}
                                                    id={`reverse-${type}-gender-2`}
                                                    label="Female"
                                                    value="Female"
                                                />
                                                <Form.Check
                                                    inline
                                                    reverse
                                                    name="gender"
                                                    type={type}
                                                    id={`reverse-${type}-gender-3`}
                                                    label="Non-Binary"
                                                    value="Non-Binary"
                                                />
                                            </div>
                                        ))}
                                        {errors?.gender && <Form.Text className="error">{errors?.gender}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 full-w-field" controlId="interested_in" value={formVar.interested_in} onChange={(e) => { handleInputChange(e) }}>
                                        <Form.Label>Interested In*</Form.Label>
                                        {['checkbox'].map((type) => (
                                            <div key={`reverse-${type}`} className="mb-3 field-flex">
                                                <Form.Check
                                                    inline
                                                    reverse
                                                    type={type}
                                                    name="interested_in"
                                                    id={`reverse-${type}-interested_in-1`}
                                                    label="Male"
                                                    value="Male"
                                                />
                                                <Form.Check
                                                    inline
                                                    reverse
                                                    name="interested_in"
                                                    type={type}
                                                    id={`reverse-${type}-interested_in-2`}
                                                    label="Female"
                                                    value="Female"
                                                />
                                                <Form.Check
                                                    inline
                                                    reverse
                                                    name="interested_in"
                                                    type={type}
                                                    id={`reverse-${type}-interested_in-3`}
                                                    label="Non-Binary"
                                                    value="Non-Binary"
                                                />
                                            </div>
                                        ))}
                                        {errors?.interested_in && <Form.Text className="error">{errors?.interested_in}</Form.Text>}
                                    </Form.Group>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="country">
                                                <Form.Label>Country*</Form.Label>
                                                <Form.Select defaultValue="Country/Region" name="country" onChange={(e) => handleCountryChange(e)}>
                                                    <option>Country/Region</option>
                                                    {CountryForm?.map((curelem, index) => {
                                                        return (
                                                            <option key={curelem.country_id} value={curelem.country_id}>{curelem.country_name}</option>
                                                        )
                                                    })
                                                    }
                                                </Form.Select>
                                                {errors?.country && <Form.Text className="error">{errors?.country}</Form.Text>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="state">
                                                <Form.Label>State*</Form.Label>
                                                <Form.Select defaultValue="State/Province" name="state" onChange={(e) => handleInputChange(e)}>
                                                    <option>State/Province</option>
                                                    {
                                                        stateDrop?.map((curelem) => {
                                                            return (
                                                                <option key={curelem.state_id} value={curelem.state_id}>{curelem.state_name}</option>
                                                            )
                                                        })
                                                    }
                                                </Form.Select>
                                                {errors?.state && <Form.Text className="error">{errors?.state}</Form.Text>}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="city">
                                                <Form.Label>City*</Form.Label>
                                                <PlacesAutocomplete
                                                    value={formVar.city}
                                                    onChange={handleChange}
                                                    onSelect={handleSelect}
                                                >
                                                    {({
                                                        getInputProps,
                                                        suggestions,
                                                        getSuggestionItemProps,
                                                        loading,
                                                    }) => (
                                                        <>
                                                            <input
                                                                {...getInputProps({
                                                                    placeholder: "Your city",
                                                                })} className="form-control"
                                                            />
                                                            <div className="location-dropOption">
                                                                {loading && <div>Loading...</div>}
                                                                {suggestions.map((suggestion) => {
                                                                    return (
                                                                        <p {...getSuggestionItemProps(suggestion)}>
                                                                            {suggestion.description}
                                                                        </p>
                                                                    );
                                                                })}
                                                            </div>
                                                        </>
                                                    )}
                                                </PlacesAutocomplete>
                                                {/* <Form.Control type="text" name="city" placeholder="Your city" value={formVar.city} onChange={(e) => handleInputChange(e)} /> */}
                                                {errors?.city && <Form.Text className="error">{errors?.city}</Form.Text>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="zipcode">
                                                <Form.Label>ZIP Code*</Form.Label>
                                                <Form.Control type="text" name="zipcode" placeholder="Your ZIP code" value={formVar.zipcode} onChange={(e) => handleInputChange(e)} />
                                                {errors?.zipcode && <Form.Text className="error">{errors?.zipcode}</Form.Text>}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {emailError && <Form.Text className="error">{emailError}</Form.Text>}
                                    <Button className="cmn_btn cmn_green" variant="primary" type="submit" onClick={(e) => finalStep(e)}>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Signup;