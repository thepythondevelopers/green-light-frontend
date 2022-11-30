import React, { useState } from "react";
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
const api = " http://44.211.151.102/api";

const MatchCard = (props) => {
    console.log("props", props?.data)
    const settings = {
        arrow: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    const [light, setLight] = useState({
        sent_to: "",
        sent_light: ""
    });
    // Get Save Light
    const saveLightApi = (data) => {
        fetch(`${api}/save-light`, {
            method: 'POST',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log("result", result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    return (
        <>
            <div className="matchCard">
                <div className="img-gallery">
                    <Slider {...settings}>
                        {
                            props?.data?.images > 0 ? props?.data?.images.map((curelem, index) => {
                                <img src={`https://pamsarbucket.s3.amazonaws.com/${curelem}`} alt="card gallery" />
                            }) : (<img src="/assets/images/match-card.png" alt="card gallery" />)
                        }

                    </Slider>
                    {
                        props?.chatVisible === "yes" && <Link to={"/user/chat"} className="chatIcon"><BsChatDots />Chat</Link>
                    }
                </div>
                <div className="matchCard-cont">
                    <h3>{props?.data?.display_name}</h3>
                    <p className="locationName"><CiLocationOn /> {props?.data?.city} {props?.data?.country}</p>
                    <div className="matchCard-box">
                        <Row>
                            {props?.data?.dob &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <GiAges />
                                        <div className="matchCard-boxItem">
                                            <h6>Age</h6>
                                            <p>{props?.data?.dob}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.height &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <MdHeight />
                                        <div className="matchCard-boxItem">
                                            <h6>Height</h6>
                                            <p>{props?.data?.height}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {(props?.data?.work_position || props?.data?.work_employer) &&
                                < Col md={12}>
                                    <div className="matchCard-boxCard">
                                        <BiBriefcaseAlt />
                                        <div className="matchCard-boxItem">
                                            <h6>Work</h6>
                                            <p>{props?.data?.work_position} at  {props?.data?.work_employer}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.education_degree &&
                                <Col md={12}>
                                    <div className="matchCard-boxCard">
                                        <SlGraduation />
                                        <div className="matchCard-boxItem">
                                            <h6>Education</h6>
                                            <p>{props?.data?.education_degree}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.interested_in &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <BsGenderAmbiguous />
                                        <div className="matchCard-boxItem">
                                            <h6>Interested</h6>
                                            <p>{props?.data?.interested_in[0]}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.astrology_sign &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <TbZodiacGemini />
                                        <div className="matchCard-boxItem">
                                            <h6>Astrology Sign</h6>
                                            <p>{props?.data?.astrology_sign}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {(props?.data?.alcohol && props?.data?.alcohol !== "No") &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <FaGlassMartiniAlt />
                                        <div className="matchCard-boxItem">
                                            <h6>Drugs</h6>
                                            <p>Alcohol</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {(props?.data?.smoking && props?.data?.smoking !== "No") &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <FaSmoking />
                                        <div className="matchCard-boxItem">
                                            <h6>Drugs</h6>
                                            <p>Smoking</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.marital_status &&
                                <Col md={12}>
                                    <div className="matchCard-boxCard">
                                        <GiBigDiamondRing />
                                        <div className="matchCard-boxItem">
                                            <h6>Marital Status</h6>
                                            <p>{props?.data?.marital_status}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.religion &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <AiOutlineIdcard />
                                        <div className="matchCard-boxItem">
                                            <h6>Religion</h6>
                                            <p>{props?.data?.religion}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {props?.data?.gender &&
                                <Col md={6}>
                                    <div className="matchCard-boxCard">
                                        <BsGenderAmbiguous />
                                        <div className="matchCard-boxItem">
                                            <h6>Gender</h6>
                                            <p>{props?.data?.gender}</p>
                                        </div>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </div>
                    <div className="userStatus">
                        <div className="icons">
                            <span className="red-light light" onClick={(e) => { console.log("red test", props?.data?._id); saveLightApi({ "sent_to": props?.data?._id, "sent_light": "Red" }) }}>
                                <img src="/assets/images/status-red.png" alt="Status" />
                                <AiOutlinePlus />
                            </span>
                            <span className="yellow-light light" onClick={(e) => { console.log("yellow test", props?.data?._id); saveLightApi({ "sent_to": props?.data?._id, "sent_light": "Yellow" }) }}>
                                <img src="/assets/images/status-yellow.png" alt="Status" />
                                <BiQuestionMark />
                            </span>
                            <span className="green-light light" onClick={(e) => { console.log("green test", props?.data?._id); saveLightApi({ "sent_to": props?.data?._id, "sent_light": "Green" }) }}>
                                <img src="/assets/images/status-green.png" alt="Status" />
                                <TiLocationArrow />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchCard;