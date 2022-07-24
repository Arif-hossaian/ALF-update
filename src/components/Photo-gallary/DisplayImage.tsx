import React from 'react';
import { useTranslation } from 'react-i18next';
import Animation from '../../shared/Animation/Animation';
import ImageSwiper from './ImageSwiper';

const DisplayImage = () => {
  const { t } = useTranslation(['gallery']);
  return (
    <div className="mt-10">
      <Animation animateIn="fadeInUp">
        <h2 className="text-center text-green-400 md:text-5xl xs:text-lg">
          {t('appGalleryTitle.title')}
        </h2>
      </Animation>
      <Animation animateIn="fadeIn">
        <ImageSwiper />
      </Animation>
    </div>
  );
};

export default DisplayImage;
