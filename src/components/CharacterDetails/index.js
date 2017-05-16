import React from 'react';
import './styles.css';

export default ({ character, clearCharacterDetails }) =>
<section className="character-details">
  <h2 className="character-details__header">{character.name}</h2>
  <div className="character-details__clear" onClick={clearCharacterDetails}>X</div>
  <div className="character-details__sections">
    <div className="character-details__detail">Gender: {character.gender}</div>
    <div className="character-details__detail">Birth Year: {character.birth_year}</div>
    <div className="character-details__detail">Height: {character.height}</div>
    <div className="character-details__detail">Mass: {character.mass}</div>
  </div>
  <div className="character-details__sections">
    <div className="character-details__detail">Eye Color: {character.eye_color}</div>
    <div className="character-details__detail">Hair Color: {character.hair_color}</div>
    <div className="character-details__detail">Skin Color: {character.skin_color}</div>
  </div>
</section>
