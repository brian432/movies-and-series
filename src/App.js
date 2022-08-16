import { Routes, Route } from 'react-router-dom';

import { Home } from './components/views/home/home'
import {Details} from './components/views/details/details'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page/:page" element={<Home />} />
      <Route path="/details/:movieID" element={<Details />}/>
    </Routes>
  );
}

export default App;
