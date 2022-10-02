import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/404/PageNotFound';
import Navbar from '../shared/Navbar/Navbar';
import ScrollToTop from './ScrollToTop';
import Footer from '../shared/Footer/Footer';
import AboutSection from '../pages/About-alf/AboutSection';
import ContactUs from '../pages/Contact-us/ContactUs';
import DisplayAllMusics from '../components/DisplayAllMusics/DisplayAllMusics';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/musics" element={<DisplayAllMusics />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};
export default AppRoutes;
