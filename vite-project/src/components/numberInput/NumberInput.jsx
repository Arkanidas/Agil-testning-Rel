import React, { useState } from 'react'

const NumberInput = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [method, setMethod] = useState("+")
  const [result, setResult] = useState ("")

  const calculateResult = (e) => {
    e.preventDefault();

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let calculatedResult = "";

    switch (method) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = 'Invalid operation';
    }
    setResult(calculatedResult);
  }
  return (
    <form onSubmit={calculateResult}>

        <input type="number" value={num1}  onChange={(e) => setNum1(e.target.value)}>
        </input>
        
        <select value="method" onChange={(e) => setMethod(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input type="number" value={num2}  onChange={(e) => setNum2(e.target.value)}>
        </input>

        <button>Calculate</button>

        <h2 id='result'>Result: {result}</h2>
    </form>
  )
}

export default NumberInput