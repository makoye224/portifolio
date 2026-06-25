/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#FFFFFF',
      color: '#111827',
      boxShadow:
        'rgba(29, 191, 83, 0.08) 0px 10px 15px -3px, rgba(0, 0, 0, 0.03) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #1DBF53',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-eerieBlack text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-brand text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.link ? (
          <a href={experience.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {experience.company_name}
          </a>
        ) : (
          experience.company_name
        )}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#FFFFFF',
              color: '#111827',
              boxShadow:
                'rgba(29, 191, 83, 0.08) 0px 10px 15px -3px, rgba(0, 0, 0, 0.03) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #1DBF53',
            }}
            iconStyle={{ background: '#1DBF53' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-white 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-brand 
              sm:mt-[22px] mt-[16px] hover:bg-brandDark 
              hover:text-white transition duration-[0.2s] 
              ease-in-out"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/15VMIqS8dGyTUNeT5qUWPpRlt7ajuA6R4/view?usp=sharing', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
