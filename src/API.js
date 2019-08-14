const API_URL = 'https://crud-api-stickersi.herokuapp.com/api/v1/stickers';

export default function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json())
}

export function getProduct(id) {
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
}