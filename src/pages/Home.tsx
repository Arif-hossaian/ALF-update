import React from 'react';
import Banner from '../components/Banner/Banner';
import Events from '../components/Events/Events';
import LatestMusics from '../components/LatestMusics/LatestMusics';
import SectionVideos from '../components/SectionVideos/SectionVideos';

const Home = () => {
  return (
    <div>
      <Banner />
      <main className="mx-auto px-6 sm:px-8 xl:px-12">
        <Events />
        <LatestMusics />
        <SectionVideos />
      </main>
    </div>
  );
};

export default Home;
