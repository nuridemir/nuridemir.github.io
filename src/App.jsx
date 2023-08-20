import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { BrowserRouter, HashRouter } from "react-router-dom"

import RouteSystem from './router'

function App() {

  return (
    <>
      <RouteSystem />
    </>
  )
}
export default App



ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>)