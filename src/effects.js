import { useState } from 'react'
import { search, getDetails } from './services/characters'

export function useCharacterSearch() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function searchCharacters(term) {
    setIsLoading(true)
    const data = await search(term)
    setResults(data)
    setIsLoading(false)
  }

  return [{ results, isLoading }, searchCharacters]
}

export function useCharacterDetails() {
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
