import React, { Component } from 'react';

class Products extends Component {
    state = {
        isLoading : true,
        products: []
    }

    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/v1/stickers';
        fetch(API_URL)
            .then(res => res.json())
            .then(products => {
                console.log(products)
            });
    }

    render () {
        return (
            <h1>Products Component</h1>
        )
    }
}

export default Products;