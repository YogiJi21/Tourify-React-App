import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story, currentUserId, onDelete }) => {
  const isAuthor = story.author._id === currentUserId;

  return (
    <div className="story-card">
      <img src={story.imageUrl} alt={story.title} />
      <h3>{story.title}</h3>
      <p>By: {story.author.username}</p>
      <Link to={`/story/${story._id}`}>Read More</Link>
      {isAuthor && (
        <div>
          <Link to={`/edit-story/${story._id}`}>Edit</Link>
          <button onClick={() => onDelete(story._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default StoryCard;
