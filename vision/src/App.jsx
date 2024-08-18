import React from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/news'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage'
import About from './components/About'
import Gallery from './components/Gallery'
import Talent from './components/Talent'
import Showtalent from './components/Showtalent'
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
                   <About></About>
                   <Talent></Talent>
                   <Showtalent></Showtalent>
                   <Gallery></Gallery>
                </>
              }>
              </Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route path='/submit' element={<FormPage></FormPage>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App