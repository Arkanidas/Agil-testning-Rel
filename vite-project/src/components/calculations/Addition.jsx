import React from 'react'


const Addition = ({ props, num1, num2 }) => {
    const result = parseFloat(num1) + parseFloat(num2);
    props.setResult(result);
    return 
  };

export default Addition