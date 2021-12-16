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
}