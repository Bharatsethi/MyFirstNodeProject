import React from 'react';
import './Middle.css';

const MiddleComp = ({video}) => {
    return (
        <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
};

export default MiddleComp;