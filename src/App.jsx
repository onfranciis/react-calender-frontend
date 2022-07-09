import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Body from './components/body/Body'
import Home from './components/home/Home'
import { FaUser } from 'react-icons/fa'

function App() {

  return (
  <div className="App">
      <Router>
        <div className='myCalenderParent'>
          <Link to='/'>
          <h1 className='myCalender'>myCalender</h1>
          </Link>
        </div>
        <div className='icons'>
          <Link to='/user1'>
          <FaUser className='icon1'/>
          </Link>
          <Link to='/user2'>
          <FaUser className='icon2'/>
          </Link>
        </div>
        <Routes>
          <Route path='/user1' element={<Body section='User1'/>}/>
          <Route path='/user2' element={<Body section='User2'/>}/>
          <Route path='*' element={<Home section='Home'/>}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
