import { useRef } from 'react';
import { motion as Motion } from 'framer-motion';

export default function Landing() {
  const sectionRef = useRef(null);

  const handleClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 text-center overflow-hidden"
      id="landing"
    >
      <Motion.div
        className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-lime-400 via-fuchsia-500 to-purple-600 rounded-full blur-3xl opacity-30 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      <Motion.div
        className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-lime-400 rounded-full blur-3xl opacity-30 -z-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      />

      <Motion.h1
        className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [0, 2, -2, 0],
          color: ['#fff', '#0f0', '#0ff', '#fff'],
        }}
        transition={{
          duration: 0.8,
          rotate: { repeat: Infinity, duration: 10 },
          color: { repeat: Infinity, duration: 10 },
        }}
      >
        Full Stack AI Developer
      </Motion.h1>

      <Motion.p
        className="text-lg md:text-xl font-light mb-2 text-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotate: [0, 2, -2, 0],
          color: ['#fff', '#0f0', '#0ff', '#fff'],
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          rotate: { repeat: Infinity, duration: 10 },
          color: { repeat: Infinity, duration: 10 },
        }}
      >
        De sleutelrol in onze AI-transformatie.
      </Motion.p>

      <Motion.p
        className="text-lg md:text-xl font-light mb-10 text-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotate: [0, 2, -2, 0],
          color: ['#fff', '#0f0', '#0ff', '#fff'],
        }}
        transition={{
          delay: 1,
          duration: 0.8,
          rotate: { repeat: Infinity, duration: 10 },
          color: { repeat: Infinity, duration: 10 },
        }}
      >
        Jouw 2024 Wrapped job journey start hier
      </Motion.p>

      <Motion.button
        onClick={handleClick}
        className="px-8 py-4 bg-gradient-to-r from-lime-400 via-fuchsia-500 to-purple-600 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 transition-transform duration-300"
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore my dream job
      </Motion.button>

      <div ref={sectionRef} className="w-full" />
    </section>
  );
}
