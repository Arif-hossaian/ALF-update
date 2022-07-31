import React from 'react';
import { MusicCardTypes } from '../../types/Types';
import { Button } from '../Button';

const MusicCard: React.FC<MusicCardTypes> = ({
  image,
  musicTitle,
  musicInfo,
  button1,
  button2,
}: any) => {
  return (
    <div>
      <span className="relative block bg-black group">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
          src={image}
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            {musicTitle}
          </p>

          <p className="text-2xl font-bold text-white">{musicInfo}</p>

          <div className="mt-64">
            <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <div className="flex justify-between items-center">
                <Button>{button1}</Button>
                <Button>{button2}</Button>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default MusicCard;
