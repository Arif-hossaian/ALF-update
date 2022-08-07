import React from 'react';
import { useTranslation } from 'react-i18next';
import AllAccordion from '../../shared/Accordion/AllAccordion';
import Animation from '../../shared/Animation/Animation';

const WorkingLife: React.FC = () => {
  const { t, i18n } = useTranslation(['workingLife']);
  return (
    <div className="mt-20 mx-auto max-w-screen-lg">
      <Animation animateIn="fadeInUp">
        <h2
          className={
            i18n.language === 'en'
              ? 'en-font text-center main-text md:text-5xl text-2xl'
              : 'bd-font-title text-center main-text md:text-5xl text-2xl'
          }
        >
          {t('appWorkingLife.title')}
        </h2>
      </Animation>
      <div className="space-y-2 mt-8">
        <AllAccordion />
      </div>
    </div>
  );
};

export default WorkingLife;
