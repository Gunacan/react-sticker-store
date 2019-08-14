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

    render() {
        return (
            <div>
                <h1>Create Product</h1>
                <ProductForm product={this.state.product} />
            </div>
        );
    }
}

export default CreateProduct;