import * as api from "../helpers/api.js";
import * as request from "../helpers/requester.js";

export const register = (email, username, password) => {
    return request.post(api.register, { email, username, password })
        .then(user => {
            setUser(user);
            return user;
        })
};

export const login = (username, password) => {
    return request.post(api.login, { username, password })
        .then(user => {
            setUser(user);
            return user;
        })
};

export const logout = () => {
    return request.get(api.logout)
        .then(() => localStorage.removeItem('user'));
};

function setUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
};

export function getUser(data) {
    let user = localStorage.getItem('user');
    
    if (user) {
        return JSON.parse(user);
    }
};