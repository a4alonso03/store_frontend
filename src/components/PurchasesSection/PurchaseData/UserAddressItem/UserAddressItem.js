import React, {Component} from 'react';
import './UserAddressItem.scss'

class UserAddressItem extends Component {
    render() {
        return (
            <div onClick={() => this.props.clickHandler(this.props.userAddress.id)}
                className={this.props.className}>

                <h3>{this.props.userAddress.firstName} {this.props.userAddress.lastName}</h3>
                <div className="section-divider"/>
                <p>{this.props.userAddress.address.toUpperCase()}</p>
                <p>{this.props.userAddress.secondAddress.toUpperCase()}</p>
                <p>{this.props.userAddress.cityTown.toUpperCase()} {this.props.userAddress.postalCode}</p>
                <p>Tel: {this.props.userAddress.phone}</p>
            </div>
        );
    }
}

export default UserAddressItem;