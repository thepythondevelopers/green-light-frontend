import React, { useEffect } from "react";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { AiFillHome } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { TiLocationArrow } from 'react-icons/ti';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../Redux/Action/Action";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAPI())
    }, []);
    return (
        <>
            <header className="header">
                <Container>
                    <div className="top-bar">
                        <img src="/assets/images/logo.png" alt="logo" />
                    </div>
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <div className="left-nav">
                                        <NavLink className="nav-link" to="/user/dashboard"><AiFillHome />Home</NavLink>
                                        <NavLink className="nav-link" to="/user/matches"><FaUsers />Matches</NavLink>
                                        <NavLink className="nav-link" to="/user/contact-list"><MdOutlineMessage />Messages</NavLink>
                                        <NavLink className="nav-link" to="/user/discover"><TiLocationArrow />Discover</NavLink>
                                    </div>
                                    <div className="right-nav">
                                        <Link to="/user/membership" className="nav-link menu-btn">Upgrade to Premium <img src="/assets/images/premium.png" alt="Upgrade to Premium" /></Link>
                                        <NavDropdown title={user?.display_name} id="basic-nav-dropdown">
                                            <div className="profileInfo d-flex">
                                                <img src="/assets/images/profile-icon.png" alt="Profile" className="img-fluid" />
                                                <div className="userProfileCont">
                                                    <h6>{(user?.first_name || user?.last_name) ? (<>{user?.first_name} {user?.last_name}</>) : (<>{user?.display_name}</>)}</h6>
                                                    <p>Profile ID: {user?._id}</p>
                                                </div>
                                            </div>
                                            <Link to="/user/personal-info"><BiUser />Edit profile</Link>
                                            <Link to="/user/settings"><AiOutlineSetting />Settings</Link>
                                            <Button onClick={(e) => { localStorage.removeItem("user-info"); navigate("/login") }}><AiOutlineLogout />Logout</Button>
                                        </NavDropdown>
                                        <div className="notification">
                                            <div className="notification-box">
                                                <BsBell />
                                                <span>6</span>
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}
export default Header;