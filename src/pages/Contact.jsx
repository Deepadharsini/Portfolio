import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="card p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4">
              <FaEnvelope className="w-6 h-6 text-white/70" />
              <a href="mailto:deepadharsinik@gmail.com" className="text-white/70 hover:text-white transition-colors duration-300">
                deepadharsinik@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <FaPhone className="w-6 h-6 text-white/70" />
              <a href="tel:+919944421912" className="text-white/70 hover:text-white transition-colors duration-300">
                +91 9944421912
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-white/70" />
              <span className="text-white/70">
                Mettupalayam, Coimbatore - 641301
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
