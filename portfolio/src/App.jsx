
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import MainLayout from './utils/MainLayout';
import Intership from './page/Intership';
import Veille from './page/Veille';
import Btssio from './page/Btssio';

function App() {

  return (
    <>
    <Router >{/*basename="/portfolio_v2"*/}
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
