import React from "react";

import "./BadgeNew.css";
import header from "../../images/badge-header.svg";
import Navbar from "../../components/Navbar";
import Badge from "../Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                avatarUrl="https://en.gravatar.com/userimage/193409316/4fff68e5dd6d8d1024f34605b04c41f1.jpg?size=200"
                firstName="Naivy"
                lastName="Owly"
                jobTitle="CEO - IWATCHU"
                twitter="watchyou"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
