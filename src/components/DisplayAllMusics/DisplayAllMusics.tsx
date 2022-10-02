import React from 'react';
import Animation from '../../shared/Animation/Animation';
import Player from '../../shared/Player/Player';

const DisplayAllMusics: React.FC = () => {
  return (
    <div className="mx-auto mt-32 main-text">
      <h1 className="text-center text-5xl">Displaying All musics</h1>
      <div>
        {/* <div className="mx-auto max-w-screen-sm w-full mt-7">
          

          <input
            className="block h-10 w-full rounded-xl border border-gray-200 bg-gray-200 px-4 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-700 dark:text-gray-50"
            type="text"
            placeholder="Search Your Music"
          />
        </div> */}
        <div className="mx-auto max-w-screen-xl px-10">
          <Animation animateIn="fadeInUp">
            <Player />
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllMusics;
