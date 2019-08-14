import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, cols }) => (
    <div className={`card ${cols}`} >
        <img src={product.url} className="card-img-top" alt={product.title} />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <Link to={`/products/${product.id}`} className="btn btn-primary">View product</Link>
        </div>
    </div>
)

export default Product;