import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import NumericInput from 'react-numeric-input';
import * as ACTIONS from "../../../../redux/ReducerActions";
import {connect} from "react-redux";
import './CartItem.scss'

class CartItem extends Component {
    state = {
        itemTotal: 0,
        itemCount: 0
    };

    componentDidMount() {
        console.log("componentDidMount del cartItem => this.props.amount: " + this.props.amount);
        this.setState({itemCount: this.props.amount});
        this.updateItemTotal();
    }

    updateItemTotal = () => {
        this.setState({itemTotal: this.props.amount * this.props.price})
    };

    handleNumberChange = (event) => {
        console.log("event:" + event);
        this.setState({itemCount: event});
        this.props.updateItemAmountOnCart(this.props.id, event);
        this.updateItemTotal();
    };

    handleItemDeletedFromCart = () => {
        this.props.deleteItemFromCart(this.props.id);
    };


    render() {
        return (
            <div className="cart-item-container">
                <img src={this.props.image} alt="product"/>
                <div className="cart-item-container__data">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.price}</p>
                    <NumericInput min={1} max={100} value={this.state.itemCount}
                                  onChange={evt => this.handleNumberChange(evt)}/>
                </div>
                <FontAwesomeIcon onClick={this.handleItemDeletedFromCart} icon={faTimesCircle}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        updateItemAmountOnCart: (id, amount) => {
            dispatch({type: ACTIONS.UPDATE_ITEM_AMOUNT_ON_CART, id, amount})
        },
        deleteItemFromCart: (id) => {
            dispatch({type: ACTIONS.REMOVE_ITEM_FROM_CART, id});
        }

    });
};

export default connect(null, mapDispatchToProps)(CartItem);