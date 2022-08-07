import React, { HTMLAttributes, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import NextPrev from '../NextPrev/NextPrev';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = 'Discover the most outstanding articles in all topics of life. ',
  className = 'mb-10 md:mb-12 main-text dark:text-neutral-50',
  isCenter = false,
  hasNextPrev = false,
  ...args
}) => {
  const { i18n } = useTranslation(['video']);
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={
          isCenter ? 'text-center w-full max-w-2xl mx-auto mb-4' : 'max-w-2xl'
        }
      >
        <h2
          className={
            i18n.language === 'en'
              ? 'en-font text-3xl md:text-4xl font-semibold'
              : 'bd-font-title text-3xl md:text-4xl font-semibold'
          }
          {...args}
        >
          {children || `Section Heading`}
        </h2>
        {desc && (
          <span
            className={
              i18n.language === 'en'
                ? 'en-font mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500'
                : 'bd-font-subTitle mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500'
            }
          >
            {desc}
          </span>
        )}
      </div>
      {hasNextPrev && !isCenter && (
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <NextPrev onClickNext={() => {}} onClickPrev={() => {}} />
        </div>
      )}
    </div>
  );
};

export default Heading;
