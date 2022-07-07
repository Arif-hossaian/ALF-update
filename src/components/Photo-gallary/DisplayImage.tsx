import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageSwiper from './ImageSwiper';

const DisplayImage = () => {
  const { t } = useTranslation(['gallery']);
  return (
    <div className="mt-20">
      <h2 className="text-center md:text-5xl xs:text-lg">
        {t('appGalleryTitle.title')}
      </h2>
      <ImageSwiper />
    </div>
  );
};

export default DisplayImage;
