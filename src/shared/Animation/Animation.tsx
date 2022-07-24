// import React from 'react';
// import { motion } from 'framer-motion';

// interface AnimationPros {
//   children: React.ReactNode;
//   className?: string;
//   variants?: any;
//   transition?: any;
// }

// const Animation: React.FC<AnimationPros> = ({
//   children,
//   variants,
//   transition,
//   className,
// }) => {
//   return (
//     <motion.div
//       className={className}
//       variants={variants}
//       transition={transition}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Animation;

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface AnimationProps {
  children: React.ReactNode;
  animateIn?: string;
  animateOut?: string;
  initiallyVisible?: boolean;
  delay?: number;
  className?: string;
}

const Animation: React.FC<AnimationProps> = ({
  children,
  animateIn,
  animateOut,
  initiallyVisible,
  delay,
  className,
}) => {
  return (
    <ScrollAnimation
      animateIn={animateIn}
      animateOut={animateOut}
      initiallyVisible={initiallyVisible}
      delay={delay}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
};

export default Animation;
