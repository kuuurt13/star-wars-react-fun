import React, { Fragment } from 'react'
import { Search } from './containers'
import { CharacterDetails } from './components'
import { useCharacterDetails } from './effects'
import starWarsLogo from './assets/images/star-wars-logo.png'

const App = () => {
  const [character, getCharacter] = useCharacterDetails()

  function clearCharacter() {
    getCharacter(null)
  }

  return (
    <Fragment>
      <img
        className="main__img"
        src={starWarsLogo}
        alt="Star Wars: React App"
      />
      {character ? (
        <CharacterDetails character={character} onClose={clearCharacter} />
      ) : (
        <Search onSelect={getCharacter} />
      )}
    </Fragment>
  )
}

export default App
