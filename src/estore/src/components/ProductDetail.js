import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
    render() {
        return (
            <div>
                <h1>Detail for product - {this.props.match.params.productId}</h1>
                <Link to={`/products`}>Return to Products</Link>
            </div>
        );
    }
}

export default ProductDetail;