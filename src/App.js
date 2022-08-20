import { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';

import { GlobalProvider, GlobalContext } from "./context/GlobalState"

import { Header } from './components/header/header';
import { Home } from './components/views/home/home'
import { Details } from './components/views/details/details'

function App() {
  const {serie}= useContext(GlobalContext)
  return (
    <>
      <GlobalProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:page" element={<Home />} />
          <Route path="/genre/:genre" element={<Home />} />
          <Route path='/genre/:genre/page/:page' element={<Home />} />
          <Route path='/page/:page/:search' element={<Home />} />
          <Route path="/details/:movieID" element={<Details />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
