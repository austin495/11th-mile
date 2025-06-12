import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Curve() {
  // Initialize paths with a fallback height for SSR
  const [initialPath, setInitialPath] = useState('');
  const [targetPath, setTargetPath] = useState('');

  useEffect(() => {
    // Access window.innerHeight only on client side
    const height = typeof window !== 'undefined' ? window.innerHeight : 1000; // Fallback height
    setInitialPath(
      `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`
    );
    setTargetPath(
      `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`
    );
  }, []);

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#191a21] stroke-0">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  );
}