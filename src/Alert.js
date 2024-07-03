import React from 'react';
import './Alert.css'; // Import the CSS file for styling

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

export default Alert;
