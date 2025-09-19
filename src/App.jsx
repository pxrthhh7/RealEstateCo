import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Listings from './Pages/Listings'
import PropertyDetails from './Pages/PropertyDetails'
import Agents from './Pages/Agents'
import Contact from './Pages/Contact'
import AgentsDetails from './Pages/AgentsDetails'
import "aos/dist/aos.css";
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listings' element={<Listings />} />
          <Route path='/property-details/:id' element={<PropertyDetails />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/agent-details/:id' element={<AgentsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
