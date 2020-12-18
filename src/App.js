import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import TourList from './components/tourlist'

const App = () => {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  )
}

export default App
