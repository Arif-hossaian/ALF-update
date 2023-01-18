import React, { Suspense } from 'react';
//import AboutSection from './About-alf/AboutSection';
import Banner from '../components/Banner/Banner';
import EducationLife from '../components/Edu-life/EducationLife';
import EndOfLife from '../components/End-life/EndOfLife';
import Events from '../components/Events/Events';
import LatestMusics from '../components/LatestMusics/LatestMusics';
import DisplayImage from '../components/Photo-gallary/DisplayImage';
import SectionVideos from '../components/SectionVideos/SectionVideos';
import WorkingLife from '../components/working-life/WorkingLife';
import Spinner from '../icons/Spinner';

const Home = () => {
  return (
    <div>
      <Banner />
      <main className="mx-auto max-w-screen-xl sm:min-w-full px-8 sm:px-8 xl:px-12">
        <EducationLife />
        <WorkingLife />
        <EndOfLife />
        {/* <Events /> */}
        <LatestMusics />
        <SectionVideos />
        {/* <AboutSection /> */}
        <Suspense fallback={<Spinner />}>
          <DisplayImage />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
