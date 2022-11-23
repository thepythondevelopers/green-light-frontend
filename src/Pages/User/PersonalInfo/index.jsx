import React, { useEffect, useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import "../../../assets/css/info-card.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import axios from "axios";
const api = " http://44.211.151.102/api";

const PersonalInfo = () => {
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [countInterest, setCountInterest] = useState("");
    const [list, setList] = useState({});
    const [personalInfo, setPersonalInfo] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        interested_in: "",
        height: "",
        eyes: "",
        hair_color: "",
        interests: []
    });
    const handleProfileInfoChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPersonalInfo({ ...personalInfo, [name]: value });
    }
    const handleProfileInfoInterests = (e) => {
        const data = e.target.value;
        setList({ ...list, [e.target.name]: e.target.value });
        setPersonalInfo({ ...personalInfo, "interests": list });
    }

    const submitProfleInfo = (e) => {
        e.preventDefault();
        profileInfoAPI(personalInfo)
    }

    useEffect(() => {
        dispatch(getUserAPI());
    }, []);
    useEffect(() => {
        setPersonalInfo(user);
        { user?.interests?.length ? setCountInterest(Object.keys(user?.interests[0]).length) : setCountInterest("1") }
        { user?.interests?.length && setList(user?.interests[0]) }
    }, [user]);

    // Profile Information API
    const profileInfoAPI = (data) => {
        const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
        const getToken = getlocalStorage.token;
        console.log("data", getToken);
        fetch(`${api}/personal-information`, {
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
                dispatch(getUserAPI());
                setPersonalInfo(result);
                setMessage("Personal Informations are successfully Updated.");
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
                                    <h5 className="inner_cmn_heading ml-3">Personal information</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="firstName">
                                                    <Form.Label>Name*</Form.Label>
                                                    <div className="editBox">
                                                        <img src="/assets/images/profile-icon.png" alt="Profile" />
                                                        <div className="nameInfo">
                                                            <p>{personalInfo?.first_name} {personalInfo?.last_name}</p>
                                                            <span>Change Avatar</span>
                                                        </div>
                                                        <button className="edit-avatr"><FiEdit /></button>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="first_name">
                                                    <Form.Label className="inner-label">First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="First name" name="first_name" value={personalInfo?.first_name} onChange={(e) => (handleProfileInfoChange(e))} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="last_name">
                                                    <Form.Label className="inner-label">Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Last name" name="last_name" value={personalInfo?.last_name} onChange={(e) => (handleProfileInfoChange(e))} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="dob">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <Form.Control type="text" placeholder="Date of Birth" name="dob" value={personalInfo?.dob} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="gender">
                                                    <Form.Label>Gender:</Form.Label>
                                                    <Form.Select defaultValue="...choose" name="gender" value={personalInfo?.gender} onChange={(e) => (handleProfileInfoChange(e))}>
                                                        <option>Choose...</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Non-Binary">Non-Binary</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="interested_in">
                                                    <Form.Label>Interested In:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="interested_in" value={personalInfo?.interested_in} onChange={(e) => (handleProfileInfoChange(e))}>
                                                        <option>Choose...</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Non-Binary">Non-Binary</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="height">
                                                    <Form.Label>Height:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="height" value={personalInfo?.height} onChange={(e) => (handleProfileInfoChange(e))}>
                                                        <option>Choose...</option>
                                                        <option value="5'6">5'6”</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="eyes">
                                                    <Form.Label>Eyes:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="eyes" value={personalInfo?.eyes} onChange={(e) => (handleProfileInfoChange(e))}>
                                                        <option>Choose...</option>
                                                        <option value="hazel">Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="hair_color">
                                                    <Form.Label>Hair color:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="hair_color" value={personalInfo?.hair_color} onChange={(e) => (handleProfileInfoChange(e))}>
                                                        <option>Choose...</option>
                                                        <option value="Blonde">Blonde</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box border-bottom-0 multipleInput">
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label>Interests:</Form.Label>
                                                    <div className="form-control-wrap">
                                                        {
                                                            countInterest >= 0 && <Form.Control type="text" placeholder="interests" value={list?.interests0} name={`interests0`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 1 && <Form.Control type="text" placeholder="interests" value={list?.interests1} name={`interests1`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 2 && <Form.Control type="text" placeholder="interests" value={list?.interests2} name={`interests2`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 3 && <Form.Control type="text" placeholder="interests" value={list?.interests3} name={`interests3`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 4 && <Form.Control type="text" placeholder="interests" value={list?.interests4} name={`interests4`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 5 && <Form.Control type="text" placeholder="interests" value={list?.interests5} name={`interests5`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 6 && <Form.Control type="text" placeholder="interests" value={list?.interests6} name={`interests6`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 7 && <Form.Control type="text" placeholder="interests" value={list?.interests7} name={`interests7`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 8 && <Form.Control type="text" placeholder="interests" value={list?.interests8} name={`interests8`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                        {
                                                            countInterest >= 9 && <Form.Control type="text" placeholder="interests" value={list?.interests9} name={`interests9`} onChange={(e) => handleProfileInfoInterests(e)} />
                                                        }
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <div className="incr-decr">
                                                    <button onClick={(e) => { e.preventDefault(); setCountInterest(parseInt(countInterest) + 1); console.log("countInterest", countInterest) }}><AiOutlinePlus /></button>
                                                    <button onClick={(e) => { e.preventDefault(); setCountInterest(parseInt(countInterest) - 1); console.log("countInterest", countInterest) }}><AiOutlineMinus /></button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-button-group d-flex justify-content-between">
                                        <button type="button" className="cmn_btn form-btn border">Cancel</button>
                                        <button type="button" className="cmn_btn form-btn cmn_green" onClick={(e) => submitProfleInfo(e)}>Save Changes</button>
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

export default PersonalInfo;