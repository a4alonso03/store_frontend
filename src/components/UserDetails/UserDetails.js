import React, {Component} from 'react';
import Header from "../Header/Header";
import {Container, Row, Col} from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import UserAccountPage from "./UserAccountPage/UserAccountPage";
import {withRouter} from "react-router-dom";
import './UserDetails.scss'


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
                    <Row>
                        <Col xs={12}>
                            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                                <TabList>
                                    <Tab>FirstTitle</Tab>
                                    <Tab>SecondTitle</Tab>
                                </TabList>
                                <TabPanel>
                                    <UserAccountPage/>
                                </TabPanel>
                                <TabPanel>
                                    <UserAccountPage/>
                                </TabPanel>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>

                
            </React.Fragment>
        );
    }
}

export default withRouter(UserDetails);