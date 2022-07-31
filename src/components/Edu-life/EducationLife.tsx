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
    <div className="px-5 mt-16">
      <div className="grid  lg:grid-cols-2 lg:space-x-16 sm:grid-cols-1">
        <Animation animateIn="fadeIn">
          <NcImage
            src="https://res.cloudinary.com/arifscloud/image/upload/v1657362446/alf-images/A-24_zegigt.jpg"
            alt="Abdul_alim_Cover"
            className="object-cover object-center mt-10 w-full transform transition-all hover:scale-105"
          />
        </Animation>
        <Animation animateIn="fadeInUp" delay={0.2 * 1000}>
          <span className="mb-4 mt-14 space-y-4 inline-block font-bold main-text text-4xl">
            <div>{t('appEducationLife.title')}</div>
          </span>
          <p className="font-normal text-lg ">
            {t('appEducationLife.subTitle1')}
          </p>
          <p className="font-light text-md ">
            {t('appEducationLife.subTitle2')}
          </p>
          <Link to="/more-about">
            <Button className="mt-6" variant="outline" size="md">
              {t('appEducationLife.subButton1')}
            </Button>
          </Link>
        </Animation>
      </div>
    </div>
  );
};

export default EducationLife;
