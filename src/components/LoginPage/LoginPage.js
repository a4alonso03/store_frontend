import React, {Component} from 'react';
import Header from "../Header/Header";
import './LoginPage.scss'
import Container from "react-bootstrap/Container";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header showFilters={false}/>
                <div className="login-page">
                    <Container>

                    </Container>
                </div>
            </div>
        );
    }
}

export default LoginPage;