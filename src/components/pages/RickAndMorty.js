import React from "react";
import RickAndMortyLogo from "../../images/rick-and-morty.svg";
import "../../components/pages/styles/RickAndMorty.css";
import RickAndMortyList from "./RickAndMortyList";

class RickAndMorty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("1. constructor");
  }
  componentDidMount() {
    console.log("3. componentDidMount");
    this.setState({
      data: [
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/1",
          },
          location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/20",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            // ...
          ],
          url: "https://rickandmortyapi.com/api/character/2",
          created: "2017-11-04T18:50:21.651Z",
        },
      ],
    });
  }

  render() {
    console.log("2. render");
    return (
      <React.Fragment>
        <div className="Rick_And_Morty">
          <div className="Rick_And_Morty__hero">
            <div className="Rick_And_Morty__container">
              <img
                className="Logo"
                src={RickAndMortyLogo}
                alt="rick and morty logo"
              />
            </div>
          </div>
        </div>
        <div className="Characters__container">
          <div className="Characters__list">
            <RickAndMortyList characters={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RickAndMorty;
