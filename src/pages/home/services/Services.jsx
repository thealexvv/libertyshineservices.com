import React from 'react';
import classes from './Services.module.css';
import Layout from '../../../components/layout/Layout';

import { services } from './items';
import { motion } from 'framer-motion';
import Service from './Service';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Services = () => {
  return (
    <section className="w-full min-h-screen" id="services">
      <Layout
        outerDivClasses={classes.background}
        innerDivClasses={classes.backgroundLayer}
      >
        <h2 className="text-3xl font-bold text-center mb-14">OUR SERVICES</h2>

        <motion.ul
          className="flex flex-col md:flex-row items-center justify-center gap-14 w-full min-h-screen flex-wrap"
          variants={{ container }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <Service
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </motion.ul>
      </Layout>
    </section>
  );
};

export default Services;
