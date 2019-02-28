import React, {Component} from 'react';
import {Form} from 'react-bootstrap'
import './UserAccountPage.scss'
import {connect} from "react-redux";
import * as ACTIONS from "../../../redux/ReducerActions";

class UserAccountPage extends Component {
    state = {
        id: '',
        username: '',
        name: "",
        lastName: "",
        editMode: false
    };

    componentDidMount() {
        this.setState({
            id: this.props.currentUser.id,
            username: this.props.currentUser.username,
            name: this.props.currentUser.name,
            lastName: this.props.currentUser.lastName
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    };

    render() {
        return (
            <div>
                <h1 className="profile-title"> User Account </h1>
                <div className="user-data-container">
                    <p>Username</p>
                    <input name="username"
                           className="profile-input"
                           type="email"
                           value={this.state.username}
                           disabled={this.state.editMode}
                           onChange={evt => this.handleInputChange(evt)}/>
                    />
                </div>

                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      onChange={evt => this.handleInputChange(evt)}
                                      value={this.state.currentUser.username}
                                      disabled={this.state.editMode}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>;
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            currentUser: state.currency.currentUser
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

export default connect(mapStateToProps, mapDispatchToProps())(UserAccountPage);