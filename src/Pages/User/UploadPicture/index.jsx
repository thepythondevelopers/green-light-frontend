import React, { useEffect, useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Sidebar from "../../../Shared/Sidebar";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';
import "../../../assets/css/info-card.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserAPI } from "../../../Redux/Action/Action";
import axios from "axios";
const api = " http://44.211.151.102/api";

const UploadPicture = () => {
    // Token 
    const getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
    const getToken = getlocalStorage.token;

    // ============================================================================================================================== //
    const user = useSelector((state) => state.userReducer.userInfo);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [image, setImage] = useState();
    console.log("image", image);
    const [imageResult, setImageResult] = useState();
    const handleUploadChange = (e) => {
        setImage(e.target.files[0]);
        console.log("image", image);
        console.log("e.target.files[0]", e.target.files[0]);
        professionalInfoAPI(e.target.files[0]);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     professionalInfoAPI(image);
    // }

    useEffect(() => {
        dispatch(getUserAPI(getToken));
        setImageResult(user);
    }, []);
    useEffect(() => {
        setImageResult(user);
    }, [user]);

    // Personal Preferences API
    const professionalInfoAPI = (data) => {
        var formdata = new FormData();
        formdata.append("image", data);
        fetch(`${api}/profile-image`, {
            method: 'POST',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token
            },
            body: formdata,
        })
            .then(response => response.text())
            .then(result => {
                setImageResult(user);
                dispatch(getUserAPI(getToken));
                setMessage(result);
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            })
            .catch(error => {
                console.log('error', error);
                setErrorMessage(error);

            });
    }

    return (
        <>
            <Header />
            <ProfileBanner />
            <section className="body-wrap space">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Sidebar />
                        </Col>
                        <Col md={8}>
                            <div className="info-card">
                                <div className="cmn_heading_box d-flex align-items-center">
                                    <FaUserCircle />
                                    <h5 className="inner_cmn_heading ml-3">Photos</h5>
                                </div>
                                <div className="form-wrap">
                                    <h6>Members who upload a photo are 10x more likely to receive views!</h6>
                                    <ul>
                                        <li>Photo must be of yourself</li>
                                        <li>Uploaded images should be in one of the following formats:  jpg, png, gif, or animated gif. </li>
                                        <li>Avoid excessive image noise from upsampling or upscaling.</li>
                                        <li>Use high-resolution images. Do not upload thumbnails to represent your work.</li>
                                    </ul>
                                    <Row className="mb-4">
                                        <Col md={4}>
                                            <div className="uploadImg">
                                                {
                                                    imageResult?.images ?
                                                        (<img src={`https://pamsarbucket.s3.amazonaws.com/${imageResult?.images[0]}`} alt="photos" />) :
                                                        (<img src="/assets/images/dummy-profile.png" alt="photos" />)
                                                }
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            <div className="file-uplaod">
                                                <Form.Group controlId="formFile">
                                                    <Form.Control type="file" accept="image/*" onChange={(e) => handleUploadChange(e)} />
                                                    <div className="file-dummy">
                                                        <div className="indiebloc">
                                                            <FiUpload />
                                                            <p>Drop your photo here to upload it.</p>
                                                        </div>
                                                        <button className='cmn_btn cmn_green w-100'>
                                                            Upload Document
                                                        </button>
                                                    </div>
                                                </Form.Group>
                                            </div>
                                            {message && <Alert variant="success"> <p className="text-center">{message}</p></Alert>}
                                            {errorMessage && <Alert variant="danger"> <p className="text-center">{errorMessage}</p></Alert>}
                                        </Col>
                                    </Row>
                                    <h6 >Add more photos</h6>
                                    <div className="add-photos">
                                        <ul className="adddphotos">
                                            {
                                                imageResult?.images ? imageResult?.images.map((curelem, index) => (
                                                    <li key={index}><img src={`https://pamsarbucket.s3.amazonaws.com/${curelem}`} alt="photos" /></li>
                                                )) :
                                                    (<>
                                                        <li> <img src="/assets/images/dummy-profile.png" alt="photos" /></li>
                                                        <li> <img src="/assets/images/dummy-profile.png" alt="photos" /></li>
                                                        <li> <img src="/assets/images/dummy-profile.png" alt="photos" /></li>
                                                        <li> <img src="/assets/images/dummy-profile.png" alt="photos" /></li>
                                                        <li> <img src="/assets/images/dummy-profile.png" alt="photos" /></li>
                                                        <li> <img src="/assets/images/dummy-profile.png" alt="photos" /></li>
                                                    </>)
                                            }
                                            <li><AiOutlinePlusCircle /></li>
                                        </ul>
                                    </div>
                                    <h6 className="cmn_color">Choosing your photos</h6>
                                    <Row>
                                        <Col md={5}>
                                            <ul>
                                                <li>Photo must be of yourself</li>
                                                <li>Use your casual photographs </li>
                                                <li>Avoid low lighting images</li>
                                                <li>Use high-resolution images</li>
                                                <li>Also use images with side poses</li>
                                            </ul>
                                        </Col>
                                        <Col md={7}>
                                            <div className="choosePhotos">
                                                <div className="fullPhoto">
                                                    <img src="/assets/images/upload-pic1.png" alt="Uploadpic1" />
                                                </div>
                                                <div className="smallPicks">
                                                    <img src="/assets/images/upload-pic2.png" alt="Uploadpic2" />
                                                    <img src="/assets/images/upload-pic3.png" alt="Uploadpic3" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default UploadPicture;