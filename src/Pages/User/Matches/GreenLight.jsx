import { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import MatchCard from "../../../Components/MatchCard";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import AdvertisementPT from "../../../Components/AdvertisementPT";

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
                                            <Slider {...settings}>
                                                <MatchCard chatVisible="yes" />
                                                <MatchCard chatVisible="yes" />
                                                <MatchCard chatVisible="yes" />
                                            </Slider>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="shownInterest">
                                        <div className="green-light-cont dashboard-wrap-inner">
                                            <Slider {...settings}>
                                                <MatchCard chatVisible="yes" />
                                                <MatchCard chatVisible="yes" />
                                                <MatchCard chatVisible="yes" />
                                            </Slider>
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