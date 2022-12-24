import React, { useState, useEffect, } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import "../../../assets/css/info-card.css";
import CountryForm from "../../../assets/data/Country";
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import axios from "axios";
const api = " http://44.211.151.102/api";

const ContactInformation = () => {
    // token
    const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
    const getToken = getlocalStorage.token;

    //=====================================================================================================//

    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [locationInfo, setLocationInfo] = useState({
        location: "",
        mobile: "",
        country: "",
        state: "",
        city: "",
        zipcode: "",
        latLng: "",
    });

    // Country and State
    const [ctyId, setCtyId] = useState(1);
    const [stateDrop, setStateDrop] = useState();

    const handleCountryChange = (e) => {
        const getCountryID = e.target.value;
        setLocationInfo({ ...locationInfo, "country": getCountryID });
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


    const handleProfessionalInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLocationInfo({ ...locationInfo, [name]: value });
    }
    const [address, setAddress] = useState("");

    const handleChange = (value) => {
        setAddress(value);
        setLocationInfo({ ...locationInfo, "location": value });
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => { setLocationInfo({ ...locationInfo, "location": value, "latLng": [latLng.lat, latLng.lng].toString() }); })
            .catch(error => console.error('Error', error));
    }

    const handleSelect = (value) => {
        setAddress(value);
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setLocationInfo({ ...locationInfo, "location": value, "latLng": [latLng.lat, latLng.lng].toString() });
            })
            .catch(error => console.error('Error', error));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        professionalInfoAPI(locationInfo)
        console.log("locationInfo", locationInfo);
    }

    useEffect(() => {
        dispatch(getUserAPI(getToken));
    }, []);
    useEffect(() => {
        setLocationInfo(user);
    }, [user]);

    // Personal Preferences API
    const professionalInfoAPI = (data) => {
        console.log("data", data);
        fetch(`${api}/location-information`, {
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
                setLocationInfo(result);
                dispatch(getUserAPI(getToken));
                setMessage("Location Informations are successfully Updated.");
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
                                    <h5 className="inner_cmn_heading ml-3">Location and Contact Information</h5>
                                </div>
                                <div className="form-wrap">
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="location" class="location">
                                                    <Form.Label>Location:</Form.Label>
                                                    <PlacesAutocomplete
                                                        value={locationInfo.location}
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
                                                                        placeholder: "Enter Location...",
                                                                    })}
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
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="mobile">
                                                    <Form.Label>Mobile</Form.Label>
                                                    <Form.Control type="tel" placeholder="Your mobile number" name="mobile" value={locationInfo.mobile} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="email">
                                                    <Form.Label>Email address:</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email address" disabled name="email" value={locationInfo.email} onChange={(e) => { handleProfessionalInfo(e) }} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="country">
                                                    <Form.Label>Country:</Form.Label>
                                                    <Form.Select defaultValue="Country/Region" name="country" value={locationInfo.country} onChange={(e) => handleCountryChange(e)}>
                                                        <option>Country/Region</option>
                                                        {CountryForm?.map((curelem, index) => {
                                                            return (
                                                                <option key={curelem.country_id} value={curelem.country_id}>{curelem.country_name}</option>
                                                            )
                                                        })
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="state">
                                                    <Form.Label>State:</Form.Label>
                                                    <Form.Select defaultValue="State/Province" name="state" value={locationInfo.state} onChange={(e) => handleProfessionalInfo(e)}>
                                                        <option>State/Province</option>
                                                        {
                                                            stateDrop?.map((curelem) => {
                                                                return (
                                                                    <option key={curelem.state_id} value={curelem.state_id}>{curelem.state_name}</option>
                                                                )
                                                            })
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-box">
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="city">
                                                    <Form.Label>City:</Form.Label>
                                                    <Form.Control type="text" name="city" placeholder="Your city" value={locationInfo.city} onChange={(e) => handleProfessionalInfo(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="zipcode">
                                                    <Form.Label>Zipcode:</Form.Label>
                                                    <Form.Control type="text" name="zipcode" placeholder="Your ZIP code" value={locationInfo.zipcode} onChange={(e) => handleProfessionalInfo(e)} />
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

export default ContactInformation;