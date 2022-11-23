import React, { useState } from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import SearchOption from "./SearchOption";
import SearchKeyword from "./SearchKeyword";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../../../assets/css/discover.css";

const Discover = () => {
    const [key, setKey] = useState('search-by-keyword');
    return (
        <>
            <Header />
            {/* <discoverTab /> */}
            <section className="body-wrap discover-body cmnTab-body">
                <Tabs
                    defaultActiveKey="profile"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="search-by-keyword" title="Search by Keyword">
                        <SearchKeyword />
                    </Tab>
                    <Tab eventKey="search-by-options" title="Search by options">
                        <SearchOption />
                    </Tab>

                </Tabs>
            </section>
            <Footer />
        </>
    )
}

export default Discover;