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
import Footer from './components/Footer'
import Aboutpage from './components/Aboutpage'
import Display from './components/Display'
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
              <Route path='/about' element={<Aboutpage></Aboutpage>}></Route>
              <Route path='/display' element={<Display></Display>}></Route>
              <Route path='/submit' element={<FormPage></FormPage>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App