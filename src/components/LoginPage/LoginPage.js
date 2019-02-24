/** React **/
import React, {Component} from 'react';

/** Components **/
import Header from "../Header/Header";

/** Styling **/
import './LoginPage.scss'
import {Container, Col, Row} from "react-bootstrap";

/** Networking **/
import {loginRequest} from "../../http/UserRequests";

/** Routing **/
import * as ROUTES from '../../routing/Routes'
import {Link, withRouter} from 'react-router-dom';

/** Redux **/
import {connect} from "react-redux";
import {LOGIN_USER} from "../../redux/ReducerActions";


class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        loginError: false
    };

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    };

    attemptLogin = () => {
        loginRequest(this.state.email, this.state.password).then(response => {
            if (response.ok) {
                console.log(response.headers.get('Authorization'));
                localStorage.setItem("token", response.headers.get('Authorization').split(" ")[1]);
                this.props.loginUser(response.headers.get('Username'));
                this.props.history.push(ROUTES.ROOT);
            } else {
                this.setState({loginError: true})
            }
        })
    };

    render() {
        let loginError = null;

        if (this.state.loginError) {
            loginError = (
                <p className="login-error">Incorrect Username/Password</p>
            )
        }

        return (
            <div>
                <Header showFilters={false}/>
                <div className="login-page">
                    <Container>
                        <Row>
                            <Col className="login-container">
                                <h1>Welcome</h1>
                                <input name="email"
                                       className="login-input"
                                       type="text"
                                       placeholder="Email"
                                       value={this.state.email}
                                       onChange={evt => this.handleInputChange(evt)}/>
                                <input name="password"
                                       className="login-input"
                                       type="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={evt => this.handleInputChange(evt)}/>
                                {loginError}
                                <button
                                    onClick={() => this.attemptLogin()}
                                    className="login-button">
                                    Sign In
                                </button>

                                <p className="no-account">Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign Up </Link></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (username) => {
            dispatch({type: LOGIN_USER, username})
        }
    }
};

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));