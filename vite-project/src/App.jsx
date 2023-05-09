import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumberInput from './components/numberInput/NumberInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NumberInput />
    </>
  )
}

export default App
