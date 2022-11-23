import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <>
            <aside className="sidebar">
                <div className="cmn_heading_box">
                    <h5 className="inner_cmn_heading">Let's go</h5>
                </div>
                <ul className="sidebar-links border-bottom">
                    <NavLink to={"/user/personal-info"} className="sidebar-item">Personal Information</NavLink>
                    <NavLink to={"/user/personal-preferences"} className="sidebar-item">Personal Preferences</NavLink>
                    <NavLink to={"/user/professional-info"} className="sidebar-item">Professional Information</NavLink>
                    <NavLink to={"/user/contact-info"} className="sidebar-item">Location & Contact Information</NavLink>
                    <NavLink to={"/user/upload-picture"} className="sidebar-item">Upload Picture</NavLink>
                </ul>
                <ul className="sidebar-links">
                    <NavLink to={"/user/settings"} className="sidebar-item">Settings</NavLink>
                    <button onClick={(e) => { localStorage.removeItem("user-info"); navigate("/login") }} className="sidebar-item">Logout</button>
                </ul>
                <div className="ad-img">
                    <img src="/assets/images/ad-1.png" alt="Advertisement" />
                </div>
            </aside>
        </>
    )
}
export default Sidebar;