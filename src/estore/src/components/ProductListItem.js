import React, { Component } from 'react';
import "./ProductListItem.css";
import PropTypes from "prop-types";

class ProductListItem extends Component {
    render() {
        const {id, title, price, stock} = this.props.product;
        return (
            <div 
                className="item"
                onMouseEnter = {() => console.log("enter")}
                onMouseLeave = {() => console.log("leave")}
            >
                <h1>{title} ({stock})</h1>
                <h3>{price}</h3>
                <button onClick={e => {
                    console.log(e.target.textContent);
                    this.props.addToCartClicked(id);
                }}>
                ADD TO CART
                </button>
            </div>
        );
    }
}

ProductListItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired
    }),
    addToCartClicked: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {
    product: { title: "no title" }
};

export default ProductListItem;