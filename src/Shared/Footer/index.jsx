import React from "react";
import "../../assets/css/shared.css";
import { Container } from "react-bootstrap";
import { FaFacebookSquare, FaGooglePlusSquare } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <Container>
                    <div className=""></div>
                    <div className="footer-logo">
                        <img src="/assets/images/logo.png" alt="footer logo" />
                    </div>
                    <div className="footerIcons">
                        <p>Social Media</p>
                        <FaFacebookSquare />
                        <AiOutlineTwitter />
                        <BsLinkedin />
                        <BsYoutube />
                        <AiFillInstagram />
                        <FaGooglePlusSquare />
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2021 • Green Light Future inc.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}
export default Footer;