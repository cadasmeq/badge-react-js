import React from "react";
import ReactDOM from "react-dom";

import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Elon"
    lastName="Owlsk"
    avatarUrl="https://en.gravatar.com/userimage/193409316/4fff68e5dd6d8d1024f34605b04c41f1.jpg?size=200"
    jobTitle="Frontend Engineer"
    twitter="eowlsk"
  />,

  container
);
