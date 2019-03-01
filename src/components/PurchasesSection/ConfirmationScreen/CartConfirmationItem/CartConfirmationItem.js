import React, {Component} from 'react';
import './CartConfirmationItem.scss'

class CartConfirmationItem extends Component {
    render() {
        return (
            <div className="cart-confirmation-item">
                <img className="cart-conf-img" src={this.props.product.image} alt="product"/>
                <div className="cart-confirmation-item__data">
                    <p className="cart-conf-title">{this.props.product.name}</p>
                    <p className="cart-conf-price">{this.props.product.price} x {this.props.amount}</p>
                    <p className="cart-conf-total">Item total: ${(this.props.product.price * this.props.amount).toFixed(2)} </p>
                </div>
            </div>
        );
    }
}

export default CartConfirmationItem;