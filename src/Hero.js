import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image'
import hero from "../src/assets/Hero.jpg"
import "./panels.css";

function Hero({ children }) {
  return (
<div>
  <div style={{display: "flex", justifyContent:"center"}}>
   <Image fluid={true} src={hero}  width={1000}/> 
  </div>    
</div>

  
  );
}

export default Hero;
