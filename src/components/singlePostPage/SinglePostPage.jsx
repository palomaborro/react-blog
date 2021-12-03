import React from 'react';
import SideBar from '../sidebar/SideBar';
import SinglePost from '../singlePost/SinglePost';
import './SinglePostPage.scss'

export default function SinglePostPage() {
    return (
        <div className='SinglePostPage'>
            <SinglePost />
            <SideBar />
        </div>
    )
}
