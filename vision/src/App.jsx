import React from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/news'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
              <Route exact path="/" element=
              {
                <>
                   <Hero></Hero>
                   <News></News> 
                </>
              }>
              </Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App