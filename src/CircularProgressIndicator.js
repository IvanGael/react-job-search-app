// CircularProgressIndicator.js
import React from 'react';
import PropTypes from 'prop-types';
import './CircularProgressIndicator.css';

const CircularProgressIndicator = ({ size, color, strokeWidth }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg className="circular-progress" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        className="circular-progress-background"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className="circular-progress-foreground"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.25} 
        stroke={color}
      />
    </svg>
  );
};

CircularProgressIndicator.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default CircularProgressIndicator;
