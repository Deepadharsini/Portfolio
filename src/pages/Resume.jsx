import { motion } from 'framer-motion';

const Resume = () => (
  <motion.div
    className="p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h2 className="text-3xl font-bold mb-4">Resume</h2>
    <p>
      [Provide a link to download your resume or embed it here.]
    </p>
  </motion.div>
);

export default Resume;
