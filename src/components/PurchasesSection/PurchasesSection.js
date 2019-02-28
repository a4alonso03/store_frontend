import React, {Component} from 'react';
import Header from "../Header/Header";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import './PurchasesSection.scss'
import UserCart from "./UserCart/UserCart";
import PurchaseData from "./PurchaseData/PurchaseData";
import ConfirmationScreen from "./ConfirmationScreen/ConfirmationScreen";


class PurchasesSection extends Component {
    state = {
        activeSlide: 0
    };

    handleSelect = (selectedIndex, e) => {
        this.setState({
            activeSlide: selectedIndex,
            direction: e.direction,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Header showFilters={false}/>
                <Container fluid className="purchases-section">
                    <Row>
                        <Col>
                            <Carousel interval={null}
                                      wrap={false}
                                      controls={false}
                                      activeIndex={this.state.activeSlide}
                                      onSelect={this.handleSelect} >
                                <Carousel.Item>
                                    <UserCart onSelectHandler={this.handleSelect}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <PurchaseData onSelectHandler={this.handleSelect}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <ConfirmationScreen onSelectHandler={this.handleSelect}/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default PurchasesSection;