import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

export default function ScrollButton({ targetId, direction = 'down', children = 'Volgende' }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const Icon = direction === 'up' ? FaArrowUp : FaArrowDown;

  return (
    <Motion.button
      type="button"
      onClick={handleClick}
      className="mt-10 flex items-center gap-2 text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 mx-auto"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {children}
      <Icon />
    </Motion.button>
  );
}
