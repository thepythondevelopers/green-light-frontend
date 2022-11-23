import React, { useState } from "react";
import '../../../assets/css/info-card.css';
import { Container } from "react-bootstrap";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import MatchCard from "../../../Components/MatchCard";
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

const YellowLight = () => {
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
            <div className="green-light-box space">
                <Container>
                    <div className="dashboard-wrap-inner">
                        <Slider {...settings}>
                            <MatchCard chatVisible="yes" />
                            <MatchCard chatVisible="yes" />
                            <MatchCard chatVisible="yes" />
                        </Slider>
                        <AdvertisementLS />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default YellowLight;