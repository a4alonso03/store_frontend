import React, {Component} from 'react';
import './PurchaseData.scss'
import {getUserAddressesRequest, getUserCreditCardsRequest} from "../../../http/UserDataRequests";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UserAddressItem from "./UserAddressItem/UserAddressItem";
import UserCreditCardItem from "./UserCreditCardItem/UserCreditCardItem";
import * as ACTIONS from "../../../redux/ReducerActions";


class PurchaseData extends Component {
    state = {
        userAddresses: [],
        addressLoadError: false,
        userCreditCards: [],
        creditCardsLoadError: false
    };

    componentDidMount() {
        this.getUserAddresses();
        this.getUserCreditCards();
    }

    getUserAddresses = () => {
        getUserAddressesRequest(this.props.currentUser.id).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({addressLoadError: true})
            }
        }).then(customResponse => {
            if (customResponse != null) {
                this.wrapAndSaveUserAddresses(customResponse.data);
            } else {
                this.setState({addressLoadError: true})
            }
        })
    };

    wrapAndSaveUserAddresses = addressArray => {
        let wrappedUserAddresses = [];
        for (let i = 0; i < addressArray.length; i++) {
            wrappedUserAddresses.push({
                selected: false,
                userAddress: addressArray[i]
            })
        }
        this.setState({userAddresses: wrappedUserAddresses})
    };

    wrapAndSaveUserCreditCards = cardsArray => {
        let wrappedUserCreditCards = [];
        for (let i = 0; i < cardsArray.length; i++) {
            wrappedUserCreditCards.push({
                selected: false,
                creditCard: cardsArray[i]
            })
        }
        this.setState({userCreditCards: wrappedUserCreditCards})
    };

    getUserCreditCards = () => {
        getUserCreditCardsRequest(this.props.currentUser.id).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({creditCardLoadError: true})
            }
        }).then(customResponse => {
            if (customResponse != null) {
                this.wrapAndSaveUserCreditCards(customResponse.data);
            } else {
                this.setState({creditCardLoadError: true})
            }
        })
    };

    selectedAddressHandler = id => {
        let userAddresses = this.state.userAddresses;
        for (let i = 0; i < userAddresses.length; i++) {
            if(userAddresses[i].userAddress.id === id){
                this.props.selectAddress(userAddresses[i].userAddress);
                userAddresses[i].selected = true;
            }
            else (userAddresses[i].selected = false);
        }
        this.setState({userAddresses: [...userAddresses]});
    };

    selectedCardHandler = id => {
        let userCards = this.state.userCreditCards;
        for (let i = 0; i < userCards.length; i++) {
            if(userCards[i].creditCard.id === id){
                console.log(userCards[i].creditCard);
                this.props.selectCard(userCards[i].creditCard);
                userCards[i].selected = true;
            }
            else (userCards[i].selected = false);
        }
        this.setState({userCards: [...userCards]});
    };


    render() {
        return (
            <div className="purchase-data-container">
                <h1>Step 2: Address and Payment</h1>
                <h2>Select your address</h2>
                <div className="section-divider"/>
                <div className="list-container">
                    {this.state.userAddresses.map(wrappedUserAddress => (
                            <UserAddressItem key={wrappedUserAddress.userAddress.id}
                                             userAddress={wrappedUserAddress.userAddress}
                                             clickHandler={this.selectedAddressHandler}
                                             className={wrappedUserAddress.selected ? "selected-address user-address-item-container" : "user-address-item-container"}/>
                        )
                    )}
                </div>
                <h2>Select your credit card</h2>
                <div className="section-divider"/>

                <div className="list-container">
                    {this.state.userCreditCards.map(wrappedCreditCard => (
                            <UserCreditCardItem key={wrappedCreditCard.creditCard.id}
                                                creditCard={wrappedCreditCard.creditCard}
                                                clickHandler={this.selectedCardHandler}
                                                className={wrappedCreditCard.selected ? "selected-card user-card-item-container" : "user-card-item-container"}/>
                        )
                    )}
                </div>
                <div className="next-section-button" onClick={(event) => this.props.onSelectHandler(2, event)}>Checkout</div>
                <div className="next-section-button" onClick={(event) => this.props.onSelectHandler(0, event)}>Go Back</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            currentUser: state.user.currentUser
        }
    )
};

const mapDispatchToProps = dispatch => {
    return {
        selectAddress: address => {
            dispatch({type: ACTIONS.SELECT_ADDRESS, address})
        },
        selectCard: card => {
            dispatch({type: ACTIONS.SELECT_CARD, card})
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PurchaseData));