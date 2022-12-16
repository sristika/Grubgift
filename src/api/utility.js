const getAPICalls = async (apiEndpoint, token) => {
    const response = await fetch(apiEndpoint, {
        headers: {
            "x-access-token": token,
        },
    });
    return await response.json();
};

const getWithoutTokenAPICalls = async (apiEndpoint) => {
    const response = await fetch(apiEndpoint);
    return response.json();
};

const postAPICalls = async (apiEndpoint, token, message) => {
    const response = await fetch(apiEndpoint, {
        method: "POST", headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-access-token": token,
        }, body: JSON.stringify(message),
    });
    return await response.json();
};

const postWithoutBodyAPICalls = async (apiEndpoint, token) => {
    const response = await fetch(apiEndpoint, {
        method: "POST", headers: {
            "x-access-token": token,
        },
    });
    return response.json();
};

const postWithoutTokenAPICalls = async (apiEndpoint, message) => {
    const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    });
    return await response.json();
};

const patchAPICalls = async (apiEndpoint, token, message) => {
    const response = await fetch(apiEndpoint, {
        method: "PATCH", headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-access-token": token,
        }, body: JSON.stringify(message),
    });
    return response.json();
};

const deleteAPICalls = async (apiEndpoint, token) => {
    const response = await fetch(apiEndpoint, {
        method: "DELETE", headers: {
            "x-access-token": token,
        },
    });
    return response.json();
};

export {
    getAPICalls,
    getWithoutTokenAPICalls,
    postAPICalls,
    postWithoutBodyAPICalls,
    postWithoutTokenAPICalls,
    patchAPICalls,
    deleteAPICalls
};