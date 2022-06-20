import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export function LaunchAnimation() {
  function musicPlay() {
    document.getElementById("player")?.play();
  }
  const [playMusic, setPlayMusic] = useState(1);
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(25);

  // redirect after few seconds
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push("/home");
      return;
    }

    setTimeout(() => {
      console.log(redirectSeconds);
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);

  useEffect(() => {
    setPlayMusic(playMusic + 1);
    musicPlay();
  }, [playMusic]);
  return (
    <div className="bg-black h-screen">
      <audio id="player" play={true} controls className="hidden">
        <source
          src="/assets/audio/ambiant-cinematic-drone-main-10526.mp3"
          type="audio/mp3"
        />
      </audio>
      <motion.img
        transition={{ delay: 0.5 }}
        animate={{
          // scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          // borderRadius: [
          //   "100%",
          //   "100%",
          //   "100%",
          //   "100%",
          //   "100%",
          //   "50%",
          //   "40%",
          //   "30%",
          //   "20%",
          //   "10%",
          //   "0%",
          // ],
          opacity: [
            "0%",
            "0%",
            "0%",
            "0%",
            "0%",
            "0%",
            "0%",
            "0%",
            "5%",
            "5%",
            "5%",
            "5%",
            "5%",
            "5%",
            "5%",
            "5%",
            "5%",
            "5%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "20%",
            "20%",
            "20%",
            "20%",
            "20%",
            "20%",
            "20%",
            "20%",
            "20%",
            "20%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "30%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "40%",
            "50%",
            "60%",
            "70%",
            "80%",
            "90%",
            "100%",
          ],
        }}
        className="h-screen w-full"
        src="https://thumbs.gfycat.com/PastelGoldenJuliabutterfly-size_restricted.gif"
      />
    </div>
  );
}
