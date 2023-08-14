import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

// icons
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import Countup from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={'1'} />,
          <FaCss3 key={'2'} />,
          <FaJs key={'3'} />,
          <FaReact key={'4'} />,
          <SiNextdotjs key={'5'} />,
          <SiFramer key={'6'} />,
          <FaWordpress key={'7'} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={'8'} />,
          <SiAdobexd key={'9'} />,
          <SiAdobephotoshop key={'10'} />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Freelance Fullstack Web Developer',
        stage: 'Since 2021',
      },
      {
        title: 'Freelance Frontend Developer',
        stage: '2018 -',
      },
      {
        title: 'UX/UI Designer - AkWill Nigeria Ltd',
        stage: '2013 - 2017',
      },
      {
        title: 'Online Dynamix Nigeria',
        stage: '2009 - 2011',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Responsive Web Development - Freecodecamp Academy',
        stage: '2023',
      },
      {
        title: 'Certified Web Developer - Online Dynamix Academy ',
        stage: '2009',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div
      className="h-full bg-primary/30 py-32 text-center
    xl:text-left"
    >
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col
      items-center xl:flex-row gap-x-6"
      >
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-0 
          px-2 xl:px-0"
          >
            Collaborated on digital products for businesses and consumer use, as
            well as guided students in their journey into web development.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex xl:gap-x-6">
              <div>
                {/* experience */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0
              after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <Countup start={0} end={10} duration={7} /> +
                  </div>
                  <div
                    className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                  >
                    Years of experience
                  </div>
                </div>
              </div>
              <div>
                {/* open-source projects */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0
              after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <Countup start={0} end={7} duration={10} /> +
                  </div>
                  <div
                    className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                  >
                    Open source projects
                  </div>
                </div>
              </div>
              <div>
                {/* satisfied clients */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0
              after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <Countup start={0} end={115} duration={8} /> +
                  </div>
                  <div
                    className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                  >
                    Satisfied clients
                  </div>
                </div>
              </div>
              <div>
                {/* Students */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0
              after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <Countup start={0} end={35} duration={5} /> +
                  </div>
                  <div
                    className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                  >
                    Trained students
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                      after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 
          xl:gap-y-4 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={index} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
