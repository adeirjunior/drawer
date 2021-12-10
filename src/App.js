import React from 'react';
import Draw from './pages/Draw';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import SlideRoutes from 'react-slide-routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigator />
      <SlideRoutes>
        <Route path="/" element={<Draw />} />
      </SlideRoutes>
      <Footer />
    </Router>
  );
}

export default App;
