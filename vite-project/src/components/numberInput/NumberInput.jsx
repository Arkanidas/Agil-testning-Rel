import React, { useState } from 'react'
import Addition from '../calculations/Addition'
import Division from '../calculations/Division'

const NumberInput = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [method, setMethod] = useState("+")
  const [result, setResult] = useState ("")

  const calculate = (e) => {
    e.preventDefault();
    {method === '+' ? (
      <Addition num1={num1} num2={num2} result={result} setResult={setResult}/>
    ) : method === '/' ? (
      <Division num1={num1} num2={num2}  result={result} setResult={setResult}/>
    ) : (
      <h2>Invalid operation</h2>
    )}

  }
  return (
    <form>

        <input type="number" value={num1}  onChange={(e) => setNum1(e.target.value)}>
        </input>
        
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="+">+</option>
          <option value="/">/</option>
        </select>

        <input type="number" value={num2}  onChange={(e) => setNum2(e.target.value)}>
        </input>

        <button onClick={calculate}>Calculate</button>

        <h2>{result}</h2>
    </form>
  )
}

export default NumberInput