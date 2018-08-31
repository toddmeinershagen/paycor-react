import React, { Component } from 'react';
import CommentList from './CommentList';

class CommentListCtrl extends Component {
    constructor() {
        console.log('constructor');
        super();
        this.state = { comments: [] };
    }

    componentDidMount() {
        fetch("/data/comments.json")
          .then(res => res.json())
          .then(comments => this.setState({ comments }))
        
          console.log('component did mount');
    }
      
    /*render() {
        return <CommentList comments={this.state.comments} />;
    }*/

    render() {
        console.log('render');
        return React.createElement(CommentList, { comments: this.state.comments });
    }
}

export default CommentListCtrl;