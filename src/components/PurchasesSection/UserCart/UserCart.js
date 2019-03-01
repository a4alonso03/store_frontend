import React, {Component} from 'react';
import './UserCart.scss'
import * as ACTIONS from "../../../redux/ReducerActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CartItem from "./CartItem/CartItem";

class UserCart extends Component {

    updateCartTotal = () => {
        let total = 0;
        for (let i = 0; i < this.props.productWrapperList.length; i++) {
            total += this.props.productWrapperList[i].amount * this.props.productWrapperList[i].product.price;
        }
        return total;
    };

    render() {
        return (
            <div className="user-cart-container">

                <h1>Step 1: Your Cart</h1>
                <div className="section-divider"/>
                {this.props.productWrapperList.map(productWrapper => {
                    return <CartItem key={productWrapper.product.id}
                                     id={productWrapper.product.id}
                                     image={productWrapper.product.image}
                                     name={productWrapper.product.name}
                                     price={productWrapper.product.price}
                                     amount={productWrapper.amount}/>
                })}

                <p className="cart-size">You have {this.props.productWrapperList.length} product(s) in your cart</p>
                <p className="cart-total">Cart total: ${this.updateCartTotal().toFixed(2)}</p>
                <div className="next-section-button" onClick={(event) => this.props.onSelectHandler(1, event)}>Checkout</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            productWrapperList: state.cart.onCartItems
        }
    )
};

const mapDispatchToProps = dispatch => {
    return ({
        removeItemFromCart: id => {
            dispatch({type: ACTIONS.REMOVE_ITEM_FROM_CART, id})
        }
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCart));