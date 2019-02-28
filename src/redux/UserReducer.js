import * as ACTIONS from "./ReducerActions";

const currentUser = {
    id: "3",
    username: "a@gmail.com",
    name: "Alonso",
    lastName: "Garita"
};

const selectedAddress = {
    id: 1,
    firstName: "Alonso",
    lastName: "Garita",
    address: "First line address test",
    secondAddress: "Second line address tset",
    cityTown: "Cartago",
    phone: "1234567",
    postalCode: "1000"
};

const selectedCard = {

}

const purchases = {

}


const isUserLoggedIn = true;

export default function user(state = {currentUser, isUserLoggedIn, selectedAddress, selectedCard, purchases}, action) {
    switch (action.type) {
        case ACTIONS.LOGIN_USER:
            console.log(action.response.data);
            return Object.assign(
                {},
                state, {
                    currentUser: JSON.parse(JSON.stringify(action.response.data)),
                    isUserLoggedIn: true,
                }
            );
        case ACTIONS.LOGOUT_USER:
            localStorage.clear();
            return Object.assign(
                {},
                state, {
                    currentUser: "",
                    isUserLoggedIn: false
                }
            );

        case ACTIONS.SELECT_ADDRESS:
            return Object.assign(
                {},
                state, {
                    selectedAddress: JSON.parse(JSON.stringify(action.address))
                }
            );

        case ACTIONS.SELECT_CARD:
            return Object.assign(
                {},
                state, {
                    selectedCard: JSON.parse(JSON.stringify(action.card))
                }
            );

        case ACTIONS.CREATE_PURCHASE:
            let updatedPurchases = state.purchases;
            purchases.push(action.purchase);
            return Object.assign(
                {},
                state, {
                    purchases: [...updatedPurchases]
                });
        default:
            return state;
    }
}