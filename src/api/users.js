import {BASE_URL} from "../config";
import {getWithoutTokenAPICalls, patchAPICalls, postWithoutTokenAPICalls} from "./utility";

const signup = async (user) => {
    let apiEndpoint = BASE_URL + "api/users/register";
    try {
        return postWithoutTokenAPICalls(apiEndpoint, user)
    } catch (error) {
        console.log(error);
    }
};

const login = async (user) => {
    let apiEndpoint = BASE_URL + "api/users/login";
    try {
        return postWithoutTokenAPICalls(apiEndpoint, user)
    } catch (error) {
        console.log(error);
    }
};

const getUser = async (params) => {
    let apiEndpoint = BASE_URL + "api/users/" + params.id;
    try {
        return getWithoutTokenAPICalls(apiEndpoint);
    } catch (error) {
        console.log(error);
    }
};

const getRandomUsers = async (query) => {
    let apiEndpoint = BASE_URL + "api/users/random?" + new URLSearchParams(query);
    try {
        return getWithoutTokenAPICalls(apiEndpoint);
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (user, data) => {
    let apiEndpoint = BASE_URL + "api/users/" + user._id;
    try {
        return patchAPICalls(apiEndpoint, user.token, data);
    } catch (error) {
        console.log(error);
    }
};

export {signup, login, getUser, getRandomUsers, updateUser};
