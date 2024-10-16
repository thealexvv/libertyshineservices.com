import React from 'react';
import classes from './Home.module.css';
import MySlider from '../../ui/slider/Slider';
import WhoWeAre from './whoWeAre/WhoWeAre';
import Layout from '../../components/layout/Layout';
import Services from './services/Services';
import ContactUsForm from '../../components/contactUsForm/ContactUsForm';
import { motion } from 'framer-motion';
import { floridaTelNumber, newJerseyTelNumber } from '../../App';

const Home = () => {
  return (
    <>
      {/* Home section */}
      <Layout
        innerDivClasses={classes.backgroundLayer}
        outerDivClasses={classes.background}
      >
        <section className="mx-auto min-h-full w-5/6 py-20">
          <motion.div
            className={classes.sectionContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* Slider */}
            <MySlider />

            <motion.div
              className="flex items-center mt-24 justify-center gap-6 md:mt-18"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <a
                href="#callUs"
                className="py-3 px-4 md:px-6 min-w-20 md:min-w-32 bg-primary-200 text-white rounded-lg text-wrap transition-all hover:text-secondary-500 hover:opacity-80"
              >
                GET A FREE QUOTE
              </a>
              {/* PHONE NUMBER SHOUL BE CHANGED*/}
              <a
                href={`tel:${floridaTelNumber}`}
                className="py-3 px-4 md:px-6 min-w-20 md:min-w-32 bg-primary-200 text-white rounded-lg text-wrap transition-all hover:text-secondary-500 hover:opacity-80"
              >
                FREE CALL TO FLORIDA
              </a>
              <a
                href={`tel:${newJerseyTelNumber}`}
                className="py-3 px-4 md:px-6 min-w-20 md:min-w-32 bg-primary-200 text-white rounded-lg text-wrap transition-all hover:text-secondary-500 hover:opacity-80"
              >
                FREE CALL TO NEW JERSEY
              </a>
            </motion.div>
          </motion.div>
        </section>
      </Layout>

      {/* Who we are */}
      <WhoWeAre />

      {/* Services */}
      <Services />

      {/* Contact us form */}
      <ContactUsForm />

      {/* footer */}
    </>
  );
};

export default Home;
