import React, { useState, useEffect } from 'react';
import StoryCard from './StoryCard';
import ShareStory from './ShareStory';
import { useNavigate } from 'react-router-dom';

const LocalStories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      const response = await fetch('http://localhost:5000/stories', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 401) {
        navigate('/login');
        return;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
      }
      const data = await response.json();
      setStories(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching stories:', error);
      setError(`Failed to fetch stories. ${error.message}`);
    }
  };
  

  return (
    <div className="local-stories">
      <h1>Local Stories</h1>
      <ShareStory onStoryAdded={fetchStories} />
      {error && <p className="error-message">{error}</p>}
      <div className="story-grid">
        {stories.length > 0 ? (
          stories.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))
        ) : (
          <p>No stories available.</p>
        )}
      </div>
    </div>
  );
};

export default LocalStories;