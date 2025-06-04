import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="master-app">
    <Navbar />
    <div className="app-content">
      
    </div>
   </div>
  )
}

export default App
