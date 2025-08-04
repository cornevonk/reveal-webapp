import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function GrowthSection() {
  const timeline = [
    ['Maand 3', 'Je AI-pipelines draaien. Je hebt processen gestroomlijnd en vertrouwen opgebouwd in het team.'],
    ['Maand 6', 'Je koppelt de AI-inzichten direct aan klantfeedback. Jouw werk maakt zichtbaar verschil.'],
    ['Maand 12', 'Je leidt een transformatie-initiatief. Het team werkt op jouw stack.'],
    ['Maand 24', 'Je rol is uitgegroeid tot thought leader binnen Cum Laude.'],
  ];

  return (
    <section id="growth" className="min-h-screen bg-gray-50 px-4 py-20 flex flex-col items-center justify-center text-center">
      <Motion.h2 className="text-4xl md:text-5xl font-semibold text-center mb-8">
        De impact die jij maakt
      </Motion.h2>
      <div className="max-w-3xl mx-auto space-y-16">
        {timeline.map(([month, text], i) => (
          <Motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: i * 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-2">{month}</h4>
            <p className="text-neutral-600 leading-relaxed">{text}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
