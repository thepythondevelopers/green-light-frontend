import React, { useState } from "react";
import '../../../assets/css/info-card.css';
import { Container, Form, Row, Col } from "react-bootstrap";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import MatchCard from "../../../Components/MatchCard";
const api = "http://44.211.151.102/api";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        ><BsArrowRightShort /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        ><BsArrowLeftShort /></div>
    );
}

const SearchOption = () => {
    const settings = {
        arrow: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const [moreOption, setMoreOption] = useState(false);
    const [resultValue, setResultValue] = useState({});
    const [submit, isSubmit] = useState(false);
    const [getHeight, setGetHeight] = useState({
        from: "",
        to: ""
    })
    const [filterValue, setFilterValue] = useState({
        search: 1,
        interested_in: "Male",
        age_from: "",
        age_to: "",
        eyes: "",
        hair_color: "",
        religion: ""
    })
    const handleFilter = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFilterValue({ ...filterValue, [name]: value });
    }
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        getFilterApi(filterValue);
        isSubmit(true);
    }
    const getFilterApi = (data) => {
        fetch(`${api}/matching-algo`, {
            method: 'POST',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log("result", result);
                setResultValue(result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
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
                                            <Form.Group className="form-group" controlId="interested_in">
                                                <Form.Label>Interested In</Form.Label>
                                                <Form.Select defaultValue="Choose..." name="interested_in" value={filterValue.interested_in} onChange={(e) => handleFilter(e)}>
                                                    <option>Choose...</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Male">Male</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="form-box">
                                    <Row>
                                        <Col md={6}>
                                            <h6>Age: <span>{filterValue.age_from ? filterValue.age_from : "-"} years to {filterValue.age_to ? filterValue.age_to : "-"} years</span></h6>
                                            <div className="form-option-range">
                                                <Form.Group className="form-group" controlId="age_from">
                                                    <Form.Label>From</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="age_from" value={filterValue.from} onChange={(e) => handleFilter(e)}>
                                                        <option>Choose...</option>
                                                        {Array(50)
                                                            .fill("")
                                                            .map((_item, index) => {
                                                                return (
                                                                    <option value={index + 18}>{index + 18}</option>
                                                                );
                                                            })}
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group" controlId="age_to">
                                                    <Form.Label>To</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="age_to" value={filterValue.from} onChange={(e) => handleFilter(e)}>
                                                        <option>Choose...</option>
                                                        {Array(50)
                                                            .fill("")
                                                            .map((_item, index) => {
                                                                return (
                                                                    <option value={index + 18}>{index + 18}</option>
                                                                );
                                                            })}
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <h6>Height: <span>{getHeight.from ? `${getHeight.from}cm` : "-"} to {getHeight.to ? `${getHeight.to}cm` : "-"}</span></h6>
                                            <div className="form-option-range">
                                                <Form.Group className="form-group" controlId="height_from">
                                                    <Form.Label>From:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." value={getHeight.from} onChange={(e) => { setGetHeight({ ...getHeight, "from": e.target.value }) }}>
                                                        <option>Choose...</option>
                                                        <option value="91.44">3'0"</option>
                                                        <option value="94.488">3'1"</option>
                                                        <option value="97.536">3'2"</option>
                                                        <option value="100.584">3'3"</option>
                                                        <option value="103.632">3'4"</option>
                                                        <option value="106.68">3'5"</option>
                                                        <option value="109.728">3'6"</option>
                                                        <option value="112.776">3'7"</option>
                                                        <option value="115.824">3'8"</option>
                                                        <option value="118.872">3'9"</option>
                                                        <option value="121.92">4'0"</option>
                                                        <option value="124.968">4'1"</option>
                                                        <option value="128.016">4'2"</option>
                                                        <option value="131.064">4'3"</option>
                                                        <option value="134.112">4'4"</option>
                                                        <option value="137.16">4'5"</option>
                                                        <option value="140.208">4'6"</option>
                                                        <option value="143.256">4'7"</option>
                                                        <option value="146.304">4'8"</option>
                                                        <option value="149.352">4'9"</option>
                                                        <option value="152.4">5'0"</option>
                                                        <option value="155.448">5'1"</option>
                                                        <option value="158.496">5'2"</option>
                                                        <option value="161.544">5'3"</option>
                                                        <option value="164.592">5'4"</option>
                                                        <option value="167.64">5'5"</option>
                                                        <option value="170.688">5'6"</option>
                                                        <option value="173.736">5'7"</option>
                                                        <option value="176.784">5'8"</option>
                                                        <option value="179.832">5'9"</option>
                                                        <option value="182.88">6'0"</option>
                                                        <option value="185.928">6'1"</option>
                                                        <option value="188.976">6'2"</option>
                                                        <option value="192.024">6'3"</option>
                                                        <option value="195.072">6'4"</option>
                                                        <option value="198.12">6'5"</option>
                                                        <option value="201.168">6'6"</option>
                                                        <option value="204.216">6'7"</option>
                                                        <option value="207.264">6'8"</option>
                                                        <option value="210.312">6'9"</option>
                                                        <option value="213.36">7'0"</option>
                                                        <option value="216.408">7'1"</option>
                                                        <option value="219.456">7'2"</option>
                                                        <option value="222.504">7'3"</option>
                                                        <option value="225.552">7'4"</option>
                                                        <option value="228.6">7'5"</option>
                                                        <option value="231.648">7'6"</option>
                                                        <option value="234.696">7'7"</option>
                                                        <option value="237.744">7'8"</option>
                                                        <option value="240.792">7'9"</option>
                                                        <option value="243.84">8'0"</option>
                                                        <option value="246.888">8'1"</option>
                                                        <option value="249.936">8'2"</option>
                                                        <option value="252.984">8'3"</option>
                                                        <option value="256.032">8'4"</option>
                                                        <option value="259.08">8'5"</option>
                                                        <option value="262.128">8'6"</option>
                                                        <option value="265.176">8'7"</option>
                                                        <option value="268.224">8'8"</option>
                                                        <option value="271.272">8'9"</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group" controlId="height_to">
                                                    <Form.Label>To:</Form.Label>
                                                    <Form.Select defaultValue="Choose..." name="height_to" value={getHeight.to} onChange={(e) => { setGetHeight({ ...getHeight, "to": e.target.value }) }}>
                                                        <option>Choose...</option>
                                                        <option value="91.44">3'0"</option>
                                                        <option value="94.488">3'1"</option>
                                                        <option value="97.536">3'2"</option>
                                                        <option value="100.584">3'3"</option>
                                                        <option value="103.632">3'4"</option>
                                                        <option value="106.68">3'5"</option>
                                                        <option value="109.728">3'6"</option>
                                                        <option value="112.776">3'7"</option>
                                                        <option value="115.824">3'8"</option>
                                                        <option value="118.872">3'9"</option>
                                                        <option value="121.92">4'0"</option>
                                                        <option value="124.968">4'1"</option>
                                                        <option value="128.016">4'2"</option>
                                                        <option value="131.064">4'3"</option>
                                                        <option value="134.112">4'4"</option>
                                                        <option value="137.16">4'5"</option>
                                                        <option value="140.208">4'6"</option>
                                                        <option value="143.256">4'7"</option>
                                                        <option value="146.304">4'8"</option>
                                                        <option value="149.352">4'9"</option>
                                                        <option value="152.4">5'0"</option>
                                                        <option value="155.448">5'1"</option>
                                                        <option value="158.496">5'2"</option>
                                                        <option value="161.544">5'3"</option>
                                                        <option value="164.592">5'4"</option>
                                                        <option value="167.64">5'5"</option>
                                                        <option value="170.688">5'6"</option>
                                                        <option value="173.736">5'7"</option>
                                                        <option value="176.784">5'8"</option>
                                                        <option value="179.832">5'9"</option>
                                                        <option value="182.88">6'0"</option>
                                                        <option value="185.928">6'1"</option>
                                                        <option value="188.976">6'2"</option>
                                                        <option value="192.024">6'3"</option>
                                                        <option value="195.072">6'4"</option>
                                                        <option value="198.12">6'5"</option>
                                                        <option value="201.168">6'6"</option>
                                                        <option value="204.216">6'7"</option>
                                                        <option value="207.264">6'8"</option>
                                                        <option value="210.312">6'9"</option>
                                                        <option value="213.36">7'0"</option>
                                                        <option value="216.408">7'1"</option>
                                                        <option value="219.456">7'2"</option>
                                                        <option value="222.504">7'3"</option>
                                                        <option value="225.552">7'4"</option>
                                                        <option value="228.6">7'5"</option>
                                                        <option value="231.648">7'6"</option>
                                                        <option value="234.696">7'7"</option>
                                                        <option value="237.744">7'8"</option>
                                                        <option value="240.792">7'9"</option>
                                                        <option value="243.84">8'0"</option>
                                                        <option value="246.888">8'1"</option>
                                                        <option value="249.936">8'2"</option>
                                                        <option value="252.984">8'3"</option>
                                                        <option value="256.032">8'4"</option>
                                                        <option value="259.08">8'5"</option>
                                                        <option value="262.128">8'6"</option>
                                                        <option value="265.176">8'7"</option>
                                                        <option value="268.224">8'8"</option>
                                                        <option value="271.272">8'9"</option>
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
                                        <Form.Select defaultValue="Choose..." name="eyes" value={filterValue.eyes} onChange={(e) => handleFilter(e)}>
                                            <option>Choose...</option>
                                            <option value="Hazel">Hazel</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-box">
                                    <Form.Group controlId="hair_color">
                                        <Form.Label>Hair color</Form.Label>
                                        <Form.Select defaultValue="Choose..." name="hair_color" value={filterValue.hair_color} onChange={(e) => handleFilter(e)}>
                                            <option>Choose...</option>
                                            <option value="Blonde">Blonde</option>
                                            <option value="Red">Red</option>
                                            <option value="Brown">Brown</option>
                                            <option value="Dark Brown">Dark Brown</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-box">
                                    <Form.Group controlId="religion">
                                        <Form.Label>Religion</Form.Label>
                                        <Form.Select defaultValue="Choose..." name="religion" value={filterValue.religion} onChange={(e) => handleFilter(e)}>
                                            <option>Choose...</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Parsi">Parsi</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-box border-0">
                                    <Form.Group controlId="marital-status">
                                        <Form.Label>Marital Status</Form.Label>
                                        <Form.Select defaultValue="Choose..." name="marital-status" value={filterValue.interested_in} onChange={(e) => handleFilter(e)}>
                                            <option>Choose...</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="searchbyOption-btn text-center">
                            <button className="cmn_btn cmn_green rounded" onClick={(e) => handleFilterSubmit(e)}>Show Matches</button>
                        </div>
                    </div>
                    {
                        resultValue.length > 0 ? (
                            <div class="searchResult">
                                <h3>We got {resultValue.length} results. </h3>
                                <Slider {...settings}>
                                    {
                                        resultValue.map((curElem, index) => {
                                            return (
                                                <MatchCard data={curElem} />
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        ) : (
                            <>
                                {
                                    submit == true && (
                                        <div class="searchResult">
                                            <div class="no-data text-center">
                                                <h2>No data found</h2>
                                                <p>Go to dashboard to find new matches</p>
                                                <a class="cmn_btn cmn_green" href="/user/dashboard">Go To Dashboard</a>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                    <AdvertisementLS />
                </Container>
            </div>
        </>
    )
}

export default SearchOption;