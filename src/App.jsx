import React from 'react';
import Loading from './components/Loading';
import Draw from './pages/Draw';
import Share from './pages/Share';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import SlideRoutes from 'react-slide-routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Loading />
      <Navigator />
      <SlideRoutes duration={300}>
        <Route path="/" element={<Draw />} />
        <Route path="/share" element={<Share />} />
      </SlideRoutes>
      <Footer />
    </Router>
  );
}

export default App;
