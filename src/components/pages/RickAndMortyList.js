import React from "react";
import "../../components/pages/styles/RickAndMortyList.css";

class RickAndMortyList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled CharacterList">
        {this.props.characters.map((character) => {
          return (
            <li key={character.id} className="CharacterListItem">
              <img
                src={character.image}
                alt=""
                className="CharacterListItem__avatar"
              />

              <div>
                <strong>{character.name}</strong>
                <div>
                  <i>Species:</i> {character.species} - <i>Gender: </i>
                  {character.gender}
                </div>
                <div>
                  <i>Status:</i> {character.status} - <i>Origin: </i>
                  {character.origin.name}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default RickAndMortyList;
