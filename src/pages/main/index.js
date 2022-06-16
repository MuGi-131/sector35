import Layout from "../../components/Layout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiArrowLeftBold } from "@mdi/js";
import { useState } from "react";

const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "red",
  opacity: 0.7,
  fontSize: "20px",
};

export default function Index({}) {
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);

  const handleMouse = () => setColor(true);
  const handleLeave = () => setColor(false);
  const handleMouse1 = () => setColor1(true);
  const handleLeave1 = () => setColor1(false);

  return (
    <Layout>
      <AwesomeSlider
        animation="foldOutAnimation"
        organicArrows={false}
        selected={0}
        buttonContentRight={
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
            }}
          >
            <Icon
              path={mdiArrowLeftBold}
              title="Next"
              size={1.5}
              horizontal
              vertical
              color={color1 ? "#03e9f4" : "#114c61"}
              onMouseEnter={handleMouse1}
              onMouseLeave={handleLeave1}
            />
          </motion.div>
        }
        buttonContentLeft={
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
            }}
          >
            <Icon
              path={mdiArrowLeftBold}
              title="Previous"
              size={1.5}
              horizontal
              vertical
              rotate={180}
              color={color ? "#03e9f4" : "#114c61"}
              onMouseEnter={handleMouse}
              onMouseLeave={handleLeave}
            />
          </motion.div>
        }
      >
        <div data-src="https://i.pinimg.com/originals/82/1c/0c/821c0c03eb334fca2f17b4b90f26624c.jpg" />
        <div data-src="http://www.theappguruz.com/app/uploads/2015/07/final-output.png" />
        <div data-src="https://i.pinimg.com/originals/86/63/f2/8663f2ea844c902ea3ee32baa27f23c9.jpg" />
      </AwesomeSlider>
    </Layout>
  );
}
