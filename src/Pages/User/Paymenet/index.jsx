import React from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import ProfileBanner from "../../../Components/ProfileBanner";
import { Container, Row, Col } from "react-bootstrap";
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import "../../../assets/css/membership.css";
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

const Paymenet = () => {
    return (
        <>
            <Header />
            <ProfileBanner />
            <section className="body-wrap space">
                <Container>
                    <h2 className="cmn-heading2 text-center">Upgrade to Premium</h2>
                    <div className="membership-wrap">
                        <Row className="justify-content-evenly">
                            <Col md={6} lg={4}>
                                <PaymentForm
                                    /**
                                     * Identifies the calling form with a verified application ID generated from
                                     * the Square Application Dashboard.
                                     */
                                    applicationId="sandbox-sq0idb-uvq8Zn8-noLTm4jV9Aa4FQ"
                                    /**
                                     * Invoked when payment form receives the result of a tokenize generation
                                     * request. The result will be a valid credit card or wallet token, or an error.
                                     */
                                    cardTokenizeResponseReceived={(token, buyer) => {
                                        console.info({ token, buyer });
                                    }}
                                    /**
                                     * This function enable the Strong Customer Authentication (SCA) flow
                                     *
                                     * We strongly recommend use this function to verify the buyer and reduce
                                     * the chance of fraudulent transactions.
                                     */
                                    createVerificationDetails={() => ({
                                        amount: '1.00',
                                        /* collected from the buyer */
                                        billingContact: {
                                            addressLines: ['123 Main Street', 'Apartment 1'],
                                            familyName: 'Doe',
                                            givenName: 'John',
                                            countryCode: 'GB',
                                            city: 'London',
                                        },
                                        currencyCode: 'GBP',
                                        intent: 'CHARGE',
                                    })}
                                    /**
                                     * Identifies the location of the merchant that is taking the payment.
                                     * Obtained from the Square Application Dashboard - Locations tab.
                                     */
                                    locationId="LID"
                                >
                                    <CreditCard />
                                </PaymentForm>
                            </Col>
                        </Row>
                        <div className="advertisement-landscape">
                            <picture>
                                <source media="(min-width:768px)" type="image/webp" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <source media="(min-width:768px)" type="image/jpg" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <source media="(max-width:767px)" type="image/webp" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <source media="(max-width:767px)" type="image/jpg" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                                <img src="/assets/images/auth-sidebar-bottom.png" className="img-fluid" alt="login" />
                            </picture>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Paymenet;