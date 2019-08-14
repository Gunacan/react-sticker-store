import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        product: {}
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title"  placeholder="Enter a Title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder='Enter a Description' rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default ProductForm;