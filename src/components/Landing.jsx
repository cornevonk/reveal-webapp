import { motion as Motion } from 'framer-motion';
import Layout from './Layout';

export default function Landing() {
  const handleClick = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true },
  };

  return (
    <Layout>
      <section className="text-center" id="landing">
        <Motion.h1 className="headline text-gradient" {...motionProps}>
          Full Stack AI Developer
        </Motion.h1>
        <Motion.p className="subheader" {...motionProps}>
          De sleutelrol in onze AI-transformatie.
        </Motion.p>
        <Motion.p className="body-text" {...motionProps}>
          Jouw 2024 Wrapped job journey start hier
        </Motion.p>
        <Motion.button
          onClick={handleClick}
          className="btn btn-primary mt-8"
          {...motionProps}
        >
          Explore my dream job
        </Motion.button>
      </section>
    </Layout>
  );
}
