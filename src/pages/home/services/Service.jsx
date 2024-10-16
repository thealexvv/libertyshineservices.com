import React from 'react';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Service = ({ icon, title, text }) => {
  return (
    <motion.li
      className="flex items-center flex-col min-h-[300px] md:min-h-[300px] max-w-[600px] md:max-w-[40%] text-center"
      variants={childVariant}
    >
      <span className="mb-5">{icon}</span>
      <h3 className="font-bold mb-5">{title}</h3>
      <p>{text}</p>
    </motion.li>
  );
};

export default Service;
