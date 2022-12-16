import {BASE_URL} from "../config";
import {getAPICalls, postAPICalls} from "./utility";

const retrieveChats = async (user) => {
    let apiEndpoint = BASE_URL + "api/messages";
    try {
        return getAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

const getMessages = async (user, conversationId) => {
    let apiEndpoint = BASE_URL + "api/messages/" + conversationId;
    try {
        return getAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

const sendMessage = async (user, message, recipientId) => {
    let apiEndpoint = BASE_URL + "api/messages/" + recipientId;
    try {
        return postAPICalls(apiEndpoint, user.token, message);
    } catch (err) {
        console.log(err);
    }
};

export {retrieveChats, getMessages, sendMessage};
