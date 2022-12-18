import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Register from "../Pages/Auth/Register";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import CreatePassword from "../Pages/Auth/CreatePassword";
import Dashboard from "../Pages/User/Dashboard";
import PersonalInfo from "../Pages/User/PersonalInfo";
import PersonalPreferences from "../Pages/User/PersonalPreferences";
import ProfessionalInfo from "../Pages/User/ProfessionalInfo";
import ContactInformation from "../Pages/User/ContactInformation";
import UploadPicture from "../Pages/User/UploadPicture";
import Settings from "../Pages/User/Settings";
import Membership from "../Pages/User/Membership";
import Matches from "../Pages/User/Matches";
import Discover from "../Pages/User/Discover";
import Chat from "../Pages/User/Chat";
import Paymenet from "../Pages/User/Paymenet";
import ContactList from "../Pages/User/ContactList";
import Test from "../Pages/User/Test";
import NotFound from "../Pages/NotFound";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                    <Route path="/create-password" element={<CreatePassword />} />
                    {/* Private Path for users */}
                    <Route path="/user" element={<PrivateRoute />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="personal-info" element={<PersonalInfo />} />
                        <Route path="personal-preferences" element={<PersonalPreferences />} />
                        <Route path="professional-info" element={<ProfessionalInfo />} />
                        <Route path="contact-info" element={<ContactInformation />} />
                        <Route path="upload-picture" element={<UploadPicture />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="membership" element={<Membership />} />
                        <Route path="discover" element={<Discover />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="contact-list" element={<ContactList />} />
                        <Route path="matches" element={<Matches />} />
                        <Route path="paymenet" element={<Paymenet />} />
                        <Route path="test" element={<Test />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;