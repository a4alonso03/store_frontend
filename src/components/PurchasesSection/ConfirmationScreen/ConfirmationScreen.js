import React, {Component} from 'react';
import * as ROUTES from "../../../routing/Routes";
import CartConfirmationItem from "./CartConfirmationItem/CartConfirmationItem";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as ACTIONS from "../../../redux/ReducerActions";
import './ConfirmationScreen.scss'
import Alert from 'react-s-alert';



class ConfirmationScreen extends Component {

    confirmPurchaseHandler = () => {
        let newPurchase = {
            items: this.props.cartItems,
            address: this.props.selectedAddress,
            selectedCard: this.props.selectedCard
        };
        this.props.createPurchase(newPurchase);
        Alert.success("Order created!", {});
        this.props.history.push(ROUTES.ROOT);

    };

    coverCCNumber = number => {
        return "holis";
    };

    render() {
        return (
            <div className="confirmation-screen-container">
                <h1>Step 3: Confirm your order</h1>
                <div className="section-divider"/>
                <h2>Your cart items</h2>
                <div className="cart-review-container">
                    {this.props.cartItems.map(cartItem => (
                        <CartConfirmationItem key={cartItem.product.id}
                                              product={cartItem.product}
                                              amount={cartItem.amount}/>
                    ))}
                    <div className="next-section-button" onClick={(event) => this.props.onSelectHandler(0, event)}>Modify Cart</div>

                </div>
                <div>   </div>
                <div className="section-divider"/>

                <h2>Your selected address </h2>
                <div className="address-review-container">
                    <h3>{this.props.selectedAddress.firstName} {this.props.selectedAddress.lastName}</h3>
                    <p>{this.props.selectedAddress.address.toUpperCase()}</p>
                    <p>{this.props.selectedAddress.secondAddress.toUpperCase()}</p>
                    <p>{this.props.selectedAddress.cityTown.toUpperCase()} {this.props.selectedAddress.postalCode}</p>
                    <p>Tel: {this.props.selectedAddress.phone}</p>

                </div>
                <div className="next-section-button" onClick={(event) => this.props.onSelectHandler(1, event)}>Modify Purchase</div>

                <div className="section-divider"/>
                <h2>Your selected payment method</h2>
                <div className="card-review-container">
                    <p> Card owner: {this.props.selectedCard.cardName} </p>
                    <p> Number: {this.coverCCNumber(this.props.selectedCard.number)}</p>
                    <p> Expires: {this.props.selectedCard.expiryDate} </p>

                </div>
                <div className="section-divider"/>

                <div className="next-section-button" onClick={this.confirmPurchaseHandler}>Confirm Purchase</div>
                <div className="return-section-button next-section-button" onClick={() => this.props.history.push(ROUTES.ROOT)}>StartOver</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            currentUser: state.user.currentUser,
            selectedAddress: state.user.selectedAddress,
            selectedCard: state.user.selectedCard,
            cartItems: state.cart.onCartItems
        }
    )
};

const mapDispatchToProps = dispatch => {
    return {
        createPurchase: purchase => {
            dispatch({type: ACTIONS.CREATE_PURCHASE, purchase})
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen));