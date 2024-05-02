import React, { useState } from 'react';
import './AdminNavigationBar.css';

function AdminNavigationBar() {
    const [showNewPostModal, setShowNewPostModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        video: ''
    });

    const [showUpdatePostModal, setShowUpdatePostModal] = useState(false);
    const [showDeletePostModal, setShowDeletePostModal] = useState(false);

    const [deletePostId, setDeletePostId] = useState(''); // State to hold the ID of the post to be deleted


    const openNewPostModal = () => setShowNewPostModal(true);
    const openUpdatePostModal = () => setShowUpdatePostModal(true);
    const openDeletePostModal = () => setShowDeletePostModal(true);

    const closeModals = () => {
        setShowNewPostModal(false);
        setFormData({
            title: '',
            content: '',
            video: ''
        });
        setShowUpdatePostModal(false);
        setShowDeletePostModal(false);
        setUpdateFormData({ id: '', title: '', content: '', video: '' });

    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateFormData({
            ...updateFormData,
            [name]: value
        });
    };

    const [updateFormData, setUpdateFormData] = useState({
        id: '',
        title: '',
        content: '',
        video: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.tiburoncin.lat/22397/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit post');
            }
            // Handle successful submission (e.g., close modal, show success message)
            closeModals();
            console.log('Post submitted successfully');
        } catch (error) {
            console.error('Error submitting post:', error.message);
        }
    };

    const handleDelete = async () => {
        if (!deletePostId) {
            alert('Please enter a post ID.');
            return;
        }
        const confirmDelete = window.confirm(`Are you sure you want to delete the post with ID ${deletePostId}?`);
        if (confirmDelete) {
            try {
                const response = await fetch(`https://api.tiburoncin.lat/22397/posts/${deletePostId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Deletion failed');
                }
                console.log('Post deleted successfully');
                setDeletePostId(''); // Reset the deletePostId
                closeModals();
                // Optionally refresh the list of posts here if needed
            } catch (error) {
                console.error('Error deleting post:', error.message);
            }
        }
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.tiburoncin.lat/22397/posts/${updateFormData.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateFormData)
            });
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
            closeModals();
            console.log('Post updated successfully');
        } catch (error) {
            console.error('Error updating post:', error.message);
        }
    };



    return (
        <>
            <div className="adminNavBar">
                <button onClick={openNewPostModal}>New Post</button>
                <button onClick={openUpdatePostModal}>Update Post</button>
                <button onClick={openDeletePostModal}>Delete Post</button>
            </div>

            {/* New Post Modal */}
            {showNewPostModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <span className="close" onClick={closeModals}>&times;</span>
                        <h2>New Post</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content:</label>
                                <textarea id="content" name="content" value={formData.content} onChange={handleInputChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="video">YouTube Video ID:</label>
                                <input type="text" id="video" name="video" value={formData.video} onChange={handleInputChange} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            )}

            {/* Update Post Modal */}
            {showUpdatePostModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <span className="close" onClick={closeModals}>&times;</span>
                        <h2>Update Post</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <input type="text" name="id" placeholder="Post ID" value={updateFormData.id} onChange={handleUpdateInputChange} required />
                            <input type="text" name="title" placeholder="Title" value={updateFormData.title} onChange={handleUpdateInputChange} required />
                            <textarea name="content" placeholder="Content" value={updateFormData.content} onChange={handleUpdateInputChange} required></textarea>
                            <input type="text" name="video" placeholder="Video ID" value={updateFormData.video} onChange={handleUpdateInputChange} required />
                            <button type="submit">Update Post</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Post Modal */}
            {showDeletePostModal && (
            <div className="modal-background">
                <div className="modal-content">
                    <span className="close" onClick={closeModals}>&times;</span>
                    <h2>Delete Post</h2>
                    <p>DELETE POST WITH ID:</p>
                    <input
                        type="number"
                        value={deletePostId}
                        onChange={e => setDeletePostId(e.target.value)}
                    />
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
    )}
        </>
    );
}

export default AdminNavigationBar;
