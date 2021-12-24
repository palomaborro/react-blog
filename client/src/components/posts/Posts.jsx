import React from 'react';
import Post from '../post/Post';
import './Posts.scss';

export default function Posts({ posts }) {
    return (
        <div className='Posts'>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    )
}
