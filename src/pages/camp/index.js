import { MainLayout } from "../../layout/MainLayout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Battle } from "/src/components/boss/battle";
import { Rank } from "/src/components/rank";
import { Level1 } from "./level1";
import { Level2 } from "./level2";

export default function Index({}) {
  const bossKill = false;
  return (
    <MainLayout>
      <AwesomeSlider
        // className="absolute h-0 w-0"
        fillParent={true}
        infinite={false}
        bullets={false}
        organicArrows={false}
        mobileTouch={false}
        animation="fallAnimation"
      >
        <div className="w-full h-full bg-cover bg-[url('assets/camp/1.png')]">
          <Level1 />
        </div>
        <div className="w-full h-full bg-cover bg-[url('assets/camp/1.png')]">
          <Level1 />
        </div>
      </AwesomeSlider>
    </MainLayout>
  );
}
