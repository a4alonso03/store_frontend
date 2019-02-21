/** React **/
import React, {Component} from 'react';

/** Styling **/
import './App.css';

/** Components **/
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

/** Routing **/
import {Switch, Route, withRouter} from 'react-router-dom'

import * as ROUTES from './routing/Routes'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                <Route exact path={ROUTES.ROOT} render={() => (
                   <MainPage/>
                )}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
