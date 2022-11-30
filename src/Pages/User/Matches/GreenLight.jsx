import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import MatchCard from "../../../Components/MatchCard";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import AdvertisementPT from "../../../Components/AdvertisementPT";
import { Link } from "react-router-dom";
const api = " http://44.211.151.102/api";

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

const GreenLight = () => {
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
    const [key, setKey] = useState('greenLight');

    // Mutual Tab
    const [mutualIntrestTab, setMutualIntrestTab] = useState();

    useEffect(() => {
        getMutualIntrestApi();
    }, []);

    // Get MatchingAlgo
    const getMutualIntrestApi = (data) => {
        fetch(`${api}/mutual-green-light`, {
            method: 'GET',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                setMutualIntrestTab(result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    // Shown Interest Tab
    const [shownInterestTab, setShownInterestTab] = useState();

    useEffect(() => {
        getShownInterestApi();
    }, []);

    // Get MatchingAlgo
    const getShownInterestApi = (data) => {
        fetch(`${api}/sent-green-light`, {
            method: 'GET',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                setShownInterestTab(result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    return (
        <>
            <Container>
                <div className="green-light-tab space">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="mutualIntrest">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column green-light-sidebar">
                                    <Nav.Item>
                                        <Nav.Link eventKey="mutualIntrest">Mutual Interest</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="shownInterest">You've Shown Interest</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <AdvertisementPT />
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="mutualIntrest">
                                        <div className="green-light-cont dashboard-wrap-inner">
                                            {
                                                mutualIntrestTab ? (
                                                    <Slider {...settings}>
                                                        {
                                                            mutualIntrestTab.map((curElem, index) => {
                                                                return (
                                                                    <MatchCard data={curElem?.sent_to1} chatVisible="yes" />
                                                                )
                                                            })
                                                        }
                                                    </Slider>
                                                ) : (
                                                    <div className="no-data text-center">
                                                        <h2>No Mutual Data Found</h2>
                                                        <p>Go to dashboard to find new matches</p>
                                                        <Link to={"/user/dashboard"} className="cmn_btn cmn_green">Go To Dashboard</Link>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="shownInterest">
                                        <div className="green-light-cont dashboard-wrap-inner">
                                            {
                                                shownInterestTab ? (
                                                    <Slider {...settings}>
                                                        {
                                                            shownInterestTab.map((curElem, index) => {
                                                                return (
                                                                    <MatchCard data={curElem?.sent_to1} />
                                                                )
                                                            })
                                                        }
                                                    </Slider>
                                                ) : (
                                                    <div className="no-data text-center">
                                                        <h2>No data found</h2>
                                                        <p>Go to dashboard to find new matches</p>
                                                        <Link to={"/user/dashboard"} className="cmn_btn cmn_green">Go To Dashboard</Link>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </>
    )
}
export default GreenLight;