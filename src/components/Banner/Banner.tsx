import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Animation from '../../shared/Animation/Animation';
import { Button } from '../../shared/Button';
import BannerImages from './BannerImages';

const Banner: React.FC = () => {
  const { t, i18n } = useTranslation(['banner']);
  return (
    <section className="mt-20 mx-auto max-w-screen-xl sm:px-8">
      <div id="hero" className="flex flex-col lg:flex-row lg:items-center">
        {/* <Animation animateIn="fadeInUp" delay={0.2 * 1000}></Animation> */}
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-xl lg:text-left">
          <Animation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h2
              className={
                i18n.language === 'en'
                  ? 'en-font relative text-4xl font-semibold text-[#F95820]'
                  : 'bd-font-title relative text-4xl font-semibold text-[#F95820]'
              }
            >
              {t('appBanner.title')}
            </h2>

            <p
              className={
                i18n.language === 'en'
                  ? 'en-font mt-6 break-words text-lg'
                  : 'bd-font-subTitle mt-6 break-words text-lg'
              }
            >
              {t('appBanner.subTitle1')}
            </p>
            <div className="mt-8">
              <Link to="/more-about">
                <Button variant="outline" size="md">
                  {t('appBanner.subButton1')}
                </Button>
              </Link>
            </div>
          </Animation>
        </div>
        <Animation animateIn="fadeIn">
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-8 xl:-right-20 mt-4 md:mr-12 lg:mr-12">
            <BannerImages />
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default Banner;

//ref={element as unknown as React.RefObject<HTMLDivElement>}
