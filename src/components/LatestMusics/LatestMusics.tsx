import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';

const LatestMusics: React.FC = () => {
  const { t } = useTranslation(['music']);
  return (
    <div className="py-16">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <img
          src="https://i.ibb.co/mR0Wb63/A-17.jpg"
          alt="LatestMusics"
          className="block w-full h-full object-fit overflow-hidden"
        />
        <h1>
          <span className="mb-4 space-y-4 ml-6 inline-block font-bold text-gray-900 dark:text-gray-50 md:text-7xl">
            <div>{t('appMusicTitle.title')}</div>
          </span>
          <p className="font-thin text-2xl ml-6">
            {t('appMusicTitle.subTitle1')}
          </p>
          <p className="font-thin text-md ml-6">
            {t('appMusicTitle.subTitle2')}
          </p>
          <Link to="/allMusics">
            <Button
              className="ml-5 mt-7 border-solid border-2 border-green-400"
              variant="ghost"
              size="md"
            >
              {t('appMusicTitle.musicButton1')}
            </Button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default memo(LatestMusics);
