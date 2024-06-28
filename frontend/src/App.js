import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts'); // 백엔드의 새 포트 번호
    setPosts(response.data);
  };

  const addPost = async (post) => {
    if (editingPost) {
      const response = await axios.put(`http://localhost:4000/posts/${editingPost.id}`, post); // 백엔드의 새 포트 번호
      setPosts(posts.map(p => p.id === editingPost.id ? response.data : p));
      setEditingPost(null);
    } else {
      const response = await axios.post('http://localhost:4000/posts', post); // 백엔드의 새 포트 번호
      setPosts([...posts, response.data]);
    }
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:4000/posts/${id}`); // 백엔드의 새 포트 번호
    setPosts(posts.filter(post => post.id !== id));
  };

  const editPost = (post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <h1>게시판</h1>
      <PostForm onSave={addPost} initialData={editingPost || { title: '', content: '' }} />
      {posts.map(post => (
        <Post key={post.id} post={post} onDelete={deletePost} onEdit={editPost} />
      ))}
    </div>
  );
};

export default App;
