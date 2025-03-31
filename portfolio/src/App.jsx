
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import MainLayout from './utils/MainLayout';
import Intership from './page/Intership';
import Veille from './page/Veille';
import Btssio from './page/Btssio';
import Lenis from "lenis";


function App() {

  // Initialise Lenis pour le smooth slide
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <>
    <Router basename="/portfolio_v2">{/*basename="/portfolio_v2"*/}
      <Routes>
        <Route path = "/" element = {<MainLayout/> }>
          <Route index path="/" element={<Home />} />
          <Route path="/intership" element={<Intership />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/btssio" element={<Btssio />} />
        </Route>
      </Routes>
    </Router>


    </>
  )
}

export default App
