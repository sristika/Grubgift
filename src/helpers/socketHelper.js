import {io} from "socket.io-client";
import {BASE_URL} from "../config";
import {isLoggedIn} from "./authHelper";

export let socket;

const initiateSocketConnection = () => {
    const user = isLoggedIn();
    socket = io(BASE_URL, {
        auth: {
            token: user && user.token,
        },
    });
};

const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
    }
};

export {initiateSocketConnection, disconnectSocket};