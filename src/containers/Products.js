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
                                <div className="card col-4" >
                                    <img src={product.url} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <a href="#" className="btn btn-primary">View product</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Products;