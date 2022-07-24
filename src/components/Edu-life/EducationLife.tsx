/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';
import NcImage from '../../shared/NcImage/NcImage';
import Animation from '../../shared/Animation/Animation';

const EducationLife: React.FC = () => {
  const { t } = useTranslation(['education']);
  return (
    <div className="py-16 mt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1">
        <Animation animateIn="fadeIn">
          <NcImage
            src="https://res.cloudinary.com/arifscloud/image/upload/v1657362446/alf-images/A-24_zegigt.jpg"
            alt="Abdul_alim_Cover"
            className="object-cover object-center mt-10 w-3/4  transform transition-all hover:scale-105 md:ml-16 lg:ml-16"
          />
        </Animation>
        <Animation animateIn="fadeInUp" delay={0.2 * 1000}>
          <span className="mb-4 mt-10 space-y-4 inline-block font-bold text-green-400 text-4xl">
            <div>{t('appEducationLife.title')}</div>
          </span>
          <p className="font-normal text-lg ">
            {t('appEducationLife.subTitle1')}
          </p>
          <p className="font-light text-md ">
            {t('appEducationLife.subTitle2')}
          </p>
          <Link to="/more-about">
            <Button
              className="mt-7 border-solid border-2 border-green-400"
              variant="ghost"
              size="md"
            >
              {t('appEducationLife.subButton1')}
            </Button>
          </Link>
        </Animation>
      </div>
    </div>
  );
};

export default EducationLife;
