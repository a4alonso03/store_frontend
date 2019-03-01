import React, {Component} from 'react';
import Header from "../Header/Header";
import {Tab, Row, Col, Nav, Container} from "react-bootstrap";
//import "react-tabs/style/react-tabs.css";
import UserAccountPage from "./UserAccountPage/UserAccountPage";
import {withRouter} from "react-router-dom";
import './UserDetails.scss'
import OrdersPage from "./OrdersPage/OrdersPage";
import AddressPage from "./AddressPage/AddressPage";
import PaymentPage from "./PaymentPage/PaymentPage";


class UserDetails extends Component {
    state = {
        userId: ""
    };

    componentDidMount() {
        this.setState({userId: this.props.match.params.userId});
    }

    render() {
        return (
            <React.Fragment>
                <Header showFilters={false}/>
                <Container>
                    <Tab.Container  defaultActiveKey="first">
                        <Row className="tab-container">
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">YourProfile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Your Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Your addresses</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Payment</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <UserAccountPage/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <OrdersPage/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <AddressPage/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <PaymentPage/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>


            </React.Fragment>
        );
    }
}

export default withRouter(UserDetails);