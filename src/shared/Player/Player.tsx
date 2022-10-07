import React from 'react';
import { musicData } from '../../constants/musicData';
import ReactAudioPlayer from 'react-audio-player';
import NcImage from '../NcImage/NcImage';
import Card from '../Card/Card';

const Player = () => {
  return (
    <div className="p-2 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 main-text mt-5">
      {musicData?.map((data, id) => (
        <Card key={id} className="shadow-lg">
          <NcImage
            src="https://res.cloudinary.com/arifscloud/image/upload/v1657362446/alf-images/A-24_zegigt.jpg"
            alt="Abdul_alim_Cover"
            className="object-cover object-center w-full transform transition-all hover:scale-105"
          />
          <div className="mx-auto max-w-screen-sm mt-5">
            <ReactAudioPlayer src={data.music} controls />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Player;
