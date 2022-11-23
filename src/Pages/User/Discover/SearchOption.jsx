import React, { useState } from "react";
import '../../../assets/css/info-card.css';
import { Container, Form, Row, Col } from "react-bootstrap";
import AdvertisementLS from "../../../Components/AdvertisementLS";

const SearchOption = () => {
    const [moreOption, setMoreOption] = useState(false);
    return (
        <>
            <div className="searchbyOption space">
                <Container>
                    <div className="info-card p-4">
                        <div className="options">
                            <div className="optionsForm">
                                <div className="form-box">
                                    <Row>
                                        <Col md={8}>
                                            <Form.Group className="form-group" controlId="eyes">
                                                <Form.Label>Interested In</Form.Label>
                                                <Form.Select defaultValue="Choose...">
                                                    <option>Choose...</option>
                                                    <option selected>Hazel</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="form-box">
                                    <Row>
                                        <Col md={6}>
                                            <h6>Age: <span>22 years to 29 years</span></h6>
                                            <div className="form-option-range">
                                                <Form.Group className="form-group" controlId="eyes">
                                                    <Form.Label>From</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option selected>Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group" controlId="eyes">
                                                    <Form.Label>From</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option selected>Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <h6>Height: <span>5'6” to 6'2”</span></h6>
                                            <div className="form-option-range">
                                                <Form.Group className="form-group" controlId="eyes">
                                                    <Form.Label>Age:</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option selected>Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group" controlId="eyes">
                                                    <Form.Label>Age:</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option selected>Hazel</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <button className="cmn_link" onClick={(e) => setMoreOption(!moreOption)}>Add more options</button>
                        </div>
                        <div className={`${moreOption ? "moreOptions active" : "moreOptions"}`}>
                            <div className="form-wrap">
                                <div className="form-box">
                                    <Form.Group controlId="eyes">
                                        <Form.Label>Eyes:</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option selected>Hazel</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-box">
                                    <Form.Group controlId="hair-color">
                                        <Form.Label>Hair color</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option value="1">Blonde</option>
                                            <option value="2">Red</option>
                                            <option value="3">Brown</option>
                                            <option value="4">Dark Brown</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-box">
                                    <Form.Group controlId="religion">
                                        <Form.Label>Religion</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option value="1">Hindu</option>
                                            <option value="2">Muslim</option>
                                            <option value="3">Parsi</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-box border-0">
                                    <Form.Group controlId="marital-status">
                                        <Form.Label>Marital Status</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option value="1">Single</option>
                                            <option value="2">Married</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="searchbyOption-btn text-center">
                            <button className="cmn_btn cmn_green rounded">Show Matches</button>
                        </div>
                    </div>
                    <AdvertisementLS />
                </Container>
            </div>
        </>
    )
}

export default SearchOption;