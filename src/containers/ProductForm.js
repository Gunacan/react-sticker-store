import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        product: {}
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            product: {
                ...prevState.product,
                [name]: value
                
            }
        }))
    }

    isValid = () => {
        const { product } = this.state;
        const validTitle = product.title.trim() !== '';
        const validDescription = product.description.trim() !== '';
        const validRating = !isNaN(product.rating) && Number(product.rating) >= 1;
        const validUrl = product.url !== '';

        return validTitle && validDescription && validRating && validUrl;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.isValid()) {
            this.props.onFormSumbission(this.state.product)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} name='title' type="text" className="form-control" id="title"  placeholder="Enter a Title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={this.handleChange} name='description' className="form-control" id="description" placeholder='Enter a Description' rows="3" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input onChange={this.handleChange} name='rating' type="number" step='0.5' min='1' max='10' className="form-control" id="rating"  placeholder="Enter a Number 1 to 10" required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input onChange={this.handleChange} name='url' type="url" className="form-control" id="image"  placeholder="http://example.com/image.jpg" required />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default ProductForm;