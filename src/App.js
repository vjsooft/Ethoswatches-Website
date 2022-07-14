import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

const Brands = React.lazy(() => import('./pages/Brands'));
const RolexWatches = React.lazy(() => import('./pages/Brands'));
const Accessories = React.lazy(() => import('./pages/Accessories'));
const RepairAndService = React.lazy(() => import('./pages/RepairAndService'));
const Locatestore = React.lazy(() => import('./pages/Locatestore'));
const TheWatchGuide = React.lazy(() => import('./pages/TheWatchGuide'));
const SpecialOffers = React.lazy(() => import('./pages/SpecialOffers'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

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
