'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Preloader = ({ siteName = "11th Mile" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-999999 flex items-center justify-center bg-[#181818]"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            x: '100vw',
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          <motion.div
            className="text-white text-8xl font-sans font-light uppercase tracking-[5px] drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
          >
            {siteName}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;