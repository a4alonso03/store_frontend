import * as ACTIONS from "./ReducerActions";

const productFilters = {
    Cases: false,
    Audio: false,
    Gear: false,
    Power: false
};


export default function product(state={productFilters}, action) {
    switch (action.type) {
        case ACTIONS.SELECT_ADDRESS:
            //let productKeys = productFilters.keys();
            //for (let i = 0; i < productFilters; i++) {
            //    if(productKeys[i] === action.filterName){
           //         productFilters[productKeys[i]] = true;
            //    }
            //    productFilters[productKeys[i]] = false;
           // }
            //Object.assign(
            //    {},
             //   state, {
             //       productFilters:[...productFilters]
              //  }
            //);

        default:
            return state;


    }
}