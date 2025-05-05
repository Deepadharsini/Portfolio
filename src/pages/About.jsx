import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about">
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        
        <div className="card p-8">
          <motion.h1 
            className="text-3xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Deepadharsini K
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-semibold mb-6 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Web Developer
          </motion.h2>
          
          <motion.p 
            className="text-white/70 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            As a software developer with a background in Electronics and Communication Engineering, I aim to leverage my programming expertise to build efficient, user-centric, and innovative solutions. With hands-on experience in React.js and the MERN stack, I am passionate about full-stack integration. Additionally, I am expanding my skills in DevOps practices and cloud technologies to streamline development workflows and deploy scalable applications. Eager to learn, adapt, and contribute to impactful projects in dynamic team environments.
          </motion.p>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href={import.meta.env.VITE_LINKEDIN || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                if (!import.meta.env.VITE_LINKEDIN) {
                  e.preventDefault();
                  console.error('LinkedIn URL not found');
                }
              }}
            >
              <FaLinkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href={import.meta.env.VITE_GITHUB || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                if (!import.meta.env.VITE_GITHUB) {
                  e.preventDefault();
                  console.error('GitHub URL not found');
                }
              }}
            >
              <FaGithub className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href={import.meta.env.VITE_LEETCODE || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                if (!import.meta.env.VITE_LEETCODE) {
                  e.preventDefault();
                  console.error('LeetCode URL not found');
                }
              }}
            >
              <SiLeetcode className="w-6 h-6" />
              <span>LeetCode</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
