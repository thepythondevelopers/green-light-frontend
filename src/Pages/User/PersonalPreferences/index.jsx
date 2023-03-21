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

const PersonalPreferences = () => {

    // token
    const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
    const getToken = getlocalStorage.token;

    //=====================================================================================================//

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
        ethinicity_others:'',
        looking_for: "",
        lookingFor_others: '',
        religion:'',
        politics:'',
        politics_others:''
    });

    console.log("personalPreference", personalPreference);

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setpersonalPreference({ ...personalPreference, [name]: value });
        console.log("name", name, "value", value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        personalPreferenceAPI(personalPreference)
    }

    useEffect(() => {
        dispatch(getUserAPI(getToken));
    }, []);

    useEffect(() => {
        setpersonalPreference(user);
    }, [user]);

    // Personal Preferences API
    const personalPreferenceAPI = (data) => {
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
                dispatch(getUserAPI(getToken));
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
                                                <img src="/assets/images/alcohol.svg" alt="alcohol" />
                                                <Form.Group controlId="alcohol" value={personalPreference.alcohol} onChange={(e) => { handleInputChange(e) }}>
                                                    <Form.Label>Alcohol:</Form.Label>
                                                    {['radio'].map((type) => {
                                                        return (
                                                            <div key={`reverse-${type}`} className="mb-3" >
                                                                <Form.Check
                                                                    inline
                                                                    reverse
                                                                    type={type}
                                                                    name="alcohol"
                                                                    id={`reverse-${type}-alcohol-1`}
                                                                    label="Yes"
                                                                    value="Yes"
                                                                    checked={personalPreference.alcohol === 'Yes'}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    reverse
                                                                    name="alcohol"
                                                                    type={type}
                                                                    id={`reverse-${type}-alcohol-2`}
                                                                    label="Sometimes"
                                                                    value="Sometimes"
                                                                    checked={personalPreference.alcohol === 'Sometimes'}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    reverse
                                                                    name="alcohol"
                                                                    type={type}
                                                                    id={`reverse-${type}-alcohol-3`}
                                                                    label="No"
                                                                    value="No"
                                                                    checked={personalPreference.alcohol === 'No'}
                                                                />
                                                            </div>)
                                                    })}
                                                </Form.Group>
                                            </Col>
                                            <Col className="form-flex">
                                                <img src="/assets/images/smoking-room.svg" alt="smoking-room" />
                                                <Form.Group controlId="smoking" value={personalPreference.smoking} onChange={(e) => { handleInputChange(e) }}>
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
                                                                checked={personalPreference.smoking === 'Yes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="smoking"
                                                                type={type}
                                                                id={`reverse-${type}-smoking-2`}
                                                                label="Sometimes"
                                                                value="Sometimes"
                                                                checked={personalPreference.smoking === 'Sometimes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="smoking"
                                                                type={type}
                                                                id={`reverse-${type}-smoking-3`}
                                                                label="No"
                                                                value="No"
                                                                checked={personalPreference.smoking === 'No'}
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
                                                <Form.Group controlId="marijuana" value={personalPreference.marijuana} onChange={(e) => { handleInputChange(e) }}>
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
                                                                checked={personalPreference.marijuana === 'Yes'}

                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="marijuana"
                                                                type={type}
                                                                id={`reverse-${type}-marijuana-2`}
                                                                label="Sometimes"
                                                                value="Sometimes"
                                                                checked={personalPreference.marijuana === 'Sometimes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="marijuana"
                                                                type={type}
                                                                id={`reverse-${type}-marijuana-3`}
                                                                label="No"
                                                                value="No"
                                                                checked={personalPreference.marijuana === 'No'}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                            </Col>
                                            <Col className="form-flex">
                                                <img src="/assets/images/drug-pack.svg" alt="drug-pack" />
                                                <Form.Group controlId="drugs" value={personalPreference.drugs} onChange={(e) => { handleInputChange(e) }}>
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
                                                                checked={personalPreference.drugs === 'Yes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="drugs"
                                                                type={type}
                                                                id={`reverse-${type}-drugs-2`}
                                                                label="Sometimes"
                                                                value="Sometimes"
                                                                checked={personalPreference.drugs === 'Sometimes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="drugs"
                                                                type={type}
                                                                id={`reverse-${type}-drugs-3`}
                                                                label="No"
                                                                value="No"
                                                                checked={personalPreference.drugs === 'No'}
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
                                                <Form.Group controlId="have_kids" value={personalPreference.have_kids} onChange={(e) => { handleInputChange(e) }}>
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
                                                                checked={personalPreference.have_kids === 'Yes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="have_kids"
                                                                type={type}
                                                                id={`reverse-${type}-have_kids-2`}
                                                                label="No"
                                                                value="No"
                                                                checked={personalPreference.have_kids === 'No'}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                            </Col>
                                            <Col className="form-flex">
                                                <img src="/assets/images/kid.svg" alt="kid" />
                                                <Form.Group controlId="want_kids" value={personalPreference.want_kids} onChange={(e) => { handleInputChange(e) }}  >
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
                                                                checked={personalPreference.want_kids === 'Yes'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="want_kids"
                                                                type={type}
                                                                id={`reverse-${type}-want_kids-2`}
                                                                label="No"
                                                                value="No"
                                                                checked={personalPreference.want_kids === 'No'}
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
                                                    <Form.Select defaultValue="Choose..." name="astrology_sign" value={personalPreference.astrology_sign} onChange={(e) => { handleInputChange(e) }}>
                                                        <option>Choose...</option>
                                                        <option value="Aries">Aries</option>
                                                        <option value="Taurus">Taurus</option>
                                                        <option value="Gemini">Gemini</option>
                                                        <option value="Cancer">Cancer</option>
                                                        <option value="Leo">Leo</option>
                                                        <option value="Virgo">Virgo</option>
                                                        <option value="Libra">Libra</option>
                                                        <option value="Scorpio">Scorpio</option>
                                                        <option value="Sagittarius">Sagittarius</option>
                                                        <option value="Capricorn">Capricorn</option>
                                                        <option value="Aquarius">Aquarius</option>
                                                        <option value="Pisces">Pisces</option>
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
                                                    <Form.Select defaultValue="Choose..." name="ethinicity" value={personalPreference.ethinicity} onChange={(e) => { handleInputChange(e) }}>
                                                        <option>Choose...</option>
                                                        <option value="black">Black</option>
                                                        <option value="east-asian">East Asian</option>
                                                        <option value="hispanic">Hispanic</option>
                                                        <option value="middle-eastern">Middle Eastern</option>
                                                        <option value="native-american">Native American</option>
                                                        <option value="south-asian">South Asian</option>
                                                        <option value="White">White</option>
                                                        <option value="multiracial">Multiracial</option>
                                                        <option value="other">Other</option>
                                                        
                                                    </Form.Select>
                                                </Form.Group>
                                               
                                            </Col>
                                            <Form.Control style={ personalPreference?.ethinicity === "other" ? {display:"block"} :{ display : "none"}} type="text" placeholder="Ethinicity" name="ethinicity_others" value={personalPreference?.ethinicity_others} onChange={(e) => (handleInputChange(e))} />
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/gender-ambiguous.svg" alt="gender-ambiguous" />
                                                <Form.Group controlId="looking_for" value={personalPreference.looking_for} onChange={(e) => { handleInputChange(e) }}>
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
                                                                checked={personalPreference.looking_for === 'Relationship'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-2`}
                                                                label="Dating"
                                                                value="Dating"
                                                                checked={personalPreference.looking_for === 'Dating'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-3`}
                                                                label="Friendship"
                                                                value="Friendship"
                                                                checked={personalPreference.looking_for === 'Friendship'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-4`}
                                                                label="Networking"
                                                                value="Networking"
                                                                checked={personalPreference.looking_for === 'Networking'}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                reverse
                                                                name="looking_for"
                                                                type={type}
                                                                id={`reverse-${type}-looking_for-5`}
                                                                label="Other"
                                                                value="Other"
                                                                checked={personalPreference.looking_for === 'Other'}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>                                             
                                            </Col>
                                            <Form.Control style={ personalPreference?.looking_for === "Other" ? {display:"block"} :{ display : "none"}} type="text" placeholder="I'm Looking for" name="lookingFor_others" value={personalPreference?.lookingFor_others} onChange={(e) => (handleInputChange(e))} />
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col className="form-flex">
                                                <img src="/assets/images/id-card.svg" alt="id-card" />
                                                <Form.Group controlId="religion">
                                                    <Form.Label>Religion:</Form.Label>
                                                   { /* <Form.Select defaultValue="Type anything..." name="religion" value={personalPreference.religion} onChange={(e) => { handleInputChange(e) }}>
                                                        <option>Type anything...</option>
                                                        <option value="Hazel">Hazel</option>
                                                    </Form.Select> */} 
                                                    <Form.Control type="text" placeholder="Religion" name="religion" value={personalPreference?.religion} onChange={(e) => (handleInputChange(e))} />
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
                                                    <Form.Select defaultValue="Choose..." name="politics" value={personalPreference.politics} onChange={(e) => { handleInputChange(e) }}>
                                                        <option>Choose...</option>
                                                        <option value="liberal">Liberal</option>
                                                        <option value="Moderate">Moderate</option>
                                                        <option value="conservative">Conservative</option>
                                                        <option value="other">Other</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Form.Control style={ personalPreference?.politics === "other" ? {display:"block"} :{ display : "none"}} type="text" placeholder="Politics" name="politics_others" value={personalPreference?.politics_others} onChange={(e) => (handleInputChange(e))} />
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