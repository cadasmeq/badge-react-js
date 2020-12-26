import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./components/Badge";

import App from "./components/App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
