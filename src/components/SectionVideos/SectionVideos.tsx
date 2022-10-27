import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
//import { Link } from 'react-router-dom';
import NcPlayIcon from '../../icons/NcPlayIcon';
//import NcPlayIcon2 from '../../icons/NcPlayIcon2';
import Animation from '../../shared/Animation/Animation';
// import { Button } from '../../shared/Button';
import Heading from '../../shared/Heading/Heading';
import NcImage from '../../shared/NcImage/NcImage';

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: 'NcRifDitRnU',
    title: 'Magical Scotland - 4K Scenic Relaxation Film with Calming Music',
    thumbnail: 'https://i.ibb.co/C05d83v/maxresdefault.jpg',
  },
  // {
  //   id: 'a5V6gdu5ih8',
  //   title: 'Magical Scotland - 4K Scenic Relaxation Film with Calming Music',
  //   thumbnail:
  //     'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
  // {
  //   id: 'MuB7HHeuNbc',
  //   title: 'Magical Scotland - 4K Scenic Relaxation Film with Calming Music',
  //   thumbnail:
  //     'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
  // {
  //   id: 'eEaZvEZye84',
  //   title: 'Magical Scotland - 4K Scenic Relaxation Film with Calming Music',
  //   thumbnail:
  //     'https://images.pexels.com/photos/4983184/pexels-photo-4983184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
  // {
  //   id: 'EuDJZDaSP0Q',
  //   title: 'Magical Scotland - 4K Scenic Relaxation Film with Calming Music',
  //   thumbnail:
  //     'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = '',
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const { t, i18n } = useTranslation(['video']);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-natural-800 rounded-3xl overflow-hidden border-4 border-white sm:rounded-[50px] sm:border-[10px]"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/_I3Q5AYr6R0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10 text-orange-500"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              containerClassName="absolute inset-0 "
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div
      className={`nc-SectionVideos mx-auto max-w-screen-xl px-6 mt-8 ${className}`}
    >
      <Animation animateIn="fadeIn">
        <div className="flex justify-between items-center">
          <Heading desc={t('appVideoTitle.subTitle1')}>
            🎬 {t('appVideoTitle.title')}
          </Heading>
          {/* <div>
            <Link to="/videos">
              <Button
                variant="outline"
                size="md"
                className={
                  i18n.language === 'en'
                    ? 'en-font ml-5 mt-7'
                    : 'bd-font-subTitle ml-5 mt-7'
                }
              >
                {t('appVideoTitle.videoButton1')}
              </Button>
            </Link>
          </div> */}
        </div>
      </Animation>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 bg-orange-500 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
