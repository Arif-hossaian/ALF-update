import { FC } from 'react';
import Lottie from 'lottie-react';

const ImageAnimation: FC<any> = ({ animationData }) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default ImageAnimation;
