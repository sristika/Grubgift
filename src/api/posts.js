import {BASE_URL} from "../config";
import {
    deleteAPICalls,
    getAPICalls,
    getWithoutTokenAPICalls,
    patchAPICalls,
    postAPICalls,
    postWithoutBodyAPICalls
} from "./utility";

const getUserLikedPosts = async (likerId, token, query) => {
    let apiEndpoint = BASE_URL + "api/posts/liked/" + likerId + "?" + new URLSearchParams(query);
    try {
        return getAPICalls(apiEndpoint, token);
    } catch (error) {
        console.log(error);
    }
};

const getPosts = async (token, query) => {
    let apiEndpoint = BASE_URL + "api/posts?" + new URLSearchParams(query);
    try {
        return getAPICalls(apiEndpoint, token);
    } catch (error) {
        console.log(error);
    }
};

const getPost = async (postId, token) => {
    let apiEndpoint = BASE_URL + "api/posts/" + postId;
    try {
        return getAPICalls(apiEndpoint, token);
    } catch (error) {
        console.log(error);
    }
};

const getUserComments = async (params) => {
    const {id, query} = params;
    let apiEndpoint = BASE_URL + "api/comments/user/" + id + "?" + new URLSearchParams(query);
    try {
        return getWithoutTokenAPICalls(apiEndpoint);
    } catch (error) {
        console.log(error);
    }
};

const getComments = async (params) => {
    const {id} = params;
    let apiEndpoint = BASE_URL + "api/comments/post/" + id;
    try {
        return getWithoutTokenAPICalls(apiEndpoint);
    } catch (error) {
        console.log(error);
    }
};

const createPost = async (post, user) => {
    let apiEndpoint = BASE_URL + "api/posts";
    try {
        return postAPICalls(apiEndpoint, user.token, post);
    } catch (error) {
        console.log(error);
    }
};

const createComment = async (comment, params, user) => {
    const {id} = params;
    let apiEndpoint = BASE_URL + "api/comments/" + id;
    try {
        return postAPICalls(apiEndpoint, user.token, comment);
    } catch (error) {
        console.log(error);
    }
};

const likePost = async (postId, user) => {
    let apiEndpoint = BASE_URL + "api/posts/like/" + postId;
    try {
        return postWithoutBodyAPICalls(apiEndpoint, user.token)
    } catch (error) {
        console.log(error);
    }
};

const updatePost = async (postId, user, data) => {
    let apiEndpoint = BASE_URL + "api/posts/" + postId;
    try {
        return patchAPICalls(apiEndpoint, user.token, data);
    } catch (error) {
        console.log(error);
    }
};

const updateComment = async (commentId, user, data) => {
    let apiEndpoint = BASE_URL + "api/comments/" + commentId;
    try {
        return patchAPICalls(apiEndpoint, user.token, data);
    } catch (error) {
        console.log(error);
    }
};

const deletePost = async (postId, user) => {
    let apiEndpoint = BASE_URL + "api/posts/" + postId;
    try {
        return deleteAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

const deleteComment = async (commentId, user) => {
    let apiEndpoint = BASE_URL + "api/comments/" + commentId;
    try {
        return deleteAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

const unlikePost = async (postId, user) => {
    let apiEndpoint = BASE_URL + "api/posts/like/" + postId;
    try {
        return deleteAPICalls(apiEndpoint, user.token);
    } catch (error) {
        console.log(error);
    }
};

export {
    getPost,
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getUserComments,
    getUserLikedPosts,
    getComments,
    createComment,
    deleteComment,
    updateComment,
    likePost,
    unlikePost,
};
