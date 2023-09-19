import { useState } from 'react'
import Header from './components/Header' 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Riddle from './pages/Riddle'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import ContactMe from './pages/ContactMe'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Footer from './components/Footer'
import { routes } from './Routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.aboutMe} element={<AboutMe />} />
        
        <Route path={routes.experience} element={<Experience />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.twoThruthsAndOneLie} element={<Riddle/>} />
        <Route path={routes.contact} element={<ContactMe />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App