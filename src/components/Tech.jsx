import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
            className="w-24 h-24 flex flex-col items-center justify-center gap-2">
            <div
              className="w-16 h-16 rounded-full shadow-md flex items-center justify-center"
              style={{ backgroundColor: technology.color }}>
              <span className="text-[14px] font-bold font-beckman text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                {technology.short}
              </span>
            </div>
            <p className="text-dim text-[12px] font-medium text-center">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
