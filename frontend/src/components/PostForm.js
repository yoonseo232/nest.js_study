import React, { useState } from 'react';

const PostForm = ({ onSave, initialData = { title: '', content: '' } }) => {
  const [post, setPost] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(post);
    setPost({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
