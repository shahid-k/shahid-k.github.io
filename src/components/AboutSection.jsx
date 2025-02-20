'use client';

import { useEffect, useRef } from 'react';
import PcModelCanvas from './canvas/PcModelCanvas';
import SectionHead from './SectionHead';
import TextHighlight from './TextHighlight';
import { motion, useAnimation, useInView } from 'motion/react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start('visible');
    }
  }, [isInView, animationControl]);

  return (
    <section id='about' className='text-white scroll-mt-[80px] min-h-[60vh]'>
      <SectionHead>About Me</SectionHead>
      <div className="flex flex-col-reverse justify-center gap-6 lg:flex-row">
        <div className='h-[30vh] lg:h-auto lg:w-[40%]'>
          <PcModelCanvas />
        </div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: '100%' },
            visible: { opacity: 1, x: 0 }
          }}
          initial='hidden'
          animate={animationControl}
          transition={{ duration: 0.5, x: { type: "spring", visualDuration: 0.4, bounce: 0.5 } }}
          className='lg:w-[60%] md:text-[1.35rem] text-justify'
        >
          <div>
            I specialize in <TextHighlight>Node.js</TextHighlight>, utilizing <TextHighlight>Express</TextHighlight> for backend APIs and <TextHighlight>React</TextHighlight> for frontend UI. <TextHighlight>PostgreSQL</TextHighlight> and <TextHighlight>MongoDB</TextHighlight> are my go-to SQL and NoSQL databases, but I&apos;m open to exploring others as well. I’m always keen on <TextHighlight>learning new technologies</TextHighlight> and falling in love with the <TextHighlight>process of mastering</TextHighlight> them.
          </div>
          <div>
            I'm cloud certified from <TextHighlight>AWS</TextHighlight> and <TextHighlight>GCP</TextHighlight> and always have a Cloud-First Development approach, mastering the services provided.
          </div>
          <div>
            When I&apos;m not coding, I love <TextHighlight>Surfing YouTube</TextHighlight>, always looking for content on gaming, PC building, and system customization. I also enjoy solving <TextHighlight> Rubik&apos;s cubes</TextHighlight> and sometimes tackling <TextHighlight>Sudoku</TextHighlight>.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;