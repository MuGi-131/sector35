import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { damage, displayDamage } from './damage';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

export function Monster() {
  const variants = {
    hit: { scale: [0.8, 0.9, 0.8] },
    unhit: { scale: [0.8, 0.9, 0.8] },
    health1: { scale: [0, 1, 1, 1, 1, 1, 0], y: [10, -20] },
    health2: { scale: [0, 1, 0], y: [0, -20] },
  };
  const [hit, setHit] = useState(true);
  const [health, setHealth] = useState(true);
  const [count, setCount] = useState();
  var items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  function displayDamage() {
    let forms = [];
    for (let i = 0; i < count; i++) {
      forms.push(
        <motion.div
          key={i}
          animate={hit ? 'health1' : 'health2'}
          variants={variants}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={() => {
            setHealth(!health);
          }}
          className="text-white absolute left-[0] top-[20%] font-bold text-yellow-300"
        >
          1100
        </motion.div>
      );
    }
    console.log(forms);
    return forms || null;
  }

  function addDamage(temp) {
    setCount(++temp);
  }

  // useEffect(() => {
  //   // loadDataOnlyOnce(); // this will fire on every change :(
  //   let forms = [];
  //   for (let i = 0; i < count; i++) {
  //     forms.push(
  //       <motion.div
  //         key={i}
  //         animate={hit ? 'health1' : 'health2'}
  //         variants={variants}
  //         transition={{ duration: 1, delay: 0.3 }}
  //         onClick={() => {
  //           setHealth(!health);
  //         }}
  //         className="text-white absolute left-[0] top-[20%] font-bold text-yellow-300"
  //       >
  //         1100
  //       </motion.div>
  //     );
  //   }
  //   console.log(forms);
  //   return forms || null;
  // }, [count]);

  return (
    <div className="flex relative">
      <AnimatePresence>
        <motion.div
          animate={hit ? 'health1' : 'health2'}
          variants={variants}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={() => {
            setHealth(!health);
          }}
          className="text-white absolute left-[30%] top-[20%] font-bold text-yellow-300"
        >
          1100
        </motion.div>
      </AnimatePresence>
      <motion.div
        onClick={() => {
          setHit(!hit);
          // displayDamage(count);
          addDamage(count);
        }}
        animate={hit ? 'hit' : 'unhit'}
        variants={variants}
        className="flex p-[40px]"
      >
        <img
          className="cursor-[url(assets/cursor.png),_pointer] m-auto"
          src="assets/monster/1.png"
          // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
        />
      </motion.div>
    </div>
  );
}
