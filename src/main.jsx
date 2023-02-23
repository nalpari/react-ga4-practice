import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SamplePageOne from './pages/SamplePageOne.jsx'
import SamplePageTwo from './pages/SamplePageTwo.jsx'
import SamplePageThree from './pages/SamplePageThree.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className={`mt-2`}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page-one" element={<SamplePageOne />} />
          <Route path="/page-two" element={<SamplePageTwo />} />
          <Route path="/page-three" element={<SamplePageThree />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
