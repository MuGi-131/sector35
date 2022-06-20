import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import useSound from "use-sound";
import { motion, AnimatePresence } from "framer-motion";

export function HomeLayout({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [play] = useSound("/assets/audio/hover.mp3");

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="flex flex-col content-center justify-center border-4 rounded-sm w-[1050px] h-[550px] mx-auto bg-black">
      <div className="w-full text-center text-white text-6xl tron">SECTOR 35</div>
      <div className="flex w-full h-full">
        <div className="w-full h-full relative">{children}</div>
        <audio id="player" autoPlay controls className="hidden">
          <source
            src="/assets/audio/deep-space-adventure-sci-fi-orchestra-1258.mp3"
            type="audio/mp3"
          />
        </audio>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {open && (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="flex flex-col content-center justify-center items-center>"
              BackdropProps={{
                timeout: 1000,
              }}
            >
              <motion.Box
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col cursor-pointer content-center justify-center items-center border-4 rounded-sm w-[1050px] h-[550px] mx-auto bg-black"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="m-auto tron text-center text-white"
                  onClick={handleClose}
                >
                  WELCOME TO <br />
                  <span className="text-8xl" onMouseEnter={play}>
                    SECTOR 35
                  </span>
                </motion.div>
              </motion.Box>
            </Modal>
          )}
        </AnimatePresence>
        <style jsx global>{`
          :global(.MuiButton-root) {
            letter-spacing: 0.0892857143em;
          }
          :global(html),
          :globa(body),
          :global(#__next) {
            font-family: elevon, sans-serif;
            font-weight: 700;
            font-style: normal;
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            background-color: black;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
          }
          :global(h1) {
            font-family: elevon, sans-serif;
            font-weight: 700;
            font-style: normal;
          }
        `}</style>
      </div>
    </div>
  );
}
