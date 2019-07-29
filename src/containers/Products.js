import React, { Component } from 'react';
import Product from '../components/Product';

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
                setTimeout(() => {
                    this.setState({
                        products : products,
                        isLoading : false
                    })
                }, 1000);
            });
    }

    render () {
        return (
            <div>
                <h1>Products Page</h1>
                {this.state.isLoading ? 
                    <h2>Loading Stickers...</h2> : 
                    <div className='row'>
                        {
                            this.state.products.map(product => (
                                <Product key={product.id} product={product} />
                            ))
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Products;