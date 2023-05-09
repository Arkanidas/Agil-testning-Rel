import React from 'react'

const Division = ({ num1, num2 }) => {
    const result = parseFloat(num1) / parseFloat(num2);
    return <h2>Result: {Math.round(result)}</h2>;
  };

export default Division