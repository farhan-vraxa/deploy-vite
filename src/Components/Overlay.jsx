import React from 'react';

const Overlay = ({ onGetCameraPositionClick }) => {
    return (
      <div className="overlay">
        <button onClick={onGetCameraPositionClick}>Get Camera Position</button>
      </div>
    );
  };

export default Overlay;
