import { MainLayout } from "../../layout/MainLayout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Battle } from "/src/components/boss/battle";
import { Rank } from "/src/components/rank";

export default function Index({}) {
  return (
    <MainLayout>
      <AwesomeSlider
        // className="absolute h-0 w-0"
        fillParent={true}
        infinite={false}
        bullets={false}
        organicArrows={false}
        animation="fallAnimation"
      >
        <div className="w-full h-full bg-cover bg-[url('assets/bg_location/land7.png')]">
          <Battle />
        </div>
      </AwesomeSlider>
    </MainLayout>
  );
}
