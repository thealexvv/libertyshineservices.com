import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { features } from './features';
import Feature from './Feature';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const WhoWeAre = () => {
  return (
    <section className="mx-auto py-16 w-5/6 text-black min-h-screen">
      <motion.div className="h-auto">
        <motion.div
          className={`flex justify-center gap-5`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <a href="https://www.instagram.com/libertyshineservices/?fbclid=IwZXh0bgNhZW0CMTEAAR0e_El-4ggXz4rkkUm8TvNFXrtfXJwm7o4TfUuPRCgo4tvF1pL2SFpgOyE_aem_zxt0HetOGovdE7LI0ctj-Q">
            <FaInstagram fill="#4b66bd" fontSize={43} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562787943239">
            <FaFacebook fill="#4b66bd" fontSize={43} />
          </a>
          <a href="https://maps.app.goo.gl/fo4wGN5DzerZ34fx9">
            <FaGoogle fill="#4b66bd" fontSize={43} />
          </a>
        </motion.div>

        <div className="text-center mt-14">
          <h2 className="text-3xl font-bold mb-16">WHO WE ARE</h2>
          <div className="m-auto max-w-[650px] mb-8 sm:mb-16">
            <h3 className="font-normal text-lg">
              At Liberty Shine Services LLC, window cleaning is our specialty.
              It's our main service and we excel at it. Window cleaning is an
              art that each of our technicians has been meticulously trained in.
              We deliver the stunning sparkle of clean windows that brightens
              your home with sunlight. We bring the light in.
            </h3>
          </div>
          {/* className="flex flex-col sm:flex items-baseline justify-evenly py-16" */}
          <div className="">
            <motion.ul
              className="flex flex-col md:flex-row items-center justify-center sm:justify-evenly w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {features.map((feature) => (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
