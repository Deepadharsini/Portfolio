import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const Home = () => (
  <SectionWrapper id="home">
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hi, I'm Deepadharsini
        </motion.h1>
        
        <motion.p 
          className="text-2xl text-white/80 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A passionate Full Stack Developer building attractive and efficient web applications
        </motion.p>
        
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn bg-white/10 text-white hover:bg-white/20"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </SectionWrapper>
)

export default Home;
