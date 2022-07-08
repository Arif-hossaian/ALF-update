import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../../hooks/useScroll';

const Banner: React.FC = () => {
  const { t } = useTranslation(['banner']);
  const [element] = useScroll();
  return (
    <div
      className="bg-gradient-to-r from-cyan-100 to-gray-200 py-16"
      ref={element as unknown as React.RefObject<HTMLDivElement>}
    >
      <div className="mx-auto mt-5 md:max-w-screen-2xl lg:max-w-screen-2xl">
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
            className="block h-1/2 w-full object-cover overflow-hidden sm:object-cover"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
