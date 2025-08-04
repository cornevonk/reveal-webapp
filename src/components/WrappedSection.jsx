import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function WrappedSection({ id, bgGradient = '', children, viewport, ...rest }) {
  return (
    <Motion.section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center ${bgGradient}`}
      viewport={{ once: true, ...viewport }}
      {...rest}
    >
      {children}
    </Motion.section>
  );
}

