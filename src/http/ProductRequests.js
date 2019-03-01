import {baseURL, products} from "./PathConstants";


export const getAllProductsRequest = () => {

    return fetch (baseURL + products + "/", {
        method: 'get',
    });
};

export const getProductById = id => {
    return fetch (baseURL + products + "/" + id,  {
        method: 'get'
    });
};

export const getNthProductsPage = page => {
    return fetch (baseURL + products + "/?page=" + page, {
        method: 'get'
    })
}