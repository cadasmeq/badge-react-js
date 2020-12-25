import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./components/Badge";
import BadgeNew from "./components/pages/BadgeNew";
import Badges from "./components/pages/Badges";

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
