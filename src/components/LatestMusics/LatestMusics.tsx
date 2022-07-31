/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';
import VisibilitySensor from 'react-visibility-sensor';
import MusicPlayerIcon from '../../icons/MusicPlayerIcon';
import NcImage from '../../shared/NcImage/NcImage';
import Animation from '../../shared/Animation/Animation';
import ImageAnimation from '../../shared/Animation/ImageAnimation';
import MusicIcon from '../../icons/81966-girl-listening-to-music.json';

const LatestMusics: React.FC = () => {
  const { t } = useTranslation(['music']);
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
            <span className="mb-4 space-y-4 inline-block font-bold main-text md:text-7xl">
              <div>{t('appMusicTitle.title')}</div>
            </span>
            <p className="font-thin text-2xl ">
              {t('appMusicTitle.subTitle1')}
            </p>
            <p className="font-thin text-md ">{t('appMusicTitle.subTitle2')}</p>
          </Animation>
          <Animation animateIn="fadeIn">
            <VisibilitySensor
              onChange={(
                isVisible: boolean | ((prevState: boolean) => boolean)
              ) => setElementIsVisible(isVisible)}
              className="object-cover object-center"
            >
              <MusicPlayerIcon />
            </VisibilitySensor>
          </Animation>
          <Link to="/allMusics">
            <Button className="mt-7" variant="outline" size="md">
              {t('appMusicTitle.musicButton1')}
            </Button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LatestMusics;
