const BASE_URL = 'http://localhost:3001';

export const fetcher = (url) => {
    return fetch(`${BASE_URL}${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
};
