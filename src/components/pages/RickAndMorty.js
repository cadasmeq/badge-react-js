import React from "react";
import RickAndMortyLogo from "../../images/rick-and-morty.svg";
import "../../components/pages/styles/RickAndMorty.css";
import RickAndMortyList from "./RickAndMortyList";

import { CircleLoading } from "react-loadingg";

class RickAndMorty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
    console.log("1. constructor");
  }

  componentDidMount() {
    console.log("3. componentDidMount");
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

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
            {this.state.loading ? (
              <CircleLoading />
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.fetchCharacters()}
              >
                Get Characters
              </button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RickAndMorty;
