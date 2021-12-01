const baseUrl = "http://localhost:3030";

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/photos`);
    let photos = await response.json();
    let result = Object.values(photos);
    return result;
};