const baseUrl = "http://localhost:3030/data";

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/photos`);
    let photos = await response.json();
    let result = Object.values(photos);
    return result;
};

export const getLatest = async () => {
    let response = await fetch(`${baseUrl}/photos?sortBy=_createdOn%20desc`);
    let latestPhotos = await response.json();
    let result = Object.values(latestPhotos);
    return result;
};