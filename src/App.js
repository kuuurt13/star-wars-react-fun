import React from 'react'
import Search from './screens/Search'
import CharacterDetail from './screens/CharacterDetails'
import { useCharacterSearch, useCharacterDetail } from './effects'

const App = () => {
  const [results, searchCharacters] = useCharacterSearch()
  const [character, getCharacter] = useCharacterDetail()

  function clearCharacter() {
    getCharacter(null)
  }

  return (
    <div>
      {character ? (
        <CharacterDetail character={character} onClose={clearCharacter} />
      ) : (
        <Search
          onSearch={searchCharacters}
          onSelect={getCharacter}
          results={results}
        />
      )}
    </div>
  )
}

export default App
