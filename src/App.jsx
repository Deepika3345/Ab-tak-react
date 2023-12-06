import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sports from './Pages/Sports'
import Business from './Pages/Business'
import Politics from './Pages/Politics'
import PageNotFound from './Pages/PageNotFound'
import { NewsProvider } from './Context/NewsContext'

const App = () => {
  return (
    <Router>
    
      <NewsProvider>
      <Navbar />
        <div className="container p-3">
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' element={<Sports />} />
            <Route path='/business' element={<Business />} />
            <Route path='/politics' element={<Politics />} />
          </Routes>
        </div>

      </NewsProvider>
    </Router>
  )
}

export default App