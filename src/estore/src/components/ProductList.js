//import React, { Component } from "react";
import React from "react";
import ProductListItem from './ProductListItem.js';

//class ProductList extends Component {
class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products : [
                {id:1, title: "Dell XPS", price:1217.50, stock: 20}, 
                {id:2, title: "Dell Latitude", price: 740.12, stock: 20}, 
                {id:3, title: "Dell Alienware", price: 1200.60, stock: 20},
                {id:4, title: "Dell Pad", price: 900.00, stock: 20},
                {id:5, title: "Dell Mobile", price: 500.17, stock: 20}
            ],
            cart: []
        };

        //need to establish state at first so you know when it is updated.

        /*
        setTimeout(() => {
            //this.state.products.push({ title: "Chrome Book"});
            //console.log(this.state);

            let products = [
                {id:1, title: "Dell XPS", price:1000, stock: 20}, 
                {id:2, title: "Dell Latitude", price: 700, stock: 20}, 
                {id:3, title: "Dell Alienware", price: 1200, stock: 20},
                {id:4, title: "Dell Pad", price: 900, stock: 20},
                {id:5, title: "Dell Mobile", price: 500, stock: 20}
            ];

            this.setState({ 
                products: [...products, { title: "Chrome Book"}]
            });
        }, 10000);
        */
    }

    onAddToCart = id => {
        //alert(`Product Id:  ${id}`);
        const product = this.state.products.find(p => p.id === id);
        this.setState({cart: [...this.state.cart, product]})
    }

    //it is a good idea to modularize the code to make the render method more readable.
    _renderProducts() {

        //this should be replaced with state so that it can change according to binding.
        /*const products = [
            {title: "Dell XPS"}, 
            {title: "Macbook Pro"}, 
            {title: "HP Elitebook"}];*/

        return (
        <ul>
            { 
                // this.state.products
                // ? this.state.products.map(p => <li>{p.title}</li>)
                // : null
                this.state.products
                ? this.state.products.map(p => 
                    <ProductListItem 
                        key={p.id}
                        product={p} 
                        addToCartClicked={this.onAddToCart} />
                )
                : null
            }
        </ul>
        );
    }

    render() { 
        //can return string, null, array, simple primitives - not objects;
        //return "Products";
        return (
        <div>
            <h1>Products</h1>
            <h3>CART:  {this.state.cart.map(p => p.title).join(', ')}</h3>
            <h2>All good products</h2>
            {this._renderProducts()}
        </div>
        );
    }
}

export default ProductList;