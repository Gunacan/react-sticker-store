import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ProductForm from './ProductForm';
import { createProduct } from '../API';

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
        this.setState({
            creating: true
        })
        createProduct(product)
            .then(result => {
                this.props.history.push(`/products/${result.id}`)
            })
    };

    render() {
        return (
            <div>
                <h1>Create Product</h1>
                <ProductForm product={this.state.product} onFormSumbission={this.createProduct} />
            </div>
        );
    }
}

export default withRouter(CreateProduct);