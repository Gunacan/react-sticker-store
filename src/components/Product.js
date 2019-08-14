import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, cols, showRating, showEdit }) => (
    <div className={`card ${cols}`} >
        <img src={product.url} className="card-img-top" alt={product.title} />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            {
                showRating ? <p className="card-text">Rating: {product.rating} out of 10</p> : ''
            }
            {
                showEdit ?
                <Link to={`/products/${product.id}/edit`} className="btn btn-danger">Edit product</Link> :
                <Link to={`/products/${product.id}`} className="btn btn-primary">View product</Link>
            }
        </div>
    </div>
)

export default Product;