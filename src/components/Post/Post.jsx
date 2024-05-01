import React from 'react';
import './Post.css';

function AdminPost({ id, title, content, video, createdAt }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${video}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Posted on: {new Date(createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default AdminPost;
