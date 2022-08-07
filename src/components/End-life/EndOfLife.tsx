import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Animation from '../../shared/Animation/Animation';
import { Button } from '../../shared/Button';
import NcImage from '../../shared/NcImage/NcImage';

const EndOfLife: React.FC = () => {
  const { t, i18n } = useTranslation(['endOfLife']);
  return (
    <div className="mb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 xs:grid-cols-1 mt-10">
        <Animation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <div className="mt-16">
            <span className="mb-4 space-y-5 ml-6 inline-block font-semibold main-text md:text-5xl text-2xl">
              <div
                className={
                  i18n.language === 'en' ? 'en-font ' : 'bd-font-title'
                }
              >
                {t('appEndOfLife.title')}
              </div>
            </span>
            <p
              className={
                i18n.language === 'en'
                  ? 'en-font font-light text-lg ml-6'
                  : 'bd-font-subTitle font-light text-lg ml-6 mt-3'
              }
            >
              {t('appEndOfLife.subTitle1')}
            </p>
            <p
              className={
                i18n.language === 'en'
                  ? 'en-font font-light text-lg ml-6'
                  : 'bd-font-subTitle font-light text-lg ml-6'
              }
            >
              {t('appEndOfLife.subTitle2')}
            </p>
            <Link to="/more-about">
              <Button
                variant="outline"
                size="md"
                className={
                  i18n.language === 'en'
                    ? 'en-font ml-5 mt-7'
                    : 'bd-font-subTitle ml-5 mt-7'
                }
              >
                {t('appEndOfLife.button')}
              </Button>
            </Link>
          </div>
        </Animation>
        <Animation animateIn="fadeIn">
          <NcImage
            src="https://res.cloudinary.com/arifscloud/image/upload/v1657362445/alf-images/A-21_eo68lk.jpg"
            alt="About_image"
            className="mt-20 rounded-md object-cover object-center transform transition-all hover:scale-105"
          />
        </Animation>
      </div>
    </div>
  );
};

export default EndOfLife;
