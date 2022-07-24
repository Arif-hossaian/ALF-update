import React from 'react';
import { useTranslation } from 'react-i18next';
import AllAccordion from '../../shared/Accordion/AllAccordion';
import Animation from '../../shared/Animation/Animation';

const WorkingLife: React.FC = () => {
  const { t } = useTranslation(['workingLife']);
  return (
    <div className="mt-10 mx-auto max-w-screen-lg">
      <Animation animateIn="fadeInUp">
        <h2 className="text-center text-green-400 md:text-5xl xs:text-lg">
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
