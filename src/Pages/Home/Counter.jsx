import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Counter = () => {
    return(
        <>
            <div className="counter space">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="counterWrap">
                                <img src="assets/images/icon2.png" alt="icon2" />
                                <h2>5690+</h2>
                                <p>Daily matches</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="counterWrap">
                                <img src="assets/images/icon1.png" alt="icon1" />
                                <h2>1166+</h2>
                                <p>New users</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="counterWrap">
                                <img src="assets/images/icon3.png" alt="icon3" />
                                <h2>10326+</h2>
                                <p>Regular visitors</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="counterWrap">
                                <img src="assets/images/icon4.png" alt="icon4" />
                                <h2>856+</h2>
                                <p>Registered devices</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Counter;