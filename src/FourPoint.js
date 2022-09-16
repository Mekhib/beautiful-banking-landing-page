import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./panels.css"
import Image from "react-bootstrap/Image";
import fourPoint from "../src/assets/fourPoints.jpg";

function FourPoint() {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center" }}>
        <Image fluid={true} src={fourPoint} width={1000} />
      </div>
    </div>
  );
}

export default FourPoint;
