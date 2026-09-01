/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  name,
  description,
  image,
  repo,
  demo,
  appStore,
  playStore,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
      className="relative flex flex-col w-full min-h-[420px] rounded-[24px] card-shadow overflow-hidden">
      <div className="relative h-[220px] w-full">
        <img
          src={image}
          alt={name}
          className="absolute w-full h-full object-cover"
        />
        <div
          onClick={() => window.open(repo, '_blank')}
          className="absolute top-3 right-3 bg-brand sm:w-11 sm:h-11 w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer
            sm:opacity-[0.9] opacity-[0.8]">
          <img
            src={github}
            alt="source code"
            className="w-4/5 h-4/5 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-8 bg-[#111827]">
        <h2 className="font-bold sm:text-[32px] text-[24px] text-white uppercase font-beckman">
          {name}
        </h2>
        <p className="text-gray-300 sm:text-[14px] text-[12px] sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] mt-2">
          {description}
        </p>
        <button
          className="live-demo flex justify-between
          sm:text-[16px] text-[14px] text-white
          font-bold font-beckman items-center py-5 pl-2 pr-3
          whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px]
          w-[125px] h-[46px] rounded-[10px] glassmorphism
          mt-auto pt-[22px] hover:bg-brandDark
          hover:text-white transition duration-[0.2s]
          ease-in-out"
          onClick={() => window.open(demo, '_blank')}
          onMouseOver={(e) => {
            e.currentTarget
              .querySelector('img')
              .setAttribute('src', pineappleHover);
          }}
          onMouseOut={(e) => {
            e.currentTarget
              .querySelector('img')
              .setAttribute('src', pineapple);
          }}>
          <img
            src={pineapple}
            alt="pineapple"
            className="sm:w-[34px] sm:h-[34px]
              w-[30px] h-[30px] object-contain"
          />
          VISIT SITE
        </button>

        {(appStore || playStore) && (
          <div className="flex gap-4 mt-3 font-poppins">
            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-[13px] hover:text-brand hover:underline">
                App Store
              </a>
            )}
            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-[13px] hover:text-brand hover:underline">
                Google Play
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-dim text-[18px] max-w-3xl leading-[30px]">
          I founded and built{' '}
          <a href="https://www.ndotoni.com" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Ndotoni</a>
          {' '}and{' '}
          <a href="https://www.ndotonistays.com" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Ndotoni Stays</a>
          {' '}from the ground up, full-stack platforms serving the Tanzanian rental market. These are live services with real users, not demos.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] grid lg:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
