import React from 'react';
import PostCreate from './postCreate'
import PostList from "./postList";
export default () => {
    return( <div className="container">
        <h1>Post App</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
)}