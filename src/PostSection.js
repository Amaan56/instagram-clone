import React from 'react';
import './PostSection.css';
import Post from './Post';

function PostSection() {
  return (
    <div className="postsection">
      <Post />
      <Post />
    </div>
  );
}

export default PostSection;
