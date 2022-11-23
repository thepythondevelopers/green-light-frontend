import React from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import ProfileBanner from "../../../Components/ProfileBanner";
import MatchCard from "../../../Components/MatchCard";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import { Container, Alert, Button } from "react-bootstrap";
import "../../../assets/css/dashboard.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

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
    return (
        <>
            <Header />
            <ProfileBanner />
            <div className="dashboard-body space">
                <Container>
                    <div className="dashboard-wrap-inner">
                        <Slider {...settings}>
                            <MatchCard />
                            <MatchCard />
                            <MatchCard />
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