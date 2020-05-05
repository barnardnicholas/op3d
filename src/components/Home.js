import React from "react";
import HeroHeader from "./HeroHeader";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <main>
        <HeroHeader />
        <section>
          <p>Desktop Only - move your mouse to tilt the photographs</p>
        </section>
        <Nav />
      </main>
    </>
  );
}
