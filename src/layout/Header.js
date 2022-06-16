import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};
export function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="h-[15vh] bg-red-300 hidden md:block flex pt-[30px]">
      <div className="flex justify-center space-x-10">
        <div className="cursor-pointer">
          <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
            >
              <Box sx={style}>
                <motion.div
                  // animate={{
                  //   scale: [0, 0, 0, 0.8, 1, 1, 1, 1, 1],
                  // }}
                  animate={{ y: 0, y: 50 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-full bg-black h-[400px] relative flex"
                >
                  <div className="m-auto text-white">
                    sdklfjaklsdjfklasjdklfjasdkljf
                  </div>
                </motion.div>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="cursor-pointer">menu 2</div>
        <div className="cursor-pointer">menu 3</div>
        <div className="cursor-pointer">menu 4</div>
        <div className="cursor-pointer">menu 5</div>
      </div>
    </div>
  );
}
