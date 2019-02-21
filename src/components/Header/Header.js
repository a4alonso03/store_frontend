/** React **/
import React, {Component} from 'react';

/** Styling **/
import './Header.scss'
import BurgerMenu from "./Menu/BurgerMenu";


/** Components **/

class Header extends Component {
    state = {
        menuOpen: false
    };

    toggleBurgerMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    isMenuOpen = (state) => {
        return state.isOpen;
    };

    render() {
        return (
            <div className="header">
                <BurgerMenu
                    isOpen={this.state.menuOpen}
                    toggle={this.toggleBurgerMenu}
                />
                
            </div>
        );
    }
}

export default Header;