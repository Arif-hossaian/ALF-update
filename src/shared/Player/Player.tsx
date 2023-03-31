import { FC, createRef, useState } from 'react';
import { musicData } from '../../constants/musicData';
//import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import NcImage from '../NcImage/NcImage';
import Card from '../Card/Card';

const Player: FC = () => {
  const [currentSong, setCurrentSong] = useState<any>({});
  const refs: any = {};

  const handlePlay = (song: any) => {
    //console.log(song);
    console.log(currentSong);
    console.log(refs[currentSong.id]);
    if (currentSong.id && currentSong.id !== song.id) {
      refs[currentSong.id].current.audio.current.pause();
    }
    setCurrentSong(song);
  };
  return (
    <div className="p-2 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 main-text mt-5">
      {musicData?.map((data, id) => {
        refs[data.id] = createRef<any>();
        return (
          <Card key={id} className="shadow-lg">
            <NcImage
              src="https://res.cloudinary.com/arifscloud/image/upload/v1657362446/alf-images/A-24_zegigt.jpg"
              alt="Abdul_alim_Cover"
              className="object-cover object-center w-full transform transition-all hover:scale-105"
            />
            <p className="m-3">{data.title}</p>
            <div className="mx-auto max-w-screen-sm mt-5s">
              <AudioPlayer
                ref={refs[data.id]}
                src={data.music}
                onPlay={() => handlePlay(data)}
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Player;
