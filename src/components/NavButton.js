import React from "react";

export default function NavButton({ pic, changePic }) {
  return (
    <button className="nav-button">
      <img
        src={pic.thumb}
        alt={pic.name}
        // height="80"
        // width="auto"
        onClick={() => {
          changePic(pic);
        }}
      />
    </button>
  );
}
