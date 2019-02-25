import React, {Component} from 'react';
import './MainPage.scss'
import Header from "../Header/Header";
import MainCarousel from "./MainCarousel/MainCarousel";
import ItemList from './ItemList/ItemList'
import {Col, Row, Container} from "react-bootstrap";

class MainPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Header showFilters={true}/>
                <Container fluid className="carousel-container">
                    <Row>
                        <Col>
                            <MainCarousel/>
                        </Col>
                        <Col>
                            <ItemList/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default MainPage;