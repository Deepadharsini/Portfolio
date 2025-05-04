import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
const projects = [
  {
    name: 'FRESHFLEET - Online Grocery Shopping Site',
    description: 'An online grocery platform tailored for health-conscious users, integrating local farmers for fresh, organic produce. Users can rate vendors based on quality and delivery, ensuring transparency and trust. Products are sortable by nutrient content based in the nutrient values. Recipes are integrated so users can add all required ingredients to the cart instantly. The platform promotes healthy living while supporting local agriculture and personalized nutrition.',
    github: import.meta.env.VITE_GITHUB_1,
    live: import.meta.env.VITE_PROJECT_1,
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    name: 'GoalKeeper-Productivity Tracker',
    description: 'Built a full-stack productivity tracker using React.js, Express, Firebase, and Redux. Implemented habit tracking, goal setting, reminders and real-time updates for seamless user experience. Integrated Firebase Authentication for secure login and Cloud Firestore for scalable data storage. Used Cloud Functions to automate backend logic and ensure efficient data handling. Added Nodemailer to send scheduled email reminders, boosting user engagement and consistency.',
    github: import.meta.env.VITE_GITHUB_2,
    live: import.meta.env.VITE_PROJECT_2,
    tags: ['React', 'Firebase', 'Redux', 'Express']
  },
  {
    name: 'Filefuse - Secure File Sharing & Expiry System',
    description: 'Built Filefuse, a secure file-sharing platform using React, Express, AWS S3, and Redis (Upstash). Enabled file uploads with expiration times, password protection, and secure sharing links. Stored files in AWS S3 and managed metadata efficiently with Upstash Redis. Implemented automatic file deletion using S3 lifecycle policies for timed cleanup. Delivered a clean, responsive UI with real-time validations to enhance user experience.',
    github: import.meta.env.VITE_GITHUB_3,
    live: import.meta.env.VITE_PROJECT_3,
    tags: ['React', 'AWS S3', 'Redis', 'Express']
  }
];

const Projects = () => (
  <SectionWrapper id="projects">
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.name}
            className="card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:text-opacity-80 transition-colors duration-300">
                {proj.name}
              </h3>
              
              <p className="text-white/70 mb-6 flex-grow">
                {proj.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Projects;
