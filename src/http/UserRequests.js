import {baseURL, logIn} from "./PathConstants";

export const loginRequest = (user, pass) => {
    return fetch(baseURL + logIn, {
        method: 'post',
        body: JSON.stringify({
            "username": user,
            "password": pass
        })
    })
};

/*
headers: {
    "Authorization": "Bearer " + localStorage.getItem('token')
}*/
