import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/404/PageNotFound';
import Navbar from '../shared/Navbar/Navbar';
import ScrollToTop from './ScrollToTop';
import Footer from '../shared/Footer/Footer';
//import DisplayAllMusics from '../components/DisplayAllMusics/DisplayAllMusics';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/allMusics" element={<DisplayAllMusics />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};
export default AppRoutes;
