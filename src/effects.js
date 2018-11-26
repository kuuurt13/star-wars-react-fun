import { useState } from 'react'
import { search, getDetails } from './services/characters'

export function useCharacterSearch() {
  const [results, setResults] = useState([])

  function searchCharacters(term) {
    search(term).then(setResults)
  }

  return [results, searchCharacters]
}

export function useCharacterDetail() {
  const [character, setCharacter] = useState(null)

  function getCharacter(id) {
    if (id === null) {
      setCharacter(null)
    } else {
      getDetails(id).then(setCharacter)
    }
  }

  return [character, getCharacter]
}
