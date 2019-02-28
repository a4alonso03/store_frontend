import React, {Component} from 'react';
import './CartConfirmationItem.scss'

class CartConfirmationItem extends Component {
    render() {
        return (
            <div className="cart-confirmation-item">
                <img src={this.props.product.image} alt="product"/>
                <div>
                    <h2>{this.props.product.name}</h2>
                    <p>{this.props.product.price}</p>

                </div>
            </div>
        );
    }
}

export default CartConfirmationItem;