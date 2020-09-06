import { Avatar } from '@material-ui/core';
import React from 'react';
import './CommentImage.css';

const CommentImage = ({ comment }) => {
  const { id, name, email, body } = comment;
  return (
    <div className="image-set">
      <Avatar
        src={`https://iili.io/drB29t.jpg${
          Math.random() * 10
          }`}

      />
      <h3>{id}. Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default CommentImage;