import React from "react";
import ReactDOM from "react-dom";

import Badge from "./components/Badge";
import BadgeNew from "./components/pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<BadgeNew />, container);
