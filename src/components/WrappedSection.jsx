import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function WrappedSection({ id, gradientClass = '', animation = {}, children }) {
  const baseClasses = 'min-h-screen flex flex-col items-center justify-center text-center px-4 py-20';
  const gradient = gradientClass ? ` bg-gradient-to-br ${gradientClass}` : '';
  return (
    <Motion.section id={id} className={`${baseClasses}${gradient}`} {...animation}>
      {children}
    </Motion.section>
  );
}
