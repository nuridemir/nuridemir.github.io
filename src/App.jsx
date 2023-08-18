import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { BrowserRouter } from "react-router-dom"

import RouteSystem from './router'

function App() {

  return (
    <>
      <RouteSystem />
    </>
  )
}
export default App



ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)