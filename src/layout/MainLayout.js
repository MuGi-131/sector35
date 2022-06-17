import { Container } from './Container';
import { Header } from './Header';
import { Sider } from './Sider';
import { Advertisement } from './Advertisement';
export function MainLayout({ children }) {
  return (
    <div className="flex flex-col content-center justify-center w-[1050px] mx-auto bg-black">
      {/* <div className="flex content-center justify-center"> */}
      {/* <div className="  "> */}
      <Header />
      <div className="flex">
        <Container>{children}</Container>
        {/* <Sider /> */}

        <Advertisement />
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
