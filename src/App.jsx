import { useState, useEffect } from 'react'
import './App.css'

// mport Nav component
import Nav from "./components/Nav.jsx";

// root functional component App()
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
    </>
  )
}

export default App
