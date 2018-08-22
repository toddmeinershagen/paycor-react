import React, { Component } from 'react';
import "./ProductListItem.css";

class ProductListItem extends Component {
    render() {
        const {id, title, price, stock} = this.props.product;
        return (
            <div className="item">
                <h1>{title} ({stock})</h1>
                <h3>${price}</h3>
                <button onClick={() => this.props.addToCartClicked(id)}>
                ADD TO CART
                </button>
            </div>
        );
    }
}

export default ProductListItem;