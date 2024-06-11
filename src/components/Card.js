import React from "react";

const Card = ({ number, index, left, delay }) => {
  let styles = {
    // transform: `rotate(${rotate}deg)`,
    zIndex: index,
    left: `${left}%`,
    animationDelay: `${delay}s`,
  };

  return (
    <div className="card" style={styles}>
      <h3>{number}</h3>
    </div>
  );
};

export default Card;
