import React from 'react';
import './Post.css'

function Post({ title, content, video, createdAt }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${video}`}
        frameborder="0"
        allow="accelerometer; autoplay;s clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>Posted on: {new Date(createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default Post;
