const baseUrl = "http://localhost:3030/data/photos";

export const getAll = async () => {
    let response = await fetch(baseUrl);
    let photos = await response.json();
    let result = Object.values(photos);
    return result;
};

export const getLatest = async () => {
    let response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    let latestPhotos = await response.json();
    let result = Object.values(latestPhotos);
    return result;
};

export const getOne = async (photoId) => {
    let response = await fetch(`${baseUrl}/${photoId}`);
    let details = await response.json();
    return details;
};

export const getMy = async (ownerId) => {
    let response = await fetch(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
    let myPosts = await response.json();
    let result = Object.values(myPosts);
    return result;
};

export const create = async (photoData, token, username) => {
    let response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...photoData, owner: username})
    });

    let result = await response.json();
    return result;
}