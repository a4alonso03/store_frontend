/** React **/
import React, {Component} from 'react';

/** BurgerMenu **/
import {slide as Menu} from 'react-burger-menu'

/** Styling **/
import './Burger.scss'

/** Routing **/
import {withRouter, Link} from "react-router-dom";
import * as ROUTES from '../../../routing/Routes'


class BurgerMenu extends Component {

    render() {
        var userInfo = null;

        //Replace with state isUserSignedIn
        if (true) {
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
                <div>
                    <p>holi</p>
                </div>
            )
        }

        return (
            <Menu
                isOpen={this.props.menuOpen}
                width={'25rem'}
                onStateChange={this.isMenuOpen}>
                <div className="user-info-container">
                    {userInfo}
                </div>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default BurgerMenu;