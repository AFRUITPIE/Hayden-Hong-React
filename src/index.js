import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LineFlowAnimation from "./lineFlowAnimation";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <LineFlowAnimation
      lines={[
        "Hello.",
        "My name is Hayden Hong.",
        "I am a software development engineer at Amazon.",
        "I also make iOS apps in my spare time."
      ]}
    />
    <a href="https://github.com/AFRUITPIE">GitHub</a>
    <a href="https://www.linkedin.com/in/hayden-hong-software/">LinkedIn</a>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
