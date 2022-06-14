import { motion } from "framer-motion";
export function LaunchAnimation() {
  return (
    <div className="bg-black h-screen">
      <motion.img
        animate={{
          scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          borderRadius: [
            "100%",
            "100%",
            "100%",
            "100%",
            "100%",
            "50%",
            "40%",
            "30%",
            "20%",
            "10%",
            "0%",
          ],
        }}
        className="h-screen w-full"
        src="https://thumbs.gfycat.com/PastelGoldenJuliabutterfly-size_restricted.gif"
      />
    </div>
  );
}
