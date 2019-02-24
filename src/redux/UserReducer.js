import {LOGIN_USER} from "./ReducerActions";

const currentUser = {
    username: ""
};

const isUserLoggedIn = false;

export default function user(state= {currentUser, isUserLoggedIn}, action) {
    switch(action.type){
        case LOGIN_USER:
            let user = currentUser;
            user.username = action.username;
            return Object.assign(
                {},
                state, {
                    currentUser: JSON.parse(JSON.stringify(user))
                }
            );
        default: return state;
    }
}