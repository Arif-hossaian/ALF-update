import React, { memo } from 'react';
import useTypingText from '../../hooks/useTypingText';

const Banner: React.FC = () => {
  const { typingText } = useTypingText('Abdul Alim', 90, 100);
  return (
    <div className="bg-gray-100 py-16 dark:bg-gray-800">
      <div className="mx-auto mt-16 max-w-screen-xl">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 space-y-4 inline-block font-bold text-gray-900 dark:text-gray-50 md:text-5xl">
              <span className="text-red-400 text-8xl">{typingText}</span>
              <div>{'Organization'}</div>
            </span>
          </h1>

          <img
            src="https://i.ibb.co/93d1DCZ/abdul-alim-removebg-preview.png"
            alt="Banner"
            className="block w-2/4 h-2/4 object-cover overflow-hidden"
          />
        </section>
      </div>
    </div>
  );
};

export default memo(Banner);
