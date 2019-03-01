import React, {Component} from 'react';
import './AddressPage.scss'
import {createAddressForUserById, deleteAddressById, getUserAddressesRequest} from "../../../http/UserDataRequests";
import {connect} from "react-redux";
import Alert from 'react-s-alert';
import {Container, Row, Col} from "react-bootstrap";


class AddressPage extends Component {
    state = {
        userAddresses: [],
        firstName: "",
        lastName: "",
        address: "",
        secondAddress: "",
        cityTown: "",
        phone: "",
        postalCode: ""
    };

    refreshAddresses = (notify) => {
        getUserAddressesRequest(this.props.currentUserId).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                Alert.error("Este", {})
            }
        }).then(customResponse => {
            if (customResponse.data != null) {
                this.setState({userAddresses: customResponse.data})
            } else {
                Alert.error("No este", {})
            }
        })
    };

    componentDidMount() {
        getUserAddressesRequest(this.props.currentUserId).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                Alert.error("aquí", {})
            }
        }).then(customResponse => {
            if (customResponse.data != null) {

                    Alert.success("Addresses Updated", {});

                this.setState({userAddresses: customResponse.data})
            } else {
                Alert.error("Error displaying user addresses", {})
            }
        })
    }

    attemptCreateAddress = () => {
        let newAddress = {
            id: null,
            user: null,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            secondAddress: this.state.secondAddress,
            cityTown: this.state.cityTown,
            phone: this.state.phone,
            postalCode: this.state.postalCode
        };

        createAddressForUserById(this.props.currentUserId, newAddress).then(response => {
            if(response.ok) {
                Alert.success("Address created", {});
                this.refreshAddresses();
            }else {
                Alert.error("Error creating address", {})
            }
        });

        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({address: ""});
        this.setState({secondAddress: ""});
        this.setState({cityTown: ""});
        this.setState({phone: ""});
        this.setState({postalCode:""});
    };

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    };


    render() {
        return (
            <div>
                <h1 className="profile-title"> User Addresses </h1>
                <Container className="user-addresses-container">
                    <Row>
                        {this.state.userAddresses.map(address => (
                            <Col xs={11} md={5} className="user-address-item">
                                <h2>{address.firstName} {address.lastName}</h2>
                                <div className="section-divider"/>
                                <p>{address.address}</p>
                                <p>{address.secondAddress}</p>
                                <p>{address.cityTown} {address.postalCode}</p>
                                <p>{address.phone}</p>

                            </Col>
                        ))}
                    </Row>
                    <div className="section-divider"/>
                    <h2>Create an address</h2>
                    <Row className='holi-container'>
                        <Col className="create-address-form-container">
                            <label> First Name </label>
                            <input name="firstName"
                                   value={this.state.firstName}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                            <label> Last Name </label>
                            <input name="lastName"
                                   value={this.state.lastName}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                            <label> Address </label>
                            <input name="address"
                                   value={this.state.address}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                            <input name="secondAddress"
                                   value={this.state.secondAddress1}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                            <label> City/Town </label>
                            <input name="cityTown"
                                   value={this.state.cityTown}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                            <label> Phone Number </label>
                            <input name="phone"
                                   value={this.state.phone}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                            <label> Zip/Postal Code </label>
                            <input name="postalCode"
                                   value={this.state.postalCode}
                                   onChange={evt => this.handleInputChange(evt)}
                                   className="address-creation-input"/>
                           <div onClick={() => this.attemptCreateAddress()} className='next-section-button'> Create address </div>
                        </Col>
                    </Row>


                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            currentUserId: state.user.currentUser.id
        }
    )
};


export default connect(mapStateToProps, null)(AddressPage);