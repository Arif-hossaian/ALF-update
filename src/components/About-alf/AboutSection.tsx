import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Animation from '../../shared/Animation/Animation';
import { Button } from '../../shared/Button';
import NcImage from '../../shared/NcImage/NcImage';

const AboutSection: React.FC = () => {
  const { t } = useTranslation(['about']);
  return (
    <div className="py-16 mt-20">
      <Animation animateIn="fadeInUp">
        <h1 className="text-center text-green-400 md:text-5xl xs:text-md text-bold">
          {t('appAboutTitle.title')}
        </h1>
      </Animation>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 xs:grid-cols-1 mt-20">
        <Animation animateIn="fadeInRight" delay={0.2 * 1000}>
          <div>
            <span className="mb-4 space-y-4 ml-6 inline-block font-semibold text-gray-900 md:text-5xl xs:text-lg">
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
        </Animation>

        <NcImage
          src="https://i.ibb.co/J51gHcg/undraw-Compose-music-re-wpiw.png"
          alt="About_image"
          className="w-full mt-4 h-full object-cover image-bounce"
        />
      </div>
    </div>
  );
};

export default AboutSection;
