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
        "I am a student at the University of Washington.",
        "I love to code and I am passionate about software design."
      ]}
    />
    <a href="https://github.com/AFRUITPIE">GitHub</a>
    <a href="https://www.linkedin.com/in/hayden-hong-software/">LinkedIn</a>
    <a href="https://itunes.apple.com/us/app/convertify-share-music/id1424728187">Convertify iOS</a>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
