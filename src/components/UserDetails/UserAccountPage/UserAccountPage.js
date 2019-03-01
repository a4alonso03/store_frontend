import React, {Component} from 'react';
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

    saveUserEdit = () => {
        let newUserData = {
            id: this.state.id,
            username: this.state.username,
            name: this.state.name,
            lastName: this.state.lastName
        }

    };

    render() {
        let profileActions = null;

        if (this.state.editMode) {
            profileActions = (
                <div>
                    <button onClick={() => this.setState({editMode: false})}> Cancel</button>
                    <button onClick={() => this.saveUserEdit()}> Save changes</button>
                </div>
            )
        } else {
            profileActions = (
                <div>
                    <button onClick={this.setState({editMode: true})}> Edit Profile</button>
                </div>
            )
        }

        return (
            <div>
                <h1 className="profile-title"> User Account </h1>
                <div className="user-data-container">
                    <label>Username</label>
                    <input name="username"
                           className="profile-input"
                           type="email"
                           value={this.state.username}
                           disabled={true}
                           onChange={evt => this.handleInputChange(evt)}/>
                    />

                    <label>Name</label>
                    <input name="name"
                           className="profile-input"
                           type="text"
                           value={this.state.name}
                           disabled={this.state.editMode}
                           onChange={evt => this.handleInputChange(evt)}/>

                    <label>Last Name</label>
                    <input name="lastName"
                           className="profile-input"
                           type="text"
                           value={this.state.lastName}
                           disabled={this.state.editMode}
                           onChange={evt => this.handleInputChange(evt)}/>

                    {profileActions}
                </div>
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
    return ({
        removeItemFromCart: id => {
            dispatch({type: ACTIONS.REMOVE_ITEM_FROM_CART, id})
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps())(UserAccountPage);