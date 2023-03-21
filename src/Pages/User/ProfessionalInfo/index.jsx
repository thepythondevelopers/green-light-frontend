import React, { useState, useEffect } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import "../../../assets/css/info-card.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import axios from "axios";
const api = " https://greenlightapi.pamsar.com/api";

const ProfessionalInfo = () => {
    // Token 
    const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
    const getToken = getlocalStorage.token;

    // ============================================================================================================================== //
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [professionalInfo, setProfessionalInfo] = useState({
        have_car: "",
        work_position: "",
        work_employer: "",
        education_degree: "",
        education_school: "",
        about_me: ""
    });

    const handleProfessionalInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProfessionalInfo({ ...professionalInfo, [name]: value });
        // console.log("professionalInfo name", name);
        // console.log("professionalInfo value", value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        professionalInfoAPI(professionalInfo)
    }

    useEffect(() => {
        dispatch(getUserAPI(getToken));
    }, []);
    useEffect(() => {
        setProfessionalInfo(user);
    }, [user]);

    // Personal Preferences API
    const professionalInfoAPI = (data) => {
        // console.log(data);
        console.log(professionalInfo);
        return false;
        // return false;
        fetch(`${api}/professional-information`, {
            method: 'POST',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(result => {
                setProfessionalInfo(result);
                dispatch(getUserAPI(getToken));
                setMessage("Professional Informations are successfully Updated.");
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            })
            .catch(error => {
                console.log('error', error);
                setErrorMessage(error);

            });
    }
    return (
        <>
            <Header />
            <ProfileBanner />
            <section className="body-wrap space">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Sidebar />
                        </Col>
                        <Col md={8}>
                            <div className="info-card">
                                <div className="cmn_heading_box d-flex align-items-center">
                                    <FaUserCircle />
                                    <h5 className="inner_cmn_heading ml-3">Professional Information</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/car.svg" alt="car" />
                                                <Form.Group controlId="have_car" value={professionalInfo.have_car} onChange={(e) => { handleProfessionalInfo(e) }}>
                                                    <Form.Label>Have Car:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="have_car"
                                                                id={`reverse-${type}-have_car-1`}
                                                                label="Yes"
                                                                value="Yes"
                                                                checked={professionalInfo.have_car === 'Yes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="have_car"
                                                                type={type}
                                                                id={`reverse-${type}-have_car-2`}
                                                                label="No"
                                                                value="No"
                                                                checked={professionalInfo.have_car === 'No'}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/baseline-work.svg" alt="baseline-work" />
                                                <Form.Group controlId="work">
                                                    <Form.Label>Work:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/baseline-work.svg" alt="baseline-work" className="disable" />
                                                <Form.Group controlId="work_position">
                                                    <Form.Label className="multitext-label">Position:</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your job profile..." name="work_position" value={professionalInfo.work_position} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/baseline-work.svg" alt="baseline-work" className="disable" />
                                                <Form.Group controlId="work_employer">
                                                    <Form.Label className="multitext-label">Employer:</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your Employer's Name..." name="work_employer" value={professionalInfo.work_employer} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/education.svg" alt="education" />
                                                <Form.Group controlId="education">
                                                    <Form.Label>Education:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/education.svg" alt="education" className="disable" />
                                                <Form.Group controlId="education_degree">
                                                    <Form.Label className="multitext-label">Degree:</Form.Label>
                                                    <Form.Control type="degree" placeholder="Your degree..." name="education_degree" value={professionalInfo.education_degree} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/education.svg" alt="education" className="disable" />
                                                <Form.Group controlId="education_school">
                                                    <Form.Label className="multitext-label">School:</Form.Label>
                                                    <Form.Control type="text" placeholder="Your school..." name="education_school" value={professionalInfo.education_school} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box border-0">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/user-outlined.svg" alt="user-outlined" />
                                                <Form.Group controlId="about_me">
                                                    <Form.Label>About Me:</Form.Label>
                                                    <Form.Control as="textarea" aria-label="With textarea" placeholder="Write about yourself..." name="about_me" row="20" col="20" value={professionalInfo.about_me} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-button-group d-flex justify-content-between">
                                        <button type="button" className="cmn_btn form-btn border">Cancel</button>
                                        <button type="button" className="cmn_btn form-btn cmn_green" onClick={(e) => handleSubmit(e)}>Save Changes</button>
                                    </div>
                                    {message && <Alert variant="success"> <p className="text-center">{message}</p></Alert>}
                                    {errorMessage && <Alert variant="danger"> <p className="text-center">{errorMessage}</p></Alert>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default ProfessionalInfo;