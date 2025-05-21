import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Component from './components/Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Home test AWS Amplify</h1>
      <Component />
    </>
  )
}

export default App
