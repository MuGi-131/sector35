import { Container } from './Container';
import { Header } from './Header';
import { Sider } from './Sider';
import { Advertisement } from './Advertisement';

export function MainLayout({ children }) {
  return (
    <div className="flex flex-col content-center justify-center border-4 rounded-sm w-[1050px] h-[500px] mx-auto bg-black">
      <Header />
      <div className="flex w-full h-full">
        <div className="w-full h-full relative">{children}</div>
        {/* <Container>{children}</Container> */}
        <Advertisement />
      </div>
    </div>
  );
}
