import React, { useEffect, useState } from 'react';
import CommentImage from '../CommentImage/CommentImage';

const Comment = ({user}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${user}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            {
                comments.map(comment => <CommentImage key={comment.id} comment={comment}></CommentImage>)
            }
        </div>
    );
};

export default Comment;