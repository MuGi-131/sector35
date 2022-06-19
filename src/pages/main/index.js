import { MainLayout } from '../../layout/MainLayout';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Battle } from '/src/components/battle/battle';
import { Rank } from '/src/components/rank';

export default function Index({}) {
  return (
    <MainLayout>
      <AwesomeSlider
        // className="absolute h-0 w-0"
        fillParent={true}
        infinite={false}
        bullets={false}
        organicArrows={false}
        animation="foldOutAnimation"
      >
        <div className="w-full h-full bg-cover bg-[url('assets/bg_location/land1.png')]">
          <Battle />
        </div>
        <div className="w-full h-full bg-cover bg-[url('assets/bg_location/land1.png')]">
          <Rank />
        </div>
      </AwesomeSlider>
    </MainLayout>
  );
}
