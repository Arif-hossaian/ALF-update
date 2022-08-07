import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronDownIcon from '../../icons/ChevronDownIcon';
import ChevronUpIcon from '../../icons/ChevronUpIcon';
type AccordionProps = {
  title?: string;
  content1?: string;
  content2?: string;
};
const Accordion: React.FC<AccordionProps> = ({ title, content1, content2 }) => {
  const { i18n } = useTranslation(['workingLife']);
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef<string | number | any>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
  };
  return (
    <div onClick={HandleOpening} className="border border-gray-300 rounded-lg">
      <div className={' p-4 flex justify-between text-black'}>
        <h4
          className={
            i18n.language === 'en'
              ? 'en-font font-semibold'
              : 'bd-font-title font-semibold'
          }
        >
          {title}
        </h4>
        {isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-100 overflow-hidden transition-all duration-200"
      >
        <p
          className={
            i18n.language === 'en' ? 'en-font p-4' : 'bd-font-subTitle p-4'
          }
        >
          {content1}
        </p>
        <p
          className={
            i18n.language === 'en' ? 'en-font p-4' : 'bd-font-subTitle p-4'
          }
        >
          {content2}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
