import { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';

import { GlobalContext } from "./context/GlobalState"

import { Header } from './components/header/header';
import { Home } from './components/views/home/home'
import { Details } from './components/views/details/details'

function App() {
  const { series } = useContext(GlobalContext)
  return (
    <>
        <Header />
        <Routes>
          <Route path={`/${series === "series" ? "series" : ""}`} element={<Home />} />
          <Route path={`${series === "series" ? "/series" : ""}/page/:page`} element={<Home />} />
          <Route path={`${series === "series" ? "/series" : ""}/genre/:genre`} element={<Home />} />
          <Route path={`${series === "series" ? "/series" : ""}/genre/:genre/page/:page`} element={<Home />} />
          <Route path={`${series === "series" ? "/series" : ""}/page/:page/:search`} element={<Home />} />
          <Route path={`${series === "series" ? "/series" : ""}/details/:movieID`} element={<Details />} />
          <Route path="*" element={<div>Pagina no encontrada</div>} />
        </Routes>
    </>
  );
}

export default App;
