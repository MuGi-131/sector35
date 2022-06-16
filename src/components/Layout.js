import Header from "./Header";
import NavBar from "./NavBar";
import Marketing from "./Marketing";
import { useState, useEffect } from "react";

// export default function Layout(props) {
//   return (
//     <div className="conti">
//       <div className="contin">
//         <Header />
//         <div className="continn">
//           <div className="Contentnn">{props.children}</div>
//           <Marketing />
//         </div>
//         <NavBar />
//       </div>
//     </div>
//   );
// }
const layoutStyle = {
  display: "flex",
};

const layoutChildren = {
  width: "100%",
  height: "100%",
  paddingRight: "15px",
  borderRadius: "8px",
};

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Layout(props) {
  const size = useWindowSize();

  return (
    <>
      <CssBaseline />
      <Desktop>{props.children}</Desktop>
    </>
  );
}

function Mobile(props) {
  return (
    <Container
      className="Layout-container"
      style={layoutStyle}
      sx={{ bgcolor: "#000", height: "100vh", width: "100vw" }}
    >
      {props.children}
      {/* <div className="Layout-container" style={layoutStyle}> /}
        <div className="Layout-children" style={layoutChildren}>
          {props.children}
        </div>
      {/ </div> */}
    </Container>
  );
}

function Desktop(props) {
  return (
    <Container sx={{ bgcolor: "#000", height: "100vh", width: "100vw" }}>
      <div className="Layout-container" style={layoutStyle}>
        <div className="Layout-children" style={layoutChildren}>
          {props.children}
        </div>
      </div>
    </Container>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}
