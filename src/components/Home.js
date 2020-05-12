import React from "react";
import Pic from "./Pic";

import pics from "../assets/img/index";

export default function Home() {
  return (
    <main>
      <Pic pic={pics.op3dLogo} />
    </main>
  );
}
