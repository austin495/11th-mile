'use client';
import { motion, useTime, useTransform, wrap } from 'framer-motion';
import { FC, ReactNode, useState } from 'react';

export const Marquee: FC<{
  children: ReactNode;
  gap?: number;
  direction?: -1 | 1;
  speed?: number;
}> = ({ children, gap = 0, direction = -1, speed = 100 }) => {
  const time = useTime();
  const x = useTransform(
    time,
    (v) => `${wrap(0, -50, direction * (v / speed))}%`
  );

  return (
    <div className="w-screen overflow-hidden flex flex-nowrap whitespace-nowrap">
      <motion.div style={{ x }} className="flex flex-nowrap whitespace-nowrap">
        <span style={{ marginRight: gap }} className={`block`}>
          {children}
        </span>
        <span style={{ marginRight: gap }} className={`block`}>
          {children}
        </span>
      </motion.div>
    </div>
  );
};