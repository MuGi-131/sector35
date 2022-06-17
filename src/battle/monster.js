import { motion } from 'framer-motion';
import { useState } from 'react';

export function Monster() {
  const variants = {
    hit: { scale: [0.8, 0.9, 0.8] },
    unhit: { scale: [0.8, 0.9, 0.8] },
    health1: { scale: [0, 1, 1, 1, 1, 1, 0], y: [10, -20] },
    health2: { scale: [0, 1, 0], y: [0, -20] },
  };
  const [hit, setHit] = useState(true);
  const [health, setHealth] = useState(true);
  console.log(hit);
  return (
    <div className="relative">
      <motion.div
        animate={hit ? 'health1' : 'health2'}
        variants={variants}
        transition={{ duration: 1, delay: 0.3 }}
        onClick={() => setHealth(!health)}
        className="text-white absolute left-[50%] top-[25%] font-bold text-yellow-300"
      >
        1100
      </motion.div>
      <motion.div
        onClick={() => setHit(!hit)}
        animate={hit ? 'hit' : 'unhit'}
        variants={variants}
        className="flex p-[40px]"
      >
        <img
          className="cursor-pointer m-auto"
          src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
        />
      </motion.div>
    </div>
  );
}
