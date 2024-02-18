import './App.css'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Service from './components/Service'
import Chefs from './components/Chefs'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import ContextProvider from './components/ContextProvider'
function App() {
  const deviceType = window.innerWidth > 464 ? 'desktop' : 'mobile';
  return (
    <ContextProvider>
      <Navbar1 />
      <Navbar2 />
      <Routes> 
        <Route exact path='/_cakezone/' element = {<Home specialpackPosition="afterChefs" />} />
        <Route exact path='/_cakezone/about' element = {<About
        common="common" />} />
        <Route exact path='/_cakezone/menu' element = {<Menu specialpackPosition="afterMenu"
        common="common" />} />
        <Route exact path='/_cakezone/service' element = {<Service
        common="common" />} />
        <Route exact path='/_cakezone/chefs' element = {<Chefs
        common="common" />} />
        <Route exact path='/_cakezone/testimonial' element = {<Testimonial deviceType = {deviceType}
        common="common"/>}/>
        <Route exact path='/_cakezone/contact' element = {<Contact
        common="common" />}/>
      </Routes>
      <Footer />
    </ContextProvider>
  )
}

export default App
