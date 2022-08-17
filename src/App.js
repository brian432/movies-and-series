import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/header';
import { Home } from './components/views/home/home'
import { Details } from './components/views/details/details'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:page" element={<Home />} />
        <Route path="/genre/:genre" element={<Home />}/>
        <Route path='/genre/:genre/page/:page' element={<Home />} />
        <Route path='/page/:page/:search' element={<Home />} />
        <Route path="/details/:movieID" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
