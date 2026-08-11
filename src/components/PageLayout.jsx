import { motion as Motion } from 'framer-motion';
import CosmicBackground from './CosmicBackground';
import SphereNav from './SphereNav';
import './PageLayout.css';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const PageLayout = ({ children, navVariant = 'compact', className = '' }) => {
  return (
    <div className={`page-layout page-layout--${navVariant} ${className}`}>
      <CosmicBackground />
      <SphereNav variant={navVariant} />
      <Motion.main
        className="page-main"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {children}
      </Motion.main>
    </div>
  );
};

export default PageLayout;
