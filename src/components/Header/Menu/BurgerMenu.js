/** React **/
import React, {Component} from 'react';

/** BurgerMenu **/
import { slide as Menu } from 'react-burger-menu'


/** Styling **/
import './Burger.scss'

class BurgerMenu extends Component {

    render() {
        return (
            <Menu
                isOpen={this.props.menuOpen}
                width={'20rem'}
                onStateChange={this.isMenuOpen}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default BurgerMenu;