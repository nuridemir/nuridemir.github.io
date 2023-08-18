import HomePage from "./pages/home-page"
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"

function App() {
  return (
    <HomePage />
  )
}
export default App



ReactDOM.createRoot(document.getElementById('root')).render(<App />)