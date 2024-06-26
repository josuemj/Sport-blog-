import React, { useState, useEffect } from 'react';
import AdminPost from './AdminPost/AdminPost';

function AdminPosts() {
    const [posts, setPosts] = useState(null);  // State to store the API data
    const [loading, setLoading] = useState(true);  // State to track if data is loading
    const [error, setError] = useState(null);  // State to store any errors

    // Function to fetch data from the API
    async function fetchPosts() {
        
        try {
            const response = await fetch('https://api.tiburoncin.lat/22397/posts');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setPosts(data);  // Store the data in state
            setLoading(false);  // Set loading to false once data is loaded
        } catch (e) {
            setError(e.message);  // Store error message in state
            setLoading(false);  // Set loading to false because fetch is complete
        }   
    }

    // UseEffect to call fetchPosts when component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    // Render the component
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
        <div className='button-container'>
        <button className='refresh-button' onClick={fetchPosts}>Refresh</button>
        </div>
        {posts && posts.length > 0 ? (
            posts.map(post => (
                <AdminPost
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    video={post.video}
                    createdAt={post.created_at}
                />
            ))
        ) : (
            <p>No posts found!</p>
        )}
    </div>
    );
}

export default AdminPosts;
