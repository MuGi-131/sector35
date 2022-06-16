import { Container } from "./Container";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { Advertisement } from "./Advertisement";
export function MainLayout({ children }) {
  return (
    <div className="">
      <div className="h-screen relative">
        <Header />
        <div className="flex">
          <div className="absolute top-[50%]">0</div>
          <Container>{children}</Container>
          {/* <Sider /> */}

          <Advertisement />
        </div>
      </div>
    </div>
  );
}
