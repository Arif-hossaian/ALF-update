import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationIcon from '../../icons/LocationIcon';
import Animation from '../../shared/Animation/Animation';
import ImageAnimation from '../../shared/Animation/ImageAnimation';
import { Button } from '../../shared/Button';
import Card from '../../shared/Card/Card';
import MusicLogo from '../../icons/lottieflow-multimedia-8-8-f95820-easey.json';

const Events: React.FC = () => {
  const { t, i18n } = useTranslation(['event']);
  return (
    <div className="mt-16 mx-auto max-w-screen-lg relative">
      <div className="space-y-4">
        <div className="flex justify-center items-center">
          <div className="text-center w-20 h-20">
            <ImageAnimation animationData={MusicLogo} />
          </div>
        </div>
        <Animation animateIn="fadeInUp">
          <div
            className={
              i18n.language === 'en'
                ? 'en-font text-5xl font-bold text-center main-text'
                : 'bd-font-title text-5xl font-bold text-center main-text'
            }
          >
            {t('appEventTitle.title')}
          </div>
        </Animation>

        <p
          className={
            i18n.language === 'en'
              ? 'en-font text-gray-400 text-center'
              : 'bd-font-subTitle text-gray-400 text-center'
          }
        >
          {t('appEventTitle.subTitle')}
        </p>
        <Card className="flex h-full flex-col justify-between mt-4">
          <div className="md:flex md:justify-between items-center xs:flex-col xs:items-center">
            <div>
              <h3 className="md:text-3xl sm:text-xl font-semibold text-[#000000]">
                23
              </h3>
              <span className="text-sm font-medium text-gray-500">Mar</span>
            </div>
            <div className="ml-auto mb-auto">
              <h3 className="md:text-2xl sm:text-lg text-[#000000]">
                RockParty with DJ
              </h3>
              <span className="text-sm font-light text-gray-500">
                lorem lorem lorem lorem
              </span>
            </div>

            <div className="ml-auto flex items-start md:justify-center gap-1.5 sm:justify-start">
              <LocationIcon />

              <address className="-mt-0.5 not-italic text-gray-700">
                Dhaka, Bangladesh
              </address>
            </div>
            <div className="ml-auto mb-auto">
              <Button variant="outline" size="md">
                Read More
                <ChevronRightIcon className="ml-2 h-5 w-5 fill-[#FEF027]" />
              </Button>
            </div>
          </div>
        </Card>
        <Card className="flex h-full flex-col justify-between mt-4">
          <div className="md:flex md:justify-between items-center xs:flex-col xs:items-center">
            <div>
              <h3 className="md:text-3xl sm:text-xl font-semibold text-[#000000]">
                23
              </h3>
              <span className="text-sm font-medium text-gray-500">Mar</span>
            </div>
            <div className="ml-auto mb-auto">
              <h3 className="md:text-2xl sm:text-lg text-[#000000]">
                RockParty with DJ
              </h3>
              <span className="text-sm font-light text-gray-500">
                lorem lorem lorem lorem
              </span>
            </div>
            <div className="ml-auto flex items-start md:justify-center gap-1.5 sm:justify-start">
              <LocationIcon />

              <address className="-mt-0.5 not-italic text-gray-700">
                Dhaka, Bangladesh
              </address>
            </div>
            <div className="ml-auto mb-auto">
              <Button variant="outline" size="md">
                Read More
                <ChevronRightIcon className="ml-2 h-5 w-5 fill-[#FEF027]" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Events;
