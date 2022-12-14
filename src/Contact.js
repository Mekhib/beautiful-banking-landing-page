import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import contact from "../src/assets/Contact.png";
import "./panels.css";

function Contact() {
  return (
    <div>
      <div style={{ paddingTop: 10, display: "flex", justifyContent: "center" }}>
        <Image fluid={true} src={contact} width={1000} />
      </div>
    </div>
  );
}

export default Contact;
