import React from 'react';

const CommentList = props => (
    <ul>
        {props.comments.map(({author, body}) => (  
            <li>[{author}]  {body}</li>
        ))}
    </ul>
);

export default CommentList;