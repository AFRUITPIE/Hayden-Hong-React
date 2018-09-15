import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LineFlowAnimation from "./lineFlowAnimation";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div className="body-text">
    <img src="Icon.png" width="50" alt="app icon" />
    <LineFlowAnimation
      lines={[
        "Convertify - Share Music",
        "Open music in the correct app.",
        "Just copy a link to Apple Music to open in Spotify,",
        "or copy a link from Spotify to open in Apple Music."
      ]}
    />
    <a href="https://itunes.apple.com/us/app/convertify-share-music/id1424728187">App Store</a>
    <a href="http://haydenhong.com/convertify/privacy-policy/">Privacy Policy</a>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
