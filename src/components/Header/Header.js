/** React **/
import React, {Component} from 'react';

/** Styling **/
import './Header.scss'
import headerLogo from '../../img/one-plus.png';
import audio from '../../img/audio.png'
import cases from '../../img/cases.png'
import gear from '../../img/gear.png'
import powerCables from '../../img/powerCables.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons'


/** Components **/
import BurgerMenu from "./Menu/BurgerMenu";
import HeaderButton from './HeaderButton/HeaderButton'

/** Routing **/
import {withRouter} from "react-router-dom";
import * as ROUTES from '../../routing/Routes'
import {connect} from "react-redux";

class Header extends Component {
    state = {
        menuOpen: false
    };

    isMenuOpen = (state) => {
        return state.isOpen;
    };

    userButtonRedirectHandler = () => {
        if (this.props.isUserLoggedIn) {
            this.props.history.push(ROUTES.USER + "/" + this.props.loggedInUser.id);
        } else {
            this.props.history.push(ROUTES.SIGN_IN);
        }
    };

    purchaseButtonRedirectHandler = () => {
        if (this.props.isUserLoggedIn) {
            this.props.history.push(ROUTES.PURCHASE_SECTION);
        } else {
            this.props.history.push(ROUTES.SIGN_IN);
        }
    };

    render() {
        let filters = null;
        let burger = null;

        if (this.props.showFilters) {
            filters = (
                <div className="header__button-container">
                    <HeaderButton className="header-button" image={audio} text="Audio"/>
                    <HeaderButton className="header-button" image={cases} text="Cases"/>
                    <HeaderButton className="header-button" image={gear} text="Gear"/>
                    <HeaderButton className="header-button" image={powerCables} text="Power Cables"/>
                </div>
            );
            burger = (
                <BurgerMenu
                    isOpen={this.state.menuOpen}
                />
            )
        }

        return (
            <div className="header">
                {burger}
                <div className="expanded-header-container">
                    <div className="header-logo" onClick={() => this.props.history.push(ROUTES.ROOT)}>
                        <img src={headerLogo} alt="logo"/>
                    </div>
                    {filters}
                    <div className="header__personal-container">
                        <FontAwesomeIcon icon={faUser}
                                         className="personal-container__icon"
                                         onClick={() => this.userButtonRedirectHandler()}/>
                        <FontAwesomeIcon icon={faShoppingCart}
                                         className="personal-container__icon"
                                         onClick={() => this.purchaseButtonRedirectHandler()}/>
                    </div>
                </div>
            </div>
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

export default withRouter(connect(mapStateToProps, null)(Header));