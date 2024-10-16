import React from 'react';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Feature = ({ icon, text }) => {
  return (
    <motion.li
      className="px-5 my-10 sm:my-5 md:mx-6 text-center flex items-baseline justify-center flex-col max-w-[550px] md:max-w-[33.3%] min-h-[300px] sm:max-h-[310px]"
      variants={childVariant}
    >
      <span className="mb-8">{icon}</span>
      <p className="text-lg">{text}</p>
    </motion.li>
  );
};

export default Feature;
