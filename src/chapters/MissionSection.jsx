import React from 'react';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Waarom deze rol ertoe doet
      </motion.h2>

      <motion.p
        className="text-xl md:text-2xl text-neutral-800 font-light text-center max-w-3xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Onze AI-strategie heeft bruggenbouwers nodig. Jij maakt complexe technologie
        begrijpelijk, schaalbaar en menselijk.
      </motion.p>

      {/* Parallax-achtergrondvisual volgt hier */}
    </section>
  );
}
