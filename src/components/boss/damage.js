import { motion } from 'framer-motion';

export function damage(a, b) {
  console.log('yess');
  const variants = {
    hit: { scale: [0.8, 0.9, 0.8] },
    unhit: { scale: [0.8, 0.9, 0.8] },
    health1: { scale: [0, 1, 1, 1, 1, 1, 0], y: [10, -20] },
    health2: { scale: [0, 1, 0], y: [0, -20] },
  };
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 1, delay: 0.3 }}
      // onClick={() => {
      //   setHealth(!health);
      // }}
      className="text-white absolute left-[0] top-[20%] font-bold text-yellow-300"
    >
      1100
    </motion.div>
  );
  return a + b;
}

export function displayForm() {
  const variants = {
    hit: { scale: [0.8, 0.9, 0.8] },
    unhit: { scale: [0.8, 0.9, 0.8] },
    health1: { scale: [0, 1, 1, 1, 1, 1, 0], y: [10, -20] },
    health2: { scale: [0, 1, 0], y: [0, -20] },
  };
  let forms = [];
  for (let i = 0; i < this.state.count; i++) {
    forms.push(
      <motion.div
        variants={variants}
        transition={{ duration: 1, delay: 0.3 }}
        // onClick={() => {
        //   setHealth(!health);
        // }}
        className="text-white absolute left-[0] top-[20%] font-bold text-yellow-300"
      >
        1100
      </motion.div>
    );
  }
  return forms || null;
}
