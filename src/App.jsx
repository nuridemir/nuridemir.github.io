import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global-tailwind.css"
import "./global.css"
import { BrowserRouter, HashRouter } from "react-router-dom"

import RouteSystem from './router'
import ScrollToTop from './components/scroll-to-top-component'

function App() {

  return (
    <>
      <ScrollToTop />
      <RouteSystem />
    </>
  )
}
export default App



ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>)