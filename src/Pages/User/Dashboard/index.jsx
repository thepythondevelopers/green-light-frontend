import React, { useEffect, useState, useMemo } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import ProfileBanner from "../../../Components/ProfileBanner";
import MatchCard from "../../../Components/MatchCard";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import { Container } from "react-bootstrap";
import "../../../assets/css/dashboard.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
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
    // token
    const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
    const getToken = getlocalStorage.token;

    //=====================================================================================================//
    const user = useSelector((state) => state.userReducer.userInfo);
    const interest = user.interested_in;
    const dispatch = useDispatch();
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
        interested_in: "",
        age_from: 18,
        age_to: 25,
        height_from: "140",
        height_to: "220",
        eyes: "",
        hair_color: "",
        religion: "",
        not_include: []
    })
    useEffect(() => {
        dispatch(getUserAPI(getToken));
    }, [getToken]);

    // Get MatchingAlgo
    const getMatchAlgo = (interest) => {
        const data = {
            search: 1,
            interested_in: interest,
            age_from: 18,
            age_to: 25,
            height_from: "140",
            height_to: "220",
            eyes: "",
            hair_color: "",
            religion: "",
            not_include: []
        }
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
                console.log("result:::::::::", result);
                setMatchingAlgo(result.data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    useMemo(() => {
        let userInterest = "";
        console.log(user.length);
        if (Object.keys(user).length > 0) {
            console.log("test");
            userInterest = user?.interested_in[0]
            getMatchAlgo(userInterest);
        }
    }, [user])
    return (
        <>
            <Header />
            <ProfileBanner />
            <div className="dashboard-body space">
                <Container>
                    <div className="dashboard-wrap-inner">
                        <Slider {...settings}>
                            {
                                matchingAlgo.length > 0 &&
                                matchingAlgo.map((curElem, index) => {
                                    return (
                                        <MatchCard key={index} data={curElem} />
                                    )
                                })
                            }
                            {
                                matchingAlgo.length == 0 && (<p className="not-found">Not Found any result related to your profile</p>)
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