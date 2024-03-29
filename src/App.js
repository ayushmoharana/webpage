import "./App.css";
import { useState } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Cv from "./Cv";
import gallery from "./gallery";

function App() {
  const [elements, setElements] = useState([
    { id: 0, name: "Home", selected: true },
    { id: 1, name: "Research", selected: false },
    { id: 2, name: "CV", selected: false },
    { id: 3, name: "Gallery", selected: false },
  ]);
  return (
    <div className="App">
      <Navbar elements={elements} setElements={setElements} />
      {elements.find((el) => el.id === 0 && el.selected === true) ? (
        <Content />
      ) : null}
      {elements.find((el) => el.id === 1 && el.selected === true) ? (
        <Projects />
      ) : null}
      {elements.find((el) => el.id === 2 && el.selected === true) ? (
        <Cv />
      ) : null}
      {elements.find((el) => el.id === 3 && el.selected === true) ? (
        <gallery />
      ) : null}
    </div>
  );
}

export default App;
