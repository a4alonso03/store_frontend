import React, {Component} from 'react';
import './UserAccountPage.scss'
import {connect} from "react-redux";
import * as ACTIONS from "../../../redux/ReducerActions";
import {updateUserInfo} from "../../../http/UserRequests";
import Alert from 'react-s-alert';
import {LOGIN_USER} from "../../../redux/ReducerActions";
import {LOGOUT_USER} from "../../../redux/ReducerActions";


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
        };

        updateUserInfo(newUserData).then(response => {
            if(response.ok){
                Alert.success("Ok", {})
                return response.json();
            }else {
                Alert.error("Couldn't update user", {})
            }
        }).then(customResponse => {
            if(customResponse.data != null) {
                this.props.loginUser(customResponse.data);
                Alert.error("User Data updated")
            }
        })

    };

    render() {
        let profileActions = null;

        if (this.state.editMode) {
            profileActions = (
                <div className="input-button-container">
                    <button className="input-cancel" onClick={() => this.setState({editMode: false})}> Cancel</button>
                    <button className="input-save" onClick={() => this.saveUserEdit()}> Save changes</button>
                </div>
            )
        } else {
            profileActions = (
                <div className="input-button-container">
                    <button  className="input-save" onClick={() => this.setState({editMode: true})}> Edit Profile</button>
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

                    <label>Name</label>
                    <input name="name"
                           className="profile-input"
                           type="text"
                           value={this.state.name}
                           disabled={!this.state.editMode}
                           onChange={evt => this.handleInputChange(evt)}/>

                    <label>Last Name</label>
                    <input name="lastName"
                           className="profile-input"
                           type="text"
                           value={this.state.lastName}
                           disabled={!this.state.editMode}
                           onChange={evt => this.handleInputChange(evt)}/>

                    {profileActions}
                </div>

                <div className="next-section-button" onClick={() => this.props.logoutUser()}> LOGOUT </div>
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
        },
        updateUser: (response, token) => {
            dispatch({type: LOGIN_USER, response, token})
        },
        logoutUser: () => {
            dispatch({type: LOGOUT_USER})
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountPage);