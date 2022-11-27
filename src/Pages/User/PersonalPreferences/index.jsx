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
const api = " http://44.211.151.102/api";

const PersonalPreferences = () => {
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [personalPreference, setpersonalPreference] = useState({
        alcohol: "",
        smoking: "",
        marijuana: "",
        drugs: "",
        have_kids: "",
        want_kids: "",
        astrology_sign: "",
        ethinicity: "",
        looking_for: ""
    });

    const handleInputRadio = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setpersonalPreference({ ...personalPreference, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        personalPreferenceAPI(personalPreference)
    }

    useEffect(() => {
        dispatch(getUserAPI());
    }, []);
    useEffect(() => {
        setpersonalPreference(user);
    }, [user]);

    // Personal Preferences API
    const personalPreferenceAPI = (data) => {
        const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
        const getToken = getlocalStorage.token;
        console.log("data", getToken);
        fetch(`${api}/personal-preferences`, {
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
                setpersonalPreference(result);
                setMessage("Personal Preferences are successfully Updated.");
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
                                    <h5 className="inner_cmn_heading ml-3">Personal Preferences</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/alcohol.svg" alt="alcohal" />
                                                <Form.Group controlId="alcohol" value={personalPreference.alcohol} onChange={(e) => { handleInputRadio(e) }}>
                                                    <Form.Label>Alcohol:</Form.Label>
                                                    {['radio'].map((type) => {
                                                        return (
                                                            <div key={`reverse-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    reverse
                                                                    type={type}
                                                                    name="alcohol"
                                                                    id={`reverse-${type}-alcohol-1`}
                                                                    label="Yes"
                                                                    value="Yes"
                                                                    Checked={`${personalPreference.alcohol == "Yes" ? true : false}`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    reverse
                                                                    name="alcohol"
                                                                    type={type}
                                                                    id={`reverse-${type}-alcohol-2`}
                                                                    label="Sometimes"
                                                                    value="Sometimes"
                                                                    Checked={`${personalPreference.alcohol == "Sometimes" ? true : false}`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    reverse
                                                                    name="alcohol"
                                                                    type={type}
                                                                    id={`reverse-${type}-alcohol-3`}
                                                                    label="No"
                                                                    value="No"
                                                                    Checked={`${personalPreference.alcohol == "No" ? true : false}`}
                                                                />
                                                            </div>)
                                                    })}
                                                </Form.Group>
                                            </Col>
                                            <Col className="form-flex">
                                                <img src="/assets/images/smoking-room.svg" alt="smoking-room" />
                                                <Form.Group controlId="smoking" value={personalPreference.smoking} onChange={(e) => { handleInputRadio(e) }}>
                                                    <Form.Label>Smoking:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="smoking"
                                                                id={`reverse-${type}-smoking-1`}
                                                                label="Yes"
                                                                value="Yes"
                                                                Checked={`${personalPreference.smoking == "Yes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="smoking"
                                                                type={type}
                                                                id={`reverse-${type}-smoking-2`}
                                                                label="Sometimes"
                                                                value="Sometimes"
                                                                Checked={`${personalPreference.smoking == "Sometimes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="smoking"
                                                                type={type}
                                                                id={`reverse-${type}-smoking-3`}
                                                                label="No"
                                                                value="No"
                                                                Checked={`${personalPreference.smoking == "No" ? true : false}`}
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
                                                <img src="/assets/images/drug-pack.svg" alt="drug-pack" />
                                                <Form.Group controlId="marijuana" value={personalPreference.marijuana} onChange={(e) => { handleInputRadio(e) }}>
                                                    <Form.Label>Marijuana:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="marijuana"
                                                                id={`reverse-${type}-marijuana-1`}
                                                                label="Yes"
                                                                value="Yes"
                                                                Checked={`${personalPreference.marijuana == "Yes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="marijuana"
                                                                type={type}
                                                                id={`reverse-${type}-marijuana-2`}
                                                                label="Sometimes"
                                                                value="Sometimes"
                                                                Checked={`${personalPreference.marijuana == "Sometimes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="marijuana"
                                                                type={type}
                                                                id={`reverse-${type}-marijuana-3`}
                                                                label="No"
                                                                value="No"
                                                                Checked={`${personalPreference.marijuana == "No" ? true : false}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                            </Col>
                                            <Col className="form-flex">
                                                <img src="/assets/images/drug-pack.svg" alt="drug-pack" />
                                                <Form.Group controlId="drugs" value={personalPreference.drugs} onChange={(e) => { handleInputRadio(e) }}>
                                                    <Form.Label>Drugs:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="drugs"
                                                                id={`reverse-${type}-drugs-1`}
                                                                label="Yes"
                                                                value="Yes"
                                                                Checked={`${personalPreference.drugs == "Yes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="drugs"
                                                                type={type}
                                                                id={`reverse-${type}-drugs-2`}
                                                                label="Sometimes"
                                                                value="Sometimes"
                                                                Checked={`${personalPreference.drugs == "Sometimes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="drugs"
                                                                type={type}
                                                                id={`reverse-${type}-drugs-3`}
                                                                label="No"
                                                                value="No"
                                                                Checked={`${personalPreference.drugs == "No" ? true : false}`}
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
                                                <img src="/assets/images/kid.svg" alt="kid" />
                                                <Form.Group controlId="have_kids" value={personalPreference.have_kids} onChange={(e) => { handleInputRadio(e) }}>
                                                    <Form.Label>Have Kids:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="have_kids"
                                                                id={`reverse-${type}-have_kids-1`}
                                                                label="Yes"
                                                                value="Yes"
                                                                Checked={`${personalPreference.have_kids == "Yes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="have_kids"
                                                                type={type}
                                                                id={`reverse-${type}-have_kids-2`}
                                                                label="No"
                                                                value="No"
                                                                Checked={`${personalPreference.have_kids == "No" ? true : false}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                            </Col>
                                            <Col className="form-flex">
                                                <img src="/assets/images/kid.svg" alt="kid" />
                                                <Form.Group controlId="want_kids" value={personalPreference.want_kids} onChange={(e) => { handleInputRadio(e) }}  >
                                                    <Form.Label>Want Kids:</Form.Label>
                                                    {['radio'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="want_kids"
                                                                id={`reverse-${type}-want_kids-1`}
                                                                label="Yes"
                                                                value="Yes"
                                                                Checked={`${personalPreference.want_kids == "Yes" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="want_kids"
                                                                type={type}
                                                                id={`reverse-${type}-want_kids-2`}
                                                                label="No"
                                                                value="No"
                                                                Checked={`${personalPreference.want_kids == "No" ? true : false}`}
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
                                                <img src="/assets/images/zodiac-gemini.svg" alt="zodiac-gemini" />
                                                <Form.Group controlId="astrology_sign">
                                                    <Form.Label>Astrology Sign:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="astrology_sign" value={personalPreference.astrology_sign} onChange={(e) => { handleInputRadio(e) }}>
                                                        <option>Choose...</option>
                                                        <option value="Gemini">Gemini</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/people-group.svg" alt="people-group" />
                                                <Form.Group controlId="ethinicity">
                                                    <Form.Label>Ethnicity:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="ethinicity" value={personalPreference.ethinicity} onChange={(e) => { handleInputRadio(e) }}>
                                                        <option>Choose...</option>
                                                        <option value="Native American">Native American</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/gender-ambiguous.svg" alt="gender-ambiguous" />
                                                <Form.Group controlId="looking_for" value={personalPreference.looking_for} onChange={(e) => { handleInputRadio(e) }}>
                                                    <Form.Label>I'm looking for:</Form.Label>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`reverse-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                type={type}
                                                                name="looking_for"
                                                                id={`reverse-${type}-looking_for-1`}
                                                                label="Relationship"
                                                                value="Relationship"
                                                                Checked={`${personalPreference.looking_for == "Relationship" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-2`}
                                                                label="Dating"
                                                                value="Dating"
                                                                Checked={`${personalPreference.looking_for == "Dating" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-3`}
                                                                label="Friendship"
                                                                value="Friendship"
                                                                Checked={`${personalPreference.looking_for == "Friendship" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-4`}
                                                                label="Networking"
                                                                value="Networking"
                                                                Checked={`${personalPreference.looking_for == "Networking" ? true : false}`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-5`}
                                                                label="Other"
                                                                value="Other"
                                                                Checked={`${personalPreference.looking_for == "Other" ? true : false}`}
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
                                                <img src="/assets/images/id-card.svg" alt="id-card" />
                                                <Form.Group controlId="religion">
                                                    <Form.Label>Religion:</Form.Label>
                                                    <Form.Select defaultValue="Type anything..." name="religion" value={personalPreference.religion} onChange={(e) => { handleInputRadio(e) }}>
                                                        <option>Type anything...</option>
                                                        <option value="Hazel">Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box border-0">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/political.svg" alt="political" />
                                                <Form.Group controlId="politics">
                                                    <Form.Label>Politics:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="politics" value={personalPreference.politics} onChange={(e) => { handleInputRadio(e) }}>
                                                        <option>Choose...</option>
                                                        <option value="Moderate">Moderate</option>
                                                    </Form.Select>
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

export default PersonalPreferences;