import React from 'react';
import Sidebar from './Sidebar';
import Story from './Story';
import PostSection from './PostSection';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <div className="main__layout">
        <Story />
        <PostSection />
      </div>
      <Sidebar />
    </div>
  );
}

export default Main;
