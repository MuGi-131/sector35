import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import StoryLayout from "/src/layout/StoryLayout";
import { useRouter } from "next/router";

function App() {
  const intro = useRef();
  const title = useRef();
  const content = useRef();
  const [playMusic, setPlayMusic] = useState(1);
  const [redirectSeconds, setRedirectSeconds] = useState(65);
  const router = useRouter();

  function musicPlay() {
    document.getElementById("player")?.play();
  }

  useEffect(() => {
    setPlayMusic(playMusic + 1);
    musicPlay();
  }, [playMusic]);

  // text animation
  useEffect(() => {
    let tl = new gsap.timeline();

    tl.to(intro.current, {
      opacity: 1,
      delay: 1,
      duration: 4.5,
    })
      .to(intro.current, {
        opacity: 0,
        duration: 1.5,
      })
      .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
      .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
      .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
      .to(content.current, { top: "-170%", duration: 200 });
  }, []);

  // redirect after few seconds
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push("/main");
      return;
    }

    setTimeout(() => {
      console.log(redirectSeconds);
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);

  return (
    <StoryLayout>
      <div className="w-full h-full w-screen h-screen">
        <audio id="player" autoPlay controls className="hidden">
          <source src="/assets/audio/starwars.mp3" type="audio/mp3" />
        </audio>
        <section className="intro" ref={intro}>
          <p>
            A long time ago, in a galaxy far,
            <br /> far away....
          </p>
        </section>
        <section className="title" ref={title}>
          <img src="assets/logo.png" alt="infinite wars" />
        </section>
        <section className="crawl">
          <div className="content" ref={content}>
            <h1 className="episode-number">Chapter 1</h1>
            <h2 className="episode-title">THE DARKNESS AWAKENS</h2>
            <p>
              Somewhere far far away in galaxy a mysterious DARK FORCE is on the rise to
              cause imbalance and distruction in the meta-verse and in a desperate attempt
              to stop them SPIRITS have SUMMENED a CHOSEN champions (players) through a
              magical portal to save SECTOR35 where THE WOLVES OF CRYPTO STREET reside.
            </p>
            <p>
              With the support of the SPIRITS and THE WOLVES OF CRYPTO STREET these brave
              CHAMPIONS leads a brave RESISTANCE to bring peace...
            </p>
          </div>
        </section>
      </div>
    </StoryLayout>
  );
}

export default App;
