import React from 'react';
import './Middle.css';
import Routes from '../../Routes';

const MiddleComp = () => {
  // Define the video object with required properties
  const video = {
    videoId: 'SqcY0GlETPk', // YouTube video ID
    title: 'Sample Video', // Video title
    description: 'This is a sample YouTube video', // Video description
    url: 'https://www.youtube.com/watch?v=SqcY0GlETPk' // Video URL
  };

  return (
    <div className="Middle">
    <div className="middle-container">
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      
    </div>
    <div className="container mt-4">
    <Routes /> {/* Include Routes component here */}
</div>
</div>
  );
};

export default MiddleComp;
