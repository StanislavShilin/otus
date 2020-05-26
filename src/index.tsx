import React from "react";
import { render } from "react-dom";
import { InteractiveField } from "./components";

render(
  <InteractiveField xSize={3} ySize={3} />,
  document.getElementById("root")
);
