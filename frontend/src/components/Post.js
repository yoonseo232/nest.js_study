import React from 'react';

const Post = ({ post, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
