'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BackgroundAnimation() {

  return (
    <motion.div
      initial={{ x: '100%', }}
      animate={{ x: 0, }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #6b7280, #1e3a8a, #4c1d95)',
        zIndex: -1,
      }}
    />
  );
}