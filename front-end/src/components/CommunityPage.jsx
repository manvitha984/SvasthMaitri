import React from 'react';
import './Commstyle.css'


function CommunityPage() {
    const addPost = (event) => {
        // Add post logic here
        event.preventDefault(); // Prevents the form from submitting normally
    };

    return (
        <div>
            <section className="abheader">
                <div className="abtext-box">
                    <h1 style={{ paddingTop: '30px', fontSize: '50px' }}>Empowering Health: Our Community Hub</h1>
                </div>
            </section>

            <section className="add-post" style={{ textAlign: 'center' }}>
                <h2>Add New Post</h2>
                <form id="post-form" onSubmit={(event) => addPost(event)} style={{ maxWidth: '500px', margin: 'auto' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="post-title" style={{ display: 'block' }}>Title:</label>
                        <input type="text" id="post-title" name="title" placeholder="Enter the post title" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="post-author" style={{ display: 'block' }}>Author:</label>
                        <input type="text" id="post-author" name="author" placeholder="Enter your name" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="post-content" style={{ display: 'block' }}>Content:</label>
                        <textarea id="post-content" name="content" placeholder="Write your post content here" style={{ width: '100%', height: '150px', padding: '8px' }}></textarea>
                    </div>
                    <div>
                        <button type="submit" style={{ backgroundColor: '#88e2e8', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Add Post</button>
                    </div>
                </form>
            </section>

            <section className="blogs" id="new-post-section">
                <br /><br />
                <div className="blog" id="new-post">
                    {/* New post content will be inserted here */}
                </div>
                <br />
            </section>
        </div>
    );
}

export default CommunityPage;