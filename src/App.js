import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Brands from './pages/Brands'
import RolexWatches from './pages/RolexWatches'
import Accessories from './pages/Accessories'
import RepairAndService from './pages/RepairAndService'
import Locatestore from './pages/Locatestore'
import TheWatchGuide from './pages/TheWatchGuide'
import SpecialOffers from './pages/SpecialOffers'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="brands" element={<Brands/>}/>
          <Route path="rolex-watches" element={<RolexWatches/>}/>
          <Route path="accessories" element={<Accessories/>}/>
          <Route path="repair-and-service" element={<RepairAndService/>}/>
          <Route path="locatestore" element={<Locatestore/>}/>
          <Route path="the-watch-guide" element={<TheWatchGuide/>}/>
          <Route path="special-offers" element={<SpecialOffers/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
