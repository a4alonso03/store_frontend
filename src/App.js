/** React **/
import React, {Component} from 'react';

/** Components **/
import MainPage from "./components/MainPage/MainPage";

/** Routing **/
import {Switch, Route, withRouter} from 'react-router-dom'

import * as ROUTES from './routing/Routes'

/** Styling **/
import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import Product from "./components/Product/Product";
import UserDetails from "./components/UserDetails/UserDetails";
import PurchasesSection from "./components/PurchasesSection/PurchasesSection";
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


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
                    <Route exact path={ROUTES.SIGN_UP} render={() => (
                        <SignUpPage/>
                    )}/>
                    <Route exact path={ROUTES.PRODUCT + "/:id"} render={() => (
                        <Product/>
                    )}/>

                    <Route exact path={ROUTES.USER + "/:userId"} render={() => (
                        <UserDetails/>
                    )}/>

                    <Route exact path={ROUTES.PURCHASE_SECTION} render={() => (
                        <PurchasesSection/>
                    )}/>

                    {/* TODO: add not found page*/}


                </Switch>
                <Alert effect='slide' stack={{limit: 1}} position='top-right'/>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
