import React from 'react';
import { motion as Motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MissionSection() {
  return (
    <Motion.section
      id="mission"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <Motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        Waarom deze rol ertoe doet
      </Motion.h2>

      <Motion.p
        className="text-xl md:text-2xl text-neutral-800 font-light text-center max-w-3xl leading-relaxed"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        Onze AI-strategie heeft bruggenbouwers nodig. Jij maakt complexe technologie begrijpelijk, schaalbaar en menselijk.
      </Motion.p>

      {/* Parallax-achtergrondvisual volgt hier */}
    </Motion.section>
  );
}

