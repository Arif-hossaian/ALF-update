import React from 'react';
import { useTranslation } from 'react-i18next';
import Animation from '../../shared/Animation/Animation';
import ImageSwiper from './ImageSwiper';

const DisplayImage = () => {
  const { t, i18n } = useTranslation(['gallery']);
  return (
    <div className="mt-20">
      <Animation animateIn="fadeInUp">
        <h2
          className={
            i18n.language === 'en text-center main-text md:text-5xl text-2xl'
              ? 'en-font '
              : 'bd-font-title text-center main-text md:text-5xl text-2xl'
          }
        >
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
