export default function LoginLayout(props) {
  return (
    <div className="w-[100vw] h-[100vh]">
      {props.children}
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
  );
}
