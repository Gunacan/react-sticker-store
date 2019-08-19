import React, { Component } from 'react';
import ProductForm from './ProductForm';

class CreateProduct extends Component {
    state = {
        product: {
            title: '',
            description: '',
            rating: 0,
            url: ''
        },
        creating: false
    };

    createProduct = (product) => {
        console.log(product)
    }

    render() {
        return (
            <div>
                <h1>Create Product</h1>
                <ProductForm product={this.state.product} onFormSumbission={this.createProduct} />
            </div>
        );
    }
}

export default CreateProduct;