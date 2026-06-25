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
            <div className="w-16 h-16 rounded-full bg-white border border-brand/20 shadow-md flex items-center justify-center p-3">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
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

export default SectionWrapper(Tech, '');
