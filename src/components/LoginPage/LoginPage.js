/** React **/
import React, {Component} from 'react';

/** Components **/
import Header from "../Header/Header";

/** Styling **/
import './LoginPage.scss'
import {Container, Col, Row} from "react-bootstrap";

/** Networking **/
import {loginRequest} from "../../http/UserRequests";

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    };

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    };

    attemptLogin = () => {
      loginRequest(this.state.email, this.state.password).then(response => {
          if(response.ok) {
            return response.json()
          } else {
              console.log("Login Error")
          }
      }).then(jsonResponse => {
          if(jsonResponse.data != null){
              console.log(jsonResponse.data);
              
          }
      })
    }

    render() {
        return (
            <div>
                <Header showFilters={false}/>
                <div className="login-page">
                    <Container>
                        <Row>
                            <Col className="login-container">
                                <h1>Welcome</h1>
                                <input name="email"
                                       type="text"
                                       placeholder="Email"
                                       value={this.state.email}
                                       onChange={evt => this.handleInputChange(evt)}/>
                                <input name="password"
                                       type="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={evt => this.handleInputChange(evt)}/>
                                <button onClick={() => this.attemptLogin()}>Sign In</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }


}

export default LoginPage;