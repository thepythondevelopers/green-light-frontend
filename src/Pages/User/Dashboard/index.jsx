import React, { useEffect, useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import ProfileBanner from "../../../Components/ProfileBanner";
import MatchCard from "../../../Components/MatchCard";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import { Container } from "react-bootstrap";
import "../../../assets/css/dashboard.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
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
    const [matchAlgoData, setMatchAlgoData] = useState({
        search: 1,
        interested_in: "Male",
        age_from: 10,
        age_to: 100000,
        eyes: "",
        hair_color: "",
        religion: ""
    })
    useEffect(() => {
        getMatchAlgo(matchAlgoData);
    }, []);

    // Get MatchingAlgo
    const getMatchAlgo = (data) => {
        console.log("data", data)
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
                        <AdvertisementLS />
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard;