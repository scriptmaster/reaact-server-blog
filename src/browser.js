import React from "react";
import { render } from "react-dom";


import App from "./app";

let props = { origin: "Browser" };

render(<App {...props} />, document.getElementById('root'));
