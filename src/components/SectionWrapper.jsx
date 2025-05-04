import { motion } from 'framer-motion'

const SectionWrapper = ({ id, children, className = '' }) => (
  <motion.section
    id={id}
    className={`min-h-screen flex items-center justify-center p-8 relative overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true, margin: '-100px' }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  </motion.section>
)

export default SectionWrapper
