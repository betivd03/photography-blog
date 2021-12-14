const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    return result;
};