import React, { Component } from 'react';

//Constructor is not required, but if you do provide, you must call the super(props);
class NotFound extends Component {

    render() {
        const { history } = this.props;
        
        return (
            <div>
                <h2>Oops...the page your are looking for is not found.</h2>
                <button onClick={() => history.goBack()}>Go Back</button>
                <button onClick={() => history.push("/products")}>Go to Products</button>
            </div>
        );
    }
}

/*
function NotFound({location, match, history}) {
    return (
        <div>
            <h2>Oops...the page your are looking for is not found.</h2>
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.push("/products")}>Go to Products</button>
        </div>
    );
}
*/

export default NotFound;