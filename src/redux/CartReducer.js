import * as ACTIONS from "./ReducerActions";


const onCartItems = [
    {
        amount: 2,
        product:
            {
                id: 8,
                image: "https://image01.oneplus.net/ebp/201810/27/492/28fc2b95170c95497a4b22991d1a71c9_768_768.png",
                name: "OnePlus 6T 3D Tempered Glass Screen Protector",
                price: 20.95,
            }
    }
];

export default function cart(state = {onCartItems}, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM_TO_CART:
            let wrappedProduct = action.wrappedProduct;
            let updatedOnCartItems = state.onCartItems;
            updatedOnCartItems.push(wrappedProduct);
            return Object.assign(
                {},
                state, {
                    onCartItems: [...updatedOnCartItems]
                }
            );

        case ACTIONS.REMOVE_ITEM_FROM_CART:
            debugger
            console.log("removing item: " + action.id + " from cart");
            //state.onCartItems.splice(state.onCartItems.find(productWrapper => productWrapper.product.id === action.id), 1);
            for (let i = 0; i <state.onCartItems.length; i++) {
                if(state.onCartItems[i].product.id === action.id) {
                    state.onCartItems.splice(i, 1);
                }
            }
            console.log(state.onCartItems);
            return Object.assign(
                {},
                state, {
                    onCartItems: [...state.onCartItems]
                }
            );

        case ACTIONS.UPDATE_ITEM_AMOUNT_ON_CART:
            console.log("item id to update: " + action.id + ", new amount: " + action.amount);
            let newOnCartItems = state.onCartItems;
            newOnCartItems.map(itemWrapper => {
                if(itemWrapper.product.id === action.id){
                    itemWrapper.amount = action.amount;
                }
            });
            return Object.assign(
                {},
                state, {
                    onCartItems: [...newOnCartItems]
                }
            );

        default:
            return state;
    }
}