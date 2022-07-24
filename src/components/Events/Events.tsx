import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationIcon from '../../icons/LocationIcon';
import MusicIcon from '../../icons/MusicIcon';
import TimeIcon from '../../icons/TimeIcon';
import Animation from '../../shared/Animation/Animation';
import { Button } from '../../shared/Button';
import Card from '../../shared/Card/Card';

const Events: React.FC = () => {
  const { t } = useTranslation(['event']);
  return (
    <div className="mt-16 mx-auto max-w-screen-lg relative">
      <div className="space-y-4">
        <div className="flex justify-center items-center">
          <MusicIcon />
        </div>
        <Animation animateIn="fadeInUp">
          <div className="text-5xl font-bold text-center text-green-400">
            {t('appEventTitle.title')}
          </div>
        </Animation>

        <p className="text-gray-400 text-center">
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
            <div className="ml-auto">
              <div className="md:flex md:justify-between items-center xs:flex xs:justify-center">
                <div>
                  <LocationIcon />
                </div>
                <p className="text-sm font-light">Dhaka, Bangladesh</p>
              </div>
              <div className="md:flex md:justify-between items-center xs:flex xs:justify-center">
                <div>
                  <TimeIcon />
                </div>
                <p className="text-sm font-light ml-2">lorem lorem lorem lor</p>
              </div>
            </div>
            <div className="ml-auto mb-auto">
              <Button variant="ghost" size="md">
                Read More
                <ChevronRightIcon className="ml-2 h-5 w-5 fill-green-500" />
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
            <div className="ml-auto">
              <div className="md:flex md:justify-between items-center xs:flex xs:justify-center">
                <LocationIcon />

                <p className="text-sm font-light">Dhaka, Bangladesh</p>
              </div>
              <div className="md:flex md:justify-between items-center xs:flex xs:justify-center">
                <TimeIcon />

                <p className="text-sm font-light ml-2">
                  {' '}
                  lorem lorem lorem lor
                </p>
              </div>
            </div>
            <div className="ml-auto mb-auto">
              <Button variant="ghost" size="md">
                Read More
                <ChevronRightIcon className="ml-2 h-5 w-5 fill-green-500" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Events;
