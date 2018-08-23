//import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import "./ProductListItem.css";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

//class ProductListItem extends Component {
class ProductListItem extends PureComponent {
    constructor(props) {
        super(props);
        console.log("1-constructor");
    }

    componentDidMount() {
        console.log("3-componentDidMount");
    }

    componentDidUpdate() {
        console.log("4-componentDidUpdate");
    }

    render() {
        console.log("2-render");

        const {id, title, price, stock} = this.props.product;
        return (
            <div 
                className="item"
                onMouseEnter = {() => console.log("enter")}
                onMouseLeave = {() => console.log("leave")}
            >
                <h1>
                    <Link to={`/products/${id}`}>
                        {title} ({stock})
                    </Link>
                </h1>
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