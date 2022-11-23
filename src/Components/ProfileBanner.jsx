import React, { useEffect } from "react";
import "../assets/css/component.css";
import { Container, ProgressBar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../Redux/Action/Action";

const ProfileBanner = () => {
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAPI())
    }, []);
    return (
        <>
            <section className="space profile-banner">
                <Container>
                    <div className="profile-banner-wrap text-center text-white">
                        <img src="/assets/images/profile-icon.png" alt="Profile" />
                        <h5>Hello {user?.display_name}</h5>
                        <h3>Complete your profile</h3>
                        <ProgressBar now={75} />
                        <p>Your Profile completion is at 75%</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProfileBanner;