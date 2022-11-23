import React, { useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import YellowLight from "./YellowLight";
import GreenLight from "./GreenLight";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../../../assets/css/matches.css";
import "../../../assets/css/dashboard.css";

const Matches = () => {
    const [key, setKey] = useState('greenLight');
    return (
        <>
            <Header />
            {/* <MatchesTab /> */}
            <section className="body-wrap matches-body cmnTab-body">
                <Tabs
                    defaultActiveKey="greenLight"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="greenLight" title="Green Light">
                        <GreenLight />
                    </Tab>
                    <Tab eventKey="yellowLight" title="Yellow Light">
                        <YellowLight />
                    </Tab>

                </Tabs>
            </section>
            <Footer />
        </>
    )
}

export default Matches;