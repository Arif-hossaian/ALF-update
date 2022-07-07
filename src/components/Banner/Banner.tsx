import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner: React.FC = () => {
  const { t } = useTranslation(['banner']);
  return (
    <div className="bg-gray-100 py-16 dark:bg-gray-800">
      <div className="mx-auto mt-10 max-w-screen-xl">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 space-y-4 inline-block font-bold text-gray-900">
              <span className="text-green-500 md:text-8xl xs:text-5xl">
                {t('appBanner.title')}
              </span>
            </span>
          </h1>

          <img
            src="https://i.ibb.co/YdTq7wg/banner-alf.png"
            alt="Banner"
            className="block h-1/2 w-full object-cover overflow-hidden sm:object-fill"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
