import React from "react";
import Nav from "react-bootstrap/Nav";


function NavBar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home" style={{ color: "white", fontSize: 25 }}>
          Landing Page
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          style={{ color: "white", fontSize: 25 }}
          href="https://www.linkedin.com/in/mekhithedev"
        >
          About The Dev
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
