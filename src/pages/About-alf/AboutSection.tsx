/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Animation from '../../shared/Animation/Animation';
import { Button } from '../../shared/Button';
import AboutALF from '../../icons/29298-girl-with-a-guitar.json';
import ImageAnimation from '../../shared/Animation/ImageAnimation';

const AboutSection: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <div className="py-16 mt-16 max-w-screen-xl mx-auto">
      <Animation animateIn="fadeInUp">
        <h1 className="text-center main-text lg:text-5xl text-2xl text-bold">
          {t('appAboutTitle.title')}
        </h1>
      </Animation>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 sm:grid-cols-1">
        <Animation animateIn="fadeInRight" delay={0.2 * 1000} className="mt-16">
          <span className="mb-4 space-y-4 ml-6 inline-block font-semibold main-text md:text-5xl sm:text-lg">
            <div>{t('appAboutTitle.subTitle1')}</div>
          </span>
          <p className="font-thin text-md ml-6">
            {t('appAboutTitle.subTitle2')}
          </p>
          <div className="flex justify-end items-center max-w-lg ml-6 mt-4">
            <div>
              <span className="text-5xl main-text font-medium">
                {t('appAboutTitle.title2')}
              </span>
              <span className="text-3xl font-bold">
                {' '}
                {t('appAboutTitle.title3')}
              </span>
            </div>
            <div>
              <p className="font-thin text-md ml-6">
                {t('appAboutTitle.subTitle3')}
              </p>
            </div>
          </div>
          <Link to="/more-about">
            <Button className="ml-5 mt-7" variant="outline" size="md">
              {t('appAboutTitle.aboutButton1')}
            </Button>
          </Link>
        </Animation>
        <div className="-mt-16">
          <ImageAnimation animationData={AboutALF} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
