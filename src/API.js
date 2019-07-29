const API_URL = 'http://localhost:3000/api/v1/stickers';

export default function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json())
}

