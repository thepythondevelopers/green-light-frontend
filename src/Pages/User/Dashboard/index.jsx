import React, { useEffect, useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import ProfileBanner from "../../../Components/ProfileBanner";
import MatchCard from "../../../Components/MatchCard";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import { Container, Alert, Button } from "react-bootstrap";
import "../../../assets/css/dashboard.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
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

const Dashboard = () => {
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

    const [matchingAlgo, setMatchingAlgo] = useState("");
    useEffect(() => {
        getMatchAlgo();
    }, []);

    // Get MatchingAlgo
    const getMatchAlgo = (data) => {
        fetch(`${api}/matching-algo`, {
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
                console.log("result", result);
                setMatchingAlgo(result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    return (
        <>
            <Header />
            <ProfileBanner />
            <div className="dashboard-body space">
                <Container>
                    <div className="dashboard-wrap-inner">
                        <Slider {...settings}>
                            {
                                matchingAlgo.length > 0 && matchingAlgo.map((curElem, index) => {
                                    return (
                                        <MatchCard data={curElem} />
                                    )
                                })
                            }
                        </Slider>
                        <Alert variant="success" className="d-flex justify-content-between align-items-center">
                            <p>
                                You have indicated interest.<br />See this person in the Green Lights section.
                            </p>
                            <Button className="cmn_link">Undo</Button>
                        </Alert>
                        <AdvertisementLS />
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard;