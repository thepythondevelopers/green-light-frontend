import { Container } from "react-bootstrap";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import MatchCard from "../../../Components/MatchCard";
import { Form } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from "react";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
const api = "https://greenlightapi.pamsar.com/api";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        ><BsArrowRightShort /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        ><BsArrowLeftShort /></div>
    );
}
const SearchKeyword = () => {
    const settings = {
        arrow: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const [matchingAlgoName, setMatchingAlgoName] = useState("");
    const [resultValue, setResultValue] = useState({});
    const [submit, isSubmit] = useState(false);
    console.log(submit);
    const handleSearchByName = (e) => {
        e.preventDefault();
        getMatchingAlgoDisplayName(matchingAlgoName);
        isSubmit(true);
    }
    const getMatchingAlgoDisplayName = (data) => {
        fetch(`${api}/matching-algo-display-name`, {
            method: 'POST',
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ search_string: data }),
        })
            .then(response => response.json())
            .then(result => {
                setResultValue(result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    return (
        <>
            <Container>
                <div className="search-keyword space">
                    <div className="search-box">
                        <Form.Group controlId="search-keyword">
                            <AiOutlineSearch />
                            <Form.Control type="text" placeholder="Enter keyword" value={matchingAlgoName} onChange={(e) => setMatchingAlgoName(e.target.value)} />
                        </Form.Group>
                        <button className="cmn_btn cmn_green rounded" onClick={(e) => handleSearchByName(e)}>Show Matches</button>
                    </div>
                    {
                        resultValue.length > 0 ? (
                            <div class="searchResult">
                                <h3>We got {resultValue.length} results</h3>
                                <Slider {...settings}>
                                    {
                                        resultValue.map((curElem, index) => {
                                            return (
                                                <MatchCard data={curElem} />
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        ) : (
                            <>
                                {
                                    submit == true && (
                                        <div class="searchResult">
                                            <div class="no-data text-center">
                                                <h2>No data found</h2>
                                                <p>Go to dashboard to find new matches</p>
                                                <a class="cmn_btn cmn_green" href="/user/dashboard">Go To Dashboard</a>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                    <AdvertisementLS />
                </div>
            </Container>
        </>
    )
}
export default SearchKeyword;