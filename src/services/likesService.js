const baseUrl = "http://localhost:3030/data/likes";

export const likePhoto = async (photoId, token) => {
    let response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ photoId })
    });

    let result = await response.json();
    return result;
};

export const getLikesPerPhoto = async (photoId) => {
    let response = await fetch(`${baseUrl}?where=photoId%3D%22${photoId}%22&distinct=_ownerId&count`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let result = await response.json();
    return result;
};

export const getLikesPerUser = async (photoId, userId) => {
    let response = await fetch(`${baseUrl}?where=photoId%3D%22${photoId}%22%20and%20_ownerId%3D%22${userId}%22&count`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let result = await response.json();
    return result;
};