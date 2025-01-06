import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './home.css'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
            <div class="div">
                <div class="div3">
                        <img src="download.jpg" alt="download.jpg" />
                        <h2 class="div3h2">ES</h2>
                </div>
                <div class="div2">
                        <nav><Link to='/'>HOME</Link></nav>
                        <nav><Link to='/About'>ABOUT US</Link></nav>
                        <nav><Link to='/Contact'>CONTACT</Link></nav>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
        <footer>&copy; Designed by Elangovan</footer>
    </>
  )
}

export default App
