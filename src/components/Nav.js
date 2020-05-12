import React from "react";
// import pics from "../assets/img/index";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import NavButton from "./NavButton";

export default function Nav({ pics, changePic }) {
  const picsKeys = Object.keys(pics);
  return (
    <nav className="flex-row justify-center">
      {picsKeys.map((pic) => {
        return (
          <Link to={`/pics${pics[pic].path}`}>
            <NavButton pic={pics[pic]} changePic={changePic}></NavButton>
          </Link>
        );
      })}
    </nav>
  );
}
