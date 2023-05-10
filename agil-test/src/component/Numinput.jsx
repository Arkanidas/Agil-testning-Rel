import React, { useState } from 'react';

const Numinput = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [method, setMethod] = useState('+');
  const [result, setResult] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    
    let calculatedResult;

    switch (method) {
      case '+':
        calculatedResult = addNumbers(parseInt(num1), parseInt(num2));
        break;
      case '/':
        calculatedResult = divideNumbers(parseInt(num1), parseInt(num2));
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
  };

  const addNumbers = (a, b) => {
    return a + b;
  };

  const divideNumbers = (a, b) => {
    return a / b;
  };

  return (
    <form>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="+">+</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </form>
  );
};

export default Numinput;