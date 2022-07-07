import React, { Suspense } from 'react';
import AboutSection from '../components/About-alf/AboutSection';
import Banner from '../components/Banner/Banner';
import Events from '../components/Events/Events';
import LatestMusics from '../components/LatestMusics/LatestMusics';
import DisplayImage from '../components/Photo-gallary/DisplayImage';
import SectionVideos from '../components/SectionVideos/SectionVideos';
import Spinner from '../icons/Spinner';

const Home = () => {
  return (
    <div>
      <Banner />
      <main className="mx-auto px-6 sm:px-8 xl:px-12">
        <Events />
        <LatestMusics />
        <SectionVideos />
        <AboutSection />
        <Suspense fallback={<Spinner />}>
          <DisplayImage />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
