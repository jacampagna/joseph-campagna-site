import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import {
  Toggle,
  Sidebar,
  MainColumn,
  AboutMe,
  CsProjects,
  Bme,
  Research
} from "./components.jsx";

function App() {
  document.title = "Joseph Campagna";
  return (
    <div className="App">
      <Sidebar />
      <Toggle />
      <MainColumn />
      <AboutMe />
      <CsProjects />
      <Bme />
      <Research />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
