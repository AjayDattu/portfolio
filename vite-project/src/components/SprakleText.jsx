import React from 'react';

const SparkleText = ({ text, className = '', sparklesCount = 10, colors = { first: '#A07CFE', second: '#FE8FB5' } }) => {
  
  // Function to generate sparkles
  const renderSparkles = () => {
    const sparkles = [];
    for (let i = 0; i < sparklesCount; i++) {
      sparkles.push(
        <span
          key={i}
          className="absolute sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${colors.first}, ${colors.second})`,
          }}
        />
      );
    }
    return sparkles;
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Display the text */}
      <span>{text}</span>

      {/* Sparkles */}
      {renderSparkles()}
    </div>
  );
};

export default SparkleText;
