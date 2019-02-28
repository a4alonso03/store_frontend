import {baseURL, userAddresses, userCreditCards} from "./PathConstants";

export const getUserAddressesRequest = id => {
    return fetch(baseURL + userAddresses + "/" + id, {
        method: 'get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
};

export const getUserCreditCardsRequest = id => {
    return fetch(baseURL + userCreditCards + "/" + id, {
        method: 'get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
};