import React, { memo } from 'react';
import clsx from 'clsx';

const Card: React.FC<{ className?: string; children?: any }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Card);
