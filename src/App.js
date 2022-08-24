import { useContext } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { GlobalContext } from "./context/GlobalState"

import { Header } from './components/header/header';
import { Home } from './components/views/home/home'
import { Details } from './components/views/details/details'

import { AnimatePresence } from 'framer-motion';

function App() {
  const { firstPathName } = useContext(GlobalContext)
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path={`${firstPathName === "series" ? "/series" : ""}`} element={<Home />} />
          <Route path={`${firstPathName === "series" ? "/series" : ""}/page/:page`} element={<Home />} />
          <Route path={`${firstPathName === "series" ? "/series" : ""}/genre/:genre`} element={<Home />} />
          <Route path={`${firstPathName === "series" ? "/series" : ""}/genre/:genre/page/:page`} element={<Home />} />
          <Route path={`${firstPathName === "series" ? "/series" : ""}/page/:page/:search`} element={<Home />} />
          <Route path={`${firstPathName === "series" ? "/series" : ""}/details/:movieID`} element={<Details />} />
          <Route path={`${firstPathName === "series" ? "/series" : ""}/details/:movieID`} element={<Details />} />
          <Route path="/cast/:artistID/:artistName" element={<Home />} />
          <Route path="/cast/:artistID/:artistName/page/:page" element={<Home />} />
          <Route path="*" element={<div>Pagina no encontrada</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
