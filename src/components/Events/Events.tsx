import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { memo } from 'react';
import MusicIcon from '../../icons/MusicIcon';
import { Button } from '../../shared/Button';
import Card from '../../shared/Card/Card';

const Events = () => {
  return (
    <div className="mt-10 mx-auto max-w-screen-lg">
      <div className="space-y-4">
        <div className="flex justify-center items-center">
          <MusicIcon />
        </div>
        <div className="text-7xl font-bold text-center">Upcoming Shows</div>
        <p className="text-red-400 text-center">
          COME SEE US LIVE, IT'LL BE A GOOD TIME
        </p>
        <Card className="flex h-full flex-col justify-between mt-4">
          <div className="flex items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                Events title
              </h3>
              <span className="text-sm font-medium text-gray-500">time</span>
            </div>
            <div className="ml-auto mb-auto">
              <Button variant="ghost" size="md">
                Read More
                <ChevronRightIcon className="ml-2 h-5 w-5 fill-indigo-500" />
              </Button>
            </div>
          </div>
        </Card>
        <Card className="flex h-full flex-col justify-between mt-4">
          <div className="flex items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                Events title
              </h3>
              <span className="text-sm font-medium text-gray-500">time</span>
            </div>
            <div className="ml-auto mb-auto">
              <Button variant="ghost" size="md">
                Read More
                <ChevronRightIcon className="ml-2 h-5 w-5 fill-indigo-500" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default memo(Events);
