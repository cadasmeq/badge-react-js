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
            src="https://gravatar.com/avatar?d=identicon"
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
