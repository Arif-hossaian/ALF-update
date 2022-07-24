import React from 'react';
import { musicCardData } from '../../constants/musicCardData';
import MusicCard from '../../shared/Card/MusicCard';

const DisplayAllMusics: React.FC = () => {
  return (
    <div className="mx-auto mt-32">
      <h1 className="text-center text-5xl">Displaying All musics</h1>
      <div>
        <div className="mx-auto max-w-screen-sm w-full mt-7">
          <label className="sr-only" htmlFor="email">
            {' '}
            Email{' '}
          </label>

          <input
            className="block h-10 w-full rounded-xl border border-gray-200 bg-gray-200 px-4 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-700 dark:text-gray-50"
            type="text"
            placeholder="Search Your Music"
          />
        </div>
        <div className="mx-auto mt-14 max-w-screen-lg">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {musicCardData.map((item, i) => (
              <div key={i}>
                <MusicCard
                  image={item.image}
                  musicTitle={item.musicTitle}
                  musicInfo={item.musicInfo}
                  button1={item.button1}
                  button2={item.button2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllMusics;
