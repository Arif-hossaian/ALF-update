import React from 'react';
import clsx from 'clsx';

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      className={clsx('fill-inherit', className)}
      {...otherProps}
    >
      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
    </svg>
  );
}
export default ChevronRightIcon;
