import { Button, Drawer } from "@mui/material";
import React from "react";
export function MobileSidebar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state });
  };
  return (
    <div className="bg-yellow-300 md:hidden block h-[50px] aboslute top-0">
      <Button onClick={toggleDrawer(true)}>asdf</Button>
      <Drawer anchor="right" open={state} onClose={() => setState(false)}>
        <div className="w-[100vw]">aklsdjfklajsdklfjaklsdjfklasjlk</div>
      </Drawer>
    </div>
  );
}
