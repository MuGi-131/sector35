import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

const CarouselComp = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });

  let slides = [
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="2"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="3"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="4"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="5"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="6"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="7"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
          alt="8"
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  return (
    <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
};

export default CarouselComp;
