/** React **/
import React, {Component} from 'react';

/** Components **/
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

/** Routing **/
import {Switch, Route, withRouter} from 'react-router-dom'

import * as ROUTES from './routing/Routes'

/** Styling **/
import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";


class App extends Component {


    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={ROUTES.ROOT} render={() => (
                        <MainPage/>
                    )}/>

                    <Route exact path={ROUTES.SIGN_IN} render={() => (
                        <LoginPage/>
                    )}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
