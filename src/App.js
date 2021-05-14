import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import CitySelector from "./components/CitySelector.js";

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
};

export default App;
