import { useRef } from 'react';
import { motion as Motion } from 'framer-motion';

export default function Landing() {
  const sectionRef = useRef(null);

  const handleClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center" id="landing">
      <Motion.h1
        className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Full Stack AI Developer
      </Motion.h1>

      <Motion.p
        className="text-lg md:text-xl text-neutral-500 font-light mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        De sleutelrol in onze AI-transformatie.
      </Motion.p>

      <Motion.button
        onClick={handleClick}
        className="px-8 py-4 bg-teal-500 text-white rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore my dream job
      </Motion.button>

      <div ref={sectionRef} className="w-full" />
    </section>
  );
}
