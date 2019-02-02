import React from 'react'
import PropTypes from 'prop-types'
import './CharacterDetails.css'

const CharacterDetails = ({ character, onClose }) => (
  <section className="character-details">
    <h2 className="character-details__header">{character.name}</h2>
    <div className="character-details__clear" onClick={onClose}>
      X
    </div>
    <div className="character-details__sections">
      <div className="character-details__detail">
        Gender: {character.gender}
      </div>
      <div className="character-details__detail">
        Birth Year: {character.birth_year}
      </div>
      <div className="character-details__detail">
        Height: {character.height}
      </div>
      <div className="character-details__detail">Mass: {character.mass}</div>
    </div>
    <div className="character-details__sections">
      <div className="character-details__detail">
        Eye Color: {character.eye_color}
      </div>
      <div className="character-details__detail">
        Hair Color: {character.hair_color}
      </div>
      <div className="character-details__detail">
        Skin Color: {character.skin_color}
      </div>
    </div>
  </section>
)

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    birth_year: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    eye_color: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
  }),
  onClose: PropTypes.func,
}

export default CharacterDetails
