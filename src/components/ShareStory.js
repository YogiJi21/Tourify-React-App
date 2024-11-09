import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShareStory = ({ onStoryAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.warn("Form submission triggered");
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    } else {
      console.warn("No image selected");
    }
  
    try {
      const token = localStorage.getItem('token');
      console.log("Token:", token); // Log the token
      if (!token) {
        console.warn("No token found, redirecting to login");
        navigate('/login');
        return;
      }
      console.log("Sending request to server");
      const response = await fetch('http://localhost:5000/sharestories', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });
      console.log("Server response status:", response.status);
      if (response.status === 401) {
        console.warn("Unauthorized, redirecting to login");
        navigate('/login');
        return;
      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("Story saved successfully:", responseData);
        setTitle('');
        setContent('');
        setImage(null);
        onStoryAdded();
      } else {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
      }
    } catch (error) {
      console.error('Error sharing story:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="share-story-form">
      <h2>Share Your Story</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Story Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your Story"
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        accept="image/*"
        required
      />
      <button type="submit">Share Story</button>
    </form>
  );
};

export default ShareStory;
