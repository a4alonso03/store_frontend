import React, {Component} from 'react';

/** Styling **/
import './SignUpPage.scss'
import {Container, Col, Row} from "react-bootstrap";
import Header from "../Header/Header";
import isEmail from 'validator/lib/isEmail';

/** Routing **/
import * as ROUTES from '../../routing/Routes'
import {Link, withRouter} from 'react-router-dom';

class SignUpPage extends Component {
    state = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        badEmail: false,
        badPassword: false,
        passwordNotMatch: false
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    validateField = event => {

        const fieldName = event.target.name;
        const input = event.target.value;
        switch (fieldName) {
            case "email":
                console.log("state changed");
                if(!isEmail(input)) {
                    console.log("is a bad email")
                    this.setState({badEmail: true})
                }
                this.setState({badEmail: false});
                return;
            case "password":
                if(input.size < 5){
                    this.setState({badPassword: true});
                }
                this.setState({badPassword: false});
                return;
            case "confirmPassword":
                if(input !== this.state.password){
                    this.setState({passwordNotMatch: true})
                }
                this.setState({passwordNotMatch: false});
                return;
            default: return;
        }
    };

    attemptRegister = () =>{
          if(this.state.badEmail === false && this.state.badPassword === false && this.state.passwordNotMatch === false ){

          }
    };

    render() {
        const emailError = this.state.badEmail === true ? <p className="form-error"> Please input a valid email </p> : null;
        const passwordError = this.state.badPassword ? <p className="form-error"> Please a password over 5 characters </p> : null;
        const passwordMatchError = this.state.passwordNotMatch ? <p className="form-error"> Passwords don't match</p> : null;

        return (
            <React.Fragment >
                <Header showFilters={false}/>
                <Container className="register-page">
                    <Row>
                        <Col>
                            <div className="register-container">
                                <h1>Welcome to One Plus</h1>
                                <input name="name"
                                       className="sign-up-input"
                                       type="text"
                                       placeholder="Name"
                                       value={this.state.name}
                                       onChange={evt => this.handleInputChange(evt)}
                                />
                                <input name="lastName"
                                       className="sign-up-input"
                                       type="text"
                                       placeholder="Last Name"
                                       value={this.state.lastName}
                                       onChange={evt => this.handleInputChange(evt)}
                                />
                                <input name="email"
                                       className="sign-up-input"
                                       type="text"
                                       placeholder="Email"
                                       value={this.state.email}
                                       onChange={evt => this.handleInputChange(evt)}
                                       onBlur={evt => this.validateField(evt)}
                                />
                                {emailError}
                                <input name="password"
                                       className="sign-up-input"
                                       type="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={evt => this.handleInputChange(evt)}
                                       onBlur={evt => this.validateField(evt)}
                                />
                                {passwordError}
                                <input name="confirmPassword"
                                       className="sign-up-input"
                                       type="password"
                                       placeholder="Confirm Password"
                                       value={this.state.confirmPassword}
                                       onChange={evt => this.handleInputChange(evt)}
                                       onBlur={evt => this.validateField(evt)}
                                />
                                {passwordMatchError}

                                <button
                                    onClick={() => this.attemptRegister()}
                                    className="register-button">
                                    Register
                                </button>
                                <p className="have-account"> Already have an account? <Link to={ROUTES.SIGN_IN}> Sign In </Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}



export default withRouter(SignUpPage);