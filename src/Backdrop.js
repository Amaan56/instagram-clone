import React from 'react';
import './Backdrop.css';

function Backdrop() {
  const options = [
    'Report',
    'Unfollow',
    'Go to post',
    'Share to...',
    'Copy Link',
    'Embed',
    'Cancel',
  ];
  return (
    <div className="backdrop">
      <div className="backdrop__modal">
        {options.map((option, i) => {
          return <button key={i}>{option}</button>;
        })}
      </div>
    </div>
  );
}

export default Backdrop;
