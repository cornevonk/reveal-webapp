import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function WrappedSection({
  id,
  bgGradient = '',
  initial = 'hidden',
  whileInView = 'visible',
  variants,
  children,
}) {
  return (
    <Motion.section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center ${bgGradient}`}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </Motion.section>
  );
}
