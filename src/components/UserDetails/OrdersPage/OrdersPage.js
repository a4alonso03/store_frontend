import React, {Component} from 'react';
import './OrdersPage.scss'
import {connect} from "react-redux";

class OrdersPage extends Component {
    state = {
        userOrders: []
    };

    componentDidMount() {
        this.setState({userOrders: this.props.userOrders})
    }

    getOrderTotal = order => {
        debugger
        console.log("something");
        let total = 0;
        for (let i = 0; i < order.items.length; i++) {
            total += (order.items[i].amount * order.items[i].product.price);
        }

        return total;
    };

    render() {
        return (
            <div>
                <h1 className='profile-title'> Your orders </h1>
                {this.state.userOrders.map(order => (
                    <div className="user-orders-container"
                         key={order.address.phone}>
                        <div className="order-items-container">
                            <h2> Items </h2>
                            {order.items.map(item => (
                                <div className="purchase-item">
                                    {/** item details **/}
                                    <img src={item.product.image} alt=""/>
                                    <h3>{item.product.name}</h3>
                                    <p>{item.amount} x {item.product.price}</p>

                                </div>
                            ))}
                        </div>
                        <div className="order-address-container">
                            <h2> Address </h2>
                            <p>Delivered to: {order.address.firstName} {order.address.lastName} </p>
                            <p>Address: {order.address.address}</p>
                        </div>
                        <div className="order-card-container">
                            <h2> Payment </h2>
                            <p>Order billed to: {order.selectedCard.cardName}</p>
                        </div>
                        <div className='order-total-container'>
                            <h2>Total: {() => this.getOrderTotal(order)}</h2>
                        </div>
                        <div className="section-divider"/>

                    </div>
                ))}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            userOrders: state.user.purchases
        }
    )
};

export default connect(mapStateToProps, null)(OrdersPage);