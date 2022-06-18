import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';

const LatestMusics: React.FC = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <img
          src="https://i.ibb.co/MD11mp7/abdul-alim-3-music.jpg"
          alt="LatestMusics"
          className="block w-full h-full object-fit overflow-hidden"
        />
        <h1>
          <span className="mb-4 space-y-4 ml-6 inline-block font-bold text-gray-900 dark:text-gray-50 md:text-7xl">
            <div>New Album now on vinyl</div>
          </span>
          <p className="font-thin text-2xl ml-6">
            With one click import you can get your favourite song ready in
            minutes.
          </p>
          <p className="font-thin text-md ml-6">
            So this is the tale of our castaways they’re here for a long long
            time. They’ll have to make the best of things its an uphill climb.
            Come and dance on our floor. Take a step that is new.
          </p>
          <Link to="/allMusics">
            <Button className="ml-5 mt-7">All Musics</Button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default memo(LatestMusics);
