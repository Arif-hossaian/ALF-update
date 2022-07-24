import React from 'react';
import { useTranslation } from 'react-i18next';
import Animation from '../Animation/Animation';
import Accordion from './Accordion';

const AllAccordion: React.FC = () => {
  const { t } = useTranslation(['workingLife']);
  return (
    <>
      <Animation animateIn="fadeInLeft" delay={0.2 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfFirstAccordion')}
          content1={t('appWorkingLife.subTitleOfFirstAccordion1')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.4 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfSecAccordion')}
          content1={t('appWorkingLife.subTitleOfSecAccordion')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.6 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfThirdAccordion')}
          content1={t('appWorkingLife.subTitleOfThirdAccordion')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.7 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfFirstAccordion')}
          content1={t('appWorkingLife.subTitleOfFirstAccordion1')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.8 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfFourthAccordion')}
          content1={t('appWorkingLife.subTitleOfFourthAccordion')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.9 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfFifthAccordion')}
          content1={t('appWorkingLife.subTitleOfFifthAccordion')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.1 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfSixthAccordion')}
          content1={t('appWorkingLife.subTitleOfSixthAccordion1')}
          content2={t('appWorkingLife.subTitleOfSixthAccordion2')}
        />
      </Animation>

      <Animation animateIn="fadeInLeft" delay={0.11 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfSeventhAccordion')}
          content1={t('appWorkingLife.subTitleOfSeventhAccordion')}
        />
      </Animation>
      <Animation animateIn="fadeInLeft" delay={0.12 * 1000}>
        <Accordion
          title={t('appWorkingLife.titleOfEighthAccordion')}
          content1={t('appWorkingLife.subTitleOfEighthAccordion1')}
          content2={t('appWorkingLife.subTitleOfEighthAccordion2')}
        />
      </Animation>
    </>
  );
};

export default AllAccordion;
