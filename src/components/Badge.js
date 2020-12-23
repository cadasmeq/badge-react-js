import React from "react";

import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://en.gravatar.com/userimage/193409316/4fff68e5dd6d8d1024f34605b04c41f1.jpg?size=200"
            alt="Avatar"
          />
          <h1>
            Cristopher
            <br />
            Adasme
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@cadasmeq</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
