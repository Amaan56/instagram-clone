import React from 'react';
import './Backdrop.css';
import { useDataLayerValue } from './DataLayer';

function Backdrop() {
  const [{ backdrop }, dispatch] = useDataLayerValue();
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
    <div
      className="backdrop"
      onClick={() => {
        dispatch({
          type: 'UNSET_BACKDROP',
          backdrop: false,
        });
      }}
    >
      <div className="backdrop__modal">
        {options.map((option, i) => {
          return (
            <button
              key={i}
              onClick={(e) => {
                if (option !== 'Cancel') e.stopPropagation();
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Backdrop;
