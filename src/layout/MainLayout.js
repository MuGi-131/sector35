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
        <style jsx global>{`
          :global(.MuiButton-root) {
            letter-spacing: 0.0892857143em;
          }
          :global(html),
          :globa(body),
          :global(#__next) {
            font-family: elevon, sans-serif;
            font-weight: 700;
            font-style: normal;
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            background-color: black;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
          }
          :global(h1) {
            font-family: elevon, sans-serif;
            font-weight: 700;
            font-style: normal;
          }
        `}</style>
      </div>
    </div>
  );
}
