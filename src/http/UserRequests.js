import {baseURL, logIn, signUp, user} from "./PathConstants";

export const loginRequest = (user, pass) => {
    return fetch(baseURL + logIn, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": user,
            "password": pass
        })
    })
};

export const registerRequest = (name, lastName, email, password) => {
    return fetch(baseURL + user + signUp,  {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": email,
            "password": password,
            "name": name,
            "lastName": lastName
        })
    })
};

export const getUserByUsername = username => {
    console.log(localStorage.getItem('token'));

    return fetch(baseURL + user + "/" + username, {
        method: 'get',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
};

export const updateUserInfo = userInfo => {
    return fetch(baseURL + user + "/", {
        method: 'put',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify({
            id: userInfo.id,
            username: userInfo.username,
            password: "",
            name: userInfo.name,
            lastName: userInfo.lastName
        })
    })
};



