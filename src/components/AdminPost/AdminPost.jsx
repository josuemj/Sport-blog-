import React from 'react';
import './AdminPost.css'

function AdminPost({ id, title, content, video, createdAt }) {
  console.log(id)
  console.log(title)
  return (
    <div className="postAdmin">
      <h2>{title}</h2>
      <div className='post-id'>Post ID: {id}</div>  {/* Display the post ID */}
      <p>{content}</p>
      <iframe
        width="400"
        height="200"
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
