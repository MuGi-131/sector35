import { HomeLayout } from "../../layout/HomeLayout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Battle } from "/src/components/battle/battle";
import { Rank } from "/src/components/rank";

export default function Index({}) {
  return (
    <HomeLayout>
      <AwesomeSlider
        // className="absolute h-0 w-0"
        fillParent={true}
        infinite={true}
        bullets={true}
        organicArrows={true}
        animation="scaleOutAnimation"
      >
        <div className="w-full h-full bg-cover bg-[url('assets/space.jpeg')]">yes</div>
        <div className="w-full h-full bg-cover bg-[url('assets/space.jpeg')]">test</div>
      </AwesomeSlider>
    </HomeLayout>
  );
}
