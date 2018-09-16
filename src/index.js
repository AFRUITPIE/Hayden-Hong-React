import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LineFlowAnimation from "./lineFlowAnimation";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div className="body-text">
    <img src="Icon.png" width="50" alt="app icon" />
    <p>Convertify privacy policy</p>
    <p>
      Convertify itself uses no user tracking. Convertify gathers no data, logs nothing, and the
      developer cannot view anything that you are using Convertify for.
    </p>
    <p>
      A Spotify Login is required, and thus{" "}
      <a href="https://www.spotify.com/us/legal/privacy-policy/">Spotify's privacy policy</a> is
      applicable.
    </p>
    <p>
      Apple Music is also used, which means that{" "}
      <a href="https://support.apple.com/en-us/HT204881">Apple Music's privacy policy</a> is also
      applicable.
    </p>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
