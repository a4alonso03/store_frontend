import * as ACTIONS from "./ReducerActions";
import Alert from 'react-s-alert';



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
    secondAddress: "Second line address test",
    cityTown: "Cartago",
    phone: "1234567",
    postalCode: "1000"
};

const selectedCard = {};

const purchases = [
    {
        address: {
            address: "First line address test",
            cityTown: "Cartago",
            firstName: "Alonso",
            id: 1,
            lastName: "Garita",
            phone: "1234567",
            postalCode: "1000",
            secondAddress: "Second line address tset"
        },
        selectedCard: {
            cardName: "Alonso G.",
            cvc: "222",
            expiryDate: "some-date",
            id: 2,
            number: "1234",
            user: null
        },
        items: [
            {
                amount: 2,
                product: {
                    id: 8,
                    image: "https://image01.oneplus.net/ebp/201810/27/492/28fc2b95170c95497a4b22991d1a71c9_768_768.png",
                    name: "OnePlus 6T 3D Tempered Glass Screen Protector",
                    price: 20.95
                }
            }
        ]
    }
];



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
            Alert.success("Logged out", {});
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
            console.log(action.purchase)
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