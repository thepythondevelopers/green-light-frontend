import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import icons
import { MdHeight } from "react-icons/md";
import { BiBriefcaseAlt, BiQuestionMark } from "react-icons/bi";
import { SlGraduation } from "react-icons/sl";
import { BsChatDots, BsGenderAmbiguous } from "react-icons/bs";
import { TbZodiacGemini } from "react-icons/tb";
import { FaGlassMartiniAlt, FaSmoking } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import { GiAges, GiBigDiamondRing } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { TiLocationArrow } from "react-icons/ti";

const MatchCard = (props) => {
    const settings = {
        arrow: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <>
            <div className="matchCard">
                <div className="img-gallery">
                    <Slider {...settings}>
                        <img src="/assets/images/match-card.png" alt="card gallery" />
                        <img src="/assets/images/match-card.png" alt="card gallery" />
                        <img src="/assets/images/match-card.png" alt="card gallery" />
                    </Slider>
                    {
                        props?.chatVisible === "yes" && <Link to={"/user/chat"} className="chatIcon"><BsChatDots />Chat</Link>
                    }
                </div>
                <div className="matchCard-cont">
                    <h3>Jonathan</h3>
                    <p className="locationName"><CiLocationOn /> Palmyra, New York</p>
                    <div className="matchCard-box">
                        <Row>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <GiAges />
                                    <div className="matchCard-boxItem">
                                        <h6>Age</h6>
                                        <p>29</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <MdHeight />
                                    <div className="matchCard-boxItem">
                                        <h6>Height</h6>
                                        <p>5'11”</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="matchCard-boxCard">
                                    <BiBriefcaseAlt />
                                    <div className="matchCard-boxItem">
                                        <h6>Work</h6>
                                        <p>Web Designer at TBS Infotech</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="matchCard-boxCard">
                                    <SlGraduation />
                                    <div className="matchCard-boxItem">
                                        <h6>Education</h6>
                                        <p>Degree in Computer Science</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <BsGenderAmbiguous />
                                    <div className="matchCard-boxItem">
                                        <h6>Interested</h6>
                                        <p>Women</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <TbZodiacGemini />
                                    <div className="matchCard-boxItem">
                                        <h6>Astrology Sign</h6>
                                        <p>Aries</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <FaGlassMartiniAlt />
                                    <div className="matchCard-boxItem">
                                        <h6>Drugs</h6>
                                        <p>Alcohol</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <FaSmoking />
                                    <div className="matchCard-boxItem">
                                        <h6>Drugs</h6>
                                        <p>Smoking</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="matchCard-boxCard">
                                    <GiBigDiamondRing />
                                    <div className="matchCard-boxItem">
                                        <h6>Marital Status</h6>
                                        <p>Single</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <AiOutlineIdcard />
                                    <div className="matchCard-boxItem">
                                        <h6>Religion</h6>
                                        <p>Christianity</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="matchCard-boxCard">
                                    <BsGenderAmbiguous />
                                    <div className="matchCard-boxItem">
                                        <h6>Gender</h6>
                                        <p>Male</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="userStatus">
                        <img src="/assets/images/status.png" alt="Status" />
                        <div className="icons">
                            <AiOutlinePlus />
                            <BiQuestionMark />
                            <TiLocationArrow />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchCard;