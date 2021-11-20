
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import "aos/dist/aos.css";
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const QuiSommeNous = lazy(() => import('./pages/QuiSommeNous'));
function App() {
  return (
    <div className="App">
        <Router>
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/QuiSommeNous" element={<QuiSommeNous />} />
              <Route element={<NotFound />} path='/*' />
            </Routes>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;
