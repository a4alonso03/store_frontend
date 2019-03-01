import React, {Component} from 'react';
import './UserCreditCardItem.scss'

class UserCreditCardItem extends Component {
    coverCCNumber = number => {
        let last4 = number.substr(number.length - 4); // => "Tabs1"
        return "**** **** **** " + last4;
    };

    render() {
        return (
            <div onClick={() => this.props.clickHandler(this.props.creditCard.id)}
                className={this.props.className}>
                <p> Card owner: {this.props.creditCard.cardName} </p>
                <p> Number: {this.coverCCNumber(this.props.creditCard.number)}</p>
                <p> Expires: {this.props.creditCard.expiryDate} </p>
                <p> CVC not shown for security purposes</p>
            </div>
        );
    }
}

export default UserCreditCardItem;