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

export const createAddressForUserById = (id, address) => {
    return fetch(baseURL + userAddresses + "/" + id, {
        method: 'post',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(address)
    });
};

export const deleteAddressById = id => {
    debugger
    return fetch(baseURL + userAddresses + "/" + id, {
        method: 'delete',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token'),
        }
    })
};
