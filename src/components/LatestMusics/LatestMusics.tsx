/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';
import VisibilitySensor from 'react-visibility-sensor';
import MusicPlayerIcon from '../../icons/MusicPlayerIcon';
//import NcImage from '../../shared/NcImage/NcImage';
import Animation from '../../shared/Animation/Animation';
import ImageAnimation from '../../shared/Animation/ImageAnimation';
import MusicIcon from '../../icons/lf20_j25ua0y6.json';
import AudioPlayer from 'react-h5-audio-player';

const LatestMusics: React.FC = () => {
  const { t, i18n } = useTranslation(['music']);
  const [elementIsVisible, setElementIsVisible] = useState(false);
  return (
    <div className="py-16 mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1">
        {/* <NcImage
          src="https://i.ibb.co/x3XBSmF/undraw-happy-music-g6wc.png"
          alt="Abdul_alim_Cover"
          className="object-cover object-center mt-10 w-3/4 h-3/4 image-bounce animate-pulse transform transition-all hover:scale-105"
        /> */}
        <div className="-mt-16">
          <ImageAnimation animationData={MusicIcon} />{' '}
        </div>

        <h1 className="">
          <Animation animateIn="fadeInUp">
            <span className="mb-4 space-y-4 inline-block font-bold main-text md:text-7xl text-4xl">
              <div
                className={
                  i18n.language === 'en' ? 'en-font ' : 'bd-font-title'
                }
              >
                {t('appMusicTitle.title')}
              </div>
            </span>
            <p
              className={
                i18n.language === 'en'
                  ? 'en-font font-thin text-2xl'
                  : 'bd-font-subTitle font-thin text-2xl mt-3'
              }
            >
              {t('appMusicTitle.subTitle1')}
            </p>
            <p
              className={
                i18n.language === 'en'
                  ? 'en-font font-thin text-md'
                  : 'bd-font-subTitle font-thin text-md'
              }
            >
              {t('appMusicTitle.subTitle2')}
            </p>
          </Animation>
          {/* <Animation animateIn="fadeIn">
            <VisibilitySensor
              onChange={(
                isVisible: boolean | ((prevState: boolean) => boolean)
              ) => setElementIsVisible(isVisible)}
              className="object-cover object-center"
            >
              <MusicPlayerIcon />
            </VisibilitySensor>
          </Animation> */}
          <div className="mt-3">
            <Animation animateIn="fadeIn">
              <AudioPlayer
                src="https://abdulalimfoundation.org.bd/songs/ALLAHU%20ALLAHU%20TUMI.mp3"
                onPlay={(e) => console.log('onPlay')}
                // other props here
              />
            </Animation>
          </div>

          <Link to="/allMusics">
            <Button
              variant="outline"
              size="md"
              className={
                i18n.language === 'en'
                  ? 'en-font mt-7'
                  : 'bd-font-subTitle mt-7'
              }
            >
              {t('appMusicTitle.musicButton1')}
            </Button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LatestMusics;
