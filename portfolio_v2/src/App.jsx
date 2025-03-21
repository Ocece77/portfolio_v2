
import './App.css'
import Contacts from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Veille from './components/Veille'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Projects/>
      <Veille/>
      <Socials/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
