/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-white p-8 rounded-2xl shadow-card">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-4 font-poppins">
          <p className="text-dim text-[18px]">
            I built and shipped Ndotoni and Ndotoni Stays from the ground up,
            and I'm an SDE at Amazon. If you want to talk about a role,
            a collaboration, or the products, I'd love to hear from you.
          </p>
          <a
            href="mailto:makoye224@gmail.com"
            className="text-brand text-[22px] font-semibold hover:underline">
            makoye224@gmail.com
          </a>
          <a
            href="https://github.com/makoye224"
            target="_blank"
            rel="noopener noreferrer"
            className="text-eerieBlack text-[16px] font-medium hover:text-brand hover:underline">
            github.com/makoye224
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
