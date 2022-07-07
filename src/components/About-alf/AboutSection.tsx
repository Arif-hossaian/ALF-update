import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';

const AboutSection: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <div className="py-16 mt-20">
      <h1 className="text-center text-green-400 md:text-5xl xs:text-md text-bold">
        {t('appAboutTitle.title')}
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center mt-10">
        <div>
          <span className="mb-4 space-y-4 ml-6 inline-block font-semibold text-gray-900 dark:text-gray-50 md:text-6xl xs:text-lg">
            <div>{t('appAboutTitle.subTitle1')}</div>
          </span>
          <p className="font-thin text-md ml-6">
            {t('appAboutTitle.subTitle2')}
          </p>
          <div className="flex justify-end items-center max-w-lg ml-6 mt-4">
            <div>
              <span className="text-5xl text-green-400 font-medium">
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
            <Button
              className="ml-5 mt-7 border-solid border-2 border-green-300"
              variant="ghost"
              size="md"
            >
              {t('appAboutTitle.aboutButton1')}
            </Button>
          </Link>
        </div>
        <img
          src="https://i.ibb.co/c19gc9K/A-7.jpg"
          alt="LatestMusics"
          className="block w-full h-full object-fit overflow-hidden border-double border-4 border-gray-300"
        />
      </div>
    </div>
  );
};

export default AboutSection;
