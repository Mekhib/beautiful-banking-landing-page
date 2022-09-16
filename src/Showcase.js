import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import showcase from "../src/assets/Showcase.png";

function Showcase() {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", overflow: "hidden" }}>
        <Image fluid={true} src={showcase} width={1000} style={{margin: 10, objectFit: "cover"}} />
      </div>
    </div>
  );
}

export default Showcase;
