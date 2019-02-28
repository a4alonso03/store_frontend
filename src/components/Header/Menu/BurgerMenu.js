/** React **/
import React, {Component} from 'react';

/** BurgerMenu **/
import {slide as Menu} from 'react-burger-menu'

/** Styling **/
import './Burger.scss'

/** Routing **/
import {withRouter, Link} from "react-router-dom";
import * as ROUTES from '../../../routing/Routes'

/** Redux **/
import {connect} from "react-redux";
import * as ACTIONS from "../../../redux/ReducerActions";


class BurgerMenu extends Component {


    render() {
        let userInfo = null;


        if (!this.props.isUserLoggedIn) {
            userInfo = (
                <div className="no-user">
                    <p>
                        Nice to meet you! Please <Link to={ROUTES.SIGN_IN}> Sign in. </Link>
                    </p>

                    <Link to={ROUTES.SIGN_UP}> Sign Up </Link>
                </div>
            )
        } else {
            userInfo = (
                <div className="user-logged-in">
                    <p>You are logged in as <Link to={ROUTES.USER + "/" + this.props.loggedInUser.id}> {this.props.loggedInUser.name} </Link></p>

                    <button onClick={() => this.props.logoutUser()} className="logout-button"> Sign Out {this.props.loggedInUser.username}</button>
                </div>
            )
        }


        return (
            <Menu
                isOpen={this.props.isOpen}
                width={'25rem'}
                onStateChange={this.isMenuOpen}>
                <div className="user-info-container">
                    {userInfo}
                </div>
                { /*
                    <a id="home" className="menu-item" href="/">Home</a>
                    < a id="about" className="menu-item" href="">About</a>
                    <a id="contact" className="menu-item" href="">Contact</a>
                    <a className="menu-item--small" href="">Settings</a>
                */}
            </Menu>
        );
    }
}

const mapStateToProps = state => {

    return (
        {
            isUserLoggedIn: state.user.isUserLoggedIn,
            loggedInUser: state.user.currentUser
        }
    )
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => {
            dispatch({type: ACTIONS.LOGOUT_USER})
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BurgerMenu));