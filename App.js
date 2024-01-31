import React from "react";
import ReactDOM from "react-dom/client";
import Multiplestepform from "./src/components/Multiplestepform";

import "./style.css";
export const App = () => {
  return (
    <>
      <Multiplestepform />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
