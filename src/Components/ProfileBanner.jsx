import React, { useEffect } from "react";
import "../assets/css/component.css";
import { Container, ProgressBar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../Redux/Action/Action";
import { useState } from "react";

const ProfileBanner = () => {
    // token
    const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
    const getToken = getlocalStorage.token;

    //=====================================================================================================//

    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [progress , setProgress] = useState(0);

    useEffect(() => {
        dispatch(getUserAPI(getToken))

        if(user?.first_name && user?.last_name && user?.dob && user?.gender && user?.interested_in && user?.height && user?.eyes && user?.hair_color ){
            setProgress(progress+20)
        } 

        if(user?.have_car && user?.last_name && user?.dob && user?.gender && user?.interested_in && user?.height && user?.eyes && user?.hair_color ){
            setProgress(progress+20)
        } 

        if(user?.first_name && user?.last_name && user?.dob && user?.gender && user?.interested_in && user?.height && user?.eyes && user?.hair_color ){
            setProgress(progress+20)
        } 

        if(user?.first_name && user?.last_name && user?.dob && user?.gender && user?.interested_in && user?.height && user?.eyes && user?.hair_color ){
            setProgress(progress+20)
        } 

        if(user?.first_name && user?.last_name && user?.dob && user?.gender && user?.interested_in && user?.height && user?.eyes && user?.hair_color ){
            setProgress(progress+20)
        } 

    }, []);

// console.log(progress)

    return (
        <>
            <section className="space profile-banner">
                <Container>
                    <div className="profile-banner-wrap text-center text-white">
                        <img src="/assets/images/profile-icon.png" alt="Profile" />
                        <h5>Hello {user?.display_name}</h5>
                        <h3>Complete your profile</h3>
                        <ProgressBar now={progress} />
                        <p>Your Profile completion is at {progress}%</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProfileBanner;