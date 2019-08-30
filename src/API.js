const API_URL = 'https://crud-api-stickersi.herokuapp.com/api/v1/stickers';

export default function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json())
}

export function getProduct(id) {
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
}

export function createProduct(product) {
    return fetch(API_URL, {
        method: 'POST',                           //makes a post request
        body: JSON.stringify(product),            //stringifies the body so it can go over the network
        headers: {                                
            'content-type': 'application/json'    //tells the server that we're sending json
        }
    }).then(response => response.json());
}