// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full rounded-[20px] shadow-card">
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-brandLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-brand/20 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-eerieBlack text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-dim text-[18px] max-w-3xl leading-[30px]">
       Software Engineer at Amazon in Seattle. Founder of{' '}
       <a href="https://www.ndotoni.com" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Ndotoni</a>
       {' '}— Tanzania's verified property rental platform — and{' '}
       <a href="https://www.ndotonistays.com" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Ndotoni Stays</a>
       , a short-term rental and event space booking platform. I build with Java, TypeScript, React, Next.js, AWS, and React Native.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
