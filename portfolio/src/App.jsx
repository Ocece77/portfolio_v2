
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import MainLayout from './utils/MainLayout';
import Intership from './page/Intership';
import Veille from './page/Veille';
import Projects from './page/ProjectsPage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<MainLayout/> }>
          <Route path="/" element={<Home />} />
          <Route path="/intership" element={<Intership />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/projectpage" element={<Projects />} />
        </Route>
      </Routes>
    </Router>


    </>
  )
}

export default App
