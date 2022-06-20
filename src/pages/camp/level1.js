import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Level1() {
  const [battle, setBattle] = useState(false);
  const [sov, setSov] = useState(false);
  const [storage, setStorage] = useState(false);
  const [event, setEvent] = useState(false);
  const [home, setHome] = useState(false);
  const [cave, setCave] = useState(false);
  const [gate, setGate] = useState(false);

  const variants = {
    hit: { scale: [0.8, 0.9, 0.8] },
    unhit: { scale: [0.8, 0.9, 0.8] },
    health1: { scale: [0, 1, 1, 1, 1, 1, 0], y: [10, -20] },
    health2: { scale: [0, 1, 0], y: [0, -20] },
  };

  return (
    <div className="w-full h-full relative">
      <Link href="/main">
        <div className="text-white w-[220px] absolute top-[70px] left-[130px]">
          <motion.div
            onClick={() => {
              setBattle(!battle);
            }}
            animate={battle ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center"
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/battle.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            Battle
          </motion.div>
        </div>
      </Link>
      <Link href="/boss">
        <div className="text-white absolute w-[150px] top-[-30px] right-[140px]">
          <motion.div
            onClick={() => {
              setCave(!cave);
            }}
            animate={cave ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center "
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/cave.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            Dark Cave
          </motion.div>
        </div>
      </Link>
      <Link href="/gate">
        <div className="text-white absolute w-[220px] top-[-20px] right-[-30px]">
          <motion.div
            onClick={() => {
              setGate(!gate);
            }}
            animate={gate ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center "
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/gate.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            GATE
          </motion.div>
        </div>
      </Link>
      <Link href="/camp">
        <div className="text-white absolute w-[300px] top-[15px] left-[400px]">
          <motion.div
            onClick={() => {
              setHome(!home);
            }}
            animate={home ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center "
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/home.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            Home
          </motion.div>
        </div>
      </Link>
      <Link href="/storage">
        <div className="text-white absolute w-[130px] bottom-0 right-[70px]">
          <motion.div
            onClick={() => {
              setStorage(!storage);
            }}
            animate={storage ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center "
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/storage.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            Storage
          </motion.div>
        </div>
      </Link>
      <Link href="/event">
        <div className="text-white absolute w-[320px] bottom-[-20px] left-[250px]">
          <motion.div
            onClick={() => {
              setEvent(!event);
            }}
            animate={event ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center "
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/event.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            Event Hall
          </motion.div>
        </div>
      </Link>
      <Link href="/sov">
        <div className="text-white absolute w-[220px] bottom-[-10px] right-[120px]">
          <motion.div
            onClick={() => {
              setSov(!sov);
            }}
            animate={sov ? "hit" : "unhit"}
            variants={variants}
            className="flex flex-col text-center "
          >
            <img
              className="cursor-[url(assets/cursor.png),_pointer] m-auto"
              src="assets/building/sov.png"
              // src="https://cdn.discordapp.com/attachments/985009706324066385/985374146995306536/unknown.png"
            />
            Crystal Factory
          </motion.div>
        </div>
      </Link>
    </div>
  );
}
