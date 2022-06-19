export default function StoryLayout(props) {
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
          align-items: center;
          background: black;
          color: rgb(229, 177, 58);
          display: flex;
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          height: 100vh;
          justify-content: center;
          line-height: 1.25;
          overflow: hidden;
        }
        div[id='root'] {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
