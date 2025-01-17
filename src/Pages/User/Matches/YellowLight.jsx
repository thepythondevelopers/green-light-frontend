import React, { useState, useEffect } from "react";
import '../../../assets/css/info-card.css';
import { Container } from "react-bootstrap";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import MatchCard from "../../../Components/MatchCard";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
// const api = "https://greenlightapi.pamsar.com/api";
const api ="http://192.168.1.3:3004/api"

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

const YellowLight = () => {
    const settings = {
        arrow: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    const [yellowLight, setYellowLight] = useState();
    useEffect(() => {
        getYellowLightApi();
    }, []);

    // Get MatchingAlgo
    const getYellowLightApi = (data) => {
        fetch(`${api}/yellow-light`, {
            method: 'GET',
            headers: {
                // "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VlNzFmMTlmYzdiZDQyYTEwMmVkMzkiLCJzY29wZSI6InVzZXIiLCJ0b2tlbl9nZW5fYXQiOjE2NzkzMzY0NjQwMjcsImlhdCI6MTY3OTMzNjQ2NH0.WvYA3EQTtikeCtkhLlL6LBxZx2Q3GkRLt_ZQa8tKmq0",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log("result", result);
                setYellowLight(result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    return (
        <>
            <div className="green-light-box space">
                <Container>
                    <div className="dashboard-wrap-inner">
                        {
                            yellowLight?.length > 0 ? (
                                <Slider {...settings}>
                                    {
                                        yellowLight.map((curElem, index) => {
                                            return (
                                                <MatchCard data={curElem?.sent} />
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
                        <AdvertisementLS />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default YellowLight;