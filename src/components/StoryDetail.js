import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = () => {
  const [story, setStory] = useState(null);
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetchStory();
  }, [id]);

  const fetchStory = async () => {
    try {
      const response = await fetch(`http://localhost:5000/story/${id}`);
      const data = await response.json();
      setStory(data);
    } catch (error) {
      console.error('Error fetching story:', error);
    }
  };

  const handleRating = async (value) => {
    try {
      const response = await fetch(`http://localhost:5000/story/${id}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: value }),
      });
      if (response.ok) {
        setRating(value);
        fetchStory(); // Refresh story data to get updated average rating
      }
    } catch (error) {
      console.error('Error rating story:', error);
    }
  };

  if (!story) return <div>Loading...</div>;

  return (
    <div className="story-detail">
      <h1>{story.title}</h1>
      <img src={story.imageUrl} alt={story.title} />
      <p>By: {story.author}</p>
      <p>{story.content}</p>
      <div className="rating">
        <p>Rate this story:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={star <= rating ? 'active' : ''}
          >
            ⭐
          </button>
        ))}
      </div>
      <p>Average Rating: {story.averageRating.toFixed(1)}</p>
    </div>
  );
};

export default StoryDetail;