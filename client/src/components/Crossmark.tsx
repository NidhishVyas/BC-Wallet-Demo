import { motion } from 'framer-motion';
import React from 'react';

import { fadeX } from '../FramerAnimations';

export interface Props {
  colorCircle?: string;
  colorMark?: string;
  height?: string;
}

export const CrossMark: React.FC<Props> = ({ colorCircle, colorMark, height }) => {
  return (
    <motion.svg
      variants={fadeX}
      initial="hidden"
      animate="show"
      exit="exit"
      className={`h-${height ?? 6}`}
      width="50"
      height="50"
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50.5" cy="50.5" r="50.5" fill={`${colorCircle ?? '#FF0000'}`} />
      <path
        d="M75.9831 26.1673L74.4393 24.6235C74.1882 24.3725 73.8194 24.2352 73.4709 24.2352C73.1225 24.2352 72.7537 24.3725 72.5027 24.6235L50.5003 46.6259L28.498 24.6235C28.247 24.3725 27.8782 24.2352 27.5298 24.2352C27.1813 24.2352 26.8125 24.3725 26.5615 24.6235L25.0177 26.1673C24.516 26.669 24.516 27.4533 25.0177 27.955L47.0201 49.9574L25.0177 71.9598C24.516 72.4615 24.516 73.2458 25.0177 73.7475L26.5615 75.2913C27.0632 75.793 27.8475 75.793 28.3492 75.2913L50.3516 53.2889L72.354 75.2913C72.8557 75.793 73.64 75.793 74.1417 75.2913L75.6855 73.7475C76.1872 73.2458 76.1872 72.4615 75.6855 71.9598L53.6831 49.9574L75.6855 27.955C76.1872 27.4533 76.1872 26.669 75.6831 26.1673H75.9831Z"
        fill={`${colorMark ?? '#f1f1f1'}`}
      />
    </motion.svg>
  );
};
