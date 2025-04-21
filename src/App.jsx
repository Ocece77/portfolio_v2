import './App.scss';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import MainLayout from './utils/MainLayout';
import Intership from './page/Intership';
import Veille from './page/Veille';
import Btssio from './page/Btssio';
import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import LoadingScreen from './utils/LoadingScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0); 

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const handleLoad = () => {
      let loaded = 0;
      const loadingInterval = setInterval(() => {
        loaded += 10; // Augmenter par 10 (pour un effet smooth)
        setLoadPercentage(loaded);

        if (loaded >= 100) {
          clearInterval(loadingInterval); // Quand on atteint 100, on arrête l'intervalle
          setTimeout(() => {
            setIsLoading(false); // Démarre la transition pour cacher l'écran de chargement
          }, 500); // Attente pour la transition
        }
      }, 100); // On met à jour toutes les 100ms (pour un effet plus fluide)
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} percentage={loadPercentage} />


        <Router >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index path="/" element={<Home windowLoaded={windowLoaded} />} />
              <Route path="/intership" element={<Intership />} />
              <Route path="/veille" element={<Veille />} />
              <Route path="/btssio" element={<Btssio />} />
            </Route>
          </Routes>
        </Router>
      
    </>
  );
};

export default App;
