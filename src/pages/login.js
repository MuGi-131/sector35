import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { LaunchAnimation } from "../components/lauchAnimation";
import useSound from "use-sound";
import { Backdrop } from "@material-ui/core";

export default function Page() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [launch, setLaunch] = useState(false);
  const [playMusic, setPlayMusic] = useState(1);
  const choosePlatform = (platform) => {
    setSelectedPlatform(platform);
  };
  const [play] = useSound("/assets/audio/hover.mp3");
  useEffect(() => {
    document.getElementById("focus_input")?.focus();
  }, []);
  setTimeout(() => {
    setPlayMusic(playMusic + 1);
  }, 500);
  useEffect(() => {
    document.getElementById("player").play();
  }, [playMusic]);
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      ></Backdrop>
      {launch ? (
        <LaunchAnimation />
      ) : (
        <div
          id="main"
          className="bg-[url('https://www.gamemarketinggenie.com/hubfs/blockchain%20background.jpg')] bg-cover h-screen text-white flex"
        >
          <audio id="player" autoPlay controls className="hidden">
            <source
              src="/assets/audio/deep-space-adventure-sci-fi-orchestra-1258.mp3"
              type="audio/mp3"
            />
          </audio>

          <div className="lg:w-3/5"></div>
          <div className="lg:w-2/5 w-full bg-black opacity-80 flex">
            <div className="m-auto">
              <div className="login-box">
                <h2 className="font-bold">Login</h2>
                {!selectedPlatform ? (
                  <form>
                    <div className="user-box">
                      <input id="focus_input" type="text" name="" required="" />
                      <label>Username</label>
                    </div>
                    <div className="user-box">
                      <input type="password" name="" required="" />
                      <label>Password</label>
                    </div>
                    <a
                      className="cursor-pointer"
                      onClick={() => setLaunch(true)}
                      onMouseEnter={play}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </a>
                  </form>
                ) : null}
                {selectedPlatform === "meta" ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => choosePlatform(null)}
                  >
                    <CloseIcon className="absolute -top-7 -right-4" />
                    <motion.img
                      animate={{
                        scale: [0, 1],
                        rotate: [0, 90, 120, 210, 300, 360],
                        borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                      }}
                      src="/assets/qrs/meta-qr.png"
                    />
                  </div>
                ) : null}
                {selectedPlatform === "mchat" ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => choosePlatform(null)}
                  >
                    <CloseIcon className="absolute -top-7 -right-4" />
                    <motion.img
                      animate={{
                        scale: [0, 1],
                        rotate: [0, 90, 120, 210, 300, 360],
                        borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                      }}
                      src="/assets/qrs/mchat-qr.png"
                    />
                  </div>
                ) : null}
                {selectedPlatform === "mnft" ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => choosePlatform(null)}
                  >
                    <CloseIcon className="absolute -top-7 -right-4" />
                    <motion.img
                      animate={{
                        scale: [0, 1],
                        rotate: [0, 90, 120, 210, 300, 360],
                        borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                      }}
                      src="/assets/qrs/mnft-qr.png"
                    />
                  </div>
                ) : null}
                <div className="text-center my-[30px] font-bold">
                  Other login methods
                </div>
                <div className="flex">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0 }}
                    onClick={() => choosePlatform("meta")}
                    src="/assets/logos/MetaMask-Logo-PNG6.png"
                    className="h-[70px] -mr-[20px] cursor-pointer"
                    onMouseEnter={play}
                  />
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.6 }}
                    onClick={() => choosePlatform("mchat")}
                    src="/assets/logos/mongolchat.png"
                    className="h-[70px] cursor-pointer"
                    onMouseEnter={play}
                  />
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.6 }}
                    onClick={() => choosePlatform("mnft")}
                    src="/assets/logos/ogmain.png"
                    className="h-[40px] mt-[15px] cursor-pointer "
                    onMouseEnter={play}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
