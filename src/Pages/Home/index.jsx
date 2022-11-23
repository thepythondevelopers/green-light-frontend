import React from "react";
import "../../assets/css/home.css";
import Hero from "./Hero";
import About from "./About";
import Counter from "./Counter";
import Features from "./Features";
import LoveStories from "./LoveStories";
import MatchAlgo from "./MatchAlgo";
import Footer from "../../Shared/Footer";

const Home = () => {
    return(
        <>
            <Hero/>
            <MatchAlgo/>
            <Features/>
            <About/>
            <LoveStories/>
            <Counter/>
            <Footer/>
        </>
    )
}
export default Home;