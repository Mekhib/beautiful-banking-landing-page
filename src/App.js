import logo from './logo.svg';
import './App.css';
import Container from './Container';
import NavBar from './NavBar';
import Hero from './Hero';
import FourPoint from "./FourPoint"
import Showcase from "./Showcase";
import Contact from "./Contact";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <FourPoint />
      <Showcase />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button variant="primary" style={{ fontSize: "25px"}}>
          <strong>Click To Download The Beta! </strong>
        </Button>{" "}
      </div>
      <Contact />
    </Container>
  );
}

export default App;
