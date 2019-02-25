import * as ACTIONS from "./ReducerActions";

const currentUser = {
    id: "",
    username: "",
    name: "",
    lastName: ""
};

const isUserLoggedIn = false;

export default function user(state= {currentUser, isUserLoggedIn}, action) {
    switch(action.type){
        case ACTIONS.LOGIN_USER:
            localStorage.setItem("token", action.token);
            console.log(action.response);
            return Object.assign(
                {},
                state, {
                    currentUser: JSON.parse(JSON.stringify(action.response.data)),
                    isUserLoggedIn: true,
                }
            );



        default: return state;
    }
}