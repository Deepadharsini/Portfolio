import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const skills = [
  { name: 'MongoDB', level: 85 },
  { name: 'Express.js', level: 80 },
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'C', level: 90 },
  { name: 'JAVA', level: 80 },
  { name: 'Firebase', level: 75 },
  { name: 'AWS', level: 60 },
  { name: 'Git/Github', level: 85 },
  { name: 'Docker', level: 85 },
];

const Skills = () => (
  <SectionWrapper id="skills">
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
        My Skills
      </motion.h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-white/90">{skill.name}</span>
              <span className="text-sm text-white/60">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Skills;
