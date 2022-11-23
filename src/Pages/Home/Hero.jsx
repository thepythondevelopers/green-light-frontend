import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Hero = () => {
    return(
        <>
            <div className="heroSec">
                <div className="header-logo">
                    <img src="assets/images/logo.png" alt="logo" />
                </div>
                <Container>
                    <div className="heroSec-wrap">
                        <h1>GLF helps people to find singles in their area.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                        <Link to={"/register"} className="cmn_btn cmn_green">Get Started</Link>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Hero;