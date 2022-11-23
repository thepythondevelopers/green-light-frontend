import { Container } from "react-bootstrap";
import AdvertisementLS from "../../../Components/AdvertisementLS";
import { Form } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
const SearchKeyword = () => {
    return (
        <>
            <Container>
                <div className="search-keyword space">
                    <div className="search-box">
                        <Form.Group controlId="search-keyword">
                            <AiOutlineSearch />
                            <Form.Control type="text" placeholder="Enter keyword" />
                        </Form.Group>
                        <button className="cmn_btn cmn_green rounded">Show Matches</button>
                    </div>
                    <AdvertisementLS />
                </div>
            </Container>
        </>
    )
}
export default SearchKeyword;